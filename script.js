// ========= 1. البيانات والثيمات =========
const THEMES = [
  { id: 'emerald', name: 'زمرد السكينة', desc: 'سبحة دائرية بهالة ذهبية', swatch: 'linear-gradient(135deg, #177853, #e6c35c)' },
  { id: 'space',   name: 'نور الفضاء',   desc: 'نجوم ومسار ضوئي فيروزي', swatch: 'linear-gradient(135deg, #0b1c26, #3bf0e4)' },
  { id: 'rain',    name: 'ليلة المطر',   desc: 'مطر هادئ وخرز ذهبي',     swatch: 'linear-gradient(135deg, #1b3842, #eab052)' },
  { id: 'dawn',    name: 'إشراقة الفجر', desc: 'أجواء الصباح والشروق',   swatch: 'linear-gradient(135deg, #352757, #ffd494)' },
  { id: 'aurora',  name: 'الشفق القطبي', desc: 'أضواء سماوية هادئة',     swatch: 'linear-gradient(135deg, #1e1b4b, #34d399)' }
];

const DEFAULT_ADHKAR = {
  morning: [
    { text: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ', virtue: 'استفتاح اليوم بحمد الله وإقرارٍ بملكه وحده', target: 7 },
    { text: 'اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ', virtue: 'توكّلٌ خالص على الله في بداية النهار', target: 7 },
    { text: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ', virtue: 'حفظٌ وتحصين من كل أذى بإذن الله', target: 7 },
    { text: 'رَضِيتُ بِاللَّهِ رَبًّا وَبِالْإِسْلَامِ دِينًا وَبِمُحَمَّدٍ نَبِيًّا', virtue: 'تجديد الرضا والطمأنينة في مطلع اليوم', target:7},
    { text: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ', virtue: 'ذكرٌ يسير على اللسان عظيم الأجر والبركة', target: 33 },
    { text: 'يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ أَصْلِحْ لِي شَأْنِي كُلَّهُ', virtue: 'استعانةٌ بالله لتيسير شؤون اليوم كله', target: 7 }
  ],
  evening: [
    { text: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ', virtue: 'ختام اليوم بالحمد والشكر لله تعالى', target: 7 },
    { text: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ', virtue: 'حرزٌ وأمانٌ وسكينة عند إقبال الليل', target: 3 },
    { text: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ', virtue: 'وقاية وحفظٌ في الليل حتى الصباح', target: 3 },
    { text: 'اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ', virtue: 'تفتح أبواب الرحمة وتشرح الصدر', target: 10 },
    { text: 'أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ وَأَتُوبُ إِلَيْهِ', virtue: 'تطهيرٌ للقلب وراحةٌ للنفس قبل النوم', target: 33 }
  ],
  tasbih: [
    { text: 'سُبْحَانَ اللَّهِ', virtue: 'تنزيهٌ لله تعالى يملأ القلب سكينة وطمأنينة', target: 33 },
    { text: 'الْحَمْدُ لِلَّهِ', virtue: 'شكرٌ للنعم يجلب الرضا ويزيد البركة', target: 33 },
    { text: 'اللَّهُ أَكْبَرُ', virtue: 'تعظيمٌ للخالق يهون أمامه كل همّ', target: 33 },
    { text: 'لَا إِلَهَ إِلَّا اللَّهُ', virtue: 'كلمة التوحيد وأفضل ما يُجدَّد به الإيمان', target: 100 },
    { text: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ', virtue: 'تفويضٌ للأمر لله واستمدادٌ للعون والقوة', target: 30 },
    { text: 'أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ', virtue: 'مفتاحٌ للفرج والرزق وراحة البال', target: 100 }
  ]
};

const CAT_LABELS = {
  morning: 'أذكار الصباح',
  evening: 'أذكار المساء',
  tasbih: 'السبحة الحرة'
};

// ========= 2. إدارة الحالة والحفظ المحلي =========
const STORAGE_KEY = 'sakina_tasbih_v1';

function getAutoCategory() {
  const hour = new Date().getHours();
  if (hour >= 4 && hour < 12) return 'morning';
  if (hour >= 15 && hour < 22) return 'evening';
  return 'tasbih';
}

let state = {
  theme: 'emerald',
  category: getAutoCategory(),
  index: 0,
  count: 0,
  sound: true,
  dailyTotal: 0,
  savedDate: new Date().toDateString(),
  completedMap: {},
  customTasbih: []
};

try {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    const parsed = JSON.parse(raw);
    state = { ...state, ...parsed };
    if (state.savedDate !== new Date().toDateString()) {
      state.dailyTotal = 0;
      state.completedMap = {};
      state.savedDate = new Date().toDateString();
    }
  }
} catch (e) {}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {}
}

function getCurrentList(cat = state.category) {
  if (cat === 'tasbih') {
    return [...DEFAULT_ADHKAR.tasbih, ...(state.customTasbih || [])];
  }
  return DEFAULT_ADHKAR[cat];
}

function toAr(num) {
  return Number(num).toLocaleString('ar-EG');
}

// ========= 3. الصوت التفاعلي (Web Audio API) =========
let audioCtx = null;

function playBeadSound(isComplete = false) {
  if (!state.sound) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    if (isComplete) {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(528, now);
      osc.frequency.exponentialRampToValueAtTime(792, now + 0.22);
      gain.gain.setValueAtTime(0.14, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.46);
    } else {
      const baseFreq = state.theme === 'space' ? 680 : state.theme === 'rain' ? 460 : 540;
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(baseFreq, now);
      osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.42, now + 0.055);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.065);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.07);
    }
  } catch (e) {}
}

// ========= 4. بناء السبحة الدائرية والمقوسة =========
const CIRCULAR_COUNT = 12;
const ARC_COUNT = 11;

function buildCircularBeads() {
  const container = document.getElementById('circularBeads');
  container.innerHTML = '';
  const radius = 102;
  const cx = 120;
  const cy = 120;

  for (let i = 0; i < CIRCULAR_COUNT; i++) {
    const angle = (i / CIRCULAR_COUNT) * Math.PI * 2 - Math.PI / 2;
    const x = cx + radius * Math.cos(angle) - 13;
    const y = cy + radius * Math.sin(angle) - 13;
    const bead = document.createElement('div');
    bead.className = 'bead';
    bead.style.left = `${x}px`;
    bead.style.top = `${y}px`;
    container.appendChild(bead);
  }
}

function buildArcBeads() {
  const layer = document.getElementById('arcBeadsLayer');
  layer.innerHTML = '';
  for (let i = 0; i < ARC_COUNT; i++) {
    const b = document.createElement('div');
    b.className = 'arc-bead';
    layer.appendChild(b);
  }
}

function updateBeadsVisuals() {
  const list = getCurrentList();
  const current = list[state.index] || list[0];
  const ratio = Math.min(state.count / current.target, 1);

  const orb = document.getElementById('ambientOrb');
  orb.style.transform = `translateX(-50%) scale(${0.85 + ratio * 0.9})`;
  orb.style.opacity = `${0.32 + ratio * 0.55}`;

  if (state.theme === 'emerald') {
    document.getElementById('circularWrap').classList.remove('hidden');
    document.getElementById('arcWrap').classList.add('hidden');

    const circumference = 640.88;
    document.getElementById('circularProgress').style.strokeDashoffset = circumference * (1 - ratio);

    const beads = document.querySelectorAll('#circularBeads .bead');
    const activeIdx = state.count > 0 ? (state.count - 1) % CIRCULAR_COUNT : -1;
    beads.forEach((b, i) => {
      b.classList.toggle('lit', i === activeIdx);
    });
  } else {
    document.getElementById('circularWrap').classList.add('hidden');
    document.getElementById('arcWrap').classList.remove('hidden');

    const arcPath = document.getElementById('arcPath');
    if (state.theme === 'space') {
      arcPath.setAttribute('d', 'M -10 85 Q 200 58 410 18');
    } else {
      arcPath.setAttribute('d', 'M -20 32 Q 200 100 420 32');
    }

    const miniCirc = 364.42;
    document.getElementById('arcProgress').style.strokeDashoffset = miniCirc * (1 - ratio);

    const beads = document.querySelectorAll('#arcBeadsLayer .arc-bead');
    const centerIndex = Math.floor(ARC_COUNT / 2);

    beads.forEach((b, i) => {
      const t = (i + 0.5) / ARC_COUNT;
      const xPct = t * 100;
      const yPx = state.theme === 'space'
        ? 82 - t * 62
        : 32 + Math.sin(t * Math.PI) * 38;

      b.style.left = `${xPct}%`;
      b.style.top = `${yPx}px`;

      b.classList.remove('focal', 'passed');
      if (i === centerIndex && state.count > 0) {
        b.classList.add('focal');
      } else if (i > centerIndex && state.count >= (i - centerIndex)) {
        b.classList.add('passed');
      }
    });
  }
}

// ========= 5. تحديث الواجهة =========
function renderUI(animateSwitch = false) {
  const list = getCurrentList();
  if (state.index >= list.length) state.index = 0;
  const item = list[state.index];

  document.body.setAttribute('data-theme', state.theme);
  document.getElementById('soundBtn').textContent = state.sound ? '🔊' : '🔇';
  document.getElementById('categoryBadge').textContent = CAT_LABELS[state.category];

  const box = document.getElementById('dhikrBox');
  if (animateSwitch) {
    box.classList.add('switching');
    setTimeout(() => {
      document.getElementById('dhikrText').textContent = item.text;
      document.getElementById('dhikrVirtue').textContent = item.virtue || 'ذكرٌ طيب يملأ القلب طمأنينة';
      box.classList.remove('switching');
    }, 180);
  } else {
    document.getElementById('dhikrText').textContent = item.text;
    document.getElementById('dhikrVirtue').textContent = item.virtue || 'ذكرٌ طيب يملأ القلب طمأنينة';
  }

  const countStr = toAr(state.count);
  const targetStr = `من ${toAr(item.target)}`;
  document.getElementById('countNumCircle').textContent = countStr;
  document.getElementById('countTargetCircle').textContent = targetStr;
  document.getElementById('countNumArc').textContent = countStr;
  document.getElementById('countTargetArc').textContent = targetStr;
  document.getElementById('totalFooter').textContent = `مجموع تسبيحاتك اليوم: ${toAr(state.dailyTotal)}`;

  const dotsEl = document.getElementById('progressDots');
  dotsEl.innerHTML = '';
  list.forEach((_, i) => {
    const d = document.createElement('span');
    const key = `${state.category}_${i}`;
    d.className = 'dot' + (i === state.index ? ' active' : state.completedMap[key] ? ' done' : '');
    dotsEl.appendChild(d);
  });

  updateBeadsVisuals();
  saveState();
}

// ========= 6. منطق التسبيح والتفاعل =========
let toastTimer = null;

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 1800);
}

function spawnEffects(x, y) {
  const plus = document.createElement('div');
  plus.className = 'float-plus';
  plus.textContent = '+١';
  plus.style.left = `${x}px`;
  plus.style.top = `${y - 16}px`;
  document.body.appendChild(plus);
  setTimeout(() => plus.remove(), 900);

  const ripple = document.createElement('div');
  ripple.className = 'tap-ripple';
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  document.body.appendChild(ripple);
  setTimeout(() => ripple.remove(), 700);

  triggerCanvasBurst(x, y);
}

function handleTasbih(clientX, clientY) {
  const list = getCurrentList();
  const item = list[state.index];

  state.count += 1;
  state.dailyTotal += 1;

  const pill = state.theme === 'emerald'
    ? document.getElementById('counterPillCircle')
    : document.getElementById('counterPillArc');
  pill.classList.add('pulse');
  setTimeout(() => pill.classList.remove('pulse'), 130);

  if (state.theme === 'emerald') {
    const tassel = document.getElementById('tassel');
    tassel.classList.remove('sway');
    void tassel.offsetWidth;
    tassel.classList.add('sway');
  }

  spawnEffects(clientX, clientY);

  if (state.count >= item.target) {
    state.completedMap[`${state.category}_${state.index}`] = true;
    playBeadSound(true);
    if (navigator.vibrate) navigator.vibrate([30, 55, 30]);
    renderUI(false);

    showToast('تم إتمام الذكر — تقبّل الله');
    setTimeout(() => {
      state.count = 0;
      state.index = (state.index + 1) % list.length;
      renderUI(true);
    }, 900);
  } else {
    playBeadSound(false);
    if (navigator.vibrate) navigator.vibrate(14);
    renderUI(false);
  }
}

// ========= 7. القوائم والأزرار =========
const overlay = document.getElementById('overlay');
const themeDrawer = document.getElementById('themeDrawer');
const adhkarDrawer = document.getElementById('adhkarDrawer');

function closeDrawers() {
  overlay.classList.remove('open');
  themeDrawer.classList.remove('open');
  adhkarDrawer.classList.remove('open');
}

function renderThemeCards() {
  const grid = document.getElementById('themesGrid');
  grid.innerHTML = '';
  THEMES.forEach(t => {
    const btn = document.createElement('button');
    btn.className = 'theme-card' + (state.theme === t.id ? ' active' : '');
    btn.innerHTML = `
      <span class="theme-swatch" style="background:${t.swatch}"></span>
      <span><strong>${t.name}</strong><small>${t.desc}</small></span>
    `;
    btn.onclick = () => {
      state.theme = t.id;
      initCanvasParticles();
      renderUI(false);
      renderThemeCards();
      setTimeout(closeDrawers, 220);
    };
    grid.appendChild(btn);
  });
}

let drawerCat = state.category;

function renderAdhkarList() {
  const listEl = document.getElementById('dhikrList');
  listEl.innerHTML = '';
  const list = getCurrentList(drawerCat);

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === drawerCat);
  });

  list.forEach((item, idx) => {
    const row = document.createElement('div');
    const isCurrent = drawerCat === state.category && idx === state.index;
    const isDone = state.completedMap[`${drawerCat}_${idx}`];
    row.className = 'dhikr-item' + (isCurrent ? ' current' : '');
    row.innerHTML = `
      <div class="dhikr-item-text">${item.text}</div>
      <div class="dhikr-item-meta">${isDone ? '✓ ' : ''}${toAr(item.target)} مرة</div>
    `;
    row.onclick = () => {
      state.category = drawerCat;
      state.index = idx;
      state.count = 0;
      renderUI(true);
      closeDrawers();
    };
    listEl.appendChild(row);
  });
}

document.getElementById('tapStage').addEventListener('click', (e) => {
  handleTasbih(e.clientX, e.clientY);
});

document.addEventListener('keydown', (e) => {
  if (e.code === 'Space' && !themeDrawer.classList.contains('open') && !adhkarDrawer.classList.contains('open')) {
    e.preventDefault();
    handleTasbih(window.innerWidth / 2, window.innerHeight / 2);
  }
});

document.getElementById('soundBtn').onclick = () => {
  state.sound = !state.sound;
  renderUI(false);
};

document.getElementById('themeBtn').onclick = () => {
  renderThemeCards();
  overlay.classList.add('open');
  themeDrawer.classList.add('open');
};

document.getElementById('adhkarMenuBtn').onclick = () => {
  drawerCat = state.category;
  renderAdhkarList();
  overlay.classList.add('open');
  adhkarDrawer.classList.add('open');
};

document.getElementById('resetBtn').onclick = () => {
  state.count = 0;
  renderUI(false);
  showToast('تم تصفير العداد');
};

document.getElementById('nextBtn').onclick = () => {
  const list = getCurrentList();
  state.index = (state.index + 1) % list.length;
  state.count = 0;
  renderUI(true);
};

overlay.onclick = closeDrawers;

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.onclick = () => {
    drawerCat = btn.dataset.cat;
    renderAdhkarList();
  };
});

document.getElementById('customForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const text = document.getElementById('customText').value.trim();
  const target = Math.max(1, parseInt(document.getElementById('customTarget').value, 10) || 33);
  if (!text) return;

  state.customTasbih = state.customTasbih || [];
  state.customTasbih.push({ text, virtue: 'ذكرٌ خاص أضفتَه بنفسك', target });
  state.category = 'tasbih';
  state.index = getCurrentList('tasbih').length - 1;
  state.count = 0;

  document.getElementById('customText').value = '';
  renderUI(true);
  closeDrawers();
  showToast('تمت إضافة الذكر بنجاح');
});

// ========= 8. رسوم الخلفية المتحركة (Canvas) =========
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let W = 0, H = 0;
let particles = [];
let ripples = [];
let auroraTime = 0;

function resizeCanvas() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
  initCanvasParticles();
}

function initCanvasParticles() {
  particles = [];
  const count = state.theme === 'rain' ? 75 : state.theme === 'space' ? 85 : 42;
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2 + 0.6,
      vy: state.theme === 'rain' ? (Math.random() * 6 + 6) : (Math.random() * 0.35 + 0.08),
      vx: state.theme === 'rain' ? -1.2 : (Math.random() - 0.5) * 0.2,
      alpha: Math.random() * 0.6 + 0.2,
      phase: Math.random() * Math.PI * 2
    });
  }
}

function triggerCanvasBurst(x, y) {
  ripples.push({ x, y, r: 6, alpha: 0.55 });
}

function drawBackground() {
  ctx.clearRect(0, 0, W, H);
  auroraTime += 0.008;

  if (state.theme === 'aurora') {
    const grad = ctx.createLinearGradient(0, 0, W, H * 0.65);
    grad.addColorStop(0, 'rgba(52, 211, 153, 0.14)');
    grad.addColorStop(0.5, 'rgba(56, 189, 248, 0.12)');
    grad.addColorStop(1, 'rgba(167, 139, 250, 0.14)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(0, H * 0.25);
    for (let x = 0; x <= W; x += 24) {
      const y = H * 0.28 + Math.sin(x * 0.006 + auroraTime) * 42 + Math.cos(x * 0.01 - auroraTime) * 22;
      ctx.lineTo(x, y);
    }
    ctx.lineTo(W, 0);
    ctx.lineTo(0, 0);
    ctx.closePath();
    ctx.fill();
  }

  if (state.theme === 'rain') {
    ctx.fillStyle = 'rgba(5, 16, 20, 0.48)';
    ctx.beginPath();
    ctx.moveTo(0, H);
    ctx.lineTo(0, H - 70);
    ctx.quadraticCurveTo(W * 0.25, H - 115, W * 0.5, H - 75);
    ctx.quadraticCurveTo(W * 0.78, H - 120, W, H - 68);
    ctx.lineTo(W, H);
    ctx.closePath();
    ctx.fill();
  }

  particles.forEach(p => {
    if (state.theme === 'rain') {
      ctx.strokeStyle = `rgba(180, 225, 235, ${p.alpha * 0.45})`;
      ctx.lineWidth = 1.1;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x + p.vx * 2.2, p.y + p.vy * 2.4);
      ctx.stroke();
      p.x += p.vx;
      p.y += p.vy;
      if (p.y > H) { p.y = -20; p.x = Math.random() * W; }
    } else {
      const twinkle = 0.45 + 0.55 * Math.sin(auroraTime * 2.2 + p.phase);
      ctx.fillStyle = state.theme === 'dawn'
        ? `rgba(255, 225, 185, ${p.alpha * twinkle})`
        : `rgba(255, 255, 255, ${p.alpha * twinkle})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      p.y -= p.vy;
      p.x += p.vx;
      if (p.y < -5) { p.y = H + 5; p.x = Math.random() * W; }
    }
  });

  for (let i = ripples.length - 1; i >= 0; i--) {
    const rp = ripples[i];
    ctx.strokeStyle = `rgba(255, 255, 255, ${rp.alpha * 0.35})`;
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
    ctx.stroke();
    rp.r += 2.6;
    rp.alpha -= 0.018;
    if (rp.alpha <= 0) ripples.splice(i, 1);
  }

  requestAnimationFrame(drawBackground);
}

// ========= التشغيل =========
window.addEventListener('resize', resizeCanvas);
buildCircularBeads();
buildArcBeads();
resizeCanvas();
renderUI(false);
drawBackground();
