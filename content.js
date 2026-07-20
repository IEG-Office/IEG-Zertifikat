/* ============================================
   IEG Claude Academy — Content
   Alle Module + Quizzes
   v5.0 — Luise Live Version + Login-Ready
   ============================================ */

const CURRICULUM = [
  {
    id: 0,
    number: '00',
    meta: 'Einführung · Ökosystem',
    title: 'Das Claude-Ökosystem im Überblick',
    desc: 'Modellfamilie, Projects, interaktive Visualisierungen, Claude Cowork, Claude Code und Erweiterungen — ein strukturierter Überblick über das gesamte Claude-Ökosystem.',
    duration: '25 Min.',
    videos: [
      { url: 'https://www.youtube.com/embed/EE9qr6Bfwj8', title: 'Das Claude-Ökosystem im Überblick', caption: 'Video 0.1 · Das Claude-Ökosystem im Überblick (2026)' },
    ],
    images: [],
    longContent: '',
    content: `
      <h3>1. Die Modellfamilie: Für jede Aufgabe das richtige Werkzeug</h3>
      <p>Claude ist weit mehr als ein einfacher Chatbot — es ist ein vielseitiges Ökosystem mit spezialisierten Werkzeugen für Produktivität und Entwicklung. Den Einstieg bildet die Modellfamilie:</p>
      <table>
        <thead><tr><th>Modell</th><th>Stärke</th><th>Typischer Einsatz</th></tr></thead>
        <tbody>
          <tr><td><strong>Haiku</strong><br><span style="font-weight:400;font-size:0.9em;color:var(--text-faint);">aktuell: Haiku 4.5</span></td><td>Das schnellste und kostengünstigste Modell</td><td>Einfache Aufgaben, schnelle Formatierungen, kurze Zusammenfassungen</td></tr>
          <tr><td><strong>Sonnet</strong><br><span style="font-weight:400;font-size:0.9em;color:var(--text-faint);">aktuell: Sonnet 5</span></td><td>Der „Allrounder"</td><td>Ausgewogenes Verhältnis aus Geschwindigkeit und Intelligenz — tägliche Arbeit</td></tr>
          <tr><td><strong>Opus</strong><br><span style="font-weight:400;font-size:0.9em;color:var(--text-faint);">aktuell: Opus 4.8</span></td><td>Das Flaggschiff-Modell</td><td>Maximale Leistungsfähigkeit für extrem komplexe Analysen und Entscheidungen</td></tr>
          <tr><td><strong>Fable</strong><br><span style="font-weight:400;font-size:0.9em;color:var(--text-faint);">Mythos-Klasse, seit Juni 2026</span></td><td>Das leistungsstärkste öffentlich verfügbare Modell — oberhalb von Opus angesiedelt</td><td>Ausnahmefälle mit höchsten Anforderungen an Tiefe und Präzision (höhere Kosten)</td></tr>
        </tbody>
      </table>
      <div class="callout">
        <div class="callout-title">Ausblick: Was kommt als Nächstes?</div>
        <p>Anthropic arbeitet kontinuierlich an neuen Modellen. Seit Juni 2026 gibt es mit der „Mythos"-Klasse eine neue Stufe oberhalb von Opus: <strong>Claude Fable 5</strong> ist deren öffentlich verfügbares Modell, während das leistungsstärkere <strong>Claude Mythos 5</strong> bislang nur ausgewählten Organisationen im Rahmen von „Project Glasswing" zur Verfügung steht. Für den Arbeitsalltag bleiben Haiku, Sonnet und Opus die relevanten Werkzeuge — Fable lohnt sich nur für seltene Ausnahmefälle mit höchsten Anforderungen.</p>
      </div>

      <h3>2. Organisation durch „Projects" — Der Briefing-Ordner</h3>
      <p>Ein Project ist ein <strong>ausgelagertes Gehirn</strong> mit Dokumenten, Anweisungen und Kontext. Claude greift bei jedem Gespräch innerhalb des Projekts darauf zu — ideal für wiederkehrende Aufgaben:</p>
      <ul>
        <li>Projekt anlegen → Hintergrunddokumente hochladen (z.&thinsp;B. Unternehmensprofile, Styleguides)</li>
        <li>Systemprompt definieren: Welche Rolle soll Claude im Projekt einnehmen?</li>
        <li>Ab sofort startet jeder neue Chat im Projekt mit diesem Kontext — kein erneutes Briefing nötig</li>
      </ul>

      <h3>3. Interaktive Visualisierung im Chat</h3>
      <p>Claude kann direkt im Chat interaktive Inhalte erzeugen — ohne Plugins, ohne Programmierkenntnisse:</p>
      <ul>
        <li><strong>Diagramme und Dashboards:</strong> Interaktive Grafiken, Flowcharts und Kennzahlen-Dashboards</li>
        <li><strong>Bewertungsrechner:</strong> Funktionale Mini-Apps mit Eingabefeldern und Berechnungen</li>
        <li><strong>Einfacher Befehl:</strong> „Zeig mir das als interaktives Diagramm" — Claude generiert die Visualisierung sofort</li>
      </ul>
      <div class="callout">
        <div class="callout-title">Praxis-Tipp</div>
        <p>Für Kundenpräsentationen: Claude-Visualisierungen können direkt im Browser gezeigt oder als Screenshot für PowerPoint verwendet werden.</p>
      </div>

      <h3>4. Claude Cowork — Desktop-Assistent</h3>
      <p>Claude Cowork lebt in der <strong>Desktop-App</strong> und arbeitet Aufgaben selbstständig auf dem Computer ab:</p>
      <ul>
        <li>Zugriff auf lokale Ordner und Dateien — ohne manuelles Hochladen</li>
        <li>Arbeitet auch im Hintergrund, während andere Tätigkeiten erledigt werden</li>
        <li><strong>Fernsteuerung über die Smartphone-App:</strong> Aufgaben delegieren, auch wenn man nicht am Rechner sitzt</li>
      </ul>

      <h3>5. Claude Code — Entwicklung ohne Programmierkenntnisse</h3>
      <p>Claude Code macht technische Realisierung für jeden zugänglich:</p>
      <ul>
        <li>Einfache Beschreibung reicht — Claude erstellt vollständige Webseiten, Tools oder Apps</li>
        <li>Kein Programmier-Vorwissen notwendig: Anforderungen auf Deutsch formulieren, Code wird automatisch generiert</li>
        <li>Iterative Verbesserung: Feedback geben, Claude passt den Code an</li>
      </ul>

      <h3>6. Erweiterungen: Skills, Plugins und Konnektoren</h3>
      <p>Das Claude-Ökosystem lässt sich durch drei Typen von Erweiterungen ausbauen:</p>
      <ul>
        <li><strong>Skills:</strong> Einzelne Fähigkeiten dauerhaft speichern — z.&thinsp;B. „Erstelle immer eine Excel-Datei als Ausgabe"</li>
        <li><strong>Plugins:</strong> Sammlungen von Skills gebündelt als Paket (z.&thinsp;B. ein Productivity-Plugin mit Schreib- und Analysefunktionen)</li>
        <li><strong>Konnektoren:</strong> Direkte Schnittstellen zu externen Diensten — Gmail, Google Calendar, Notion und weitere</li>
      </ul>
      <div class="callout callout-warn">
        <div class="callout-title">Sicherheitshinweis</div>
        <p>Konnektoren geben Claude Zugriff auf echte Daten externer Dienste. Niemals persönliche Firmen-Accounts ohne Freigabe verbinden — Datenschutzrichtlinien von IEG beachten.</p>
      </div>
    `,
    quiz: [
      {
        q: 'Für eine mehrstufige Risikoanalyse mit vielen voneinander abhängigen Variablen soll das treffsicherste Modell gewählt werden. Welche Begründung ist korrekt?',
        options: ['Haiku, weil es Anfragen mit der höchsten Geschwindigkeit beantwortet', 'Sonnet, weil es den besten Kompromiss aus Tempo und Tiefe bietet', 'Opus, weil es gezielt für besonders komplexe Analysen ausgelegt ist', 'Die Modellwahl ist hier egal, da alle Modelle gleich gut abschneiden'],
        correct: 2, explanation: 'Opus ist das leistungsstärkste Modell und für besonders komplexe, mehrstufige Analysen und Entscheidungen vorgesehen.'
      },
      {
        q: 'Ein Project soll gegenüber einem einzelnen Chat einen echten Mehrwert liefern. Worin besteht der entscheidende Vorteil?',
        options: ['Hinterlegte Dokumente und Anweisungen gelten automatisch in jedem neuen Chat', 'Anfragen werden innerhalb eines Projects spürbar schneller beantwortet', 'Erst innerhalb eines Projects lässt sich die Websuche überhaupt aktivieren', 'Mehrere Personen können denselben Chat zeitgleich gemeinsam bearbeiten'],
        correct: 0, explanation: 'Ein Project ist ein dauerhafter Kontext — jeder neue Chat startet automatisch mit den hinterlegten Dokumenten und Anweisungen, ohne erneutes Briefing.'
      },
      {
        q: 'Du hast eine Tabelle mit Verkaufszahlen und möchtest daraus ein interaktives Balkendiagramm. Welches Vorgehen führt am direktesten zum Ziel?',
        options: ['Zuerst einen Programmierkurs belegen und danach den fertigen Code einfügen', 'Einen gesonderten Konnektor für Visualisierungen im Account freischalten', 'Den Wunsch verwerfen, da Claude keinerlei interaktive Grafiken erzeugt', 'Die Zahlen einfügen und ein interaktives Diagramm anfordern, mehr nicht'],
        correct: 3, explanation: 'Claude erzeugt interaktive Visualisierungen direkt im Chat — kein Plugin, kein Konnektor und kein Code-Vorwissen nötig.'
      },
      {
        q: 'Eine Kollegin fragt, was Claude Cowork von Claude im Browser unterscheidet. Welche Aussage trifft den Kern?',
        options: ['Cowork ist ausschließlich für erfahrene Programmiererinnen konzipiert', 'Cowork läuft in der Desktop-App und greift dort auf lokale Dateien zu', 'Cowork arbeitet zwar langsamer, ist dafür aber deutlich günstiger', 'Cowork verarbeitet nur reinen Text und akzeptiert gar keine Dateien'],
        correct: 1, explanation: 'Claude Cowork lebt in der Desktop-App, hat Zugriff auf lokale Dateien und kann Aufgaben sogar im Hintergrund erledigen — steuerbar auch per Smartphone.'
      },
      {
        q: 'Im Claude-Ökosystem werden die Begriffe Skill und Plugin oft verwechselt. Wie lässt sich der Unterschied präzise fassen?',
        options: ['Ein Skill ist eine einzelne Fähigkeit, ein Plugin bündelt mehrere davon', 'Beide Begriffe meinen exakt dasselbe und sind frei gegeneinander tauschbar', 'Skills sind grundsätzlich kostenlos, während Plugins stets Geld kosten', 'Plugins laufen ausschließlich unter Opus, Skills dagegen unter jedem Modell'],
        correct: 0, explanation: 'Ein Skill ist eine einzelne gespeicherte Fähigkeit; ein Plugin bündelt mehrere Skills zu einem Paket — beide erweitern Claudes Werkzeugkasten dauerhaft.'
      },
      {
        q: 'Du möchtest mit Claude Code ohne Vorkenntnisse eine kleine Kundenwebseite bauen. Womit beginnst du sinnvollerweise?',
        options: ['Zunächst HTML und CSS erlernen, bevor man Claude überhaupt einsetzt', 'Eine Entwicklerin beauftragen, die den passenden Prompt für dich formuliert', 'Den Plan verwerfen, da Claude Code nur für bestehende Programmierer ist', 'Gewünschte Funktion und Aussehen beschreiben, Claude liefert dann den Code'],
        correct: 3, explanation: 'Claude Code braucht keine Programmierkenntnisse — eine klare Beschreibung auf Deutsch genügt, um vollständige Webseiten oder Apps generieren zu lassen.'
      },
      {
        q: 'Das Erweiterungssystem von Claude besteht aus genau drei Bausteinen. Welche Aufzählung benennt sie korrekt?',
        options: ['Add-ons, Webhooks und kleine wiederverwendbare Hilfsskripte', 'Makros, vorgefertigte Templates und eigenständig laufende Agenten', 'Skills, Plugins und Konnektoren zu externen Diensten', 'Bots, einbettbare Widgets und offene Programmierschnittstellen'],
        correct: 2, explanation: 'Skills (einzelne Fähigkeiten), Plugins (gebündelte Sammlungen) und Konnektoren (Schnittstellen zu Diensten wie Gmail oder Notion) bilden das Erweiterungssystem.'
      },
      {
        q: 'Für wiederkehrende Standardaufgaben im Arbeitsalltag soll das Modell mit dem besten Preis-Leistungs-Verhältnis gewählt werden. Welche Begründung passt?',
        options: ['Haiku, weil es von allen Modellen mit Abstand am wenigsten kostet', 'Sonnet, weil es Geschwindigkeit und Intelligenz ausgewogen verbindet', 'Opus, weil seine Antwortqualität jede andere Option deutlich übertrifft', 'Keines, da sich kein Modell für den täglichen Einsatz wirklich eignet'],
        correct: 1, explanation: 'Sonnet ist der Allrounder mit ausgewogenem Verhältnis aus Geschwindigkeit und Intelligenz — ideal für den täglichen Arbeitseinsatz.'
      },
      {
        q: 'Ein Kollege fragt, wofür Konnektoren im Claude-Ökosystem eigentlich gut sind. Welche Beschreibung trifft zu?',
        options: ['Sie koppeln verschiedene Claude-Modelle unmittelbar aneinander', 'Sie führen mehrere Projects zu einem einzigen großen Project zusammen', 'Sie dienen einzig der regelmäßigen Sicherung bestehender Chatverläufe', 'Sie schaffen Schnittstellen zu Diensten wie Gmail, Kalender oder Notion'],
        correct: 3, explanation: 'Konnektoren sind Schnittstellen zu externen Diensten — Claude kann damit E-Mails lesen, Kalender verwalten oder in Notion schreiben.'
      },
      {
        q: 'Warum kann ausgerechnet Claude Cowork Aufgaben auch dann fortführen, wenn man nicht aktiv zusieht?',
        options: ['Weil es in der Desktop-App sitzt und direkt auf das Betriebssystem zugreift', 'Weil es als eigenständiger Cloud-Dienst völlig unabhängig im Netz arbeitet', 'Weil es im Hintergrund heimlich eine versteckte Browser-Extension nutzt', 'Gar nicht, denn eine echte Hintergrundverarbeitung gibt es bei Cowork nicht'],
        correct: 0, explanation: 'Cowork ist in der Desktop-App integriert und hat damit nativen Zugriff auf lokale Dateien und Prozesse — die Grundlage für autonome Hintergrundarbeit.'
      }
    ]
  },
  {
    id: 1,
    number: '01',
    meta: 'Einführung · Grundlagen',
    title: 'Claude — Der komplette Grundkurs (2026)',
    desc: 'Chat-Disziplin, Websuche, Dateianalyse, technischer Support, Personalisierung und Datenschutz — alles was du für einen professionellen Einstieg in Claude brauchst. Die Modellfamilie hast du bereits in Modul 0 kennengelernt.',
    duration: '45 Min.',
    videos: [
      { url: 'https://www.youtube.com/embed/51vysjHcJ5A', title: 'Claude — Der komplette Grundkurs 2026', caption: 'Video 1.1 · Claude — Der komplette Grundkurs (2026)' },
    ],
    images: [],
    longContent: '',
    content: `
      <h3>1. Grundlagen und Chat-Disziplin</h3>
      <p>Claude ist ein KI-Tool von Anthropic, das über eine einfache Textbox bedient wird. Ein entscheidender Erfolgsfaktor ist die <strong>Chat-Disziplin</strong>: Erstelle für <strong>jedes neue Thema einen neuen Chat</strong>. Das Vermischen von Themen in einem einzigen Chat verwirrt die KI und verschlechtert die Qualität der Ergebnisse erheblich.</p>
      <p>Der Grund liegt im sogenannten <strong>Kontextfenster</strong>: Claude liest bei jeder Antwort den <em>gesamten</em> bisherigen Chatverlauf erneut mit. Je länger und thematisch unübersichtlicher ein Chat wird, desto mehr irrelevante Informationen muss das Modell berücksichtigen — die Antworten werden ungenauer und langsamer. Ein frischer Chat pro Thema hält den Kontext sauber und fokussiert.</p>
      <div class="callout">
        <div class="callout-title">Goldene Regel</div>
        <p>Ein Thema — ein Chat. Wer Urlaubsplanung und Quartalsberichte im selben Chat mischt, bekommt schlechtere Ergebnisse für beides.</p>
      </div>
      <p>Zwei weitere Gewohnheiten zahlen sich vom ersten Tag an aus: <strong>Kontext mitgeben</strong> (wer Sie sind, für wen die Ausgabe gedacht ist, in welchem Format) und <strong>iterativ arbeiten</strong> — eine erste Antwort im selben Chat mit Folgeanweisungen wie „kürzer", „förmlicher" oder „mit Quellenangaben" verfeinern.</p>

      <h3>2. Zentrale Arbeitsfunktionen</h3>
      <p>Über das <strong>Plus-Symbol</strong> unter der Texteingabe lassen sich die wichtigsten Werkzeuge aktivieren.</p>
      <h4>Websuche</h4>
      <p>Claude kann hunderte Quellen in Sekunden durchsuchen, um aktuelle Daten (z.&thinsp;B. DAX-Umsätze oder tagesaktuelle Branchennews) in Tabellen zusammenzufassen — die Ergebnisse sind <strong>mit Quellenlinks belegt</strong>. Bei kritischen Zahlen immer gegenprüfen und die Anfrage präzise mit Zeitraum und Ausgabeformat formulieren.</p>
      <h4>Dateianalyse</h4>
      <p>PDFs, Excel- oder Word-Dokumente lassen sich direkt hochladen. <strong>Pro-Tipp:</strong> Nutze das Stoppuhr-Symbol (<em>erweiterter Nachdenkenmodus</em>), damit Claude sich mehr Zeit nimmt, die Datei gründlich einzulesen. Stelle konkrete Fragen <em>zu</em> dem Dokument statt einer Pauschal-Zusammenfassung; mehrere Dateien kann Claude auch <strong>vergleichen</strong>.</p>
      <h4>Technischer Support</h4>
      <p>Claude hilft bei PC- und Software-Problemen. Erst das Problem allgemein beschreiben, dann einen <strong>Screenshot der Benutzeroberfläche</strong> (z.&thinsp;B. Aktivitätsanzeige oder Fehlermeldung) hochladen — Claude liest die Bildschirminhalte aus und diagnostiziert die Ursache direkt. Anschließend um eine Schritt-für-Schritt-Anleitung bitten.</p>

      <h3>3. Personalisierung und Produktivität</h3>
      <ul>
        <li><strong>Präferenzen:</strong> Globale Einstellungen (z.&thinsp;B. „Antworte immer in einem Satz"), die für jeden neuen Chat automatisch übernommen werden.</li>
        <li><strong>Stile:</strong> Claude den eigenen <strong>Schreibstil beibringen</strong> — Beispieltexte (z.&thinsp;B. als PDF) hochladen, die Claude automatisch analysiert.</li>
        <li><strong>Gedächtnis (Memory):</strong> Durch den Befehl „Bitte erstelle eine Erinnerung" merkt sich Claude Fakten über dich (z.&thinsp;B. „Ich habe Flugangst"), die er in künftigen Chats automatisch berücksichtigt.</li>
        <li><strong>Projekte:</strong> Ein abgeschirmter Bereich für spezifische Aufgaben (z.&thinsp;B. „LinkedIn Post Generator"). Hier hochgeladene Dateien und Anweisungen gelten für <strong>alle Chats innerhalb dieses Projekts</strong>.</li>
      </ul>

      <h3>4. Profi-Funktionen: Programmierung und Excel</h3>
      <h4>Dashboard- &amp; Website-Bau</h4>
      <p>Claude kann interaktive Dashboards oder einfache HTML-Websites erstellen — inklusive Schritt-für-Schritt-Anleitungen zur Veröffentlichung. Kein Programmier-Vorwissen nötig.</p>
      <h4>Claude in Excel</h4>
      <p>Eine <strong>Pro-Funktion</strong>, die direkt in Excel Tabellen füllt, Webdaten abruft, dynamische Charts erstellt und Fehler wie <strong>Zirkelbezüge selbstständig korrigiert</strong> — per natürlichsprachlicher Anweisung.</p>

      <h3>5. Sicherheit und Datenschutz</h3>
      <div class="callout callout-warn">
        <div class="callout-title">Pflicht bei IEG</div>
        <p>Deaktiviere in den Einstellungen unter „Datenschutz" die Option <strong>„hilft dabei Claude zu verbessern"</strong>, damit deine Daten nicht zum Training neuer Modelle genutzt werden.</p>
      </div>
      <p>Der <strong>Inkognitomodus</strong> (Geist-Symbol) sorgt dafür, dass Chats nicht dauerhaft in der Seitenleiste gespeichert werden — ideal für private oder einmalige Anfragen.</p>
    `,
    quiz: [
      { q: 'Du analysierst eine 100-seitige Marktstudie als PDF und möchtest extrem präzise Details zu einer Nischenkennzahl extrahieren. Welches Vorgehen ist am effektivsten?', options: ['Nutze das Haiku-Modell für maximale Geschwindigkeit beim Scannen.', 'Aktiviere den „erweiterten Nachdenkenmodus" (Stoppuhr) im Opus-Modell.', 'Lade die Datei im Inkognitomodus hoch, damit die KI sich nicht an alte Chats erinnert.', 'Kopiere den gesamten Text der PDF manuell in die Chatzeile statt die Datei hochzuladen.'], correct: 1, explanation: 'Opus + erweiterter Nachdenkenmodus = Claude liest die Datei gründlicher ein und liefert präzisere Antworten bei komplexen Dokumenten.' },
      { q: 'Du möchtest, dass Claude künftig bei jeder technischen Anleitung berücksichtigt, dass du ein Linux-Nutzer bist, ohne dies jedes Mal neu erwähnen zu müssen. Wo stellst du das ein?', options: ['In den „Erinnerungen" (Memory) durch den Befehl „Bitte erstelle eine Erinnerung".', 'In den globalen „Präferenzen" in den Einstellungen.', 'In einem speziellen „Projekt" für technische Anleitungen.', 'Sowohl A, B als auch C sind technisch korrekt — B ist für systemweite Betriebssystem-Infos am sinnvollsten.'], correct: 3, explanation: 'Alle drei Wege funktionieren technisch. Globale Präferenzen (B) sind am sinnvollsten für systemweite Infos wie das Betriebssystem.' },
      { q: 'Warum ist es ein strategischer Fehler, Anfragen zu verschiedenen Projekten (z. B. Urlaubsplanung und Quartalsbericht) in einem einzigen Chat zu belassen?', options: ['Claude verbraucht in langen Chats mehr Token und wird dadurch teurer.', 'Die KI verliert bei Themenmischung den Fokus, was zu ungenaueren Ergebnissen führt.', 'Der Inkognitomodus funktioniert nur in kurzen Chats.', 'Die Websuche kann in Chats mit mehr als 10 Nachrichten nicht mehr aktiviert werden.'], correct: 1, explanation: 'Chat-Disziplin ist entscheidend: Jedes neue Thema in einen eigenen Chat — Themenmischung verschlechtert die Ergebnisqualität erheblich.' },
      { q: 'Du nutzt Claude in Excel im Modus „Accept all edits". Du bittest die KI, eine Tabelle zu reparieren, in der die Summenbildung nicht stimmt. Was tut Claude?', options: ['Er schreibt dir eine Anleitung im Seitenfenster, wie du die Formel ändern musst.', 'Er erstellt eine neue Excel-Datei und sendet sie dir als Download-Link.', 'Er identifiziert den Fehler (z. B. einen Zirkelbezug) und korrigiert die Formel direkt in der Zelle, ohne nochmals nachzufragen.', 'Er markiert die fehlerhafte Zelle lediglich rot.'], correct: 2, explanation: 'Im Modus „Accept all edits" korrigiert Claude Fehler direkt in Excel — inklusive Zirkelbezüge, ohne Rückfragen.' },
      { q: 'Du erstellst einen „benutzerdefinierten Stil" für deine E-Mails. Was ist der notwendige Schritt, damit Claude deinen Stil erkennt?', options: ['Du musst Claude mindestens 500 Wörter deines Stils im Chat diktieren.', 'Du lädst eine Textprobe (z. B. als PDF) hoch, die Claude automatisch analysiert.', 'Du wählst den vordefinierten Stil „formell" aus und änderst ihn manuell.', 'Du musst den Stil in den globalen Präferenzen unter „Allgemein" beschreiben.'], correct: 1, explanation: 'Textprobe hochladen → Claude analysiert automatisch Ton, Struktur und Wortwahl und adaptiert diesen Stil.' },
      { q: 'Was passiert mit einem Chat, den du im Inkognitomodus (Geist-Symbol) führst, wenn du das Chat-Fenster schließt?', options: ['Er wird automatisch in das Projekt „Unsortiert" verschoben.', 'Er bleibt 24 Stunden in der Seitenleiste sichtbar und wird dann gelöscht.', 'Er taucht gar nicht erst in der Seitenleiste auf und wird nicht dauerhaft gespeichert.', 'Er wird anonymisiert für das Training der KI verwendet.'], correct: 2, explanation: 'Inkognitomodus = kein dauerhafter Speicher. Der Chat erscheint nicht in der Seitenleiste und wird nicht aufbewahrt.' },
      { q: 'Dein Drucker druckt nur noch Streifen. Wie sieht der effizienteste 2-Schritte-Workflow mit Claude aus?', options: ['1. Websuche nach Testberichten des Druckers, 2. Kauf eines neuen Geräts über Claude.', '1. Allgemeine Problembeschreibung, 2. Hochladen eines Fotos vom fehlerhaften Ausdruck oder der Fehlermeldung am PC.', '1. Aktivierung von Opus, 2. Erstellung eines Python-Skripts zur Druckersteuerung.', '1. Nutzung des Haiku-Modells für eine schnelle Antwort, 2. Erstellung einer Erinnerung „Mein Drucker ist kaputt".'], correct: 1, explanation: 'Erst allgemein beschreiben, dann Screenshot hochladen — Claude erkennt UI-Elemente und Fehlermeldungen direkt und gibt konkrete Handlungsanweisungen.' },
      { q: 'Was ist ein wesentlicher Vorteil von „Projekten" gegenüber einfachen Chats?', options: ['Projekte speichern Anweisungen und Dateien dauerhaft, sodass alle Chats innerhalb des Projekts davon profitieren.', 'In Projekten ist das Opus-Modell doppelt so schnell.', 'Projekte können mit anderen Nutzern geteilt werden, um gleichzeitig daran zu arbeiten.', 'Nur in Projekten kann man HTML-Websites bauen.'], correct: 0, explanation: 'Projects = dauerhafter Kontext. Einmal anlegen, nie wieder neu briefen — gilt für alle Chats innerhalb des Projekts.' },
      { q: 'Du lässt Claude eine Tabelle mit DAX-Unternehmen erstellen und eine Zahl erscheint falsch. Wie prüfst du die Verlässlichkeit der Antwort?', options: ['Du klickst auf die Websuche-Anzeige, um zu sehen, welche Quellen Claude für die Antwort gescannt hat.', 'Du bittest Claude, die Antwort im Haiku-Modell zu wiederholen.', 'Du aktivierst den Inkognitomodus und stellst die Frage erneut.', 'Claude gibt bei Tabellen grundsätzlich keine Quellen an — man muss immer manuell googeln.'], correct: 0, explanation: 'Bei aktivierter Websuche zeigt Claude die verwendeten Quellen an — so lässt sich jede Zahl nachverfolgen und prüfen.' },
      { q: 'Wie startest du den Prozess, um eine „Erinnerung" (Memory) in Claudes Gedächtnis zu speichern?', options: ['Durch Klicken auf das Herz-Symbol in der Chatleiste.', 'Indem du den Prompt mit der Phrase „Bitte erstelle eine Erinnerung" beginnst.', 'Man kann Erinnerungen nur manuell in den Einstellungen unter „Fähigkeiten" eintippen.', 'Claude entscheidet selbstständig nach jedem Chat, was er als Erinnerung speichert.'], correct: 1, explanation: '„Bitte erstelle eine Erinnerung" ist der Trigger — Claude speichert den Fakt dann dauerhaft und berücksichtigt ihn in zukünftigen Chats.' }
    ]
  },
  {
    id: 2,
    number: '02',
    meta: 'Aufbau · Modul 2',
    title: 'Prompting und strukturierte Anweisungen',
    desc: 'Einführung in den Aufbau wirksamer Prompts, den Einsatz von Beispielen, XML-Strukturen und wiederverwendbaren Anweisungen für konsistentere Ergebnisse.',
    duration: '60 Min.',
    videos: [
      { url: 'https://www.youtube.com/embed/m4rFoTPpeAA', title: 'Prompt Engineering Praxis', caption: 'Video 2.1 · Prompt Engineering in der Praxis' },
      { url: 'https://www.youtube.com/embed/ysPbXH0LpIE', title: 'Anthropic Best Practices', caption: 'Video 2.2 · Prompt Engineering 101 nach Anthropic' },
    ],
    images: [],
    longContent: '',
    content: `
      <h3>1. Prompt Engineering als iterative Wissenschaft</h3>
      <p>Prompt Engineering ist kein einmaliges Eintippen, sondern eine <strong>empirische Wissenschaft</strong>.</p>
      <ul>
        <li><strong>Der Prozess:</strong> Man startet mit einer Basis-Anweisung, analysiert die Fehler der KI und baut den Prompt <em>schrittweise (iterativ)</em> aus.</li>
        <li><strong>Das Ziel:</strong> Klare Anweisungen so strukturieren, dass die KI im ersten Versuch das gewünschte Ergebnis liefert.</li>
      </ul>
      <h3>2. Die 6 Bausteine des perfekten Prompts</h3>
      <table>
        <thead><tr><th>Baustein</th><th>Beschreibung</th><th>Beispiel</th></tr></thead>
        <tbody>
          <tr><td><strong>Rolle</strong></td><td>Fachliche Identität geben</td><td>„Du bist ein erfahrener Social-Media-Berater"</td></tr>
          <tr><td><strong>Aufgabe</strong></td><td>Das Herzstück — starte mit einem Verb</td><td>„Analysiere", „Erstelle", „Vergleiche"</td></tr>
          <tr><td><strong>Kontext</strong></td><td>Relevante Hintergrundinfos</td><td>Zielgruppe, Problemstellung, Tonfall</td></tr>
          <tr><td><strong>Vorgehen</strong></td><td>Logische Einzelschritte</td><td>„Schritt 1: Recherche, Schritt 2: Analyse"</td></tr>
          <tr><td><strong>Stoppkriterien</strong></td><td>Grenzen gegen Halluzinationen</td><td>„Wenn unsicher, sag es offen"</td></tr>
          <tr><td><strong>Output</strong></td><td>Genaues Format bestimmen</td><td>Tabelle, Liste, JSON, Wortanzahl</td></tr>
        </tbody>
      </table>
      <div class="callout">
        <div class="callout-title">Warum Stoppkriterien?</div>
        <p>Ohne klare Grenzen ratet Claude lieber, als Unsicherheit zuzugeben.</p>
      </div>
      <h3>3. Strukturierung durch XML-Tags</h3>
      <p>Anthropic empfiehlt XML-Tags (z.B. <code>&lt;anweisungen&gt;</code>, <code>&lt;kontext&gt;</code>), um Informationen sauber zu trennen.</p>
      <h3>4. Fortgeschrittene Prompt-Techniken</h3>
      <h4>Few-Shot Prompting</h4><p>Zeige Claude <strong>1 bis 3 Beispiele</strong>.</p>
      <h4>Chain of Thought</h4><p>Claude anweisen, <strong>„Schritt für Schritt zu denken"</strong>.</p>
      <h4>Prompt Chaining</h4><p>Riesige Aufgabe in <strong>kleine, aufeinanderfolgende Prompts</strong> zerlegen.</p>
      <h4>Self-Reflection</h4><p>Claude bitten, seine Antwort <strong>selbst auf Fehler zu prüfen</strong>.</p>
      <h4>Pre-filling</h4><p>Anfang der Antwort vorgeben (z.B. <code>{</code> für JSON).</p>
      <h3>5. Effizienz durch System-Prompts &amp; Caching</h3>
      <ul>
        <li><strong>System-Prompts:</strong> Statische Informationen auslagern.</li>
        <li><strong>Prompt Caching:</strong> Spart Zeit, da Claude statische Dokumente nicht neu einlesen muss.</li>
      </ul>
      <h3>6. Die Reihenfolge der Analyse</h3>
      <p>Immer <strong>Form vor Sketch</strong> — erst klare Fakten, dann interpretative Daten.</p>
      <div class="callout callout-warn">
        <div class="callout-title">Merke</div>
        <p>Strukturierte Daten liefern den Kontext, in dem unstrukturierte Daten korrekt interpretiert werden.</p>
      </div>
    `,
    quiz: [
      { q: 'Prompt Engineering wird als "iterative Wissenschaft" beschrieben. Welches Vorgehen entspricht dieser Idee am genauesten?', options: ['Man kopiert bewährte Prompts aus dem Internet und nutzt sie unverändert', 'Man startet mit einer Basis, analysiert Schwächen und verbessert schrittweise', 'Man formuliert von Anfang an einen einzigen, fertigen und perfekten Prompt', 'Man überlässt der KI das eigenständige Schreiben des kompletten Prompts'], correct: 1, explanation: 'Iterativ heißt schrittweise verbessern: mit einer Basis starten, Fehler analysieren, ausbauen und wiederholen.' },
      { q: 'Von den sechs Bausteinen eines Prompts gilt einer als das "Herzstück". Welcher ist gemeint und warum?', options: ['Der Kontext, da er alle nötigen Hintergrundinformationen für die Antwort liefert', 'Das Output-Format, weil es die Form des Ergebnisses verbindlich vorab festlegt', 'Die Rolle, weil sie Claude die passende Perspektive und Fachexpertise zuweist', 'Die Aufgabe, denn sie ist konkret und beginnt stets mit einem klaren Verb'], correct: 3, explanation: 'Die Aufgabe ist das Herzstück: Sie muss konkret formuliert sein und startet immer mit einem Verb.' },
      { q: 'In einem Prompt werden bewusst "Stoppkriterien" gesetzt. Welche Funktion erfüllen sie?', options: ['Sie beenden den laufenden Chat nach einer fest definierten Zeitspanne automatisch', 'Sie verhindern grundsätzlich, dass Claude überhaupt jemals Rückfragen an dich stellt', 'Sie setzen klare Grenzen und beugen erfundenen, halluzinierten Antworten gezielt vor', 'Sie begrenzen jede einzelne Antwort fest auf höchstens einhundert Wörter Länge'], correct: 2, explanation: 'Stoppkriterien verhindern, dass Claude rät statt Unsicherheit offen zuzugeben.' },
      { q: 'Anthropic empfiehlt, Prompts mit XML-Tags zu strukturieren. Worin liegt der eigentliche Nutzen?', options: ['Claude wurde darauf trainiert und kann sich gezielt auf einzelne Abschnitte beziehen', 'Die Tags verschlüsseln den Prompt, sodass Außenstehende ihn nicht mehr mitlesen können', 'Ohne solche Tags lässt sich die integrierte Websuche von Claude gar nicht erst aktivieren', 'Die Tags lassen den Prompt für den menschlichen Betrachter lediglich aufgeräumter wirken'], correct: 0, explanation: 'Claude wurde auf XML-Struktur trainiert; Tags ermöglichen die gezielte Referenzierung einzelner Abschnitte.' },
      { q: 'Eine umfangreiche Aufgabe soll über "Prompt Chaining" gelöst werden. Was beschreibt diese Technik korrekt?', options: ['Man verpackt einen Prompt in eine möglichst lange, dekorative Kette aus Emojis', 'Man zerlegt eine große Aufgabe in kleine, sinnvoll aufeinanderfolgende Prompts', 'Man lässt jeden eingegebenen Prompt automatisch in mehrere andere Sprachen übersetzen', 'Man setzt mehrere KI-Modelle exakt gleichzeitig für ein und dieselbe Aufgabe ein'], correct: 1, explanation: 'Prompt Chaining zerlegt eine große Aufgabe in kleine Schritte, deren Teilergebnisse geprüft und weiterverwendet werden.' },
      { q: 'Die Technik "Self-Reflection" wird in einem Prompt eingesetzt. Was bewirkt sie konkret?', options: ['Claude legt im Hintergrund automatisch ein fortlaufendes Tagebuch seiner Antworten an', 'Der Nutzer reflektiert zunächst gründlich und in Ruhe über die eigene Fragestellung', 'Claude legt vor jeder Antwort eine kurze gedankliche Pause zum Sortieren der Inhalte ein', 'Claude prüft die eigene Antwort kritisch auf Fehler und überarbeitet sie anschließend'], correct: 3, explanation: 'Bei Self-Reflection wird Claude gebeten, die eigene Antwort kritisch zu prüfen und gezielt zu verbessern.' },
      { q: 'Du nutzt die Technik "Pre-filling". Welche Beschreibung trifft genau zu?', options: ['Man gibt Claude den Anfang der Antwort vor, etwa { als Start für ein JSON-Objekt', 'Man legt häufig genutzte Prompts in einer Bibliothek zur späteren Wiederverwendung ab', 'Man bittet Claude darum, den gesamten bisherigen Chatverlauf knapp zusammenzufassen', 'Man füllt vorab ein klassisches Online-Formular mit den eigenen Angaben vollständig aus'], correct: 0, explanation: 'Pre-filling gibt den Antwortanfang vor — beginnt die Antwort mit {, erzwingt das zuverlässig ein JSON-Format.' },
      { q: 'Statische, gleichbleibende Informationen gehören in den System-Prompt statt in jede Anfrage. Warum?', options: ['Weil der System-Prompt im Gegensatz zu normalen Eingaben unbegrenzt lang sein darf', 'Weil gewöhnliche Prompts grundsätzlich keine angehängten Dokumente akzeptieren können', 'Weil statische Inhalte dank Caching nicht bei jeder einzelnen Anfrage neu gelesen werden', 'Weil der System-Prompt die eingegebenen Inhalte spürbar und messbar schneller verarbeitet'], correct: 2, explanation: 'Statische Inhalte im System-Prompt werden gecacht und müssen nicht bei jeder Anfrage neu eingelesen werden.' },
      { q: 'Du analysierst gemeinsam ein ausgefülltes Formular und eine grobe Handskizze. Welche Reihenfolge ist sinnvoll?', options: ['Die Reihenfolge ist unerheblich, da Claude beide Quellen ohnehin völlig gleich gewichtet', 'Zuerst die klaren Fakten des Formulars, danach die deutungsbedürftige Handskizze', 'Beide Quellen gleichzeitig einreichen, weil das die Verarbeitung am stärksten beschleunigt', 'Zuerst die Handskizze interpretieren und erst danach das strukturierte Formular auswerten'], correct: 1, explanation: 'Form vor Sketch: Die strukturierten Fakten liefern den Kontext, vor dem sich die Skizze richtig deuten lässt.' },
      { q: 'Few-Shot Prompting wird gegenüber einer langen Beschreibung bevorzugt. Worin liegt sein zentraler Vorteil?', options: ['Es funktioniert technisch bedingt ausschließlich mit dem leistungsstärksten Modell Opus', 'Es senkt die Kosten spürbar, weil dabei insgesamt deutlich weniger Tokens verbraucht werden', 'Es eignet sich nur für das Erzeugen und Korrigieren von strukturiertem Programmcode', 'Wenige konkrete Beispiele zeigen das gewünschte Ergebnis klarer als lange Beschreibungen'], correct: 3, explanation: 'Ein bis drei konkrete Beispiele machen das Ziel oft greifbarer als lange Erklärungen — Claude lernt am Muster.' }
    ]
  },
  {
    id: 3,
    number: '03',
    meta: 'Sicherheit · Modul 3',
    title: 'Sicherer Umgang mit Daten und Tools',
    desc: 'Grundlagen für den sicheren Einsatz von Claude: sensible Inhalte, typische Risikofelder, Konnektoren und zentrale Regeln für datenschutzbewusstes Arbeiten.',
    duration: '15 Min.',
    videos: [],
    images: [],
    longContent: '',
    content: `
      <h3>1. Das gehört nicht in den persönlichen Account</h3>
      <p>Manche Daten sollten niemals in einen persönlichen KI-Account eingegeben werden. Falls das bereits passiert ist: einfach ab sofort aufhören.</p>
      <div class="callout callout-warn">
        <div class="callout-title">Niemals einfügen</div>
        <ul>
          <li>Quellcode oder Inhalte aus dem firmeneigenen Codebase</li>
          <li>Kunden- oder Mandantendaten: Namen, E-Mails, Telefonnummern, Adressen, Gesundheitsinfos</li>
          <li>Unveröffentlichte Pläne, Roadmaps, Designs oder Prototypen</li>
          <li>Nicht-öffentliche Finanzdaten: Umsätze, Margen, Budgets, Forecasts, Deal-Konditionen</li>
          <li>Alles mit dem Vermerk „vertraulich", „intern" oder unter NDA</li>
          <li>Zugangsdaten, Passwörter, API-Keys, Sicherheitseinstellungen</li>
          <li>Vollständige Verträge oder juristische Dokumente mit echten Namen und Konditionen</li>
          <li>Aufzeichnungen oder Protokolle interner Meetings</li>
        </ul>
      </div>
      <p>Wer KI-Unterstützung für diese Inhalte benötigt: erst <strong>anonymisieren</strong> oder den <strong>IEG Claude Account</strong> verwenden.</p>
      <h3>2. Die Nebenprojekt-Falle</h3>
      <p>Was passiert, wenn man den KI-Account des Arbeitgebers nutzt, um ein privates Nebenprojekt zu entwickeln? Im schlimmsten Fall gehört das Projekt dem Arbeitgeber. Die einfache Regel: <strong>Privates auf privaten Geräten, mit dem privaten Account.</strong></p>
      <h3>3. Konnektoren: nützlich und riskant</h3>
      <p>Ein <strong>Konnektor</strong> verbindet die KI mit einem anderen Dienst: Gmail, Google Drive, Calendar, Slack, Teams, Outlook. Der Zugriff ist enorm — Gmail verbinden bedeutet, dass die KI das gesamte Postfach lesen kann.</p>
      <p>Eine verbundene KI kann durch <strong>manipulierte Inhalte in E-Mails oder Dokumenten gesteuert werden</strong> — bekannt als die <strong>„Lethal Trifecta"</strong>.</p>
      <div class="callout callout-warn">
        <div class="callout-title">Die Lethal Trifecta</div>
        <p>KI hat Zugriff auf private Daten + liest externe Inhalte, die man nicht kontrolliert + kann Informationen nach außen senden = Angreifer können Daten stehlen.</p>
      </div>
      <h3>4. Konnektoren sicher einsetzen</h3>
      <ul>
        <li><strong>Keine Arbeitsaccounts mit dem persönlichen KI-Account verbinden.</strong></li>
        <li><strong>So wenig verbinden wie möglich, mit minimalem Zugriff.</strong></li>
        <li><strong>Nur offizielle Konnektoren nutzen.</strong></li>
        <li><strong>Monatlich prüfen und nicht benötigte Verbindungen trennen.</strong></li>
      </ul>
      <div class="callout callout-success">
        <div class="callout-title">Fazit</div>
        <p>Konnektoren gehören in den <strong>IEG Claude Account</strong> — dort ist die Sicherheit professionell gewährleistet.</p>
      </div>
    `,
    quiz: [
      { q: 'Ein M&A-Vertrag mit echten Mandantennamen und Deal-Konditionen soll analysiert werden. Was ist richtig?', options: ['In den persönlichen Claude Account einfügen und den Inkognito-Modus aktivieren', 'Eine Kollegin bitten, den Text einzufügen', 'Daten zuerst anonymisieren oder den IEG Enterprise Account verwenden', 'Schnell einfügen, bevor jemand es bemerkt'], correct: 2, explanation: 'Verträge mit echten Namen und Deal-Konditionen gehören zur "Niemals einfügen"-Kategorie. Erst anonymisieren oder den IEG Enterprise Account nutzen.' },
      { q: 'Ein Nebenprojekt wird mit dem KI-Abonnement des Arbeitgebers entwickelt. Wem gehört das Ergebnis?', options: ['Mir, weil ich die Prompts geschrieben habe', 'Niemandem — KI-generierter Code ist nicht urheberrechtlich geschützt', 'Dem KI-Anbieter (Anthropic)', 'Dem Arbeitgeber, weil dessen Tool genutzt wurde'], correct: 3, explanation: 'Nutzung des firmeneigenen KI-Tools für Nebenprojekte = das geistige Eigentum kann rechtlich dem Arbeitgeber gehören.' },
      { q: 'Was passiert, wenn Gmail mit dem persönlichen KI-Account verbunden wird?', options: ['Die KI sieht nur manuell ausgewählte E-Mails', 'Die KI erhält Lesezugriff auf das gesamte Postfach', 'Es ändert sich nichts — Konnektoren sind rein kosmetisch', 'Die KI löscht automatisch alte E-Mails'], correct: 1, explanation: 'Enormer Zugriff: Nach der Verbindung kann die KI das gesamte Postfach lesen.' },
      { q: 'Welche drei Bedingungen machen die "Lethal Trifecta" möglich?', options: ['Drei KI-Modelle gleichzeitig nutzen', 'KI hat Zugriff auf private Daten, liest externe Inhalte und kann Informationen nach außen senden', 'Drei verschiedene Browser gleichzeitig verwenden', 'Drei Konnektoren vom selben Anbieter'], correct: 1, explanation: 'Private Daten + externe Inhalte + ausgehende Verbindung = Angreifer können die KI kapern.' },
      { q: 'Warum sollte der Firmen-Slack niemals mit einem persönlichen KI-Account verbunden werden?', options: ['Weil Slack keine KI-Konnektoren unterstützt', 'Weil das die KI verlangsamt', 'Weil damit Firmendaten in ein Tool ohne Enterprise-Vertrag fließen', 'Weil persönliche Accounts sicherer sind'], correct: 2, explanation: 'Arbeitsaccounts im persönlichen KI-Tool = Firmendaten ohne Vertrag und ohne Audit-Trail.' },
      { q: 'Warum kann ein bereits genehmigter Drittanbieter-Konnektor gefährlich werden?', options: ['Er verlangsamt den Computer', 'Er kann sein Verhalten nach der Genehmigung unbemerkt ändern', 'Drittanbieter-Konnektoren stehlen grundsätzlich Passwörter', 'Er verbraucht zu viel Akku'], correct: 1, explanation: 'Remote-Konnektoren von Drittanbietern können nach der Genehmigung still und heimlich ihr Verhalten ändern.' },
      { q: 'Wie oft sollten aktive Konnektoren überprüft und nicht genutzte getrennt werden?', options: ['Einmal jährlich beim Jahresgespräch', 'Niemals — einmal verbunden, immer verbunden', 'Nur wenn etwas schiefläuft', 'Monatlich — KI-Einstellungen prüfen und Unnötiges trennen'], correct: 3, explanation: 'Monatliche Überprüfung: Alles trennen, was nicht aktiv genutzt wird.' }
    ]
  },
  {
    id: 4,
    number: '04',
    meta: 'Fortgeschritten · Modul 4',
    title: 'Skills und wiederverwendbare Arbeitsabläufe',
    desc: 'Einführung in Skills als strukturierte, wiederverwendbare Arbeitsanweisungen — von der inhaltlichen Vorbereitung bis zur praktischen Anwendung im Arbeitsalltag.',
    duration: '30 Min.',
    videos: [
      { url: 'https://www.youtube.com/embed/XHVgq4zodpE', title: 'Claude Skills', caption: 'Video 3.1 · Claude Skills erstellen und anwenden' },
    ],
    images: [],
    longContent: '',
    content: `
      <h3>1. Was sind Claude Skills?</h3>
      <p>Ein Skill ist eine <strong>fest definierte, wiederverwendbare Arbeitsanweisung</strong>.</p>
      <table>
        <thead><tr><th>Eigenschaft</th><th>Projekte</th><th>Skills</th></tr></thead>
        <tbody>
          <tr><td><strong>Übertragbarkeit</strong></td><td>Isoliert</td><td>In jedem Chat nutzbar</td></tr>
          <tr><td><strong>Kombinierbarkeit</strong></td><td>Festgefahren</td><td>Flexibel kombinierbar</td></tr>
          <tr><td><strong>Systematik</strong></td><td>Manuell</td><td>Definierte Prozesse</td></tr>
        </tbody>
      </table>
      <div class="callout">
        <div class="callout-title">Kernidee</div>
        <p>Statt der KI jedes Mal zu sagen was sie tun soll, baust du eine <strong>Sammlung klar definierter Prozesse</strong> auf.</p>
      </div>
      <h3>2. Wissensgewinnung mit NotebookLM</h3>
      <ul>
        <li><strong>Deep Research:</strong> NotebookLM durchsucht über 60 Quellen.</li>
        <li><strong>Wissen strukturieren:</strong> Rohmaterial in ein klares System überführen.</li>
      </ul>
      <h3>3. Den Skill in Claude konfigurieren</h3>
      <p>Im <strong>Skill Creator Modus</strong> stellt Claude Rückfragen: Ziel, Zielgruppe, Output-Format, Sprache.</p>
      <h3>4. Den Skill im Alltag anwenden</h3>
      <ul>
        <li>Über das <strong>Plus-Symbol</strong> im Chat auswählen.</li>
        <li>Geringer Prompt-Aufwand dank verankertem Expertenwissen.</li>
      </ul>
      <h3>5. Skalierbarkeit</h3>
      <p>Nicht auf Landing Pages beschränkt — einsetzbar für E-Mail-Funnels, Content-Strategien, Unternehmensstrategien.</p>
    `,
    quiz: [
      { q: 'Was unterscheidet einen Claude Skill von einer Projektanweisung?', options: ['Skills funktionieren nur mit Claude Opus', 'Ein Skill ist nur für private Notizen gedacht', 'Projektanweisungen sind flexibler als Skills', 'Skills sind übertragbar und in jedem Chat nutzbar, Projektanweisungen sind isoliert'], correct: 3, explanation: 'Skills sind übertragbar und kombinierbar — Projektanweisungen bleiben an ein Projekt gebunden.' },
      { q: 'Welches Tool wird für die Wissensgewinnung vor der Skill-Erstellung empfohlen?', options: ['Google Docs', 'NotebookLM mit Deep Research', 'Microsoft Word', 'ChatGPT'], correct: 1, explanation: 'NotebookLM mit Deep Research durchsucht über 60 Quellen.' },
      { q: 'Welche Rückfragen stellt Claude im Skill Creator Modus?', options: ['Ziel, Zielgruppe, Output-Format und Sprache', 'Claude stellt keine Rückfragen', 'Nur nach dem Namen des Skills', 'Nur nach dem Preis'], correct: 0, explanation: 'Claude fragt interaktiv: Ziel, Zielgruppe, Format, Sprache.' },
      { q: 'Warum reicht bei einem fertigen Skill oft ein kurzer Prompt?', options: ['Weil Skills nur einfache Aufgaben erledigen', 'Weil der Skill den Prompt automatisch verlängert', 'Weil das Expertenwissen bereits im Skill verankert ist', 'Weil Skills mit zufälligen Texten arbeiten'], correct: 2, explanation: 'Frameworks und Abläufe sind bereits gespeichert — der Skill sorgt automatisch für Qualität.' },
      { q: 'Was ist das übergeordnete Ziel des Skill-Systems?', options: ['Nur Landing Pages zu erstellen', 'Claude durch ein anderes Tool zu ersetzen', 'Möglichst viele einzelne Prompts zu schreiben', 'Weg von einzelnen Prompts hin zu einem festen Arbeitssystem'], correct: 3, explanation: 'Ziel: Von isolierten Prompts zu einem systematischen Arbeitssystem.' }
    ]
  },
  {
    id: 5,
    number: '05',
    meta: 'Praxis · Modul 5',
    title: 'Skills in Finance-Workflows',
    desc: 'Praxisnahe Anwendungsbeispiele für Skills in finanznahen Prozessen, darunter Datenaufbereitung, Strukturierung von Inhalten, Dashboards und wiederkehrende Arbeitsabläufe.',
    duration: '30 Min.',
    videos: [
      { url: 'https://www.youtube.com/embed/h0XeJi6OAVI', title: 'Finance Automation mit Claude Skills', caption: 'Video 5.1 · Kreditkartenabrechnung vollautomatisiert mit Claude Skills' },
    ],
    images: [],
    longContent: '',
    content: `
      <p>Dieser Workflow zeigt, wie man komplexe Finanzaufgaben durch die Kombination spezialisierter Skills in einen <strong>vollautomatisierten Prozess</strong> verwandelt.</p>
      <h3>1. Was sind Claude Skills im Finanzkontext?</h3>
      <p>Ein Skill konserviert einen einmal definierten Workflow für zukünftige Nutzung. Im Finanzbereich transformieren sie Rohdaten in <strong>CFO-fertige Berichte</strong>.</p>
      <h3>2. Die Bausteine des Workflows</h3>
      <h4>Skill 1: Data Cleaning</h4>
      <ul>
        <li><strong>Ausgangslage:</strong> Rohdateien oft unstrukturiert, fehlende Felder.</li>
        <li><strong>Funktion:</strong> Tabs konsolidieren, nur relevante Felder behalten, fehlende Infos ergänzen.</li>
      </ul>
      <h4>Skill 2: Branding &amp; Design-Richtlinien</h4>
      <p>Farben, Stile und KPI-Anforderungen hinterlegen — alle Ausgaben tragen automatisch das Corporate Design.</p>
      <h4>Skill 3: Dynamic Dashboard Builder</h4>
      <ul>
        <li><strong>Technik:</strong> Interaktives HTML-Dashboard.</li>
        <li><strong>Drill-Down:</strong> Klick auf Namen zeigt alle detaillierten Berichte.</li>
      </ul>
      <h4>Skill 4: PowerPoint-Präsentationen</h4>
      <p>Präsentation für Vorstandssitzungen — Branding automatisch übernommen.</p>
      <h3>3. Der "Super Skill" (Full Cycle Automation)</h3>
      <div class="callout callout-success">
        <div class="callout-title">Ablauf</div>
        <p><strong>1.</strong> Data Cleaning → <strong>2.</strong> Saubere Excel → <strong>3.</strong> Dashboard → <strong>4.</strong> PowerPoint</p>
      </div>
      <p>Ein Prompt wie <strong>"credit card report cycle"</strong> führt den gesamten Prozess in Minuten autark durch.</p>
      <h3>4. Verwaltung der Skills</h3>
      <p>Einstellungen → <strong>Customize → Skills</strong></p>
    `,
    quiz: [
      { q: 'Was ist ein Claude Skill im Finanzkontext?', options: ['Ein einmaliger Prompt, der nach Benutzung gelöscht wird', 'Eine gespeicherte Arbeitsanweisung, die Rohdaten in CFO-fertige Berichte transformiert', 'Ein externes Excel-Plugin', 'Eine manuelle Checkliste für Buchhalter'], correct: 1, explanation: 'Ein Skill konserviert einen definierten Workflow für wiederholte Nutzung.' },
      { q: 'Was macht der "Data Cleaning"-Skill mit unstrukturierten Excel-Exporten?', options: ['Er löscht die gesamte Datei und erstellt sie neu', 'Er konsolidiert Tabs, behält relevante Felder und fügt fehlende Infos hinzu', 'Er konvertiert Excel in PDF ohne Änderungen', 'Er sendet die Datei an einen menschlichen Buchhalter'], correct: 1, explanation: 'Data Cleaning: Tabs zusammenführen, relevante Felder behalten, fehlende Infos ergänzen.' },
      { q: 'Warum wird ein separater Branding-Skill erstellt?', options: ['Weil Claude ohne Branding-Skill nicht funktioniert', 'Damit alle Ausgaben automatisch das Corporate Design tragen', 'Um das Claude-Interface farblich anzupassen', 'Weil Branding gesetzlich vorgeschrieben ist'], correct: 1, explanation: 'Der Branding-Skill hinterlegt Farben und Stile — alle Outputs sehen automatisch professionell aus.' },
      { q: 'Was ist die "Drill-Down"-Funktion im Dynamic Dashboard?', options: ['Eine Funktion zum Löschen von Daten', 'Ein Button zum Exportieren als PDF', 'Ein Bohrmaschinen-Simulator', 'Durch Klick auf einen Namen werden alle detaillierten Berichte angezeigt'], correct: 3, explanation: 'Drill-Down = auf Namen klicken → alle detaillierten Transaktionen sehen.' },
      { q: 'In welcher Reihenfolge arbeitet der "Super Skill"?', options: ['Dashboard → PowerPoint → Data Cleaning → Excel', 'PowerPoint → Dashboard → Excel → Data Cleaning', 'Data Cleaning → saubere Excel → Dashboard → PowerPoint', 'Excel → PowerPoint → Dashboard → Data Cleaning'], correct: 2, explanation: 'Die Kette: 1. Cleaning → 2. Excel → 3. Dashboard → 4. PowerPoint.' },
      { q: 'Was passiert, wenn man "credit card report cycle" eingibt?', options: ['Claude fragt nach weiteren Details und wartet', 'Claude führt den gesamten Workflow autark durch', 'Claude zeigt nur die letzte Kreditkartenabrechnung', 'Claude öffnet die Kreditkarten-Website'], correct: 1, explanation: 'Der Super Skill verknüpft alle Einzelskills — ein Prompt löst den kompletten Prozess aus.' },
      { q: 'Wo findet man alle gespeicherten Skills?', options: ['Im Chat-Verlauf unter "Letzte Nachrichten"', 'In den Einstellungen unter Customize → Skills', 'Auf der Anthropic-Website unter "Downloads"', 'Skills können nach der Erstellung nicht mehr bearbeitet werden'], correct: 1, explanation: 'Einstellungen → Customize → Skills.' },
      { q: 'Wie wird ein neuer Skill am besten erstellt?', options: ['Man schreibt den Skill manuell in einem Texteditor', 'Man kauft Skills im Claude Store', 'Man lässt Claude die Aufgabe erst im Chat lösen, dann den Skill erstellen', 'Skills werden automatisch nach 10 ähnlichen Chats erstellt'], correct: 2, explanation: 'Best Practice: Erst im Chat lösen, dann Claude anweisen den Skill zu erstellen.' },
      { q: 'Welches Format nutzt der Dashboard Builder?', options: ['PDF mit eingebetteten Links', 'PowerPoint mit Animationen', 'Excel mit Pivot-Tabellen', 'Interaktives HTML mit Filtern und Trendanalysen'], correct: 3, explanation: 'Der Dashboard Builder erstellt interaktives HTML mit Drill-Down-Funktionalität.' },
      { q: 'Was ist der Hauptvorteil des modularen Skill-Ansatzes?', options: ['Ein großer Prompt ist immer besser als mehrere Skills', 'Modulare Skills sind billiger', 'Einzelne Skills können unabhängig aktualisiert, kombiniert und wiederverwendet werden', 'Es gibt keinen Unterschied'], correct: 2, explanation: 'Modularität: Jeder Skill einzeln aktualisierbar, frei kombinierbar, in verschiedenen Workflows wiederverwendbar.' }
    ]
  },
  {
    id: 6,
    number: '06',
    meta: 'Praxis · Modul 6',
    title: 'Claude Cowork — Der autonome Desktop-Agent',
    desc: 'Während ein Chatbot nur antwortet, handelt Claude Cowork selbstständig auf deinem Rechner: Dateien sortieren, Dokumente erstellen, im Web recherchieren und Aufgaben planen — inklusive Setup, Sicherheit und Personal Instructions.',
    duration: '45 Min.',
    videos: [
      { url: 'https://www.youtube.com/embed/ZeWfksNXlbU', title: 'Claude Cowork — Einführung', caption: 'Video 6.1 · Claude Cowork — Der autonome Desktop-Agent im Überblick' },
      { url: 'https://www.youtube.com/embed/bEO0gDF5zqs', title: 'Claude Cowork — Praxis & Automatisierung', caption: 'Video 6.2 · Cowork in der Praxis — Workflows, Konnektoren und Automatisierung' },
    ],
    images: [],
    longContent: '',
    content: `
      <h3>1. Was ist Claude Cowork?</h3>
      <p>Claude Cowork ist ein <strong>KI-Agent, der selbstständig auf deinem Computer handelt</strong>. Das Modell ist das <strong>Gehirn</strong>, Cowork sind die <strong>Hände</strong> — es kann Dateien öffnen, verschieben, umbenennen und Programme steuern.</p>
      <h3>2. Einrichtung und Sicherheit</h3>
      <ul>
        <li><strong>Desktop-App:</strong> Nur über die Claude Desktop-App (Mac/Windows) mit <strong>Pro-Abo</strong>.</li>
        <li><strong>Sicherheits-Sandboxing:</strong> Cowork arbeitet nur in explizit freigegebenen Ordnern.</li>
        <li><strong>Arbeitsumgebung:</strong> Für jedes Projekt einen eigenen Ordner anlegen.</li>
      </ul>
      <h3>3. Kernfunktionen</h3>
      <ul>
        <li><strong>Dateimanagement:</strong> Hunderte Dateien analysieren, umbenennen und sortieren.</li>
        <li><strong>Dokumentenerstellung:</strong> Excel-Tabellen, CSV-Tracker oder PowerPoint aus Rohdaten erstellen.</li>
        <li><strong>Web-Browsing:</strong> Über „Claude in Chrome" — recherchieren, Seiten zusammenfassen, Daten extrahieren.</li>
        <li><strong>Konnektoren:</strong> Verbindung zu Gmail, Notion, Google Drive oder Slack.</li>
      </ul>
      <h3>4. Fortgeschrittene Automatisierung</h3>
      <ul>
        <li><strong>Zeitsteuerung:</strong> z.B. „Prüfe jeden Morgen um 8 Uhr den Ordner auf neue Protokolle und versende sie".</li>
        <li><strong>Markdown-Gedächtnis:</strong> Cowork nutzt Markdown-Dateien im Projektordner zum Speichern von Informationen über Sessions hinweg.</li>
        <li><strong>Skills &amp; Plugins:</strong> Fachkenntnisse beibringen oder Corporate Design als Skill hinterlegen.</li>
      </ul>
      <h3>5. Wichtige Regeln</h3>
      <div class="callout callout-warn">
        <div class="callout-title">Session Persistence</div>
        <p>Die Desktop-App muss <strong>offen bleiben</strong>, während ein Task läuft.</p>
      </div>
      <div class="callout">
        <div class="callout-title">Modellwahl</div>
        <p>Für einfaches Sortieren reicht <strong>Sonnet</strong>; für komplexe Analysen <strong>Opus</strong> (mehr Credits).</p>
      </div>
    `,
    quiz: [
      { q: 'Wie lässt sich das Verhältnis von Claude-Modell und Cowork am treffendsten beschreiben?', options: ['Cowork ersetzt das Sprachmodell durch eine eigene, schnellere Spezial-Engine', 'Das Modell ist das Gehirn, Cowork sind die Hände, die Dateien und Programme steuern', 'Cowork ist ein reiner Chatbot ohne jeden Zugriff auf das lokale Dateisystem', 'Cowork und das Modell laufen in zwei vollständig voneinander getrennten Konten'], correct: 1, explanation: 'Das Modell ist das Gehirn, Cowork die Hände — es öffnet, verschiebt und benennt Dateien und steuert Programme.' },
      { q: 'Über welchen Zugang läuft Cowork und welche Voraussetzung gilt dafür?', options: ['Über jeden Browser ohne weitere Voraussetzung', 'Allein über die mobile App, ein kostenloses Konto genügt', 'Ausschließlich über die Web-Oberfläche mit Team-Vertrag', 'Ausschließlich über die Desktop-App (Mac/Windows) und mit einem Pro-Abo'], correct: 3, explanation: 'Cowork funktioniert nur über die Claude Desktop-App für Mac und Windows und setzt ein Pro-Abo voraus.' },
      { q: 'Welchen Zweck erfüllt das Sicherheits-Sandboxing in Claude Cowork?', options: ['Cowork arbeitet nur in den Ordnern, die man ihm zuvor explizit freigegeben hat', 'Es verschlüsselt sämtliche Festplatten des Rechners automatisch im Hintergrund', 'Es begrenzt die maximale Laufzeit eines einzelnen Tasks fest auf zehn Minuten', 'Es verbietet während eines laufenden Tasks jeden Zugriff auf das Internet'], correct: 0, explanation: 'Sandboxing: Cowork darf nur in explizit freigegebenen Ordnern arbeiten — das schützt alle übrigen privaten Daten.' },
      { q: 'Warum nutzt Cowork Markdown-Dateien im Projektordner?', options: ['Weil Markdown die einzige Sprache ist, die Cowork überhaupt lesen kann', 'Um die erzeugten Ausgaben optisch ansprechender als ein PDF zu gestalten', 'Weil ihm ein Sitzungsgedächtnis fehlt und es Infos so dauerhaft ablegt', 'Um laufende Tasks automatisch an einen menschlichen Kollegen zu übergeben'], correct: 2, explanation: 'Cowork hat kein eingebautes Sitzungsgedächtnis und speichert Informationen daher in Markdown-Dateien im Projektordner.' },
      { q: 'Was geschieht mit einem laufenden Task, wenn man die Desktop-App schließt?', options: ['Der Task läuft unverändert in der Cloud von Anthropic einfach weiter', 'Der Task wird automatisch an die Smartphone-App zur Fortsetzung übergeben', 'Der Task pausiert und startet beim nächsten Login vollständig von vorne', 'Der Agent stoppt seine Arbeit, denn die App muss dafür geöffnet bleiben'], correct: 3, explanation: 'Session Persistence: Die App muss offen bleiben — schließt man sie, stoppt der Agent seine Arbeit.' },
      { q: 'Welche Aufgabe lässt sich mit der Scheduling-Funktion umsetzen?', options: ['"Prüfe jeden Morgen um 8 Uhr den Ordner auf neue Protokolle und versende sie"', '"Verdopple dauerhaft die Rechenleistung des verwendeten Sprachmodells"', '"Lösche eigenständig alle privaten Dateien außerhalb des Projektordners"', '"Wechsle das Abo automatisch auf einen günstigeren Tarif"'], correct: 0, explanation: 'Scheduling erlaubt wiederkehrende Aufgaben wie das tägliche Prüfen und Versenden von Protokollen.' },
      { q: 'Wie wählt man das Modell für Cowork-Aufgaben sinnvoll aus?', options: ['Immer Opus, da Sonnet für Cowork technisch nicht unterstützt wird', 'Für einfaches Sortieren reicht Sonnet, komplexe Analysen sprechen für Opus', 'Immer Haiku, weil ausschließlich dieses Modell auf lokale Dateien zugreifen darf', 'Die Modellwahl hat in Cowork keinen Einfluss auf Credits oder Ergebnisqualität'], correct: 1, explanation: 'Sonnet ist sparsam und reicht für einfache Sortieraufgaben; für komplexe Analysen lohnt Opus, das aber mehr Credits verbraucht.' },
      { q: 'Wozu dient die „Claude in Chrome"-Erweiterung im Cowork-Kontext?', options: ['Sie ersetzt die Desktop-App vollständig durch eine reine Browser-Lösung', 'Sie verschlüsselt den gesamten Browserverlauf des Nutzers automatisch', 'Sie sperrt aus Sicherheitsgründen jeden Zugriff auf externe Dashboards', 'Cowork kann damit aktiv recherchieren und Daten aus Dashboards extrahieren'], correct: 3, explanation: 'Über „Claude in Chrome" recherchiert Cowork aktiv im Web und extrahiert Daten aus Dashboards.' },
      { q: 'Was ermöglichen Konnektoren wie Gmail oder Notion in Cowork?', options: ['Claude liest z.B. offene Punkte aus einem Protokoll und versendet direkt eine E-Mail', 'Sie beschleunigen ausschließlich die reine Dateianalyse auf der Festplatte', 'Sie ersetzen das lokale Sandboxing vollständig durch einen Cloud-Speicher', 'Sie sind ausschließlich in der kostenlosen Gratis-Version von Claude verfügbar'], correct: 0, explanation: 'Konnektoren verbinden Claude mit Diensten wie Gmail oder Notion — so kann Claude Protokoll-Punkte lesen und direkt eine E-Mail senden.' },
      { q: 'Was kann Cowork aus ungeordneten Rohdaten erstellen?', options: ['Nur reine Textdateien ohne jede Formatierung', 'Ausschließlich einfache Screenshots der Originaldateien', 'Neue Dateien wie Excel-Tabellen, CSV-Tracker oder PowerPoint-Präsentationen', 'Lediglich eine reine Liste der Dateinamen'], correct: 2, explanation: 'Cowork verwandelt Rohdaten in fertige Dokumente — z.B. Excel-Tabellen, CSV-Tracker oder PowerPoint-Präsentationen.' }
    ]
  },
  {
    id: 7,
    number: '07',
    meta: 'Praxis · Modul 7',
    title: 'Claude in Microsoft Office (Excel & PowerPoint)',
    desc: 'Das Claude Add-in direkt in Excel und PowerPoint: Formeln per Sprache generieren, VBA-Makros schreiben, Zirkelbezüge korrigieren und vollständige Präsentationen aus Datentabellen erzeugen.',
    duration: '30 Min.',
    videos: [
      { url: 'https://www.youtube.com/embed/uLJp_4XCNIg', title: 'Claude im Excel Add-in', caption: 'Video 7.1 · Claude im Excel Add-in — Formeln, Makros und Datenanalyse direkt im Sheet' },
      { url: 'https://www.youtube.com/embed/oqN-_j6HdV4', title: 'Claude im PowerPoint Add-in', caption: 'Video 7.2 · Claude im PowerPoint Add-in — Folien und Sprechernotizen automatisieren' },
    ],
    images: [],
    longContent: '',
    content: `
      <h3>1. Zwei Betriebsmodi</h3>
      <table>
        <thead><tr><th>Modus</th><th>Zugang</th><th>Kernvorteil</th></tr></thead>
        <tbody>
          <tr><td><strong>Eigenständiger Chat</strong></td><td>Browser oder Desktop-App</td><td>Flexible Allzwecklösung</td></tr>
          <tr><td><strong>Office Add-in</strong></td><td>Direkt in Excel / PowerPoint</td><td>Claude sieht die geöffnete Datei und kann Zellen und Folien direkt bearbeiten</td></tr>
        </tbody>
      </table>
      <div class="callout">
        <div class="callout-title">Der entscheidende Unterschied</div>
        <p>Das Add-in liest den geöffneten Dokumentenkontext automatisch — Claude weiß, welche Zellen markiert sind und kann direkt eingreifen.</p>
      </div>
      <h3>2. Einrichtung</h3>
      <ul>
        <li>„Claude" im Microsoft AppSource Store suchen und mit einem Klick installieren.</li>
        <li>Voraussetzung: aktives <strong>Claude Pro- oder Team-Abo</strong>.</li>
        <li>Kein IT-Aufwand — Standard-Office-Add-in.</li>
      </ul>
      <h3>3. Claude in Excel</h3>
      <h4>Formeln per Sprache generieren</h4>
      <p>Natürlichsprachliche Beschreibung reicht — Claude schreibt die Formel und setzt sie direkt in die Zielzelle.</p>
      <h4>Daten transformieren und bereinigen</h4>
      <p>Duplikate entfernen, Spalten aufteilen, fehlende Werte ergänzen, Datumsspalten vereinheitlichen — per Anweisung.</p>
      <h4>VBA-Makros schreiben</h4>
      <p>Claude schreibt vollständigen VBA-Code. <strong>Wichtig:</strong> Claude kann das Makro nicht selbst ausführen — der Nutzer startet es manuell.</p>
      <h4>Fehler erkennen und korrigieren</h4>
      <p>Zirkelbezüge erkennt Claude sofort, erklärt die Ursache und korrigiert die Zelle direkt.</p>
      <div class="callout callout-success">
        <div class="callout-title">Accept all edits — Modus</div>
        <p>Claude übernimmt Korrekturen und Transformationen sofort in die Zellen — ohne jede Zwischenfrage.</p>
      </div>
      <h3>4. Claude in PowerPoint</h3>
      <ul>
        <li>Vollständige Folien aus Tabellen oder Gliederungen generieren.</li>
        <li>Sprechernotizen automatisch ergänzen.</li>
        <li>Texte kürzen, umformulieren oder ins Corporate-Design-Sprachmuster bringen.</li>
        <li>Diagrammtypen vorschlagen und erstellen.</li>
      </ul>
      <h3>5. Datensicherheit</h3>
      <p>Das Add-in überträgt <strong>nur den markierten oder aktiven Zellbereich</strong> an Claudes Server — nicht die gesamte Arbeitsmappe.</p>
      <div class="callout callout-warn">
        <div class="callout-title">Datenschutz-Pflicht bei IEG</div>
        <p>Keine echten Mandantendaten oder Deal-Konditionen im Add-in. Für sensible Modelle den <strong>IEG Claude Enterprise Account</strong> verwenden.</p>
      </div>
      <h3>6. Grenzen der Integration</h3>
      <ul>
        <li>Keine direkte Makro-Ausführung — manueller Start über VBA-Editor.</li>
        <li>Kein Datenbankzugriff (SAP, Bloomberg, SQL).</li>
        <li>Nur sichtbarer Kontext — nicht alle Tabellenblätter im Hintergrund.</li>
        <li>Keine Echtzeit-Synchronisation.</li>
      </ul>
    `,
    quiz: [
      { q: 'Was ist der entscheidende Unterschied zwischen dem Claude Add-in und dem eigenständigen Web-Chat beim Arbeiten in Excel?', options: ['Das Add-in schaltet automatisch auf das leistungsstärkste Modell um', 'Das Add-in speichert sämtliche Eingaben ausschließlich lokal', 'Das Add-in läuft direkt in Excel und kann den Dokumentenkontext lesen sowie Zellen direkt bearbeiten', 'Das Add-in ist auf Excel 2019 beschränkt'], correct: 2, explanation: 'Im Add-in sieht Claude den geöffneten Dokumentenkontext — Zellen, Formeln, Struktur — und kann direkt eingreifen.' },
      { q: 'Was bewirkt der aktivierte Modus „Accept all edits" im Claude Excel-Add-in?', options: ['Claude übernimmt Formelkorrekturen und Datenänderungen sofort in die Zellen, ohne erneut nachzufragen', 'Claude speichert die gesamte Arbeitsmappe und lädt sie auf OneDrive hoch', 'Claude akzeptiert jede Nutzereingabe ohne Inhaltsmoderation', 'Claude importiert externe Dateien und führt sie zusammen'], correct: 0, explanation: 'Im Modus „Accept all edits" werden Korrekturen, Formeln und Transformationen sofort übernommen — ohne Zwischenfrage.' },
      { q: 'Welche Daten überträgt das Claude Excel-Add-in an Anthropics Server?', options: ['Die gesamte Arbeitsmappe inklusive aller Tabellenblätter', 'Alle in Microsoft 365 geöffneten Dateien', 'Alle Kalendereinträge und E-Mails des Nutzers', 'Nur den markierten Zellbereich oder den aktiv bearbeiteten Inhalt'], correct: 3, explanation: 'Das Add-in überträgt nur den selektierten oder aktiven Bereich — nicht die gesamte Arbeitsmappe.' },
      { q: 'Was ist eine zentrale Einschränkung beim Einsatz von Claude für VBA-Makros?', options: ['Claude verweigert generell das Schreiben von VBA-Code', 'Claude schreibt den Makro-Code, kann ihn aber nicht selbst ausführen — der Nutzer startet ihn manuell', 'VBA-Makros sind auf reine Lesezugriffe beschränkt', 'Claude unterstützt VBA nur in älteren Excel-Versionen'], correct: 1, explanation: 'Claude erstellt VBA-Code vollständig, kann ihn jedoch nicht ausführen. Das Starten über den VBA-Editor bleibt eine manuelle Aktion.' },
      { q: 'Was wird bei der Einrichtung des Claude Add-ins vorausgesetzt?', options: ['Ein kostenloses Anthropic-Konto reicht aus', 'Eine Enterprise-Lizenz von Microsoft', 'Ein aktives Claude Pro- oder Team-Abonnement sowie das über AppSource installierte Add-in', 'Ein spezieller Entwickler-API-Key'], correct: 2, explanation: 'Das Add-in erfordert ein aktives Claude Pro- oder Team-Abo und wird über den Microsoft AppSource Store installiert.' },
      { q: 'Welchen Hauptvorteil bietet das Claude PowerPoint-Add-in?', options: ['Claude komprimiert automatisch alle Bilder', 'Claude exportiert Präsentationen als PDF und sendet sie per Outlook', 'Claude erstellt vollständige Folien und Sprechernotizen aus Textzusammenfassungen oder Datentabellen', 'Claude scannt Folien und erstellt automatisch eine Inhaltsfolie'], correct: 2, explanation: 'Das PowerPoint-Add-in erzeugt aus einer Gliederung oder Datentabelle vollständige Folien mit Inhalten und Sprechernotizen.' },
      { q: 'Wie reagiert Claude bei einem erkannten Zirkelbezug-Fehler in Excel?', options: ['Claude löscht die betroffenen Zeilen und baut die Berechnung neu', 'Claude speichert die Datei unter einem neuen Namen', 'Claude wandelt die Formel in einen statischen Wert um', 'Claude identifiziert die fehlerauslösende Formel, erklärt die Ursache und korrigiert die Zelle direkt'], correct: 3, explanation: 'Claude erkennt Zirkelbezüge sofort, erklärt warum der Fehler entstand und korrigiert ihn direkt — im „Accept all edits"-Modus ohne Rückfrage.' },
      { q: 'Warum ist das Add-in dem eigenständigen Chat bei komplexen Datentransformationen überlegen?', options: ['Das Add-in speichert Eingaben ausschließlich lokal', 'Claude sieht die Tabellenstruktur direkt und kann Spalten, Zeilen und Zelladressen gezielt referenzieren', 'Das Add-in aktiviert exklusiv das Opus-Modell', 'Das Add-in ersetzt Excels eingebaute Formelbibliothek'], correct: 1, explanation: 'Im Add-in kennt Claude die tatsächliche Tabellenstruktur — das ermöglicht präzise Transformationen nicht möglich im Chat.' },
      { q: 'Welche Einschränkung gilt bei vertraulichen Finanzmodellen?', options: ['Claude verweigert Modelle mit Werten über zehn Millionen', 'Finanzformeln sind aus Haftungsgründen nicht editierbar', 'Die übermittelten Zellbereiche landen auf Anthropic-Servern — sensible Daten müssen vorab anonymisiert werden', 'Claude kann keine Währungssymbole verarbeiten'], correct: 2, explanation: 'Das Add-in überträgt markierte Bereiche. Bei sensiblen Finanzdaten: vorab anonymisieren oder den IEG Enterprise Account nutzen.' },
      { q: 'Welcher Anwendungsfall zeigt den stärksten Vorteil des Add-ins gegenüber Copy-Paste in den Chat?', options: ['Unstrukturierte Transaktionsdaten direkt in Excel bereinigen, ohne Daten manuell kopieren zu müssen', 'Die Excel-Formelleiste durch Claudes natürlichsprachliche Suche ersetzen', 'Excel-Daten kontinuierlich mit Claudes Gedächtnis synchronisieren', 'Tabellenblätter im PowerPoint-Viewer in interaktive Dashboards umwandeln'], correct: 0, explanation: 'Das Add-in liest den Dateikontext direkt — Daten lassen sich im Sheet bereinigen ohne umständliches Kopieren hin und her.' }
    ]
  },
  {
    id: 8,
    number: '08',
    meta: 'Praxis · Modul 8',
    title: '@Claude in Slack — Claude Tag',
    desc: 'Claude Tag bringt agentische KI direkt ins Team: @Claude taggen, Aufgaben delegieren, Kontext über Kanäle hinweg aufbauen — während Claude asynchron im Hintergrund arbeitet.',
    duration: '20 Min.',
    videos: [
      { url: 'https://www.youtube.com/embed/_cdX8xkKj_s', title: 'Claude Tag Tutorial: AI Agent Living in Slack', caption: 'Video 8.1 · Claude Tag Tutorial — AI Agent Living in Slack' },
      { url: 'https://www.youtube.com/embed/F5DXjhBqV9I', title: 'Claude Tag + Slack Will Change How You Work Forever', caption: 'Video 8.2 · Claude Tag + Slack — How It Changes Your Work' },
    ],
    images: [],
    longContent: '',
    content: `
      <h3>Was ist Claude Tag?</h3>
      <p>Claude Tag ist eine neue Art, als Team mit Claude zusammenzuarbeiten. Statt privat im Chat mit einer KI zu arbeiten, tritt Claude als vollwertiges Teammitglied einem Slack-Kanal bei — mit persistentem Kontext, Zugriff auf freigegebene Tools und der Fähigkeit, Aufgaben asynchron über Stunden oder Tage hinweg selbstständig zu bearbeiten.</p>
      <div class="callout">
        <div class="callout-title">Zahlen aus der Praxis</div>
        <p>Bei Anthropic selbst stammen bereits <strong>65 % des Produkt-Codes</strong> von der internen Version von Claude Tag — und das Muster breitet sich weit über Engineering hinaus aus.</p>
      </div>
      <h3>1. Von Chat zu Teammitglied — der konzeptuelle Sprung</h3>
      <table>
        <thead><tr><th>Merkmal</th><th>Claude Chat</th><th>Claude Tag</th></tr></thead>
        <tbody>
          <tr><td><strong>Nutzer</strong></td><td>Einzelperson, privat</td><td>Ganzes Team, öffentlich im Kanal</td></tr>
          <tr><td><strong>Kontext</strong></td><td>Pro Session, kein Gedächtnis</td><td>Persistent, wächst über Zeit</td></tr>
          <tr><td><strong>Arbeitsweise</strong></td><td>Synchron, wartet auf Antwort</td><td>Asynchron, arbeitet im Hintergrund</td></tr>
          <tr><td><strong>Initiative</strong></td><td>Nur auf Anfrage</td><td>Ergreift Initiative (Ambient Mode)</td></tr>
        </tbody>
      </table>
      <h3>2. So funktioniert @Claude in Slack</h3>
      <ol>
        <li>Schreibe <strong>@Claude</strong> gefolgt von der Aufgabe in einem Kanal</li>
        <li>Claude zerlegt die Aufgabe in Schritte und arbeitet sie mit freigegebenen Tools ab</li>
        <li>Claude antwortet im Thread wenn die Aufgabe erledigt ist — für alle sichtbar</li>
      </ol>
      <div class="callout">
        <div class="callout-title">Beispiel-Prompts für IEG</div>
        <p><strong>@Claude</strong> Erstelle eine Zusammenfassung aller offenen Action Items aus den letzten 5 Meeting-Protokollen im #deal-team Kanal, gruppiert nach Verantwortlichem.</p>
        <p style="margin-top:8px"><strong>@Claude</strong> Durchsuche alle Nachrichten der letzten Woche in #research und erstelle eine Liste aller erwähnten Unternehmen mit ihren wichtigsten Kennzahlen.</p>
      </div>
      <h3>3. Die vier Kernvorteile</h3>
      <h4>@Claude ist Multiplayer</h4>
      <p>Innerhalb eines Slack-Kanals gibt es <strong>einen Claude</strong> der mit allen interagiert. Jeder sieht woran Claude arbeitet und kann das Gespräch dort aufnehmen wo der letzte Kollege aufgehört hat.</p>
      <h4>@Claude lernt über Zeit</h4>
      <p>Claude baut Kontext auf indem er dem Kanal folgt — kein erneutes Briefing nötig. Claude kann sogar automatisch aus anderen Slack-Kanälen lernen, sofern die Berechtigung erteilt wurde. Wichtig: Private Kanäle werden nicht ausgelesen.</p>
      <h4>@Claude ergreift Initiative (Ambient Mode)</h4>
      <p>Im Ambient-Modus flaggt Claude proaktiv relevante Informationen und greift liegengebliebene Threads automatisch wieder auf — ohne explizites Tagging.</p>
      <h4>@Claude arbeitet asynchron</h4>
      <p>Aufgabe stellen, weitermachen. Claude plant eigenständig Tasks und kann Projekte über Stunden oder Tage autonom bearbeiten. Mehrere Claudes können parallel delegiert werden.</p>
      <h3>4. Einrichtung in 4 Schritten</h3>
      <ol>
        <li>Claude Tag mit dem Slack-Workspace verbinden</li>
        <li>Claude Zugriff auf relevante Tools geben</li>
        <li>Monatliches Token-Budget festlegen</li>
        <li>Claude in einem privaten Kanal testen</li>
      </ol>
      <div class="callout">
        <div class="callout-title">Migration</div>
        <p>Claude Tag ersetzt die bisherige „Claude in Slack" App. Automatische Migration am <strong>3. August 2026</strong>.</p>
      </div>
      <h3>5. Zugriffskontrolle und Sicherheit</h3>
      <ul>
        <li><strong>Kanalspezifische Identitäten:</strong> Ein Claude für Sales hat keinen Zugriff auf Engineering-Daten — Kontext und Erinnerungen bleiben strikt auf die konfigurierten Kanäle beschränkt.</li>
        <li><strong>Token-Limits:</strong> Admins setzen monatliche Budgets pro Organisation und pro Kanal.</li>
        <li><strong>Vollständiges Audit-Log:</strong> Jede Aktion von Claude ist protokolliert — inklusive wer die Anfrage gestellt hat.</li>
      </ul>
      <div class="callout callout-warn">
        <div class="callout-title">Wichtig für IEG</div>
        <p>Claude Tag ist in Beta für <strong>Claude Enterprise und Team</strong> Kunden. Vertrauliche Kanäle explizit ausschließen — niemals Deal-Daten in Claude Tag Kanäle.</p>
      </div>
    `,
    quiz: [
      { q: 'Was unterscheidet Claude Tag grundlegend von einem normalen Claude Chat in Slack?', options: ['Claude Tag ist schneller aber speichert keine Daten', 'Claude Tag ist Multiplayer — ein geteilter Claude pro Kanal der Kontext über Zeit aufbaut und von jedem weitergeführt werden kann', 'Claude Tag funktioniert nur für Coding-Aufgaben', 'Claude Tag erfordert einen separaten Login'], correct: 1, explanation: 'Claude Tag ist ein geteiltes Teammitglied: ein Claude pro Kanal, für alle sichtbar, mit persistentem Kontext.' },
      { q: 'Was bedeutet der "Ambient-Modus" bei Claude Tag?', options: ['Claude arbeitet mit reduzierter Rechenleistung im Hintergrund', 'Claude meldet sich proaktiv mit relevanten Updates und greift liegengebliebene Threads ohne explizites Tagging wieder auf', 'Claude sendet täglich automatische Zusammenfassungen an alle Kanal-Mitglieder', 'Claude antwortet nur wenn direkt erwähnt'], correct: 1, explanation: 'Ambient-Modus: Claude ergreift Initiative — flaggt relevante Informationen und greift liegengebliebene Threads selbst wieder auf.' },
      { q: 'Wie stellt Claude Tag sicher dass ein Claude für Sales nicht auf Engineering-Daten zugreifen kann?', options: ['Nutzer setzen Zugriffsrechte manuell pro Nachricht', 'Es gibt keine Trennung — alle Claudes teilen denselben Kontext', 'Admins erstellen kanalspezifische Claude-Identitäten mit eigenem Kontext und Tool-Zugriff', 'Claude erkennt sensible Inhalte automatisch und ignoriert sie'], correct: 2, explanation: 'Kanalspezifische Identitäten: jeder Claude ist auf seine konfigurierten Kanäle beschränkt — Kontext und Tool-Zugriff fließen nie in andere Kanäle über.' },
      { q: 'Für wen ist Claude Tag aktuell in Beta verfügbar?', options: ['Alle Claude-Nutzer inklusive Free-Tier', 'Nur Claude Max Abonnenten', 'Claude Enterprise und Team Kunden', 'Ausschließlich Anthropic-Mitarbeiter'], correct: 2, explanation: 'Claude Tag ist aktuell in Beta für Claude Enterprise und Team Kunden verfügbar.' },
      { q: 'Was passiert bei der automatischen Migration der bisherigen Claude-in-Slack-App?', options: ['Alle bestehenden Chats werden gelöscht', 'Die Migration erfolgt am 3. August 2026 automatisch — Admins können vorher selbst migrieren', 'Nutzer müssen manuell alle Konnektoren neu einrichten', 'Die Migration erfordert eine neue Anthropic-Lizenz'], correct: 1, explanation: 'Claude Tag ersetzt Claude in Slack — automatisch am 3. August 2026. Admins können innerhalb von 30 Tagen selbst migrieren.' }
    ]
  },
  {
    id: 9,
    number: '09',
    meta: 'Produktivität · Nutzung & Kosten',
    title: 'Umgang mit Nutzungslimits: Effizient mit Claude arbeiten',
    desc: 'Wie Token-Kosten entstehen und 23 praxiserprobte Gewohnheiten, um Nutzungslimits seltener zu erreichen — von Datei-Uploads über Modellwahl bis zur Sitzungsplanung.',
    duration: '20 Min.',
    videos: [],
    images: [],
    longContent: '',
    content: '',
    quiz: [
      {
        q: 'Warum werden spätere Nachrichten in einer langen Konversation teurer als frühe?',
        options: [
          'Claude wechselt automatisch zu einem teureren Modell',
          'Claude liest bei jeder neuen Nachricht den gesamten bisherigen Gesprächsverlauf erneut ein',
          'Lange Konversationen aktivieren immer Extended Thinking',
          'Der Token-Preis steigt, je länger ein Chat schon geöffnet ist'
        ],
        correct: 1,
        explanation: 'Jede neue Nachricht führt dazu, dass Claude den gesamten bisherigen Verlauf — jede frühere Nachricht und Antwort — erneut einliest. Dadurch werden spätere Nachrichten in einer langen Konversation teurer.'
      },
      {
        q: 'Was wird empfohlen, bevor man Cowork bittet, eine Datei wie ein Finanzmodell oder einen Bericht zu erstellen?',
        options: [
          'Direkt in Cowork starten, damit Planung und Erstellung in einem Schritt passieren',
          'Struktur und Annahmen zuerst in Chat klären, erst danach in Cowork die finale Datei bauen lassen',
          'Für jede Dateierstellung grundsätzlich Claude Code statt Cowork verwenden',
          'Cowork direkt drei verschiedene Entwürfe zum Vergleich erstellen lassen'
        ],
        correct: 1,
        explanation: 'Dateierstellung in Cowork verbraucht mehr vom Nutzungslimit als reine Chat-Nachrichten. Empfohlen wird daher, die Planung in Chat zu erledigen und erst danach in Cowork die finale Datei bauen zu lassen.'
      },
      {
        q: 'Wenn ein Teil einer Ausgabe falsch ist (z. B. ein Abschnitt eines Berichts) — was ist der token-effizientere Weg, dies zu korrigieren?',
        options: [
          'Claude bitten, den gesamten Bericht von Grund auf neu zu erstellen',
          'Den konkret betroffenen Abschnitt benennen und nur diesen überarbeiten lassen',
          'Ein komplett neues Projekt anlegen',
          'Drei alternative Gesamtversionen des Berichts anfordern'
        ],
        correct: 1,
        explanation: 'Ein kompletter Neu-Durchlauf erzeugt die gesamte Ausgabe (und deren Tokenkosten) erneut. Wird stattdessen gezielt der betroffene Abschnitt benannt, muss nicht alles andere neu erzeugt werden.'
      },
      {
        q: 'Welchen Vorteil bietet die Nutzung von Projects für häufig genutzte Dateien (z. B. Verträge oder Styleguides)?',
        options: [
          'Projects übersetzen die Datei automatisch in jede Sprache',
          'Die Datei muss nur einmal hochgeladen werden und kann über mehrere Konversationen hinweg genutzt werden, ohne jedes Mal vollständig neu tokenisiert zu werden',
          'Projects machen Prompts vollständig überflüssig',
          'Dateien in Projects zählen unter keinen Umständen zum Nutzungslimit'
        ],
        correct: 1,
        explanation: 'Wird dieselbe Datei in mehrere separate Chats hochgeladen, wird sie jedes Mal neu tokenisiert. In einem Project wird die Datei einmal hochgeladen und wiederverwendet; auf bezahlten Plänen nutzen Projects zudem RAG, um nur relevante Abschnitte statt des gesamten Dokuments zu laden.'
      },
      {
        q: 'Was bedeutet das „rollierende 5-Stunden-Fenster" für Nutzungslimits?',
        options: [
          'Nutzungslimits setzen sich nur alle 5 Tage zurück',
          'Wird die Arbeit über den Tag auf mehrere Sitzungen verteilt (z. B. morgens/mittags/abends), kann ältere Nutzung „abrollen", bevor spätere Sitzungen starten',
          'Das 5-Stunden-Fenster gilt ausschließlich für Claude Code',
          'Nutzungslimits werden innerhalb eines 5-Stunden-Blocks im Team geteilt'
        ],
        correct: 1,
        explanation: 'Da das Nutzungslimit über ein rollierendes 5-Stunden-Fenster läuft, kann durch Verteilen der Arbeit auf mehrere Sitzungen über den Tag ältere Nutzung abrollen, statt das gesamte Limit in einer langen Vormittagssitzung zu verbrauchen.'
      },
      {
        q: 'Welches Beispiel wird für eine Aufgabe genannt, für die Claude laut Quelle nicht gut geeignet ist?',
        options: [
          'Ein langes Dokument zusammenfassen',
          'Mehrere zusammenhängende Aufgaben in einem Prompt bündeln',
          'Direkt Bilder generieren',
          'Einen Abschnitt eines Berichts überprüfen'
        ],
        correct: 2,
        explanation: 'Claude kann keine Bilder generieren. Wiederholte Versuche, ein Bild zu beschreiben und Text-Workarounds zu erzeugen, verbrauchen Nachrichten für eine Aufgabe, die Claude so nicht lösen kann.'
      }
    ]
  }
];

// Abschlussprüfung — 43 Fragen (40 + 3 Claude Tag)
const FINAL_EXAM = [
  { q: 'Warum sollte für jedes neue Thema ein neuer Chat gestartet werden?', options: ['Themenmischung im selben Chat verwirrt das Modell und senkt die Ergebnisqualität deutlich', 'Das Datenlimit pro Chat ist auf 10 Nachrichten begrenzt', 'Claude verliert bei langen Chats den Zugriff auf Websuche', 'Neue Chats werden schneller verarbeitet'], correct: 0, explanation: 'Chat-Disziplin: Ein Thema pro Chat. Mehrere Themen reduzieren die Antwortqualität erheblich.' },
  { q: 'Welchen entscheidenden Vorteil bietet das Claude Add-in gegenüber dem eigenständigen Chat beim Arbeiten in Excel?', options: ['Das Add-in schaltet automatisch auf das leistungsstärkste Modell um', 'Das Add-in speichert alle Eingaben ausschließlich lokal', 'Claude sieht die Tabellenstruktur direkt und kann Zellinhalte kontextbezogen lesen und bearbeiten', 'Das Add-in ersetzt Excels eingebaute Formelbibliothek'], correct: 2, explanation: 'Im Add-in kennt Claude die geöffnete Datei. Im Standalone-Chat ist nur das verfügbar, was manuell eingefügt wird.' },
  { q: 'Was versteht man unter dem Modus „Accept all edits" im Claude Excel-Add-in?', options: ['Claude fragt vor jeder Zelländerung nach Bestätigung', 'Claude speichert die Arbeitsmappe und lädt sie auf OneDrive hoch', 'Claude akzeptiert jede Nutzereingabe ohne Moderation', 'Claude wendet Formelkorrekturen und Datenänderungen direkt an, ohne nachzufragen'], correct: 3, explanation: 'Im „Accept all edits"-Modus übernimmt Claude Korrekturen sofort — ohne Zwischenfrage.' },
  { q: 'Welche Datenschutz-Einstellung muss bei IEG vor der ersten Nutzung verbindlich deaktiviert werden?', options: ['Der Inkognitomodus', 'Die Websuche-Funktion', 'Die globalen Präferenzen', 'Die Option „hilft dabei Claude zu verbessern"'], correct: 3, explanation: 'Die Trainings-Option muss einmalig deaktiviert werden.' },
  { q: 'Welche Einschränkung gilt beim Einsatz von Claude für VBA-Makros in Excel?', options: ['Claude verweigert das Schreiben von VBA-Code', 'Claude schreibt den Makro-Code, kann ihn aber nicht selbst ausführen — der Nutzer startet ihn manuell', 'VBA-Makros sind auf reine Lesezugriffe beschränkt', 'Claude unterstützt VBA nur für ältere Excel-Versionen'], correct: 1, explanation: 'Claude erstellt VBA-Code, kann ihn jedoch nicht ausführen. Das Starten bleibt eine manuelle Aktion.' },
  { q: 'Welche Funktion ermöglicht Claude, hunderte Quellen in Sekunden zu durchsuchen?', options: ['Der erweiterte Nachdenkenmodus', 'Die Websuche über das Plus-Symbol mit belegten Quellenlinks', 'Ein Konnektor zu Google Scholar', 'Das Opus-Modell in der Pro-Version'], correct: 1, explanation: 'Die Websuche (Plus-Symbol) erlaubt Claude, aktuelle Daten und Quellen live zu recherchieren.' },
  { q: 'Warum empfiehlt sich der erweiterte Nachdenkenmodus bei der Analyse großer PDFs?', options: ['Er erhöht die Upload-Geschwindigkeit', 'Er aktiviert automatisch die Websuche', 'Er gibt Claude mehr Rechenzeit, um die Datei gründlicher einzulesen und präziser zu antworten', 'Er wandelt PDFs in Excel-Tabellen um'], correct: 2, explanation: 'Der erweiterte Nachdenkenmodus erhöht die Analysetiefe.' },
  { q: 'Was sind die sechs Elemente der idealen Prompt-Struktur?', options: ['Titel, Text, Format, Länge, Sprache und Modellauswahl', 'Frage, Kontext, Rollen, Ausgabe, Validierung und Nachbearbeitung', 'Persona, Ziel, Ton, Beispiel, Format und Constraint', 'Aufgabe, Kontext, Hintergrunddaten, Anweisungen, Beispiele und Erinnerungen'], correct: 3, explanation: 'Die sechs Prompt-Elemente: Aufgabe, Kontext, Hintergrunddaten, Anweisungen, Beispiele, Erinnerungen.' },
  { q: 'Was unterscheidet globale Präferenzen von einem System Prompt in einem Project?', options: ['Globale Präferenzen gelten automatisch in jedem neuen Chat; System Prompts nur im jeweiligen Project', 'System Prompts werden schneller verarbeitet', 'Globale Präferenzen sind kostenpflichtig', 'Beide sind technisch identisch'], correct: 0, explanation: 'Globale Präferenzen = dauerhaft für jeden neuen Chat. System Prompts gelten nur im definierten Project.' },
  { q: 'Was versteht man unter "Deep Research" in Claude?', options: ['Durchsuchen aller bisherigen Chats', 'Ein Modus, in dem Claude eigenständig über mehrere Schritte recherchiert und einen Bericht erstellt', 'Das parallele Öffnen mehrerer Recherche-Chats', 'Eine Datenbankabfrage für Bloomberg oder Statista'], correct: 1, explanation: 'Deep Research = Claude arbeitet autonom über mehrere Rechercheschritte und liefert einen strukturierten Abschlussbericht.' },
  { q: 'Für welche Excel-bezogenen Aufgaben eignet sich Claude am besten?', options: ['Direktes Ausführen von Makros', 'Konvertierung von Excel in andere Formate', 'Formeln erklären, VBA-Makros schreiben und Datentransformationen konzipieren', 'Echtzeit-Synchronisation mit SAP oder Oracle'], correct: 2, explanation: 'Claude kann Formeln erklären, VBA schreiben und Transformationslogik planen — die Ausführung bleibt in Excel.' },
  { q: 'Was ist ein Konnektor in Claude?', options: ['Ein physisches Schnittstellenmodul', 'Eine Verbindung zwischen zwei Claude-Chats', 'Ein Haiku-Submodell für Enterprise-Accounts', 'Eine Anbindung an externe Dienste wie Gmail, Google Drive oder Slack'], correct: 3, explanation: 'Konnektoren verbinden Claude mit externen Diensten.' },
  { q: 'Was ist der Hauptzweck von "Projects" in Claude?', options: ['Kontext, Dokumente und Anweisungen dauerhaft für einen bestimmten Themenkomplex zu speichern', 'Mehrere Nutzer gleichzeitig zu verwalten', 'Chats thematisch zu archivieren', 'Das Modell automatisch auf Opus zu schalten'], correct: 0, explanation: 'Projects = ausgelagertes Gehirn mit dauerhaftem Kontext, Dokumenten und Anweisungen.' },
  { q: 'Wie viele Zeichen kann ein System Prompt in einem Claude Project maximal enthalten?', options: ['2.000 Zeichen', '10.000 Zeichen', '500 Zeichen', '2.000 Wörter'], correct: 1, explanation: 'System Prompts in Projects können bis zu 10.000 Zeichen enthalten.' },
  { q: 'Was unterscheidet aktives Erinnern von passiver Erinnerung in Claude?', options: ['Es gibt keinen technischen Unterschied', 'Passive Erinnerung ist präziser', 'Aktives Erinnern speichert Informationen dauerhaft über Chats hinaus; passiv gilt nur im aktuellen Chat', 'Aktives Erinnern erfordert ein separates Upgrade'], correct: 2, explanation: 'Aktives Erinnern (Memory) speichert chatübergreifend. Passiv = nur im aktuellen Kontext.' },
  { q: 'Welchen Vorteil bietet ein System Prompt im Project?', options: ['System Prompts können direkt Dateien laden', 'Projects werden mit höherer Priorität behandelt', 'Der System Prompt reduziert Token-Kosten', 'Er ist automatisch in jedem neuen Chat des Projects aktiv — kein erneutes Briefing notwendig'], correct: 3, explanation: 'Ein System Prompt gilt automatisch für alle Chats des Projekts — spart Zeit und sichert Konsistenz.' },
  { q: 'Warum ist es sinnvoll, projektbezogene Dokumente direkt in ein Claude Project hochzuladen?', options: ['Sie stehen in jedem Projekt-Chat bereit, ohne jedes Mal neu hochgeladen zu werden', 'Claude verarbeitet sie dreimal schneller', 'Dokumente werden in strukturierte Wissenseinträge umgewandelt', 'Nur Project-Dateien funktionieren mit dem erweiterten Nachdenkenmodus'], correct: 0, explanation: 'Projektdokumente sind dauerhaft verfügbar — Claude greift automatisch darauf zu.' },
  { q: 'Was beschreibt die "Lethal Trifecta" im KI-Sicherheitskontext?', options: ['Drei KI-Modelle gleichzeitig nutzen', 'KI hat Zugriff auf private Daten, liest externe Inhalte und kann Daten nach außen senden', 'Websuche, Dateiupload und Konnektor gleichzeitig aktivieren', 'Drei häufige Fehler: schwaches Passwort, fehlendes 2FA, kein Inkognitomodus'], correct: 1, explanation: 'Lethal Trifecta: Private Daten + externe Inhalte + ausgehende Verbindungen = KI-Hijacking möglich.' },
  { q: 'Wem gehört geistiges Eigentum, das mit dem firmeneigenen KI-Tool erstellt wird?', options: ['Dem Nutzer, weil er die Prompts geschrieben hat', 'Anthropic, da Claude die kreative Leistung erbringt', 'Dem Arbeitgeber, da der Firmenzugang genutzt wurde', 'Niemandem — KI-Outputs sind gemeinfrei'], correct: 2, explanation: 'Nutzung des firmeneigenen KI-Abos = Arbeitgeber hat rechtlichen Anspruch auf das entstandene geistige Eigentum.' },
  { q: 'Wie regelmäßig sollten aktive Konnektoren überprüft werden?', options: ['Einmalig bei der Ersteinrichtung', 'Einmal jährlich', 'Nur bei konkretem Verdacht auf Missbrauch', 'Monatlich — in den Einstellungen prüfen und alles Unnötige trennen'], correct: 3, explanation: 'Monatliche Überprüfung der Konnektoren: alles trennen, was nicht aktiv benötigt wird.' },
  { q: 'Warum darf die Firmen-Gmail nicht mit einem persönlichen Claude-Account verbunden werden?', options: ['Persönliche Accounts bieten keine Datenschutzgarantien für Firmendaten', 'Gmail-Verbindungen zu Claude sind technisch nicht möglich', 'Persönliche Accounts sind zu langsam', 'Firmenmails sind verschlüsselt und können nicht entschlüsselt werden'], correct: 0, explanation: 'Persönliche Accounts ohne Enterprise-Vertrag bieten keine Datenschutzgarantien für Firmendaten.' },
  { q: 'Was ist "Prompt Injection"?', options: ['Eine Technik, bei der mehrere Anweisungen verschachtelt werden', 'Ein Angriff, bei dem bösartige Anweisungen in externe Inhalte eingebettet sind, die die KI ausführt', 'Das Einfügen von Variablen in Prompt-Vorlagen', 'Eine Methode zur Prompt-Optimierung'], correct: 1, explanation: 'Prompt Injection: Angreifer verstecken Befehle in Webseiten oder Dokumenten — die KI führt diese aus.' },
  { q: 'Was sollte man sicherstellen, bevor man sensible Unternehmensdaten in Claude eingibt?', options: ['Den Inkognitomodus aktivieren', 'Das Opus-Modell wählen', 'Den IEG Enterprise Account nutzen und Daten wenn nötig anonymisieren', 'Websuche und Konnektoren deaktivieren'], correct: 2, explanation: 'Sensible Daten gehören in den IEG Enterprise Account mit Sicherheitsgarantien.' },
  { q: 'Was ist ein Claude Skill?', options: ['Eine der Sprachen, die Claude nativ verarbeiten kann', 'Ein externes Plugin eines Drittanbieters', 'Ein Sicherheitsprotokoll für Enterprise-Umgebungen', 'Eine gespeicherte Arbeitsanweisung, die komplexe Workflows reproduzierbar und automatisierbar macht'], correct: 3, explanation: 'Skills speichern Workflows dauerhaft — ein Prompt löst einen ganzen definierten Prozess aus.' },
  { q: 'Was ist der Unterschied zwischen einem Skill und einem Plugin?', options: ['Skills sind einzelne gespeicherte Fähigkeiten; Plugins bündeln mehrere Funktionen', 'Plugins sind kostenlos; Skills erfordern Pro', 'Skills funktionieren offline; Plugins benötigen einen Server', 'Es gibt keinen funktionalen Unterschied'], correct: 0, explanation: 'Skill = einzelne gespeicherte Fähigkeit. Plugin = Bündel aus mehreren Funktionen oder Diensten.' },
  { q: 'Wie erstellt man einen neuen Skill am effizientesten?', options: ['Die Anweisungen manuell als YAML schreiben', 'Die Aufgabe zunächst im Chat lösen, dann Claude anweisen daraus einen Skill zu erstellen', 'Warten bis Claude nach 10 ähnlichen Chats automatisch einen Vorschlag macht', 'Einen vorgefertigten Skill im Marketplace kaufen'], correct: 1, explanation: 'Best Practice: Erst im Chat lösen und prüfen, dann als Skill speichern.' },
  { q: 'Was macht einen Skill im Team-Kontext besonders wertvoll?', options: ['Er ist an ein spezifisches Gerät gebunden', 'Er läuft vollautomatisch im Hintergrund', 'Er kann in jedem Chat genutzt und geteilt werden — Expertenwissen skaliert', 'Er funktioniert nur mit Opus'], correct: 2, explanation: 'Skills sind chatübergreifend verfügbar und können im Team geteilt werden.' },
  { q: 'Welcher Datenschutzaspekt gilt beim Einsatz des Claude Excel-Add-ins für Finanzmodelle?', options: ['Die markierten Zellbereiche werden an Anthropic-Server übertragen — bewusster Umgang nötig', 'Das Add-in speichert alle Zellinhalte dauerhaft im Claude-Gedächtnis', 'Alle geöffneten Excel-Dateien werden automatisch mitübertragen', 'Claude kann selbstständig externe Datenbankabfragen starten'], correct: 0, explanation: 'Das Add-in überträgt markierte Bereiche. Bei sensiblen Finanzdaten: anonymisieren oder IEG Enterprise Account nutzen.' },
  { q: 'Was ist der Ablauf des "Super Skill" in der Finanzautomatisierung?', options: ['Data Cleaning → saubere Excel → Dashboard → PowerPoint', 'PowerPoint → Dashboard → Data Cleaning → Excel', 'Excel → PDF → PowerPoint → Dashboard', 'Dashboard → Excel → Data Cleaning → PowerPoint'], correct: 0, explanation: 'Super Skill-Kette: 1. Data Cleaning → 2. Saubere Excel → 3. Dashboard → 4. PowerPoint.' },
  { q: 'Was ist der Hauptvorteil des Dynamic Dashboard Builders?', options: ['Er erstellt statische PDF-Berichte', 'Er erzeugt interaktive HTML-Dashboards mit Drill-Down — Klick zeigt Detailberichte', 'Er lädt Echtzeitdaten aus SAP oder Bloomberg', 'Er sendet Berichte automatisch per Outlook'], correct: 1, explanation: 'Der Dashboard Builder erstellt interaktives HTML — Klick auf Namen zeigt alle Detailberichte.' },
  { q: 'Warum wird ein separater Branding-Skill erstellt?', options: ['Weil Claude ohne Branding-Skill nicht funktioniert', 'Weil Unternehmensdesigns gesetzlich registriert werden müssen', 'Damit alle Ausgaben automatisch das Corporate Design tragen', 'Um das Claude-Interface anzupassen'], correct: 2, explanation: 'Der Branding-Skill hinterlegt Farben und Designregeln — jede Ausgabe sieht automatisch professionell aus.' },
  { q: 'Was ist eine typische Stärke des Claude PowerPoint-Add-ins?', options: ['Claude komprimiert Bilder automatisch', 'Claude exportiert als PDF und sendet per Outlook', 'Claude erstellt vollständige Folien und Sprechernotizen aus Textzusammenfassungen oder Datentabellen', 'Claude erstellt automatisch eine Inhaltsfolie'], correct: 2, explanation: 'Das PowerPoint-Add-in erzeugt vollständige Folien mit Inhalten und Sprechernotizen.' },
  { q: 'Welchen Vorteil bietet der modulare Skill-Ansatz?', options: ['Modulare Skills können unabhängig aktualisiert, kombiniert und wiederverwendet werden', 'Ein großer Skill ist immer zuverlässiger', 'Modulare Skills laufen nur auf Opus', 'Es gibt keinen Unterschied'], correct: 0, explanation: 'Modularität: Jeden Skill einzeln verbessern, frei kombinieren, in verschiedenen Kontexten einsetzen.' },
  { q: 'Wie unterscheidet sich Claude Cowork grundlegend von einem normalen Chatbot?', options: ['Cowork antwortet nur schneller', 'Cowork ist ein Agent, der selbstständig Dateien öffnet, umbenennt, verschiebt und Programme steuert', 'Cowork ist eine reine Cloud-Funktion ohne lokalen Zugriff', 'Cowork ist ein eigenes Sprachmodell'], correct: 1, explanation: 'Cowork ist ein KI-Agent: Das Modell ist das Gehirn, Cowork die Hände.' },
  { q: 'Welche Voraussetzung gilt für die Nutzung von Claude Cowork?', options: ['Die Claude Desktop-App und ein aktives Pro-Abo', 'Ein kostenloses Konto im mobilen Browser', 'Ein Team-Vertrag über die Web-Oberfläche', 'Eine Server-Installation im Unternehmensnetzwerk'], correct: 0, explanation: 'Cowork läuft nur über die Desktop-App (Mac/Windows) mit Pro-Abo.' },
  { q: 'Warum muss man Cowork explizit einzelne lokale Ordner zuweisen?', options: ['Für höhere Verarbeitungsgeschwindigkeit', 'Weil Cowork sonst Daten in die Cloud auslagert', 'Um Credits korrekt abzurechnen', 'Sandboxing: Cowork arbeitet nur in freigegebenen Bereichen und schützt alle übrigen Daten'], correct: 3, explanation: 'Sicherheits-Sandboxing: Cowork darf nur in explizit freigegebenen Ordnern arbeiten.' },
  { q: 'Wie speichert Cowork Informationen über eine einzelne Sitzung hinaus?', options: ['Gar nicht — alle Informationen gehen verloren', 'In einer Cloud-Datenbank von Anthropic', 'In Markdown-Dateien im Projektordner', 'Im Arbeitsspeicher des Rechners'], correct: 2, explanation: 'Cowork hat kein Sitzungsgedächtnis und nutzt Markdown-Dateien im Projektordner.' },
  { q: 'Was gilt für einen laufenden Cowork-Task und die Modellwahl?', options: ['Die App muss offen bleiben; für komplexe Analysen eignet sich Opus, fürs Sortieren Sonnet', 'Die App darf geschlossen werden, das Modell ist egal', 'Der Task läuft nur mit Haiku', 'Opus ist für jede Aufgabe zwingend'], correct: 0, explanation: 'Session Persistence: App muss offen bleiben. Sonnet fürs Sortieren, Opus für komplexe Analysen.' },
  { q: 'Was unterscheidet Opus von Sonnet beim Einsatz für komplexe Analysen?', options: ['Opus ist langsamer aber liefert identische Qualität', 'Sonnet hat ein größeres Kontextfenster', 'Opus integriert Quellen tiefer; Sonnet ist für Routineaufgaben effizienter', 'Es gibt keinen qualitativen Unterschied'], correct: 2, explanation: 'Opus für tiefgehende Recherche; Sonnet für tägliche Routinearbeit.' },
  { q: 'Was unterscheidet einen Skill von einem Project-System-Prompt?', options: ['Kein Unterschied', 'Projects sind flexibler', 'Skills erfordern ein Pro-Abo; System Prompts sind kostenlos', 'Skills sind chatübergreifend in jedem Kontext nutzbar; System Prompts gelten nur im jeweiligen Project'], correct: 3, explanation: 'Skills: universal einsetzbar. System Prompts: gelten nur innerhalb des definierten Projects.' },
  { q: 'Was unterscheidet Claude Tag grundlegend von einem normalen Claude Chat in Slack?', options: ['Claude Tag ist schneller aber speichert keine Daten', 'Claude Tag ist Multiplayer — ein geteilter Claude pro Kanal der Kontext über Zeit aufbaut und von jedem weitergeführt werden kann', 'Claude Tag funktioniert nur für Coding-Aufgaben', 'Claude Tag erfordert einen separaten Login'], correct: 1, explanation: 'Claude Tag ist ein geteiltes Teammitglied: ein Claude pro Kanal, für alle sichtbar, mit persistentem Kontext.' },
  { q: 'Was bedeutet der "Ambient-Modus" bei Claude Tag?', options: ['Claude arbeitet mit reduzierter Rechenleistung im Hintergrund', 'Claude meldet sich proaktiv mit relevanten Updates und greift liegengebliebene Threads ohne explizites Tagging wieder auf', 'Claude sendet täglich automatische Zusammenfassungen an alle Kanal-Mitglieder', 'Claude antwortet nur wenn direkt erwähnt'], correct: 1, explanation: 'Ambient-Modus: Claude ergreift Initiative — flaggt relevante Informationen und greift liegengebliebene Threads selbst wieder auf.' },
  { q: 'Wie stellt Claude Tag sicher dass ein Claude für Sales nicht auf Engineering-Daten zugreifen kann?', options: ['Nutzer setzen Zugriffsrechte manuell pro Nachricht', 'Es gibt keine Trennung — alle Claudes teilen denselben Kontext', 'Admins erstellen kanalspezifische Claude-Identitäten mit eigenem Kontext und Tool-Zugriff', 'Claude erkennt sensible Inhalte automatisch und ignoriert sie'], correct: 2, explanation: 'Kanalspezifische Identitäten: jeder Claude ist auf seine konfigurierten Kanäle beschränkt — Kontext und Tool-Zugriff fließen nie in andere Kanäle über.' },
  { q: 'Warum werden spätere Nachrichten in einer langen Konversation teurer als frühe?', options: ['Claude wechselt automatisch zu einem teureren Modell', 'Claude liest bei jeder neuen Nachricht den gesamten bisherigen Gesprächsverlauf erneut ein', 'Lange Konversationen aktivieren immer Extended Thinking', 'Der Token-Preis steigt, je länger ein Chat schon geöffnet ist'], correct: 1, explanation: 'Jede neue Nachricht führt dazu, dass Claude den gesamten bisherigen Verlauf — jede frühere Nachricht und Antwort — erneut einliest. Dadurch werden spätere Nachrichten in einer langen Konversation teurer.' },
  { q: 'Was wird empfohlen, bevor man Cowork bittet, eine Datei wie ein Finanzmodell oder einen Bericht zu erstellen?', options: ['Direkt in Cowork starten, damit Planung und Erstellung in einem Schritt passieren', 'Struktur und Annahmen zuerst in Chat klären, erst danach in Cowork die finale Datei bauen lassen', 'Für jede Dateierstellung grundsätzlich Claude Code statt Cowork verwenden', 'Cowork direkt drei verschiedene Entwürfe zum Vergleich erstellen lassen'], correct: 1, explanation: 'Dateierstellung in Cowork verbraucht mehr vom Nutzungslimit als reine Chat-Nachrichten. Empfohlen wird daher, die Planung in Chat zu erledigen und erst danach in Cowork die finale Datei bauen zu lassen.' },
  { q: 'Wenn ein Teil einer Ausgabe falsch ist (z. B. ein Abschnitt eines Berichts) — was ist der token-effizientere Weg, dies zu korrigieren?', options: ['Claude bitten, den gesamten Bericht von Grund auf neu zu erstellen', 'Den konkret betroffenen Abschnitt benennen und nur diesen überarbeiten lassen', 'Ein komplett neues Projekt anlegen', 'Drei alternative Gesamtversionen des Berichts anfordern'], correct: 1, explanation: 'Ein kompletter Neu-Durchlauf erzeugt die gesamte Ausgabe (und deren Tokenkosten) erneut. Wird stattdessen gezielt der betroffene Abschnitt benannt, muss nicht alles andere neu erzeugt werden.' }
];

const PASS_THRESHOLD = 70;
