/* ══════════════════════════════════════════════════════
   NAVBAR
══════════════════════════════════════════════════════ */
const NAVBAR = `
<nav id="navbar">
  <div class="container nav-inner">
    <a href="index.html" class="logo">
      <div class="logo-mark">
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round">
          <rect x="1" y="12" width="9" height="11" rx="1.5" />
          <rect x="13" y="7" width="10" height="16" rx="1.5" />
          <line x1="0" y1="23" x2="24" y2="23" />
        </svg>
      </div>
      <div>
        <div class="logo-name">Bostonia</div>
        <div class="logo-sub">Construction</div>
      </div>
    </a>
    <div class="nav-links">
      <a href="index.html" class="nav-link">Inicio</a>
      <a href="proyectos.html" class="nav-link">Proyectos</a>
      <a href="nosotros.html" class="nav-link">Nosotros</a>
      <a href="contacto.html" class="nav-cta">Contacto</a>
    </div>
    <button id="menuBtn" class="menu-btn">
      <svg width="22" height="18" viewBox="0 0 22 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <line x1="0" y1="1" x2="22" y2="1" />
        <line x1="0" y1="9" x2="22" y2="9" />
        <line x1="0" y1="17" x2="22" y2="17" />
      </svg>
    </button>
  </div>
  <div id="mobileMenu">
    <a href="index.html" class="mobile-link">Inicio</a>
    <a href="proyectos.html" class="mobile-link">Proyectos</a>
    <a href="nosotros.html" class="mobile-link">Nosotros</a>
    <a href="contacto.html" class="btn btn-outline-white" style="text-align:center;margin-top:0.5rem;">Cotizar Proyecto</a>
  </div>
</nav>`;

/* ══════════════════════════════════════════════════════
   FOOTER
══════════════════════════════════════════════════════ */
const FOOTER = `
<footer>
  <div class="container">
    <div class="foot-grid-simple">
      <div class="foot-brand">
        <a href="index.html" class="logo">
          <div class="logo-mark">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round">
              <rect x="1" y="12" width="9" height="11" rx="1.5" />
              <rect x="13" y="7" width="10" height="16" rx="1.5" />
              <line x1="0" y1="23" x2="24" y2="23" />
            </svg>
          </div>
          <div>
            <div class="logo-name">Bostonia</div>
            <div class="logo-sub">Construction</div>
          </div>
        </a>
        <p>Construyendo el futuro de República Dominicana con excelencia e integridad desde 2009.</p>
        <div class="soc-row">
          <a href="#" class="soc-btn"><svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
          <a href="#" class="soc-btn"><svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
          <a href="#" class="soc-btn"><svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
        </div>
      </div>
      <div>
        <p class="foot-h">Navegación</p>
        <ul class="foot-links">
          <li><a href="nosotros.html">Quiénes Somos</a></li>
          <li><a href="proyectos.html">Proyectos</a></li>
          <li><a href="servicios.html">Servicios</a></li>
          <li><a href="contacto.html">Contacto</a></li>
        </ul>
      </div>
      <div>
        <p class="foot-h">Contacto</p>
        <ul class="foot-contact">
          <li>
            <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>Av. Winston Churchill #100, Santo Domingo, RD</span>
          </li>
          <li>
            <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            <span>(809) 555-0100</span>
          </li>
          <li>
            <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <span>info@bostoniaconstruction.com</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="foot-bottom">
      <div>© 2025 Bostonia Construction. Todos los derechos reservados.</div>
    </div>
  </div>
</footer>`;

/* ══════════════════════════════════════════════════════
   INYECTAR
══════════════════════════════════════════════════════ */
document.getElementById('navbar-placeholder').innerHTML = NAVBAR;
document.getElementById('footer-placeholder').innerHTML = FOOTER;

/* ── Link activo ── */
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.href === window.location.href) link.classList.add('active');
});

/* ── Menú móvil ── */
document.getElementById('menuBtn').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('open');
});

/* ── Scroll navbar ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* ── Reveal on scroll ── */
const ro = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); }
}), { threshold: .08, rootMargin: '0px 0px -30px 0px' });
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

/* ── Hero slider ── */
const slides = document.querySelectorAll('.hero-slide');
if (slides.length) {
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 6000);
}