/* ══════════════════════════════════════════════════════
   NAVBAR
══════════════════════════════════════════════════════ */
const NAVBAR = `
<nav id="navbar">
  <div class="container nav-inner">
    <a href="index.html" class="logo" style="overflow: visible;">
      <img src="img/Bostoniard-Logo.webp" alt="Bostonia Construction" style="height: 55px; width: auto; object-fit: contain; overflow: visible;" />
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
        <a href="index.html" class="logo" style="overflow: visible;">
          <img src="img/Bostoniard-Logo.webp" alt="Bostonia Construction" style="height: 55px; width: auto; object-fit: contain;" />
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
            <span>Blvd. Turístico del Este, <br>Cabo Engaño, Punta Cana 23000 <br>Calle 3ra. No. 1 </span>
          </li>
          <li>
            <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            <span>(829) 831-4000</span>
          </li>
          <li>
            <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <span>info@bostoniard.com</span>
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

document.querySelectorAll('.nav-link').forEach(link => {
  if (link.href === window.location.href) link.classList.add('active');
});

document.getElementById('menuBtn').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('open');
});

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

const ro = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); }
}), { threshold: .08, rootMargin: '0px 0px -30px 0px' });
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

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

  const proyectos = {
    'punta-vella': {
      badge:    'Residencial',
      title:    'Punta Vella Residences',
      location: 'Punta Vella, RD',
      imgs: [
        'img/modular/residencial-capsules.webp',
        'img/punta-vella/PHOTO-002.webp',
        'img/punta-vella/PHOTO-003.webp',
        'img/punta-vella/PHOTO-004.webp',

      ],
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
    'mini-nave-mgs1500': {
      badge:    'Industrial',
      title:    'Mini-Nave MGS-1500',
      location: 'Puerto Plata, RD',
      imgs: [
        'img/projects/mini-nave-mgs-1500/Mini-Nave-MGS-1500.webp',
        'img/projects/mini-nave-mgs-1500/img-mininave-interior.webp',
        'img/projects/mini-nave-mgs-1500/img-mininave-office.webp',
      ],
      specs: [
        { val: '139m²', label: 'Área total' },
        { val: '4.88m', label: 'Altura de alero' },
        { val: '5.64m', label: 'Altura de cumbrera' },
        { val: '2025',  label: 'Año' },
      ],
      desc: 'Nave industrial compacta de 9.14m x 15.24m con estructura de marco de acero y sistema de paneles metálicos prefabricados en paredes y techo. Incluye mezzanine de 15.24m x 3.66m para almacenaje y área de trabajo adicional, oficina privada integrada y puerta enrollable de 4.27m x 4.27m.',
      lista: [
        'Estructura de marco de acero con paneles metálicos prefabricados',
        'Mezzanine de 15.24m × 3.66m para almacenaje y trabajo adicional',
        'Oficina privada integrada en planta baja',
        'Puerta enrollable de 4.27m × 4.27m',
        'Ventana de aluminio corrediza',
        'Pendiente de techo 1:12 para drenaje eficiente',
      ],
    },
    'savannah-crest': {
      badge:    'Próximamente',
      title:    'Savannah Crest Residence',
      location: 'Por anunciar',
      imgs: [
        'img/projects/savannah-crest-residence/imagen1.jpg',
        'img/projects/savannah-crest-residence/imagen2.jpg',
        'img/projects/savannah-crest-residence/imagen3.jpg',
        'img/projects/savannah-crest-residence/imagen4.jpg',
        'img/projects/savannah-crest-residence/imagen5.jpg',
        
      ],
      specs: [
        { val: '—',    label: 'Unidades' },
        { val: '—',    label: 'Área' },
        { val: '2026', label: 'Año estimado' },
        { val: 'Dev',  label: 'Estado' },
      ],
      desc: 'Savannah Crest Residence es un exclusivo desarrollo residencial actualmente en fase de planificación. Pronto revelaremos todos los detalles de este proyecto que promete elevar los estándares de vida en República Dominicana con diseño arquitectónico de alto estándar.',
      lista: [
        'Desarrollo residencial de alto estándar',
        'Diseño arquitectónico en proceso',
        'Ubicación estratégica por anunciar',
        'Acabados y especificaciones próximamente',
        'Registro de interés disponible vía contacto',
      ],
    },
  };

  /* ── Crear backdrop con galería ── */
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';
  backdrop.innerHTML = `
    <div class="modal" id="modalBox">
      <div class="modal-close">
        <button class="modal-close-btn" id="modalCloseBtn">
          <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>

      <!-- Galería principal -->
      <div class="modal-gallery">
        <div class="modal-gallery-main">
          <img id="modalMainImg" src="" alt="" />
          <button class="gallery-nav gallery-prev" id="galleryPrev">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15,18 9,12 15,6"/></svg>
          </button>
          <button class="gallery-nav gallery-next" id="galleryNext">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9,6 15,12 9,18"/></svg>
          </button>
          <div class="gallery-counter" id="galleryCounter"></div>
        </div>
        <div class="modal-gallery-thumbs" id="galleryThumbs"></div>
      </div>

      <div class="modal-body">
        <span class="modal-badge" id="modalBadge"></span>
        <h2 class="modal-title" id="modalTitle"></h2>
        <div class="modal-location">
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

  /* ── Estado galería ── */
  let currentImgs = [];
  let currentIdx  = 0;

  function setGalleryImg(idx) {
    currentIdx = idx;
    document.getElementById('modalMainImg').src = currentImgs[idx];
    document.getElementById('galleryCounter').textContent = `${idx + 1} / ${currentImgs.length}`;

    document.querySelectorAll('.gallery-thumb').forEach((t, i) => {
      t.classList.toggle('active', i === idx);
    });

    document.getElementById('galleryPrev').style.display = currentImgs.length > 1 ? '' : 'none';
    document.getElementById('galleryNext').style.display = currentImgs.length > 1 ? '' : 'none';
    document.getElementById('galleryCounter').style.display = currentImgs.length > 1 ? '' : 'none';
  }

  document.getElementById('galleryPrev').addEventListener('click', () => {
    setGalleryImg((currentIdx - 1 + currentImgs.length) % currentImgs.length);
  });
  document.getElementById('galleryNext').addEventListener('click', () => {
    setGalleryImg((currentIdx + 1) % currentImgs.length);
  });

  /* ── Abrir modal ── */
  function openModal(key) {
    const p = proyectos[key];
    if (!p) return;

    currentImgs = p.imgs;
    currentIdx  = 0;

    /* Thumbnails */
    const thumbsEl = document.getElementById('galleryThumbs');
    if (currentImgs.length > 1) {
      thumbsEl.style.display = 'flex';
      thumbsEl.innerHTML = currentImgs.map((src, i) => `
        <button class="gallery-thumb${i === 0 ? ' active' : ''}" data-idx="${i}">
          <img src="${src}" alt="Vista ${i + 1}" />
        </button>`).join('');
      thumbsEl.querySelectorAll('.gallery-thumb').forEach(btn => {
        btn.addEventListener('click', () => setGalleryImg(+btn.dataset.idx));
      });
    } else {
      thumbsEl.style.display = 'none';
      thumbsEl.innerHTML = '';
    }

    setGalleryImg(0);

    document.getElementById('modalBadge').textContent        = p.badge;
    document.getElementById('modalTitle').textContent        = p.title;
    document.getElementById('modalLocationText').textContent = p.location;
    document.getElementById('modalDesc').textContent         = p.desc;

    document.getElementById('modalSpecs').innerHTML = p.specs.map(s => `
      <div class="modal-spec">
        <div class="modal-spec-val">${s.val}</div>
        <div class="modal-spec-label">${s.label}</div>
      </div>`).join('');

    document.getElementById('modalList').innerHTML = p.lista.map(i => `<li>${i}</li>`).join('');

    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.getElementById('modalCloseBtn').addEventListener('click', closeModal);
  backdrop.addEventListener('click', e => { if (e.target === backdrop) closeModal(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft')  setGalleryImg((currentIdx - 1 + currentImgs.length) % currentImgs.length);
    if (e.key === 'ArrowRight') setGalleryImg((currentIdx + 1) % currentImgs.length);
  });

  document.querySelectorAll('.proy-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const key = link.dataset.modal;
      if (key) openModal(key);
    });
  });

})();