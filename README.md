[README.md](https://github.com/user-attachments/files/29704429/README.md)
# IEG Claude Academy

Eine interne Lern-Website (GitHub Pages) für IEG-Mitarbeiter zur
Claude-Zertifizierung. Verfügbar auf **Deutsch und Englisch** mit
Sprach-Toggle.

**Repo:** https://github.com/IEG-Office/IEG-Zertifikat
**Live:** https://ieg-office.github.io/IEG-Zertifikat/

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

9 Module (00–08), jedes mit einer **eigenen HTML-Seite pro Sprache**
im Ordner `modules/`:

| ID | Modul | Deutsche Datei | Englische Datei |
|----|-------|-----------------|-------------------|
| 00 | Das Claude-Ökosystem im Überblick | `modules/modul-00.html` | `modules/modul-00.en.html` |
| 01 | Claude — Der komplette Grundkurs (2026) | `modules/modul-01.html` | `modules/modul-01.en.html` |
| 02 | Prompting und strukturierte Anweisungen | `modules/modul-02.html` | `modules/modul-02.en.html` |
| 03 | Sicherer Umgang mit Daten und Tools | `modules/modul-03.html` | `modules/modul-03.en.html` |
| 04 | Skills und wiederverwendbare Arbeitsabläufe | `modules/modul-04.html` | `modules/modul-04.en.html` |
| 05 | Skills in Finance-Workflows | `modules/modul-05.html` | `modules/modul-05.en.html` |
| 06 | Claude Cowork — Der autonome Desktop-Agent | `modules/modul-06.html` | `modules/modul-06.en.html` |
| 07 | Claude in Microsoft Office (Excel & PowerPoint) | `modules/modul-07.html` | `modules/modul-07.en.html` |
| 08 | @Claude in Slack (Claude Tag) | `modules/modul-08.html` | `modules/modul-08.en.html` |

Zusätzlich gibt es eine **Abschlussprüfung** (Final Exam) mit
43 Fragen (40 Basis + 3 zu Claude Tag), Bestehensgrenze **70 %**.

Du kannst Inhalte auf **zwei Arten** hinzufügen:

### 🅰️ Option A: Zentral in `content.js` / `content.en.js` (empfohlen)
Schnell, übersichtlich, alle Module an einer Stelle. Hier fügst du
Videos, Bilder und Zusatztexte ein, die automatisch auf den
Modul-Seiten erscheinen — **für jede Sprache in der jeweiligen Datei**.

### 🅱️ Option B: Direkt in `modules/modul-XX(.en).html` (für volle Kontrolle)
Für komplexere Layouts oder wenn du Inhalte zwischen bestehende Texte
setzen willst.

---

## 🌍 DE/EN Sprachumschaltung — wie sie funktioniert

- Der Toggle speichert die gewählte Sprache im `localStorage`
  unter dem Key `ieg_lang`.
- `app.js` → Funktion `openModule()` leitet bei Klick auf ein Modul
  entsprechend weiter: EN → `modul-XX.en.html`, DE → `modul-XX.html`.
- `index.html` lädt zusätzlich `content.en.js`, damit auch die
  Kursübersichts-Karten auf der Startseite die Sprache wechseln.
- **Videos** können pro Sprache unterschiedlich sein — in `content.js`
  und `content.en.js` jeweils separat im `videos:`-Array pflegen
  (z. B. deutsches vs. englisches Erklärvideo).

⚠️ **Bekannter Fallstrick:** Wird ein neues Modul nur auf Deutsch
gepflegt und die `videos:`-Liste in `content.en.js` bleibt leer
(`videos: []`), zeigt die englische Modulseite kein Video. Immer
beide Sprachversionen prüfen!

---

## 🅰️ Option A: Inhalte über `content.js` / `content.en.js`

Öffne die Datei in einem Texteditor. Für jedes Modul-Objekt im
`CURRICULUM`- (DE) bzw. `CURRICULUM_EN`-Array (EN) gibt es die
Felder `videos`, `images`, `longContent`, `content` und `quiz`.
`images` und `longContent` sind standardmäßig leer (`images: []`,
`longContent: ''`) und können bei Bedarf befüllt werden.

### Video hinzufügen

In `content.js` (DE) bzw. `content.en.js` (EN), gewünschtes Modul
suchen (z. B. `id: 1`) und die `videos:`-Liste anpassen:

```javascript
videos: [
  {
    url: 'https://www.youtube.com/embed/DEINE_VIDEO_ID',
    title: 'Titel des Videos',
    caption: 'Video 1.1 · Kurze Beschreibung (5:32)'
  },
],
```

**So bekommst du die Video-URL:**
- **YouTube:** Video öffnen → „Teilen" → „Einbetten" → den `src`-Link
  aus dem iframe kopieren. Sieht aus wie:
  `https://www.youtube.com/embed/dQw4w9WgXcQ`
- **Vimeo:** Video öffnen → „Share" → „Embed" → den `src`-Link kopieren.
  Sieht aus wie: `https://player.vimeo.com/video/123456789`

**Mehrere Videos** in einem Modul? Einfach mehrere Objekte in die Liste:

```javascript
videos: [
  { url: 'https://www.youtube.com/embed/VIDEO1', title: 'Einführung', caption: 'Video 1.1 (3:42)' },
  { url: 'https://www.youtube.com/embed/VIDEO2', title: 'Demo', caption: 'Video 1.2 (8:15)' },
],
```

**Wichtig:** Dieselbe Änderung ggf. in `content.en.js` mit dem
englischen Video-Pendant wiederholen.

### Bild hinzufügen

1. Bild in den Ordner `assets/` legen (z. B. `assets/grafik-1.png`)
2. In `content.js` bzw. `content.en.js` bei `images:`:

```javascript
images: [
  {
    src: '../assets/grafik-1.png',
    alt: 'Adoption-Kurve agentische KI',
    caption: 'Abbildung 1.1 · Quelle: IEG Internal Analysis'
  },
],
```

### Langen Zusatztext hinzufügen

```javascript
longContent: `
  <h2>Zusätzliche Vertiefung</h2>
  <p>Hier ein langer Text mit <strong>fetten Wörtern</strong> und
  <em>kursiven Stellen</em>.</p>

  <div class="callout">
    <div class="callout-title">Wichtiger Hinweis</div>
    <p>Hervorgehobene Box mit blauem Rand.</p>
  </div>
`,
```

---

## 🅱️ Option B: Direkt in `modules/modul-XX(.en).html`

Für mehr Kontrolle (z. B. Inhalt mitten zwischen bestehende Texte
einfügen). Im HTML nach `<main class="module-content">` suchen und
zwischen den Elementen einfügen:

### Video direkt im HTML

```html
<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/DEINE_VIDEO_ID"
    title="Titel"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
</div>
<div class="video-caption">Video 1.1 · Beschreibung</div>
```

### Bild direkt im HTML

```html
<img src="../assets/bild.png" alt="Beschreibung" class="module-image">
<div class="image-caption">Abbildung 1.1 · Bildunterschrift</div>
```

### Text-Elemente

```html
<h2>Große Überschrift</h2>
<h3>Mittlere Überschrift</h3>
<p>Ein Absatz mit <strong>fett</strong> und <em>kursiv</em>.</p>

<ul>
  <li>Listenpunkt 1</li>
  <li>Listenpunkt 2</li>
</ul>

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
`FINAL_EXAM_EN` (`content.en.js`, EN) — aktuell 43 Fragen, Grenze zum
Bestehen: 70 % (`PASS_THRESHOLD`, **nur** in `content.js` definiert).

---

## 🎨 Weiteres anpassen

- **Logo:** `assets/ieg-logo.png` ersetzen
- **UI-Texte / Buttons / Labels:** `i18n.js`
- **Modul-Übersichts-Beschreibungen:** `content.js` (DE) und
  `content.en.js` (EN) → jeweils `title:` und `desc:` pro Modul

---

## 📂 Dateistruktur (bestätigter Stand, Stand: 06.07.2026)

```
IEG-Zertifikat/
├── index.html              # Hauptseite (Übersicht, lädt content.en.js für Sprachwechsel der Karten)
├── login.html               # Login-Seite (Supabase Auth)
├── reset.html               # Passwort-Reset-Seite (Supabase Auth)
├── supabase-config.js       # Supabase-Verbindungsdaten/-Konfiguration
├── content.js               # ★ Deutsche Inhalte: CURRICULUM, FINAL_EXAM, PASS_THRESHOLD
├── content.en.js            # ★ Englische Inhalte: CURRICULUM_EN, FINAL_EXAM_EN (KEIN PASS_THRESHOLD!)
├── app.js                   # Sprachrouting (öffnet .en.html wenn EN aktiv)
├── i18n.js                  # UI-Texte für beide Sprachen
├── styles.css                # Stylesheet der Hauptseite (index.html, login.html, reset.html)
├── assets/
│   ├── ieg-logo.png
│   └── ...                  # eigene Bilder hier ablegen
├── modules/
│   ├── modul-00.html        # Modul 00 Deutsch
│   ├── modul-00.en.html     # Modul 00 Englisch
│   ├── ...
│   ├── modul-08.html
│   ├── modul-08.en.html
│   ├── module.js             # ⚠️ Liegt HIER, nicht im Root! Navigation, hasNext-Logik, Quiz-Engine
│   └── module-styles.css     # Gemeinsame Styles für alle Modul-Seiten
└── README.md                 # Diese Datei
```

> ⚠️ **Wichtige Korrektur ggü. früheren Versionen dieses Dokuments:**
> `module.js` und `module-styles.css` liegen im Ordner `modules/`,
> **nicht** im Projekt-Root. Beim Ersetzen dieser Dateien auf GitHub
> also im Unterordner `modules/` und nicht im Root suchen.

---

## 🔒 Locking-System

Beim Klick auf ein gesperrtes Modul passiert nichts — der/die
Mitarbeiter/in muss erst das vorherige Modul-Quiz bestehen (≥ 70 %),
um das nächste Modul freizuschalten. Der Fortschritt wird im
`localStorage` des Browsers gespeichert.

---

## 🔐 Authentifizierung (Supabase) — Pflicht-Login

Der Zugriff auf die Academy ist **verpflichtend** an einen Login
gebunden. Ohne gültige Anmeldung kann niemand auf `index.html` oder
die Modul-Seiten zugreifen.

- **`login.html`** — Anmeldeseite, Authentifizierung über **Supabase**.
  Erster Einstiegspunkt für alle Mitarbeiter.
- **`reset.html`** — Seite zum Zurücksetzen des Passworts (z. B. bei
  vergessenem Passwort, verlinkt von `login.html`).
- **`supabase-config.js`** — enthält die Verbindungsdaten
  (Supabase-URL + Public/Anon-Key) zur Supabase-Instanz und wird von
  `login.html`, `reset.html` sowie vermutlich `index.html`
  eingebunden, um die Session zu prüfen.

**Ablauf (Pflicht-Login):**
1. Mitarbeiter ruft die Academy-URL auf.
2. Es wird geprüft, ob eine gültige Supabase-Session vorliegt
   (z. B. via `supabase.auth.getSession()`).
3. **Keine gültige Session** → automatische Weiterleitung auf
   `login.html`.
4. Nach erfolgreichem Login → Weiterleitung zurück auf `index.html`
   bzw. die zuvor angeforderte Seite.
5. Passwort vergessen → Link auf `login.html` führt zu `reset.html`,
   wo per E-Mail ein Reset-Link von Supabase angefordert wird.

> ⚠️ **Wichtig bei Änderungen an Modul-Seiten:** Da der Login
> verpflichtend ist, sollte **jede neue `modul-XX.html` /
> `modul-XX.en.html`** ebenfalls die Session-Prüfung einbinden
> (vermutlich über ein gemeinsames Script, z. B. am Seitenanfang
> eingebunden). Beim Erstellen neuer Modul-Seiten (siehe Abschnitt
> „Neues Modul hinzufügen") daher immer eine bestehende Modul-Seite
> als Vorlage kopieren und **nicht** bei Null anfangen, damit die
> Auth-Prüfung nicht versehentlich fehlt und das Modul offen
> zugänglich wird.

**⚠️ Sicherheitshinweis für die Pflege von `supabase-config.js`:**
Der `anon`/`public`-Key von Supabase ist dafür gedacht, im
Frontend-Code sichtbar zu sein (er hat eingeschränkte Rechte gemäß
den Row-Level-Security-Regeln in Supabase) — trotzdem sollte hier
**niemals** ein `service_role`-Key eingetragen werden, da dieser
volle Datenbankrechte hat und niemals öffentlich im Browser-Code
stehen darf.

---



1. Neues Objekt im `CURRICULUM`-Array in `content.js` anlegen
2. Dasselbe auf Englisch im `CURRICULUM_EN`-Array in `content.en.js`
3. 3 neue Fragen in `FINAL_EXAM` **und** `FINAL_EXAM_EN` ergänzen
4. `modules/modul-XX.html` (DE) erstellen
5. `modules/modul-XX.en.html` (EN) erstellen
6. In `modules/module.js` (⚠️ nicht im Root!) die Zeile
   `const hasNext = nextModuleId <= X;` anpassen
   (X = neue höchste Modul-ID minus 1)
7. Vor dem Hochladen lokal prüfen: `node --check content.js` und
   `node --check content.en.js`

---

## 🛠️ Bekannte Fallstricke

1. **Videos in `content.en.js` vergessen** — führt zu leeren
   Videoboxen auf der englischen Seite.
2. **`PASS_THRESHOLD` in `content.en.js`** — darf dort nicht stehen
   (Redeclaration-Fehler, da `content.js` danach geladen wird).
3. **`const` statt `var` in `content.en.js`** — führt zu
   Redeclaration-Fehlern, da beide Dateien auf derselben Seite
   geladen werden. In `content.en.js` immer `var` verwenden.
4. **`hasNext` in `modules/module.js` nicht angepasst** — Navigation
   zum nächsten Modul funktioniert dann nicht. (Datei liegt im
   Unterordner `modules/`, nicht im Root!)
5. **Modul-IDs müssen zum Dateinamen passen** — `id: 8` gehört zu
   `modul-08.html` / `modul-08.en.html`.
6. **Syntax vor Upload immer mit `node --check` prüfen.**
7. **Fehlende Login-Prüfung auf neuen Modul-Seiten** — da der Login
   verpflichtend ist, muss jede neue `modul-XX.html` die
   Session-Prüfung enthalten (siehe Abschnitt „Authentifizierung").
   Am sichersten: immer eine bestehende Modul-Seite komplett
   kopieren und nur Inhalt/`MODULE_ID` anpassen, statt eine
   Modul-Seite von Grund auf neu zu schreiben.

---

## Support

Bei Fragen zur Website oder zum Curriculum wenden Sie sich an Ihren
internen IEG-Ansprechpartner.

© 2026 IEG · Internes Schulungsmaterial · v4.0
