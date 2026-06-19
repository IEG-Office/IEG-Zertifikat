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
        q: 'Welches Claude-Modell ist am besten geeignet für eine tiefgehende, mehrstufige Risikoanalyse mit vielen Variablen?',
        options: [
          'Haiku — für maximale Geschwindigkeit',
          'Sonnet — der Allrounder für den Alltag',
          'Opus — das Flaggschiff für komplexe Analysen',
          'Alle Modelle liefern identische Qualität'
        ],
        correct: 2,
        explanation: 'Opus ist das leistungsstärkste Modell und ist für extrem komplexe Analysen und Entscheidungen vorgesehen.'
      },
      {
        q: 'Was ist der Hauptvorteil eines Claude-Projects gegenüber einem normalen Chat?',
        options: [
          'Projects sind schneller als normale Chats',
          'Dokumente und Anweisungen im Project gelten automatisch für jeden neuen Chat — kein erneutes Briefing nötig',
          'Nur in Projects kann man Websuche aktivieren',
          'Projects ermöglichen gleichzeitige Zusammenarbeit mehrerer Nutzer'
        ],
        correct: 1,
        explanation: 'Ein Project ist ein dauerhafter Kontext — einmal eingerichtet, startet jeder neue Chat mit den hinterlegten Dokumenten und Anweisungen.'
      },
      {
        q: 'Du möchtest Claude bitten, dir ein interaktives Balkendiagramm deiner Verkaufszahlen zu erstellen. Was tust du?',
        options: [
          'Einen Programmierkurs buchen und danach den Code hochladen',
          'Die Zahlen einfügen und „Zeig mir das als interaktives Diagramm" sagen — Claude generiert es sofort',
          'Einen separaten Konnektor für Visualisierungen aktivieren',
          'Interaktive Visualisierungen sind in Claude nicht möglich'
        ],
        correct: 1,
        explanation: 'Claude kann direkt im Chat interaktive Visualisierungen erzeugen — kein Plugin, kein Code-Vorwissen nötig.'
      },
      {
        q: 'Was unterscheidet Claude Cowork von normalem Claude im Browser?',
        options: [
          'Cowork ist nur für Programmierer gedacht',
          'Cowork lebt in der Desktop-App, hat Zugriff auf lokale Dateien und kann Aufgaben auch im Hintergrund erledigen',
          'Cowork ist langsamer aber günstiger',
          'Cowork kann nur Text verarbeiten, keine Dateien'
        ],
        correct: 1,
        explanation: 'Claude Cowork arbeitet in der Desktop-App autonom — mit lokalem Dateizugriff und Hintergrundverarbeitung, steuerbar auch per Smartphone.'
      },
      {
        q: 'Was ist der Unterschied zwischen einem Skill und einem Plugin im Claude-Ökosystem?',
        options: [
          'Es gibt keinen Unterschied — beide Begriffe beschreiben dasselbe',
          'Ein Skill ist eine einzelne gespeicherte Fähigkeit; ein Plugin ist eine Sammlung von Skills als Paket',
          'Skills sind kostenlos, Plugins kosten extra',
          'Plugins funktionieren nur mit Opus, Skills mit allen Modellen'
        ],
        correct: 1,
        explanation: 'Skills = einzelne Fähigkeiten, Plugins = gebündelte Sammlungen von Skills — beide erweitern dauerhaft Claudes Werkzeugkasten.'
      },
      {
        q: 'Du willst mit Claude Code eine einfache Webseite für ein Kundenprojekt bauen. Was ist der erste Schritt?',
        options: [
          'HTML und CSS lernen, bevor man Claude nutzen kann',
          'Die gewünschten Funktionen und das Aussehen auf Deutsch beschreiben — Claude erstellt den Code',
          'Einen Entwickler engagieren, der den Prompt formuliert',
          'Claude Code ist nur für bestehende Programmierer gedacht'
        ],
        correct: 1,
        explanation: 'Claude Code benötigt keine Programmierkenntnisse — eine klare Beschreibung auf Deutsch reicht, um vollständige Webseiten oder Apps zu generieren.'
      },
      {
        q: 'Welche drei Typen von Erweiterungen gibt es im Claude-Ökosystem?',
        options: [
          'Add-ons, Webhooks und Skripte',
          'Skills, Plugins und Konnektoren',
          'Makros, Templates und Agenten',
          'Bots, Widgets und APIs'
        ],
        correct: 1,
        explanation: 'Skills (einzelne Fähigkeiten), Plugins (Sammlungen) und Konnektoren (Schnittstellen zu Diensten wie Gmail, Notion) bilden das Erweiterungsökosystem.'
      },
      {
        q: 'Welches Modell aus der Claude-Familie bietet das beste Preis-Leistungs-Verhältnis für den täglichen Einsatz bei Standardaufgaben?',
        options: [
          'Haiku — weil es das günstigste ist',
          'Opus — weil es das Beste ist',
          'Sonnet — der Allrounder mit ausgewogenem Verhältnis aus Geschwindigkeit und Intelligenz',
          'Keines — alle Modelle sind für den täglichen Einsatz ungeeignet'
        ],
        correct: 2,
        explanation: 'Sonnet ist der „Allrounder" — ausgewogenes Verhältnis aus Geschwindigkeit und Intelligenz, ideal für den täglichen Arbeitseinsatz.'
      },
      {
        q: 'Was ist der Zweck von Konnektoren im Claude-Ökosystem?',
        options: [
          'Sie verbinden verschiedene Claude-Modelle miteinander',
          'Sie stellen direkte Schnittstellen zu externen Diensten wie Gmail, Google Calendar oder Notion her',
          'Sie verknüpfen mehrere Projects zu einem Mega-Project',
          'Konnektoren dienen ausschließlich der Datensicherung'
        ],
        correct: 1,
        explanation: 'Konnektoren sind Schnittstellen zu externen Diensten — Claude kann damit E-Mails lesen, Kalender verwalten oder in Notion schreiben.'
      },
      {
        q: 'Warum kann Claude Cowork Aufgaben im Hintergrund erledigen?',
        options: [
          'Weil es ein separater Cloud-Dienst ist, der unabhängig läuft',
          'Weil es in der Desktop-App lebt und direkten Zugriff auf das Betriebssystem und lokale Dateien hat',
          'Weil Claude Cowork eine versteckte Browser-Extension nutzt',
          'Hintergrundverarbeitung ist in Claude Cowork nicht möglich'
        ],
        correct: 1,
        explanation: 'Claude Cowork ist in der Desktop-App integriert und hat daher nativen Zugriff auf lokale Dateien und Prozesse — was autonome Hintergrundarbeit ermöglicht.'
      }
    ]
  },
  {
    id: 1,
    number: '01',
    meta: 'Einführung · Grundlagen',
    title: 'Claude — Der komplette Grundkurs (2026)',
    desc: 'Chat-Disziplin, Websuche, Dateianalyse, technischer Support, Personalisierung und Datenschutz — alles was du für einen professionellen Einstieg in Claude brauchst. Die Modellfamilie hast du bereits in Modul 0 kennengelernt.',
    duration: '30 Min.',
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
        q: 'Was bedeutet es, dass Prompt Engineering eine "iterative Wissenschaft" ist?',
        options: ['Man kopiert Prompts aus dem Internet', 'Man startet mit einer Basis, analysiert Fehler und verbessert schrittweise', 'Man schreibt einmal einen perfekten Prompt', 'Man lässt die KI den Prompt selbst schreiben'],
        correct: 1, explanation: 'Iterativ = schrittweise verbessern. Basis → Fehler analysieren → ausbauen → wiederholen.'
      },
      {
        q: 'Welcher der 6 Bausteine wird als "Herzstück" eines Prompts bezeichnet?',
        options: ['Der Kontext', 'Das Output-Format', 'Die Rolle', 'Die Aufgabe — sie startet immer mit einem Verb'],
        correct: 3, explanation: 'Die Aufgabe ist das Herzstück. Sie muss konkret sein und mit einem Verb starten.'
      },
      {
        q: 'Wozu dienen "Stoppkriterien" in einem Prompt?',
        options: ['Sie beenden den Chat nach einer bestimmten Zeit', 'Sie verhindern, dass Claude Fragen stellt', 'Sie setzen Grenzen gegen Halluzinationen', 'Sie begrenzen die Wortanzahl auf 100 Wörter'],
        correct: 2, explanation: 'Stoppkriterien verhindern, dass Claude ratet statt Unsicherheit zuzugeben.'
      },
      {
        q: 'Warum empfiehlt Anthropic XML-Tags im Prompt?',
        options: ['Weil sie den Prompt verschlüsseln', 'Weil Claude darauf trainiert wurde und sich gezielt auf Abschnitte beziehen kann', 'Weil sie für die Websuche nötig sind', 'Weil sie den Prompt optisch schöner machen'],
        correct: 1, explanation: 'Claude wurde auf XML-Struktur trainiert. Tags ermöglichen gezielte Referenzierung.'
      },
      {
        q: 'Was ist "Prompt Chaining"?',
        options: ['Den Prompt in eine Kette aus Emojis verpacken', 'Prompts automatisch übersetzen', 'Eine große Aufgabe in kleine, aufeinanderfolgende Prompts zerlegen', 'Mehrere KI-Modelle gleichzeitig nutzen'],
        correct: 2, explanation: 'Prompt Chaining: Große Aufgabe → kleine Schritte → Teilergebnisse prüfen → weiter.'
      },
      {
        q: 'Was bewirkt "Self-Reflection" als Prompt-Technik?',
        options: ['Claude erstellt automatisch ein Tagebuch', 'Der User reflektiert über seine Frage', 'Claude meditiert vor jeder Antwort', 'Claude prüft seine Antwort selbst auf Fehler und überarbeitet sie'],
        correct: 3, explanation: 'Self-Reflection: Claude wird gebeten, seine Antwort kritisch zu prüfen und zu verbessern.'
      },
      {
        q: 'Wie funktioniert Pre-filling?',
        options: ['Man speichert häufig genutzte Prompts', 'Man gibt Claude den Anfang seiner Antwort vor (z.B. { für JSON)', 'Man lässt Claude den Chat zusammenfassen', 'Man füllt ein Online-Formular aus'],
        correct: 1, explanation: 'Pre-filling: Antwort mit { beginnen = JSON erzwingen.'
      },
      {
        q: 'Warum sollten statische Informationen in den System-Prompt?',
        options: ['Weil der System-Prompt unbegrenzt lang sein kann', 'Weil normale Prompts keine Dokumente akzeptieren', 'Weil statische Infos durch Caching nicht jedes Mal neu eingelesen werden', 'Weil der System-Prompt schneller tippt'],
        correct: 2, explanation: 'Caching: Statische Infos werden gecacht = weniger Verarbeitungszeit.'
      },
      {
        q: 'Welche Reihenfolge gilt bei kombinierter Bild-Text-Analyse?',
        options: ['Die Reihenfolge spielt keine Rolle', 'Erst klare Fakten (Formular), dann interpretative Daten (Skizze)', 'Beides gleichzeitig für Effizienz', 'Erst die Skizze, dann das Formular'],
        correct: 1, explanation: 'Form vor Sketch: Strukturierte Daten liefern den Kontext für die Interpretation.'
      },
      {
        q: 'Was ist der Vorteil von Few-Shot Prompting?',
        options: ['Es funktioniert nur mit Claude Opus', 'Es ist billiger weil weniger Tokens verbraucht werden', '1–3 konkrete Beispiele zeigen Claude das Ergebnis besser als lange Beschreibungen', 'Few-Shot funktioniert nur für Code'],
        correct: 2, explanation: 'Konkrete Beispiele sind oft mächtiger als lange Erklärungen — Claude lernt am Muster.'
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
    duration: '20 Min.',
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
    title: 'Contact Research & Outreach im M&A-Alltag',
    desc: 'Praktische Claude-Workflows für Unternehmensrecherche, Target Profiling, Outreach-E-Mails und CRM-Notizen — die wichtigsten Daily Tasks eines Analysts und Interns.',
    duration: '40 Min.',
    videos: [],
    images: [],
    longContent: '',
    content: `
      <h3>1. Die drei Daily Tasks im M&A-Alltag</h3>
      <p>Als Analyst oder Intern verbringst du täglich Zeit mit drei Kernaufgaben:
      <strong>Unternehmen recherchieren</strong>, <strong>Kontakte identifizieren</strong>
      und <strong>professionelle Kommunikation</strong> vorbereiten. Claude kann jeden dieser
      Schritte beschleunigen — wenn man weiß, wie man fragt.</p>
      <div class="callout">
        <div class="callout-title">Wichtig: Datenschutz zuerst</div>
        <p>Echte Namen, Deal-Details oder vertrauliche Kundendaten gehören nicht in Claude.
        Nutze für diese Aufgaben den <strong>IEG Claude Account</strong> oder anonymisiere die Daten.</p>
      </div>

      <h3>2. Company Research & Target Profiling</h3>
      <p>Ein Company Profile zu einem potenziellen M&A-Target ist oft die erste Aufgabe.
      Claude erstellt in Minuten eine strukturierte Übersicht — wenn du den richtigen
      Prompt verwendest.</p>
      <h4>Musterprompt: Company Profile</h4>
      <div class="callout callout-success">
        <div class="callout-title">Copy-Paste Prompt</div>
        <p><em>„Du bist ein erfahrener M&A-Analyst. Erstelle ein strukturiertes Company Profile
        für [Unternehmensname] mit folgenden Abschnitten: (1) Geschäftsmodell &amp; Umsatzquellen,
        (2) Marktposition &amp; Wettbewerber, (3) Finanzkennzahlen (falls öffentlich),
        (4) Management-Team, (5) mögliche Akquisitionsgründe aus Käuferperspektive.
        Format: strukturierte Tabelle + kurzer Fließtext pro Abschnitt.
        Wenn Informationen nicht verfügbar sind, sag es explizit."</em></p>
      </div>
      <h4>Target Screening: Mehrere Unternehmen vergleichen</h4>
      <p>Für Screenlisten eignet sich Prompt Chaining: Erstelle zuerst Einzelprofile,
      dann einen Vergleichsprompt.</p>
      <div class="callout callout-success">
        <div class="callout-title">Schritt 2 — Vergleichstabelle</div>
        <p><em>„Fasse die Profile von [Unternehmen A], [Unternehmen B] und [Unternehmen C]
        in einer Vergleichstabelle zusammen. Spalten: Unternehmen, Umsatz, Mitarbeiter,
        Marktposition, strategische Passung (1-5). Sortiere nach strategischer Passung."</em></p>
      </div>

      <h3>3. Kontaktrecherche &amp; Person Research</h3>
      <p>Entscheider identifizieren und qualifizieren — ohne stundenlange LinkedIn-Recherche.</p>
      <h4>Musterprompt: Entscheider-Profil</h4>
      <div class="callout callout-success">
        <div class="callout-title">Copy-Paste Prompt</div>
        <p><em>„Du bist ein Research-Analyst. Ich gebe dir folgenden LinkedIn-Auszug zu
        [Name/Rolle anonymisiert]. Fasse zusammen: (1) Karriereweg in 3 Sätzen,
        (2) relevante Expertise für M&A-Kontext, (3) mögliche Gesprächseinstiege.
        Halte die Zusammenfassung auf max. 150 Wörter."</em></p>
      </div>
      <div class="callout callout-warn">
        <div class="callout-title">Regel: Anonymisieren</div>
        <p>Kein echter Vor- und Nachname in Claude. Nutze Platzhalter wie [CFO, Unternehmen X] —
        das reicht für eine nutzbare Zusammenfassung.</p>
      </div>

      <h3>4. Outreach-E-Mails &amp; Follow-ups</h3>
      <p>Die Erstansprache ist oft das Schwierigste. Claude hilft, den richtigen Ton
      zu treffen — du gibst Kontext, Claude schreibt den Entwurf.</p>
      <h4>Musterprompt: Cold Outreach</h4>
      <div class="callout callout-success">
        <div class="callout-title">Copy-Paste Prompt</div>
        <p><em>„Schreibe eine professionelle Erstansprache-E-Mail (max. 120 Wörter) von einer
        M&A-Boutique an den [Rolle] eines mittelständischen Unternehmens im Bereich [Branche].
        Ziel: ein erstes Kennenlern-Gespräch. Ton: professionell, direkt, keine Floskeln.
        Betreffzeile: konkret und neugierig machend. Schreibe 2 Varianten."</em></p>
      </div>
      <h4>Musterprompt: Follow-up</h4>
      <div class="callout callout-success">
        <div class="callout-title">Copy-Paste Prompt</div>
        <p><em>„Schreibe ein kurzes Follow-up (max. 60 Wörter) zu einer Erstansprache-E-Mail,
        die vor 10 Tagen verschickt wurde und keine Antwort erhielt.
        Ton: freundlich, nicht aufdringlich. Neuer Aufhänger: [aktuelles Marktereignis einfügen]."</em></p>
      </div>

      <h3>5. CRM-Notizen strukturieren</h3>
      <p>Nach einem Gespräch schnell strukturierte CRM-Einträge erstellen —
      statt roher Notizen direkt ein verwendbares Format.</p>
      <div class="callout callout-success">
        <div class="callout-title">Copy-Paste Prompt</div>
        <p><em>„Ich gebe dir meine rohen Gesprächsnotizen vom heutigen Call. Erstelle daraus
        einen strukturierten CRM-Eintrag mit: (1) Datum &amp; Teilnehmer (anonymisiert),
        (2) Kerninhalte in 5 Bulletpoints, (3) vereinbarte nächste Schritte,
        (4) Follow-up-Datum. Hier sind die Notizen: [Notizen einfügen]"</em></p>
      </div>

      <h3>6. Prompt-Cheatsheet: Die 5 wichtigsten Templates</h3>
      <table>
        <thead><tr><th>Aufgabe</th><th>Prompt-Starter</th></tr></thead>
        <tbody>
          <tr><td>Company Profile</td><td>„Du bist M&A-Analyst. Erstelle ein Company Profile für [X] mit..."</td></tr>
          <tr><td>Vergleichstabelle</td><td>„Fasse die Profile von [A, B, C] in einer Tabelle zusammen. Spalten:..."</td></tr>
          <tr><td>Kontakt-Summary</td><td>„Fasse diesen LinkedIn-Auszug zusammen: Karriere, Expertise, Gesprächseinstieg"</td></tr>
          <tr><td>Cold Outreach</td><td>„Schreibe 2 Varianten einer Erstansprache-E-Mail (max. 120 Wörter)..."</td></tr>
          <tr><td>CRM-Eintrag</td><td>„Erstelle aus diesen Notizen einen CRM-Eintrag mit Bullets + Next Steps"</td></tr>
        </tbody>
      </table>
    `,
    quiz: [
      {
        q: 'Warum sollte man echte Kundennamen nicht direkt in Claude eingeben?',
        options: [
          'Weil Claude keine Namen verarbeiten kann',
          'Weil echte Namen die Antwortqualität verschlechtern',
          'Weil vertrauliche Personendaten nicht in einen persönlichen KI-Account gehören',
          'Weil Claude dann automatisch Mails versendet'
        ],
        correct: 2,
        explanation: 'Datenschutz: Echte Namen und Kundendaten gehören in den IEG Claude Account oder müssen vorher anonymisiert werden.'
      },
      {
        q: 'Was ist der erste Schritt beim Erstellen einer Target-Vergleichstabelle per Prompt Chaining?',
        options: [
          'Direkt alle Unternehmen in einem Prompt vergleichen',
          'Zuerst Einzelprofile erstellen, dann in einem zweiten Schritt die Vergleichstabelle',
          'Die Tabelle manuell in Excel erstellen',
          'Claude bitten, selbst Unternehmen auszuwählen'
        ],
        correct: 1,
        explanation: 'Prompt Chaining: Erst Einzelprofile, dann Zusammenfassung. So ist jedes Teilergebnis prüfbar.'
      },
      {
        q: 'Welches Element ist in einem Company Profile Prompt besonders wichtig?',
        options: [
          'Eine Stoppklausel: "Wenn Informationen nicht verfügbar sind, sag es explizit"',
          'Ein sehr langer, detaillierter Prompt ohne Abschnitte',
          'Die Bitte, möglichst kreativ zu antworten',
          'Die Angabe der Schriftgröße für den Output'
        ],
        correct: 0,
        explanation: 'Stoppkriterien verhindern Halluzinationen. Ohne sie erfinde Claude fehlende Fakten.'
      },
      {
        q: 'Wie sollte ein gutes Follow-up nach 10 Tagen ohne Antwort formuliert sein?',
        options: [
          'Lang und ausführlich, um zu zeigen, wie viel Arbeit man sich gemacht hat',
          'Kurz, freundlich, nicht aufdringlich — idealerweise mit einem neuen Aufhänger',
          'Identisch zur ersten E-Mail, damit die Person sich erinnert',
          'Mit einem klaren Vorwurf, warum man nicht geantwortet hat'
        ],
        correct: 1,
        explanation: 'Follow-ups: max. 60 Wörter, freundlicher Ton, neuer Aufhänger — z.B. ein aktuelles Marktereignis.'
      },
      {
        q: 'Was enthält ein guter CRM-Eintrag aus Gesprächsnotizen?',
        options: [
          'Nur das Datum und den Namen des Gesprächspartners',
          'Die wörtliche Transkription des gesamten Gesprächs',
          'Datum, Kerninhalte als Bulletpoints, vereinbarte nächste Schritte und Follow-up-Datum',
          'Nur die offenen Punkte, keine erledigten Punkte'
        ],
        correct: 2,
        explanation: 'Gute CRM-Einträge: Datum, Kerninhalte (5 Bullets), Next Steps, Follow-up-Datum.'
      },
      {
        q: 'Wie viele Varianten sollte man bei einer Erstansprache-E-Mail von Claude erstellen lassen?',
        options: [
          'Immer genau eine, damit der Fokus klar ist',
          'Mindestens 10, um die beste auszuwählen',
          'Zwei Varianten — so hat man eine Auswahl ohne zu viel Aufwand',
          'Keine — E-Mails sollte man immer selbst schreiben'
        ],
        correct: 2,
        explanation: '2 Varianten sind der Sweet Spot: genug Auswahl, um Ton und Stil anzupassen, ohne überwältigt zu werden.'
      },
      {
        q: 'Für welche Kontaktrecherche-Aufgabe eignet sich Claude am besten?',
        options: [
          'Direkt LinkedIn-Profile abrufen ohne Zustimmung',
          'Einen anonymisierten LinkedIn-Auszug zusammenfassen und Gesprächseinstiege ableiten',
          'Automatisch E-Mails an Kontakte versenden',
          'Persönliche Telefonnummern recherchieren'
        ],
        correct: 1,
        explanation: 'Claude fasst anonymisierten Text zusammen und leitet Gesprächseinstiege ab — Recherche und Direktzugriff sind nicht Claudes Aufgabe.'
      },
      {
        q: 'Welches Prompt-Element verbessert die Qualität eines Company Profile am meisten?',
        options: [
          'Die Anfrage in möglichst vielen Sprachen gleichzeitig stellen',
          'Nur eine kurze Frage ohne Struktur stellen',
          'Klare Abschnitte vorgeben (Geschäftsmodell, Marktposition, Finanzen, Management, Akquisitionsgründe)',
          'Claude bitten, das Profil in 500 Wörtern zusammenzufassen'
        ],
        correct: 2,
        explanation: 'Strukturierte Abschnitte = strukturierter Output. Claude folgt der vorgegebenen Gliederung.'
      }
    ]
  }
];

// Abschlussprüfung — 40 Fragen
const FINAL_EXAM = [
  // Modul 00 — Ökosystem & Grundkurs
  // Q1 correct: A
  { q: 'Warum sollte für jedes neue Thema ein neuer Chat gestartet werden?', options: ['Themenmischung im selben Chat verwirrt das Modell und senkt die Ergebnisqualität deutlich', 'Das Datenlimit pro Chat ist auf 10 Nachrichten begrenzt und bricht danach automatisch ab', 'Claude verliert bei langen Chats den Zugriff auf Websuche und Dateianalyse-Funktion', 'Neue Chats werden schneller verarbeitet, da weniger Serverkapazität benötigt wird'], correct: 0, explanation: 'Chat-Disziplin: Ein Thema pro Chat. Mehrere Themen in einem Chat reduzieren die Antwortqualität erheblich.' },
  // Q2 correct: B
  { q: 'Welches Claude-Modell eignet sich für schnelle Formatierungsaufgaben wie eine einfache Kontaktliste?', options: ['Opus, weil es auch einfache Aufgaben mit maximaler Sorgfalt ausführt', 'Haiku, weil es das schnellste und für Routineaufgaben optimierte Modell ist', 'Sonnet, weil es standardmäßig in der kostenlosen Version aktiv ist', 'Alle drei Modelle liefern bei einfachen Formatierungen identische Ergebnisse'], correct: 1, explanation: 'Haiku ist das schnellste Modell — ideal für einfache, repetitive Aufgaben wie Formatierungen.' },
  // Q3 correct: C
  { q: 'Welches Claude-Modell ist standardmäßig in der kostenlosen Version verfügbar?', options: ['Haiku, weil es die geringsten Serverressourcen benötigt', 'Opus, weil Anthropic das leistungsstärkste Modell gratis anbieten will', 'Sonnet als ausgewogener Allrounder mit guter Balance aus Qualität und Geschwindigkeit', 'Claude Code, weil er ohne Bezahlung für Endnutzer freigeschaltet ist'], correct: 2, explanation: 'Sonnet ist der Standard in der Gratisversion — gute Balance aus Geschwindigkeit und Qualität.' },
  // Q4 correct: D
  { q: 'Welche Datenschutz-Einstellung muss bei IEG vor der ersten Nutzung verbindlich deaktiviert werden?', options: ['Der Inkognitomodus, damit keine Sitzungen dauerhaft in der Cloud gespeichert werden', 'Die Websuche-Funktion, damit externe Daten nicht in Claudes Training einfließen', 'Die globalen Präferenzen, um ungewollte Verhaltensanpassungen dauerhaft zu verhindern', 'Die Option „hilft dabei Claude zu verbessern", damit Eingaben nicht zum Modelltraining genutzt werden'], correct: 3, explanation: 'Die Trainings-Option muss einmalig deaktiviert werden, damit eigene Eingaben nicht zum Modelltraining verwendet werden.' },
  // Q5 correct: A
  { q: 'Was bewirkt der Inkognitomodus (Geist-Symbol) in Claude?', options: ['Chats werden nach dem Schließen nicht in der Seitenleiste gespeichert — ideal für einmalige Anfragen', 'Alle gesendeten Nachrichten werden Ende-zu-Ende verschlüsselt und sind für Dritte nicht lesbar', 'Das Modell wechselt automatisch auf Haiku für schnellere und datenschutzkonformere Antworten', 'Websuche und externe Konnektoren werden deaktiviert, um mögliche Datenlecks zu verhindern'], correct: 0, explanation: 'Inkognito-Chats werden nach dem Schließen nicht gespeichert — ideal für private oder einmalige Anfragen.' },
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
  // Q28 correct: D
  { q: 'Wo findet man alle gespeicherten Skills in Claude?', options: ['In der Chat-Seitenleiste unter „Letzte Chats" als eigene Kategorie neben normalen Gesprächen', 'Auf der Anthropic-Website unter dem Bereich „My Account" → Downloads → Gespeicherte Skills', 'Im jeweiligen Project unter den Projekt-Einstellungen als projektlokale Fähigkeiten gespeichert', 'Unter Einstellungen → Customize → Skills als zentrale Verwaltungsseite für alle eigenen Skills'], correct: 3, explanation: 'Skills sind unter Einstellungen → Customize → Skills zu finden und zu verwalten.' },

  // Modul 05 — Finance Automation
  // Q29 correct: A
  { q: 'Was ist der Ablauf des "Super Skill" in der Finanzautomatisierung?', options: ['Data Cleaning → saubere Excel-Ausgabe → interaktives Dashboard → PowerPoint-Präsentation', 'PowerPoint-Entwurf → Dashboard-Design → Datenbereinigung → Excel-Export als letzter Schritt', 'Excel-Import → PDF-Zusammenfassung → PowerPoint-Folien → interaktives Web-Dashboard', 'Dashboard-Entwurf → Excel-Validierung → Data Cleaning → PowerPoint als Grundlage'], correct: 0, explanation: 'Super Skill-Kette: 1. Data Cleaning → 2. Saubere Excel → 3. Dashboard → 4. PowerPoint — alles mit einem Prompt.' },
  // Q30 correct: B
  { q: 'Was ist der Hauptvorteil des Dynamic Dashboard Builders in der Finanzautomatisierung?', options: ['Er erstellt vorgefertigte statische PDF-Berichte mit professionellem Corporate Design für Kunden', 'Er erzeugt interaktive HTML-Dashboards mit Drill-Down-Funktionalität — Klick zeigt Detailberichte', 'Er lädt Echtzeitdaten direkt aus SAP, Bloomberg oder anderen ERP-Systemen via Konnektoren', 'Er sendet fertige Berichte automatisch per Outlook-Konnektor an vordefinierte Verteiler'], correct: 1, explanation: 'Der Dashboard Builder erstellt interaktives HTML — Klick auf Namen zeigt alle Detailberichte (Drill-Down).' },
  // Q31 correct: C
  { q: 'Warum wird ein separater Branding-Skill erstellt?', options: ['Weil Claude ohne gespeichertes Branding grundsätzlich keine formatierten Ausgaben generieren kann', 'Weil Unternehmensdesigns gesetzlich als Betriebsgeheimnisse registriert werden müssen', 'Damit alle Ausgaben automatisch das Corporate Design tragen — Farben, Stile und Regeln zentral gespeichert', 'Um das Claude-Interface für alle Nutzer im Unternehmen farblich und visuell anzupassen'], correct: 2, explanation: 'Der Branding-Skill hinterlegt Farben, Stile und Designregeln — jede Ausgabe sieht automatisch professionell und einheitlich aus.' },
  // Q32 correct: D
  { q: 'Was passiert, wenn man nach dem Setup des Super Skills "credit card report cycle" in Claude eingibt?', options: ['Claude fragt nach weiteren Präzisierungen, bevor er mit dem Workflow beginnt', 'Claude öffnet automatisch die Banking-Website und loggt sich mit gespeicherten Zugangsdaten ein', 'Claude zeigt die letzte verfügbare Abrechnung aus dem Konnektor-Speicher an', 'Claude führt autark den vollständigen Workflow aus: Cleaning, Excel, Dashboard und PowerPoint'], correct: 3, explanation: 'Der Super Skill verknüpft alle Einzelskills — ein kurzer Prompt löst den vollständigen Automatisierungszyklus aus.' },
  // Q33 correct: A — modular skills
  { q: 'Welchen Vorteil bietet der modulare Skill-Ansatz (mehrere Einzelskills statt ein großer)?', options: ['Modulare Skills können unabhängig aktualisiert, kombiniert und in verschiedenen Workflows wiederverwendet werden', 'Ein einzelner großer Skill ist immer zuverlässiger, weil weniger Übergabepunkte entstehen', 'Modulare Skills laufen ausschließlich auf dem Opus-Modell für maximale Prozessstabilität', 'Es gibt keinen qualitativen Unterschied — Modularität ist nur ein Stilmerkmal ohne Funktionsvorteil'], correct: 0, explanation: 'Modularität: Jeden Skill einzeln verbessern, frei kombinieren, in verschiedenen Kontexten einsetzen.' },

  // Modul 06 — Contact Research & Outreach
  // Q34 correct: B
  { q: 'Warum dürfen echte Kundennamen nicht in einen persönlichen Claude-Account eingegeben werden?', options: ['Echte Namen verringern die Antwortqualität, weil Claude dann nicht mehr neutral analysiert', 'Personendaten ohne Enterprise-Vertrag landen ohne Sicherheitsgarantien beim KI-Anbieter', 'Claude kann personenbezogene Namen technisch nicht korrekt verarbeiten und gibt fehlerhafte Ergebnisse', 'Claude sendet bei Erkennung von Personennamen automatisch Benachrichtigungen an Anthropic'], correct: 1, explanation: 'Datenschutz: Personendaten gehören in den IEG Enterprise Account oder müssen vorher anonymisiert werden.' },
  // Q35 correct: C
  { q: 'Was ist "Prompt Chaining" bei der Erstellung einer Target-Vergleichstabelle?', options: ['Einen einzigen langen Prompt für alle Unternehmen gleichzeitig verwenden, um Zeit zu sparen', 'Denselben Prompt in mehreren Sprachen formulieren, um kulturell diversere Ergebnisse zu erhalten', 'Erst Einzelprofile erstellen und prüfen, dann in einem zweiten Schritt die Vergleichstabelle generieren', 'Einen Prompt mit automatischen Verknüpfungen zu externen Quellen wie LinkedIn oder Crunchbase'], correct: 2, explanation: 'Prompt Chaining: Einzelprofile als prüfbare Zwischenergebnisse, dann Zusammenfassung — so entstehen keine unkontrollierten Halluzinationen.' },
  // Q36 correct: D
  { q: 'Welches Prompt-Element verhindert, dass Claude bei Company Profiles fehlende Fakten erfindet?', options: ['Eine präzise Formatvorgabe (Tabelle, Stichpunkte), die Claude keine Freiräume für Eigenerfindungen lässt', 'Die Zuweisung einer Expertenrolle ("Du bist M&A-Analyst"), die Claude zu Belegen verpflichtet', 'Eine Längenbegrenzung auf max. 200 Wörter, die zu kompakten verifizierten Kernaussagen zwingt', 'Eine Stoppklausel: "Wenn Informationen nicht verfügbar sind, sag es explizit statt zu spekulieren"'], correct: 3, explanation: 'Stoppklauseln verhindern Halluzinationen: Claude gibt zu, wenn Daten fehlen, statt sie zu erfinden.' },
  // Q37 correct: A
  { q: 'Was ist das zentrale Element eines guten CRM-Eintrags aus Claude-generierten Gesprächsnotizen?', options: ['Datum, Kerninhalte als Bulletpoints, vereinbarte Next Steps mit Verantwortlichen und Follow-up-Datum', 'Eine wörtliche Transkription des Gesprächs als vollständiges Protokoll zur juristischen Absicherung', 'Ausschließlich Name und Datum des Gesprächs — minimalistische Einträge sind wartungsfreundlicher', 'Eine ausführliche Zusammenfassung im Fließtext, damit der Gesamtkontext vollständig erhalten bleibt'], correct: 0, explanation: 'Strukturierter CRM-Eintrag: Datum, 5 Kernbullets, Next Steps mit Verantwortlichen, Follow-up-Datum.' },
  // Q38 correct: B
  { q: 'Wie lang sollte ein Follow-up nach 10 Tagen ohne Antwort maximal sein?', options: ['Mindestens 500 Wörter, um Engagement und inhaltliche Tiefe zu demonstrieren', 'Maximal 60 Wörter — kurz, freundlich, mit neuem Aufhänger und ohne impliziten Vorwurf', 'Identisch zur Erstmail in Länge und Ton — Konsistenz stärkt die Wiedererkennung beim Empfänger', 'Exakt 120 Wörter, weil dieser Umfang statistisch die besten Rücklaufquoten im B2B erzielt'], correct: 1, explanation: 'Follow-ups: max. 60 Wörter, freundlicher Ton, kein Vorwurf, neuer Aufhänger (z.B. aktuelles Marktereignis).' },

  // Übergreifende Vertiefungsfragen
  // Q39 correct: C
  { q: 'Was unterscheidet Opus von Sonnet beim Einsatz für komplexe Finanz- oder Marktanalysen?', options: ['Opus ist deutlich langsamer als Sonnet, liefert aber bei denselben Aufgaben identische Qualität', 'Sonnet hat ein größeres Kontextfenster als Opus und kann mehr Dokumente gleichzeitig verarbeiten', 'Opus integriert Quellen und Studien tiefer in die Analyse; Sonnet ist für Routineaufgaben effizienter', 'Es gibt keinen qualitativen Unterschied — die Modellwahl beeinflusst nur Geschwindigkeit, nicht Tiefe'], correct: 2, explanation: 'Opus für tiefgehende Recherche mit Quellen; Sonnet für tägliche Routinearbeit mit guter Balance aus Qualität und Geschwindigkeit.' },
  // Q40 correct: D
  { q: 'Was unterscheidet einen Skill von einem Project-System-Prompt?', options: ['Kein Unterschied — beide Instrumente erfüllen dieselbe Funktion unter verschiedenen Namen', 'Projects sind flexibler als Skills, weil sie Dokumente und Anweisungen miteinander kombinieren', 'Skills erfordern grundsätzlich ein Pro-Abonnement; System Prompts sind in allen Versionen verfügbar', 'Skills sind chatübergreifend in jedem Kontext nutzbar; System Prompts gelten nur im jeweiligen Project'], correct: 3, explanation: 'Skills: universal einsetzbar in jedem Chat. System Prompts: gelten nur innerhalb des definierten Projects.' }
];

const PASS_THRESHOLD = 70;
