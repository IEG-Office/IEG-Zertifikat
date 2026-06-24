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
          <tr><td><strong>Haiku</strong></td><td>Das schnellste und kostengünstigste Modell</td><td>Einfache Aufgaben, schnelle Formatierungen, kurze Zusammenfassungen</td></tr>
          <tr><td><strong>Sonnet</strong></td><td>Der „Allrounder"</td><td>Ausgewogenes Verhältnis aus Geschwindigkeit und Intelligenz — tägliche Arbeit</td></tr>
          <tr><td><strong>Opus</strong></td><td>Das Flaggschiff-Modell</td><td>Maximale Leistungsfähigkeit für extrem komplexe Analysen und Entscheidungen</td></tr>
        </tbody>
      </table>
      <div class="callout">
        <div class="callout-title">Ausblick: Was kommt als Nächstes?</div>
        <p>Anthropic arbeitet kontinuierlich an neuen Modellen. Der aktuelle Entwicklungsstand zeigt, wohin die Reise geht — Geschwindigkeit, Tiefe und Integration werden weiter zunehmen.</p>
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
        options: [
          'Haiku, weil es Anfragen mit der höchsten Geschwindigkeit beantwortet',
          'Sonnet, weil es den besten Kompromiss aus Tempo und Tiefe bietet',
          'Opus, weil es gezielt für besonders komplexe Analysen ausgelegt ist',
          'Die Modellwahl ist hier egal, da alle Modelle gleich gut abschneiden'
        ],
        correct: 2,
        explanation: 'Opus ist das leistungsstärkste Modell und für besonders komplexe, mehrstufige Analysen und Entscheidungen vorgesehen.'
      },
      {
        q: 'Ein Project soll gegenüber einem einzelnen Chat einen echten Mehrwert liefern. Worin besteht der entscheidende Vorteil?',
        options: [
          'Hinterlegte Dokumente und Anweisungen gelten automatisch in jedem neuen Chat',
          'Anfragen werden innerhalb eines Projects spürbar schneller beantwortet',
          'Erst innerhalb eines Projects lässt sich die Websuche überhaupt aktivieren',
          'Mehrere Personen können denselben Chat zeitgleich gemeinsam bearbeiten'
        ],
        correct: 0,
        explanation: 'Ein Project ist ein dauerhafter Kontext — jeder neue Chat startet automatisch mit den hinterlegten Dokumenten und Anweisungen, ohne erneutes Briefing.'
      },
      {
        q: 'Du hast eine Tabelle mit Verkaufszahlen und möchtest daraus ein interaktives Balkendiagramm. Welches Vorgehen führt am direktesten zum Ziel?',
        options: [
          'Zuerst einen Programmierkurs belegen und danach den fertigen Code einfügen',
          'Einen gesonderten Konnektor für Visualisierungen im Account freischalten',
          'Den Wunsch verwerfen, da Claude keinerlei interaktive Grafiken erzeugt',
          'Die Zahlen einfügen und ein interaktives Diagramm anfordern, mehr nicht'
        ],
        correct: 3,
        explanation: 'Claude erzeugt interaktive Visualisierungen direkt im Chat — kein Plugin, kein Konnektor und kein Code-Vorwissen nötig.'
      },
      {
        q: 'Eine Kollegin fragt, was Claude Cowork von Claude im Browser unterscheidet. Welche Aussage trifft den Kern?',
        options: [
          'Cowork ist ausschließlich für erfahrene Programmiererinnen konzipiert',
          'Cowork läuft in der Desktop-App und greift dort auf lokale Dateien zu',
          'Cowork arbeitet zwar langsamer, ist dafür aber deutlich günstiger',
          'Cowork verarbeitet nur reinen Text und akzeptiert gar keine Dateien'
        ],
        correct: 1,
        explanation: 'Claude Cowork lebt in der Desktop-App, hat Zugriff auf lokale Dateien und kann Aufgaben sogar im Hintergrund erledigen — steuerbar auch per Smartphone.'
      },
      {
        q: 'Im Claude-Ökosystem werden die Begriffe Skill und Plugin oft verwechselt. Wie lässt sich der Unterschied präzise fassen?',
        options: [
          'Ein Skill ist eine einzelne Fähigkeit, ein Plugin bündelt mehrere davon',
          'Beide Begriffe meinen exakt dasselbe und sind frei gegeneinander tauschbar',
          'Skills sind grundsätzlich kostenlos, während Plugins stets Geld kosten',
          'Plugins laufen ausschließlich unter Opus, Skills dagegen unter jedem Modell'
        ],
        correct: 0,
        explanation: 'Ein Skill ist eine einzelne gespeicherte Fähigkeit; ein Plugin bündelt mehrere Skills zu einem Paket — beide erweitern Claudes Werkzeugkasten dauerhaft.'
      },
      {
        q: 'Du möchtest mit Claude Code ohne Vorkenntnisse eine kleine Kundenwebseite bauen. Womit beginnst du sinnvollerweise?',
        options: [
          'Zunächst HTML und CSS erlernen, bevor man Claude überhaupt einsetzt',
          'Eine Entwicklerin beauftragen, die den passenden Prompt für dich formuliert',
          'Den Plan verwerfen, da Claude Code nur für bestehende Programmierer ist',
          'Gewünschte Funktion und Aussehen beschreiben, Claude liefert dann den Code'
        ],
        correct: 3,
        explanation: 'Claude Code braucht keine Programmierkenntnisse — eine klare Beschreibung auf Deutsch genügt, um vollständige Webseiten oder Apps generieren zu lassen.'
      },
      {
        q: 'Das Erweiterungssystem von Claude besteht aus genau drei Bausteinen. Welche Aufzählung benennt sie korrekt?',
        options: [
          'Add-ons, Webhooks und kleine wiederverwendbare Hilfsskripte',
          'Makros, vorgefertigte Templates und eigenständig laufende Agenten',
          'Skills, Plugins und Konnektoren zu externen Diensten',
          'Bots, einbettbare Widgets und offene Programmierschnittstellen'
        ],
        correct: 2,
        explanation: 'Skills (einzelne Fähigkeiten), Plugins (gebündelte Sammlungen) und Konnektoren (Schnittstellen zu Diensten wie Gmail oder Notion) bilden das Erweiterungssystem.'
      },
      {
        q: 'Für wiederkehrende Standardaufgaben im Arbeitsalltag soll das Modell mit dem besten Preis-Leistungs-Verhältnis gewählt werden. Welche Begründung passt?',
        options: [
          'Haiku, weil es von allen Modellen mit Abstand am wenigsten kostet',
          'Sonnet, weil es Geschwindigkeit und Intelligenz ausgewogen verbindet',
          'Opus, weil seine Antwortqualität jede andere Option deutlich übertrifft',
          'Keines, da sich kein Modell für den täglichen Einsatz wirklich eignet'
        ],
        correct: 1,
        explanation: 'Sonnet ist der Allrounder mit ausgewogenem Verhältnis aus Geschwindigkeit und Intelligenz — ideal für den täglichen Arbeitseinsatz.'
      },
      {
        q: 'Ein Kollege fragt, wofür Konnektoren im Claude-Ökosystem eigentlich gut sind. Welche Beschreibung trifft zu?',
        options: [
          'Sie koppeln verschiedene Claude-Modelle unmittelbar aneinander',
          'Sie führen mehrere Projects zu einem einzigen großen Project zusammen',
          'Sie dienen einzig der regelmäßigen Sicherung bestehender Chatverläufe',
          'Sie schaffen Schnittstellen zu Diensten wie Gmail, Kalender oder Notion'
        ],
        correct: 3,
        explanation: 'Konnektoren sind Schnittstellen zu externen Diensten — Claude kann damit E-Mails lesen, Kalender verwalten oder in Notion schreiben.'
      },
      {
        q: 'Warum kann ausgerechnet Claude Cowork Aufgaben auch dann fortführen, wenn man nicht aktiv zusieht?',
        options: [
          'Weil es in der Desktop-App sitzt und direkt auf das Betriebssystem zugreift',
          'Weil es als eigenständiger Cloud-Dienst völlig unabhängig im Netz arbeitet',
          'Weil es im Hintergrund heimlich eine versteckte Browser-Extension nutzt',
          'Gar nicht, denn eine echte Hintergrundverarbeitung gibt es bei Cowork nicht'
        ],
        correct: 0,
        explanation: 'Cowork ist in der Desktop-App integriert und hat damit nativen Zugriff auf lokale Dateien und Prozesse — die Grundlage für autonome Hintergrundarbeit.'
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
      {
        q: 'Du analysierst eine 100-seitige Marktstudie als PDF und möchtest extrem präzise Details zu einer Nischenkennzahl extrahieren. Welches Vorgehen ist am effektivsten?',
        options: [
          'Nutze das Haiku-Modell für maximale Geschwindigkeit beim Scannen.',
          'Aktiviere den „erweiterten Nachdenkenmodus" (Stoppuhr) im Opus-Modell.',
          'Lade die Datei im Inkognitomodus hoch, damit die KI sich nicht an alte Chats erinnert.',
          'Kopiere den gesamten Text der PDF manuell in die Chatzeile statt die Datei hochzuladen.'
        ],
        correct: 1,
        explanation: 'Opus + erweiterter Nachdenkenmodus = Claude liest die Datei gründlicher ein und liefert präzisere Antworten bei komplexen Dokumenten.'
      },
      {
        q: 'Du möchtest, dass Claude künftig bei jeder technischen Anleitung berücksichtigt, dass du ein Linux-Nutzer bist, ohne dies jedes Mal neu erwähnen zu müssen. Wo stellst du das ein?',
        options: [
          'In den „Erinnerungen" (Memory) durch den Befehl „Bitte erstelle eine Erinnerung".',
          'In den globalen „Präferenzen" in den Einstellungen.',
          'In einem speziellen „Projekt" für technische Anleitungen.',
          'Sowohl A, B als auch C sind technisch korrekt — B ist für systemweite Betriebssystem-Infos am sinnvollsten.'
        ],
        correct: 3,
        explanation: 'Alle drei Wege funktionieren technisch. Globale Präferenzen (B) sind am sinnvollsten für systemweite Infos wie das Betriebssystem.'
      },
      {
        q: 'Warum ist es ein strategischer Fehler, Anfragen zu verschiedenen Projekten (z. B. Urlaubsplanung und Quartalsbericht) in einem einzigen Chat zu belassen?',
        options: [
          'Claude verbraucht in langen Chats mehr Token und wird dadurch teurer.',
          'Die KI verliert bei Themenmischung den Fokus, was zu ungenaueren Ergebnissen führt.',
          'Der Inkognitomodus funktioniert nur in kurzen Chats.',
          'Die Websuche kann in Chats mit mehr als 10 Nachrichten nicht mehr aktiviert werden.'
        ],
        correct: 1,
        explanation: 'Chat-Disziplin ist entscheidend: Jedes neue Thema in einen eigenen Chat — Themenmischung verschlechtert die Ergebnisqualität erheblich.'
      },
      {
        q: 'Du nutzt Claude in Excel im Modus „Accept all edits". Du bittest die KI, eine Tabelle zu reparieren, in der die Summenbildung nicht stimmt. Was tut Claude?',
        options: [
          'Er schreibt dir eine Anleitung im Seitenfenster, wie du die Formel ändern musst.',
          'Er erstellt eine neue Excel-Datei und sendet sie dir als Download-Link.',
          'Er identifiziert den Fehler (z. B. einen Zirkelbezug) und korrigiert die Formel direkt in der Zelle, ohne nochmals nachzufragen.',
          'Er markiert die fehlerhafte Zelle lediglich rot.'
        ],
        correct: 2,
        explanation: 'Im Modus „Accept all edits" korrigiert Claude Fehler direkt in Excel — inklusive Zirkelbezüge, ohne Rückfragen.'
      },
      {
        q: 'Du erstellst einen „benutzerdefinierten Stil" für deine E-Mails. Was ist der notwendige Schritt, damit Claude deinen Stil erkennt?',
        options: [
          'Du musst Claude mindestens 500 Wörter deines Stils im Chat diktieren.',
          'Du lädst eine Textprobe (z. B. als PDF) hoch, die Claude automatisch analysiert.',
          'Du wählst den vordefinierten Stil „formell" aus und änderst ihn manuell.',
          'Du musst den Stil in den globalen Präferenzen unter „Allgemein" beschreiben.'
        ],
        correct: 1,
        explanation: 'Textprobe hochladen → Claude analysiert automatisch Ton, Struktur und Wortwahl und adaptiert diesen Stil.'
      },
      {
        q: 'Was passiert mit einem Chat, den du im Inkognitomodus (Geist-Symbol) führst, wenn du das Chat-Fenster schließt?',
        options: [
          'Er wird automatisch in das Projekt „Unsortiert" verschoben.',
          'Er bleibt 24 Stunden in der Seitenleiste sichtbar und wird dann gelöscht.',
          'Er taucht gar nicht erst in der Seitenleiste auf und wird nicht dauerhaft gespeichert.',
          'Er wird anonymisiert für das Training der KI verwendet.'
        ],
        correct: 2,
        explanation: 'Inkognitomodus = kein dauerhafter Speicher. Der Chat erscheint nicht in der Seitenleiste und wird nicht aufbewahrt.'
      },
      {
        q: 'Dein Drucker druckt nur noch Streifen. Wie sieht der effizienteste 2-Schritte-Workflow mit Claude aus?',
        options: [
          '1. Websuche nach Testberichten des Druckers, 2. Kauf eines neuen Geräts über Claude.',
          '1. Allgemeine Problembeschreibung, 2. Hochladen eines Fotos vom fehlerhaften Ausdruck oder der Fehlermeldung am PC.',
          '1. Aktivierung von Opus, 2. Erstellung eines Python-Skripts zur Druckersteuerung.',
          '1. Nutzung des Haiku-Modells für eine schnelle Antwort, 2. Erstellung einer Erinnerung „Mein Drucker ist kaputt".'
        ],
        correct: 1,
        explanation: 'Erst allgemein beschreiben, dann Screenshot hochladen — Claude erkennt UI-Elemente und Fehlermeldungen direkt und gibt konkrete Handlungsanweisungen.'
      },
      {
        q: 'Was ist ein wesentlicher Vorteil von „Projekten" gegenüber einfachen Chats?',
        options: [
          'Projekte speichern Anweisungen und Dateien dauerhaft, sodass alle Chats innerhalb des Projekts davon profitieren.',
          'In Projekten ist das Opus-Modell doppelt so schnell.',
          'Projekte können mit anderen Nutzern geteilt werden, um gleichzeitig daran zu arbeiten.',
          'Nur in Projekten kann man HTML-Websites bauen.'
        ],
        correct: 0,
        explanation: 'Projects = dauerhafter Kontext. Einmal anlegen, nie wieder neu briefen — gilt für alle Chats innerhalb des Projekts.'
      },
      {
        q: 'Du lässt Claude eine Tabelle mit DAX-Unternehmen erstellen und eine Zahl erscheint falsch. Wie prüfst du die Verlässlichkeit der Antwort?',
        options: [
          'Du klickst auf die Websuche-Anzeige, um zu sehen, welche Quellen Claude für die Antwort gescannt hat.',
          'Du bittest Claude, die Antwort im Haiku-Modell zu wiederholen.',
          'Du aktivierst den Inkognitomodus und stellst die Frage erneut.',
          'Claude gibt bei Tabellen grundsätzlich keine Quellen an — man muss immer manuell googeln.'
        ],
        correct: 0,
        explanation: 'Bei aktivierter Websuche zeigt Claude die verwendeten Quellen an — so lässt sich jede Zahl nachverfolgen und prüfen.'
      },
      {
        q: 'Wie startest du den Prozess, um eine „Erinnerung" (Memory) in Claudes Gedächtnis zu speichern?',
        options: [
          'Durch Klicken auf das Herz-Symbol in der Chatleiste.',
          'Indem du den Prompt mit der Phrase „Bitte erstelle eine Erinnerung" beginnst.',
          'Man kann Erinnerungen nur manuell in den Einstellungen unter „Fähigkeiten" eintippen.',
          'Claude entscheidet selbstständig nach jedem Chat, was er als Erinnerung speichert.'
        ],
        correct: 1,
        explanation: '„Bitte erstelle eine Erinnerung" ist der Trigger — Claude speichert den Fakt dann dauerhaft und berücksichtigt ihn in zukünftigen Chats.'
      }
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
        <li><strong>Der Prozess:</strong> Man startet mit einer Basis-Anweisung, analysiert die Fehler
        der KI und baut den Prompt <em>schrittweise (iterativ)</em> aus.</li>
        <li><strong>Das Ziel:</strong> Klare Anweisungen so strukturieren, dass die KI im ersten Versuch
        (&bdquo;One-Shot&ldquo;) das gewünschte Ergebnis liefert.</li>
      </ul>

      <h3>2. Die 6 Bausteine des perfekten Prompts</h3>
      <table>
        <thead><tr><th>Baustein</th><th>Beschreibung</th><th>Beispiel</th></tr></thead>
        <tbody>
          <tr><td><strong>Rolle</strong></td><td>Fachliche Identität geben</td><td>&bdquo;Du bist ein erfahrener Social-Media-Berater&ldquo;</td></tr>
          <tr><td><strong>Aufgabe</strong></td><td>Das Herzstück — starte mit einem Verb</td><td>&bdquo;Analysiere&ldquo;, &bdquo;Erstelle&ldquo;, &bdquo;Vergleiche&ldquo;</td></tr>
          <tr><td><strong>Kontext</strong></td><td>Relevante Hintergrundinfos</td><td>Zielgruppe, Problemstellung, Tonfall</td></tr>
          <tr><td><strong>Vorgehen</strong></td><td>Logische Einzelschritte</td><td>&bdquo;Schritt 1: Recherche, Schritt 2: Analyse&ldquo;</td></tr>
          <tr><td><strong>Stoppkriterien</strong></td><td>Grenzen gegen Halluzinationen</td><td>&bdquo;Wenn unsicher, sag es offen&ldquo;</td></tr>
          <tr><td><strong>Output</strong></td><td>Genaues Format bestimmen</td><td>Tabelle, Liste, JSON, Wortanzahl</td></tr>
        </tbody>
      </table>
      <div class="callout">
        <div class="callout-title">Warum Stoppkriterien?</div>
        <p>Ohne klare Grenzen &bdquo;ratet&ldquo; Claude lieber, als Unsicherheit zuzugeben.</p>
      </div>

      <h3>3. Strukturierung durch XML-Tags</h3>
      <p>Anthropic empfiehlt XML-Tags (z.B. <code>&lt;anweisungen&gt;</code>, <code>&lt;kontext&gt;</code>), um Informationen sauber zu trennen.</p>
      <ul>
        <li><strong>Vorteil:</strong> Claude wurde darauf trainiert, diese Struktur zu verstehen.</li>
        <li><strong>Output-Kontrolle:</strong> Endergebnis in Tags wie <code>&lt;urteil&gt;</code> setzen.</li>
      </ul>

      <h3>4. Fortgeschrittene Prompt-Techniken</h3>
      <h4>Few-Shot Prompting</h4>
      <p>Zeige Claude <strong>1 bis 3 Beispiele</strong> — oft mächtiger als jede lange Beschreibung.</p>
      <h4>Chain of Thought</h4>
      <p>Claude anweisen, <strong>&bdquo;Schritt für Schritt zu denken&ldquo;</strong> — verbessert die Logik massiv.</p>
      <h4>Prompt Chaining</h4>
      <p>Riesige Aufgabe in <strong>kleine, aufeinanderfolgende Prompts</strong> zerlegen. Jedes Teilergebnis prüfen.</p>
      <h4>Self-Reflection</h4>
      <p>Claude bitten, seine Antwort <strong>selbst auf Fehler zu prüfen</strong> und zu überarbeiten.</p>
      <h4>Pre-filling</h4>
      <p>Anfang der Antwort vorgeben (z.B. <code>{</code> für JSON) — <strong>erzwingt das Format strikt</strong>.</p>

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
      {
        q: 'Prompt Engineering wird als "iterative Wissenschaft" beschrieben. Welches Vorgehen entspricht dieser Idee am genauesten?',
        options: ['Man kopiert bewährte Prompts aus dem Internet und nutzt sie unverändert', 'Man startet mit einer Basis, analysiert Schwächen und verbessert schrittweise', 'Man formuliert von Anfang an einen einzigen, fertigen und perfekten Prompt', 'Man überlässt der KI das eigenständige Schreiben des kompletten Prompts'],
        correct: 1, explanation: 'Iterativ heißt schrittweise verbessern: mit einer Basis starten, Fehler analysieren, ausbauen und wiederholen.'
      },
      {
        q: 'Von den sechs Bausteinen eines Prompts gilt einer als das "Herzstück". Welcher ist gemeint und warum?',
        options: ['Der Kontext, da er alle nötigen Hintergrundinformationen für die Antwort liefert', 'Das Output-Format, weil es die Form des Ergebnisses verbindlich vorab festlegt', 'Die Rolle, weil sie Claude die passende Perspektive und Fachexpertise zuweist', 'Die Aufgabe, denn sie ist konkret und beginnt stets mit einem klaren Verb'],
        correct: 3, explanation: 'Die Aufgabe ist das Herzstück: Sie muss konkret formuliert sein und startet immer mit einem Verb.'
      },
      {
        q: 'In einem Prompt werden bewusst "Stoppkriterien" gesetzt. Welche Funktion erfüllen sie?',
        options: ['Sie beenden den laufenden Chat nach einer fest definierten Zeitspanne automatisch', 'Sie verhindern grundsätzlich, dass Claude überhaupt jemals Rückfragen an dich stellt', 'Sie setzen klare Grenzen und beugen erfundenen, halluzinierten Antworten gezielt vor', 'Sie begrenzen jede einzelne Antwort fest auf höchstens einhundert Wörter Länge'],
        correct: 2, explanation: 'Stoppkriterien verhindern, dass Claude rät statt Unsicherheit offen zuzugeben — sie wirken gegen Halluzinationen.'
      },
      {
        q: 'Anthropic empfiehlt, Prompts mit XML-Tags zu strukturieren. Worin liegt der eigentliche Nutzen?',
        options: ['Claude wurde darauf trainiert und kann sich gezielt auf einzelne Abschnitte beziehen', 'Die Tags verschlüsseln den Prompt, sodass Außenstehende ihn nicht mehr mitlesen können', 'Ohne solche Tags lässt sich die integrierte Websuche von Claude gar nicht erst aktivieren', 'Die Tags lassen den Prompt für den menschlichen Betrachter lediglich aufgeräumter wirken'],
        correct: 0, explanation: 'Claude wurde auf XML-Struktur trainiert; Tags ermöglichen die gezielte Referenzierung einzelner Abschnitte.'
      },
      {
        q: 'Eine umfangreiche Aufgabe soll über "Prompt Chaining" gelöst werden. Was beschreibt diese Technik korrekt?',
        options: ['Man verpackt einen Prompt in eine möglichst lange, dekorative Kette aus Emojis', 'Man zerlegt eine große Aufgabe in kleine, sinnvoll aufeinanderfolgende Prompts', 'Man lässt jeden eingegebenen Prompt automatisch in mehrere andere Sprachen übersetzen', 'Man setzt mehrere KI-Modelle exakt gleichzeitig für ein und dieselbe Aufgabe ein'],
        correct: 1, explanation: 'Prompt Chaining zerlegt eine große Aufgabe in kleine Schritte, deren Teilergebnisse geprüft und weiterverwendet werden.'
      },
      {
        q: 'Die Technik "Self-Reflection" wird in einem Prompt eingesetzt. Was bewirkt sie konkret?',
        options: ['Claude legt im Hintergrund automatisch ein fortlaufendes Tagebuch seiner Antworten an', 'Der Nutzer reflektiert zunächst gründlich und in Ruhe über die eigene Fragestellung', 'Claude legt vor jeder Antwort eine kurze gedankliche Pause zum Sortieren der Inhalte ein', 'Claude prüft die eigene Antwort kritisch auf Fehler und überarbeitet sie anschließend'],
        correct: 3, explanation: 'Bei Self-Reflection wird Claude gebeten, die eigene Antwort kritisch zu prüfen und gezielt zu verbessern.'
      },
      {
        q: 'Du nutzt die Technik "Pre-filling". Welche Beschreibung trifft genau zu?',
        options: ['Man gibt Claude den Anfang der Antwort vor, etwa { als Start für ein JSON-Objekt', 'Man legt häufig genutzte Prompts in einer Bibliothek zur späteren Wiederverwendung ab', 'Man bittet Claude darum, den gesamten bisherigen Chatverlauf knapp zusammenzufassen', 'Man füllt vorab ein klassisches Online-Formular mit den eigenen Angaben vollständig aus'],
        correct: 0, explanation: 'Pre-filling gibt den Antwortanfang vor — beginnt die Antwort mit {, erzwingt das zuverlässig ein JSON-Format.'
      },
      {
        q: 'Statische, gleichbleibende Informationen gehören in den System-Prompt statt in jede Anfrage. Warum?',
        options: ['Weil der System-Prompt im Gegensatz zu normalen Eingaben unbegrenzt lang sein darf', 'Weil gewöhnliche Prompts grundsätzlich keine angehängten Dokumente akzeptieren können', 'Weil statische Inhalte dank Caching nicht bei jeder einzelnen Anfrage neu gelesen werden', 'Weil der System-Prompt die eingegebenen Inhalte spürbar und messbar schneller verarbeitet'],
        correct: 2, explanation: 'Statische Inhalte im System-Prompt werden gecacht und müssen nicht bei jeder Anfrage neu eingelesen werden.'
      },
      {
        q: 'Du analysierst gemeinsam ein ausgefülltes Formular und eine grobe Handskizze. Welche Reihenfolge ist sinnvoll?',
        options: ['Die Reihenfolge ist unerheblich, da Claude beide Quellen ohnehin völlig gleich gewichtet', 'Zuerst die klaren Fakten des Formulars, danach die deutungsbedürftige Handskizze', 'Beide Quellen gleichzeitig einreichen, weil das die Verarbeitung am stärksten beschleunigt', 'Zuerst die Handskizze interpretieren und erst danach das strukturierte Formular auswerten'],
        correct: 1, explanation: 'Form vor Sketch: Die strukturierten Fakten liefern den Kontext, vor dem sich die Skizze richtig deuten lässt.'
      },
      {
        q: 'Few-Shot Prompting wird gegenüber einer langen Beschreibung bevorzugt. Worin liegt sein zentraler Vorteil?',
        options: ['Es funktioniert technisch bedingt ausschließlich mit dem leistungsstärksten Modell Opus', 'Es senkt die Kosten spürbar, weil dabei insgesamt deutlich weniger Tokens verbraucht werden', 'Es eignet sich nur für das Erzeugen und Korrigieren von strukturiertem Programmcode', 'Wenige konkrete Beispiele zeigen das gewünschte Ergebnis klarer als lange Beschreibungen'],
        correct: 3, explanation: 'Ein bis drei konkrete Beispiele machen das Ziel oft greifbarer als lange Erklärungen — Claude lernt am Muster.'
      }
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
      <p>Was passiert, wenn man den KI-Account des Arbeitgebers nutzt, um ein privates Nebenprojekt zu entwickeln? Im schlimmsten Fall gehört das Projekt dem Arbeitgeber.</p>
      <p>Und wenn das Nebenprojekt mit dem privaten KI-Account entwickelt wird, aber auf dem Firmenrechner? Das Risiko bleibt. Die einfache Regel: <strong>Privates auf privaten Geräten, mit dem privaten Account.</strong></p>

      <h3>3. Konnektoren: nützlich und riskant</h3>
      <p>Ein <strong>Konnektor</strong> verbindet die KI mit einem anderen Dienst: Gmail, Google Drive, Calendar, Slack, Teams, Outlook. Ist die Verbindung hergestellt, kann die KI diese Daten lesen und darauf reagieren.</p>
      <p>Das ist nützlich — aber gleichzeitig die <strong>heikelste Funktion im persönlichen KI-Account</strong>.</p>
      <p><strong>Der Zugriff ist enorm:</strong> Gmail verbinden bedeutet, dass die KI das gesamte Postfach lesen kann. Drive verbinden bedeutet Zugriff auf alle Dateien, die auch der Nutzer öffnen kann.</p>
      <p>Eine verbundene KI kann durch <strong>manipulierte Inhalte in E-Mails oder Dokumenten gesteuert werden</strong>. Forscher haben 2025 zweimal gezeigt, wie das funktioniert — als sogenannte <strong>„Lethal Trifecta"</strong>.</p>
      <div class="callout callout-warn">
        <div class="callout-title">Die Lethal Trifecta</div>
        <p>KI hat Zugriff auf private Daten + liest externe Inhalte, die man nicht kontrolliert + kann Informationen nach außen senden = Angreifer können Daten stehlen.</p>
      </div>

      <h3>4. Konnektoren sicher einsetzen</h3>
      <ul>
        <li><strong>Keine Arbeitsaccounts mit dem persönlichen KI-Account verbinden.</strong></li>
        <li><strong>So wenig verbinden wie möglich, mit minimalem Zugriff.</strong> Nur-Lesen oder ein einzelner Ordner reichen meist.</li>
        <li><strong>Nur offizielle Konnektoren nutzen.</strong> Drittanbieter können nach der Genehmigung ihr Verhalten unbemerkt ändern.</li>
        <li><strong>Monatlich prüfen und nicht benötigte Verbindungen trennen.</strong></li>
      </ul>
      <div class="callout callout-success">
        <div class="callout-title">Fazit</div>
        <p>Konnektoren gehören in den <strong>IEG Claude Account</strong> — dort ist die Sicherheit professionell gewährleistet.</p>
      </div>
    `,
    quiz: [
      {
        q: 'Ein M&A-Vertrag mit echten Mandantennamen und Deal-Konditionen soll analysiert werden. Was ist richtig?',
        options: [
          'In den persönlichen Claude Account einfügen und den Inkognito-Modus aktivieren',
          'Eine Kollegin bitten, den Text einzufügen',
          'Daten zuerst anonymisieren oder den IEG Enterprise Account verwenden',
          'Schnell einfügen, bevor jemand es bemerkt'
        ],
        correct: 2,
        explanation: 'Verträge mit echten Namen und Deal-Konditionen gehören zur "Niemals einfügen"-Kategorie. Erst anonymisieren oder den IEG Enterprise Account nutzen.'
      },
      {
        q: 'Ein Nebenprojekt wird mit dem KI-Abonnement des Arbeitgebers entwickelt. Wem gehört das Ergebnis?',
        options: ['Mir, weil ich die Prompts geschrieben habe', 'Niemandem — KI-generierter Code ist nicht urheberrechtlich geschützt', 'Dem KI-Anbieter (Anthropic)', 'Dem Arbeitgeber, weil dessen Tool genutzt wurde'],
        correct: 3,
        explanation: 'Nutzung des firmeneigenen KI-Tools für Nebenprojekte = das geistige Eigentum kann rechtlich dem Arbeitgeber gehören.'
      },
      {
        q: 'Was passiert, wenn Gmail mit dem persönlichen KI-Account verbunden wird?',
        options: ['Die KI sieht nur manuell ausgewählte E-Mails', 'Die KI erhält Lesezugriff auf das gesamte Postfach', 'Es ändert sich nichts — Konnektoren sind rein kosmetisch', 'Die KI löscht automatisch alte E-Mails'],
        correct: 1,
        explanation: 'Enormer Zugriff: Nach der Verbindung kann die KI das gesamte Postfach lesen.'
      },
      {
        q: 'Welche drei Bedingungen machen die "Lethal Trifecta" möglich?',
        options: ['Drei KI-Modelle gleichzeitig nutzen', 'KI hat Zugriff auf private Daten, liest externe Inhalte und kann Informationen nach außen senden', 'Drei verschiedene Browser gleichzeitig verwenden', 'Drei Konnektoren vom selben Anbieter'],
        correct: 1,
        explanation: 'Private Daten + externe Inhalte + ausgehende Verbindung = Angreifer können die KI kapern.'
      },
      {
        q: 'Warum sollte der Firmen-Slack niemals mit einem persönlichen KI-Account verbunden werden?',
        options: ['Weil Slack keine KI-Konnektoren unterstützt', 'Weil das die KI verlangsamt', 'Weil damit Firmendaten in ein Tool ohne Enterprise-Vertrag fließen', 'Weil persönliche Accounts sicherer sind'],
        correct: 2,
        explanation: 'Arbeitsaccounts im persönlichen KI-Tool = Firmendaten ohne Vertrag und ohne Audit-Trail.'
      },
      {
        q: 'Warum kann ein bereits genehmigter Drittanbieter-Konnektor gefährlich werden?',
        options: ['Er verlangsamt den Computer', 'Er kann sein Verhalten nach der Genehmigung unbemerkt ändern', 'Drittanbieter-Konnektoren stehlen grundsätzlich Passwörter', 'Er verbraucht zu viel Akku'],
        correct: 1,
        explanation: 'Remote-Konnektoren von Drittanbietern können nach der Genehmigung still und heimlich ihr Verhalten ändern.'
      },
      {
        q: 'Wie oft sollten aktive Konnektoren überprüft und nicht genutzte getrennt werden?',
        options: ['Einmal jährlich beim Jahresgespräch', 'Niemals — einmal verbunden, immer verbunden', 'Nur wenn etwas schiefläuft', 'Monatlich — KI-Einstellungen prüfen und Unnötiges trennen'],
        correct: 3,
        explanation: 'Monatliche Überprüfung: Alles trennen, was nicht aktiv genutzt wird.'
      }
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
      {
        q: 'Was unterscheidet einen Claude Skill von einer Projektanweisung?',
        options: [
          'Skills funktionieren nur mit Claude Opus',
          'Ein Skill ist nur für private Notizen gedacht',
          'Projektanweisungen sind flexibler als Skills',
          'Skills sind übertragbar und in jedem Chat nutzbar, Projektanweisungen sind isoliert'
        ],
        correct: 3,
        explanation: 'Skills sind übertragbar und kombinierbar — Projektanweisungen bleiben an ein Projekt gebunden.'
      },
      {
        q: 'Welches Tool wird für die Wissensgewinnung vor der Skill-Erstellung empfohlen?',
        options: ['Google Docs', 'NotebookLM mit Deep Research', 'Microsoft Word', 'ChatGPT'],
        correct: 1,
        explanation: 'NotebookLM mit Deep Research durchsucht über 60 Quellen.'
      },
      {
        q: 'Welche Rückfragen stellt Claude im Skill Creator Modus?',
        options: [
          'Ziel, Zielgruppe, Output-Format und Sprache',
          'Claude stellt keine Rückfragen',
          'Nur nach dem Namen des Skills',
          'Nur nach dem Preis'
        ],
        correct: 0,
        explanation: 'Claude fragt interaktiv: Ziel, Zielgruppe, Format, Sprache.'
      },
      {
        q: 'Warum reicht bei einem fertigen Skill oft ein kurzer Prompt?',
        options: [
          'Weil Skills nur einfache Aufgaben erledigen',
          'Weil der Skill den Prompt automatisch verlängert',
          'Weil das Expertenwissen bereits im Skill verankert ist',
          'Weil Skills mit zufälligen Texten arbeiten'
        ],
        correct: 2,
        explanation: 'Frameworks und Abläufe sind bereits gespeichert — der Skill sorgt automatisch für Qualität.'
      },
      {
        q: 'Was ist das übergeordnete Ziel des Skill-Systems?',
        options: [
          'Nur Landing Pages zu erstellen',
          'Claude durch ein anderes Tool zu ersetzen',
          'Möglichst viele einzelne Prompts zu schreiben',
          'Weg von einzelnen Prompts hin zu einem festen Arbeitssystem'
        ],
        correct: 3,
        explanation: 'Ziel: Von isolierten Prompts zu einem systematischen Arbeitssystem.'
      }
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
      <p>Dieser Workflow zeigt, wie man komplexe Finanzaufgaben durch die Kombination
      spezialisierter Skills in einen <strong>vollautomatisierten Prozess</strong> verwandelt.</p>

      <h3>1. Was sind Claude Skills im Finanzkontext?</h3>
      <p>Ein Skill konserviert einen einmal definierten Workflow für zukünftige Nutzung.
      Im Finanzbereich transformieren sie Rohdaten in <strong>CFO-fertige Berichte</strong>.</p>

      <h3>2. Die Bausteine des Workflows</h3>
      <h4>Skill 1: Data Cleaning</h4>
      <ul>
        <li><strong>Ausgangslage:</strong> Rohdateien oft unstrukturiert, fehlende Felder.</li>
        <li><strong>Funktion:</strong> Tabs konsolidieren, nur relevante Felder behalten, fehlende Infos ergänzen.</li>
        <li><strong>Erstellung:</strong> Nach korrekter Bereinigung im Chat den Skill daraus erstellen lassen.</li>
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
      <div class="callout">
        <div class="callout-title">Kernidee</div>
        <p>Einmalig spezialisierte Skills bauen, dann mit einem einzigen Prompt auslösen.</p>
      </div>
    `,
    quiz: [
      {
        q: 'Was ist ein Claude Skill im Finanzkontext?',
        options: [
          'Ein einmaliger Prompt, der nach Benutzung gelöscht wird',
          'Eine gespeicherte Arbeitsanweisung, die Rohdaten in CFO-fertige Berichte transformiert',
          'Ein externes Excel-Plugin',
          'Eine manuelle Checkliste für Buchhalter'
        ],
        correct: 1,
        explanation: 'Ein Skill konserviert einen definierten Workflow für wiederholte Nutzung.'
      },
      {
        q: 'Was macht der "Data Cleaning"-Skill mit unstrukturierten Excel-Exporten?',
        options: [
          'Er löscht die gesamte Datei und erstellt sie neu',
          'Er konsolidiert Tabs, behält relevante Felder und fügt fehlende Infos hinzu',
          'Er konvertiert Excel in PDF ohne Änderungen',
          'Er sendet die Datei an einen menschlichen Buchhalter'
        ],
        correct: 1,
        explanation: 'Data Cleaning: Tabs zusammenführen, relevante Felder behalten, fehlende Infos ergänzen.'
      },
      {
        q: 'Warum wird ein separater Branding-Skill erstellt?',
        options: [
          'Weil Claude ohne Branding-Skill nicht funktioniert',
          'Damit alle Ausgaben automatisch das Corporate Design tragen',
          'Um das Claude-Interface farblich anzupassen',
          'Weil Branding gesetzlich vorgeschrieben ist'
        ],
        correct: 1,
        explanation: 'Der Branding-Skill hinterlegt Farben und Stile — alle Outputs sehen automatisch professionell aus.'
      },
      {
        q: 'Was ist die "Drill-Down"-Funktion im Dynamic Dashboard?',
        options: [
          'Eine Funktion zum Löschen von Daten',
          'Ein Button zum Exportieren als PDF',
          'Ein Bohrmaschinen-Simulator',
          'Durch Klick auf einen Namen werden alle detaillierten Berichte angezeigt'
        ],
        correct: 3,
        explanation: 'Drill-Down = auf Namen klicken → alle detaillierten Transaktionen sehen.'
      },
      {
        q: 'In welcher Reihenfolge arbeitet der "Super Skill"?',
        options: [
          'Dashboard → PowerPoint → Data Cleaning → Excel',
          'PowerPoint → Dashboard → Excel → Data Cleaning',
          'Data Cleaning → saubere Excel → Dashboard → PowerPoint',
          'Excel → PowerPoint → Dashboard → Data Cleaning'
        ],
        correct: 2,
        explanation: 'Die Kette: 1. Cleaning → 2. Excel → 3. Dashboard → 4. PowerPoint.'
      },
      {
        q: 'Was passiert, wenn man "credit card report cycle" eingibt?',
        options: [
          'Claude fragt nach weiteren Details und wartet',
          'Claude führt den gesamten Workflow autark durch',
          'Claude zeigt nur die letzte Kreditkartenabrechnung',
          'Claude öffnet die Kreditkarten-Website'
        ],
        correct: 1,
        explanation: 'Der Super Skill verkn&uuml;pft alle Einzelskills — ein Prompt löst den kompletten Prozess aus.'
      },
      {
        q: 'Wo findet man alle gespeicherten Skills?',
        options: [
          'Im Chat-Verlauf unter "Letzte Nachrichten"',
          'In den Einstellungen unter Customize → Skills',
          'Auf der Anthropic-Website unter "Downloads"',
          'Skills können nach der Erstellung nicht mehr bearbeitet werden'
        ],
        correct: 1,
        explanation: 'Einstellungen → Customize → Skills.'
      },
      {
        q: 'Wie wird ein neuer Skill am besten erstellt?',
        options: [
          'Man schreibt den Skill manuell in einem Texteditor',
          'Man kauft Skills im Claude Store',
          'Man lässt Claude die Aufgabe erst im Chat lösen, dann den Skill erstellen',
          'Skills werden automatisch nach 10 ähnlichen Chats erstellt'
        ],
        correct: 2,
        explanation: 'Best Practice: Erst im Chat lösen, dann Claude anweisen den Skill zu erstellen.'
      },
      {
        q: 'Welches Format nutzt der Dashboard Builder?',
        options: [
          'PDF mit eingebetteten Links',
          'PowerPoint mit Animationen',
          'Excel mit Pivot-Tabellen',
          'Interaktives HTML mit Filtern und Trendanalysen'
        ],
        correct: 3,
        explanation: 'Der Dashboard Builder erstellt interaktives HTML mit Drill-Down-Funktionalität.'
      },
      {
        q: 'Was ist der Hauptvorteil des modularen Skill-Ansatzes?',
        options: [
          'Ein großer Prompt ist immer besser als mehrere Skills',
          'Modulare Skills sind billiger',
          'Einzelne Skills können unabhängig aktualisiert, kombiniert und wiederverwendet werden',
          'Es gibt keinen Unterschied'
        ],
        correct: 2,
        explanation: 'Modularität: Jeder Skill einzeln aktualisierbar, frei kombinierbar, in verschiedenen Workflows wiederverwendbar.'
      }
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
      <p>Während ein normaler Chatbot nur antwortet, ist Claude Cowork ein
      <strong>KI-Agent, der selbstständig auf deinem Computer handelt</strong>.
      Man kann es sich so vorstellen: Das normale Claude-Modell ist das
      <strong>Gehirn</strong>, während Cowork die <strong>Hände</strong> ist —
      es kann Dateien öffnen, verschieben, umbenennen und Programme steuern.</p>

      <h3>2. Einrichtung und Sicherheit (Lokale Kontrolle)</h3>
      <ul>
        <li><strong>Desktop-App:</strong> Cowork funktioniert ausschließlich über die
        Claude Desktop-App (für Mac und Windows) und setzt ein <strong>Pro-Abo</strong> voraus.</li>
        <li><strong>Sicherheits-Sandboxing:</strong> Du musst Cowork explizit lokale Ordner zuweisen.
        Die KI kann nur in den Bereichen arbeiten, die du freigegeben hast — das schützt deine
        restlichen privaten Daten vor ungewollten Zugriffen oder Löschungen.</li>
        <li><strong>Arbeitsumgebung:</strong> Für jedes Projekt solltest du einen eigenen Ordner
        anlegen. Cowork speichert dort alle Fortschritte und Daten lokal ab.</li>
      </ul>

      <h3>3. Kernfunktionen im Überblick</h3>
      <ul>
        <li><strong>Dateimanagement:</strong> Cowork kann hunderte Dateien (z.&thinsp;B. Screenshots
        oder Protokolle) analysieren, nach Inhalt sinnvoll umbenennen und in eine logische
        Ordnerstruktur sortieren.</li>
        <li><strong>Dokumentenerstellung:</strong> Aus Rohdaten (z.&thinsp;B. ungeordneten Rechnungen)
        erstellt es neue Dateien wie Excel-Tabellen, CSV-Tracker oder PowerPoint-Präsentationen.</li>
        <li><strong>Web-Browsing:</strong> Über die „Claude in Chrome"-Erweiterung kann Cowork aktiv
        im Internet recherchieren, Webseiten zusammenfassen oder Daten aus Dashboards
        (z.&thinsp;B. YouTube Studio) extrahieren.</li>
        <li><strong>Konnektoren:</strong> Du kannst Claude mit Drittanbieter-Apps wie Gmail, Notion,
        Google Drive oder Slack verknüpfen — so kann Claude z.&thinsp;B. offene Punkte aus einem
        Protokoll lesen und direkt eine E-Mail über dein Gmail-Konto an die Teilnehmer senden.</li>
      </ul>

      <h3>4. Fortgeschrittene Automatisierung</h3>
      <ul>
        <li><strong>Zeitsteuerung (Scheduling):</strong> Aufgaben planen, z.&thinsp;B. „Prüfe jeden
        Morgen um 8 Uhr den Ordner auf neue Protokolle und versende sie". Diese Aufgaben findest du
        im Reiter „Geplante Aufgaben".</li>
        <li><strong>Markdown-Gedächtnis:</strong> Da Cowork kein eingebautes Sitzungsgedächtnis wie
        der normale Chat hat, nutzt es Markdown-Dateien im Projektordner, um Informationen
        (z.&thinsp;B. E-Mail-Adressen) für die Zukunft zu speichern.</li>
        <li><strong>Skills &amp; Plugins:</strong> Du kannst Claude spezifische Fachkenntnisse
        (z.&thinsp;B. Marketing- oder Sales-Skills) beibringen oder dein eigenes Corporate Design
        für PDFs als Skill hinterlegen.</li>
      </ul>

      <h3>5. Wichtige Regeln für den Betrieb</h3>
      <div class="callout callout-warn">
        <div class="callout-title">Session Persistence</div>
        <p>Die Desktop-App muss <strong>offen bleiben</strong>, während ein Task läuft. Wenn du die
        App schließt, stoppt der Agent seine Arbeit.</p>
      </div>
      <div class="callout">
        <div class="callout-title">Modellwahl</div>
        <p>Für einfache Sortieraufgaben reicht das sparsame <strong>Sonnet</strong>-Modell; für
        komplexe Analysen oder Finanzmodelle solltest du <strong>Opus</strong> wählen, was jedoch
        mehr Credits verbraucht.</p>
      </div>
    `,
    quiz: [
      {
        q: 'Wie lässt sich das Verhältnis von Claude-Modell und Cowork am treffendsten beschreiben?',
        options: [
          'Cowork ersetzt das Sprachmodell durch eine eigene, schnellere Spezial-Engine',
          'Das Modell ist das Gehirn, Cowork sind die Hände, die Dateien und Programme steuern',
          'Cowork ist ein reiner Chatbot ohne jeden Zugriff auf das lokale Dateisystem',
          'Cowork und das Modell laufen in zwei vollständig voneinander getrennten Konten'
        ],
        correct: 1,
        explanation: 'Das Modell ist das Gehirn, Cowork die Hände — es öffnet, verschiebt und benennt Dateien und steuert Programme.'
      },
      {
        q: 'Über welchen Zugang läuft Cowork und welche Voraussetzung gilt dafür?',
        options: [
          'Über jeden Browser ohne weitere Voraussetzung oder kostenpflichtiges Abo',
          'Allein über die mobile App, ein kostenloses Konto genügt vollständig',
          'Ausschließlich über die Web-Oberfläche mit einem reinen Team-Vertrag',
          'Ausschließlich über die Desktop-App (Mac/Windows) und mit einem Pro-Abo'
        ],
        correct: 3,
        explanation: 'Cowork funktioniert nur über die Claude Desktop-App für Mac und Windows und setzt ein Pro-Abo voraus.'
      },
      {
        q: 'Welchen Zweck erfüllt das Sicherheits-Sandboxing in Claude Cowork?',
        options: [
          'Cowork arbeitet nur in den Ordnern, die man ihm zuvor explizit freigegeben hat',
          'Es verschlüsselt sämtliche Festplatten des Rechners automatisch im Hintergrund',
          'Es begrenzt die maximale Laufzeit eines einzelnen Tasks fest auf zehn Minuten',
          'Es verbietet während eines laufenden Tasks jeden Zugriff auf das Internet'
        ],
        correct: 0,
        explanation: 'Sandboxing: Cowork darf nur in explizit freigegebenen Ordnern arbeiten — das schützt alle übrigen privaten Daten.'
      },
      {
        q: 'Warum nutzt Cowork Markdown-Dateien im Projektordner?',
        options: [
          'Weil Markdown die einzige Sprache ist, die Cowork überhaupt lesen kann',
          'Um die erzeugten Ausgaben optisch ansprechender als ein PDF zu gestalten',
          'Weil ihm ein Sitzungsgedächtnis fehlt und es Infos so dauerhaft ablegt',
          'Um laufende Tasks automatisch an einen menschlichen Kollegen zu übergeben'
        ],
        correct: 2,
        explanation: 'Cowork hat kein eingebautes Sitzungsgedächtnis und speichert Informationen daher in Markdown-Dateien im Projektordner.'
      },
      {
        q: 'Was geschieht mit einem laufenden Task, wenn man die Desktop-App schließt?',
        options: [
          'Der Task läuft unverändert in der Cloud von Anthropic einfach weiter',
          'Der Task wird automatisch an die Smartphone-App zur Fortsetzung übergeben',
          'Der Task pausiert und startet beim nächsten Login vollständig von vorne',
          'Der Agent stoppt seine Arbeit, denn die App muss dafür geöffnet bleiben'
        ],
        correct: 3,
        explanation: 'Session Persistence: Die App muss offen bleiben — schließt man sie, stoppt der Agent seine Arbeit.'
      },
      {
        q: 'Welche Aufgabe lässt sich mit der „Geplante Aufgaben"-Funktion (Scheduling) umsetzen?',
        options: [
          '„Prüfe jeden Morgen um 8 Uhr den Ordner auf neue Protokolle und versende sie"',
          '„Verdopple dauerhaft die Rechenleistung des verwendeten Sprachmodells"',
          '„Lösche eigenständig alle privaten Dateien außerhalb des Projektordners"',
          '„Wechsle das Abo automatisch auf einen günstigeren Tarif als das Pro-Abo"'
        ],
        correct: 0,
        explanation: 'Scheduling erlaubt wiederkehrende Aufgaben wie das tägliche Prüfen und Versenden von Protokollen — zu finden im Reiter „Geplante Aufgaben".'
      },
      {
        q: 'Wie wählt man das Modell für Cowork-Aufgaben sinnvoll aus?',
        options: [
          'Immer Opus, da Sonnet für Cowork-Aufgaben technisch nicht unterstützt wird',
          'Für einfaches Sortieren reicht Sonnet, komplexe Analysen sprechen für Opus',
          'Immer Haiku, weil ausschließlich dieses Modell auf lokale Dateien zugreifen darf',
          'Die Modellwahl hat in Cowork keinen Einfluss auf Credits oder Ergebnisqualität'
        ],
        correct: 1,
        explanation: 'Sonnet ist sparsam und reicht für einfache Sortieraufgaben; für komplexe Analysen lohnt Opus, das aber mehr Credits verbraucht.'
      },
      {
        q: 'Wozu dient die „Claude in Chrome"-Erweiterung im Cowork-Kontext?',
        options: [
          'Sie ersetzt die Desktop-App vollständig durch eine reine Browser-Lösung',
          'Sie verschlüsselt den gesamten Browserverlauf des Nutzers automatisch',
          'Sie sperrt aus Sicherheitsgründen jeden Zugriff auf externe Dashboards',
          'Cowork kann damit aktiv recherchieren und Daten aus Dashboards extrahieren'
        ],
        correct: 3,
        explanation: 'Über „Claude in Chrome" recherchiert Cowork aktiv im Web, fasst Seiten zusammen und extrahiert Daten aus Dashboards wie YouTube Studio.'
      },
      {
        q: 'Was ermöglichen Konnektoren wie Gmail oder Notion in Cowork?',
        options: [
          'Claude liest z.B. offene Punkte aus einem Protokoll und versendet direkt eine E-Mail',
          'Sie beschleunigen ausschließlich die reine Dateianalyse auf der Festplatte',
          'Sie ersetzen das lokale Sandboxing vollständig durch einen Cloud-Speicher',
          'Sie sind ausschließlich in der kostenlosen Gratis-Version von Claude verfügbar'
        ],
        correct: 0,
        explanation: 'Konnektoren verbinden Claude mit Diensten wie Gmail oder Notion — so kann Claude Protokoll-Punkte lesen und direkt eine E-Mail an die Teilnehmer senden.'
      },
      {
        q: 'Was kann Cowork aus ungeordneten Rohdaten (z. B. losen Rechnungen) erstellen?',
        options: [
          'Nur reine Textdateien ohne jede Formatierung oder weitere Struktur',
          'Ausschließlich einfache Screenshots der jeweiligen Originaldateien',
          'Neue Dateien wie Excel-Tabellen, CSV-Tracker oder PowerPoint-Präsentationen',
          'Lediglich eine reine Liste der Dateinamen ganz ohne deren Inhalte'
        ],
        correct: 2,
        explanation: 'Cowork verwandelt Rohdaten in fertige Dokumente — z.B. Excel-Tabellen, CSV-Tracker oder PowerPoint-Präsentationen.'
      }
    ]
  },
  {
    id: 7,
    number: '07',
    meta: 'Praxis · Modul 7',
    title: 'Claude in Microsoft Office (Excel & PowerPoint)',
    desc: 'Das Claude Add-in direkt in Excel und PowerPoint: Formeln per Sprache generieren, VBA-Makros schreiben, Zirkelbezüge korrigieren und vollständige Präsentationen aus Datentabellen erzeugen — inklusive Setup, Sicherheit und Grenzen der Integration.',
    duration: '30 Min.',
    videos: [
      { url: 'https://www.youtube.com/embed/uLJp_4XCNIg', title: 'Claude im Excel Add-in', caption: 'Video 7.1 · Claude im Excel Add-in — Formeln, Makros und Datenanalyse direkt im Sheet' },
      { url: 'https://www.youtube.com/embed/oqN-_j6HdV4', title: 'Claude im PowerPoint Add-in', caption: 'Video 7.2 · Claude im PowerPoint Add-in — Folien und Sprechernotizen automatisieren' },
    ],
    images: [],
    longContent: '',
    content: `
      <h3>1. Zwei Betriebsmodi: Add-in vs. Direktintegration</h3>
      <p>Claude lässt sich auf zwei grundlegend verschiedene Arten mit Microsoft Office kombinieren:</p>
      <table>
        <thead><tr><th>Modus</th><th>Zugang</th><th>Kernvorteil</th></tr></thead>
        <tbody>
          <tr><td><strong>Eigenständiger Chat</strong></td><td>Browser oder Desktop-App</td><td>Flexible Allzwecklösung — ideal für Text, Recherche und Analyse ohne Dateikontext</td></tr>
          <tr><td><strong>Office Add-in</strong></td><td>Direkt in Excel / PowerPoint</td><td>Claude sieht die geöffnete Datei und kann Zellen, Formeln und Folien <em>direkt bearbeiten</em></td></tr>
        </tbody>
      </table>
      <div class="callout">
        <div class="callout-title">Der entscheidende Unterschied</div>
        <p>Im eigenständigen Chat muss man Daten manuell einfügen. Das Add-in liest den geöffneten Dokumentenkontext automatisch — Claude weiß, welche Zellen markiert sind und kann direkt eingreifen.</p>
      </div>

      <h3>2. Einrichtung des Claude Add-ins</h3>
      <ul>
        <li><strong>Installation:</strong> Das Add-in wird im Microsoft AppSource Store gesucht (Suchbegriff: „Claude") und mit einem Klick installiert.</li>
        <li><strong>Voraussetzung:</strong> Ein aktives <strong>Claude Pro- oder Team-Abo</strong> ist erforderlich — die kostenlose Version unterstützt das Add-in nicht.</li>
        <li><strong>Authentifizierung:</strong> Beim ersten Start wird die Anthropic-Anmeldung einmalig verknüpft. Das Add-in erscheint danach als Seitenleiste in Excel und PowerPoint.</li>
        <li><strong>Kein IT-Aufwand:</strong> Da es sich um ein Standard-Office-Add-in handelt, ist keine lokale Installation durch die IT-Abteilung nötig.</li>
      </ul>

      <h3>3. Claude in Excel — Kernfunktionen</h3>
      <h4>Formeln per Sprache generieren</h4>
      <p>Statt Syntax nachzuschlagen, reicht eine natürlichsprachliche Beschreibung: <em>„Gib mir die Summe aller Zellen in Spalte C, bei denen Spalte A ‚Berlin' enthält"</em> — Claude schreibt die passende SUMIF-Formel und setzt sie direkt in die Zielzelle.</p>

      <h4>Daten transformieren und bereinigen</h4>
      <p>Claude kann markierte Bereiche strukturieren: Duplikate entfernen, Spalten aufteilen, fehlende Werte ergänzen oder Datumsspalten vereinheitlichen — alles per Anweisung im natürlichen Sprachtext.</p>

      <h4>VBA-Makros schreiben</h4>
      <p>Wiederkehrende Aufgaben lassen sich als Makro automatisieren. Claude schreibt den vollständigen VBA-Code auf Basis einer Aufgabenbeschreibung. <strong>Wichtig:</strong> Claude schreibt das Makro, kann es aber nicht selbst ausführen — der Nutzer startet es manuell über den VBA-Editor.</p>

      <h4>Fehler erkennen und korrigieren</h4>
      <p>Klassische Probleme wie <strong>Zirkelbezüge</strong> erkennt Claude auf Anhieb: Es identifiziert, welche Formel den Fehler verursacht, erklärt die Ursache und korrigiert die betroffene Zelle direkt — im Modus <strong>„Accept all edits"</strong> sogar ohne weitere Rückfrage.</p>
      <div class="callout callout-success">
        <div class="callout-title">Accept all edits — Modus</div>
        <p>Wenn dieser Modus aktiviert ist, übernimmt Claude Korrekturen, Formeln und Datentransformationen sofort in die Zellen — ohne jede Zwischenfrage. Deaktiviert man ihn, schlägt Claude Änderungen vor, die der Nutzer einzeln freigeben muss.</p>
      </div>

      <h3>4. Claude in PowerPoint — Präsentationen automatisieren</h3>
      <ul>
        <li><strong>Folien aus Daten generieren:</strong> Eine Tabelle (z.&thinsp;B. Quartalszahlen) oder eine kurze Gliederung reichen, um Claude vollständige Folien mit Überschriften, Bullet-Points und passenden Zahlen erstellen zu lassen.</li>
        <li><strong>Sprechernotizen:</strong> Claude ergänzt zu jeder Folie automatisch prägnante Sprechernotizen, die den Vortragenden durch die Kernaussagen führen.</li>
        <li><strong>Inhalte überarbeiten:</strong> Texte kürzen, umformulieren oder in ein konsistentes Corporate-Design-Sprachmuster bringen — direkt im Seitenbereich.</li>
        <li><strong>Daten zu Charts:</strong> Aus einer eingefügten Datentabelle schlägt Claude geeignete Diagrammtypen vor und erstellt die Visualisierung als Folieninhalt.</li>
      </ul>

      <h3>5. Workflows und Datensicherheit</h3>
      <p>Das Add-in überträgt <strong>nur den markierten oder aktiven Zellbereich</strong> an Claudes Server — nicht die gesamte Arbeitsmappe. Das reduziert die übermittelten Daten, erfordert jedoch bewusstes Handeln bei vertraulichen Finanzmodellen.</p>
      <div class="callout callout-warn">
        <div class="callout-title">Datenschutz-Pflicht bei IEG</div>
        <p>Auch im Add-in gilt: Keine echten Mandantendaten, Deal-Konditionen oder nicht-öffentlichen Finanzzahlen eingeben. Für sensible Modelle immer den <strong>IEG Claude Enterprise Account</strong> verwenden, der Datenverarbeitungsverträge und keine Trainingsnutzung der Daten gewährleistet.</p>
      </div>
      <p>Als Best Practice empfiehlt sich, <strong>kritische Werte vorab zu anonymisieren</strong> oder durch Platzhalter zu ersetzen, bevor ein Modell an Claude übergeben wird.</p>

      <h3>6. Grenzen der Integration</h3>
      <ul>
        <li><strong>Keine direkte Makro-Ausführung:</strong> Claude kann VBA-Code schreiben, aber nicht ausführen — das bleibt eine manuelle Aktion.</li>
        <li><strong>Kein Datenbankzugriff:</strong> Das Add-in hat keine Verbindung zu externen Systemen wie SAP, Bloomberg oder SQL-Datenbanken.</li>
        <li><strong>Nur sichtbarer Kontext:</strong> Claude verarbeitet nur markierte oder aktive Inhalte — nicht implizit alle Tabellenblätter im Hintergrund.</li>
        <li><strong>Keine Echtzeit-Synchronisation:</strong> Änderungen werden einmalig angewendet; automatische Aktualisierungen bei sich ändernden Quelldaten erfordern erneute Prompts.</li>
      </ul>
    `,
    quiz: [
      {
        q: 'Was ist der entscheidende Unterschied zwischen dem Claude Add-in und dem eigenständigen Web-Chat beim Arbeiten in Excel?',
        options: [
          'Das Add-in schaltet automatisch auf das leistungsstärkste Modell um, sobald eine Datei geöffnet wird',
          'Das Add-in speichert sämtliche Eingaben ausschließlich lokal ohne Serverübertragung',
          'Das Add-in läuft direkt in Excel und kann den Dokumentenkontext lesen sowie Zellen direkt bearbeiten',
          'Das Add-in ist auf Excel 2019 beschränkt und unterstützt kein Microsoft 365 Abonnement'
        ],
        correct: 2,
        explanation: 'Im Add-in sieht Claude den geöffneten Dokumentenkontext — Zellen, Formeln, Struktur — und kann direkt eingreifen. Der Standalone-Chat kennt nur das, was manuell eingefügt wird.'
      },
      {
        q: 'Was bewirkt der aktivierte Modus „Accept all edits" im Claude Excel-Add-in?',
        options: [
          'Claude übernimmt Formelkorrekturen und Datenänderungen sofort in die Zellen, ohne erneut nachzufragen',
          'Claude speichert die gesamte Arbeitsmappe und lädt sie automatisch auf OneDrive hoch',
          'Claude akzeptiert jede Nutzereingabe ohne Inhaltsmoderation oder Sicherheitsfilter',
          'Claude importiert externe Dateien aus Netzlaufwerken und führt sie mit dem aktiven Blatt zusammen'
        ],
        correct: 0,
        explanation: 'Im Modus „Accept all edits" werden Korrekturen, Formeln und Transformationen sofort in die Zellen übernommen — ohne Zwischenfrage oder Einzelfreigabe.'
      },
      {
        q: 'Welche Daten überträgt das Claude Excel-Add-in an Anthropics Server, wenn eine Formel generiert wird?',
        options: [
          'Die gesamte Arbeitsmappe inklusive aller Tabellenblätter, ausgeblendeter Tabs und eingebetteter Makros',
          'Alle in Microsoft 365 geöffneten Dateien — auch Word- und PowerPoint-Dokumente im Hintergrund',
          'Alle Kalendereinträge und E-Mails, die mit dem Outlook-Konto des aktuellen Nutzers verknüpft sind',
          'Nur den markierten Zellbereich oder den aktiv bearbeiteten Inhalt der aktuellen Ansicht'
        ],
        correct: 3,
        explanation: 'Das Add-in überträgt nur den selektierten oder aktiven Bereich an Claude — nicht die gesamte Arbeitsmappe. Das reduziert die Datenmenge, erfordert aber bewusstes Handeln bei sensiblen Modellen.'
      },
      {
        q: 'Was ist eine zentrale Einschränkung beim Einsatz von Claude für VBA-Makros in Excel?',
        options: [
          'Claude verweigert generell das Schreiben von VBA-Code und verweist stattdessen auf Power Query',
          'Claude schreibt den Makro-Code, kann ihn aber nicht selbst ausführen — der Nutzer muss ihn manuell starten',
          'Von Claude generierte VBA-Makros sind aus Sicherheitsgründen auf reine Lesezugriffe beschränkt',
          'Claude unterstützt VBA ausschließlich in älteren Excel-Versionen vor Microsoft 365'
        ],
        correct: 1,
        explanation: 'Claude erstellt den vollständigen VBA-Code auf Basis einer Aufgabenbeschreibung, kann ihn jedoch nicht selbst ausführen — das Starten über den VBA-Editor bleibt eine manuelle Aktion.'
      },
      {
        q: 'Was wird bei der Einrichtung des Claude Add-ins im Microsoft AppSource Store vorausgesetzt?',
        options: [
          'Ein kostenloses Anthropic-Konto reicht aus, da Office-Integration Teil des Basis-Tiers ist',
          'Eine Enterprise-Lizenz von Microsoft, die Premium-KI-Funktionen als Standard enthält',
          'Ein aktives Claude Pro- oder Team-Abonnement sowie das über AppSource installierte Add-in',
          'Ein spezieller Entwickler-API-Key, der individuell beim Anthropic-Support angefordert wird'
        ],
        correct: 2,
        explanation: 'Das Add-in erfordert ein aktives Claude Pro- oder Team-Abo. Es wird über den Microsoft AppSource Store installiert — ohne lokalen IT-Aufwand.'
      },
      {
        q: 'Welchen Hauptvorteil bietet das Claude PowerPoint-Add-in im Präsentationsworkflow?',
        options: [
          'Claude erstellt vollständige Folien und Sprechernotizen direkt aus Textzusammenfassungen oder Datentabellen',
          'Claude komprimiert automatisch alle Bilder in der Präsentation für schnellere Ladezeiten',
          'Claude exportiert fertige Präsentationen direkt als PDF und versendet sie per Outlook-Konnektor',
          'Claude scannt alle vorhandenen Folien und erstellt automatisch eine Inhaltsfolie am Anfang'
        ],
        correct: 0,
        explanation: 'Das PowerPoint-Add-in kann aus einer Datentabelle oder Gliederung vollständige Folien mit Inhalten und Sprechernotizen erzeugen — direkt im Seitenbereich der Anwendung.'
      },
      {
        q: 'Wie reagiert Claude bei einem erkannten Zirkelbezug-Fehler in einer Excel-Tabelle?',
        options: [
          'Claude löscht die betroffenen Zeilen und baut die Berechnung vollständig von Grund auf neu',
          'Claude speichert die Datei unter einem neuen Namen und markiert den Fehler mit einem roten Kommentarfeld',
          'Claude wandelt die Formel in einen statischen Wert um und verhindert so jede weitere Neuberechnung',
          'Claude identifiziert die fehlerauslösende Formel, erklärt die Ursache und korrigiert die Zelle direkt'
        ],
        correct: 3,
        explanation: 'Claude erkennt Zirkelbezüge auf Anhieb: Es identifiziert die Problemformel, erklärt warum der Fehler entstand und korrigiert sie direkt in der Zelle — im „Accept all edits"-Modus ohne Rückfrage.'
      },
      {
        q: 'Warum ist das Add-in dem eigenständigen Chat bei komplexen Datentransformationen überlegen?',
        options: [
          'Das Add-in speichert Eingaben ausschließlich lokal und sendet keinerlei Daten an externe Server',
          'Claude sieht die Tabellenstruktur direkt und kann Spalten, Zeilen und Zelladressen gezielt referenzieren',
          'Das Add-in aktiviert exklusiv das Opus-Modell, das im Standalone-Chat nicht verfügbar ist',
          'Das Add-in ersetzt Excels eingebaute Formelbibliothek durch eine eigene Berechnungsengine'
        ],
        correct: 1,
        explanation: 'Im Add-in kennt Claude die tatsächliche Tabellenstruktur — Spaltenköpfe, Zelladressen, Formeln. Das ermöglicht präzise Transformationen, die im Chat ohne diesen Kontext nicht möglich wären.'
      },
      {
        q: 'Welche Einschränkung gilt besonders beim Einsatz des Add-ins für vertrauliche Finanzmodelle?',
        options: [
          'Claude verweigert die Analyse von Tabellenblättern mit Werten über zehn Millionen Euro',
          'Finanzformeln sind aus Haftungsgründen durch Claude nicht editierbar und werden übersprungen',
          'Die übermittelten Zellbereiche landen auf Anthropic-Servern — vertrauliche Daten müssen vorab anonymisiert werden',
          'Claude kann keine Währungssymbole verarbeiten und erfordert Zahlen im reinen Zahlenformat'
        ],
        correct: 2,
        explanation: 'Das Add-in überträgt markierte Bereiche an Claude-Server. Bei sensiblen Finanzdaten gilt daher: vorab anonymisieren oder den IEG Enterprise Account nutzen, der Datenverarbeitungsgarantien bietet.'
      },
      {
        q: 'Welcher Anwendungsfall zeigt den stärksten Wettbewerbsvorteil des Office Add-ins gegenüber Copy-Paste in den Chat?',
        options: [
          'Unstrukturierte Transaktionsdaten direkt in Excel bereinigen, ohne Daten manuell kopieren zu müssen',
          'Die Excel-Formelleiste vollständig durch Claudes natürlichsprachliche Suche ersetzen',
          'Excel-Daten kontinuierlich mit Claudes Gedächtnis synchronisieren für sitzungsübergreifenden Abruf',
          'Excel-Tabellenblätter im PowerPoint-Viewer in interaktive Dashboards umwandeln'
        ],
        correct: 0,
        explanation: 'Das Add-in liest den Dateikontext direkt — unstrukturierte Daten lassen sich direkt im Sheet bereinigen und transformieren, ohne umständliches Kopieren in den Chat und zurück.'
      }
    ]
  }
];

// Abschlussprüfung — 40 Fragen
const FINAL_EXAM = [
  // Modul 00 — Ökosystem & Grundkurs
  // Q1 correct: A
  { q: 'Warum sollte für jedes neue Thema ein neuer Chat gestartet werden?', options: ['Themenmischung im selben Chat verwirrt das Modell und senkt die Ergebnisqualität deutlich', 'Das Datenlimit pro Chat ist auf 10 Nachrichten begrenzt und bricht danach automatisch ab', 'Claude verliert bei langen Chats den Zugriff auf Websuche und Dateianalyse-Funktion', 'Neue Chats werden schneller verarbeitet, da weniger Serverkapazität benötigt wird'], correct: 0, explanation: 'Chat-Disziplin: Ein Thema pro Chat. Mehrere Themen in einem Chat reduzieren die Antwortqualität erheblich.' },
  // Q2 correct: C — Modul 07 Office Add-in
  { q: 'Welchen entscheidenden Vorteil bietet das Claude Add-in gegenüber dem eigenständigen Chat beim Arbeiten in Excel?', options: ['Das Add-in schaltet automatisch auf das leistungsstärkste Modell um, sobald eine Tabelle geöffnet wird', 'Das Add-in speichert alle Eingaben ausschließlich lokal und sendet keinerlei Daten an externe Server', 'Claude sieht die Tabellenstruktur direkt und kann Zellinhalte kontextbezogen lesen und bearbeiten', 'Das Add-in ersetzt Excels eingebaute Formelbibliothek vollständig durch eine eigene Berechnungsengine'], correct: 2, explanation: 'Im Add-in kennt Claude die geöffnete Datei — Spaltenköpfe, Zelladressen, Formeln. Im Standalone-Chat ist nur das verfügbar, was manuell eingefügt wird.' },
  // Q3 correct: D — Modul 07 Accept all edits
  { q: 'Was versteht man unter dem Modus „Accept all edits" im Claude Excel-Add-in?', options: ['Claude fragt vor jeder einzelnen Zelländerung explizit nach Bestätigung und wartet auf Freigabe', 'Claude speichert die gesamte Arbeitsmappe automatisch und lädt sie parallel auf OneDrive hoch', 'Claude akzeptiert jede Nutzereingabe ohne Inhaltsmoderation oder Sicherheitsfilter', 'Claude wendet Formelkorrekturen und Datenänderungen direkt in den Zellen an, ohne erneut nachzufragen'], correct: 3, explanation: 'Im „Accept all edits"-Modus übernimmt Claude Korrekturen, Formeln und Transformationen sofort — ohne Zwischenfrage. Deaktiviert man ihn, werden Änderungen zur Einzelfreigabe vorgeschlagen.' },
  // Q4 correct: D
  { q: 'Welche Datenschutz-Einstellung muss bei IEG vor der ersten Nutzung verbindlich deaktiviert werden?', options: ['Der Inkognitomodus, damit keine Sitzungen dauerhaft in der Cloud gespeichert werden', 'Die Websuche-Funktion, damit externe Daten nicht in Claudes Training einfließen', 'Die globalen Präferenzen, um ungewollte Verhaltensanpassungen dauerhaft zu verhindern', 'Die Option „hilft dabei Claude zu verbessern", damit Eingaben nicht zum Modelltraining genutzt werden'], correct: 3, explanation: 'Die Trainings-Option muss einmalig deaktiviert werden, damit eigene Eingaben nicht zum Modelltraining verwendet werden.' },
  // Q5 correct: B — Modul 07 VBA limitation
  { q: 'Welche Einschränkung gilt beim Einsatz von Claude für VBA-Makros in Excel?', options: ['Claude verweigert generell das Schreiben von VBA-Code und verweist stattdessen auf Power Query', 'Claude schreibt den Makro-Code vollständig, kann ihn aber nicht selbst ausführen — der Nutzer startet ihn manuell', 'Von Claude generierte VBA-Makros sind aus Sicherheitsgründen auf reine Lesezugriffe beschränkt', 'Claude unterstützt VBA ausschließlich für ältere Excel-Versionen vor Microsoft 365'], correct: 1, explanation: 'Claude erstellt VBA-Code auf Basis einer Aufgabenbeschreibung, kann ihn jedoch nicht selbst ausführen. Das Starten über den VBA-Editor bleibt eine manuelle Aktion des Nutzers.' },
  // Q6 correct: B
  { q: 'Welche Funktion ermöglicht Claude, hunderte Quellen in Sekunden zu durchsuchen?', options: ['Der erweiterte Nachdenkenmodus, der Claudes interne Wissensbasis tiefergehend aktiviert', 'Die Websuche über das Plus-Symbol, die aktuelle Daten mit belegten Quellenlinks liefert', 'Ein vorab eingerichteter Konnektor zu Google Scholar für wissenschaftliche Fachdatenbanken', 'Das Opus-Modell, das bei aktivierter Pro-Version automatisch Quellen eigenständig recherchiert'], correct: 1, explanation: 'Die Websuche (Plus-Symbol) erlaubt Claude, aktuelle Daten und Quellen live zu recherchieren.' },
  // Q7 correct: C
  { q: 'Warum empfiehlt sich der erweiterte Nachdenkenmodus (Stoppuhr) bei der Analyse großer PDFs?', options: ['Er erhöht die Upload-Geschwindigkeit großer Dateien durch serverseitige Datenkomprimierung', 'Er aktiviert automatisch die Websuche, um fehlende Informationen im Dokument zu ergänzen', 'Er gibt Claude mehr Rechenzeit, um die Datei gründlicher einzulesen und präziser zu antworten', 'Er wandelt PDFs intern in strukturierte Excel-Tabellen um, bevor Claude sie analysiert'], correct: 2, explanation: 'Der erweiterte Nachdenkenmodus erhöht die Analysetiefe — besonders wichtig bei komplexen oder langen Dokumenten.' },
  // Q8 correct: D
  { q: 'Was sind die sechs Elemente der idealen Prompt-Struktur?', options: ['Titel, Text, Format, Länge, Sprache und Modellauswahl für konsistente Ergebnisse', 'Frage, Kontext, Rollen, Ausgabe, Validierung und Nachbearbeitung als Qualitätskette', 'Persona, Ziel, Ton, Beispiel, Format und Constraint nach dem PETEF-Framework', 'Aufgabe, Kontext, Hintergrunddaten, Anweisungen, Beispiele und Erinnerungen'], correct: 3, explanation: 'Die sechs Prompt-Elemente: Aufgabe, Kontext, Hintergrunddaten, Anweisungen, Beispiele, Erinnerungen.' },

  // Modul 01 — Grundkurs & Arbeitsfunktionen
  // Q9 correct: A
  { q: 'Was unterscheidet globale Präferenzen von einem System Prompt in einem Project?', options: ['Globale Präferenzen gelten automatisch in jedem neuen Chat; System Prompts nur im jeweiligen Project', 'System Prompts werden schneller verarbeitet, weil Claude sie beim Start zwischenspeichert', 'Globale Präferenzen sind kostenpflichtig; System Prompts sind in der Pro-Version kostenlos', 'Beide Instrumente sind technisch identisch — der Name unterscheidet sich nur je nach Nutzungskontext'], correct: 0, explanation: 'Globale Präferenzen = dauerhaft für jeden neuen Chat aktiv. System Prompts gelten nur für den definierten Kontext.' },
  // Q10 correct: B
  { q: 'Was versteht man unter "Deep Research" in Claude?', options: ['Eine Funktion zum Durchsuchen aller bisherigen Chats und gespeicherten Dokumente im Account', 'Ein Modus, in dem Claude eigenständig über mehrere Schritte recherchiert und einen Bericht erstellt', 'Das parallele Öffnen mehrerer Recherche-Chats, die Claude dann automatisch zusammenfasst', 'Eine Datenbankabfrage-Funktion für Fachdatenbanken wie Bloomberg oder Statista'], correct: 1, explanation: 'Deep Research = Claude arbeitet autonom über mehrere Rechercheschritte und liefert einen strukturierten Abschlussbericht.' },
  // Q11 correct: C
  { q: 'Für welche Excel-bezogenen Aufgaben eignet sich Claude am besten?', options: ['Direktes Ausführen von Makros und automatisches Versenden von Excel-Berichten per E-Mail', 'Konvertierung von Excel-Dateien in andere Formate wie PDF oder Google Sheets', 'Formeln erklären, VBA-Makros schreiben und Datentransformationen konzipieren', 'Echtzeit-Synchronisation von Excel mit externen Systemen wie SAP oder Oracle'], correct: 2, explanation: 'Claude kann Formeln erklären, VBA schreiben und Transformationslogik planen — die Ausführung bleibt in Excel.' },
  // Q12 correct: D
  { q: 'Was ist ein Konnektor in Claude?', options: ['Ein physisches Schnittstellenmodul für die Claude-Desktop-App auf Windows-Systemen', 'Eine technische Verbindung zwischen zwei getrennten Claude-Chats für gemeinsamen Kontext', 'Ein speziell trainiertes Haiku-Submodell für Verbindungsaufgaben in Enterprise-Accounts', 'Eine Anbindung an externe Dienste wie Gmail, Google Drive oder Slack für direkte Integration'], correct: 3, explanation: 'Konnektoren verbinden Claude mit externen Diensten — z.B. kann Claude so direkt auf Google Drive oder Kalender zugreifen.' },

  // Modul 02 — Projects & Memory
  // Q13 correct: A
  { q: 'Was ist der Hauptzweck von "Projects" in Claude?', options: ['Kontext, Dokumente und Anweisungen dauerhaft für einen bestimmten Themenkomplex zu speichern', 'Mehrere Nutzer gleichzeitig zu verwalten und gemeinsam auf denselben Chat zuzugreifen', 'Chats thematisch zu archivieren, damit ältere Gespräche einfacher wiedergefunden werden können', 'Das Modell innerhalb eines Projects automatisch auf Opus zu schalten für maximale Qualität'], correct: 0, explanation: 'Projects = ausgelagertes Gehirn mit dauerhaftem Kontext, Dokumenten und Anweisungen für spezifische Themen.' },
  // Q14 correct: B
  { q: 'Wie viele Zeichen kann ein System Prompt in einem Claude Project maximal enthalten?', options: ['2.000 Zeichen — entspricht etwa einer Seite mit grundlegenden Rollenanweisungen', '10.000 Zeichen — ausreichend für detaillierte Rollenanweisungen und umfangreiche Kontextinfos', '500 Zeichen — um Claudes Verarbeitungsgeschwindigkeit im Project zu erhalten', '2.000 Wörter — gemessen in Wörtern statt Zeichen, da Zeichenanzahl sprachabhängig variiert'], correct: 1, explanation: 'System Prompts in Projects können bis zu 10.000 Zeichen enthalten — genug für detaillierte Rollenanweisungen.' },
  // Q15 correct: C
  { q: 'Was unterscheidet aktives Erinnern von passiver Erinnerung (Memory) in Claude?', options: ['Es gibt keinen technischen Unterschied — beide Begriffe beschreiben dasselbe Feature im Account', 'Passive Erinnerung ist präziser, weil sie vom Nutzer manuell kuratiert und validiert wird', 'Aktives Erinnern speichert Informationen dauerhaft über Chats hinaus; passiv gilt nur im aktuellen Chat', 'Aktives Erinnern erfordert ein separates Upgrade und ist in der Gratisversion nicht verfügbar'], correct: 2, explanation: 'Aktives Erinnern (Memory) speichert Informationen chatübergreifend. Passiv = nur im aktuellen Kontext verfügbar.' },
  // Q16 correct: D
  { q: 'Welchen Vorteil bietet ein System Prompt im Project gegenüber dem Wiederholen von Anweisungen in jedem Chat?', options: ['System Prompts können im Gegensatz zu normalen Prompts direkt Dateien laden und verarbeiten', 'Projects mit System Prompts werden von Claude mit höherer Priorität als normale Chats behandelt', 'Der System Prompt reduziert Token-Kosten, weil Claude dadurch kürzere Antworten generiert', 'Er ist automatisch in jedem neuen Chat des Projects aktiv — kein erneutes Briefing notwendig'], correct: 3, explanation: 'Ein System Prompt im Project gilt automatisch für alle Chats dieses Projekts — spart Zeit und sichert Konsistenz.' },
  // Q17 correct: A
  { q: 'Warum ist es sinnvoll, projektbezogene Dokumente direkt in ein Claude Project hochzuladen?', options: ['Sie stehen in jedem Projekt-Chat als Kontext bereit, ohne jedes Mal neu hochgeladen zu werden', 'Claude verarbeitet hochgeladene Dokumente im Project dreimal schneller als in normalen Chats', 'Dokumente werden automatisch in strukturierte Wissenseinträge für das Modell umgewandelt', 'Nur in Projects hochgeladene Dateien können mit dem erweiterten Nachdenkenmodus kombiniert werden'], correct: 0, explanation: 'Projektdokumente sind dauerhaft verfügbar — Claude greift automatisch darauf zu, ohne erneutes Hochladen.' },

  // Modul 03 — KI-Ethik & Sicherheit
  // Q18 correct: B
  { q: 'Was beschreibt die "Lethal Trifecta" im KI-Sicherheitskontext?', options: ['Drei KI-Modelle, die gleichzeitig genutzt werden und sich gegenseitig in Sicherheit beeinflussen', 'KI hat Zugriff auf private Daten, liest externe Inhalte und kann Daten nach außen senden', 'Das gleichzeitige Aktivieren von Websuche, Dateiupload und Konnektor in einem Chat', 'Drei häufige Fehler: schwaches Passwort, fehlendes 2FA und kein Inkognitomodus'], correct: 1, explanation: 'Lethal Trifecta: Private Daten + externe Inhalte + ausgehende Verbindungen — Kombination ermöglicht KI-Hijacking durch Angreifer.' },
  // Q19 correct: C
  { q: 'Wem gehört geistiges Eigentum, das mit dem firmeneigenen KI-Tool erstellt wird?', options: ['Dem Nutzer, da die kreative Prompt-Formulierung urheberrechtlich geschützt ist', 'Dem KI-Anbieter Anthropic, da Claude die wesentliche kreative Leistung erbringt', 'Dem Arbeitgeber, da der Firmenzugang genutzt wurde — rechtlicher Anspruch beim Unternehmen', 'Niemandem — international gelten KI-generierte Outputs als gemeinfrei ohne Schutzanspruch'], correct: 2, explanation: 'Nutzung des firmeneigenen KI-Abos = Arbeitgeber hat rechtlichen Anspruch auf das entstandene geistige Eigentum.' },
  // Q20 correct: D
  { q: 'Wie regelmäßig sollten aktive Konnektoren überprüft und nicht genutzte getrennt werden?', options: ['Einmalig bei der Ersteinrichtung genügt, solange keine verdächtigen Aktivitäten auffallen', 'Einmal jährlich im Rahmen des regulären IT-Security-Audits der Unternehmens-IT', 'Nur bei konkretem Verdacht auf Missbrauch oder nach externen Sicherheitswarnungen', 'Monatlich — in den Einstellungen prüfen und alles trennen, was nicht aktiv benötigt wird'], correct: 3, explanation: 'Monatliche Überprüfung der Konnektoren: Einstellungen öffnen und alles trennen, was nicht aktiv genutzt wird.' },
  // Q21 correct: A
  { q: 'Warum darf die Firmen-Gmail nicht mit einem persönlichen Claude-Account verbunden werden?', options: ['Persönliche Accounts ohne Enterprise-Vertrag bieten keine Datenschutzgarantien für Firmendaten', 'Gmail-Verbindungen zu Claude sind technisch grundsätzlich nicht möglich — nur Workspace funktioniert', 'Persönliche Accounts sind zu langsam, um das Nachrichtenvolumen einer Firmenmailbox zu verarbeiten', 'Firmenmails sind AES-256-verschlüsselt und können von Claude technisch nicht entschlüsselt werden'], correct: 0, explanation: 'Persönliche Accounts ohne Enterprise-Vertrag bieten keine Datenschutzgarantien für Firmendaten.' },
  // Q22 correct: B
  { q: 'Was ist "Prompt Injection" im KI-Sicherheitskontext?', options: ['Eine Prompt-Technik, bei der mehrere Anweisungen verschachtelt und kombiniert werden', 'Ein Angriff, bei dem bösartige Anweisungen in externe Inhalte eingebettet sind, die die KI ausführt', 'Das Einfügen von Variablen wie {Name} oder {Datum} in vorgefertigte Prompt-Vorlagen', 'Eine Methode zur Prompt-Optimierung durch automatisches Testen mehrerer Formulierungen'], correct: 1, explanation: 'Prompt Injection: Angreifer verstecken Befehle in Webseiten oder Dokumenten — die KI führt diese aus, wenn sie die Inhalte liest.' },
  // Q23 correct: C
  { q: 'Was sollte man sicherstellen, bevor man sensible Unternehmensdaten in Claude eingibt?', options: ['Den Inkognitomodus aktivieren und den erweiterten Nachdenkenmodus für sichere Verarbeitung einschalten', 'Das Opus-Modell wählen, da es im Gegensatz zu Sonnet keine Eingaben für Training speichert', 'Den IEG Enterprise Account nutzen und Daten wenn nötig anonymisieren, bevor sie eingegeben werden', 'Websuche und alle Konnektoren deaktivieren, damit keine Daten nach außen übertragen werden'], correct: 2, explanation: 'Sensible Daten gehören in den IEG Enterprise Account mit Vertrag und Sicherheitsgarantien — nicht in persönliche Accounts.' },

  // Modul 04 — Skills & Automatisierung
  // Q24 correct: D
  { q: 'Was ist ein Claude Skill?', options: ['Eine der Sprachen, die Claude neben Deutsch nativ ohne Qualitätsverlust verarbeiten kann', 'Ein externes Plugin eines zertifizierten Drittanbieters, das über den Claude Marketplace installiert wird', 'Ein Sicherheitsprotokoll, das Claude vor unberechtigtem Zugriff in Enterprise-Umgebungen schützt', 'Eine gespeicherte Arbeitsanweisung, die komplexe Workflows reproduzierbar und automatisierbar macht'], correct: 3, explanation: 'Skills speichern Workflows dauerhaft — ein Prompt löst einen ganzen definierten Prozess aus.' },
  // Q25 correct: A
  { q: 'Was ist der Unterschied zwischen einem Skill und einem Plugin in Claude?', options: ['Skills sind einzelne gespeicherte Fähigkeiten; Plugins bündeln mehrere Funktionen oder Dienste', 'Plugins sind kostenlos in der Gratisversion enthalten; Skills erfordern ein Pro-Abonnement', 'Skills funktionieren offline ohne Internetverbindung; Plugins benötigen einen aktiven Server', 'Es gibt keinen funktionalen Unterschied — beide Begriffe werden synonym für dasselbe Feature genutzt'], correct: 0, explanation: 'Skill = einzelne gespeicherte Fähigkeit. Plugin = Bündel aus mehreren Funktionen oder Diensten.' },
  // Q26 correct: B
  { q: 'Wie erstellt man einen neuen Skill am effizientesten?', options: ['Die Anweisungen manuell als YAML-Datei schreiben und über die Einstellungen importieren', 'Die Aufgabe zunächst im Chat lösen und prüfen, dann Claude anweisen, daraus einen Skill zu erstellen', 'Warten bis Claude nach 10 ähnlichen Chats automatisch einen Skill-Vorschlag generiert', 'Einen vorgefertigten Skill aus dem Claude Marketplace kaufen und an die eigenen Bedürfnisse anpassen'], correct: 1, explanation: 'Best Practice: Erst im Chat lösen und das Ergebnis prüfen, dann Claude bitten, den Workflow als Skill zu speichern.' },
  // Q27 correct: C
  { q: 'Was macht einen Skill im Team-Kontext besonders wertvoll?', options: ['Er ist an ein spezifisches Gerät gebunden und kann nicht versehentlich auf Fremdgeräten genutzt werden', 'Er läuft vollautomatisch im Hintergrund ohne Nutzer-Eingabe, solange das Gerät eingeschaltet ist', 'Er kann in jedem Chat genutzt und mit Kollegen geteilt werden, wodurch Expertenwissen skaliert', 'Er funktioniert ausschließlich mit dem Opus-Modell, das die nötige Rechenleistung für Skills bereitstellt'], correct: 2, explanation: 'Skills sind chatübergreifend verfügbar und können im Team geteilt werden — so wird Expertenwissen skalierbar.' },
  // Q28 correct: A — Modul 07 data privacy
  { q: 'Welcher Datenschutzaspekt muss beim Einsatz des Claude Excel-Add-ins für Finanzmodelle beachtet werden?', options: ['Die markierten Zellbereiche werden an Anthropic-Server übertragen — der Umgang mit sensiblen Daten muss bewusst erfolgen', 'Das Add-in speichert alle Zellinhalte dauerhaft im Claude-Gedächtnis und gibt sie in anderen Chats wieder aus', 'Alle im Hintergrund geöffneten Excel-Dateien werden automatisch mitübertragen, nicht nur die aktive Auswahl', 'Claude kann auf Basis der Tabellendaten selbstständig externe Datenbankabfragen starten und Daten nachladen'], correct: 0, explanation: 'Das Add-in überträgt markierte Bereiche an Claude-Server. Bei sensiblen Finanzdaten gilt daher: vorab anonymisieren oder den IEG Enterprise Account nutzen, der Datenverarbeitungsgarantien bietet.' },

  // Modul 05 — Finance Automation
  // Q29 correct: A
  { q: 'Was ist der Ablauf des "Super Skill" in der Finanzautomatisierung?', options: ['Data Cleaning → saubere Excel-Ausgabe → interaktives Dashboard → PowerPoint-Präsentation', 'PowerPoint-Entwurf → Dashboard-Design → Datenbereinigung → Excel-Export als letzter Schritt', 'Excel-Import → PDF-Zusammenfassung → PowerPoint-Folien → interaktives Web-Dashboard', 'Dashboard-Entwurf → Excel-Validierung → Data Cleaning → PowerPoint als Grundlage'], correct: 0, explanation: 'Super Skill-Kette: 1. Data Cleaning → 2. Saubere Excel → 3. Dashboard → 4. PowerPoint — alles mit einem Prompt.' },
  // Q30 correct: B
  { q: 'Was ist der Hauptvorteil des Dynamic Dashboard Builders in der Finanzautomatisierung?', options: ['Er erstellt vorgefertigte statische PDF-Berichte mit professionellem Corporate Design für Kunden', 'Er erzeugt interaktive HTML-Dashboards mit Drill-Down-Funktionalität — Klick zeigt Detailberichte', 'Er lädt Echtzeitdaten direkt aus SAP, Bloomberg oder anderen ERP-Systemen via Konnektoren', 'Er sendet fertige Berichte automatisch per Outlook-Konnektor an vordefinierte Verteiler'], correct: 1, explanation: 'Der Dashboard Builder erstellt interaktives HTML — Klick auf Namen zeigt alle Detailberichte (Drill-Down).' },
  // Q31 correct: C
  { q: 'Warum wird ein separater Branding-Skill erstellt?', options: ['Weil Claude ohne gespeichertes Branding grundsätzlich keine formatierten Ausgaben generieren kann', 'Weil Unternehmensdesigns gesetzlich als Betriebsgeheimnisse registriert werden müssen', 'Damit alle Ausgaben automatisch das Corporate Design tragen — Farben, Stile und Regeln zentral gespeichert', 'Um das Claude-Interface für alle Nutzer im Unternehmen farblich und visuell anzupassen'], correct: 2, explanation: 'Der Branding-Skill hinterlegt Farben, Stile und Designregeln — jede Ausgabe sieht automatisch professionell und einheitlich aus.' },
  // Q32 correct: C — Modul 07 PowerPoint Add-in
  { q: 'Was ist eine typische Stärke des Claude PowerPoint-Add-ins im Präsentationsworkflow?', options: ['Claude komprimiert sämtliche Bilder in der Präsentation automatisch für schnellere Ladezeiten', 'Claude exportiert fertige Präsentationen direkt als PDF und versendet sie per Outlook-Konnektor', 'Claude erstellt vollständige Folien inklusive Sprechernotizen aus Textzusammenfassungen oder Datentabellen', 'Claude scannt alle vorhandenen Folien und generiert automatisch eine strukturierte Inhaltsfolie am Anfang'], correct: 2, explanation: 'Das PowerPoint-Add-in erzeugt aus einer Gliederung oder Datentabelle vollständige Folien mit Inhalten und Sprechernotizen — direkt im Seitenbereich ohne Copy-Paste.' },
  // Q33 correct: A — modular skills
  { q: 'Welchen Vorteil bietet der modulare Skill-Ansatz (mehrere Einzelskills statt ein großer)?', options: ['Modulare Skills können unabhängig aktualisiert, kombiniert und in verschiedenen Workflows wiederverwendet werden', 'Ein einzelner großer Skill ist immer zuverlässiger, weil weniger Übergabepunkte entstehen', 'Modulare Skills laufen ausschließlich auf dem Opus-Modell für maximale Prozessstabilität', 'Es gibt keinen qualitativen Unterschied — Modularität ist nur ein Stilmerkmal ohne Funktionsvorteil'], correct: 0, explanation: 'Modularität: Jeden Skill einzeln verbessern, frei kombinieren, in verschiedenen Kontexten einsetzen.' },

  // Modul 06 — Claude Cowork
  // Q34 correct: B
  { q: 'Wie unterscheidet sich Claude Cowork grundlegend von einem normalen Chatbot?', options: ['Cowork beantwortet dieselben Fragen lediglich schneller, handelt dabei aber nicht eigenständig', 'Cowork ist ein Agent, der selbstständig Dateien öffnet, umbenennt, verschiebt und Programme steuert', 'Cowork ist eine reine Cloud-Funktion und hat bewusst keinen Zugriff auf lokale Dateien', 'Cowork ist ein eigenes Sprachmodell ohne jede Verbindung zum eigentlichen Claude-Modell'], correct: 1, explanation: 'Cowork ist ein KI-Agent: Das Modell ist das Gehirn, Cowork die Hände, die Dateien und Programme aktiv steuern.' },
  // Q35 correct: A
  { q: 'Welche Voraussetzung gilt für die Nutzung von Claude Cowork?', options: ['Die Claude Desktop-App für Mac oder Windows in Kombination mit einem aktiven Pro-Abo', 'Ein kostenloses Konto genügt, sofern man es im mobilen Browser des Smartphones öffnet', 'Ein reiner Team-Vertrag, der ausschließlich über die Web-Oberfläche freigeschaltet wird', 'Eine zusätzliche Server-Installation, die zentral im Unternehmensnetzwerk betrieben wird'], correct: 0, explanation: 'Cowork läuft ausschließlich über die Desktop-App (Mac/Windows) und setzt ein Pro-Abo voraus.' },
  // Q36 correct: D
  { q: 'Warum muss man Cowork explizit einzelne lokale Ordner zuweisen?', options: ['Damit die Verarbeitungsgeschwindigkeit auf besonders großen Festplatten spürbar zunimmt', 'Weil Cowork andernfalls sämtliche Daten automatisch in eine externe Cloud auslagert', 'Um das Limit an verfügbaren Credits des Pro-Abos korrekt abrechnen zu können', 'Sandboxing: Cowork arbeitet nur in freigegebenen Bereichen und schützt so alle übrigen Daten'], correct: 3, explanation: 'Sicherheits-Sandboxing: Cowork darf nur in explizit freigegebenen Ordnern arbeiten — der Rest der privaten Daten bleibt geschützt.' },
  // Q37 correct: C
  { q: 'Wie speichert Cowork Informationen über eine einzelne Sitzung hinaus?', options: ['Gar nicht — sämtliche Informationen gehen nach jedem abgeschlossenen Task verloren', 'In einer zentral verschlüsselten Cloud-Datenbank, die Anthropic dauerhaft bereitstellt', 'In Markdown-Dateien im Projektordner, weil ihm ein eingebautes Sitzungsgedächtnis fehlt', 'Ausschließlich im Arbeitsspeicher, solange der Rechner durchgehend eingeschaltet bleibt'], correct: 2, explanation: 'Cowork hat kein eingebautes Sitzungsgedächtnis und nutzt daher Markdown-Dateien im Projektordner zum dauerhaften Speichern.' },
  // Q38 correct: A
  { q: 'Was gilt für einen laufenden Cowork-Task und die passende Modellwahl?', options: ['Die App muss offen bleiben; für komplexe Analysen eignet sich Opus, fürs Sortieren Sonnet', 'Die App darf geschlossen werden, der Task läuft in der Cloud weiter, das Modell ist dabei egal', 'Der Task läuft ausschließlich mit Haiku, und das Schließen der App hat keinerlei Auswirkung', 'Opus ist für jede noch so einfache Aufgabe zwingend, sonst startet Cowork erst gar nicht'], correct: 0, explanation: 'Session Persistence: Die App muss offen bleiben. Modellwahl: Sonnet fürs Sortieren, Opus für komplexe Analysen (mehr Credits).' },

  // Übergreifende Vertiefungsfragen
  // Q39 correct: C
  { q: 'Was unterscheidet Opus von Sonnet beim Einsatz für komplexe Finanz- oder Marktanalysen?', options: ['Opus ist deutlich langsamer als Sonnet, liefert aber bei denselben Aufgaben identische Qualität', 'Sonnet hat ein größeres Kontextfenster als Opus und kann mehr Dokumente gleichzeitig verarbeiten', 'Opus integriert Quellen und Studien tiefer in die Analyse; Sonnet ist für Routineaufgaben effizienter', 'Es gibt keinen qualitativen Unterschied — die Modellwahl beeinflusst nur Geschwindigkeit, nicht Tiefe'], correct: 2, explanation: 'Opus für tiefgehende Recherche mit Quellen; Sonnet für tägliche Routinearbeit mit guter Balance aus Qualität und Geschwindigkeit.' },
  // Q40 correct: D
  { q: 'Was unterscheidet einen Skill von einem Project-System-Prompt?', options: ['Kein Unterschied — beide Instrumente erfüllen dieselbe Funktion unter verschiedenen Namen', 'Projects sind flexibler als Skills, weil sie Dokumente und Anweisungen miteinander kombinieren', 'Skills erfordern grundsätzlich ein Pro-Abonnement; System Prompts sind in allen Versionen verfügbar', 'Skills sind chatübergreifend in jedem Kontext nutzbar; System Prompts gelten nur im jeweiligen Project'], correct: 3, explanation: 'Skills: universal einsetzbar in jedem Chat. System Prompts: gelten nur innerhalb des definierten Projects.' }
];

const PASS_THRESHOLD = 70;
