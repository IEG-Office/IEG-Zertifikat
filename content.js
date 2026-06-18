/* ============================================
   IEG Claude Academy — Content
   Alle Module + Quizzes
   v5.0 — Luise Live Version + Login-Ready
   ============================================ */

const CURRICULUM = [
  {
    id: 0,
    number: '00',
    meta: 'Einführung · Grundlagen',
    title: 'Claude — Der komplette Grundkurs (2026)',
    desc: 'Chat-Disziplin, die drei Modelle, Websuche, Dateianalyse, Personalisierung und Datenschutz — alles was du für einen professionellen Einstieg in Claude brauchst.',
    duration: '30 Min.',
    videos: [
      { url: 'https://www.youtube.com/embed/51vysjHcJ5A', title: 'Claude — Der komplette Grundkurs 2026', caption: 'Video 0.1 · Claude — Der komplette Grundkurs (2026)' },
    ],
    images: [],
    longContent: '',
    content: `
      <h3>1. Grundlagen und Chat-Disziplin</h3>
      <p>Claude ist ein KI-Tool von Anthropic, das über eine einfache Textbox bedient wird. Ein entscheidender Erfolgsfaktor ist die <strong>Chat-Disziplin</strong>: Erstelle für <strong>jedes neue Thema einen neuen Chat</strong>. Das Vermischen von Themen in einem einzigen Chat verwirrt die KI und verschlechtert die Qualität der Ergebnisse erheblich.</p>
      <div class="callout">
        <div class="callout-title">Goldene Regel</div>
        <p>Ein Thema — ein Chat. Wer Urlaubsplanung und Quartalsberichte im selben Chat mischt, bekommt schlechtere Ergebnisse für beides.</p>
      </div>

      <h3>2. Die Modellfamilie</h3>
      <p>Claude bietet drei spezialisierte Modelle für unterschiedliche Anforderungen:</p>
      <table>
        <thead><tr><th>Modell</th><th>Stärke</th><th>Typischer Einsatz</th></tr></thead>
        <tbody>
          <tr><td><strong>Opus</strong></td><td>Das leistungsstärkste Modell</td><td>Tiefgehende Recherche, komplexe Analysen — baut Studien und Quellen ein. Verfügbar in der Pro-Version.</td></tr>
          <tr><td><strong>Sonnet</strong></td><td>Effizienter Allrounder</td><td>Tägliche Arbeit, Standard in der Gratisversion. Gute Balance aus Geschwindigkeit und Qualität.</td></tr>
          <tr><td><strong>Haiku</strong></td><td>Das schnellste Modell</td><td>Schnelle Formulierungen und einfache Aufgaben. Weniger tiefgründig.</td></tr>
        </tbody>
      </table>

      <h3>3. Zentrale Arbeitsfunktionen</h3>
      <h4>Websuche</h4>
      <p>Über das <strong>Plus-Symbol</strong> aktivierbar. Claude kann hunderte Quellen in Sekunden durchsuchen, um aktuelle Daten (z.&thinsp;B. DAX-Umsätze) in Tabellen zusammenzufassen.</p>
      <h4>Dateianalyse</h4>
      <p>PDFs, Excel- oder Word-Dokumente lassen sich direkt hochladen. <strong>Pro-Tipp:</strong> Nutze das Stoppuhr-Symbol (<em>erweiterter Nachdenkenmodus</em>), damit Claude sich mehr Zeit nimmt, die Datei gründlich einzulesen und präzisere Antworten zu geben.</p>
      <h4>Technischer Support</h4>
      <p>Claude hilft bei PC-Problemen. Der effizienteste Workflow: Erst das Problem allgemein beschreiben, dann einen <strong>Screenshot der Benutzeroberfläche</strong> (z.&thinsp;B. Aktivitätsanzeige) hochladen — Claude diagnostiziert die Ursache direkt.</p>

      <h3>4. Personalisierung und Produktivität</h3>
      <ul>
        <li><strong>Präferenzen:</strong> Globale Einstellungen (z.&thinsp;B. „Antworte immer in einem Satz"), die für jeden neuen Chat automatisch übernommen werden.</li>
        <li><strong>Stile:</strong> Claude den eigenen <strong>Schreibstil beibringen</strong> — Beispieltexte (z.&thinsp;B. als PDF) hochladen, die Claude automatisch analysiert.</li>
        <li><strong>Gedächtnis (Memory):</strong> Durch den Befehl „Bitte erstelle eine Erinnerung" merkt sich Claude Fakten über dich (z.&thinsp;B. „Ich habe Flugangst"), die er in künftigen Chats automatisch berücksichtigt.</li>
        <li><strong>Projekte:</strong> Ein abgeschirmter Bereich für spezifische Aufgaben (z.&thinsp;B. „LinkedIn Post Generator"). Hier hochgeladene Dateien und Anweisungen gelten für <strong>alle Chats innerhalb dieses Projekts</strong>.</li>
      </ul>

      <h3>5. Profi-Funktionen: Programmierung und Excel</h3>
      <h4>Dashboard- &amp; Website-Bau</h4>
      <p>Claude kann interaktive Dashboards oder einfache HTML-Websites erstellen — inklusive Schritt-für-Schritt-Anleitungen zur Veröffentlichung. Kein Programmier-Vorwissen nötig.</p>
      <h4>Claude in Excel</h4>
      <p>Eine <strong>Pro-Funktion</strong>, die direkt in Excel Tabellen füllt, Webdaten abruft, dynamische Charts erstellt und Fehler wie <strong>Zirkelbezüge selbstständig korrigiert</strong> — per natürlichsprachlicher Anweisung.</p>

      <h3>6. Sicherheit und Datenschutz</h3>
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
    id: 1,
    number: '01',
    meta: 'Einführung · Modul 1',
    title: 'Claude im Überblick: Vom Einsteiger zum Profi',
    desc: 'Alle zentralen Claude-Funktionen kompakt: Modellfamilie, Prompting-Techniken, Dokumentenanalyse, Deep Research, Personalisierung und Automatisierung — der perfekte Einstieg.',
    duration: '30 Min.',
    videos: [
      { url: 'https://www.youtube.com/embed/JEXCaG95iBs', title: 'Claude im Überblick 2026', caption: 'Video 1.1 · Claude — Vom Einsteiger zum Profi (2026)' },
    ],
    images: [],
    longContent: '',
    content: `
      <h3>1. Was ist Claude?</h3>
      <p>Claude ist ein KI-Assistent von <strong>Anthropic</strong> — einem Unternehmen, das von ehemaligen OpenAI-Mitarbeitern gegründet wurde. Er gilt als leistungsstarke Alternative zu ChatGPT und Gemini und zeichnet sich durch hohe Präzision, Zuverlässigkeit und Vielseitigkeit aus.</p>
      <div class="callout">
        <div class="callout-title">Warum Claude für M&amp;A?</div>
        <p>Claude ist besonders stark bei der Analyse langer Dokumente, strukturiertem Schreiben und komplexen Denkaufgaben — genau das, was im Investment Banking täglich gebraucht wird.</p>
      </div>

      <h3>2. Die Modellfamilie und Abonnements</h3>
      <p>Je nach Aufgabe wählt man das passende Modell:</p>
      <table>
        <thead><tr><th>Modell</th><th>Stärke</th><th>Typischer Einsatz im M&amp;A</th></tr></thead>
        <tbody>
          <tr><td><strong>Opus</strong></td><td>Tiefste Analyse, komplexes Denken</td><td>Business-Analysen, Bewertungsmodelle, Risikobewertung</td></tr>
          <tr><td><strong>Sonnet</strong></td><td>Allrounder für den Alltag</td><td>E-Mails, Zusammenfassungen, Research-Überblicke</td></tr>
          <tr><td><strong>Haiku</strong></td><td>Schnell und effizient</td><td>Schnelle Formatierungen, einfache Umstrukturierungen</td></tr>
        </tbody>
      </table>
      <p>Neben der <strong>Gratis-Version</strong> bieten die <strong>Pro-</strong> und <strong>Max-Version</strong> höhere Nutzungslimits und Zugriff auf alle Modelle.</p>

      <h3>3. Effektives Prompting</h3>
      <p>Die Qualität von Claudes Antworten hängt direkt von der Qualität des Prompts ab. Ein guter Prompt hat vier Elemente:</p>
      <ul>
        <li><strong>Kontext:</strong> Gib Hintergrundinformationen. Statt „Schreib eine E-Mail" lieber: „Ich bin Analyst bei einer M&amp;A-Boutique und schreibe an den CFO eines mittelständischen Unternehmens."</li>
        <li><strong>Rollenprompting:</strong> Weise Claude eine Identität zu — z.&thinsp;B. „Du bist ein erfahrener M&amp;A-Anwalt" — um Fachperspektive und Vokabular zu steuern.</li>
        <li><strong>Formatvorgaben:</strong> Verlange gezielt Tabellen, Listen, Bullet Points oder strukturierte Berichte.</li>
        <li><strong>Iteration:</strong> Gib Feedback und verfeinere das Ergebnis — „Mach den Abschnitt zu Risiken konkreter, füge zwei Beispiele hinzu."</li>
      </ul>

      <h3>4. Analyse und Generierung von Dokumenten</h3>
      <ul>
        <li><strong>Dokumenten-Upload:</strong> PDFs, Jahresberichte, Term Sheets oder Due-Diligence-Unterlagen hochladen und analysieren lassen.</li>
        <li><strong>Bildanalyse:</strong> Claude kann Informationen aus Grafiken, Charts und Screenshots extrahieren und textlich aufbereiten.</li>
        <li><strong>Dateierstellung:</strong> Mit spezifischen Skills kann Claude echte <strong>Word-, Excel- und PowerPoint-Dateien</strong> generieren, die direkt heruntergeladen und weiterbearbeitet werden können.</li>
      </ul>
      <div class="callout">
        <div class="callout-title">Praxis-Tipp</div>
        <p>Für umfangreiche Dokumente vor der Analyse den <strong>Extended Thinking Modus</strong> (Stoppuhr-Symbol) aktivieren — Claude denkt dann gründlicher, bevor es antwortet.</p>
      </div>

      <h3>5. Recherche und Erweitertes Denken</h3>
      <ul>
        <li><strong>Websuche:</strong> Über das Plus-Symbol aktivierbar — Claude durchsucht aktuelle Quellen und belegt Fakten mit Fußnoten.</li>
        <li><strong>Deep Research:</strong> Für umfassende Analysen durchsucht Claude systematisch hunderte Quellen und erstellt einen strukturierten Bericht als PDF — in wenigen Minuten.</li>
        <li><strong>Extended Thinking:</strong> Bei komplexen Logikaufgaben (z.&thinsp;B. Unternehmensbewertungen, Risikoanalysen) plant Claude zuerst im Hintergrund und antwortet dann präziser.</li>
      </ul>

      <h3>6. Personalisierung und Organisation</h3>
      <ul>
        <li><strong>Custom Styles:</strong> Claude deinen persönlichen Schreibstil beibringen — einfach Beispieltexte hochladen oder den Stil beschreiben.</li>
        <li><strong>Skills:</strong> Erfolgreiche Arbeitsabläufe als dauerhafte Fähigkeit speichern (z.&thinsp;B. einen CRM-Eintrag-Generator oder News-Kurator).</li>
        <li><strong>Projects:</strong> Abgeschirmte Arbeitsbereiche für spezifische Themen — Claude behält alle hinterlegten Dokumente und Anweisungen dauerhaft im Kontext jedes neuen Chats.</li>
        <li><strong>Artifacts:</strong> Interaktive Mini-Apps direkt im Browser erstellen — z.&thinsp;B. Bewertungsrechner, Trinkgeldrechner oder Dashboards — ohne Programmierkenntnisse.</li>
      </ul>

      <h3>7. Konnektoren und Desktop-Automatisierung</h3>
      <ul>
        <li><strong>Konnektoren:</strong> Claude mit Gmail, Google Drive, Slack oder Outlook verbinden — E-Mails zusammenfassen, Entwürfe direkt schreiben oder Kalender verwalten.</li>
        <li><strong>Claude Cowork:</strong> KI-Assistent in der Desktop-App, der auf lokale Ordner zugreift und Dateien autonom verarbeitet — auch im Hintergrund, während du andere Dinge tust.</li>
      </ul>
      <div class="callout callout-warn">
        <div class="callout-title">Sicherheitshinweis</div>
        <p>Konnektoren geben der KI Zugriff auf echte Daten. Niemals Firmen-Accounts mit dem persönlichen Claude-Account verbinden — mehr dazu in Modul 03.</p>
      </div>
    `,
    quiz: [
      {
        q: 'Ein M&A-Analyst möchte, dass Claude für alle LinkedIn-Posts denselben Schreibstil trifft. Was ist die effizienteste Methode?',
        options: [
          'Zu Beginn jedes Chats: „Schreibe wie ein Analyst"',
          'Ein neues Project anlegen und alte Posts in die Anweisungen kopieren',
          'Custom Styles nutzen: Beispieltexte hochladen und eigenen Stil festlegen',
          'Den Slash-Command /StyleXLS in der Excel-Integration nutzen'
        ],
        correct: 2,
        explanation: 'Custom Styles speichern den Schreibstil systemweit — gilt für alle zukünftigen Chats ohne erneute Eingabe.'
      },
      {
        q: 'Was ist der entscheidende Unterschied zwischen normaler Websuche und Deep Research?',
        options: [
          'Websuche liest nur Texte, Deep Research analysiert auch YouTube-Videos',
          'Websuche liefert schnelle Antworten; Deep Research durchsucht systematisch hunderte Quellen und erstellt einen strukturierten Bericht',
          'Deep Research ist nur für Programmiercode gedacht',
          'Websuche ist kostenlos, Deep Research kostet pro Seite eine Gebühr'
        ],
        correct: 1,
        explanation: 'Deep Research = systematische Analyse hunderte Quellen über mehrere Minuten, Ergebnis als strukturierter PDF-Bericht.'
      },
      {
        q: 'Du analysierst komplexe Finanzdaten mit mehreren Risikofaktoren. Welches Setup bietet die höchste Präzision?',
        options: [
          'Modell „Haiku" mit dem Prompt: „Analysiere: Ja oder nein?"',
          'Modell „Opus" mit aktiviertem Extended Thinking für tiefgreifende Analyse',
          'Modell „Sonnet" mit Word-Skill, um direkt ein Dokument zu schreiben',
          'Ein Artifact erstellen, das nur Zahlen visualisiert'
        ],
        correct: 1,
        explanation: 'Opus + Extended Thinking = maximale Analysentiefe für komplexe Entscheidungen mit vielen Variablen.'
      },
      {
        q: 'Du hast eine CSV mit 500 Datensätzen und willst eine Excel-Tabelle daraus. Wie gehst du vor?',
        options: [
          'Artifacts-Generator nutzen, um ein interaktives Dashboard zu erstellen',
          'Datei hochladen und Claude mit einem Excel-Skill eine editierbare Excel-Datei generieren lassen',
          'Alle 500 Zeilen manuell in den Prompt kopieren',
          'Claude Cowork nutzen, um Daten manuell einzutragen'
        ],
        correct: 1,
        explanation: 'Datei hochladen + Excel-Skill = Claude analysiert die CSV und generiert direkt eine herunterladbare Excel-Datei.'
      },
      {
        q: 'Was ist das Besondere an Projects im Vergleich zu normalen Chats?',
        options: [
          'In Projekten antwortet Claude schneller',
          'Projekte sind nur für Code gedacht',
          'Anweisungen und hochgeladene Dateien gelten automatisch für jeden Chat innerhalb des Projekts',
          'Projekte ermöglichen Echtzeit-Zusammenarbeit mit ChatGPT-Nutzern'
        ],
        correct: 2,
        explanation: 'Projects = dauerhafter Kontext. Jeder neue Chat im Projekt startet mit allen hinterlegten Dokumenten und Anweisungen.'
      },
      {
        q: 'Du willst einen interaktiven Bewertungsrechner für Kunden bauen, hast aber keine Programmierkenntnisse. Was tust du?',
        options: [
          'Claude nach einem Programmierkurs suchen lassen',
          'Ein Artifact erstellen lassen: Funktion beschreiben, Claude generiert Frontend und Code zum direkten Testen',
          'Claude bitten, eine PowerPoint über den Rechner zu erstellen',
          'Custom Style „Prägnant" wählen und auf Code hoffen'
        ],
        correct: 1,
        explanation: 'Artifacts = Claude generiert direkt lauffähige Mini-Apps ohne Programmierkenntnisse.'
      },
      {
        q: 'Was passiert, wenn Claude über einen Word-Skill ein Dokument erstellt?',
        options: [
          'Claude schickt eine E-Mail an Microsoft zur Autorisierung',
          'Ein Word-Skill führt im Hintergrund Code aus, der die Datei im richtigen Format generiert',
          'Claude macht einen Screenshot und speichert ihn als .doc',
          'Das Dokument wird per Spracherkennung diktiert und in der Cloud gespeichert'
        ],
        correct: 1,
        explanation: 'Skills führen im Hintergrund Code aus — das Ergebnis ist eine echte, editierbare Office-Datei.'
      },
      {
        q: 'Warum ist Rollenprompting (z. B. „Du bist ein erfahrener M&A-Anwalt") so effektiv?',
        options: [
          'Es umgeht die Sicherheitsfilter der KI',
          'Es zwingt Claude, aus einer spezifischen Fachperspektive mit dem passenden Vokabular zu antworten',
          'Es reduziert die Kosten pro Prompt',
          'Es schaltet automatisch das Opus-Modell frei'
        ],
        correct: 1,
        explanation: 'Rollenprompting steuert die Perspektive und das Fachvokabular — die Antwort wird präziser und zielgerichteter.'
      },
      {
        q: 'Was muss beachtet werden, wenn Claude mit Firmen-Slack oder Gmail verbunden werden soll?',
        options: [
          'Die Verbindung ist dauerhaft und kann nie getrennt werden',
          'Man gibt einer KI Zugriff auf echte Firmendaten — nur über den gesicherten IEG Claude Account',
          'Slack-Integrationen funktionieren nur mit Extended Thinking',
          'Claude kann in Slack nur lesen, keine Entwürfe verfassen'
        ],
        correct: 1,
        explanation: 'Konnektoren = enorme Datenzugriffe. Firmen-Accounts nie mit persönlichem Claude-Account verbinden.'
      },
      {
        q: 'Wie erstellt man am effektivsten einen eigenen Skill in Claude?',
        options: [
          'Python lernen und Code hochladen',
          'Workflow im Chat durchgehen bis das Ergebnis perfekt ist, dann Claude anweisen: „Speichere diesen Workflow als Skill"',
          'Einen Brief an Anthropic schreiben und um Freischaltung bitten',
          'Drittanbieter-App aus dem Chrome Store herunterladen'
        ],
        correct: 1,
        explanation: 'Skills entstehen durch iterative Verfeinerung im Chat — einmal perfektioniert, als wiederverwendbaren Skill speichern.'
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
    meta: 'Vertiefung · Modul 6',
    title: 'Fortgeschrittenes Prompting im Finance-Kontext',
    desc: 'Vertiefung strukturierter Prompting-Techniken für finanzbezogene Aufgaben, darunter XML-Tags, Reihenfolge von Anweisungen, Beispiele und kontrollierte Ausgabeformate.',
    duration: '35 Min.',
    videos: [],
    images: [],
    longContent: '',
    content: `
      <h3>Structural Prompting &amp; Order of Operations</h3>
      <p>XML Tags wie <code>&lt;context&gt;</code>, <code>&lt;instructions&gt;</code>, <code>&lt;examples&gt;</code>.
      Claude performt besser mit <strong>Order of Operations</strong>:</p>
      <ul>
        <li><strong>Analyze the Form before the Sketch:</strong> Strukturierte Daten vor visuellen Daten.</li>
      </ul>

      <h3>Few-Shot &amp; Chain-of-Thought</h3>
      <p><strong>3–5 Beispiele</strong> eines "Perfect Pitchbook Summary" bereitstellen.
      <strong>Chain-of-Thought</strong>: Step-by-step denken, bevor ein Verdict kommt.</p>

      <h3>Die Pre-fill-Technik</h3>
      <p>Antwort mit <code>{</code> beginnen lassen → valides JSON. Mit <code>|</code> → Markdown-Tabelle.</p>
    `,
    quiz: [
      {
        q: 'Was beschreibt "Analyze the Form before the Sketch"?',
        options: [
          'Skizzen sind im Banking generell verboten',
          'Erst strukturierte Daten (Form) analysieren, dann visuelle Daten (Sketch)',
          'Formulare digitalisieren, bevor man zeichnet',
          'Erst kreativ skizzieren, dann strukturieren'
        ],
        correct: 1,
        explanation: 'Strukturierte Daten zuerst — sie liefern den Kontext für die Interpretation.'
      },
      {
        q: 'Wie viele Beispiele werden für effektives Few-Shot Prompting empfohlen?',
        options: ['So viele wie möglich, mindestens 100', '20–30 Beispiele', '3–5 Beispiele', '1 Beispiel reicht immer'],
        correct: 2,
        explanation: '3–5 Beispiele sind der Sweet Spot.'
      },
      {
        q: 'Welche XML-Tags werden für Structural Prompting verwendet?',
        options: ['<context>, <instructions>, <examples>', '<div>, <span>, <button>', '<header>, <footer>, <main>', '<a>, <b>, <p>'],
        correct: 0,
        explanation: '<context>, <instructions> und <examples> sind die zentralen Tags.'
      },
      {
        q: 'Was macht die Pre-fill-Technik mit dem Zeichen { ?',
        options: ['Sie startet einen neuen Chat', 'Sie aktiviert den Debug-Modus', 'Sie erzwingt valides JSON als Output-Format', 'Sie speichert den Prompt als Template'],
        correct: 2,
        explanation: 'Pre-fill mit { → Claude liefert valides JSON.'
      }
    ]
  }
  ,{
    id: 7,
    number: '07',
    meta: 'Praxis · Modul 7',
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

// Abschlussprüfung — 15 Fragen
const FINAL_EXAM = [
  { q: 'Wozu dienen "Projects" in Claude?', options: ['Sie aktivieren den Programmiermodus', 'Sie ersetzen die Websuche', 'Sie sind Briefing-Ordner mit Kontext für spezifische Themen', 'Sie speichern nur alte Chats'], correct: 2, explanation: 'Projects = ausgelagertes Gehirn mit Dokumenten, Anweisungen und Kontext.' },
  { q: 'Was unterscheidet Skills von Plugins?', options: ['Skills sind einzelne Fähigkeiten, Plugins sind Bündel', 'Es gibt keinen Unterschied', 'Plugins sind kostenlos', 'Skills brauchen Claude Code'], correct: 0, explanation: 'Skills = einzelne Fähigkeiten. Plugins = ganze Bündel.' },
  { q: 'Welches Modell eignet sich für tiefgehende Analysen mit Quellen?', options: ['Haiku', 'Alle identisch', 'Sonnet', 'Opus'], correct: 3, explanation: 'Opus kann Quellen und Studien integrieren.' },
  { q: 'Welche Datenschutz-Einstellung muss bei IEG deaktiviert werden?', options: ['Die Erinnerungen (Memory)', 'Die Websuche', 'Der Inkognitomodus', 'Die Option "hilft dabei Claude zu verbessern"'], correct: 3, explanation: 'Trainings-Option deaktivieren.' },
  { q: 'Welche sechs Elemente umfasst die ideale Prompt-Struktur?', options: ['Ausschließlich Code-Beispiele', 'Nur eine kurze Frage', 'Aufgabe, Kontext, Hintergrunddaten, Anweisungen, Beispiele, Erinnerungen', 'Überschrift und ein Satz'], correct: 2, explanation: 'Sechs Elemente: Aufgabe, Kontext, Hintergrunddaten, Anweisungen, Beispiele, Erinnerungen.' },
  { q: 'Wozu dienen XML-Tags in einem Prompt?', options: ['Sie verschlüsseln den Prompt', 'Sie sind Dekoration', 'Sie strukturieren den Prompt für gezielte Abschnitt-Zugriffe', 'Sie aktivieren den Code-Modus'], correct: 2, explanation: 'XML-Tags geben dem Prompt eine klare Hierarchie.' },
  { q: 'Was unterscheidet einen Skill von einer Projektanweisung?', options: ['Projekte sind flexibler', 'Skills funktionieren nur offline', 'Skills sind übertragbar und in jedem Chat nutzbar', 'Kein Unterschied'], correct: 2, explanation: 'Skills sind chatübergreifend wiederverwendbar.' },
  { q: 'Ein Nebenprojekt wird mit dem KI-Abonnement des Arbeitgebers entwickelt. Wem gehört es?', options: ['Mir, ich habe die Prompts geschrieben', 'Dem KI-Anbieter', 'Niemandem', 'Dem Arbeitgeber'], correct: 3, explanation: 'Nutzung des firmeneigenen KI-Tools = geistiges Eigentum gehört rechtlich dem Arbeitgeber.' },
  { q: 'Was beschreibt die „Lethal Trifecta"?', options: ['Drei KI-Modelle gleichzeitig', 'Drei Browser gleichzeitig', 'KI greift auf private Daten zu, liest externe Inhalte und kann Daten nach außen senden', 'Drei Konnektoren eines Anbieters'], correct: 2, explanation: 'Private Daten + externe Inhalte + ausgehende Verbindung = Angreifer können die KI kapern.' },
  { q: 'Wie oft sollten aktive Konnektoren überprüft und nicht genutzte getrennt werden?', options: ['Nie', 'Nur wenn etwas schiefläuft', 'Einmal jährlich', 'Monatlich'], correct: 3, explanation: 'Monatlich: Einstellungen prüfen und alles trennen, was nicht aktiv genutzt wird.' },
  { q: 'Was macht der "Super Skill" bei der Finanzautomatisierung?', options: ['Er erstellt nur eine Excel-Datei', 'Er verkettet Data Cleaning, Excel, Dashboard und PowerPoint in einem Durchlauf', 'Er sendet Rechnungen per E-Mail', 'Er bucht Transaktionen automatisch'], correct: 1, explanation: 'Super Skill: Cleaning → Excel → Dashboard → PowerPoint — alles mit einem Prompt.' },
  { q: 'Was ist "Prompt Chaining"?', options: ['Prompts in Emojis verpacken', 'Prompts übersetzen', 'Eine große Aufgabe in kleine aufeinanderfolgende Prompts zerlegen', 'Mehrere KI-Modelle gleichzeitig nutzen'], correct: 2, explanation: 'Prompt Chaining = große Aufgabe → kleine Schritte → Teilergebnisse prüfen.' },
  { q: 'Was bewirkt Pre-filling mit dem Zeichen { ?', options: ['Neuen Chat starten', 'Prompt speichern', 'Valides JSON als Output erzwingen', 'Debug-Modus aktivieren'], correct: 2, explanation: 'Pre-fill mit { = Claude liefert valides JSON.' },
  { q: 'Welche Reihenfolge gilt bei "Analyze the Form before the Sketch"?', options: ['Beide gleichzeitig', 'Reihenfolge egal', 'Erst Sketch, dann Form', 'Erst klare Fakten (Form), dann interpretative Daten (Sketch)'], correct: 3, explanation: 'Klare Fakten zuerst — sie kalibrieren den Kontext.' },
  { q: 'Warum sollte Firmen-Gmail niemals mit einem persönlichen KI-Account verbunden werden?', options: ['Das macht die KI langsamer', 'Persönliche Accounts sind sicherer', 'Gmail unterstützt das nicht', 'Firmendaten landen in einem Tool ohne Vertrag und Sicherheitsgarantien'], correct: 3, explanation: 'Arbeitsaccounts im persönlichen KI-Tool = Firmendaten ohne Enterprise-Vertrag oder Sicherheitsgarantien.' }
  ,{ q: 'Welches Datenschutzprinzip gilt bei der Kontaktrecherche mit Claude?', options: ['Echte Namen sind in Ordnung, wenn sie öffentlich sind', 'Nur Firmennamen anonymisieren, Personennamen sind erlaubt', 'Echte Kundennamen und vertrauliche Kontaktdaten gehören in den IEG Account oder müssen anonymisiert werden', 'Alles darf eingegeben werden, wenn der Inkognitomodus aktiv ist'], correct: 2, explanation: 'Datenschutz: Personenbezogene Daten → IEG Account oder Anonymisierung. Inkognitomodus reicht nicht.' }
  ,{ q: 'Welche Prompt-Technik eignet sich für eine Target-Vergleichstabelle aus mehreren Unternehmens-Profilen?', options: ['Few-Shot Prompting mit Beispieltabellen', 'Prompt Chaining: erst Einzelprofile, dann Vergleichstabelle', 'Ein einziger sehr langer Prompt für alle Unternehmen', 'Pre-filling mit { für JSON-Output'], correct: 1, explanation: 'Prompt Chaining: Einzelprofile als Zwischenergebnis prüfen, dann Vergleich erstellen.' }
];

const PASS_THRESHOLD = 70;
