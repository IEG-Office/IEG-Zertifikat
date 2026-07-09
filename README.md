# IEG Claude Academy

Eine interne Lern-Website (GitHub Pages) für IEG-Mitarbeiter zur
Claude-Zertifizierung. Verfügbar auf **Deutsch und Englisch** mit
Sprach-Toggle.

**Repo:** https://github.com/IEG-Office/IEG-Zertifikat
**Live:** https://ieg-office.github.io/IEG-Zertifikat/

Technisch ist die Seite eine statische Website ohne Build-Schritt:
reines HTML, CSS und Vanilla-JavaScript. Extern eingebunden werden nur
Google Fonts und die Supabase-JS-Library (via CDN). Supabase dient für
Login und die optionale Synchronisation des Lernfortschritts.

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

**10 Module (00–09)**, jedes mit einer **eigenen HTML-Seite pro Sprache**
im Ordner `modules/`. Die Fragenzahl je Modul-Quiz ist unterschiedlich:

| ID | Modul | Deutsche Datei | Englische Datei | Quiz-Fragen |
|----|-------|-----------------|-------------------|:-----------:|
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
**46 Fragen**. In der Übersicht wird sie als **„Modul 10"** dargestellt.
Bestehensgrenze überall: **70 %** (`PASS_THRESHOLD`).

---

## 🧠 Wie die Inhalte organisiert sind — bitte genau lesen

Es gibt **zwei getrennte Orte** für Modulinhalte. Welcher zuständig ist,
hängt vom Inhaltstyp ab:

### 1. Fließtext des Moduls → **direkt in der HTML-Datei**
Der eigentliche Lehrtext (Überschriften, Absätze, Tabellen, Callouts,
Übungen, Musterlösungen) steht **fest im jeweiligen
`modules/modul-XX(.en).html`**, im Bereich
`<main class="module-content"> … </main>`. Zum Ändern des Textes
bearbeiten Sie also die HTML-Datei, **nicht** `content.js`.

### 2. Videos, Bilder, optionaler Zusatztext → **`content.js` / `content.en.js`**
`modules/module.js` liest aus dem passenden Modul-Objekt **nur** die
Felder `videos`, `images` und `longContent` und rendert sie in den
Platzhalter `<div id="dynamicContent"></div>` (steht oben im
`module-content`-Bereich jeder Modulseite). Außerdem stammen die
**Quiz-Fragen** (`quiz`) und die **Übersichtskarten** auf der Startseite
(`title`, `desc`, `meta`, `duration`, `number`) aus diesen Dateien.

> ⚠️ **Hinweis zum Feld `content`:** Jedes Modul-Objekt enthält auch ein
> Feld `content`. Dieses wird von der aktuellen Modul-Engine
> **nicht ausgegeben** — der sichtbare Fließtext kommt aus der HTML-Datei
> (siehe Punkt 1). Änderungen an `content` haben also keinen Effekt auf
> die Modulseite.

`content.js` (Deutsch) definiert `CURRICULUM`, `FINAL_EXAM` und
`PASS_THRESHOLD`. `content.en.js` (Englisch) definiert `CURRICULUM_EN`
und `FINAL_EXAM_EN` — und **kein** `PASS_THRESHOLD` (siehe Fallstricke).

---

## 🌍 DE/EN Sprachumschaltung — wie sie funktioniert

- Der Toggle speichert die gewählte Sprache im `localStorage` unter dem
  Key `ieg_lang` (Default: `de`). Logik in `i18n.js`
  (`getLang()`, `toggleLang()`, `applyLang()`, globales `t()`).
- `applyLang()` ersetzt alle Texte mit `data-i18n`-Attribut und feuert
  das Event `ieg:langchange`, worauf `app.js` und `module.js` ihre
  dynamischen Inhalte neu rendern.
- `app.js` → Funktion `openModule()` leitet bei Klick auf ein Modul
  sprachabhängig weiter: EN → `modul-XX.en.html`, DE → `modul-XX.html`.
- `index.html` lädt zusätzlich `content.en.js`, damit auch die
  Übersichtskarten die Sprache wechseln können.
- **Videos** können pro Sprache unterschiedlich sein — in `content.js`
  und `content.en.js` jeweils separat im `videos:`-Array pflegen.

⚠️ **Bekannter Fallstrick:** Wird ein Modul nur auf Deutsch gepflegt und
die `videos:`-Liste in `content.en.js` bleibt leer/kürzer, zeigt die
englische Modulseite entsprechend weniger oder kein Video. Immer beide
Sprachversionen prüfen! (Aktuell betrifft das z. B. **Modul 07**: DE hat
2 Videos, EN nur 1.)

---

## ✏️ Inhalte pflegen

### Video hinzufügen

In `content.js` (DE) bzw. `content.en.js` (EN) das gewünschte Modul über
die `id` suchen und die `videos:`-Liste anpassen:

```javascript
videos: [
  {
    url: 'https://www.youtube.com/embed/DEINE_VIDEO_ID',
    title: 'Titel des Videos',
    caption: 'Video 1.1 · Kurze Beschreibung (5:32)'
  },
],
```

Bei YouTube-Embed-URLs erzeugt `module.js` automatisch ein anklickbares
Vorschaubild (Thumbnail), das im neuen Tab zum Video führt.

**So bekommst du die Video-URL:**
- **YouTube:** Video öffnen → „Teilen" → „Einbetten" → den `src`-Link
  aus dem iframe kopieren (`https://www.youtube.com/embed/…`).
- **Vimeo:** „Share" → „Embed" → `src`-Link kopieren
  (`https://player.vimeo.com/video/…`).

Dieselbe Änderung ggf. in der anderen Sprachdatei mit dem
sprachlich passenden Video wiederholen.

### Bild hinzufügen

1. Bild in den Ordner `assets/` legen (z. B. `assets/grafik-1.png`)
2. In `content.js` bzw. `content.en.js` bei `images:`:

```javascript
images: [
  {
    src: '../assets/grafik-1.png',
    alt: 'Beschreibung',
    caption: 'Abbildung 1.1 · Quelle: IEG Internal Analysis'
  },
],
```

### Optionalen Zusatztext hinzufügen (`longContent`)

`longContent` wird zusätzlich zum HTML-Fließtext in `#dynamicContent`
gerendert (HTML als String):

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

### Fließtext eines Moduls ändern

Direkt in `modules/modul-XX(.en).html` im Bereich
`<main class="module-content">` bearbeiten. Verfügbare Bausteine
(siehe `modules/module-styles.css`): Überschriften `<h2>/<h3>`,
Absätze, Listen, `<table>`, sowie:

```html
<div class="callout">
  <div class="callout-title">Wichtig</div>
  <p>Hervorgehobener Text.</p>
</div>
```

---

## 🎓 Quiz-Fragen ändern

In `content.js` (DE) bzw. `content.en.js` (EN) hat jedes Modul ein
`quiz:`-Feld. Format:

```javascript
quiz: [
  {
    q: 'Ihre Frage hier?',
    options: ['Antwort A', 'Antwort B', 'Antwort C', 'Antwort D'],
    correct: 1,  // 0=A, 1=B, 2=C, 3=D
    explanation: 'Erklärung nach Auswahl'
  },
],
```

Die **Abschlussprüfung** liegt in `FINAL_EXAM` (`content.js`, DE) bzw.
`FINAL_EXAM_EN` (`content.en.js`, EN) — aktuell **46 Fragen** je Sprache,
gleiches Frageformat. Bestehensgrenze: 70 % (`PASS_THRESHOLD`, **nur** in
`content.js` definiert). Die Prüfung ist zeitlich begrenzt
(**40 Minuten**, `FINAL_EXAM_DURATION_SEC` in `app.js`), unterstützt
Markieren von Fragen und wird bei Zeitablauf automatisch abgegeben.

---

## 🎨 Weiteres anpassen

- **Logo:** `assets/ieg-logo.png` ersetzen
- **UI-Texte / Buttons / Labels:** `i18n.js` (Objekt `I18N`, Blöcke
  `de:` und `en:`)
- **Modul-Übersichts-Beschreibungen:** `content.js` (DE) und
  `content.en.js` (EN) → jeweils `title:`, `desc:`, `meta:`, `duration:`
- **Design/Styles:** `styles.css` (Startseite) bzw.
  `modules/module-styles.css` (Modulseiten). Hinweis: Startseite und
  Modulseiten verwenden bewusst unterschiedliche Schrift-Sets.

---

## 📂 Dateistruktur (Stand: 09.07.2026)

```
IEG-Zertifikat/
├── index.html               # Startseite (Übersicht, Team, Zertifikat, Modals)
├── login.html               # Login/Registrierung (Supabase Auth)
├── reset.html               # Passwort-Reset (Supabase Auth)
├── supabase-config.js       # Supabase-URL + anon-Key (window._SB_URL/_SB_KEY)
├── content.js               # ★ Deutsch: CURRICULUM, FINAL_EXAM, PASS_THRESHOLD
├── content.en.js            # ★ Englisch: CURRICULUM_EN, FINAL_EXAM_EN (KEIN PASS_THRESHOLD!)
├── app.js                   # Startseiten-Logik: Rendern, Locking, Final-Exam-Flow, Zertifikat, Supabase-Sync
├── i18n.js                  # UI-Übersetzungen + Sprachlogik (getLang/toggleLang/t)
├── styles.css               # Stylesheet der Startseite
├── assets/
│   ├── ieg-logo.png
│   ├── modul-06-cowork-files.png
│   └── modul-06-cowork-profile.png
├── modules/
│   ├── modul-00.html … modul-09.html         # 10 Module (Deutsch)
│   ├── modul-00.en.html … modul-09.en.html   # 10 Module (Englisch)
│   ├── module.js             # ⚠️ HIER, nicht im Root! Quiz-Engine, #dynamicContent, Next-Lock
│   └── module-styles.css     # Styles für alle Modulseiten
└── README.md
```

> ⚠️ `module.js` und `module-styles.css` liegen im Ordner `modules/`,
> **nicht** im Projekt-Root. Beim Ersetzen dieser Dateien entsprechend
> im Unterordner suchen.

**Ladeordnung der Skripte:**
- `index.html`: `i18n.js` (im `<head>`) → am Seitenende
  `content.en.js` → `content.js` → `app.js`.
- Jede Modulseite: `i18n.js`, `content.en.js`, `../content.js`,
  dann Inline-Setzen von `MODULE_ID`/`MODULE_TITLE`/`MODULE_QUIZ`,
  dann `module.js`. Supabase-JS wird von `module.js` bei Bedarf
  nachgeladen.

---

## 🔒 Locking-System

- Modul 00 ist immer freigeschaltet.
- Modul *n* wird frei, sobald das Quiz von Modul *n−1* mit **≥ 70 %**
  bestanden wurde.
- Die Abschlussprüfung wird frei, sobald **alle** Modul-Quizze bestanden
  sind.
- Der Fortschritt liegt im `localStorage`
  (`ieg-academy-progress-v1`); die Zwischenspeicherung laufender Quizze
  in `ieg-academy-quiz-progress-v1`, der Prüfungsstand in
  `ieg-academy-final-exam-v1`.
- Ein **Vorschau-Modus** (Button in der Curriculum-Sektion) hebt die
  Sperren temporär auf, ohne den Fortschritt zu verändern.

---

## 🔐 Authentifizierung (Supabase)

- **`login.html`** — Anmeldung und Registrierung über **Supabase**
  (`supabase.auth.signInWithPassword` / `signUp`). Bei Erfolg werden
  `localStorage['ieg_logged_in'] = 'yes'` und `ieg_user_name` gesetzt
  und es wird auf `index.html` weitergeleitet.
- **`index.html`** prüft im `<head>` dieses `localStorage`-Flag: fehlt
  es, erfolgt eine Weiterleitung auf `login.html`.
- **`reset.html`** — Passwort-Reset über den per E-Mail versandten
  Supabase-Link.
- **`supabase-config.js`** — enthält URL und `anon`-/`public`-Key.
  `logout()` in `app.js` beendet die Supabase-Session und entfernt die
  `localStorage`-Flags.

Der Lernfortschritt wird zusätzlich in die Supabase-Tabelle
`user_progress` synchronisiert (Spalten `user_id`, `completed_modules`,
`final_passed`, `final_score`, `completion_date`) und beim Laden mit dem
lokalen Stand zusammengeführt.

> **Hinweis (aktueller Stand):** Der Login-Guard (`localStorage`-Prüfung)
> ist nur in `index.html` vorhanden; die einzelnen Modulseiten
> (`modules/modul-XX.html`) enthalten keine eigene Login-Prüfung und sind
> per Direktlink erreichbar. Dies ist der bewusst so belassene
> Ist-Zustand.

**⚠️ Sicherheitshinweis für `supabase-config.js`:** Der
`anon`/`public`-Key ist dafür gedacht, im Frontend sichtbar zu sein
(eingeschränkte Rechte gemäß den Row-Level-Security-Regeln). Es darf hier
**niemals** ein `service_role`-Key eingetragen werden — dieser hat volle
Datenbankrechte und gehört nicht in Browser-Code.

---

## ➕ Neues Modul hinzufügen (Modul 10 = neues Sachmodul)

1. Neues Objekt im `CURRICULUM`-Array in `content.js` anlegen
   (`id: 10`, `number: '10'`, `title`, `desc`, `meta`, `duration`,
   `videos`, `images`, `longContent`, `quiz`).
2. Dasselbe auf Englisch im `CURRICULUM_EN`-Array in `content.en.js`
   (dort `var` verwenden, kein `PASS_THRESHOLD`).
3. Fragen der Abschlussprüfung bei Bedarf in `FINAL_EXAM` **und**
   `FINAL_EXAM_EN` ergänzen (beide Sprachen gleich lang halten).
4. `modules/modul-10.html` (DE) durch **Kopieren einer bestehenden
   Modulseite** erstellen und Inhalt/`MODULE_ID`/`MODULE_TITLE`/`MODULE_QUIZ`
   sowie die Hero-Angaben (Nummer, Titel, Quiz-Fragen-Zahl) anpassen.
5. `modules/modul-10.en.html` (EN) analog erstellen.
6. In `modules/module.js` die Zeile `const hasNext = nextModuleId <= 9;`
   auf `<= 10` erhöhen (X = neue höchste Modul-ID). Sonst führt der
   „Weiter"-Button des letzten Sachmoduls nicht zum neuen Modul.
7. Startseiten-Zahlen in `index.html` (Hero-Stats „Module"/„Quizze") und
   die Texte in `i18n.js` (`curriculum.title`, `curriculum.lede`,
   `hero.lede`, `cert.lede`) an die neue Modulanzahl anpassen.
8. Vor dem Hochladen prüfen: `node --check content.js` und
   `node --check content.en.js`.

> Da neue Modulseiten durch Kopieren entstehen, übernehmen sie
> automatisch die korrekte Skript-Einbindung und Struktur.

---

## 🛠️ Bekannte Fallstricke

1. **Fließtext am falschen Ort geändert** — der Modul-Fließtext steht in
   der HTML-Datei, nicht im `content`-Feld von `content.js` (das nicht
   gerendert wird). Videos/Bilder/`longContent` dagegen in `content.js`.
2. **Videos in `content.en.js` vergessen/kürzer** — führt zu fehlenden
   Videoboxen auf der englischen Seite (aktuell z. B. Modul 07).
3. **`PASS_THRESHOLD` in `content.en.js`** — darf dort nicht stehen
   (Redeclaration-Fehler, da `content.js` danach geladen wird).
4. **`const` statt `var` in `content.en.js`** — beide Content-Dateien
   teilen sich auf `index.html` denselben Scope; in `content.en.js`
   daher `var` verwenden, um Redeclaration-Fehler zu vermeiden.
5. **`hasNext` in `modules/module.js` nicht angepasst** — nach dem
   Hinzufügen eines Moduls die Obergrenze erhöhen (`<= höchste ID`).
   Datei liegt im Unterordner `modules/`, nicht im Root!
6. **Modul-IDs müssen zum Dateinamen passen** — `id: 8` gehört zu
   `modul-08.html` / `modul-08.en.html`.
7. **Modulzahl an mehreren Stellen** — bei Änderung der Modulanzahl
   sowohl `index.html` (Hero-Stats) als auch `i18n.js`
   (`curriculum.*`, `hero.lede`, `cert.lede`, beide Sprachen) aktualisieren.
8. **Syntax vor Upload immer mit `node --check` prüfen.**

---

## Support

Bei Fragen zur Website oder zum Curriculum wenden Sie sich an Ihren
internen IEG-Ansprechpartner.

© 2026 IEG · Internes Schulungsmaterial · v5.0
