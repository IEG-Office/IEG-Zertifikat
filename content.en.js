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
          <tr><td><strong>Haiku</strong></td><td>The fastest and most cost-efficient model</td><td>Simple tasks, quick formatting, short summaries</td></tr>
          <tr><td><strong>Sonnet</strong></td><td>The "all-rounder"</td><td>Balanced combination of speed and intelligence — everyday work</td></tr>
          <tr><td><strong>Opus</strong></td><td>The flagship model</td><td>Maximum capability for extremely complex analyses and decisions</td></tr>
        </tbody>
      </table>
      <div class="callout">
        <div class="callout-title">Looking ahead: What's next?</div>
        <p>Anthropic is continuously developing new models. The current state of progress shows where things are headed — speed, depth and integration will continue to grow.</p>
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
    videos: [],
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
  { q: 'How does Claude Tag ensure that a Claude set up for sales cannot access engineering data?', options: ['Users manually set access rights per message', 'There is no separation — all Claudes share the same memory', 'Admins create channel-specific Claude identities, each with its own scoped memory and tool access', 'Claude automatically detects sensitive content and ignores it'], correct: 2, explanation: 'Channel-specific identities: each Claude is scoped to its configured channels — memories and tool access never spill over to other channels or teams.' }
];

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
  { q: 'Wie stellt Claude Tag sicher dass ein Claude für Sales nicht auf Engineering-Daten zugreifen kann?', options: ['Nutzer setzen Zugriffsrechte manuell pro Nachricht', 'Es gibt keine Trennung — alle Claudes teilen denselben Kontext', 'Admins erstellen kanalspezifische Claude-Identitäten mit eigenem Kontext und Tool-Zugriff', 'Claude erkennt sensible Inhalte automatisch und ignoriert sie'], correct: 2, explanation: 'Kanalspezifische Identitäten: jeder Claude ist auf seine konfigurierten Kanäle beschränkt — Kontext und Tool-Zugriff fließen nie in andere Kanäle über.' }
];

const PASS_THRESHOLD = 70;
