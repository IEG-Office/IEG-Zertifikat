/* ============================================
   IEG Claude Academy — i18n
   Language toggle: DE / EN
   v1.0
   ============================================ */

const I18N = {
  de: {
    /* Navigation */
    'nav.home':         'Übersicht',
    'nav.curriculum':   'Curriculum',
    'nav.team':         'Team',
    'nav.certificate':  'Zertifikat',
    'nav.progress':     'Fortschritt',
    'nav.logout':       'Abmelden',

    /* Hero */
    'hero.eyebrow':     'Internes Trainingsprogramm · Onboarding für Analysts & Interns · 2026',
    'hero.title':       'Claude im Investment Banking',
    'hero.lede':        'Ein achtteiliger Einführungskurs für den strukturierten Einsatz von Claude im Investment-Banking-Alltag. Der Kurs richtet sich an neue Mitarbeitende und Interns und vermittelt Grundlagen, Anwendungsfälle und praktische Workflows für typische Aufgaben im Team — mit klarem Blick auf Sicherheit und Einsatzgrenzen.',
    'hero.stat.modules':      'Module',
    'hero.stat.quizzes':      'Quizze',
    'hero.stat.time':         'Lernzeit',
    'hero.stat.time.unit':    'Std.',
    'hero.stat.certificate':  'Teilnahmezertifikat',
    'hero.cta.start':         'Curriculum starten',
    'hero.cta.team':          'Über das IEG Team',

    /* Curriculum */
    'curriculum.eyebrow':     '/ Curriculum',
    'curriculum.title':       'Acht Module für den strukturierten Einstieg.',
    'curriculum.lede':        'Jedes Modul schließt mit einem Quiz ab. Nach erfolgreichem Abschluss wird das nächste Modul freigeschaltet. Nach allen acht Modulen folgt eine Abschlussprüfung mit internem Teilnahmezertifikat.',
    'curriculum.preview':     'Vorschau-Modus: Alle Module ohne Quiz-Freischaltung anzeigen.',
    'curriculum.preview.btn': 'Vorschau aktivieren',
    'curriculum.preview.btn.off': 'Vorschau deaktivieren',
    'curriculum.progress':    '0 von 8 Modulen abgeschlossen',

    /* Team */
    'team.eyebrow':   '/ Team',
    'team.title':     'Die Menschen hinter IEG',
    'team.lede':      'Eine kurze Einführung in das IEG Team und ausgewählte Ansprechpartner. Besonders hilfreich für neue Praktikantinnen, Praktikanten und Analystinnen bzw. Analysten im Onboarding.',
    'team.locations': 'Standorte',

    /* Team bios */
    'team.heilmann.bio':    'Mitbegründer und Global CEO der IEG Investment Banking Group. Über 30 Jahre Erfahrung als Tech Investment Banker, Entrepreneur und Investor. Leidenschaft für digitale Gesundheit, Blockchain-Protokolle und Robotik (IoT).',
    'team.heide.bio':       'Managing Partner mit über 15 Jahren Erfahrung. Global Head des SmartCity-Teams — treibt Innovationen in CleanTech, eMobility, Energy Transition und Software.',
    'team.wyrowinski.bio':  'Investment Banking als unermüdliches Streben nach finanzieller Exzellenz — Schwerpunkt auf Deep Tech (insb. Robotik) und Cybersecurity.',
    'team.specht.bio':      'M&A als perfekte Mischung aus Strategie, Menschen und Wandel. Fokussiert auf HealthTech und CleanTech.',
    'team.kapoor.bio':      '20+ Jahre Investment Banking. Managing Partner für Südostasien. Spezialist für TMT und cross-border M&A mit asiatischen Unicorns.',
    'team.qumsieh.bio':     'Managing Partner Middle East. Über 20 Jahre Erfahrung in der Begleitung wachstumsstarker Tech- und Startup-Unternehmen durch komplexe Transaktionen.',
    'team.gorrissen.bio':   'Tech Investment Banker mit Stationen in Oslo, London, Paris und New York. Ehemals BCG, Microsoft Executive — mit Leidenschaft für Software.',
    'team.rossoff.bio':     'Harvard MBA. Ehemals JP Morgan, Banc of America, Dillon Read. Associated Partner bei IEG seit 2015.',
    'team.schwemme.bio':    'Bringt Menschen und Prozesse zusammen. Erste Anlaufstelle für neue Teammitglieder in Sachen Onboarding und Office.',
    'team.krassowsky.bio':  'Strukturiert, kommunikativ, zuverlässig — Lena koordiniert das Tagesgeschäft und ist die richtige Adresse für organisatorische Fragen.',
    'team.dubber.bio':      'Schwerpunkt auf HealthTech und FinTech. Schätzt das Navigieren komplexer finanzieller Transaktionen und kollaboratives Arbeiten.',

    /* Certificate */
    'cert.eyebrow':   '/ Zertifikat',
    'cert.title':     'Ihr IEG Claude Teilnahmezertifikat',
    'cert.lede':      'Schließen Sie alle acht Module und die Abschlussprüfung ab, um Ihr persönliches, auf Ihren Namen ausgestelltes Zertifikat zu erhalten.',
    'cert.status':    'Status: noch nicht freigeschaltet',

    /* Name modal */
    'modal.name.title':       'Wer schreibt die Abschlussprüfung?',
    'modal.name.lede':        'Bitte geben Sie Ihren vollständigen Namen ein. Dieser erscheint auf Ihrem Zertifikat.',
    'modal.name.placeholder': 'z. B. Max Mustermann',
    'modal.name.cta':         'Zur Abschlussprüfung',

    /* Footer */
    'footer.academy':   'Academy',
    'footer.internal':  'Internal',
    'footer.contact':   'Kontakt',
    'footer.about':     'Über uns',
    'footer.reset':     'Fortschritt zurücksetzen',
    'footer.copy':      '© 2026 IEG Investment Banking Group · Internal Training Material · v1.0',

    /* Module cards — dynamic */
    'mod.status.completed':   'Abgeschlossen',
    'mod.status.available':   'Verfügbar',
    'mod.status.next':        '▶ Jetzt verfügbar',
    'mod.status.locked':      'Erst nach Modul ',
    'mod.action.repeat':      'Wiederholen',
    'mod.action.start':       'Jetzt starten',
    'mod.action.locked':      '🔒 Gesperrt',

    /* Final exam card */
    'final.meta':             'Abschlussprüfung · 40 Fragen',
    'final.title':            'IEG Claude Academy — Abschlussprüfung',
    'final.desc':             'Das Abschluss-Examen über alle Module. Pass-Threshold: 70 %.',
    'final.status.passed':    'Bestanden',
    'final.status.available': 'Verfügbar',
    'final.status.locked':    'Alle Module abschließen',
    'final.action.repeat':    'Wiederholen',
    'final.action.start':     'Prüfung starten',

    /* Progress */
    'progress.of':            ' von ',
    'progress.modules':       ' Modulen abgeschlossen',

    /* Quiz UI */
    'quiz.back':              '← Zurück',
    'quiz.next':              'Nächste →',
    'quiz.finish':            'Auswerten →',
    'quiz.choose':            'Antwort wählen',
    'quiz.correct':           '✓ Richtig.',
    'quiz.wrong':             '✗ Nicht ganz.',
    'quiz.result.pass':       'Modul abgeschlossen',
    'quiz.result.fail':       'Knapp daneben',
    'quiz.result.pass.final': 'Bestanden!',
    'quiz.result.unlocked':   'Nächstes Kapitel freigeschaltet.',
    'quiz.result.cert':       'Ihr Zertifikat wartet.',
    'quiz.result.min':        'Mindestens ',
    'quiz.result.min2':       '% nötig.',
    'quiz.result.continue':   'Weiter →',
    'quiz.result.retry':      'Nochmal',
    'quiz.result.tocert':     'Zum Zertifikat →',

    /* Exam UI */
    'exam.eyebrow':           'Abschlussprüfung',
    'exam.title':             'IEG Claude Academy — Abschlussprüfung',
    'exam.answered':          'Beantwortet',
    'exam.question':          'Frage',
    'exam.of':                ' von ',
    'exam.restored':          'Dein Prüfungsfortschritt wurde automatisch gespeichert und wiederhergestellt.',
    'exam.flag':              'Zur Überprüfung markieren',
    'exam.unflag':            'Markierung entfernen',
    'exam.prev':              '← Zurück',
    'exam.next':              'Weiter →',
    'exam.submit':            'Prüfung abgeben',
    'exam.start':             'Prüfung starten',
    'exam.intro.q':           ' Fragen',
    'exam.intro.pass':        '% zum Bestehen',
    'exam.intro.time':        ' Min. Bearbeitungszeit',
    'exam.intro.rule1':       'Die Zeit läuft ab dem Start. Bei Ablauf wird die Prüfung automatisch abgegeben.',
    'exam.intro.rule2':       'Ihr Fortschritt wird automatisch gespeichert — Sie können die Prüfung jederzeit fortsetzen.',
    'exam.intro.rule3':       'Sie können Fragen frei wählen, beantworten, ändern und zur Überprüfung markieren.',
    'exam.intro.rule4':       'Die Auswertung erfolgt erst nach der endgültigen Abgabe.',
    'exam.confirm.eyebrow':   'Bestätigung',
    'exam.confirm.title':     'Prüfung endgültig abgeben?',
    'exam.confirm.lede':      'Nach der Abgabe kann die Prüfung nicht mehr bearbeitet werden. Die Auswertung erfolgt sofort.',
    'exam.confirm.all':       'Alle ',
    'exam.confirm.all2':      ' Fragen beantwortet.',
    'exam.confirm.unanswered':'noch unbeantwortet',
    'exam.confirm.flagged':   'zur Überprüfung markiert',
    'exam.confirm.question':  ' Frage',
    'exam.confirm.questions': ' Fragen',
    'exam.confirm.back':      '← Zurück zur Prüfung',
    'exam.confirm.final':     'Endgültig abgeben',
    'exam.result.pass':       'Bestanden!',
    'exam.result.fail':       'Nicht bestanden',
    'exam.result.auto':       'Die Bearbeitungszeit ist abgelaufen — die Prüfung wurde automatisch abgegeben.',
    'exam.result.cert':       'Ihr Zertifikat wartet.',
    'exam.result.min':        'Mindestens ',
    'exam.result.min2':       '% nötig. Sie können die Prüfung erneut versuchen.',
    'exam.result.tocert':     'Zum Zertifikat →',
    'exam.result.retry':      'Erneut versuchen',
    'exam.result.close':      'Schließen',

    /* Certificate */
    'cert.download':          'Als PDF speichern',
    'cert.heading':           'Ihr Zertifikat',
    'cert.lede2':             'Herzlichen Glückwunsch — laden Sie Ihr persönliches Zertifikat als PDF herunter.',
    'cert.certifies':         'Hiermit wird bestätigt, dass',
    'cert.completed':         'den folgenden Kurs erfolgreich abgeschlossen hat:',
    'cert.program.sub':       'Künstliche Intelligenz im Investment Banking · 7 Module · Final Examination',
    'cert.date.label':        'Abschlussdatum',
    'cert.cred.label':        'Credential ID',
    'cert.issued.label':      'Ausgestellt von',
    'cert.issuing.line':      'IEG Investment Banking Group · Internal Training',
    'cert.status.exam':       'Status: Prüfung verfügbar',
    'cert.status.progress':   'Status: ',

    /* Misc */
    'reset.confirm':          'Gesamten Lernfortschritt zurücksetzen?',
    'preview.active':         '✓ Vorschau aktiv',
    'preview.enable':         'Vorschau aktivieren',
  },

  en: {
    /* Navigation */
    'nav.home':         'Overview',
    'nav.curriculum':   'Curriculum',
    'nav.team':         'Team',
    'nav.certificate':  'Certificate',
    'nav.progress':     'Progress',
    'nav.logout':       'Log out',

    /* Hero */
    'hero.eyebrow':     'Internal Training Programme · Onboarding for Analysts & Interns · 2026',
    'hero.title':       'Claude in Investment Banking',
    'hero.lede':        'An eight-part introductory course for the structured use of Claude in everyday investment banking. The course is aimed at new staff and interns and covers fundamentals, use cases and practical workflows for typical team tasks — with a clear focus on security and limitations.',
    'hero.stat.modules':      'Modules',
    'hero.stat.quizzes':      'Quizzes',
    'hero.stat.time':         'Learning time',
    'hero.stat.time.unit':    'hrs.',
    'hero.stat.certificate':  'Certificate of completion',
    'hero.cta.start':         'Start curriculum',
    'hero.cta.team':          'About the IEG team',

    /* Curriculum */
    'curriculum.eyebrow':     '/ Curriculum',
    'curriculum.title':       'Eight modules for a structured start.',
    'curriculum.lede':        'Each module concludes with a quiz. After passing, the next module is unlocked. After all eight modules, a final exam leads to an internal certificate of completion.',
    'curriculum.preview':     'Preview mode: show all modules without quiz gating.',
    'curriculum.preview.btn': 'Enable preview',
    'curriculum.preview.btn.off': 'Disable preview',
    'curriculum.progress':    '0 of 8 modules completed',

    /* Team */
    'team.eyebrow':   '/ Team',
    'team.title':     'The people behind IEG',
    'team.lede':      'A brief introduction to the IEG team and key contacts. Particularly helpful for new interns and analysts during onboarding.',
    'team.locations': 'Locations',

    /* Team bios */
    'team.heilmann.bio':    'Co-founder and Global CEO of IEG Investment Banking Group. Over 30 years of experience as a tech investment banker, entrepreneur and investor. Passionate about digital health, blockchain protocols and robotics (IoT).',
    'team.heide.bio':       'Managing Partner with over 15 years of experience. Global Head of the SmartCity team — driving innovation in CleanTech, eMobility, energy transition and software.',
    'team.wyrowinski.bio':  'Investment banking as a relentless pursuit of financial excellence — focused on Deep Tech (especially robotics) and cybersecurity.',
    'team.specht.bio':      'M&A as the perfect blend of strategy, people and change. Focused on HealthTech and CleanTech.',
    'team.kapoor.bio':      '20+ years in investment banking. Managing Partner for Southeast Asia. Specialist in TMT and cross-border M&A with Asian unicorns.',
    'team.qumsieh.bio':     'Managing Partner Middle East. Over 20 years of experience guiding high-growth tech and startup companies through complex transactions.',
    'team.gorrissen.bio':   'Tech investment banker with stints in Oslo, London, Paris and New York. Former BCG, Microsoft Executive — passionate about software.',
    'team.rossoff.bio':     'Harvard MBA. Formerly JP Morgan, Banc of America, Dillon Read. Associated Partner at IEG since 2015.',
    'team.schwemme.bio':    'Brings people and processes together. First point of contact for new team members on onboarding and office matters.',
    'team.krassowsky.bio':  'Structured, communicative, reliable — Lena coordinates day-to-day operations and is the right person for organisational questions.',
    'team.dubber.bio':      'Focused on HealthTech and FinTech. Values navigating complex financial transactions and collaborative working.',

    /* Certificate */
    'cert.eyebrow':   '/ Certificate',
    'cert.title':     'Your IEG Claude Certificate of Completion',
    'cert.lede':      'Complete all eight modules and the final exam to receive your personal certificate issued in your name.',
    'cert.status':    'Status: not yet unlocked',

    /* Name modal */
    'modal.name.title':       'Who is taking the final exam?',
    'modal.name.lede':        'Please enter your full name. It will appear on your certificate.',
    'modal.name.placeholder': 'e.g. Jane Smith',
    'modal.name.cta':         'Go to final exam',

    /* Footer */
    'footer.academy':   'Academy',
    'footer.internal':  'Internal',
    'footer.contact':   'Contact',
    'footer.about':     'About us',
    'footer.reset':     'Reset progress',
    'footer.copy':      '© 2026 IEG Investment Banking Group · Internal Training Material · v1.0',

    /* Module cards — dynamic */
    'mod.status.completed':   'Completed',
    'mod.status.available':   'Available',
    'mod.status.next':        '▶ Available now',
    'mod.status.locked':      'After module ',
    'mod.action.repeat':      'Review',
    'mod.action.start':       'Start now',
    'mod.action.locked':      '🔒 Locked',

    /* Final exam card */
    'final.meta':             'Final exam · 40 questions',
    'final.title':            'IEG Claude Academy — Final Exam',
    'final.desc':             'The final examination covering all modules. Pass threshold: 70%.',
    'final.status.passed':    'Passed',
    'final.status.available': 'Available',
    'final.status.locked':    'Complete all modules first',
    'final.action.repeat':    'Retake',
    'final.action.start':     'Start exam',

    /* Progress */
    'progress.of':            ' of ',
    'progress.modules':       ' modules completed',

    /* Quiz UI */
    'quiz.back':              '← Back',
    'quiz.next':              'Next →',
    'quiz.finish':            'Submit →',
    'quiz.choose':            'Choose an answer',
    'quiz.correct':           '✓ Correct.',
    'quiz.wrong':             '✗ Not quite.',
    'quiz.result.pass':       'Module completed',
    'quiz.result.fail':       'Not quite there',
    'quiz.result.pass.final': 'Passed!',
    'quiz.result.unlocked':   'Next chapter unlocked.',
    'quiz.result.cert':       'Your certificate is waiting.',
    'quiz.result.min':        'At least ',
    'quiz.result.min2':       '% required.',
    'quiz.result.continue':   'Continue →',
    'quiz.result.retry':      'Try again',
    'quiz.result.tocert':     'Go to certificate →',

    /* Exam UI */
    'exam.eyebrow':           'Final exam',
    'exam.title':             'IEG Claude Academy — Final Exam',
    'exam.answered':          'Answered',
    'exam.question':          'Question',
    'exam.of':                ' of ',
    'exam.restored':          'Your exam progress was automatically saved and restored.',
    'exam.flag':              'Flag for review',
    'exam.unflag':            'Remove flag',
    'exam.prev':              '← Back',
    'exam.next':              'Next →',
    'exam.submit':            'Submit exam',
    'exam.start':             'Start exam',
    'exam.intro.q':           ' questions',
    'exam.intro.pass':        '% to pass',
    'exam.intro.time':        ' min. time limit',
    'exam.intro.rule1':       'The timer starts when you begin. The exam is submitted automatically when time runs out.',
    'exam.intro.rule2':       'Your progress is saved automatically — you can resume the exam at any time.',
    'exam.intro.rule3':       'You can freely navigate between questions, change answers and flag questions for review.',
    'exam.intro.rule4':       'Results are shown only after final submission.',
    'exam.confirm.eyebrow':   'Confirmation',
    'exam.confirm.title':     'Submit exam?',
    'exam.confirm.lede':      'Once submitted, the exam cannot be edited. Results are shown immediately.',
    'exam.confirm.all':       'All ',
    'exam.confirm.all2':      ' questions answered.',
    'exam.confirm.unanswered':'still unanswered',
    'exam.confirm.flagged':   'flagged for review',
    'exam.confirm.question':  ' question',
    'exam.confirm.questions': ' questions',
    'exam.confirm.back':      '← Back to exam',
    'exam.confirm.final':     'Submit final',
    'exam.result.pass':       'Passed!',
    'exam.result.fail':       'Not passed',
    'exam.result.auto':       'Time is up — the exam was submitted automatically.',
    'exam.result.cert':       'Your certificate is waiting.',
    'exam.result.min':        'At least ',
    'exam.result.min2':       '% required. You may try again.',
    'exam.result.tocert':     'Go to certificate →',
    'exam.result.retry':      'Try again',
    'exam.result.close':      'Close',

    /* Certificate */
    'cert.download':          'Save as PDF',
    'cert.heading':           'Your Certificate',
    'cert.lede2':             'Congratulations — download your personal certificate as a PDF.',
    'cert.certifies':         'This is to certify that',
    'cert.completed':         'has successfully completed the following course:',
    'cert.program.sub':       'Artificial Intelligence in Investment Banking · 7 Modules · Final Examination',
    'cert.date.label':        'Completion date',
    'cert.cred.label':        'Credential ID',
    'cert.issued.label':      'Issued by',
    'cert.issuing.line':      'IEG Investment Banking Group · Internal Training',
    'cert.status.exam':       'Status: exam available',
    'cert.status.progress':   'Status: ',

    /* Misc */
    'reset.confirm':          'Reset all learning progress?',
    'preview.active':         '✓ Preview active',
    'preview.enable':         'Enable preview',
  },
};

/* ── Toggle logic ── */
(function () {
  const STORAGE_KEY = 'ieg_lang';

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || 'de';
  }

  function t(key) {
    const lang = getLang();
    return (I18N[lang] && I18N[lang][key]) || (I18N['de'][key]) || key;
  }

  function applyLang() {
    const lang = getLang();

    /* Update all elements with data-i18n */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = (I18N[lang] && I18N[lang][key]) || (I18N['de'][key]) || key;
      if (el.tagName === 'INPUT') {
        el.placeholder = val;
      } else {
        el.textContent = val;
      }
    });

    /* Update all elements with data-i18n-html (for content with HTML entities) */
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const val = (I18N[lang] && I18N[lang][key]) || (I18N['de'][key]) || key;
      el.innerHTML = val;
    });

    /* Update html lang attribute */
    document.documentElement.lang = lang;

    /* Update toggle button label */
    const btn = document.getElementById('langToggleBtn');
    if (btn) btn.textContent = lang === 'de' ? 'EN' : 'DE';

    /* Fire event so app.js / module.js can re-render dynamic content */
    document.dispatchEvent(new CustomEvent('ieg:langchange', { detail: { lang } }));
  }

  function toggleLang() {
    const next = getLang() === 'de' ? 'en' : 'de';
    localStorage.setItem(STORAGE_KEY, next);
    applyLang();
  }

  /* Expose globally */
  window.t      = t;
  window.getLang = getLang;
  window.toggleLang = toggleLang;

  /* Apply on DOM ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyLang);
  } else {
    applyLang();
  }
})();
