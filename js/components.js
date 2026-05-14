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
    <a href="contacto.html" class="btn btn-outline-white" style="text-align:center;margin-top:0.5rem; border-radius: 50px;">Contacto</a>
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
          <li><a href="index.html">Inicio</a></li>
          <li><a href="proyectos.html">Proyectos</a></li>
          <li><a href="nosotros.html">Nosotros</a></li>
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

/* ══════════════════════════════════════════════════════
   MODAL DE PROYECTOS
══════════════════════════════════════════════════════ */
(function () {

  /* Datos de cada proyecto */
  const proyectos = {
    'punta-vella': {
      badge:    'Residencial',
      title:    'Punta Vella Residences',
      location: 'Punta Vella, RD',
      img:      'img/modular/residencial-capsules.png',
      specs: [
        { val: '12',   label: 'Unidades' },
        { val: '65m²', label: 'Por unidad' },
        { val: '45d',  label: 'Instalación' },
        { val: '2024', label: 'Año' },
      ],
      desc: 'El primer conjunto residencial de casas cápsula prefabricadas frente al mar en República Dominicana. Diseño futurista con acabados premium en alucink y metal estructural. Cada unidad cuenta con terraza privada y vista panorámica al mar.',
      lista: [
        'Estructura metálica de alta resistencia marina',
        'Paneles alucink con aislamiento térmico',
        'Ventanas panorámicas con vista al mar',
        'Sistema eléctrico e hidráulico completo',
        'Terraza privada en cada unidad',
      ],
    },
    'almacen-norte': {
      badge:    'Industrial',
      title:    'Almacén Logístico Norte',
      location: 'Santiago, RD',
      img:      'img/almacen/almacen.png',
      specs: [
        { val: '2,400', label: 'm² totales' },
        { val: '8m',    label: 'Altura libre' },
        { val: '60d',   label: 'Instalación' },
        { val: '2023',  label: 'Año' },
      ],
      desc: 'Nave industrial prefabricada de 2,400 m² con cubierta en alucink y puertas industriales automatizadas. Estructura de acero galvanizado diseñada para soportar cargas pesadas y condiciones climáticas extremas.',
      lista: [
        'Grandes luces libres sin columnas intermedias',
        'Cubierta en alucink o lámina galvanizada',
        'Puertas industriales automatizadas',
        'Sistema de ventilación integrado',
        'Escalable y ampliable en cualquier etapa',
      ],
    },
    'glamping-lomas': {
      badge:    'Residencial',
      title:    'Glamping Las Lomas',
      location: 'Jarabacoa, RD',
      img:      'img/modular/casa-modular3.jpg',
      specs: [
        { val: '6',    label: 'Cabañas' },
        { val: '45m²', label: 'Por cabaña' },
        { val: '30d',  label: 'Instalación' },
        { val: '2024', label: 'Año' },
      ],
      desc: '6 cabañas cápsula para hospedaje boutique en zona de montaña. Diseño moderno integrado con la naturaleza, con todas las instalaciones necesarias para un hospedaje de alto estándar.',
      lista: [
        'Estructura metálica resistente a humedad',
        'Paneles alucink termo-aislantes',
        'Instalación eléctrica e hidráulica completa',
        'Acabados interiores premium',
        'Deck de madera exterior en cada unidad',
      ],
    },
    'plaza-comercial': {
      badge:    'Comercial',
      title:    'Plaza Comercial Modular',
      location: 'Santo Domingo, RD',
      img:      'img/Almacen1.png',
      specs: [
        { val: '8',     label: 'Locales' },
        { val: '120m²', label: 'Por local' },
        { val: '45d',   label: 'Instalación' },
        { val: '2023',  label: 'Año' },
      ],
      desc: 'Conjunto de locales comerciales prefabricados de rápida instalación para zona franca comercial. Diseño flexible que permite configuraciones según las necesidades de cada negocio.',
      lista: [
        'Estructura metálica modular y flexible',
        'Fachada en alucink con acabado premium',
        'Instalaciones eléctricas certificadas',
        'Acceso para personas con movilidad reducida',
        'Ampliable con módulos adicionales',
      ],
    },
    'deposito-este': {
      badge:    'Industrial',
      title:    'Depósito Industrial Este',
      location: 'La Romana, RD',
      img:      'img/almacen/almacen.png',
      specs: [
        { val: '1,800', label: 'm² totales' },
        { val: '7m',    label: 'Altura libre' },
        { val: '50d',   label: 'Instalación' },
        { val: '2024',  label: 'Año' },
      ],
      desc: 'Almacén de 1,800 m² con estructura metálica galvanizada y sistema de ventilación integrado. Diseñado para uso logístico intensivo con accesos amplios para vehículos de carga pesada.',
      lista: [
        'Estructura metálica galvanizada de alta durabilidad',
        'Sistema de ventilación natural integrado',
        'Accesos dobles para camiones de carga',
        'Iluminación LED industrial incluida',
        'Piso de concreto reforzado',
      ],
    },
  };

  /* Crear backdrop */
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';
  backdrop.innerHTML = `
    <div class="modal" id="modalBox">
      <div class="modal-close">
        <button class="modal-close-btn" id="modalCloseBtn">
          <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <div class="modal-hero"><img id="modalImg" src="" alt="" /></div>
      <div class="modal-body">
        <span class="modal-badge" id="modalBadge"></span>
        <h2 class="modal-title" id="modalTitle"></h2>
        <div class="modal-location" id="modalLocation">
          <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span id="modalLocationText"></span>
        </div>
        <div class="modal-specs" id="modalSpecs"></div>
        <div class="modal-split">
          <p class="modal-desc" id="modalDesc"></p>
          <ul class="prod-list" id="modalList"></ul>
        </div>
        <div class="modal-footer">
          <span class="modal-footer-note">¿Te interesa un proyecto similar?</span>
          <a href="contacto.html" class="prod-cta">Solicitar cotización →</a>
        </div>
      </div>
    </div>`;
  document.body.appendChild(backdrop);

  /* Abrir modal */
  function openModal(key) {
    const p = proyectos[key];
    if (!p) return;

    document.getElementById('modalImg').src            = p.img;
    document.getElementById('modalBadge').textContent  = p.badge;
    document.getElementById('modalTitle').textContent  = p.title;
    document.getElementById('modalLocationText').textContent = p.location;
    document.getElementById('modalDesc').textContent   = p.desc;

    document.getElementById('modalSpecs').innerHTML = p.specs.map(s => `
      <div class="modal-spec">
        <div class="modal-spec-val">${s.val}</div>
        <div class="modal-spec-label">${s.label}</div>
      </div>`).join('');

    document.getElementById('modalList').innerHTML = p.lista.map(i => `
      <li>${i}</li>`).join('');

    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  /* Cerrar modal */
  function closeModal() {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.getElementById('modalCloseBtn').addEventListener('click', closeModal);
  backdrop.addEventListener('click', e => { if (e.target === backdrop) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  /* Conectar links */
  document.querySelectorAll('.proy-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const key = link.dataset.modal;
      if (key) openModal(key);
    });
  });

})();