function hideLoader() {
  const loader = document.getElementById('page-loader');
  if (loader) loader.classList.add('hidden');
}

if (document.readyState === 'complete') {
  setTimeout(hideLoader, 300);
} else {
  window.addEventListener('load', () => setTimeout(hideLoader, 300));
  document.addEventListener('DOMContentLoaded', () => setTimeout(hideLoader, 800));
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

function applyCountryFromURL() {
  const params = new URLSearchParams(window.location.search);
  const country = params.get('country');
  if (!country) return;

  const select = document.getElementById('fieldCountry');
  let matched = false;

  for (let opt of select.options) {
    if (opt.value === country) {
      opt.selected = true;
      matched = true;
      break;
    }
  }

  if (!matched) {
    const other = select.querySelector('option[value="Other"]');
    if (other) other.selected = true;
  }

  setTimeout(() => {
    alert('Please fill up the contact form to apply for the visa.');
    const formWrap = document.querySelector('.contact-form-wrap');
    if (formWrap) {
      formWrap.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 600);
}

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const btn = this.querySelector('button[type="submit"]');
  btn.innerHTML = '<span>Sending...</span>';
  btn.disabled = true;

  setTimeout(() => {
    this.style.display = 'none';
    document.getElementById('formSuccess').classList.add('visible');
  }, 1600);
});

AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 60 });

applyCountryFromURL();