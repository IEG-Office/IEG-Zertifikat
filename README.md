# IEG Claude Academy

Eine interne Lern-Website (GitHub Pages) für IEG-Mitarbeiter zur
Claude-Zertifizierung. Verfügbar auf **Deutsch und Englisch** mit
Sprach-Toggle.

**Repo:** https://github.com/IEG-Office/IEG-Zertifikat
**Live:** https://ieg-office.github.io/IEG-Zertifikat/

> Diese Dokumentation wurde gegen den tatsächlichen Code-Stand geprüft
> und korrigiert. Stand: 2026-07-09.

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
„Deploy from branch: main" aktivieren — dann läuft alles automatisch
unter der Pages-URL.

---

## 🧱 Technik im Überblick

- Reine statische Website: **HTML + CSS + Vanilla-JavaScript**, kein
  Build-Schritt, kein Framework.
- Extern eingebunden werden nur **Google Fonts** und die
  **Supabase-JS-Library** (über das CDN `jsdelivr`).
- **Supabase** dient ausschließlich für **Login/Registrierung** und die
  optionale **serverseitige Fortschritts-Synchronisation**. Der Lern-
  und Quiz-Fortschritt funktioniert auch rein lokal über `localStorage`.

---

## 📚 Modul-Struktur

**10 Module (00–09)**, jedes mit einer **eigenen HTML-Seite pro Sprache**
im Ordner `modules/`:

| ID | Modul | Deutsche Datei | Englische Datei | Quiz-Fragen |
|----|-------|-----------------|-------------------|:---:|
| 00 | Das Claude-Ökosystem im Überblick | `modules/modul-00.html` | `modules/modul-00.en.html` | 10 |
| 01 | Claude — Der komplette Grundkurs (2026) | `modules/modul-01.html` | `modules/modul-01.en.html` | 10 |
| 02 | Prompting und strukturierte Anweisungen | `modules/modul-02.html` | `modules/modul-02.en.html` | 10 |
| 03 | Sicherer Umgang mit Daten und Tools | `modules/modul-03.html` | `modules/modul-03.en.html` | 7 |
| 04 | Skills und wiederverwendbare Arbeitsabläufe | `modules/modul-04.html` | `modules/modul-04.en.html` | 5 |
| 05 | Skills in Finance-Workflows | `modules/modul-05.html` | `modules/modul-05.en.html` | 10 |
| 06 | Claude Cowork — Der autonome Desktop-Agent | `modules/modul-06.html` | `modules/modul-06.en.html` | 10 |
| 07 | Claude in Microsoft Office (Excel & PowerPoint) | `modules/modul-07.html` | `modules/modul-07.en.html` | 10 |
| 08 | @Claude in Slack — Claude Tag | `modules/modul-08.html` | `modules/modul-08.en.html` | 5 |
| 09 | Umgang mit Nutzungslimits: Effizient mit Claude arbeiten | `modules/modul-09.html` | `modules/modul-09.en.html` | 6 |

Zusätzlich gibt es eine **Abschlussprüfung** (Final Exam) mit
**46 Fragen**, Zeitlimit **40 Minuten**, Bestehensgrenze **70 %**. In der
Curriculum-Übersicht erscheint die Abschlussprüfung als Karte mit der
Nummer **10** (sie ist aber kein reguläres Modul, sondern ein eigener
Prüfungs-Ablauf).

---

## 📂 Dateistruktur

```
IEG-Zertifikat/
├── index.html              # Startseite (Hero, Curriculum, Team, Zertifikat, Modals)
├── login.html              # Login-/Registrier-Seite (echte Supabase-Auth)
├── reset.html              # Passwort-Reset-Seite (Supabase Recovery)
├── supabase-config.js      # Supabase-URL + anon-Key → window._SB_URL / window._SB_KEY
├── content.js              # ★ Deutsche Inhalte: CURRICULUM, FINAL_EXAM, PASS_THRESHOLD (=70)
├── content.en.js           # ★ Englische Inhalte: CURRICULUM_EN, FINAL_EXAM_EN (KEIN PASS_THRESHOLD!)
├── app.js                  # Kernlogik der Startseite (Rendern, Locking, Final-Exam-Flow, Zertifikat, Sync)
├── i18n.js                 # UI-Texte DE/EN + getLang(), t(), toggleLang(), applyLang()
├── styles.css              # Stylesheet der Startseite (Fonts: Source Serif 4 + Inter)
├── assets/
│   ├── ieg-logo.png
│   ├── modul-06-cowork-files.png
│   └── modul-06-cowork-profile.png
├── modules/
│   ├── modul-00.html        # Modul 00 Deutsch
│   ├── modul-00.en.html     # Modul 00 Englisch
│   ├── ...                  # … bis Modul 09 (je DE/EN)
│   ├── modul-09.html
│   ├── modul-09.en.html
│   ├── module.js            # ⚠️ Liegt HIER, nicht im Root! Quiz-Engine, dynamische Inhalte, Nächstes-Modul-Sperre, Sync
│   └── module-styles.css    # Styles der Modulseiten (Fonts: Fraunces + Inter Tight)
└── README.md                # Diese Datei
```

> ⚠️ `module.js` und `module-styles.css` liegen im Ordner `modules/`,
> **nicht** im Projekt-Root.

---

## ⚙️ Ladeordnung & Zusammenspiel

**`index.html`** lädt im `<head>` zuerst `i18n.js` (die UI-Texte müssen
vor `app.js` bereitstehen). Am Seitenende folgen — in dieser Reihenfolge —
`content.en.js`, dann `content.js`, dann `app.js`.

- `content.en.js` wird **vor** `content.js` geladen. Beide leben im
  selben globalen Scope. Deshalb:
  - `content.en.js` benutzt `var` (nicht `const`), um Redeclaration-
    Fehler zu vermeiden.
  - `PASS_THRESHOLD` ist **nur** in `content.js` definiert (in
    `content.en.js` würde es einen Redeclaration-Fehler auslösen).

**Jede Modulseite** (`modules/modul-XX(.en).html`) lädt am Seitenende
`i18n.js`, `content.en.js`, `../content.js` und `module.js` und setzt vorher
die drei Konstanten `MODULE_ID`, `MODULE_TITLE` und `MODULE_QUIZ`.

---

## 🌍 DE/EN Sprachumschaltung

- Die gewählte Sprache wird im `localStorage` unter dem Key `ieg_lang`
  gespeichert (Default: `de`).
- Der Toggle-Button ruft `toggleLang()`; anschließend ersetzt
  `applyLang()` alle Elemente mit `data-i18n` (bzw. `data-i18n-html`) und
  feuert das Event `ieg:langchange`.
- `app.js` und `module.js` hören auf dieses Event und rendern ihre
  dynamischen Inhalte neu. `openModule()` in `app.js` leitet je nach
  Sprache auf `modul-XX.html` (DE) bzw. `modul-XX.en.html` (EN).
- **Videos** können pro Sprache unterschiedlich sein — in `content.js`
  und `content.en.js` jeweils separat im `videos:`-Array pflegen.

⚠️ **Fallstrick:** Bleibt die `videos:`-Liste in `content.en.js` leer
(`videos: []`), zeigt die englische Modulseite kein Video. Immer beide
Sprachversionen prüfen.

---

## 🧩 Inhalte pflegen — wo was WIRKLICH liegt

Jedes Modul-Objekt (in `CURRICULUM` / `CURRICULUM_EN`) hat die Felder:

```
id, number, meta, title, desc, duration, videos[], images[], longContent, content, quiz[]
```

**Wichtig — bitte genau lesen:**

- Der **eigentliche Lehrtext eines Moduls steht fest im jeweiligen
  `modules/modul-XX(.en).html`** (im Bereich `<main class="module-content">`).
- `module.js` rendert in den Platzhalter `<div id="dynamicContent">` nur
  **`videos`, `images` und `longContent`** aus `content.js` — **nicht**
  das Feld `content`.
- Das Feld **`content` wird aktuell nirgends ausgegeben** (Alt-Feld). Wer
  den Fließtext eines Moduls ändern will, bearbeitet also die
  **HTML-Datei**, nicht `content.js`.

### Video hinzufügen

In `content.js` (DE) **und** `content.en.js` (EN) das gewünschte Modul
(z. B. `id: 1`) suchen und die `videos:`-Liste anpassen:

```javascript
videos: [
  {
    url: 'https://www.youtube.com/embed/DEINE_VIDEO_ID',
    title: 'Titel des Videos',
    caption: 'Video 1.1 · Kurze Beschreibung (5:32)'
  },
],
```

Hinweis: `module.js` wandelt YouTube-`embed`-URLs automatisch in ein
anklickbares **Vorschaubild** (Thumbnail-Link auf `watch?v=…`) um. Nur
wenn keine YouTube-ID erkannt wird, wird ein `<iframe>` eingebettet.

**So bekommen Sie die Video-URL:**
- **YouTube:** Video → „Teilen" → „Einbetten" → den `src`-Link aus dem
  iframe kopieren (`https://www.youtube.com/embed/…`).
- **Vimeo:** Video → „Share" → „Embed" → `src`-Link kopieren
  (`https://player.vimeo.com/video/…`).

### Bild hinzufügen

1. Bild in `assets/` ablegen (z. B. `assets/grafik-1.png`).
2. In `content.js` bzw. `content.en.js` bei `images:`:

```javascript
images: [
  {
    src: '../assets/grafik-1.png',
    alt: 'Kurze Bildbeschreibung',
    caption: 'Abbildung 1.1 · Quelle: IEG Internal Analysis'
  },
],
```

### Zusatztext einblenden (`longContent`)

Wird — im Gegensatz zu `content` — von `module.js` in `#dynamicContent`
ausgegeben:

```javascript
longContent: `
  <h2>Zusätzliche Vertiefung</h2>
  <p>Text mit <strong>fett</strong> und <em>kursiv</em>.</p>
  <div class="callout">
    <div class="callout-title">Wichtiger Hinweis</div>
    <p>Hervorgehobene Box.</p>
  </div>
`,
```

---

## 🎓 Quiz- und Prüfungsfragen ändern

In `content.js` (DE) bzw. `content.en.js` (EN) hat jedes Modul ein
`quiz:`-Feld. Jede Frage hat dieselbe Struktur wie die Prüfungsfragen:

```javascript
quiz: [
  {
    q: 'Ihre Frage hier?',
    options: ['Antwort A', 'Antwort B', 'Antwort C', 'Antwort D'],
    correct: 1,  // Index der richtigen Antwort: 0=A, 1=B, 2=C, 3=D
    explanation: 'Erklärung, die nach der Auswahl erscheint.'
  },
],
```

Die **Abschlussprüfung** liegt in `FINAL_EXAM` (`content.js`, DE) bzw.
`FINAL_EXAM_EN` (`content.en.js`, EN) — aktuell **46 Fragen** je Sprache.
Die Bestehensgrenze `PASS_THRESHOLD` (= 70) ist **nur** in `content.js`
definiert.

---

## 🔒 Locking-System

- Modul 00 ist immer freigeschaltet.
- Modul *n* wird freigeschaltet, sobald das Quiz von Modul *n−1* mit
  ≥ 70 % bestanden ist (Prüfung: `state.completed` enthält *n−1*).
- Die **Abschlussprüfung** ist frei, wenn **alle** Module abgeschlossen
  sind.
- Ein **Vorschau-Modus** auf der Startseite hebt die Sperren temporär auf
  (`togglePreviewMode()`), ohne den Fortschritt zu verändern.

Der Fortschritt wird im `localStorage` gespeichert und (bei Login)
zusätzlich mit Supabase synchronisiert.

---

## 💾 Fortschritt & Persistenz

**localStorage-Keys:**

| Key | Zweck |
|---|---|
| `ieg_logged_in` | Login-Flag (`'yes'`), von `login.html` gesetzt, von `index.html` geprüft |
| `ieg_user_name` | Anzeigename des Nutzers |
| `ieg_lang` | Gewählte Sprache (`de` / `en`) |
| `ieg-academy-progress-v1` | Lernfortschritt (`completed`, `finalPassed`, `finalScore`, `completionDate`, `credentialId`) |
| `ieg-academy-quiz-progress-v1` | Zwischenstand laufender Modul-Quizze |
| `ieg-academy-final-exam-v1` | Laufende Abschlussprüfung (Antworten, Flags, Restzeit) für Wiederaufnahme |

**Supabase-Sync:** Bei angemeldeten Nutzern schreibt die App den
Fortschritt in die Tabelle **`user_progress`** mit den Spalten
`user_id`, `completed_modules`, `final_passed`, `final_score`,
`completion_date`. Beim Laden werden lokaler und entfernter Stand
zusammengeführt (Vereinigung der abgeschlossenen Module, höherer Score
gewinnt).

---

## 🧪 Abschlussprüfung (Ablauf)

Der Prüfungs-Flow liegt in `app.js` und ist eigenständig:

- **40-Minuten-Timer** mit Auto-Abgabe bei Zeitablauf.
- Fragen lassen sich **markieren (Flag)** und in beliebiger Reihenfolge
  bearbeiten; vor der Abgabe erscheint ein **Bestätigungsdialog** (offene/
  markierte Fragen werden angezeigt).
- **Wiederaufnahme:** Wird die Prüfung unterbrochen, kann sie über den in
  `ieg-academy-final-exam-v1` gespeicherten Stand fortgesetzt werden.
- Bei ≥ 70 % wird `finalPassed` gesetzt und das Zertifikat freigeschaltet.

---

## 📜 Zertifikat

Nach bestandener Abschlussprüfung erzeugt `app.js` dynamisch ein
personalisiertes Zertifikat (Name aus dem State, generierte
Credential-ID, Datum). Über `printCertificate()` öffnet sich ein
Druckfenster (A4 quer), aus dem sich das Zertifikat als PDF speichern
lässt.

---

## 🔐 Authentifizierung (Supabase)

- **`login.html`** — Anmeldung/Registrierung über Supabase. Bei Erfolg
  werden `ieg_logged_in='yes'` und `ieg_user_name` im `localStorage`
  gesetzt und es folgt eine Weiterleitung auf `index.html`. Ist bereits
  eine gültige Session vorhanden, leitet die Seite direkt weiter.
- **`index.html`** — prüft im `<head>` das Flag `ieg_logged_in`; fehlt es,
  erfolgt eine Weiterleitung auf `login.html`.
- **`reset.html`** — stellt aus dem E-Mail-Link eine Recovery-Session her
  (PKCE-`code`-Austausch oder Implicit-Flow) und erlaubt das Setzen eines
  neuen Passworts (`supabase.auth.updateUser`).
- **`supabase-config.js`** — enthält `SUPABASE_URL` und den
  `anon`/`public`-Key (an `window._SB_URL` / `window._SB_KEY`).

**⚠️ Sicherheitshinweise:**
- Der `anon`/`public`-Key darf im Frontend sichtbar sein (eingeschränkte
  Rechte gemäß Row-Level-Security). Ein `service_role`-Key darf **niemals**
  im Browser-Code stehen.
- Die eigentliche **Row-Level-Security muss in Supabase** konfiguriert
  sein — die clientseitigen Prüfungen (localStorage-Flag) sind kein
  echter Zugriffsschutz (siehe „Bekannte offene Punkte").

---

## ➕ Neues Modul hinzufügen

1. Neues Objekt im `CURRICULUM`-Array in `content.js` anlegen
   (`id`, `number`, `meta`, `title`, `desc`, `duration`, `videos`,
   `images`, `longContent`, `content`, `quiz`).
2. Dasselbe auf Englisch im `CURRICULUM_EN`-Array in `content.en.js`
   (dort `var` beibehalten, englisches Video-Pendant eintragen).
3. Bei Bedarf Fragen in `FINAL_EXAM` **und** `FINAL_EXAM_EN` ergänzen
   (die Prüfung ist ein fester Fragensatz, keine automatische Ableitung
   aus den Modul-Quizzen).
4. `modules/modul-XX.html` (DE) erstellen — am besten eine bestehende
   Seite **kopieren** und nur `MODULE_ID`, `MODULE_TITLE`, `MODULE_QUIZ`
   sowie den Fließtext im `<main class="module-content">` anpassen.
5. `modules/modul-XX.en.html` (EN) analog erstellen.
6. In `modules/module.js` die Zeile `const hasNext = nextModuleId <= 9;`
   anpassen (die Zahl = höchste Modul-ID; bei 11 Modulen also `<= 10`).
7. Vor dem Hochladen prüfen: `node --check content.js` und
   `node --check content.en.js`.
8. Die hartkodierten Zahlen auf der Startseite anpassen (siehe „Bekannte
   offene Punkte", Punkt 3), falls sie stimmen sollen.

---

## 🛠️ Bekannte Fallstricke (Pflege)

1. **Videos in `content.en.js` vergessen** → leere/fehlende Videos auf der
   englischen Seite.
2. **`PASS_THRESHOLD` in `content.en.js`** → darf dort nicht stehen
   (Redeclaration, da `content.js` danach geladen wird).
3. **`const` statt `var` in `content.en.js`** → Redeclaration-Fehler.
   In `content.en.js` immer `var` verwenden.
4. **`hasNext` in `modules/module.js` nicht angepasst** → Navigation zum
   nächsten Modul bricht ab. Aktuell korrekt: `nextModuleId <= 9`.
5. **Modul-IDs müssen zum Dateinamen passen** — `id: 8` gehört zu
   `modul-08.html` / `modul-08.en.html`.
6. **Modul-Fließtext liegt im HTML**, nicht im `content`-Feld von
   `content.js` (siehe Abschnitt „Inhalte pflegen").
7. **Syntax vor Upload immer mit `node --check` prüfen.**

---

## 🐞 Bekannte offene Punkte (Code)

Diese technischen Punkte sind im aktuellen Code vorhanden und (noch) nicht
behoben — hier ehrlich dokumentiert:

1. **Anker `#certificate` vs. Sektions-ID `Zertifikat`:** Navigation,
   Footer, `showCertificate()`, der Nav-Observer und die
   Modulseiten-Links verweisen auf `#certificate`, die Sektion in
   `index.html` hat aber `id="Zertifikat"`. Der Sprung zur
   Zertifikatssektion greift dadurch nicht (das Zertifikat selbst wird
   trotzdem gerendert).
2. **Hartkodiertes „/8 Module":** In `renderCertificate()` (`app.js`)
   steht `state.completed.length + '/8 Module'` — bei 10 Modulen falsch.
3. **Veraltete statische Zahlen auf der Startseite:** Hero zeigt fix „8"
   Module und „9" Quizze; die i18n-Texte sagen „Acht Module" bzw. „nach
   allen acht Modulen". Diese Werte werden **nicht** dynamisch
   überschrieben (nur die Fortschrittsanzeige rechnet mit der echten
   Modulzahl 10).
4. **Modulseiten ohne Login-Guard:** Keine der 20 `modul-XX.html` prüft
   `ieg_logged_in`; nur `index.html` tut das. Per Direktlink sind die
   Module ohne Anmeldung erreichbar. (Die Prüfung ist ohnehin rein
   clientseitig und kein echter Zugriffsschutz — dafür braucht es
   Row-Level-Security in Supabase.)
5. **Toter Code:** Das Namens-Modal (`nameModal` / `submitName()`) und das
   Modul-Modal (`moduleModal`) in `index.html` werden nie geöffnet bzw.
   befüllt; das Feld `content` in `content.js` wird nirgends gerendert.
6. **DE/EN-Abweichung:** Modul 07 hat auf Deutsch 2 Videos, auf Englisch
   nur 1.
7. **Duplizierte Supabase-Zugangsdaten:** URL und anon-Key stehen mehrfach
   (in `supabase-config.js`, `modules/module.js` sowie inline in
   `login.html`) — bei einer Schlüssel-Rotation an allen Stellen ändern.

---

## 📞 Support

Bei Fragen zur Website oder zum Curriculum wenden Sie sich an Ihren
internen IEG-Ansprechpartner.

© 2026 IEG · Internes Schulungsmaterial
