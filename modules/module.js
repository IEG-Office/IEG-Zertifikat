/* ============================================
   IEG Claude Academy — Module Page Script
   Quiz-Engine, Fortschritts-Tracking, Dynamic Content
   ============================================ */

const STORAGE_KEY = 'ieg-academy-progress-v1';

const _SB_URL = 'https://gpyxgspdikztuyesgoaz.supabase.co';
const _SB_KEY = 'sb_publishable_CAhKmPsjz79xKUhhxg0bww_D3v-7b5y';

// ── i18n helper (graceful fallback if i18n.js not loaded yet) ──
function mt(key, vars) {
  var val = (typeof window.t === 'function') ? window.t(key) : key;
  if (vars) {
    Object.keys(vars).forEach(function(k) {
      val = val.replace(new RegExp('\\{' + k + '\\}', 'g'), vars[k]);
    });
  }
  return val;
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) {}
  return { completed: [], finalPassed: false, userName: '', completionDate: '' };
}

function saveState(state) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
}

let _sbClientPromise = null;
function getSupabaseClient() {
  if (window.sb) return Promise.resolve(window.sb);
  if (_sbClientPromise) return _sbClientPromise;
  _sbClientPromise = new Promise((resolve) => {
    if (window.supabase) {
      window.sb = window.supabase.createClient(_SB_URL, _SB_KEY);
      return resolve(window.sb);
    }
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js';
    s.onload = () => { window.sb = window.supabase.createClient(_SB_URL, _SB_KEY); resolve(window.sb); };
    s.onerror = () => resolve(null);
    document.head.appendChild(s);
  });
  return _sbClientPromise;
}

async function saveProgressToSupabase(state) {
  try {
    const sb = await getSupabaseClient();
    if (!sb) return;
    const sess = await sb.auth.getSession();
    const session = sess && sess.data ? sess.data.session : null;
    if (!session || !session.user) return;
    await sb.from('user_progress').upsert({
      user_id:           session.user.id,
      completed_modules: state.completed || [],
      final_passed:      state.finalPassed || false,
      final_score:       state.finalScore  || 0,
      completion_date:   state.completionDate || null
    }, { onConflict: 'user_id' });
  } catch (e) {
    console.warn('Supabase save error (module):', e.message);
  }
}

document.addEventListener('DOMContentLoaded', getSupabaseClient);

// ---------- DYNAMIC CONTENT ----------
function renderDynamicContent() {
  if (typeof CURRICULUM === 'undefined') return;

  // Use English curriculum if language is set to EN
  const lang = (typeof window.getLang === 'function') ? window.getLang() : 'de';
  const curriculum = (lang === 'en' && typeof CURRICULUM_EN !== 'undefined') ? CURRICULUM_EN : CURRICULUM;

  const mod = curriculum.find(m => m.id === MODULE_ID);
  if (!mod) return;

  const container = document.getElementById('dynamicContent');
  if (!container) return;

  let html = '';

  if (mod.videos && mod.videos.length > 0) {
    mod.videos.forEach(video => {
      const ytMatch = (video.url || '').match(/(?:embed\/|v=|youtu\.be\/)([A-Za-z0-9_-]{11})/);
      const watchUrl = video.watchUrl || (ytMatch ? `https://www.youtube.com/watch?v=${ytMatch[1]}` : null);
      const thumbUrl = ytMatch ? `https://img.youtube.com/vi/${ytMatch[1]}/hqdefault.jpg` : null;

      if (thumbUrl && watchUrl) {
        html += `
          <div class="video-embed video-link-wrapper">
            <a href="${watchUrl}" target="_blank" rel="noopener" class="video-thumb-link" aria-label="${video.title || ''}">
              <img src="${thumbUrl}" alt="${video.title || ''}" class="video-thumb">
              <div class="video-play-btn"><svg viewBox="0 0 24 24" width="48" height="48" fill="white"><polygon points="5,3 19,12 5,21"/></svg></div>
            </a>
          </div>`;
      } else {
        html += `
          <div class="video-embed">
            <iframe src="${video.url}" title="${video.title || ''}"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>`;
      }
      if (video.caption) html += `<div class="video-caption">${video.caption}</div>`;
    });
  }

  if (mod.images && mod.images.length > 0) {
    mod.images.forEach(image => {
      html += `<img src="${image.src}" alt="${image.alt || ''}" class="module-image">`;
      if (image.caption) html += `<div class="image-caption">${image.caption}</div>`;
    });
  }

  if (mod.longContent && mod.longContent.trim() && !mod.longContent.includes('<!-- Hier kannst du')) {
    html += mod.longContent;
  }

  container.innerHTML = html;
}

// Run on DOMContentLoaded — CURRICULUM_EN may not be ready yet, use small delay
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(renderDynamicContent, 50);
});

// Safety net: run again when all scripts are fully loaded
window.addEventListener('load', renderDynamicContent);

// Re-render when language changes
document.addEventListener('ieg:langchange', renderDynamicContent);

// ---------- PERSONAL NOTES ----------
const NOTES_KEY = 'ieg-academy-notes-v1';

function loadAllNotes() {
  try {
    const saved = localStorage.getItem(NOTES_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) {}
  return {};
}

function getModuleNote() {
  const all = loadAllNotes();
  return all[MODULE_ID] || '';
}

function saveModuleNote(text) {
  try {
    const all = loadAllNotes();
    if (text && text.trim()) all[MODULE_ID] = text; else delete all[MODULE_ID];
    localStorage.setItem(NOTES_KEY, JSON.stringify(all));
  } catch (e) {}
}

let _notesSaveTimer = null;
function onNoteInput(textarea) {
  clearTimeout(_notesSaveTimer);
  const indicator = document.getElementById('notesSaveIndicator');
  if (indicator) indicator.textContent = '';
  _notesSaveTimer = setTimeout(function () {
    saveModuleNote(textarea.value);
    if (indicator) {
      indicator.textContent = mt('mod.notes.saved');
      clearTimeout(indicator._fadeTimer);
      indicator._fadeTimer = setTimeout(function () { indicator.textContent = ''; }, 2000);
    }
  }, 500);
}

function escapeForTextarea(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function renderNotesSection() {
  const main = document.querySelector('main.module-content');
  if (!main || document.getElementById('moduleNotesSection')) return;
  const existing = getModuleNote();
  const html = `
    <section id="moduleNotesSection" class="notes-section">
      <div class="notes-header">
        <div class="notes-title">${mt('mod.notes.title')}</div>
        <span class="notes-save-indicator" id="notesSaveIndicator"></span>
      </div>
      <textarea id="moduleNotesTextarea" class="notes-textarea"
        placeholder="${mt('mod.notes.placeholder')}"
        oninput="onNoteInput(this)">${escapeForTextarea(existing)}</textarea>
    </section>`;
  main.insertAdjacentHTML('afterend', html);
}

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(renderNotesSection, 60);
});

// ---------- SECTION PROGRESS BAR ----------
function initSectionProgressBar() {
  const main = document.querySelector('main.module-content');
  if (!main || document.getElementById('sectionProgressBar')) return;

  const bar = document.createElement('div');
  bar.id = 'sectionProgressBar';
  bar.className = 'section-progress-bar';
  bar.innerHTML = '<div class="section-progress-fill" id="sectionProgressFill"></div>';
  document.body.appendChild(bar);

  function update() {
    const total = main.scrollHeight - window.innerHeight;
    var pct;
    if (total <= 0) {
      pct = window.scrollY > 0 ? 100 : 0;
    } else {
      var docTop = main.offsetTop;
      var docHeight = main.offsetHeight;
      var winHeight = window.innerHeight;
      var scrollTop = window.scrollY;
      var progressStart = docTop - winHeight * 0.2;
      var progressRange = docHeight + winHeight * 0.2;
      pct = ((scrollTop - progressStart) / progressRange) * 100;
    }
    pct = Math.max(0, Math.min(100, pct));
    const fill = document.getElementById('sectionProgressFill');
    if (fill) fill.style.width = pct + '%';
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
}

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(initSectionProgressBar, 60);
});

// ---------- QUIZ ENGINE ----------
let currentQuiz = null;
const QUIZ_PROGRESS_KEY = 'ieg-academy-quiz-progress-v1';

function loadQuizProgress() {
  try {
    const saved = localStorage.getItem(QUIZ_PROGRESS_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) {}
  return {};
}

function saveQuizProgress() {
  if (!currentQuiz) return;
  try {
    const all = loadQuizProgress();
    all[MODULE_ID] = { currentIndex: currentQuiz.currentIndex, answers: currentQuiz.answers };
    localStorage.setItem(QUIZ_PROGRESS_KEY, JSON.stringify(all));
  } catch (e) {}
}

function clearQuizProgress() {
  try {
    const all = loadQuizProgress();
    delete all[MODULE_ID];
    localStorage.setItem(QUIZ_PROGRESS_KEY, JSON.stringify(all));
  } catch (e) {}
}

function startQuiz() {
  // Use language-appropriate quiz questions
  const lang = (typeof window.getLang === 'function') ? window.getLang() : 'de';
  const curriculum = (lang === 'en' && typeof CURRICULUM_EN !== 'undefined') ? CURRICULUM_EN : CURRICULUM;
  const mod = curriculum.find(m => m.id === MODULE_ID);
  const quiz = mod ? mod.quiz : MODULE_QUIZ;

  const saved = loadQuizProgress()[MODULE_ID];
  const validSaved = saved && Array.isArray(saved.answers) && saved.answers.length === quiz.length;

  currentQuiz = {
    moduleId: MODULE_ID,
    questions: quiz,
    currentIndex: validSaved ? saved.currentIndex : 0,
    answers: validSaved ? saved.answers.slice() : new Array(quiz.length).fill(null)
  };

  document.getElementById('quizModal').classList.add('active');
  document.body.style.overflow = 'hidden';
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const q = currentQuiz.questions[currentQuiz.currentIndex];
  const idx = currentQuiz.currentIndex;
  const total = currentQuiz.questions.length;
  const userAnswer = currentQuiz.answers[idx];
  const answered = userAnswer !== null;
  const nStr = String(MODULE_ID).padStart(2, '0');

  const dotsHtml = currentQuiz.questions.map((_, i) => {
    let cls = 'quiz-dot';
    if (i === idx) cls += ' active';
    else if (currentQuiz.answers[i] !== null) cls += ' done';
    return `<div class="${cls}"></div>`;
  }).join('');

  const optionsHtml = q.options.map((opt, i) => {
    let cls = 'quiz-option';
    if (answered) {
      if (i === q.correct) cls += ' correct';
      else if (i === userAnswer) cls += ' wrong';
    }
    return `
      <button class="${cls}" ${answered ? 'disabled' : ''} onclick="answerQuestion(${i})">
        <span class="quiz-option-marker">${String.fromCharCode(65 + i)}</span>
        <span>${opt}</span>
      </button>`;
  }).join('');

  const explanationHtml = answered ? `
    <div class="quiz-explanation">
      <strong>${userAnswer === q.correct ? mt('mod.quiz.correct') : mt('mod.quiz.wrong')}</strong> ${q.explanation}
    </div>` : '';

  const isLast = idx === total - 1;
  const allAnswered = currentQuiz.answers.every(a => a !== null);

  const navHtml = `
    <div class="quiz-nav">
      <button class="btn btn-ghost" onclick="prevQuestion()" ${idx === 0 ? 'disabled style="opacity:0.3"' : ''}>
        ${mt('mod.quiz.back')}
      </button>
      ${answered
        ? (isLast && allAnswered
            ? `<button class="btn btn-primary" onclick="finishQuiz()">${mt('mod.quiz.finish')}</button>`
            : `<button class="btn btn-primary" onclick="nextQuestion()" ${idx === total - 1 ? 'disabled style="opacity:0.5"' : ''}>${mt('mod.quiz.next')}</button>`)
        : `<span style="color:var(--text-faint);font-size:13px;align-self:center;">${mt('mod.quiz.choose')}</span>`
      }
    </div>`;

  document.getElementById('quizModalBody').innerHTML = `
    <div class="quiz-header">
      <div class="quiz-modal-eyebrow">${mt('mod.quiz.eyebrow', {n: nStr})}</div>
      <div class="quiz-title">${mt('mod.quiz.question', {i: idx + 1, total})}</div>
      <div class="quiz-subtitle">${mt('mod.quiz.subtitle', {total, pass: PASS_THRESHOLD})}</div>
      <div class="quiz-keyhint">${mt('mod.quiz.keyhint')}</div>
    </div>
    <div class="quiz-progress">${dotsHtml}</div>
    <div class="quiz-question">${q.q}</div>
    <div class="quiz-options">${optionsHtml}</div>
    ${explanationHtml}
    ${navHtml}`;
}

function answerQuestion(optionIndex) {
  currentQuiz.answers[currentQuiz.currentIndex] = optionIndex;
  saveQuizProgress();
  renderQuizQuestion();
}

function nextQuestion() {
  if (currentQuiz.currentIndex < currentQuiz.questions.length - 1) {
    currentQuiz.currentIndex++;
    saveQuizProgress();
    renderQuizQuestion();
  }
}

function prevQuestion() {
  if (currentQuiz.currentIndex > 0) {
    currentQuiz.currentIndex--;
    saveQuizProgress();
    renderQuizQuestion();
  }
}

function finishQuiz() {
  const total = currentQuiz.questions.length;
  let correct = 0;
  currentQuiz.questions.forEach((q, i) => { if (currentQuiz.answers[i] === q.correct) correct++; });
  const percent = Math.round((correct / total) * 100);
  const passed = percent >= PASS_THRESHOLD;
  const nStr = String(MODULE_ID).padStart(2, '0');

  clearQuizProgress();

  if (passed) {
    const state = loadState();
    if (!state.completed.includes(MODULE_ID)) state.completed.push(MODULE_ID);
    saveState(state);
    saveProgressToSupabase(state);
  }

  updateNextModuleLock();

  const msg = passed
    ? mt('mod.quiz.result.msg.pass', {n: nStr})
    : mt('mod.quiz.result.msg.fail', {pass: PASS_THRESHOLD});

  const nextModuleId = MODULE_ID + 1;
  const hasNext = nextModuleId <= 9; // fixed off-by-one + extended for module 09

  // Keep the current language when linking to the next module (.en.html for English)
  const langSuffix = ((typeof window.getLang === 'function') && window.getLang() === 'en') ? '.en.html' : '.html';

  const actions = passed
    ? (hasNext
        ? `<a href="modul-${String(nextModuleId).padStart(2, '0')}${langSuffix}" class="btn btn-primary">${mt('mod.quiz.result.next', {n: String(nextModuleId).padStart(2,'0')})}</a>
           <a href="../index.html#curriculum" class="btn btn-ghost">${mt('mod.quiz.result.overview')}</a>`
        : `<a href="../index.html#certificate" class="btn btn-primary">${mt('mod.quiz.result.final')}</a>
           <a href="../index.html#curriculum" class="btn btn-ghost">${mt('mod.quiz.result.overview')}</a>`)
    : `<button class="btn btn-primary" onclick="restartQuiz()">${mt('mod.quiz.retry')}</button>
       <button class="btn btn-ghost" onclick="closeQuiz()">${mt('mod.quiz.reread')}</button>`;

  document.getElementById('quizModalBody').innerHTML = `
    <div class="quiz-result">
      <div class="quiz-result-icon ${passed ? 'pass' : 'fail'}">${passed ? '✓' : '!'}</div>
      <div class="quiz-result-title">${passed ? mt('mod.quiz.result.pass') : mt('mod.quiz.result.fail')}</div>
      <div class="quiz-result-score">${correct} / ${total} ${mt('mod.quiz.result.correct')} · ${percent}%</div>
      <div class="quiz-result-msg">${msg}</div>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">${actions}</div>
    </div>`;

  // Clear the active quiz state so keyboard shortcuts (1-4, Enter, arrows) no longer
  // act on a finished quiz and accidentally redraw the question view over the result screen.
  currentQuiz = null;
}

function restartQuiz() { clearQuizProgress(); startQuiz(); }

function closeQuiz() {
  document.getElementById('quizModal').classList.remove('active');
  document.body.style.overflow = '';
  currentQuiz = null;
}

document.addEventListener('keydown', (e) => {
  const modalActive = document.getElementById('quizModal').classList.contains('active');
  if (!modalActive) return;

  if (e.key === 'Escape') { closeQuiz(); return; }
  if (!currentQuiz) return;

  // Number keys 1-4 select an answer option (only if not yet answered)
  if (['1', '2', '3', '4'].includes(e.key)) {
    const idx = currentQuiz.currentIndex;
    const already = currentQuiz.answers[idx] !== null;
    const optionCount = currentQuiz.questions[idx].options.length;
    const optionIndex = parseInt(e.key, 10) - 1;
    if (!already && optionIndex < optionCount) {
      e.preventDefault();
      answerQuestion(optionIndex);
    }
    return;
  }

  // Enter advances to next question, or finishes the quiz on the last question
  if (e.key === 'Enter') {
    const idx = currentQuiz.currentIndex;
    const total = currentQuiz.questions.length;
    const answered = currentQuiz.answers[idx] !== null;
    if (!answered) return;
    e.preventDefault();
    const isLast = idx === total - 1;
    const allAnswered = currentQuiz.answers.every(a => a !== null);
    if (isLast && allAnswered) finishQuiz();
    else if (idx < total - 1) nextQuestion();
    return;
  }

  // Arrow keys navigate between already-visited questions
  if (e.key === 'ArrowRight') { e.preventDefault(); nextQuestion(); return; }
  if (e.key === 'ArrowLeft') { e.preventDefault(); prevQuestion(); return; }
});

// ---------- NEXT MODULE LOCK ----------
function isCurrentModuleCompleted() {
  const s = loadState();
  return Array.isArray(s.completed) && s.completed.indexOf(MODULE_ID) !== -1;
}

function updateNextModuleLock() {
  const card = document.querySelector('.nav-card-next');
  if (!card) return;
  const threshold = (typeof PASS_THRESHOLD !== 'undefined') ? PASS_THRESHOLD : 70;

  if (isCurrentModuleCompleted()) {
    card.classList.remove('nav-card-locked');
    if (card.dataset.lockedHref) { card.setAttribute('href', card.dataset.lockedHref); delete card.dataset.lockedHref; }
    card.removeAttribute('aria-disabled');
    const hint = card.querySelector('.nav-card-lock-hint');
    if (hint) hint.remove();
  } else {
    card.classList.add('nav-card-locked');
    card.setAttribute('aria-disabled', 'true');
    const href = card.getAttribute('href');
    if (href) { card.dataset.lockedHref = href; card.removeAttribute('href'); }
    if (!card.querySelector('.nav-card-lock-hint')) {
      const hint = document.createElement('div');
      hint.className = 'nav-card-lock-hint';
      hint.textContent = mt('mod.quiz.locked', {pass: threshold});
      card.appendChild(hint);
    }
  }
}

document.addEventListener('DOMContentLoaded', updateNextModuleLock);

// ---------- SOLUTION TOGGLE ----------
function toggleSolution(btn) {
  btn.classList.toggle('open');
  var sol = btn.nextElementSibling;
  sol.classList.toggle('visible');
  var isOpen = sol.classList.contains('visible');
  var label = btn.getAttribute('data-label-open') || 'Musterlösung ausblenden';
  var labelClosed = btn.getAttribute('data-label-closed') || 'Musterlösung anzeigen';
  btn.firstChild.textContent = isOpen ? label + ' ' : labelClosed + ' ';
}
