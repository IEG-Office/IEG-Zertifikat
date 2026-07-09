# IEG Claude Academy

Eine interne Lern-Website (GitHub Pages) für IEG-Mitarbeiter zur
Claude-Zertifizierung. Verfügbar auf **Deutsch und Englisch** mit
Sprach-Toggle.

**Repo:** https://github.com/IEG-Office/IEG-Zertifikat
**Live:** https://ieg-office.github.io/IEG-Zertifikat/

> Reine statische Website — **kein Build-Schritt, kein Framework**:
> HTML + CSS + Vanilla-JavaScript. Extern werden nur Google Fonts und
> die Supabase-JS-Library (CDN) geladen. Supabase dient für Login und
> optionale Fortschritts-Synchronisation.

---

## ⚠️ WICHTIG — So starten Sie die Seite RICHTIG (lokal)

Wenn Sie `index.html` per Doppelklick öffnen, **funktioniert sie nicht
zuverlässig** (Browser blockieren lokale `fetch`/Skript-Ladevorgänge
über das `file://`-Protokoll).

### Lokal testen

```bash
cd IEG-Zertifikat
python3 -m http.server 8000
# Dann im Browser öffnen: http://localhost:8000
```

### Auf GitHub Pages hosten

Einfach in den `main`-Branch pushen, unter **Settings → Pages**
„Deploy from branch: main" aktivieren — dann funktioniert alles
automatisch unter der Pages-URL.

---

## 📚 Modul-Struktur

**10 Module (IDs 0–9)**, jedes mit einer **eigenen HTML-Seite pro
Sprache** im Ordner `modules/`. Danach folgt die **Abschlussprüfung**,
die in der Übersicht als **„Modul 10"** dargestellt wird.

| ID | Modul | Deutsche Datei | Englische Datei | Quiz | Dauer |
|----|-------|-----------------|-------------------|:----:|:-----:|
| 00 | Das Claude-Ökosystem im Überblick | `modules/modul-00.html` | `modules/modul-00.en.html` | 10 | 25 Min. |
| 01 | Claude — Der komplette Grundkurs (2026) | `modules/modul-01.html` | `modules/modul-01.en.html` | 10 | 45 Min. |
| 02 | Prompting und strukturierte Anweisungen | `modules/modul-02.html` | `modules/modul-02.en.html` | 10 | 60 Min. |
| 03 | Sicherer Umgang mit Daten und Tools | `modules/modul-03.html` | `modules/modul-03.en.html` | 7 | 15 Min. |
| 04 | Skills und wiederverwendbare Arbeitsabläufe | `modules/modul-04.html` | `modules/modul-04.en.html` | 5 | 30 Min. |
| 05 | Skills in Finance-Workflows | `modules/modul-05.html` | `modules/modul-05.en.html` | 10 | 30 Min. |
| 06 | Claude Cowork — Der autonome Desktop-Agent | `modules/modul-06.html` | `modules/modul-06.en.html` | 10 | 45 Min. |
| 07 | Claude in Microsoft Office (Excel & PowerPoint) | `modules/modul-07.html` | `modules/modul-07.en.html` | 10 | 30 Min. |
| 08 | @Claude in Slack — Claude Tag | `modules/modul-08.html` | `modules/modul-08.en.html` | 5 | 20 Min. |
| 09 | Umgang mit Nutzungslimits: Effizient mit Claude arbeiten | `modules/modul-09.html` | `modules/modul-09.en.html` | 6 | 20 Min. |

Insgesamt **83 Modul-Quizfragen**. Zusätzlich gibt es die
**Abschlussprüfung** (`FINAL_EXAM` / `FINAL_EXAM_EN`) mit aktuell
**46 Fragen**, Bestehensgrenze **70 %** (`PASS_THRESHOLD`).

---

## 🧠 Wie die Inhalte technisch aufgebaut sind (WICHTIG)

Es gibt zwei Content-Ebenen — bitte den Unterschied beachten, sonst
sucht man Text an der falschen Stelle:

1. **Fließtext der Module** steht **direkt in der jeweiligen
   `modules/modul-XX(.en).html`** (im `<main class="module-content">`).
   Das große Feld `content:` in `content.js` wird auf den Modulseiten
   **nicht** ausgegeben. Willst du den Lehrtext eines Moduls ändern,
   bearbeitest du also die HTML-Datei.

2. **Videos, Bilder und optionaler Zusatztext (`longContent`)** kommen
   aus `content.js` / `content.en.js` und werden von
   `modules/module.js` in den Platzhalter `<div id="dynamicContent">`
   der Modulseite injiziert.

Die **Modul-Übersichtskarten** auf der Startseite (`title`, `desc`,
`meta`, `duration`, Quiz) werden aus `CURRICULUM` (DE) bzw.
`CURRICULUM_EN` (EN) gerendert.

> Hinweis zu Videos: `module.js` wandelt YouTube-`embed`-URLs in ein
> anklickbares Vorschaubild (Link auf `watch?v=…`) um; nur bei nicht
> einbettbaren URLs entsteht ein direktes iframe.

---

## 🌍 DE/EN Sprachumschaltung — wie sie funktioniert

- Sprache wird im `localStorage` unter dem Key `ieg_lang` gespeichert
  (Default: `de`). Umschaltung über den Button oben rechts
  (`toggleLang()` in `i18n.js`).
- `i18n.js` ersetzt alle Elemente mit `data-i18n` (Text) bzw.
  `data-i18n-html` (HTML) und feuert danach das Event `ieg:langchange`.
  `app.js` und `module.js` rendern daraufhin ihre dynamischen Inhalte
  neu.
- `app.js` → `openModule()` leitet je nach Sprache weiter:
  EN → `modul-XX.en.html`, DE → `modul-XX.html`.
- `index.html` lädt zusätzlich `content.en.js`, damit auch die
  Übersichtskarten die Sprache wechseln.
- **UI-Texte** (Navigation, Buttons, Labels, Prüfungs-/Zertifikatstexte)
  liegen komplett in `i18n.js` unter `I18N.de` bzw. `I18N.en`.

⚠️ **Bekannter Fallstrick:** Neue Inhalte immer in **beiden** Sprachen
pflegen (`content.js` + `content.en.js`, ggf. `i18n.js` de + en).

---

## 🔐 Authentifizierung & Zugriff (Supabase)

- **`login.html`** führt die eigentliche Anmeldung/Registrierung über
  **Supabase** durch. Bei Erfolg setzt es die `localStorage`-Werte
  `ieg_logged_in = 'yes'` und `ieg_user_name` und leitet auf
  `index.html`. Passwort-Reset per E-Mail-Link (`reset.html`).
- **`index.html`** prüft im `<head>` lediglich das Flag
  `localStorage['ieg_logged_in'] === 'yes'` und leitet andernfalls auf
  `login.html` um.
- **`supabase-config.js`** enthält `SUPABASE_URL` und den
  `anon`/`public`-Key (an `window._SB_URL` / `window._SB_KEY`).

> ⚠️ **Aktuelle Einschränkung (bewusst so belassen):** Die
> **Modul-Seiten (`modules/modul-XX.html`) enthalten keinen
> Login-Guard** — nur `index.html` prüft das Flag. Wer einen Direktlink
> auf eine Modulseite hat, gelangt ohne Anmeldung dorthin. Dieser Guard
> ist ohnehin rein clientseitig (ein `localStorage`-Flag) und **kein
> echter Schutz**. Verbindlicher Zugriffsschutz muss über
> **Supabase Row-Level-Security** auf der Datenbank erfolgen.

**⚠️ Sicherheitshinweis für `supabase-config.js`:** Der
`anon`/`public`-Key darf im Frontend sichtbar sein (eingeschränkte
Rechte gemäß RLS). **Niemals** einen `service_role`-Key eintragen — der
hat volle DB-Rechte und darf nie im Browser-Code stehen. Die Zugangsdaten
liegen derzeit mehrfach vor (`supabase-config.js`, `modules/module.js`
und inline in `login.html`); bei einer Key-Rotation an **allen** Stellen
ändern.

---

## 📈 Fortschritt & Locking

- Fortschritt liegt lokal in `localStorage['ieg-academy-progress-v1']`
  (`completed[]`, `finalPassed`, `finalScore`, `completionDate`,
  `userName`, `credentialId`).
- **Locking:** Modul 0 ist immer frei; Modul *n* ist frei, sobald das
  Quiz von Modul *n−1* mit ≥ 70 % bestanden wurde. Die
  **Abschlussprüfung** ist frei, sobald **alle** Modul-IDs abgeschlossen
  sind.
- **Supabase-Sync:** Ist der Nutzer eingeloggt, wird der Fortschritt in
  die Tabelle `user_progress` geschrieben (Spalten `user_id`,
  `completed_modules`, `final_passed`, `final_score`, `completion_date`)
  und beim Laden mit dem lokalen Stand zusammengeführt.

---

## 🎓 Abschlussprüfung & Zertifikat

- Eigenständiger, **zeitgesteuerter Prüfungsmodus** in `app.js`:
  40-Minuten-Timer, Fragen-Markierung (Flag), Bestätigungsdialog,
  automatische Abgabe bei Zeitablauf und Wiederaufnahme aus
  `localStorage['ieg-academy-final-exam-v1']`.
- Bei ≥ 70 % wird `finalPassed` gesetzt; danach wird das persönliche
  **Zertifikat** (Name, generierte Credential-ID, Datum) in `app.js`
  erzeugt und über ein Druckfenster als PDF ausgegeben
  (`printCertificate()`).

---

## ✍️ Inhalte hinzufügen / ändern

### Quiz- oder Prüfungsfrage
In `content.js` (DE) **und** `content.en.js` (EN). Frageobjekt-Format:

```javascript
{
  q: 'Ihre Frage hier?',
  options: ['Antwort A', 'Antwort B', 'Antwort C', 'Antwort D'],
  correct: 1,  // 0=A, 1=B, 2=C, 3=D
  explanation: 'Erklärung nach Auswahl'
}
```

Modul-Quiz: im jeweiligen Modul-Objekt unter `quiz: [...]`.
Abschlussprüfung: in `FINAL_EXAM` (DE) bzw. `FINAL_EXAM_EN` (EN).

### Video / Bild
Im `videos:`- bzw. `images:`-Array des Moduls in **beiden**
Content-Dateien:

```javascript
videos: [
  { url: 'https://www.youtube.com/embed/VIDEO_ID', title: 'Titel', caption: 'Video 1.1 · Beschreibung (5:32)' },
],
images: [
  { src: '../assets/grafik-1.png', alt: 'Beschreibung', caption: 'Abbildung 1.1 · Quelle: …' },
],
```
(Bilddateien vorher nach `assets/` legen.)

### Modul-Fließtext
Direkt in `modules/modul-XX.html` (DE) und `modules/modul-XX.en.html`
(EN), innerhalb von `<main class="module-content">`.

### UI-Texte / Labels
In `i18n.js` unter `I18N.de` und `I18N.en`.

---

## ➕ Neues Modul hinzufügen (Checkliste)

1. Neues Objekt im `CURRICULUM`-Array in `content.js` anlegen
   (fortlaufende `id`, passende `number` als zweistelliger String).
2. Dasselbe auf Englisch im `CURRICULUM_EN`-Array in `content.en.js`
   (dort gilt: `var`, **kein** `PASS_THRESHOLD`).
3. Fragen für die Abschlussprüfung bei Bedarf in `FINAL_EXAM` **und**
   `FINAL_EXAM_EN` ergänzen.
4. `modules/modul-XX.html` (DE) erstellen — am besten eine bestehende
   Modulseite kopieren und nur `MODULE_ID`/Inhalt anpassen.
5. `modules/modul-XX.en.html` (EN) analog.
6. In `modules/module.js` die Grenze anpassen:
   `const hasNext = nextModuleId <= 9;`
   (9 = aktuell höchste Modul-ID; bei neuem höchsten Modul entsprechend
   erhöhen).
7. Vor dem Hochladen lokal prüfen:
   `node --check content.js` und `node --check content.en.js`.

---

## 📂 Dateistruktur

```
IEG-Zertifikat/
├── index.html               # Startseite (Übersicht); Login-Flag-Check im <head>
├── login.html               # Login/Registrierung (Supabase Auth)
├── reset.html               # Passwort-Reset (Supabase Auth)
├── supabase-config.js       # Supabase-URL + anon/public-Key
├── content.js               # ★ DE: CURRICULUM, FINAL_EXAM, PASS_THRESHOLD (=70)
├── content.en.js            # ★ EN: CURRICULUM_EN, FINAL_EXAM_EN (KEIN PASS_THRESHOLD!)
├── app.js                   # Startseiten-Logik: Rendering, Locking, Prüfung, Zertifikat, Sync
├── i18n.js                  # UI-Texte DE/EN + getLang()/t()/toggleLang()
├── styles.css               # Styles der Startseite (Fonts: Source Serif 4 / Inter)
├── assets/
│   ├── ieg-logo.png
│   └── modul-06-*.png       # eigene Bilder hier ablegen
├── modules/
│   ├── modul-00.html        # Modul 00 (DE) — Fließtext im HTML
│   ├── modul-00.en.html     # Modul 00 (EN)
│   ├── …                    # bis modul-09(.en).html
│   ├── module.js            # ⚠️ liegt HIER: Quiz-Engine, dynamischer Content, hasNext-Logik
│   └── module-styles.css    # Styles der Modulseiten (Fonts: Fraunces / Inter Tight)
└── README.md
```

> ⚠️ `module.js` und `module-styles.css` liegen im Ordner `modules/`,
> **nicht** im Projekt-Root.

---

## 📜 Ladeordnung (index.html)

`i18n.js` im `<head>`; am Seitenende in dieser Reihenfolge:
`content.en.js` → `content.js` → `app.js`.
Wichtig: `content.en.js` benutzt `var` und definiert **kein**
`PASS_THRESHOLD`, weil beide Content-Dateien im selben globalen Scope
geladen werden (sonst „Redeclaration"-Fehler).
Modulseiten laden zusätzlich `../content.js` und `module.js`.

---

## 🛠️ Bekannte Fallstricke

1. **Inhalte nur einsprachig gepflegt** — Videos/Fragen/Texte immer in
   `content.js` **und** `content.en.js` (bzw. `i18n.js` de + en) pflegen.
2. **`PASS_THRESHOLD` in `content.en.js`** — darf dort nicht stehen
   (Redeclaration-Fehler, da `content.js` danach geladen wird).
3. **`const` statt `var` in `content.en.js`** — kann Redeclaration-
   Fehler verursachen; in `content.en.js` `var` verwenden.
4. **`hasNext` in `modules/module.js` nicht angepasst** — Navigation
   zum nächsten Modul bricht. Aktuell `nextModuleId <= 9`.
5. **Modul-IDs müssen zum Dateinamen passen** — `id: 8` gehört zu
   `modul-08.html` / `modul-08.en.html`.
6. **Modul-Fließtext im falschen File gesucht** — der Text steht in der
   `modul-XX.html`, nicht in `content.js` (siehe Abschnitt „Wie die
   Inhalte technisch aufgebaut sind").
7. **Syntax vor Upload prüfen:** `node --check content.js` /
   `content.en.js`.

---

## 🔎 Offene Punkte (bewusst nicht geändert)

- **Kein Login-Guard auf Modulseiten** (siehe Abschnitt
  „Authentifizierung"). Verbindlicher Schutz gehört auf die Supabase-
  RLS-Ebene.
- **Modul 07 hat unterschiedlich viele Videos:** DE 2, EN 1. Bei
  Bedarf das fehlende englische Video im `videos:`-Array von
  `content.en.js` (Modul `id: 7`) ergänzen.

---

## Support

Bei Fragen zur Website oder zum Curriculum wenden Sie sich an Ihren
internen IEG-Ansprechpartner.

© 2026 IEG · Internes Schulungsmaterial · v4.1
