/* ============================================================
   HELIX AI — Shared common.js
   Provides: State, DATA, utilities, layouts, dropdowns, charts
============================================================ */

/* ===== Route map (logical key → real .html) ===== */
const ROUTES = {
  // Public
  landing:'index.html', pricing:'pricing.html', features:'features.html', contact:'contact.html',
  login:'login.html', signup:'signup.html', forgot:'forgot-password.html', reset:'reset-password.html', otp:'otp.html',
  // Dashboard
  overview:'dashboard.html', inbox:'inbox.html', tickets:'tickets.html', ai:'ai-assistant.html',
  analytics:'analytics.html', kb:'knowledge-base.html', customer:'customer.html', team:'team.html',
  notifications:'notifications.html', billing:'billing.html', settings:'settings.html',
};
const goTo = key => { if(ROUTES[key]) window.location.href = ROUTES[key]; };

/* ===== Global UI state (per-page) ===== */
const State = {
  theme: localStorage.getItem('theme') || 'dark',
  sidebarOpen: false,
  notifOpen: false,
  profileOpen: false,
  workspaceOpen: false,
  activePage: window.HELIX_PAGE || 'overview',  // set per page
};

/* ===== Theme bootstrap ===== */
(function applyTheme(){
  const html = document.documentElement;
  html.classList.toggle('dark', State.theme==='dark');
  html.classList.toggle('light', State.theme==='light');
  document.body && (document.body.className = State.theme==='dark'
    ? 'bg-ink-950 text-ink-100 transition-colors duration-300'
    : 'bg-ink-50 text-ink-900 transition-colors duration-300');
})();
function toggleTheme(){
  State.theme = State.theme==='dark' ? 'light':'dark';
  localStorage.setItem('theme', State.theme);
  const html = document.documentElement;
  html.classList.toggle('dark', State.theme==='dark');
  html.classList.toggle('light', State.theme==='light');
  document.body.className = State.theme==='dark'
    ? 'bg-ink-950 text-ink-100 transition-colors duration-300'
    : 'bg-ink-50 text-ink-900 transition-colors duration-300';
  if(window.refreshIcons) refreshIcons();
}

/* ===== Helpers ===== */
const icon = (name, cls='w-4 h-4') => `<i data-lucide="${name}" class="${cls}"></i>`;
const refreshIcons = () => window.lucide && lucide.createIcons();
const avatar = (initials, size='w-9 h-9', online=false) => `
  <div class="relative inline-flex items-center justify-center ${size} rounded-full bg-gradient-to-br from-brand-500 to-fuchsia-500 text-white font-semibold text-xs select-none">
    ${initials}
    ${online ? `<span class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full dot-online"></span>`:''}
  </div>`;
const statusBadge = (s) => {
  const map = {
    'Open':'bg-brand-500/10 text-brand-300 ring-brand-500/20',
    'Pending':'bg-amber-500/10 text-amber-300 ring-amber-500/20',
    'In Progress':'bg-cyan-500/10 text-cyan-300 ring-cyan-500/20',
    'Resolved':'bg-emerald-500/10 text-emerald-300 ring-emerald-500/20',
    'Closed':'bg-ink-500/10 text-ink-300 ring-ink-500/20',
  };
  return `<span class="inline-flex items-center gap-1.5 text-[11px] font-medium px-2 py-0.5 rounded-full ring-1 ${map[s]||map['Open']}">
    <span class="w-1.5 h-1.5 rounded-full bg-current"></span>${s}</span>`;
};
const priorityBadge = (p) => {
  const map = {
    'Low':'text-ink-300 bg-ink-700/40',
    'Medium':'text-cyan-300 bg-cyan-500/10',
    'High':'text-amber-300 bg-amber-500/10',
    'Urgent':'text-rose-300 bg-rose-500/10',
  };
  return `<span class="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded ${map[p]||map['Low']}">${p}</span>`;
};
function input(label, placeholder='', type='text', id=''){
  return `<div>
    <label class="text-xs text-ink-300 mb-1.5 block">${label}</label>
    <input ${id?`id="${id}"`:''} type="${type}" placeholder="${placeholder}" class="w-full bg-white/5 ring-1 ring-white/10 rounded-lg px-3 py-2.5 text-sm placeholder-ink-500 focus:ring-brand-500 focus:outline-none transition"/>
  </div>`;
}
function toast(msg, type='info'){
  const colors = { success:'emerald', error:'rose', info:'brand' };
  const c = colors[type] || 'brand';
  const el = document.createElement('div');
  el.className = `toast-enter glass rounded-xl px-4 py-3 ring-1 ring-${c}-500/40 flex items-center gap-2 shadow-soft min-w-[260px]`;
  el.innerHTML = `<span class="w-2 h-2 rounded-full bg-${c}-400 animate-pulse-dot"></span><span class="text-sm">${msg}</span>`;
  let root = document.getElementById('toast-root');
  if(!root){ root = document.createElement('div'); root.id='toast-root'; root.className='fixed bottom-6 right-6 z-[100] flex flex-col gap-2'; document.body.appendChild(root); }
  root.appendChild(el);
  setTimeout(()=>el.remove(), 3500);
}
function closeModal(){ const r = document.getElementById('modal-root'); if(r) r.innerHTML=''; }
function ensureModalRoot(){
  let r = document.getElementById('modal-root');
  if(!r){ r=document.createElement('div'); r.id='modal-root'; document.body.appendChild(r); }
  return r;
}

/* ============================================================
   DUMMY DATA
============================================================ */
const DATA = {
  kpis:[
    { label:'Open Tickets', value:'1,284', delta:'+12.4%', up:true, icon:'ticket', color:'from-brand-500/30 to-brand-500/0' },
    { label:'Avg. Response', value:'2m 14s', delta:'-18.2%', up:true, icon:'timer', color:'from-emerald-500/30 to-emerald-500/0' },
    { label:'CSAT Score', value:'96.8%', delta:'+2.1%', up:true, icon:'smile', color:'from-fuchsia-500/30 to-fuchsia-500/0' },
    { label:'AI Resolutions', value:'8,431', delta:'+34.7%', up:true, icon:'sparkles', color:'from-amber-500/30 to-amber-500/0' },
  ],
  agents:[
    { name:'Ava Carter', role:'Senior Agent', avatar:'AC', solved:184, csat:98, online:true },
    { name:'Liam Reyes',  role:'Support Lead', avatar:'LR', solved:172, csat:96, online:true },
    { name:'Sofia Patel', role:'AI Specialist', avatar:'SP', solved:158, csat:95, online:false },
    { name:'Noah Kim',    role:'Agent',        avatar:'NK', solved:140, csat:94, online:true },
    { name:'Mia Johnson', role:'Agent',        avatar:'MJ', solved:122, csat:92, online:false },
  ],
  chats:[
    { id:1, name:'Eleanor Hughes', last:'Thanks! That solved it 🙏', time:'2m', unread:0, online:true, avatar:'EH', tag:'VIP' },
    { id:2, name:'Marcus Doyle',  last:'Can you check my invoice…', time:'5m', unread:2, online:true, avatar:'MD', tag:'Billing' },
    { id:3, name:'Priya Sharma',  last:'AI bot didn\'t understand', time:'12m', unread:1, online:false, avatar:'PS', tag:'AI' },
    { id:4, name:'James O\'Connor', last:'Still seeing 500 errors', time:'25m', unread:3, online:true, avatar:'JO', tag:'Bug' },
    { id:5, name:'Yuki Tanaka',   last:'Renewal coming up?', time:'1h', unread:0, online:false, avatar:'YT', tag:'Sales' },
    { id:6, name:'Helena Stern',  last:'Login link expired', time:'2h', unread:0, online:true, avatar:'HS', tag:'Auth' },
  ],
  tickets:[
    { id:'#48291', subject:'Unable to export CSV report', customer:'Eleanor H.',   status:'Open',     priority:'High',   updated:'2m',  agent:'AC' },
    { id:'#48290', subject:'Billing — duplicate charge',  customer:'Marcus D.',    status:'Pending',  priority:'Urgent', updated:'10m', agent:'LR' },
    { id:'#48289', subject:'API key rotation question',   customer:'Priya S.',     status:'Open',     priority:'Medium', updated:'22m', agent:'SP' },
    { id:'#48288', subject:'Webhook delivery failing',    customer:'James O.',     status:'In Progress',priority:'High', updated:'1h',  agent:'NK' },
    { id:'#48287', subject:'Refund request — order 8821', customer:'Yuki T.',      status:'Resolved', priority:'Low',    updated:'2h',  agent:'MJ' },
    { id:'#48286', subject:'Mobile app crashes on launch',customer:'Helena S.',    status:'Open',     priority:'Urgent', updated:'3h',  agent:'AC' },
    { id:'#48285', subject:'Integration with Salesforce', customer:'Daniel W.',    status:'Pending',  priority:'Medium', updated:'4h',  agent:'LR' },
    { id:'#48284', subject:'SSO setup for enterprise',    customer:'Rebecca A.',   status:'Resolved', priority:'High',   updated:'1d',  agent:'SP' },
  ],
  activity:[
    { who:'Ava Carter',  what:'resolved ticket', target:'#48287', time:'2m ago', color:'emerald' },
    { who:'AI Agent',    what:'auto-replied to', target:'#48291', time:'4m ago', color:'fuchsia' },
    { who:'Liam Reyes',  what:'assigned',        target:'#48290 to Sofia', time:'8m ago', color:'brand' },
    { who:'Sofia Patel', what:'updated KB article', target:'"Reset password"', time:'15m ago', color:'amber' },
    { who:'Noah Kim',    what:'closed conversation', target:'with Helena S.', time:'30m ago', color:'cyan' },
  ],
  notifications:[
    { title:'New ticket assigned',   body:'#48292 — Login issue from Acme Corp',     time:'1m', icon:'ticket',  unread:true },
    { title:'AI suggestion ready',   body:'3 reply suggestions for #48290',          time:'5m', icon:'sparkles',unread:true },
    { title:'SLA breach warning',    body:'#48285 nearing 4h SLA threshold',         time:'12m',icon:'alert-triangle',unread:true },
    { title:'New 5★ review',         body:'Eleanor Hughes rated her experience',     time:'1h', icon:'star',    unread:false },
    { title:'Weekly report ready',   body:'May 19 – May 25 analytics summary',       time:'3h', icon:'bar-chart-2',unread:false },
  ],
  plans:[
    { name:'Starter', price:{m:0,y:0}, desc:'For solo founders getting started',
      features:['Up to 2 agents','500 conversations/mo','Email & chat support','Basic AI replies','7-day history'],
      cta:'Start free', highlight:false },
    { name:'Pro', price:{m:49,y:39}, desc:'Growing teams scaling support',
      features:['Up to 15 agents','10,000 conversations/mo','Advanced AI assistant','Custom workflows','Analytics dashboard','Integrations'],
      cta:'Start 14-day trial', highlight:true },
    { name:'Enterprise', price:{m:'Custom',y:'Custom'}, desc:'Mission-critical support at scale',
      features:['Unlimited agents','Unlimited conversations','Dedicated AI training','SSO + SCIM','99.99% SLA','24/7 priority support'],
      cta:'Contact sales', highlight:false },
  ],
  faqs:[
    {q:'How does the AI assistant work?', a:'Helix AI learns from your past tickets and knowledge base to draft replies, summarize threads, and detect sentiment in real time. Every suggestion is reviewed by your agents before sending.'},
    {q:'Can I migrate from Zendesk or Intercom?', a:'Yes — we offer one-click imports for Zendesk, Intercom, Freshdesk and HelpScout. Your tickets, contacts, and macros transfer in under 10 minutes.'},
    {q:'Is my data secure?', a:'Helix is SOC 2 Type II certified, GDPR compliant, and offers AES-256 encryption at rest. Enterprise plans include private VPC deployment.'},
    {q:'Do you offer a free trial?', a:'Every plan includes a no-credit-card 14-day trial with full access to AI features.'},
    {q:'What integrations do you support?', a:'Out of the box: Slack, Salesforce, HubSpot, Jira, Linear, Notion, Stripe, Shopify, Zapier and 80+ more.'},
  ],
  testimonials:[
    { quote:'Helix cut our first-response time by 73%. The AI replies feel like our best agent wrote them.', name:'Priya Menon', role:'Head of Support, Linear', avatar:'PM'},
    { quote:'We replaced Zendesk in a weekend. The migration tool just worked — and the UI is gorgeous.', name:'Tom Hardwick', role:'COO, Loom', avatar:'TH'},
    { quote:'Sentiment analysis flags angry customers before they churn. Game changer for retention.', name:'Aisha Bello', role:'CX Director, Notion', avatar:'AB'},
  ],
};

/* ============================================================
   PUBLIC NAVBAR + FOOTER
============================================================ */
function PublicNavbar(){
  return `
  <header class="sticky top-0 z-40 glass border-b border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div class="flex items-center gap-8">
        <a href="index.html" class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-500 to-fuchsia-500 grid place-items-center shadow-glow">
            ${icon('sparkles','w-4 h-4 text-white')}
          </div>
          <span class="font-bold tracking-tight">Helix<span class="text-brand-400">AI</span></span>
        </a>
        <nav class="hidden md:flex items-center gap-6 text-sm text-ink-300">
          <a class="hover:text-white transition" href="features.html">Features</a>
          <a class="hover:text-white transition" href="pricing.html">Pricing</a>
          <a class="hover:text-white transition" href="index.html">Customers</a>
          <a class="hover:text-white transition" href="contact.html">Contact</a>
        </nav>
      </div>
      <div class="flex items-center gap-2">
        <button onclick="toggleTheme()" class="p-2 rounded-lg hover:bg-white/5 transition" data-tip="Toggle theme">
          ${icon('moon','w-4 h-4')}
        </button>
        <a href="login.html" class="hidden sm:inline-flex text-sm text-ink-200 hover:text-white px-3 py-2 rounded-lg">Sign in</a>
        <a href="dashboard.html" class="inline-flex items-center gap-1.5 text-sm font-medium px-3.5 py-2 rounded-lg bg-white text-ink-900 hover:bg-ink-100 transition shadow-soft">
          Open dashboard ${icon('arrow-right','w-4 h-4')}
        </a>
      </div>
    </div>
  </header>`;
}

function PublicFooter(){
  return `
  <footer class="border-t border-white/5 mt-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-5 gap-8">
      <div class="md:col-span-2">
        <div class="flex items-center gap-2 mb-3">
          <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-500 to-fuchsia-500 grid place-items-center">${icon('sparkles','w-4 h-4 text-white')}</div>
          <span class="font-bold">Helix<span class="text-brand-400">AI</span></span>
        </div>
        <p class="text-sm text-ink-400 max-w-sm">AI-powered customer support for modern teams. Resolve faster, delight always.</p>
        <div class="flex gap-3 mt-5 text-ink-400">
          ${['twitter','github','linkedin','youtube'].map(s=>`<a href="#" class="p-2 rounded-lg hover:bg-white/5">${icon(s,'w-4 h-4')}</a>`).join('')}
        </div>
      </div>
      ${[
        {h:'Product', l:[['Features','features.html'],['Pricing','pricing.html'],['Changelog','#'],['Roadmap','#'],['Integrations','#']]},
        {h:'Company', l:[['About','#'],['Blog','#'],['Careers','#'],['Press kit','#'],['Contact','contact.html']]},
        {h:'Resources', l:[['Docs','#'],['API reference','#'],['Status','#'],['Security','#'],['Community','#']]},
      ].map(col=>`
        <div>
          <h4 class="text-sm font-semibold text-white mb-3">${col.h}</h4>
          <ul class="space-y-2 text-sm text-ink-400">
            ${col.l.map(i=>`<li><a href="${i[1]}" class="hover:text-white transition">${i[0]}</a></li>`).join('')}
          </ul>
        </div>
      `).join('')}
    </div>
    <div class="border-t border-white/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-ink-400">
        <p>© 2026 Helix AI, Inc. All rights reserved.</p>
        <div class="flex gap-5"><a href="#" class="hover:text-white">Privacy</a><a href="#" class="hover:text-white">Terms</a><a href="#" class="hover:text-white">Cookies</a></div>
      </div>
    </div>
  </footer>`;
}

/* ============================================================
   AUTH SHELL
============================================================ */
function AuthShell(title, subtitle, body, footer){
  return `
  <div class="min-h-screen grid md:grid-cols-2">
    <div class="flex flex-col p-6 md:p-12">
      <a href="index.html" class="flex items-center gap-2 mb-12">
        <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-500 to-fuchsia-500 grid place-items-center">${icon('sparkles','w-4 h-4 text-white')}</div>
        <span class="font-bold">Helix<span class="text-brand-400">AI</span></span>
      </a>
      <div class="m-auto w-full max-w-sm">
        <h1 class="text-3xl font-bold">${title}</h1>
        <p class="mt-2 text-sm text-ink-300">${subtitle}</p>
        <div class="mt-8 space-y-4">${body}</div>
        ${footer?`<p class="mt-6 text-center text-sm text-ink-400">${footer}</p>`:''}
      </div>
    </div>
    <div class="hidden md:block relative radial-bg overflow-hidden border-l border-white/5">
      <div class="absolute inset-0 grid place-items-center p-12">
        <div class="glass rounded-2xl p-6 max-w-md w-full shadow-soft">
          <div class="flex items-center gap-2 mb-4">
            ${avatar('AC','w-9 h-9',true)}
            <div><p class="text-sm font-semibold">AI Assistant</p><p class="text-xs text-emerald-400">● Online</p></div>
          </div>
          <div class="space-y-2">
            <div class="bg-white/5 p-3 rounded-2xl rounded-tl-sm text-sm">Welcome back! Ready to delight some customers today? ✨</div>
            <div class="bg-brand-500/90 p-3 rounded-2xl rounded-tr-sm text-sm ml-8 text-white">Let's do it!</div>
            <div class="bg-white/5 p-3 rounded-2xl rounded-tl-sm text-sm">Great — you have 12 new conversations waiting.</div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

/* ============================================================
   DASHBOARD SIDEBAR + TOPBAR
============================================================ */
const NAV = [
  { key:'overview',      label:'Overview',       icon:'layout-dashboard' },
  { key:'inbox',         label:'Inbox',          icon:'inbox', badge:'12' },
  { key:'tickets',       label:'Tickets',        icon:'ticket' },
  { key:'ai',            label:'AI Assistant',   icon:'sparkles', tag:'NEW' },
  { key:'analytics',     label:'Analytics',      icon:'bar-chart-3' },
  { key:'kb',            label:'Knowledge Base', icon:'book-open' },
  { key:'customer',      label:'Customers',      icon:'users' },
  { key:'team',          label:'Team',           icon:'user-cog' },
  { key:'notifications', label:'Notifications',  icon:'bell' },
  { key:'billing',       label:'Billing',        icon:'credit-card' },
  { key:'settings',      label:'Settings',       icon:'settings' },
];

function navItem(n){
  const active = State.activePage===n.key;
  return `
  <a href="${ROUTES[n.key]}" class="nav-item ${active?'active':''} group flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm text-ink-300 hover:text-white hover:bg-white/5 transition relative">
    <span class="nav-dot absolute left-0 w-1 h-5 rounded-r-full bg-brand-400 opacity-0"></span>
    ${icon(n.icon,'w-4 h-4')}
    <span class="flex-1">${n.label}</span>
    ${n.badge?`<span class="text-[10px] font-medium px-1.5 py-0.5 rounded bg-brand-500/20 text-brand-300">${n.badge}</span>`:''}
    ${n.tag?`<span class="text-[9px] font-bold px-1.5 py-0.5 rounded bg-gradient-to-r from-fuchsia-500 to-brand-500 text-white">${n.tag}</span>`:''}
  </a>`;
}

function Sidebar(mobile=false){
  return `
  <aside class="${mobile?'fixed inset-y-0 left-0 z-50 w-72':'desktop-sidebar w-64 hidden lg:flex'} flex-col bg-ink-950/95 border-r border-white/5 backdrop-blur-xl">
    <div class="p-4 border-b border-white/5 relative">
      <button onclick="State.workspaceOpen=!State.workspaceOpen; rerenderShell()" class="w-full flex items-center gap-2.5 p-2 rounded-lg hover:bg-white/5 transition">
        <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-fuchsia-500 grid place-items-center font-bold text-sm">AC</div>
        <div class="flex-1 text-left">
          <p class="text-sm font-semibold leading-tight">Acme Support</p>
          <p class="text-[11px] text-ink-400">Enterprise · 24 agents</p>
        </div>
        ${icon('chevrons-up-down','w-4 h-4 text-ink-400')}
      </button>
      ${State.workspaceOpen?`
      <div class="absolute left-4 right-4 top-[72px] glass rounded-xl p-2 z-50 shadow-soft animate-fade-in">
        ${[
          {n:'Acme Support',d:'Enterprise · 24 agents',a:'AC',active:true},
          {n:'Internal IT',d:'Pro · 8 agents',a:'IT'},
          {n:'Personal',d:'Free · solo',a:'PS'},
        ].map(w=>`
          <button class="w-full flex items-center gap-2.5 p-2 rounded-lg hover:bg-white/5 text-left">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-fuchsia-500 grid place-items-center text-xs font-bold">${w.a}</div>
            <div class="flex-1 min-w-0"><p class="text-sm font-medium truncate">${w.n}</p><p class="text-[11px] text-ink-400 truncate">${w.d}</p></div>
            ${w.active?icon('check','w-4 h-4 text-emerald-400'):''}
          </button>`).join('')}
        <div class="border-t border-white/5 mt-1 pt-1">
          <button class="w-full text-left p-2 rounded-lg hover:bg-white/5 text-sm flex items-center gap-2 text-brand-300">${icon('plus','w-4 h-4')} New workspace</button>
        </div>
      </div>`:''}
    </div>
    <nav class="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
      <p class="px-2 mb-2 text-[10px] uppercase tracking-wider text-ink-500 font-semibold">Workspace</p>
      ${NAV.slice(0,7).map(n=>navItem(n)).join('')}
      <p class="px-2 mt-5 mb-2 text-[10px] uppercase tracking-wider text-ink-500 font-semibold">Admin</p>
      ${NAV.slice(7).map(n=>navItem(n)).join('')}
    </nav>
    <div class="p-4 border-t border-white/5">
      <div class="rounded-xl p-4 bg-gradient-to-br from-brand-500/20 to-fuchsia-500/20 ring-1 ring-brand-500/30">
        <div class="flex items-center gap-2 text-xs font-medium text-brand-200">${icon('zap','w-3.5 h-3.5')} Upgrade to Enterprise</div>
        <p class="mt-1.5 text-xs text-ink-300">Unlock unlimited AI training, SSO, and 24/7 support.</p>
        <button class="mt-3 w-full py-1.5 text-xs font-medium rounded-lg bg-white text-ink-900 hover:bg-ink-100 transition">Upgrade plan</button>
      </div>
    </div>
  </aside>`;
}

const TITLES = {overview:'Overview',inbox:'Inbox',tickets:'Tickets',ai:'AI Assistant',analytics:'Analytics',kb:'Knowledge Base',customer:'Customers',team:'Team',notifications:'Notifications',billing:'Billing',settings:'Settings'};

function Topbar(){
  return `
  <header class="sticky top-0 z-30 bg-ink-950/80 backdrop-blur-xl border-b border-white/5">
    <div class="h-16 px-4 sm:px-6 flex items-center gap-3">
      <button onclick="State.sidebarOpen=true;rerenderShell()" class="lg:hidden p-2 rounded-lg hover:bg-white/5">${icon('menu','w-5 h-5')}</button>
      <div class="hidden sm:block">
        <h1 class="text-base font-semibold">${TITLES[State.activePage]||''}</h1>
        <p class="text-[11px] text-ink-400">Helix / ${TITLES[State.activePage]||''}</p>
      </div>
      <div class="flex-1 max-w-md mx-auto relative">
        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-ink-500">${icon('search','w-4 h-4')}</span>
        <input type="text" placeholder="Search tickets, customers, articles…" class="w-full pl-9 pr-16 py-2 text-sm bg-white/5 ring-1 ring-white/10 rounded-lg focus:ring-brand-500 outline-none transition" />
        <span class="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-ink-400 px-1.5 py-0.5 rounded bg-white/5 ring-1 ring-white/10 font-mono">⌘K</span>
      </div>
      <div class="flex items-center gap-1.5">
        <button onclick="toggleTheme()" class="p-2 rounded-lg hover:bg-white/5 transition" data-tip="Toggle theme">${icon(State.theme==='dark'?'sun':'moon','w-4 h-4')}</button>
        <button class="p-2 rounded-lg hover:bg-white/5 transition hidden sm:inline-flex" data-tip="Help">${icon('help-circle','w-4 h-4')}</button>
        <div class="relative">
          <button onclick="State.notifOpen=!State.notifOpen;State.profileOpen=false;rerenderShell()" class="relative p-2 rounded-lg hover:bg-white/5 transition">
            ${icon('bell','w-4 h-4')}
            <span class="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-400 ring-2 ring-ink-950 animate-pulse-dot"></span>
          </button>
          ${State.notifOpen?NotificationsDropdown():''}
        </div>
        <div class="relative">
          <button onclick="State.profileOpen=!State.profileOpen;State.notifOpen=false;rerenderShell()" class="flex items-center gap-2 p-1 rounded-lg hover:bg-white/5 transition">
            ${avatar('JD','w-8 h-8',true)}
          </button>
          ${State.profileOpen?ProfileDropdown():''}
        </div>
      </div>
    </div>
  </header>`;
}

function NotificationsDropdown(){
  return `
  <div class="absolute right-0 mt-2 w-80 glass rounded-xl shadow-soft ring-1 ring-white/10 z-50 animate-fade-in">
    <div class="flex items-center justify-between p-3 border-b border-white/5">
      <h4 class="text-sm font-semibold">Notifications</h4>
      <a href="#" class="text-xs text-brand-400 hover:underline">Mark all read</a>
    </div>
    <div class="max-h-80 overflow-y-auto scroll-thin">
      ${DATA.notifications.map(n=>`
        <div class="flex items-start gap-3 p-3 hover:bg-white/5 transition cursor-pointer border-b border-white/5 last:border-0 ${n.unread?'bg-brand-500/[.04]':''}">
          <div class="w-9 h-9 rounded-lg bg-white/5 grid place-items-center text-brand-300">${icon(n.icon,'w-4 h-4')}</div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium leading-tight">${n.title}</p>
            <p class="text-xs text-ink-400 mt-0.5 truncate">${n.body}</p>
            <p class="text-[11px] text-ink-500 mt-1">${n.time} ago</p>
          </div>
          ${n.unread?`<span class="w-2 h-2 rounded-full bg-brand-400 mt-2"></span>`:''}
        </div>
      `).join('')}
    </div>
    <a href="notifications.html" class="block text-center p-2.5 text-xs text-brand-400 hover:bg-white/5 border-t border-white/5">View all notifications →</a>
  </div>`;
}

function ProfileDropdown(){
  return `
  <div class="absolute right-0 mt-2 w-64 glass rounded-xl ring-1 ring-white/10 shadow-soft z-50 animate-fade-in">
    <div class="p-3 border-b border-white/5 flex items-center gap-3">
      ${avatar('JD','w-10 h-10',true)}
      <div class="min-w-0">
        <p class="text-sm font-semibold truncate">Jane Doe</p>
        <p class="text-xs text-ink-400 truncate">jane@acme.com</p>
      </div>
    </div>
    <div class="p-1.5">
      <a href="settings.html" class="flex items-center gap-2.5 px-2 py-1.5 rounded-md hover:bg-white/5 text-sm">${icon('user','w-4 h-4 text-ink-400')} Profile</a>
      <a href="settings.html" class="flex items-center gap-2.5 px-2 py-1.5 rounded-md hover:bg-white/5 text-sm">${icon('settings','w-4 h-4 text-ink-400')} Settings</a>
      <a href="billing.html" class="flex items-center gap-2.5 px-2 py-1.5 rounded-md hover:bg-white/5 text-sm">${icon('credit-card','w-4 h-4 text-ink-400')} Billing</a>
      <a href="#" class="flex items-center gap-2.5 px-2 py-1.5 rounded-md hover:bg-white/5 text-sm">${icon('keyboard','w-4 h-4 text-ink-400')} Keyboard shortcuts</a>
    </div>
    <div class="p-1.5 border-t border-white/5">
      <a href="login.html" class="flex items-center gap-2.5 px-2 py-1.5 rounded-md hover:bg-white/5 text-sm text-rose-400">${icon('log-out','w-4 h-4')} Sign out</a>
    </div>
  </div>`;
}

/* ============================================================
   DASHBOARD SHELL (used by all dashboard pages)
============================================================ */
function mountDashboard(activeKey, contentHTML){
  State.activePage = activeKey;
  const root = document.getElementById('app');
  root.innerHTML = `
    <div class="min-h-screen flex">
      ${Sidebar()}
      ${State.sidebarOpen ? `<div class="fixed inset-0 bg-black/50 z-40 lg:hidden" onclick="State.sidebarOpen=false;rerenderShell()"></div>${Sidebar(true)}`:''}
      <div class="flex-1 flex flex-col min-w-0">
        ${Topbar()}
        <main class="flex-1 p-4 sm:p-6 lg:p-8">${contentHTML}</main>
      </div>
    </div>`;
  refreshIcons();
  if(window.initCharts) initCharts();
}
function rerenderShell(){
  // Re-render shell with same content (used for dropdown toggles)
  if(window.__lastContent) mountDashboard(State.activePage, window.__lastContent);
}
function mountPublic(contentHTML){
  document.getElementById('app').innerHTML = PublicNavbar() + contentHTML + PublicFooter();
  refreshIcons();
  if(window.initCharts) initCharts();
}
function mountAuth(html){
  document.getElementById('app').innerHTML = html;
  refreshIcons();
}

/* ============================================================
   PRICING CARDS (reusable across landing & pricing)
============================================================ */
function PricingCards(cycle='m'){
  return `
  <div class="grid md:grid-cols-3 gap-5">
    ${DATA.plans.map(p=>`
      <div class="relative rounded-2xl p-7 ${p.highlight?'glass ring-2 ring-brand-500/50 shadow-glow':'glass'}">
        ${p.highlight?`<span class="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-medium px-2.5 py-1 rounded-full bg-gradient-to-r from-brand-500 to-fuchsia-500 text-white">Most popular</span>`:''}
        <h3 class="text-xl font-semibold">${p.name}</h3>
        <p class="text-sm text-ink-400 mt-1">${p.desc}</p>
        <div class="mt-5 flex items-baseline gap-1">
          ${typeof p.price[cycle]==='number'?`<span class="text-4xl font-bold">$${p.price[cycle]}</span><span class="text-sm text-ink-400">/agent/mo</span>`:`<span class="text-4xl font-bold">${p.price[cycle]}</span>`}
        </div>
        <a href="signup.html" class="mt-5 block text-center w-full px-4 py-2.5 rounded-xl ${p.highlight?'bg-white text-ink-900 hover:bg-ink-100':'bg-white/5 ring-1 ring-white/10 hover:bg-white/10'} text-sm font-medium transition">${p.cta}</a>
        <ul class="mt-6 space-y-2.5 text-sm">
          ${p.features.map(f=>`<li class="flex gap-2 text-ink-200">${icon('check','w-4 h-4 text-emerald-400 mt-0.5')} ${f}</li>`).join('')}
        </ul>
      </div>
    `).join('')}
  </div>`;
}

/* ============================================================
   CHARTS — initCharts (called by mount functions)
============================================================ */
function initCharts(){
  if(typeof Chart === 'undefined') return;
  Chart.defaults.color = State.theme==='dark' ? '#8b93aa' : '#525a76';
  Chart.defaults.borderColor = State.theme==='dark' ? 'rgba(255,255,255,.06)' : 'rgba(15,23,42,.08)';
  Chart.defaults.font.family = 'Inter, system-ui, sans-serif';

  const grad = (ctx, c1, c2) => {
    const g = ctx.createLinearGradient(0,0,0,260);
    g.addColorStop(0,c1); g.addColorStop(1,c2); return g;
  };
  const make = (id, cfg) => {
    const el = document.getElementById(id);
    if(!el) return;
    if(el.__chart){ el.__chart.destroy(); }
    el.__chart = new Chart(el, cfg);
  };

  // Landing
  const lc = document.getElementById('landingChart');
  if(lc) make('landingChart',{
    type:'line',
    data:{ labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
      datasets:[{ label:'Tickets', data:[120,180,150,220,260,200,280],
        borderColor:'#3a63ff', backgroundColor:grad(lc.getContext('2d'),'rgba(58,99,255,.4)','rgba(58,99,255,0)'),
        fill:true, tension:.4, borderWidth:2, pointRadius:0 }]
    },
    options:{ plugins:{legend:{display:false}}, scales:{x:{grid:{display:false}},y:{grid:{color:'rgba(255,255,255,.04)'},border:{display:false}}}, maintainAspectRatio:false }
  });

  // Overview Main
  const om = document.getElementById('overviewMain');
  if(om) make('overviewMain',{
    type:'line',
    data:{
      labels:Array.from({length:14},(_,i)=>`Day ${i+1}`),
      datasets:[
        { label:'Created', data:[42,38,55,49,62,58,75,68,80,72,88,95,82,98], borderColor:'#3a63ff', backgroundColor:grad(om.getContext('2d'),'rgba(58,99,255,.3)','rgba(58,99,255,0)'), fill:true, tension:.4, borderWidth:2, pointRadius:0 },
        { label:'Resolved', data:[35,40,48,52,55,60,68,72,78,75,84,90,88,95], borderColor:'#c084fc', backgroundColor:'transparent', tension:.4, borderWidth:2, pointRadius:0, borderDash:[4,4] },
      ]
    },
    options:{ plugins:{legend:{position:'top',align:'end',labels:{boxWidth:8,boxHeight:8,usePointStyle:true,pointStyle:'circle'}}}, scales:{x:{grid:{display:false}},y:{grid:{color:'rgba(255,255,255,.04)'},border:{display:false}}}, maintainAspectRatio:false }
  });

  const od = document.getElementById('overviewDoughnut');
  if(od) make('overviewDoughnut',{
    type:'doughnut',
    data:{ labels:['Chat','Email','Voice','Social'],
      datasets:[{ data:[42,28,18,12], backgroundColor:['#3a63ff','#c084fc','#22d3ee','#34d399'], borderWidth:0, cutout:'70%' }]
    },
    options:{ plugins:{legend:{display:false}}, maintainAspectRatio:false }
  });

  // Analytics
  const ab = document.getElementById('anaBar');
  if(ab) make('anaBar',{
    type:'bar',
    data:{ labels:Array.from({length:14},(_,i)=>i+1+''),
      datasets:[
        { label:'Created', data:Array.from({length:14},()=>Math.floor(Math.random()*40)+30), backgroundColor:'#3a63ff', borderRadius:6, barThickness:10 },
        { label:'Resolved', data:Array.from({length:14},()=>Math.floor(Math.random()*40)+25), backgroundColor:'#c084fc', borderRadius:6, barThickness:10 },
      ]},
    options:{ plugins:{legend:{position:'top',align:'end',labels:{boxWidth:8,boxHeight:8,usePointStyle:true}}}, scales:{x:{grid:{display:false}},y:{grid:{color:'rgba(255,255,255,.04)'},border:{display:false}}}, maintainAspectRatio:false }
  });
  const al = document.getElementById('anaLine');
  if(al) make('anaLine',{
    type:'line',
    data:{ labels:['W1','W2','W3','W4','W5','W6','W7','W8'],
      datasets:[{ label:'Avg hours', data:[8.4,7.2,6.5,5.8,5.2,4.8,4.4,4.2], borderColor:'#34d399', backgroundColor:grad(al.getContext('2d'),'rgba(52,211,153,.3)','rgba(52,211,153,0)'), fill:true, tension:.4, borderWidth:2, pointRadius:3, pointBackgroundColor:'#34d399' }]
    },
    options:{ plugins:{legend:{display:false}}, scales:{x:{grid:{display:false}},y:{grid:{color:'rgba(255,255,255,.04)'},border:{display:false}}}, maintainAspectRatio:false }
  });
  const ap = document.getElementById('anaPie');
  if(ap) make('anaPie',{
    type:'polarArea',
    data:{ labels:['Email','Chat','Voice','Social','API'],
      datasets:[{ data:[120,180,75,90,55], backgroundColor:['rgba(58,99,255,.7)','rgba(192,132,252,.7)','rgba(34,211,238,.7)','rgba(52,211,153,.7)','rgba(251,191,36,.7)'], borderWidth:0 }]
    },
    options:{ plugins:{legend:{position:'right',labels:{boxWidth:8,boxHeight:8,usePointStyle:true}}}, scales:{r:{grid:{color:'rgba(255,255,255,.06)'},ticks:{display:false}}}, maintainAspectRatio:false }
  });
  const ac = document.getElementById('anaCsat');
  if(ac) make('anaCsat',{
    type:'bar',
    data:{ labels:['1★','2★','3★','4★','5★'],
      datasets:[{ data:[4,12,32,180,420], backgroundColor:['#f43f5e','#fb923c','#fbbf24','#a3e635','#34d399'], borderRadius:8, barThickness:32 }]
    },
    options:{ plugins:{legend:{display:false}}, scales:{x:{grid:{display:false}},y:{grid:{color:'rgba(255,255,255,.04)'},border:{display:false}}}, maintainAspectRatio:false }
  });
  const ta = document.getElementById('teamActivity');
  if(ta) make('teamActivity',{
    type:'line',
    data:{ labels:Array.from({length:12},(_,i)=>`${i*2}h`),
      datasets:DATA.agents.slice(0,3).map((a,i)=>({
        label:a.name, data:Array.from({length:12},()=>Math.floor(Math.random()*20)+5),
        borderColor:['#3a63ff','#c084fc','#22d3ee'][i], backgroundColor:'transparent', tension:.4, borderWidth:2, pointRadius:0
      }))
    },
    options:{ plugins:{legend:{position:'top',align:'end',labels:{boxWidth:8,boxHeight:8,usePointStyle:true}}}, scales:{x:{grid:{display:false}},y:{grid:{color:'rgba(255,255,255,.04)'},border:{display:false}}}, maintainAspectRatio:false }
  });
}

/* ============================================================
   GLOBAL EVENT WIRES
============================================================ */
document.addEventListener('keydown', (e)=>{
  if((e.metaKey||e.ctrlKey) && e.key==='k'){ e.preventDefault(); toast('Command palette (⌘K) — coming soon','info'); }
  if(e.key==='Escape'){
    State.notifOpen=false; State.profileOpen=false; State.workspaceOpen=false;
    closeModal();
    if(State.activePage) rerenderShell();
  }
});
document.addEventListener('click', (e)=>{
  if(!(State.notifOpen||State.profileOpen||State.workspaceOpen)) return;
  if(e.target.closest('header') || e.target.closest('aside')) return;
  State.notifOpen=false; State.profileOpen=false; State.workspaceOpen=false;
  rerenderShell();
});
