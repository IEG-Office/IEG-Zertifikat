/* ============================================
   IEG Claude Academy — Content (English)
   All Modules + Quizzes
   v5.0 — English Translation
   ============================================ */

var CURRICULUM_EN = [
  {
    id: 0,
    number: '00',
    meta: 'Introduction · Ecosystem',
    title: 'The Claude Ecosystem at a Glance',
    desc: 'Model family, Projects, interactive visualizations, Claude Cowork, Claude Code and extensions — a structured overview of the entire Claude ecosystem.',
    duration: '25 min.',
    videos: [
      { url: 'https://www.youtube.com/embed/XTWb5oEfqdY', title: 'Claude AI Full Tutorial: From Basics to Agentic AI (2026)', caption: 'Video 0.1 · Claude AI Full Tutorial: From Basics to Agentic AI (2026)' },
    ],
    images: [],
    longContent: '',
    content: `
      <h3>1. The Model Family: The Right Tool for Every Task</h3>
      <p>Claude is far more than a simple chatbot — it is a versatile ecosystem with specialised tools for productivity and development. The starting point is the model family:</p>
      <table>
        <thead><tr><th>Model</th><th>Strength</th><th>Typical use</th></tr></thead>
        <tbody>
          <tr><td><strong>Haiku</strong><br><span style="font-weight:400;font-size:0.9em;color:var(--text-faint);">currently: Haiku 4.5</span></td><td>The fastest and most cost-efficient model</td><td>Simple tasks, quick formatting, short summaries</td></tr>
          <tr><td><strong>Sonnet</strong><br><span style="font-weight:400;font-size:0.9em;color:var(--text-faint);">currently: Sonnet 5</span></td><td>The "all-rounder"</td><td>Balanced combination of speed and intelligence — everyday work</td></tr>
          <tr><td><strong>Opus</strong><br><span style="font-weight:400;font-size:0.9em;color:var(--text-faint);">currently: Opus 4.8</span></td><td>The flagship model</td><td>Maximum capability for extremely complex analyses and decisions</td></tr>
          <tr><td><strong>Fable</strong><br><span style="font-weight:400;font-size:0.9em;color:var(--text-faint);">Mythos class, since June 2026</span></td><td>The most capable publicly available model — positioned above Opus</td><td>Exceptional cases requiring the highest depth and precision (higher cost)</td></tr>
        </tbody>
      </table>
      <div class="callout">
        <div class="callout-title">Looking ahead: What's next?</div>
        <p>Anthropic is continuously developing new models. Since June 2026, a new tier above Opus has existed — the "Mythos" class: <strong>Claude Fable 5</strong> is its publicly available model, while the more capable <strong>Claude Mythos 5</strong> is so far only available to select organisations as part of "Project Glasswing". For everyday work, Haiku, Sonnet and Opus remain the relevant tools — Fable is worthwhile only for rare exceptional cases with the highest requirements.</p>
      </div>

      <h3>2. Organisation through "Projects" — The Briefing Folder</h3>
      <p>A Project is an <strong>outsourced brain</strong> with documents, instructions and context. Claude accesses it in every conversation within the project — ideal for recurring tasks:</p>
      <ul>
        <li>Create a project → upload background documents (e.g. company profiles, style guides)</li>
        <li>Define a system prompt: what role should Claude take within the project?</li>
        <li>From that point on, every new chat in the project starts with this context — no re-briefing needed</li>
      </ul>

      <h3>3. Interactive Visualisation in Chat</h3>
      <p>Claude can generate interactive content directly in the chat — no plugins, no coding knowledge required:</p>
      <ul>
        <li><strong>Charts and dashboards:</strong> Interactive graphics, flowcharts and KPI dashboards</li>
        <li><strong>Calculation tools:</strong> Functional mini-apps with input fields and computed outputs</li>
        <li><strong>Simple command:</strong> "Show me this as an interactive chart" — Claude generates the visualisation immediately</li>
      </ul>
      <div class="callout">
        <div class="callout-title">Practical tip</div>
        <p>For client presentations: Claude visualisations can be shown directly in the browser or captured as a screenshot for PowerPoint.</p>
      </div>

      <h3>4. Claude Cowork — Desktop Assistant</h3>
      <p>Claude Cowork lives in the <strong>desktop app</strong> and carries out tasks autonomously on your computer:</p>
      <ul>
        <li>Access to local folders and files — no manual uploading required</li>
        <li>Works in the background while you focus on other tasks</li>
        <li><strong>Remote control via the smartphone app:</strong> delegate tasks even when you're away from your desk</li>
      </ul>

      <h3>5. Claude Code — Development Without Coding Knowledge</h3>
      <p>Claude Code makes technical implementation accessible to everyone:</p>
      <ul>
        <li>A simple description is enough — Claude creates complete websites, tools or apps</li>
        <li>No programming experience required: describe your requirements in plain language, code is generated automatically</li>
        <li>Iterative improvement: give feedback and Claude adjusts the code accordingly</li>
      </ul>

      <h3>6. Extensions: Skills, Plugins and Connectors</h3>
      <p>The Claude ecosystem can be extended through three types of add-ons:</p>
      <ul>
        <li><strong>Skills:</strong> Store individual capabilities permanently — e.g. "always produce an Excel file as output"</li>
        <li><strong>Plugins:</strong> Collections of skills bundled as a package (e.g. a productivity plugin with writing and analysis functions)</li>
        <li><strong>Connectors:</strong> Direct interfaces to external services — Gmail, Google Calendar, Notion and more</li>
      </ul>
      <div class="callout callout-warn">
        <div class="callout-title">Security notice</div>
        <p>Connectors give Claude access to real data from external services. Never connect personal company accounts without approval — follow IEG's data protection guidelines.</p>
      </div>
    `,
    quiz: [
      {
        q: 'A multi-stage risk analysis with many interdependent variables requires the most accurate model available. Which justification is correct?',
        options: [
          'Haiku, because it responds to requests at the highest speed',
          'Sonnet, because it offers the best balance between speed and depth',
          'Opus, because it is specifically designed for particularly complex analyses',
          'Model choice is irrelevant here, as all models perform equally well'
        ],
        correct: 2,
        explanation: 'Opus is the most capable model and is designed for particularly complex, multi-stage analyses and decisions.'
      },
      {
        q: 'A Project should deliver real added value over a single chat. What is the decisive advantage?',
        options: [
          'Stored documents and instructions apply automatically to every new chat',
          'Requests are answered noticeably faster within a Project',
          'Web search can only be activated within a Project',
          'Multiple people can work on the same chat at the same time'
        ],
        correct: 0,
        explanation: 'A Project is a persistent context — every new chat starts automatically with the stored documents and instructions, without re-briefing.'
      },
      {
        q: 'You have a table with sales figures and want to turn it into an interactive bar chart. Which approach gets you there most directly?',
        options: [
          'First complete a programming course and then insert the finished code',
          'Activate a separate connector for visualisations in your account',
          'Abandon the idea, as Claude cannot generate interactive graphics',
          'Paste in the figures and request an interactive chart — nothing more'
        ],
        correct: 3,
        explanation: 'Claude generates interactive visualisations directly in the chat — no plugin, no connector and no coding knowledge required.'
      },
      {
        q: 'A colleague asks what distinguishes Claude Cowork from Claude in the browser. Which statement captures the core difference?',
        options: [
          'Cowork is designed exclusively for experienced developers',
          'Cowork runs in the desktop app and accesses local files from there',
          'Cowork works more slowly but is significantly cheaper',
          'Cowork only processes plain text and does not accept any files'
        ],
        correct: 1,
        explanation: 'Claude Cowork lives in the desktop app, has access to local files and can complete tasks even in the background — controllable via smartphone too.'
      },
      {
        q: 'In the Claude ecosystem, the terms Skill and Plugin are often confused. How can the difference be accurately described?',
        options: [
          'A Skill is a single capability; a Plugin bundles several of them',
          'Both terms mean exactly the same thing and are freely interchangeable',
          'Skills are always free, while Plugins always cost money',
          'Plugins run exclusively on Opus, while Skills run on any model'
        ],
        correct: 0,
        explanation: 'A Skill is a single stored capability; a Plugin bundles multiple Skills into a package — both permanently extend Claude\'s toolbox.'
      },
      {
        q: 'You want to build a small client website with Claude Code and no prior experience. Where do you sensibly begin?',
        options: [
          'First learn HTML and CSS before using Claude at all',
          'Commission a developer to formulate the right prompt for you',
          'Drop the idea, as Claude Code is only for existing programmers',
          'Describe the desired functionality and appearance — Claude then delivers the code'
        ],
        correct: 3,
        explanation: 'Claude Code requires no programming knowledge — a clear description in plain language is enough to generate complete websites or apps.'
      },
      {
        q: 'Claude\'s extension system consists of exactly three building blocks. Which list names them correctly?',
        options: [
          'Add-ons, webhooks and small reusable helper scripts',
          'Macros, pre-built templates and independently running agents',
          'Skills, Plugins and Connectors to external services',
          'Bots, embeddable widgets and open programming interfaces'
        ],
        correct: 2,
        explanation: 'Skills (individual capabilities), Plugins (bundled collections) and Connectors (interfaces to services such as Gmail or Notion) make up the extension system.'
      },
      {
        q: 'For recurring standard tasks in day-to-day work, the model with the best price-performance ratio should be chosen. Which justification fits?',
        options: [
          'Haiku, because it costs far less than any other model',
          'Sonnet, because it balances speed and intelligence well',
          'Opus, because its response quality clearly surpasses every other option',
          'None, as no model is really suitable for daily use'
        ],
        correct: 1,
        explanation: 'Sonnet is the all-rounder with a balanced combination of speed and intelligence — ideal for everyday work.'
      },
      {
        q: 'A colleague asks what Connectors in the Claude ecosystem are actually for. Which description is correct?',
        options: [
          'They directly couple different Claude models to one another',
          'They merge multiple Projects into one large Project',
          'They serve solely to back up existing chat histories regularly',
          'They create interfaces to services such as Gmail, Calendar or Notion'
        ],
        correct: 3,
        explanation: 'Connectors are interfaces to external services — Claude can use them to read emails, manage calendars or write to Notion.'
      },
      {
        q: 'Why can Claude Cowork specifically continue tasks even when you are not actively watching?',
        options: [
          'Because it sits in the desktop app and accesses the operating system directly',
          'Because it operates as an independent cloud service entirely on its own',
          'Because it secretly uses a hidden browser extension in the background',
          'It cannot — genuine background processing does not exist in Cowork'
        ],
        correct: 0,
        explanation: 'Cowork is integrated in the desktop app and therefore has native access to local files and processes — the foundation for autonomous background work.'
      }
    ]
  },
  {
    id: 1,
    number: '01',
    meta: 'Introduction · Fundamentals',
    title: 'Claude — The Complete Beginner\'s Guide (2026)',
    desc: 'Chat discipline, web search, file analysis, technical support, personalisation and data privacy — everything you need for a professional start with Claude. You have already been introduced to the model family in Module 0.',
    duration: '45 min.',
    videos: [
      { url: 'https://www.youtube.com/embed/Xg55nTrbYYY', title: 'FULL Claude Tutorial For Beginners in 2026! (FULL COURSE)', caption: 'Video 1.1 · FULL Claude Tutorial For Beginners in 2026!' },
    ],
    images: [],
    longContent: '',
    content: `
      <h3>1. Fundamentals and Chat Discipline</h3>
      <p>Claude is an AI tool from Anthropic, operated through a simple text box. A key success factor is <strong>chat discipline</strong>: start a <strong>new chat for every new topic</strong>. Mixing topics in a single chat confuses the AI and significantly degrades the quality of results.</p>
      <p>The reason lies in what is known as the <strong>context window</strong>: with every response, Claude re-reads the <em>entire</em> chat history from the beginning. The longer and more topically unfocused a chat becomes, the more irrelevant information the model has to process — answers become less accurate and slower. A fresh chat per topic keeps the context clean and focused.</p>
      <div class="callout">
        <div class="callout-title">Golden rule</div>
        <p>One topic — one chat. Mixing holiday planning with quarterly reports in the same chat produces worse results for both.</p>
      </div>
      <p>Two further habits pay off from day one: <strong>provide context</strong> (who you are, who the output is for, what format you need) and <strong>work iteratively</strong> — refine a first response in the same chat with follow-up instructions such as "shorter", "more formal" or "with references".</p>

      <h3>2. Core Working Functions</h3>
      <p>The most important tools can be activated via the <strong>plus icon</strong> below the text input.</p>
      <h4>Web search</h4>
      <p>Claude can search hundreds of sources in seconds to compile current data (e.g. revenue figures or daily industry news) into tables — results are <strong>backed by source links</strong>. Always verify critical figures and formulate requests precisely with a time period and output format.</p>
      <h4>File analysis</h4>
      <p>PDFs, Excel or Word documents can be uploaded directly. <strong>Pro tip:</strong> use the stopwatch icon (<em>extended thinking mode</em>) so Claude takes more time to read the file thoroughly. Ask specific questions <em>about</em> the document rather than a blanket summary; Claude can also <strong>compare</strong> multiple files.</p>
      <h4>Technical support</h4>
      <p>Claude helps with PC and software problems. First describe the problem in general terms, then upload a <strong>screenshot of the user interface</strong> (e.g. the activity monitor or an error message) — Claude reads the screen contents and diagnoses the cause directly. Then ask for a step-by-step guide.</p>

      <h3>3. Personalisation and Productivity</h3>
      <ul>
        <li><strong>Preferences:</strong> Global settings (e.g. "always respond in one sentence") that are automatically applied to every new chat.</li>
        <li><strong>Styles:</strong> Teach Claude your own <strong>writing style</strong> — upload sample texts (e.g. as a PDF) that Claude analyses automatically.</li>
        <li><strong>Memory:</strong> Using the command "Please create a memory", Claude stores facts about you (e.g. "I have a fear of flying") that it automatically takes into account in future chats.</li>
        <li><strong>Projects:</strong> A dedicated area for specific tasks (e.g. "LinkedIn Post Generator"). Files and instructions uploaded here apply to <strong>all chats within this project</strong>.</li>
      </ul>

      <h3>4. Pro Features: Programming and Excel</h3>
      <h4>Dashboard &amp; website building</h4>
      <p>Claude can create interactive dashboards or simple HTML websites — including step-by-step publishing guides. No programming knowledge required.</p>
      <h4>Claude in Excel</h4>
      <p>A <strong>Pro feature</strong> that fills tables directly in Excel, retrieves web data, creates dynamic charts and <strong>independently corrects errors such as circular references</strong> — all through natural language instructions.</p>

      <h3>5. Security and Data Privacy</h3>
      <div class="callout callout-warn">
        <div class="callout-title">Mandatory at IEG</div>
        <p>In the settings under "Privacy", disable the option <strong>"helps improve Claude"</strong> so that your data is not used to train new models.</p>
      </div>
      <p>The <strong>incognito mode</strong> (ghost icon) ensures that chats are not permanently stored in the sidebar — ideal for private or one-off requests.</p>
    `,
    quiz: [
      {
        q: 'You are analysing a 100-page market study as a PDF and want to extract extremely precise details about a niche metric. Which approach is most effective?',
        options: [
          'Use the Haiku model for maximum speed when scanning.',
          'Activate the "extended thinking mode" (stopwatch) with the Opus model.',
          'Upload the file in incognito mode so the AI does not remember old chats.',
          'Copy the entire text of the PDF manually into the chat instead of uploading the file.'
        ],
        correct: 1,
        explanation: 'Opus + extended thinking mode = Claude reads the file more thoroughly and delivers more precise answers with complex documents.'
      },
      {
        q: 'You want Claude to always take into account that you are a Linux user for any technical guide, without mentioning it every time. Where do you set this?',
        options: [
          'In "Memories" using the command "Please create a memory".',
          'In the global "Preferences" in the settings.',
          'In a dedicated "Project" for technical guides.',
          'A, B and C are all technically correct — B is most sensible for system-wide OS information.'
        ],
        correct: 3,
        explanation: 'All three approaches work technically. Global preferences (B) are most sensible for system-wide information such as the operating system.'
      },
      {
        q: 'Why is it a strategic mistake to leave requests about different projects (e.g. holiday planning and quarterly report) in a single chat?',
        options: [
          'Claude consumes more tokens in long chats, making it more expensive.',
          'The AI loses focus when topics are mixed, leading to less accurate results.',
          'Incognito mode only works in short chats.',
          'Web search cannot be activated in chats with more than 10 messages.'
        ],
        correct: 1,
        explanation: 'Chat discipline is crucial: every new topic in its own chat — mixing topics significantly degrades result quality.'
      },
      {
        q: 'You use Claude in Excel in "Accept all edits" mode. You ask the AI to repair a table where the sum is incorrect. What does Claude do?',
        options: [
          'It writes a guide in the side panel explaining how you need to change the formula.',
          'It creates a new Excel file and sends it to you as a download link.',
          'It identifies the error (e.g. a circular reference) and corrects the formula directly in the cell, without asking again.',
          'It simply marks the faulty cell in red.'
        ],
        correct: 2,
        explanation: 'In "Accept all edits" mode, Claude corrects errors directly in Excel — including circular references, without asking for confirmation.'
      },
      {
        q: 'You create a "custom style" for your emails. What is the necessary step for Claude to recognise your style?',
        options: [
          'You must dictate at least 500 words of your style to Claude in the chat.',
          'You upload a text sample (e.g. as a PDF) that Claude analyses automatically.',
          'You select the pre-defined style "formal" and adjust it manually.',
          'You must describe the style in the global preferences under "General".'
        ],
        correct: 1,
        explanation: 'Upload a text sample → Claude automatically analyses tone, structure and word choice and adapts this style.'
      },
      {
        q: 'What happens to a chat you conduct in incognito mode (ghost icon) when you close the chat window?',
        options: [
          'It is automatically moved to the "Unsorted" project.',
          'It remains visible in the sidebar for 24 hours and is then deleted.',
          'It never appears in the sidebar in the first place and is not permanently stored.',
          'It is anonymised and used to train the AI.'
        ],
        correct: 2,
        explanation: 'Incognito mode = no permanent storage. The chat does not appear in the sidebar and is not retained.'
      },
      {
        q: 'Your printer is only printing stripes. What is the most efficient 2-step workflow with Claude?',
        options: [
          '1. Web search for test reports on the printer, 2. Purchase a new device via Claude.',
          '1. General description of the problem, 2. Upload a photo of the faulty printout or the error message on the PC.',
          '1. Activate Opus, 2. Create a Python script for printer control.',
          '1. Use the Haiku model for a quick answer, 2. Create a memory "My printer is broken".'
        ],
        correct: 1,
        explanation: 'First describe the problem generally, then upload a screenshot — Claude reads UI elements and error messages directly and gives concrete instructions.'
      },
      {
        q: 'What is a key advantage of "Projects" over simple chats?',
        options: [
          'Projects store instructions and files permanently, so all chats within the project benefit from them.',
          'The Opus model runs twice as fast inside Projects.',
          'Projects can be shared with other users to work on simultaneously.',
          'HTML websites can only be built inside Projects.'
        ],
        correct: 0,
        explanation: 'Projects = persistent context. Set up once, never brief again — applies to all chats within the project.'
      },
      {
        q: 'You ask Claude to create a table of DAX companies and a number looks wrong. How do you check the reliability of the answer?',
        options: [
          'Click on the web search indicator to see which sources Claude scanned for the answer.',
          'Ask Claude to repeat the answer in the Haiku model.',
          'Activate incognito mode and ask the question again.',
          'Claude never provides sources for tables — you always have to Google manually.'
        ],
        correct: 0,
        explanation: 'With web search active, Claude shows the sources it used — so every figure can be traced and verified.'
      },
      {
        q: 'How do you start the process of storing a "memory" in Claude\'s memory?',
        options: [
          'By clicking the heart icon in the chat bar.',
          'By beginning the prompt with the phrase "Please create a memory".',
          'Memories can only be entered manually in the settings under "Capabilities".',
          'Claude independently decides what to save as a memory after each chat.'
        ],
        correct: 1,
        explanation: '"Please create a memory" is the trigger — Claude stores the fact permanently and takes it into account in future chats.'
      }
    ]
  },
  {
    id: 2,
    number: '02',
    meta: 'Advanced · Module 2',
    title: 'Prompting and Structured Instructions',
    desc: 'Introduction to building effective prompts, using examples, XML structures and reusable instructions for more consistent results.',
    duration: '60 min.',
    videos: [
      { url: 'https://www.youtube.com/embed/dG2iFVKdyhs', title: 'Claude AI: The ULTIMATE Guide to Prompt Engineering & Artifacts', caption: 'Video 2.1 · Claude AI — The Ultimate Guide to Prompt Engineering' },
      { url: 'https://www.youtube.com/embed/ysPbXH0LpIE', title: 'Prompting 101 by Anthropic', caption: 'Video 2.2 · Prompting 101 by Anthropic (Code w/ Claude)' },
    ],
    images: [],
    longContent: '',
    content: `
      <h3>1. Prompt Engineering as an Iterative Science</h3>
      <p>Prompt engineering is not a one-time exercise — it is an <strong>empirical science</strong>.</p>
      <ul>
        <li><strong>The process:</strong> Start with a base instruction, analyse errors and expand the prompt <em>step by step</em>.</li>
        <li><strong>The goal:</strong> Structure clear instructions so the AI delivers the desired result on the first attempt.</li>
      </ul>
      <h3>2. The 6 Building Blocks of the Perfect Prompt</h3>
      <table>
        <thead><tr><th>Block</th><th>Description</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td><strong>Role</strong></td><td>Assign a professional identity</td><td>"You are an experienced social media consultant"</td></tr>
          <tr><td><strong>Task</strong></td><td>The core — always start with a verb</td><td>"Analyse", "Create", "Compare"</td></tr>
          <tr><td><strong>Context</strong></td><td>Relevant background information</td><td>Target audience, problem statement, tone</td></tr>
          <tr><td><strong>Process</strong></td><td>Logical individual steps</td><td>"Step 1: Research, Step 2: Analysis"</td></tr>
          <tr><td><strong>Stop criteria</strong></td><td>Boundaries against hallucinations</td><td>"If unsure, say so openly"</td></tr>
          <tr><td><strong>Output</strong></td><td>Define the exact format</td><td>Table, list, JSON, word count</td></tr>
        </tbody>
      </table>
      <div class="callout">
        <div class="callout-title">Why stop criteria?</div>
        <p>Without clear boundaries, Claude will guess rather than admit uncertainty.</p>
      </div>
      <h3>3. Structuring with XML Tags</h3>
      <p>Anthropic recommends XML tags (e.g. <code>&lt;instructions&gt;</code>, <code>&lt;context&gt;</code>) to cleanly separate information.</p>
      <h3>4. Advanced Prompting Techniques</h3>
      <h4>Few-Shot Prompting</h4><p>Show Claude <strong>1 to 3 examples</strong>.</p>
      <h4>Chain of Thought</h4><p>Instruct Claude to <strong>"think step by step"</strong>.</p>
      <h4>Prompt Chaining</h4><p>Break a large task into <strong>small, sequential prompts</strong>.</p>
      <h4>Self-Reflection</h4><p>Ask Claude to <strong>check its own answer for errors</strong> and revise it.</p>
      <h4>Pre-filling</h4><p>Provide the start of the answer (e.g. <code>{</code> for JSON).</p>
      <h3>5. Efficiency through System Prompts &amp; Caching</h3>
      <ul>
        <li><strong>System prompts:</strong> Offload static information.</li>
        <li><strong>Prompt caching:</strong> Saves time as Claude does not need to re-read static documents.</li>
      </ul>
      <h3>6. The Order of Analysis</h3>
      <p>Always <strong>form before sketch</strong> — clear facts first, then interpretive data.</p>
      <div class="callout callout-warn">
        <div class="callout-title">Remember</div>
        <p>Structured data provides the context in which unstructured data is correctly interpreted.</p>
      </div>
    `,
    quiz: [
      { q: 'Prompt engineering is described as an "iterative science". Which approach best reflects this?', options: ['Copy proven prompts from the internet and use them unchanged', 'Start with a base, analyse weaknesses and improve step by step', 'Formulate one single perfect prompt from the start', 'Let the AI write the entire prompt itself'], correct: 1, explanation: 'Iterative means improving step by step: start with a base, analyse errors, expand and repeat.' },
      { q: 'Of the six building blocks, one is called the "core". Which one and why?', options: ['The context, as it provides all background information', 'The output format, because it defines the shape of the result', 'The role, because it assigns Claude the right perspective', 'The task, because it is concrete and always starts with a verb'], correct: 3, explanation: 'The task is the core: concrete and always starting with a verb.' },
      { q: '"Stop criteria" are set in a prompt. What do they do?', options: ['They end the chat after a fixed time', 'They prevent Claude from asking follow-up questions', 'They set clear boundaries against hallucinated answers', 'They limit every answer to 100 words'], correct: 2, explanation: 'Stop criteria prevent Claude from guessing instead of admitting uncertainty.' },
      { q: 'Why does Anthropic recommend structuring prompts with XML tags?', options: ['Claude was trained on this and can reference individual sections specifically', 'The tags encrypt the prompt', 'Without tags web search cannot be activated', 'The tags only make the prompt look tidier'], correct: 0, explanation: 'Claude was trained on XML structure; tags enable specific referencing of individual sections.' },
      { q: 'What does "Prompt Chaining" correctly describe?', options: ['Wrapping a prompt in a chain of emojis', 'Breaking a large task into small, sequential prompts', 'Translating every prompt into multiple languages automatically', 'Using multiple AI models simultaneously'], correct: 1, explanation: 'Prompt Chaining breaks a large task into small steps whose intermediate results are checked and reused.' },
      { q: 'The "Self-Reflection" technique is used in a prompt. What does it achieve?', options: ['Claude keeps a running diary of its answers', 'The user reflects on their own question first', 'Claude pauses before every answer to sort content', 'Claude critically reviews its own answer and revises it'], correct: 3, explanation: 'With Self-Reflection, Claude is asked to critically review its own answer and improve it.' },
      { q: 'You use "Pre-filling". Which description is correct?', options: ['You provide the beginning of the answer, e.g. { for a JSON object', 'You store prompts in a library for later reuse', 'You ask Claude to summarise the chat history', 'You fill in an online form in advance'], correct: 0, explanation: 'Pre-filling provides the answer start — beginning with { reliably enforces JSON format.' },
      { q: 'Why does static information belong in the system prompt?', options: ['Because system prompts have unlimited length', 'Because normal prompts cannot accept documents', 'Because static content is cached and not re-read every request', 'Because the system prompt processes content faster'], correct: 2, explanation: 'Static content in the system prompt is cached and does not need to be re-read with every request.' },
      { q: 'You analyse a form and a hand sketch. What order makes sense?', options: ['The order is irrelevant', 'First the clear facts of the form, then the sketch requiring interpretation', 'Submit both simultaneously', 'First interpret the sketch, then evaluate the form'], correct: 1, explanation: 'Form before sketch: structured facts provide context for correct interpretation of the sketch.' },
      { q: 'Why is Few-Shot Prompting preferred over a long description?', options: ['It only works with Opus', 'It reduces costs significantly', 'It is only for programming code', 'A few concrete examples show the desired result more clearly than long descriptions'], correct: 3, explanation: 'One to three concrete examples make the goal more tangible — Claude learns from patterns.' }
    ]
  },
  {
    id: 3,
    number: '03',
    meta: 'Security · Module 3',
    title: 'Safe Handling of Data and Tools',
    desc: 'Fundamentals for using Claude safely: sensitive content, typical risk areas, connectors and key rules for privacy-conscious working.',
    duration: '15 min.',
    videos: [],
    images: [],
    longContent: '',
    content: `
      <h3>1. What Must Never Go into a Personal Account</h3>
      <p>Some data should never be entered into a personal AI account. If this has already happened: simply stop from now on.</p>
      <div class="callout callout-warn">
        <div class="callout-title">Never paste</div>
        <ul>
          <li>Source code or content from the company codebase</li>
          <li>Client or customer data: names, emails, phone numbers, addresses, health information</li>
          <li>Unpublished plans, roadmaps, designs or prototypes</li>
          <li>Non-public financial data: revenues, margins, budgets, forecasts, deal terms</li>
          <li>Anything marked "confidential", "internal" or under NDA</li>
          <li>Access credentials, passwords, API keys, security settings</li>
          <li>Complete contracts or legal documents with real names and terms</li>
          <li>Recordings or minutes of internal meetings</li>
        </ul>
      </div>
      <p>Anyone needing AI support for this content should first <strong>anonymise</strong> or use the <strong>IEG Claude Account</strong>.</p>
      <h3>2. The Side-Project Trap</h3>
      <p>Using your employer's AI account to develop a private side project? In the worst case, the project belongs to the employer. The simple rule: <strong>personal work on personal devices, with the personal account.</strong></p>
      <h3>3. Connectors: Useful and Risky</h3>
      <p>A <strong>connector</strong> links the AI to another service: Gmail, Google Drive, Calendar, Slack, Teams, Outlook. The access is enormous — connecting Gmail means the AI can read the entire inbox.</p>
      <p>A connected AI can be controlled through <strong>manipulated content in emails or documents</strong> — known as the <strong>"Lethal Trifecta"</strong>.</p>
      <div class="callout callout-warn">
        <div class="callout-title">The Lethal Trifecta</div>
        <p>AI has access to private data + reads external content it cannot control + can send information outward = attackers can steal data.</p>
      </div>
      <h3>4. Using Connectors Safely</h3>
      <ul>
        <li><strong>Never connect work accounts to a personal AI account.</strong></li>
        <li><strong>Connect as little as possible, with minimal access.</strong></li>
        <li><strong>Only use official connectors.</strong></li>
        <li><strong>Review monthly and disconnect unused connections.</strong></li>
      </ul>
      <div class="callout callout-success">
        <div class="callout-title">Conclusion</div>
        <p>Connectors belong in the <strong>IEG Claude Account</strong> — where security is professionally guaranteed.</p>
      </div>
    `,
    quiz: [
      { q: 'An M&A contract with real client names and deal terms needs analysing. What is correct?', options: ['Paste into personal Claude account with incognito mode', 'Ask a colleague to paste the text', 'Anonymise data first or use the IEG Enterprise Account', 'Paste quickly before anyone notices'], correct: 2, explanation: 'Contracts with real names and deal terms fall under "never paste". Anonymise first or use the IEG Enterprise Account.' },
      { q: 'A side project is developed using the employer\'s AI subscription. Who owns the result?', options: ['Me, because I wrote the prompts', 'Nobody — AI-generated code has no copyright', 'The AI provider Anthropic', 'The employer, because their tool was used'], correct: 3, explanation: 'Using the company\'s AI tool for side projects = intellectual property can legally belong to the employer.' },
      { q: 'What happens when Gmail is connected to a personal AI account?', options: ['The AI only sees manually selected emails', 'The AI gains read access to the entire inbox', 'Nothing changes — connectors are purely cosmetic', 'The AI automatically deletes old emails'], correct: 1, explanation: 'Enormous access: after connecting, the AI can read the entire inbox.' },
      { q: 'What three conditions make the "Lethal Trifecta" possible?', options: ['Using three AI models simultaneously', 'AI has access to private data, reads external content and can send information outward', 'Using three different browsers simultaneously', 'Three connectors from the same provider'], correct: 1, explanation: 'Private data + external content + outgoing connection = attackers can hijack the AI.' },
      { q: 'Why should company Slack never be connected to a personal AI account?', options: ['Because Slack does not support AI connectors', 'Because it slows down the AI', 'Because company data flows into a tool without an enterprise contract', 'Because personal accounts are more secure'], correct: 2, explanation: 'Work accounts in a personal AI tool = company data without a contract and without an audit trail.' },
      { q: 'Why can an approved third-party connector become dangerous?', options: ['It slows down the computer', 'It can silently change its behaviour after approval', 'Third-party connectors fundamentally steal passwords', 'It consumes too much battery'], correct: 1, explanation: 'Remote connectors from third-party providers can silently change their behaviour after approval.' },
      { q: 'How often should active connectors be reviewed?', options: ['Once a year at the annual review', 'Never — once connected, always connected', 'Only when something goes wrong', 'Monthly — check settings and disconnect anything unnecessary'], correct: 3, explanation: 'Monthly review: disconnect everything not actively used.' }
    ]
  },
  {
    id: 4,
    number: '04',
    meta: 'Advanced · Module 4',
    title: 'Skills and Reusable Workflows',
    desc: 'Introduction to Skills as structured, reusable work instructions — from content preparation to practical application in daily work.',
    duration: '30 min.',
    videos: [
      { url: 'https://www.youtube.com/embed/8tOfGkddPNM', title: 'Claude + NotebookLM: Ultimate AI Automation Workflow', caption: 'Video 4.1 · Claude + NotebookLM: Ultimate AI Automation Workflow' },
    ],
    images: [],
    longContent: '',
    content: `
      <h3>1. What are Claude Skills?</h3>
      <p>A Skill is a <strong>permanently defined, reusable work instruction</strong>.</p>
      <table>
        <thead><tr><th>Property</th><th>Projects</th><th>Skills</th></tr></thead>
        <tbody>
          <tr><td><strong>Portability</strong></td><td>Isolated</td><td>Usable in any chat</td></tr>
          <tr><td><strong>Combinability</strong></td><td>Fixed</td><td>Flexibly combinable</td></tr>
          <tr><td><strong>Systematics</strong></td><td>Manual</td><td>Defined processes</td></tr>
        </tbody>
      </table>
      <div class="callout">
        <div class="callout-title">Core idea</div>
        <p>Instead of telling the AI what to do every time, you build a <strong>collection of clearly defined processes</strong>.</p>
      </div>
      <h3>2. Knowledge Acquisition with NotebookLM</h3>
      <ul>
        <li><strong>Deep Research:</strong> NotebookLM searches over 60 sources.</li>
        <li><strong>Structure knowledge:</strong> Transform raw material into a clear system.</li>
      </ul>
      <h3>3. Configuring the Skill in Claude</h3>
      <p>In <strong>Skill Creator mode</strong>, Claude asks follow-up questions: goal, target audience, output format, language.</p>
      <h3>4. Using the Skill in Daily Work</h3>
      <ul>
        <li>Select via the <strong>plus icon</strong> in the chat.</li>
        <li>Low prompt effort thanks to anchored expert knowledge.</li>
      </ul>
      <h3>5. Scalability</h3>
      <p>Not limited to landing pages — applicable to email funnels, content strategies, corporate strategies.</p>
    `,
    quiz: [
      { q: 'What distinguishes a Claude Skill from a project instruction?', options: ['Skills only work with Opus', 'A Skill is only for private notes', 'Project instructions are more flexible', 'Skills are portable and usable in any chat; project instructions are isolated'], correct: 3, explanation: 'Skills are portable and combinable — project instructions remain tied to a single project.' },
      { q: 'Which tool is recommended for knowledge acquisition before creating a Skill?', options: ['Google Docs', 'NotebookLM with Deep Research', 'Microsoft Word', 'ChatGPT'], correct: 1, explanation: 'NotebookLM with Deep Research searches over 60 sources.' },
      { q: 'What follow-up questions does Claude ask in Skill Creator mode?', options: ['Goal, target audience, output format and language', 'Claude asks no follow-up questions', 'Only the name of the Skill', 'Only the price'], correct: 0, explanation: 'Claude asks interactively: goal, target audience, format, language.' },
      { q: 'Why does a finished Skill often only need a short prompt?', options: ['Skills only handle simple tasks', 'The Skill automatically lengthens the prompt', 'The expert knowledge is already anchored in the Skill', 'Skills work with random texts'], correct: 2, explanation: 'Frameworks and processes are already stored — the Skill automatically ensures quality.' },
      { q: 'What is the overarching goal of the Skill system?', options: ['Only to create landing pages', 'To replace Claude with another tool', 'To write as many individual prompts as possible', 'Moving away from individual prompts towards a fixed work system'], correct: 3, explanation: 'Goal: from isolated prompts to a systematic work system.' }
    ]
  },
  {
    id: 5,
    number: '05',
    meta: 'Practical · Module 5',
    title: 'Skills in Finance Workflows',
    desc: 'Practical application examples for Skills in finance-related processes: data preparation, content structuring, dashboards and recurring workflows.',
    duration: '30 min.',
    videos: [
      { url: 'https://www.youtube.com/embed/h0XeJi6OAVI', title: 'Finance Automation with Claude Skills', caption: 'Video 5.1 · Credit card billing fully automated with Claude Skills' },
    ],
    images: [],
    longContent: '',
    content: `
      <p>This workflow shows how to transform complex financial tasks into a <strong>fully automated process</strong> by combining specialised Skills.</p>
      <h3>1. What are Claude Skills in a Finance Context?</h3>
      <p>A Skill preserves a once-defined workflow for future use. In finance, they transform raw data into <strong>CFO-ready reports</strong>.</p>
      <h3>2. The Building Blocks of the Workflow</h3>
      <h4>Skill 1: Data Cleaning</h4>
      <ul>
        <li><strong>Starting point:</strong> Raw files often unstructured, missing fields.</li>
        <li><strong>Function:</strong> Consolidate tabs, retain relevant fields, fill in missing information.</li>
      </ul>
      <h4>Skill 2: Branding &amp; Design Guidelines</h4>
      <p>Store colours, styles and KPI requirements — all outputs automatically carry the corporate design.</p>
      <h4>Skill 3: Dynamic Dashboard Builder</h4>
      <ul>
        <li><strong>Technology:</strong> Interactive HTML dashboard.</li>
        <li><strong>Drill-Down:</strong> Click on a name to see all detailed reports.</li>
      </ul>
      <h4>Skill 4: PowerPoint Presentations</h4>
      <p>Presentation for board meetings — branding applied automatically.</p>
      <h3>3. The "Super Skill" (Full Cycle Automation)</h3>
      <div class="callout callout-success">
        <div class="callout-title">Workflow</div>
        <p><strong>1.</strong> Data Cleaning → <strong>2.</strong> Clean Excel → <strong>3.</strong> Dashboard → <strong>4.</strong> PowerPoint</p>
      </div>
      <p>A prompt such as <strong>"credit card report cycle"</strong> runs the entire process autonomously in minutes.</p>
      <h3>4. Managing Skills</h3>
      <p>Settings → <strong>Customize → Skills</strong></p>
    `,
    quiz: [
      { q: 'What is a Claude Skill in a finance context?', options: ['A one-off prompt deleted after use', 'A stored work instruction that transforms raw data into CFO-ready reports', 'An external Excel plugin', 'A manual checklist for accountants'], correct: 1, explanation: 'A Skill preserves a defined workflow for repeated use.' },
      { q: 'What does the "Data Cleaning" Skill do with unstructured Excel exports?', options: ['It deletes the file and recreates it', 'It consolidates tabs, retains relevant fields and adds missing information', 'It converts Excel to PDF without changes', 'It sends the file to a human accountant'], correct: 1, explanation: 'Data Cleaning: merge tabs, retain relevant fields, add missing information.' },
      { q: 'Why is a separate branding Skill created?', options: ['Claude does not function without it', 'So all outputs automatically carry the corporate design', 'To customise the Claude interface', 'Because branding is required by law'], correct: 1, explanation: 'The branding Skill stores colours and styles — all outputs automatically look professional.' },
      { q: 'What is the "Drill-Down" function in the Dynamic Dashboard?', options: ['A function to delete data', 'A button to export as PDF', 'A drill simulator', 'Clicking on a name shows all detailed reports'], correct: 3, explanation: 'Drill-Down = click on a name → see all detailed transactions.' },
      { q: 'In what order does the "Super Skill" work?', options: ['Dashboard → PowerPoint → Data Cleaning → Excel', 'PowerPoint → Dashboard → Excel → Data Cleaning', 'Data Cleaning → clean Excel → Dashboard → PowerPoint', 'Excel → PowerPoint → Dashboard → Data Cleaning'], correct: 2, explanation: 'The chain: 1. Cleaning → 2. Excel → 3. Dashboard → 4. PowerPoint.' },
      { q: 'What happens when you enter "credit card report cycle"?', options: ['Claude asks for further details', 'Claude runs the entire workflow autonomously', 'Claude shows only the last statement', 'Claude opens the credit card website'], correct: 1, explanation: 'The Super Skill links all individual Skills — one prompt triggers the complete process.' },
      { q: 'Where can all saved Skills be found?', options: ['In the chat history', 'In Settings under Customize → Skills', 'On the Anthropic website', 'Skills cannot be edited after creation'], correct: 1, explanation: 'Settings → Customize → Skills.' },
      { q: 'What is the best way to create a new Skill?', options: ['Write it manually in a text editor', 'Buy Skills in the Claude Store', 'Solve the task in chat first, then create the Skill', 'Skills are created automatically after 10 similar chats'], correct: 2, explanation: 'Best practice: solve in chat first, then instruct Claude to create the Skill.' },
      { q: 'What format does the Dashboard Builder use?', options: ['PDF with embedded links', 'PowerPoint with animations', 'Excel with pivot tables', 'Interactive HTML with filters and trend analyses'], correct: 3, explanation: 'The Dashboard Builder creates interactive HTML with drill-down functionality.' },
      { q: 'What is the main advantage of the modular Skill approach?', options: ['One large prompt is always better', 'Modular Skills are cheaper', 'Individual Skills can be independently updated, combined and reused', 'There is no difference'], correct: 2, explanation: 'Modularity: each Skill individually updatable, freely combinable, reusable across different workflows.' }
    ]
  },
  {
    id: 6,
    number: '06',
    meta: 'Practical · Module 6',
    title: 'Claude Cowork — The Autonomous Desktop Agent',
    desc: 'While a chatbot only responds, Claude Cowork acts independently on your computer: sorting files, creating documents, researching online and planning tasks — including setup, security and personal instructions.',
    duration: '45 min.',
    videos: [
      { url: 'https://www.youtube.com/embed/JdQ_FHgP5ms', title: 'FULL Claude Cowork Tutorial For Beginners in 2026! (Zero to PRO)', caption: 'Video 6.1 · FULL Claude Cowork Tutorial For Beginners in 2026!' },
      { url: 'https://www.youtube.com/embed/UR0gac-ccjg', title: 'How to Use Claude Cowork: Full Beginners Tutorial 2026', caption: 'Video 6.2 · How to Use Claude Cowork: Full Beginners Tutorial 2026' },
    ],
    images: [],
    longContent: '',
    content: `
      <h3>1. What is Claude Cowork?</h3>
      <p>Claude Cowork is an <strong>AI agent that acts independently on your computer</strong>. The model is the <strong>brain</strong>, Cowork is the <strong>hands</strong> — it opens, moves, renames and controls files and programmes.</p>
      <h3>2. Setup and Security</h3>
      <ul>
        <li><strong>Desktop app:</strong> Requires the Claude desktop app (Mac/Windows) and a <strong>Pro subscription</strong>.</li>
        <li><strong>Security sandboxing:</strong> Cowork only works in folders you explicitly authorise.</li>
        <li><strong>Working environment:</strong> Create a dedicated folder for each project.</li>
      </ul>
      <h3>3. Core Functions</h3>
      <ul>
        <li><strong>File management:</strong> Analyse, rename and sort hundreds of files.</li>
        <li><strong>Document creation:</strong> Create Excel tables, CSV trackers or PowerPoint from raw data.</li>
        <li><strong>Web browsing:</strong> Via "Claude in Chrome" — research, summarise pages, extract data.</li>
        <li><strong>Connectors:</strong> Link to Gmail, Notion, Google Drive or Slack.</li>
      </ul>
      <h3>4. Advanced Automation</h3>
      <ul>
        <li><strong>Scheduling:</strong> e.g. "Check folder every morning at 8am for new minutes and send them".</li>
        <li><strong>Markdown memory:</strong> Cowork uses Markdown files to store information across sessions.</li>
        <li><strong>Skills &amp; Plugins:</strong> Teach Claude specific expertise or store your corporate design.</li>
      </ul>
      <h3>5. Important Rules</h3>
      <div class="callout callout-warn">
        <div class="callout-title">Session persistence</div>
        <p>The desktop app must <strong>remain open</strong> while a task is running.</p>
      </div>
      <div class="callout">
        <div class="callout-title">Model choice</div>
        <p>Sonnet for simple sorting; Opus for complex analyses (more credits).</p>
      </div>
    `,
    quiz: [
      { q: 'How can the relationship between the Claude model and Cowork be described?', options: ['Cowork replaces the language model with its own engine', 'The model is the brain, Cowork is the hands that control files and programmes', 'Cowork is a pure chatbot with no file system access', 'Cowork and the model run in two completely separate accounts'], correct: 1, explanation: 'The model is the brain, Cowork the hands — it opens, moves and renames files and controls programmes.' },
      { q: 'How is Cowork accessed and what is the prerequisite?', options: ['Via any browser without any requirement', 'Only via the mobile app; a free account is sufficient', 'Exclusively via the web interface', 'Exclusively via the desktop app (Mac/Windows) with a Pro subscription'], correct: 3, explanation: 'Cowork only works via the Claude desktop app for Mac and Windows and requires a Pro subscription.' },
      { q: 'What does security sandboxing do in Claude Cowork?', options: ['Cowork only works in explicitly authorised folders', 'It encrypts all hard drives automatically', 'It limits task runtime to ten minutes', 'It blocks internet access during tasks'], correct: 0, explanation: 'Sandboxing: Cowork may only work in explicitly authorised folders — all other data remains protected.' },
      { q: 'Why does Cowork use Markdown files in the project folder?', options: ['Markdown is the only language Cowork can read', 'To make outputs look better than PDF', 'Because it lacks session memory and stores information this way permanently', 'To hand over tasks to a human colleague'], correct: 2, explanation: 'Cowork has no built-in session memory and therefore stores information in Markdown files.' },
      { q: 'What happens to a running task when the desktop app is closed?', options: ['The task continues in the cloud', 'The task is handed over to the smartphone app', 'The task pauses and restarts from the beginning', 'The agent stops — the app must remain open'], correct: 3, explanation: 'Session persistence: the app must remain open — closing it stops the agent.' },
      { q: 'What task can be implemented with scheduling?', options: ['"Check folder every morning at 8am for new minutes and send them"', '"Permanently double the model\'s computing power"', '"Delete all private files outside the project folder"', '"Automatically switch to a cheaper subscription"'], correct: 0, explanation: 'Scheduling allows recurring tasks like daily checking and sending of minutes.' },
      { q: 'How should the model for Cowork tasks be chosen?', options: ['Always Opus', 'Sonnet for simple sorting, Opus for complex analyses', 'Always Haiku', 'Model choice has no influence on results'], correct: 1, explanation: 'Sonnet is economical for simple sorting; Opus is worthwhile for complex analyses but uses more credits.' },
      { q: 'What does the "Claude in Chrome" extension do in Cowork?', options: ['It replaces the desktop app', 'It encrypts the browsing history', 'It blocks access to external dashboards', 'Cowork can actively research and extract data from dashboards'], correct: 3, explanation: 'Via "Claude in Chrome", Cowork actively researches online and extracts data from dashboards.' },
      { q: 'What do connectors like Gmail or Notion enable in Cowork?', options: ['Claude reads open items from minutes and sends an email directly', 'They only speed up file analysis', 'They replace local sandboxing with cloud storage', 'They are only available in the free version'], correct: 0, explanation: 'Connectors link Claude to services — so Claude can read minutes and send emails directly.' },
      { q: 'What can Cowork create from unstructured raw data?', options: ['Only plain text files', 'Only screenshots of original files', 'Excel tables, CSV trackers or PowerPoint presentations', 'Only a list of file names'], correct: 2, explanation: 'Cowork turns raw data into finished documents — Excel tables, CSV trackers or PowerPoint presentations.' }
    ]
  },
  {
    id: 7,
    number: '07',
    meta: 'Practical · Module 7',
    title: 'Claude in Microsoft Office (Excel & PowerPoint)',
    desc: 'The Claude Add-in in Excel and PowerPoint: generate formulas by voice, write VBA macros, fix circular references and create presentations from data tables.',
    duration: '30 min.',
    videos: [
      { url: 'https://www.youtube.com/embed/9OsKjq_rVXc', title: 'How to Use Claude for Excel (Step-by-Step Tutorial)', caption: 'Video 7.1 · How to Use Claude for Excel — Step-by-Step Tutorial' },
    ],
    images: [],
    longContent: '',
    content: `
      <h3>1. Two Operating Modes</h3>
      <table>
        <thead><tr><th>Mode</th><th>Access</th><th>Key advantage</th></tr></thead>
        <tbody>
          <tr><td><strong>Standalone chat</strong></td><td>Browser or desktop app</td><td>Flexible all-purpose solution</td></tr>
          <tr><td><strong>Office Add-in</strong></td><td>Directly in Excel / PowerPoint</td><td>Claude sees the open file and can directly edit cells and slides</td></tr>
        </tbody>
      </table>
      <div class="callout">
        <div class="callout-title">The decisive difference</div>
        <p>The Add-in reads the open document context automatically — Claude knows which cells are selected and can intervene directly.</p>
      </div>
      <h3>2. Setup</h3>
      <ul>
        <li>Find "Claude" in the Microsoft AppSource Store and install with one click.</li>
        <li>Requires an active <strong>Claude Pro or Team subscription</strong>.</li>
        <li>No IT installation required — standard Office Add-in.</li>
      </ul>
      <h3>3. Claude in Excel</h3>
      <h4>Generate formulas by voice</h4>
      <p>Describe what you need in natural language — Claude writes the formula and places it in the target cell.</p>
      <h4>Transform and clean data</h4>
      <p>Remove duplicates, split columns, fill missing values, standardise dates — all by natural language.</p>
      <h4>Write VBA macros</h4>
      <p>Claude writes complete VBA code. <strong>Important:</strong> Claude cannot execute it — the user starts it manually.</p>
      <h4>Detect and fix errors</h4>
      <p>Claude immediately identifies circular references, explains the cause and corrects the cell directly.</p>
      <div class="callout callout-success">
        <div class="callout-title">Accept all edits mode</div>
        <p>When activated, Claude applies all corrections directly — no intermediate question.</p>
      </div>
      <h3>4. Claude in PowerPoint</h3>
      <ul>
        <li>Generate complete slides from a table or outline.</li>
        <li>Automatically add speaker notes to every slide.</li>
        <li>Shorten, rephrase or bring text into corporate design language.</li>
        <li>Suggest and create chart types from data tables.</li>
      </ul>
      <h3>5. Data Security</h3>
      <p>The Add-in transmits <strong>only the selected cell range</strong> — not the entire workbook.</p>
      <div class="callout callout-warn">
        <div class="callout-title">Data protection at IEG</div>
        <p>No real client data or deal terms in the Add-in. Use the <strong>IEG Claude Enterprise Account</strong> for sensitive models.</p>
      </div>
      <h3>6. Integration Limits</h3>
      <ul>
        <li>No direct macro execution — manual start via VBA editor.</li>
        <li>No database access (SAP, Bloomberg, SQL).</li>
        <li>Visible context only — not all background worksheets.</li>
        <li>No real-time synchronisation.</li>
      </ul>
    `,
    quiz: [
      { q: 'What is the decisive difference between the Add-in and the standalone chat in Excel?', options: ['The Add-in switches to the most powerful model automatically', 'The Add-in stores inputs locally only', 'The Add-in runs in Excel and can read the document context and edit cells directly', 'The Add-in is limited to Excel 2019'], correct: 2, explanation: 'In the Add-in, Claude sees the open document and can intervene directly.' },
      { q: 'What does "Accept all edits" mode do?', options: ['Claude applies corrections directly to cells without asking again', 'Claude saves the workbook and uploads to OneDrive', 'Claude accepts all user inputs without moderation', 'Claude imports external files and merges them'], correct: 0, explanation: 'In "Accept all edits" mode, corrections and transformations are applied directly — no intermediate question.' },
      { q: 'What data does the Excel Add-in transmit to Anthropic\'s servers?', options: ['The entire workbook including all worksheets', 'All files open in Microsoft 365', 'All calendar entries and emails', 'Only the selected cell range or active content'], correct: 3, explanation: 'The Add-in only transmits the selected or active range — not the entire workbook.' },
      { q: 'What is a key limitation for VBA macros with Claude?', options: ['Claude refuses to write VBA code', 'Claude writes the code but cannot execute it — the user starts it manually', 'VBA macros are restricted to read-only access', 'Claude only supports VBA in older Excel versions'], correct: 1, explanation: 'Claude creates VBA code but cannot execute it. Starting via the VBA editor remains a manual action.' },
      { q: 'What is required when setting up the Claude Add-in?', options: ['A free Anthropic account is sufficient', 'An enterprise Microsoft licence', 'An active Claude Pro or Team subscription and the Add-in installed via AppSource', 'A special developer API key'], correct: 2, explanation: 'The Add-in requires an active Claude Pro or Team subscription and is installed via AppSource.' },
      { q: 'What is the main advantage of the PowerPoint Add-in?', options: ['Claude compresses all images automatically', 'Claude exports presentations as PDF and sends via Outlook', 'Claude creates complete slides and speaker notes from text summaries or data tables', 'Claude scans slides and creates a contents slide automatically'], correct: 2, explanation: 'The PowerPoint Add-in generates complete slides with content and speaker notes directly in the sidebar.' },
      { q: 'How does Claude react to a circular reference error in Excel?', options: ['Claude deletes the affected rows and rebuilds', 'Claude saves under a new name and marks with a comment', 'Claude converts the formula to a static value', 'Claude identifies the error-causing formula, explains the cause and corrects the cell directly'], correct: 3, explanation: 'Claude identifies the problem formula, explains the cause and corrects it directly — without asking in "Accept all edits" mode.' },
      { q: 'Why is the Add-in superior for complex data transformations?', options: ['It stores inputs locally only', 'Claude sees the table structure and can reference columns, rows and cell addresses specifically', 'It exclusively activates the Opus model', 'It replaces Excel\'s formula library'], correct: 1, explanation: 'In the Add-in, Claude knows the actual table structure — enabling precise transformations not possible in chat.' },
      { q: 'What limitation applies to confidential financial models?', options: ['Claude refuses models with values over ten million', 'Financial formulas are not editable for liability reasons', 'Transmitted cell ranges end up on Anthropic servers — sensitive data must be anonymised first', 'Claude cannot process currency symbols'], correct: 2, explanation: 'The Add-in transmits selected ranges. Anonymise sensitive data first or use the IEG Enterprise Account.' },
      { q: 'Which use case shows the strongest advantage of the Add-in over copy-paste into chat?', options: ['Cleaning unstructured data directly in Excel without manual copying', 'Replacing Excel\'s formula bar with Claude\'s natural language search', 'Synchronising Excel data with Claude\'s memory', 'Converting worksheets into interactive dashboards in PowerPoint viewer'], correct: 0, explanation: 'The Add-in reads the file context directly — data can be cleaned in the sheet without copying back and forth.' }
    ]
  },
  {
    id: 8,
    number: '08',
    meta: 'Practical · Module 8',
    title: 'Claude Tag — AI as a Team Member in Slack',
    desc: 'Claude Tag brings agentic AI capabilities directly into Slack: tag @Claude, delegate tasks, build context across channels — and Claude works asynchronously in the background.',
    duration: '20 min.',
    videos: [
      { url: 'https://www.youtube.com/embed/_cdX8xkKj_s', title: 'Claude Tag Tutorial: AI Agent Living in Slack', caption: 'Video 8.1 · Claude Tag Tutorial — AI Agent Living in Slack' },
      { url: 'https://www.youtube.com/embed/F5DXjhBqV9I', title: 'Claude Tag + Slack Will Change How You Work Forever', caption: 'Video 8.2 · Claude Tag + Slack — How It Changes Your Work' },
    ],
    images: [],
    longContent: '',
    content: `
      <h3>What is Claude Tag?</h3>
      <p>Claude Tag is a new way for teams to work with Claude. Claude joins Slack as a full team member — with its own context, access to approved tools, and the ability to handle tasks asynchronously over hours or even days.</p>
      <div class="callout">
        <div class="callout-title">Real-world numbers</div>
        <p>At Anthropic itself, <strong>65% of the product team's code</strong> is already created by their internal version of Claude Tag. The pattern is spreading well beyond engineering — to data analysis, support tickets and bug investigation.</p>
      </div>

      <h3>1. How @Claude Works</h3>
      <p>Tagging Claude in a Slack channel works just like mentioning a colleague:</p>
      <ol>
        <li>Type <strong>@Claude</strong> followed by your task in any channel</li>
        <li>Claude breaks the task into stages and works through them using available tools</li>
        <li>Claude responds in the thread once the task is complete</li>
      </ol>
      <div class="callout">
        <div class="callout-title">Example</div>
        <p><strong>@Claude</strong> Please create a summary of all open action items from the last 5 meeting notes in the #deal-team channel and group them by owner.</p>
      </div>

      <h3>2. The Four Core Advantages</h3>
      <h4>@Claude is multiplayer</h4>
      <p>Within a given Slack channel, there is <strong>one Claude</strong> that interacts with everyone. Anyone can see what it is working on and pick up the conversation from where the last colleague left off — just like with a real team member.</p>

      <h4>@Claude learns over time</h4>
      <p>Claude builds context by following along with its channel. Users don't need to explain things from scratch over and over. Claude can even automatically learn from other Slack channels and data sources if granted permission.</p>

      <h4>@Claude takes initiative</h4>
      <p>With <strong>ambient behaviour</strong> enabled, Claude proactively keeps you updated: it flags relevant information from across connected channels and tools, and follows up on threads or tasks that have gone quiet without being resolved.</p>

      <h4>@Claude works asynchronously</h4>
      <p>Set a task and move on. Claude can schedule tasks for itself and pursue projects autonomously over hours or days. Multiple Claudes can be delegated in parallel — dramatically increasing throughput.</p>

      <h3>3. Security and Access Control</h3>
      <p>Claude Tag is designed from the ground up for teams and organisations:</p>
      <ul>
        <li><strong>Channel-specific identities:</strong> A Claude set up for sales has no access to engineering data — and vice versa. Context and memories stay strictly scoped to the configured channels.</li>
        <li><strong>Tool control:</strong> Admins define which tools and data Claude can use in each channel.</li>
        <li><strong>Token limits:</strong> Admins set monthly budgets for the whole organisation and per channel.</li>
        <li><strong>Full audit log:</strong> Every action Claude takes is logged — including who made the request.</li>
      </ul>
      <div class="callout callout-warn">
        <div class="callout-title">Important for IEG</div>
        <p>Claude Tag is currently in beta for <strong>Claude Enterprise and Team</strong> customers. For use with confidential deal data, always use the IEG Enterprise Account and carefully configure which channels and tools are accessible.</p>
      </div>

      <h3>4. Getting Started in 4 Steps</h3>
      <ol>
        <li>Pair Claude Tag with your Slack workspace</li>
        <li>Give Claude access to relevant tools (e.g. Google Drive, Notion, databases)</li>
        <li>Set a monthly token spend limit for the organisation</li>
        <li>Test Claude in a private channel to confirm everything works</li>
      </ol>

      <h3>5. Direct Messages to @Claude</h3>
      <p>You can also send Claude direct messages — it will respond privately using the personal tools and connectors you have set up.</p>
    `,
    quiz: [
      {
        q: 'What distinguishes Claude Tag from a normal Claude chat?',
        options: [
          'Claude Tag is faster but less precise',
          'Claude Tag is multiplayer — one Claude interacts with the whole channel and builds context over time',
          'Claude Tag only works for coding tasks',
          'Claude Tag stores no data between sessions'
        ],
        correct: 1,
        explanation: 'Claude Tag is multiplayer: one Claude per channel that interacts with everyone, builds context over time, and picks up the conversation where the last colleague left off.'
      },
      {
        q: 'What does "ambient behaviour" mean in Claude Tag?',
        options: [
          'Claude works with reduced compute power in the background',
          'Claude ignores all messages until directly tagged',
          'Claude proactively surfaces relevant updates and picks up unresolved tasks on its own',
          'Claude sends automated daily summaries to all channel members'
        ],
        correct: 2,
        explanation: 'With ambient behaviour enabled, Claude takes initiative: it flags relevant information and proactively follows up on unresolved threads and tasks — without explicit tagging.'
      },
      {
        q: 'How is data separation between different teams ensured in Claude Tag?',
        options: [
          'All Claudes share the same global context — data separation is the user\'s responsibility',
          'Each channel has its own Claude identity with its own context — no spillover to other channels',
          'Data separation is only available in the Enterprise version',
          'Claude automatically deletes its context after every session'
        ],
        correct: 1,
        explanation: 'Channel-specific identities: a Claude for sales has no access to engineering data. Context and memories are strictly scoped to the configured channels.'
      },
      {
        q: 'What controls do admins have in Claude Tag?',
        options: [
          'Only model selection (Sonnet or Opus)',
          'Only the monthly token budget',
          'Tool access per channel, token limits per channel and organisation, plus a full audit log of all actions',
          'Admins have no control — Claude decides which tools to use'
        ],
        correct: 2,
        explanation: 'Admins control: which tools are available per channel, monthly token budgets, and have access to a complete log of all Claude actions including who made each request.'
      },
      {
        q: 'For which customer segments is Claude Tag currently available in beta?',
        options: [
          'All Claude users including the free tier',
          'Only Claude Max subscribers',
          'Claude Enterprise and Team customers',
          'Exclusively Anthropic employees'
        ],
        correct: 2,
        explanation: 'Claude Tag is currently in beta for Claude Enterprise and Team customers — with the goal of expanding availability more widely over time.'
      }
    ]
  },
  {
    id: 9,
    number: '09',
    meta: 'Productivity · Usage & Cost',
    title: 'Managing Usage Limits: Working Efficiently with Claude',
    desc: 'How token costs work, and 23 practical habits to stop hitting usage limits — covering file uploads, model choice, and session planning.',
    duration: '20 min.',
    videos: [],
    images: [],
    longContent: '',
    content: '',
    quiz: [
      {
        q: 'Why do later messages in a long conversation cost more tokens than early ones?',
        options: [
          'Claude switches to a more expensive model automatically',
          'Claude re-reads the entire conversation history from the start on every new message',
          'Longer conversations always trigger Extended Thinking',
          'The token price increases the longer a chat has been open'
        ],
        correct: 1,
        explanation: 'Every new message causes Claude to re-read the full conversation history — every prior message and answer — so later messages in a long conversation are more expensive to process.'
      },
      {
        q: 'According to the source, what should you do before asking Cowork to build a file like a financial model or report?',
        options: [
          'Go straight to Cowork so it can plan and build in one step',
          'Plan and agree on the structure in Chat first, then move to Cowork once the plan is final',
          'Always use Claude Code instead of Cowork for any file creation',
          'Ask Cowork to build three different draft versions to compare'
        ],
        correct: 1,
        explanation: 'File creation in Cowork uses more of the usage limit than regular chat messages, so the recommended approach is to do the planning/thinking in Chat and only build the final file in Cowork.'
      },
      {
        q: 'When part of an output is wrong (e.g., one section of a report), what is the more token-efficient way to fix it?',
        options: [
          'Ask Claude to redo the entire report from scratch',
          'Point to the specific section that is wrong and ask Claude to redo only that part',
          'Start a completely new project',
          'Ask for three alternative full versions of the report'
        ],
        correct: 1,
        explanation: 'A full redo regenerates the entire output and its token cost, while pointing to the specific section that needs fixing avoids regenerating everything else.'
      },
      {
        q: 'What is the suggested benefit of using Projects for files you reference often (e.g., contracts or brand guides)?',
        options: [
          'Projects automatically translate the file into every language',
          'The file only needs to be uploaded once and can be reused across conversations without being fully re-tokenized each time',
          'Projects remove the need for any prompts entirely',
          'Files in Projects do not count toward usage limits under any circumstance'
        ],
        correct: 1,
        explanation: 'Uploading the same file to multiple separate chats causes it to be re-tokenized every time. In a Project, the file is uploaded once and reused, and on paid plans Projects use RAG to retrieve only relevant chunks instead of loading the full document each time.'
      },
      {
        q: 'What does the "rolling 5-hour window" for usage limits imply, according to the source?',
        options: [
          'Usage limits reset only once every 5 days',
          'Splitting work into separate sessions across the day (e.g., morning/afternoon/evening) lets earlier usage roll off before later sessions',
          'The 5-hour window only applies to Claude Code',
          'Usage limits are shared across all team members in a 5-hour block'
        ],
        correct: 1,
        explanation: 'Because the usage limit operates on a rolling 5-hour window, spreading tasks into multiple sessions throughout the day allows earlier usage to roll off, rather than exhausting the whole limit in one long morning session.'
      },
      {
        q: 'Which of the following is given as an example of a task Claude is described as not well suited for, based on the source?',
        options: [
          'Summarizing a long document',
          'Batching multiple related tasks into a single prompt',
          'Generating images directly',
          'Reviewing a section of a report'
        ],
        correct: 2,
        explanation: 'The source notes that Claude cannot generate images, and repeatedly trying to describe a visual in Claude wastes messages/tokens on a task it is not built to solve.'
      }
    ]
  }
];

var FINAL_EXAM_EN = [
  { q: 'Why should a new chat be started for every new topic?', options: ['Mixing topics confuses the model and reduces result quality', 'The data limit per chat is capped at 10 messages', 'Claude loses access to web search in long chats', 'New chats are processed faster'], correct: 0, explanation: 'Chat discipline: one topic per chat. Mixing topics significantly reduces response quality.' },
  { q: 'What is the decisive advantage of the Claude Add-in over the standalone chat in Excel?', options: ['The Add-in switches to the most powerful model automatically', 'The Add-in stores all inputs locally', 'Claude sees the table structure and can read and edit cell content contextually', 'The Add-in replaces Excel\'s formula library'], correct: 2, explanation: 'In the Add-in, Claude knows the open file. In the standalone chat, only manually inserted content is available.' },
  { q: 'What is "Accept all edits" mode in the Claude Excel Add-in?', options: ['Claude asks before every cell change', 'Claude saves the workbook to OneDrive', 'Claude accepts all inputs without moderation', 'Claude applies formula corrections and data changes directly without asking'], correct: 3, explanation: 'In "Accept all edits" mode, corrections are applied immediately — no intermediate questions.' },
  { q: 'Which data protection setting must be deactivated at IEG before first use?', options: ['Incognito mode', 'The web search function', 'Global preferences', 'The "helps improve Claude" option'], correct: 3, explanation: 'The training option must be deactivated so your inputs are not used for model training.' },
  { q: 'What is a key limitation when using Claude for VBA macros?', options: ['Claude refuses to write VBA code', 'Claude writes the code but cannot execute it — the user starts it manually', 'VBA macros are read-only', 'Claude only supports older Excel versions'], correct: 1, explanation: 'Claude creates VBA code but cannot execute it. Starting via the VBA editor is a manual action.' },
  { q: 'What allows Claude to search hundreds of sources in seconds?', options: ['Extended thinking mode', 'Web search via the plus icon with cited source links', 'A connector to Google Scholar', 'The Opus model in Pro version'], correct: 1, explanation: 'Web search (plus icon) allows Claude to research current data and sources live.' },
  { q: 'Why is extended thinking mode recommended for large PDFs?', options: ['It speeds up file uploads', 'It activates web search automatically', 'It gives Claude more time to read the file thoroughly and respond more precisely', 'It converts PDFs to Excel tables'], correct: 2, explanation: 'Extended thinking mode increases analysis depth — especially important for complex documents.' },
  { q: 'What are the six elements of the ideal prompt structure?', options: ['Title, text, format, length, language and model', 'Question, context, roles, output, validation and post-processing', 'Persona, goal, tone, example, format and constraint', 'Task, context, background data, instructions, examples and memories'], correct: 3, explanation: 'The six prompt elements: task, context, background data, instructions, examples, memories.' },
  { q: 'What distinguishes global preferences from a Project system prompt?', options: ['Global preferences apply to every new chat; system prompts only in the respective Project', 'System prompts are processed faster', 'Global preferences are paid; system prompts are free', 'Both are technically identical'], correct: 0, explanation: 'Global preferences = permanently active for every new chat. System prompts only apply in the defined Project.' },
  { q: 'What is "Deep Research" in Claude?', options: ['Searching all previous chats', 'A mode where Claude independently researches over multiple steps and creates a report', 'Opening multiple research chats in parallel', 'A database query for Bloomberg or Statista'], correct: 1, explanation: 'Deep Research = Claude works autonomously over multiple steps and delivers a structured final report.' },
  { q: 'For which Excel tasks is Claude best suited?', options: ['Directly executing macros and sending reports', 'Converting Excel to PDF or Google Sheets', 'Explaining formulas, writing VBA macros and designing transformations', 'Real-time synchronisation with SAP or Oracle'], correct: 2, explanation: 'Claude explains formulas, writes VBA and plans transformation logic — execution remains in Excel.' },
  { q: 'What is a connector in Claude?', options: ['A physical interface module', 'A connection between two Claude chats', 'A Haiku sub-model for enterprise accounts', 'A link to external services like Gmail, Google Drive or Slack'], correct: 3, explanation: 'Connectors link Claude to external services — e.g. Google Drive or Calendar.' },
  { q: 'What is the main purpose of "Projects" in Claude?', options: ['Permanently store context, documents and instructions for a specific topic', 'Manage multiple users simultaneously', 'Archive chats thematically', 'Automatically switch to Opus for maximum quality'], correct: 0, explanation: 'Projects = persistent context with documents and instructions for specific topics.' },
  { q: 'How many characters can a Project system prompt contain?', options: ['2,000 characters', '10,000 characters', '500 characters', '2,000 words'], correct: 1, explanation: 'System prompts in Projects can contain up to 10,000 characters.' },
  { q: 'What distinguishes active memory from passive memory in Claude?', options: ['No technical difference', 'Passive memory is more precise', 'Active memory stores information permanently across chats; passive only in the current chat', 'Active memory requires a separate upgrade'], correct: 2, explanation: 'Active memory stores information across chats. Passive = only in the current context.' },
  { q: 'What advantage does a Project system prompt offer?', options: ['System prompts can load files directly', 'Projects are treated with higher priority', 'The system prompt reduces token costs', 'It is automatically active in every new Project chat — no re-briefing necessary'], correct: 3, explanation: 'A Project system prompt applies automatically to all chats in that project.' },
  { q: 'Why upload project documents into a Claude Project?', options: ['Available in every project chat without re-uploading', 'Claude processes them three times faster', 'They are converted into structured knowledge entries', 'Only Project files work with extended thinking mode'], correct: 0, explanation: 'Project documents are permanently available — Claude accesses them without re-uploading.' },
  { q: 'What does the "Lethal Trifecta" describe?', options: ['Three AI models used simultaneously', 'AI has access to private data, reads external content and can send data outward', 'Activating web search, file upload and connector simultaneously', 'Three common errors: weak password, missing 2FA, no incognito mode'], correct: 1, explanation: 'Lethal Trifecta: private data + external content + outgoing connections = AI hijacking risk.' },
  { q: 'Who owns IP created with the company\'s AI tool?', options: ['The user, as they wrote the prompts', 'Anthropic, as Claude provided the creative output', 'The employer, as the company access was used', 'Nobody — AI outputs are public domain'], correct: 2, explanation: 'Using the company\'s AI subscription = the employer has a legal claim to the resulting IP.' },
  { q: 'How regularly should active connectors be reviewed?', options: ['Once at initial setup', 'Once a year', 'Only when something goes wrong', 'Monthly — disconnect everything not actively needed'], correct: 3, explanation: 'Monthly review: open settings and disconnect everything not actively used.' },
  { q: 'Why must company Gmail not be connected to a personal Claude account?', options: ['Personal accounts provide no data protection guarantees for company data', 'Gmail connections are technically not possible', 'Personal accounts are too slow', 'Company emails are encrypted and cannot be decrypted by Claude'], correct: 0, explanation: 'Personal accounts without enterprise contracts provide no data protection guarantees for company data.' },
  { q: 'What is "Prompt Injection"?', options: ['A technique where multiple instructions are nested', 'An attack where malicious instructions are embedded in external content the AI executes', 'Inserting variables into prompt templates', 'A method for prompt optimisation'], correct: 1, explanation: 'Prompt Injection: attackers hide commands in web pages or documents — the AI executes these when reading them.' },
  { q: 'What should be ensured before entering sensitive company data into Claude?', options: ['Activate incognito mode and extended thinking mode', 'Choose Opus model', 'Use the IEG Enterprise Account and anonymise data if necessary', 'Deactivate web search and connectors'], correct: 2, explanation: 'Sensitive data belongs in the IEG Enterprise Account with security guarantees.' },
  { q: 'What is a Claude Skill?', options: ['A language Claude processes natively', 'An external plugin from a third-party provider', 'A security protocol for enterprise environments', 'A stored work instruction making complex workflows reproducible and automatable'], correct: 3, explanation: 'Skills store workflows permanently — one prompt triggers an entire defined process.' },
  { q: 'What is the difference between a Skill and a Plugin?', options: ['Skills are individual stored capabilities; Plugins bundle multiple functions', 'Plugins are free; Skills require Pro', 'Skills work offline; Plugins need a server', 'No difference'], correct: 0, explanation: 'Skill = individual stored capability. Plugin = bundle of multiple functions or services.' },
  { q: 'How is a new Skill created most efficiently?', options: ['Write instructions manually as YAML', 'Solve in chat first, then create the Skill', 'Wait for automatic Skill suggestion after 10 similar chats', 'Buy from the Claude Marketplace'], correct: 1, explanation: 'Best practice: solve in chat first and check, then ask Claude to save the workflow as a Skill.' },
  { q: 'What makes a Skill valuable in a team context?', options: ['Tied to a specific device', 'Runs automatically in the background', 'Usable in any chat and shareable, scaling expert knowledge', 'Only works with Opus'], correct: 2, explanation: 'Skills are available across chats and shareable — making expert knowledge scalable.' },
  { q: 'What data protection aspect applies to the Excel Add-in for financial models?', options: ['Cell ranges are transmitted to Anthropic servers — handle sensitive data consciously', 'The Add-in permanently stores cell contents in Claude\'s memory', 'All background Excel files are automatically transmitted', 'Claude can start external database queries independently'], correct: 0, explanation: 'The Add-in transmits selected ranges. Anonymise sensitive data or use the IEG Enterprise Account.' },
  { q: 'What is the workflow of the "Super Skill" in finance automation?', options: ['Data Cleaning → clean Excel → dashboard → PowerPoint', 'PowerPoint → dashboard → data cleaning → Excel', 'Excel → PDF → PowerPoint → dashboard', 'Dashboard → Excel → data cleaning → PowerPoint'], correct: 0, explanation: 'Super Skill chain: 1. Data Cleaning → 2. Clean Excel → 3. Dashboard → 4. PowerPoint.' },
  { q: 'What is the main advantage of the Dynamic Dashboard Builder?', options: ['Creates static PDF reports', 'Generates interactive HTML dashboards with drill-down — click shows detail reports', 'Loads real-time data from SAP or Bloomberg', 'Sends reports via Outlook automatically'], correct: 1, explanation: 'The Dashboard Builder creates interactive HTML — click on a name shows all detail reports.' },
  { q: 'Why is a separate branding Skill created?', options: ['Claude cannot generate formatted outputs without it', 'Corporate designs must be registered by law', 'All outputs automatically carry the corporate design — colours and styles centrally stored', 'To customise the Claude interface for all users'], correct: 2, explanation: 'The branding Skill stores colours and design rules — every output automatically looks professional.' },
  { q: 'What is a typical strength of the PowerPoint Add-in?', options: ['Automatically compresses images', 'Exports as PDF and sends via Outlook', 'Creates complete slides and speaker notes from summaries or data tables', 'Scans slides and generates a contents slide automatically'], correct: 2, explanation: 'The PowerPoint Add-in generates slides with content and speaker notes directly in the sidebar.' },
  { q: 'What advantage does the modular Skill approach offer?', options: ['Individual Skills can be independently updated, combined and reused', 'One large Skill is always more reliable', 'Modular Skills run exclusively on Opus', 'No qualitative difference'], correct: 0, explanation: 'Modularity: improve each Skill individually, combine freely, deploy across different workflows.' },
  { q: 'How does Claude Cowork differ from a normal chatbot?', options: ['Cowork only answers faster', 'Cowork is an agent that independently opens, renames, moves files and controls programmes', 'Cowork is a pure cloud function with no local file access', 'Cowork is a separate language model'], correct: 1, explanation: 'Cowork is an AI agent: the model is the brain, Cowork the hands controlling files and programmes.' },
  { q: 'What is the requirement for using Cowork?', options: ['Desktop app and Pro subscription', 'Free account on mobile browser', 'Team contract via web interface', 'Server installation in the corporate network'], correct: 0, explanation: 'Cowork requires the desktop app (Mac/Windows) and a Pro subscription.' },
  { q: 'Why must specific local folders be assigned to Cowork?', options: ['To increase processing speed', 'Because Cowork would otherwise outsource data to the cloud', 'To correctly bill credits', 'Sandboxing: Cowork only works in authorised areas and protects all other data'], correct: 3, explanation: 'Security sandboxing: Cowork may only work in authorised folders — all other data remains protected.' },
  { q: 'How does Cowork store information beyond a single session?', options: ['It does not — all information is lost', 'In a cloud database by Anthropic', 'In Markdown files in the project folder', 'In working memory only'], correct: 2, explanation: 'Cowork has no session memory and uses Markdown files in the project folder for permanent storage.' },
  { q: 'What applies to a running Cowork task and model choice?', options: ['App must remain open; Sonnet for sorting, Opus for complex analyses', 'App may be closed; model is irrelevant', 'Task runs with Haiku only; closing app has no effect', 'Opus mandatory for every task'], correct: 0, explanation: 'Session persistence: app must remain open. Sonnet for sorting, Opus for complex analyses.' },
  { q: 'What distinguishes Opus from Sonnet for complex analyses?', options: ['Opus is slower but delivers identical quality', 'Sonnet has a larger context window', 'Opus integrates sources more deeply; Sonnet is more efficient for routine tasks', 'No qualitative difference'], correct: 2, explanation: 'Opus for in-depth research; Sonnet for daily routine work with good quality-speed balance.' },
  { q: 'What distinguishes a Skill from a Project system prompt?', options: ['No difference', 'Projects are more flexible', 'Skills require Pro; system prompts are free in all versions', 'Skills are usable in any chat; system prompts only apply in the respective Project'], correct: 3, explanation: 'Skills: universally deployable in any chat. System prompts: only within the defined Project.' },
  { q: 'What is the key difference between Claude Tag and a normal Claude chat in Slack?', options: ['Claude Tag is faster but stores no data', 'Claude Tag is multiplayer — one shared Claude per channel that builds context over time and can be picked up by anyone', 'Claude Tag only works for coding tasks', 'Claude Tag requires a separate login'], correct: 1, explanation: 'Claude Tag is a shared team member: one Claude per channel, visible to everyone, building persistent context — fundamentally different from a private 1:1 chat.' },
  { q: 'What does "ambient behaviour" mean in Claude Tag?', options: ['Claude runs with reduced compute in the background', 'Claude proactively flags relevant updates and follows up on unresolved threads without being explicitly tagged', 'Claude sends automated daily reports to all members', 'Claude only responds when directly mentioned'], correct: 1, explanation: 'Ambient behaviour: Claude takes initiative — it flags relevant information and picks up stalled threads on its own, without waiting to be tagged.' },
  { q: 'How does Claude Tag ensure that a Claude set up for sales cannot access engineering data?', options: ['Users manually set access rights per message', 'There is no separation — all Claudes share the same memory', 'Admins create channel-specific Claude identities, each with its own scoped memory and tool access', 'Claude automatically detects sensitive content and ignores it'], correct: 2, explanation: 'Channel-specific identities: each Claude is scoped to its configured channels — memories and tool access never spill over to other channels or teams.' },
  { q: 'Why do later messages in a long conversation cost more tokens than early ones?', options: ['Claude switches to a more expensive model automatically', 'Claude re-reads the entire conversation history from the start on every new message', 'Longer conversations always trigger Extended Thinking', 'The token price increases the longer a chat has been open'], correct: 1, explanation: 'Every new message causes Claude to re-read the full conversation history — every prior message and answer — so later messages in a long conversation are more expensive to process.' },
  { q: 'According to the source, what should you do before asking Cowork to build a file like a financial model or report?', options: ['Go straight to Cowork so it can plan and build in one step', 'Plan and agree on the structure in Chat first, then move to Cowork once the plan is final', 'Always use Claude Code instead of Cowork for any file creation', 'Ask Cowork to build three different draft versions to compare'], correct: 1, explanation: 'File creation in Cowork uses more of the usage limit than regular chat messages, so the recommended approach is to do the planning/thinking in Chat and only build the final file in Cowork.' },
  { q: 'When part of an output is wrong (e.g., one section of a report), what is the more token-efficient way to fix it?', options: ['Ask Claude to redo the entire report from scratch', 'Point to the specific section that is wrong and ask Claude to redo only that part', 'Start a completely new project', 'Ask for three alternative full versions of the report'], correct: 1, explanation: 'A full redo regenerates the entire output and its token cost, while pointing to the specific section that needs fixing avoids regenerating everything else.' }
];
