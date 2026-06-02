const regularVisa = [
  { name: 'Australia',       flag: '🇦🇺', region: 'Oceania',        types: ['Tourist', 'Business', 'Student'],   processing: '7–20 days'  },
  { name: 'Austria',         flag: '🇦🇹', region: 'Europe',          types: ['Schengen', 'Business', 'Student'],  processing: '10–15 days' },
  { name: 'Belgium',         flag: '🇧🇪', region: 'Europe',          types: ['Schengen', 'Business', 'Student'],  processing: '10–15 days' },
  { name: 'Brazil',          flag: '🇧🇷', region: 'South America',   types: ['Tourist', 'Business', 'Student'],   processing: '10–20 days' },
  { name: 'Canada',          flag: '🇨🇦', region: 'North America',   types: ['Tourist', 'Business', 'Student'],   processing: '10–30 days' },
  { name: 'China',           flag: '🇨🇳', region: 'Asia Pacific',    types: ['Tourist', 'Business', 'Student'],   processing: '4–7 days'   },
  { name: 'Czech Republic',  flag: '🇨🇿', region: 'Europe',          types: ['Schengen', 'Business', 'Student'],  processing: '10–15 days' },
  { name: 'Denmark',         flag: '🇩🇰', region: 'Europe',          types: ['Schengen', 'Business', 'Student'],  processing: '10–15 days' },
  { name: 'France',          flag: '🇫🇷', region: 'Europe',          types: ['Schengen', 'Business', 'Student'],  processing: '10–15 days' },
  { name: 'Germany',         flag: '🇩🇪', region: 'Europe',          types: ['Schengen', 'Business', 'Student'],  processing: '10–15 days' },
  { name: 'Greece',          flag: '🇬🇷', region: 'Europe',          types: ['Schengen', 'Business', 'Student'],  processing: '10–15 days' },
  { name: 'Hungary',         flag: '🇭🇺', region: 'Europe',          types: ['Schengen', 'Business', 'Student'],  processing: '10–15 days' },
  { name: 'Iceland',         flag: '🇮🇸', region: 'Europe',          types: ['Schengen', 'Business', 'Student'],  processing: '10–15 days' },
  { name: 'Ireland',         flag: '🇮🇪', region: 'Europe',          types: ['Tourist', 'Business', 'Student'],   processing: '8–10 weeks' },
  { name: 'Italy',           flag: '🇮🇹', region: 'Europe',          types: ['Schengen', 'Business', 'Student'],  processing: '10–15 days' },
  { name: 'Japan',           flag: '🇯🇵', region: 'Asia Pacific',    types: ['Tourist', 'Business', 'Student'],   processing: '5–10 days'  },
  { name: 'Malta',           flag: '🇲🇹', region: 'Europe',          types: ['Schengen', 'Business', 'Student'],  processing: '10–15 days' },
  { name: 'Netherlands',     flag: '🇳🇱', region: 'Europe',          types: ['Schengen', 'Business', 'Student'],  processing: '10–15 days' },
  { name: 'New Zealand',     flag: '🇳🇿', region: 'Oceania',         types: ['Tourist', 'Business', 'Student'],   processing: '10–20 days' },
  { name: 'Norway',          flag: '🇳🇴', region: 'Europe',          types: ['Schengen', 'Business', 'Student'],  processing: '10–15 days' },
  { name: 'Poland',          flag: '🇵🇱', region: 'Europe',          types: ['Schengen', 'Business', 'Student'],  processing: '10–15 days' },
  { name: 'Portugal',        flag: '🇵🇹', region: 'Europe',          types: ['Schengen', 'Business', 'Student'],  processing: '10–15 days' },
  { name: 'South Africa',    flag: '🇿🇦', region: 'Africa',          types: ['Tourist', 'Business', 'Student'],   processing: '7–10 days'  },
  { name: 'South Korea',     flag: '🇰🇷', region: 'Asia Pacific',    types: ['Tourist', 'Business', 'Student'],   processing: '5–7 days'   },
  { name: 'Spain',           flag: '🇪🇸', region: 'Europe',          types: ['Schengen', 'Business', 'Student'],  processing: '10–15 days' },
  { name: 'Sweden',          flag: '🇸🇪', region: 'Europe',          types: ['Schengen', 'Business', 'Student'],  processing: '10–15 days' },
  { name: 'Switzerland',     flag: '🇨🇭', region: 'Europe',          types: ['Schengen', 'Business', 'Student'],  processing: '10–15 days' },
  { name: 'Turkey',          flag: '🇹🇷', region: 'Eurasia',         types: ['Tourist', 'Business', 'Student'],   processing: '3–10 days'  },
  { name: 'United Kingdom',  flag: '🇬🇧', region: 'Europe',          types: ['Tourist', 'Business', 'Student'],   processing: '15–21 days' },
  { name: 'United States',   flag: '🇺🇸', region: 'North America',   types: ['Tourist', 'Business', 'Student'],   processing: '15–30 days' },
];

const eVisa = [
  { name: 'Azerbaijan',           flag: '🇦🇿', region: 'Caucasus',       types: ['E-Visa'],                          processing: '3–5 days',   visaNote: 'E-Visa'                            },
  { name: 'Bahrain',              flag: '🇧🇭', region: 'Middle East',    types: ['E-Visa'],                          processing: '2–5 days',   visaNote: 'E-Visa'                            },
  { name: 'Egypt',                flag: '🇪🇬', region: 'North Africa',   types: ['E-Visa'],                          processing: '3–7 days',   visaNote: 'E-Visa'                            },
  { name: 'Georgia',              flag: '🇬🇪', region: 'Caucasus',       types: ['E-Visa'],                          processing: '5–7 days',   visaNote: 'E-Visa'                            },
  { name: 'Indonesia',            flag: '🇮🇩', region: 'Southeast Asia', types: ['E-Visa', 'Visa on Arrival'],       processing: '3–5 days',   visaNote: 'E-Visa & Visa on Arrival'          },
  { name: 'Malaysia',             flag: '🇲🇾', region: 'Southeast Asia', types: ['Visa on Arrival'],                 processing: '1–3 days',   visaNote: 'Visa on Arrival (with Travel Pass)'},
  { name: 'Morocco',              flag: '🇲🇦', region: 'North Africa',   types: ['E-Visa'],                          processing: '3–7 days',   visaNote: 'E-Visa'                            },
  { name: 'Oman',                 flag: '🇴🇲', region: 'Middle East',    types: ['E-Visa'],                          processing: '3–5 days',   visaNote: 'E-Visa'                            },
  { name: 'Qatar',                flag: '🇶🇦', region: 'Middle East',    types: ['E-Visa', 'Visa on Arrival'],       processing: '1–3 days',   visaNote: 'E-Visa & Visa on Arrival'          },
  { name: 'Saudi Arabia',         flag: '🇸🇦', region: 'Middle East',    types: ['E-Visa'],                          processing: '3–7 days',   visaNote: 'E-Visa'                            },
  { name: 'Singapore',            flag: '🇸🇬', region: 'Southeast Asia', types: ['E-Visa'],                          processing: '3–7 days',   visaNote: 'E-Visa (Mandatory Passport Submission)'},
  { name: 'Sri Lanka',            flag: '🇱🇰', region: 'South Asia',     types: ['E-Visa'],                          processing: '2–3 days',   visaNote: 'E-Visa'                            },
  { name: 'Thailand',             flag: '🇹🇭', region: 'Southeast Asia', types: ['E-Visa'],                          processing: '3–7 days',   visaNote: 'E-Visa (with Travel Pass)'         },
  { name: 'United Arab Emirates', flag: '🇦🇪', region: 'Middle East',    types: ['E-Visa'],                          processing: '2–5 days',   visaNote: 'E-Visa'                            },
  { name: 'Vietnam',              flag: '🇻🇳', region: 'Southeast Asia', types: ['E-Visa'],                          processing: '2–3 days',   visaNote: 'E-Visa'                            },
];

let activeTab = 'regular';
const allCountries = { regular: regularVisa, evisa: eVisa };

const listing = document.getElementById('screen-listing');
const detail  = document.getElementById('screen-detail');

function showListing() {
  detail.classList.remove('active');
  listing.style.display = '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  AOS.refresh();
}

function getCountryByGlobalIndex(globalIndex) {
  if (globalIndex < regularVisa.length) {
    return { country: regularVisa[globalIndex], tab: 'regular', localIndex: globalIndex };
  }
  const localIndex = globalIndex - regularVisa.length;
  return { country: eVisa[localIndex], tab: 'evisa', localIndex };
}

function showDetail(globalIndex) {
  const { country: c, tab } = getCountryByGlobalIndex(globalIndex);

  document.getElementById('detailBgFlag').textContent  = c.flag;
  document.getElementById('detailFlagBig').textContent = c.flag;
  document.getElementById('detailTitle').textContent   = c.name;

  const tagsEl = document.getElementById('detailTags');
  let tagHTML = `<span class="detail-tag">${c.region}</span>`;
  if (c.visaNote) {
    tagHTML += `<span class="detail-tag">${c.visaNote}</span>`;
  } else {
    tagHTML += c.types.map(t => `<span class="detail-tag">${t}</span>`).join('');
  }
  tagsEl.innerHTML = tagHTML;

  document.getElementById('detailVisaTypes').innerHTML =
    c.types.map(t => `<li>${t}</li>`).join('');

  document.getElementById('detailKeyInfo').textContent =
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit for ${c.name}. ` +
    `Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

  document.getElementById('detailProcessingTime').textContent =
    `Standard processing: ${c.processing}. Lorem ipsum dolor sit amet, ` +
    `consectetur adipiscing elit. Expedited processing may be available upon request.`;

  document.querySelectorAll('.dtab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.detail-tab-pane').forEach(p => p.classList.remove('active'));
  document.querySelector('.dtab[data-dtab="overview"]').classList.add('active');
  document.getElementById('dtab-overview').classList.add('active');

  detail.dataset.country = c.name;

  listing.style.display = 'none';
  detail.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function buildCards(tab) {
  const grid = document.getElementById('countriesGrid');
  grid.innerHTML = '';
  const list = allCountries[tab];

  list.forEach((c, localIndex) => {
    const globalIndex = tab === 'regular' ? localIndex : regularVisa.length + localIndex;
    const delay = Math.min(localIndex * 35, 400);

    const tagline = c.visaNote || c.types.join(' · ');
    const badgeLabel = c.visaNote
      ? (c.visaNote.includes('Arrival') && c.visaNote.includes('E-Visa') ? 'E-Visa & VOA'
        : c.visaNote.includes('Arrival') ? 'Visa on Arrival'
        : c.visaNote.includes('Mandatory') ? 'E-Visa'
        : c.visaNote.includes('Travel Pass') ? 'E-Visa'
        : c.visaNote)
      : '';
    const badge = c.visaNote ? `<div class="card-evisa-badge">${badgeLabel}</div>` : '';

    const card = document.createElement('div');
    card.className = 'country-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', delay);
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          ${badge}
          <div class="card-flag">${c.flag}</div>
          <div class="card-country-name">${c.name}</div>
          <div class="card-region">${c.region}</div>
          <div class="card-hover-line"></div>
        </div>
        <div class="card-back">
          <div class="card-back-flag">${c.flag}</div>
          <div class="card-back-title">${c.name}</div>
          <div class="card-back-tagline">${tagline}</div>
          <div class="card-back-cta">View Details</div>
        </div>
      </div>`;

    card.addEventListener('click', () => {
      history.pushState({ view: 'detail', globalIndex, tab }, '', `#country-${globalIndex}`);
      showDetail(globalIndex);
    });
    grid.appendChild(card);
  });

  AOS.refresh();
}

function switchTab(tab) {
  activeTab = tab;
  document.querySelectorAll('.vt-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.vt === tab);
  });
  buildCards(tab);
}

document.querySelectorAll('.vt-tab').forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.vt));
});

document.getElementById('backBtn').addEventListener('click', () => {
  history.back();
});

document.querySelectorAll('.dtab').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.dtab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.detail-tab-pane').forEach(p => p.classList.remove('active'));
    this.classList.add('active');
    document.getElementById('dtab-' + this.dataset.dtab).classList.add('active');
  });
});

document.getElementById('detailApplyBtn').addEventListener('click', () => {
  const countryName = detail.dataset.country || '';
  window.location.href = `contact.html?country=${encodeURIComponent(countryName)}`;
});

window.addEventListener('popstate', e => {
  if (e.state && e.state.view === 'detail') {
    if (e.state.tab) switchTab(e.state.tab);
    showDetail(e.state.globalIndex);
  } else {
    showListing();
  }
});

function handleInitialHash() {
  const hash = window.location.hash;
  const match = hash.match(/^#country-(\d+)$/);
  if (match) {
    const globalIndex = parseInt(match[1]);
    const { tab } = getCountryByGlobalIndex(globalIndex);
    switchTab(tab);
    history.replaceState({ view: 'detail', globalIndex, tab }, '', hash);
    showDetail(globalIndex);
  } else {
    history.replaceState({ view: 'listing' }, '', window.location.pathname);
    buildCards('regular');
  }
}

function animateCounters() {
  document.querySelectorAll('.stat-num[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target);
    const step = target / (1800 / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = Math.floor(current).toLocaleString();
    }, 16);
  });
}

let countersStarted = false;
const statsEl = document.querySelector('.stats-section');
if (statsEl) {
  new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !countersStarted) {
      countersStarted = true;
      animateCounters();
    }
  }, { threshold: 0.4 }).observe(statsEl);
}

const navToggle  = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

window.addEventListener('scroll', () => {
  document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 40);
});

window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('page-loader').classList.add('hidden'), 1000);
});

AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 60 });
handleInitialHash();

// Footer "About Us" link — scroll to the stack-scene section
document.querySelectorAll('.footer-about-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.getElementById('stackScene');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Footer visa service links — switch to the correct tab then scroll
document.querySelectorAll('.footer-visa-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const tab = this.dataset.vt;
    switchTab(tab);
    const dest = document.getElementById('destinations');
    if (dest) {
      setTimeout(() => dest.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
    }
  });
});

// ── STACKING CARDS ──
(function () {
  const clamp = (v, lo, hi) => Math.min(Math.max(v, lo), hi);
  const easeOut = t => 1 - Math.pow(1 - clamp(t, 0, 1), 3);

  const scene = document.getElementById('stackScene');
  if (!scene) return;

  const cards = Array.from(scene.querySelectorAll('.stack-card'));
  const N = cards.length;
  // Vertical offset so each card peeks from behind the one above
  const PEEK = 18; // px
  const NAV  = 80; // navbar height

  // Each card needs a fixed height in CSS via its inner, but the SCENE
  // needs extra scroll room. We give each card 100vh of scroll budget.
  function getStep() { return window.innerHeight; }

  function setup() {
    const step = getStep();
    // Scene height: N cards each get `step` px of scroll, plus one screen at end
    scene.style.height = (N * step + step * 0.5) + 'px';

    cards.forEach((card, i) => {
      // Every card is sticky, pinned progressively lower so they peek
      card.style.position      = 'sticky';
      card.style.top           = (NAV + i * PEEK) + 'px';
      card.style.zIndex        = String(i + 2);
      card.style.marginBottom  = '0';
      card.style.transformOrigin = 'center top';
    });
  }

  function tick() {
    const step     = getStep();
    const rect     = scene.getBoundingClientRect();
    const sceneTop = rect.top + window.scrollY;
    const scrolled = window.scrollY - sceneTop;

    cards.forEach((card, i) => {
      // scrolled offset when THIS card's phase starts
      const phaseStart = i * step;
      // t: how far into this card's own phase (0 = just entered, 1 = next card fully on top)
      const rawT = (scrolled - phaseStart) / step;
      const t    = clamp(rawT, 0, 1);

      // ----- ENTER animation (card slides up from 80px below) -----
      // Driven by the PREVIOUS card's phase
      const enterRaw = i === 0 ? 1 : (scrolled - (i - 1) * step) / step;
      const enterT   = easeOut(clamp(enterRaw, 0, 1));

      const translateY = (1 - enterT) * 80;     // 80px → 0
      const opacity    = i === 0 ? 1 : enterT;

      // ----- SCALE-DOWN as the NEXT card comes on top -----
      // Each card scales from 1 → 0.94 as next card scrolls in
      const scaleT  = easeOut(t);
      const hasNext = i < N - 1;
      const scale   = hasNext ? 1 - scaleT * 0.05 : 1;

      card.style.transform = `translateY(${translateY.toFixed(2)}px) scale(${scale.toFixed(4)})`;
      card.style.opacity   = opacity.toFixed(3);
    });
  }

  setup();
  tick();
  window.addEventListener('scroll', tick, { passive: true });
  window.addEventListener('resize', () => { setup(); tick(); });
})();