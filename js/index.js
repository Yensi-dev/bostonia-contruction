/* NAVBAR */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 60));
document.getElementById('menuBtn').addEventListener('click', () => document.getElementById('mobileMenu').classList.toggle('open'));

/* HERO ZOOM */
window.addEventListener('load', () => { const bg = document.getElementById('heroBg'); if(bg) setTimeout(() => bg.classList.add('zoomed'), 80); });

/* COUNTERS */
function animateCounters() {
  document.querySelectorAll('.counter').forEach(el => {
    const target = +el.dataset.target, steps = 60, dur = 1800, inc = target / steps;
    let cur = 0;
    const t = setInterval(() => { cur += inc; if(cur >= target){cur=target;clearInterval(t);} el.textContent = Math.floor(cur); }, dur/steps);
  });
}
new IntersectionObserver(e => { if(e[0].isIntersecting) animateCounters(); }, {threshold:.3}).observe(document.getElementById('hero'));

/* REVEAL */
const ro = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting){e.target.classList.add('visible');ro.unobserve(e.target);} }), {threshold:.08,rootMargin:'0px 0px -30px 0px'});
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

/* ── 3D CAROUSEL INFINITO ── */
(function() {
  const track = document.getElementById('lcarTrack');
  if (!track) return;

  const origCards = Array.from(track.querySelectorAll('.lcar-card'));
  const total     = origCards.length;

  /* Clonar 2 al inicio y 2 al final */
  [origCards[total-2].cloneNode(true), origCards[total-1].cloneNode(true)]
    .forEach(c => track.insertBefore(c, track.firstChild));
  [origCards[0].cloneNode(true), origCards[1].cloneNode(true)]
    .forEach(c => track.appendChild(c));

  const cards = Array.from(track.querySelectorAll('.lcar-card'));
  const pad   = 2;
  let idx     = pad + Math.floor(total / 2);

  function update() {
    cards.forEach((card, i) => {
      const rel = i - idx;
      const abs = Math.abs(rel);
      if (abs > 2) {
        card.style.opacity       = '0';
        card.style.zIndex        = '0';
        card.style.pointerEvents = 'none';
        return;
      }
      card.classList.toggle('active', rel === 0);
      card.style.pointerEvents = 'auto';
      card.style.transform = `translateX(${rel*450}px) translateZ(${abs===0?0:-80*abs}px) rotateY(${rel*40}deg) scale(${abs===0?1:1-abs*0.08})`;
      card.style.opacity   = abs===0 ? '1' : abs===1 ? '0.75' : '0.45';
      card.style.zIndex    = 10 - abs*3;
    });
  }

  function next() { idx++; if(idx >= cards.length - pad) idx = pad; update(); }
  function prev() { idx--; if(idx < pad) idx = cards.length - pad - 1; update(); }

  cards.forEach((c, i) => c.addEventListener('click', () => { idx = i; update(); }));

  let ldx = 0, dragging = false;
  track.addEventListener('mousedown',  e => { dragging = true; ldx = e.clientX; });
  track.addEventListener('touchstart', e => { dragging = true; ldx = e.touches[0].clientX; }, {passive:true});
  window.addEventListener('mouseup',  e => { if(!dragging) return; dragging = false; if(ldx-e.clientX>50) next(); else if(e.clientX-ldx>50) prev(); });
  window.addEventListener('touchend', e => { if(!dragging) return; dragging = false; const d=ldx-e.changedTouches[0].clientX; if(d>50) next(); else if(d<-50) prev(); });

  window.addEventListener('resize', update);
  window.addEventListener('load',   update);
  setInterval(next, 3500);
  update();
})();

/* ── PROJECT CAROUSEL ── */
(function() {
  const carTrack = document.getElementById('carTrack');
  const carDots  = document.getElementById('carDots');
  const prevBtn  = document.getElementById('prevBtn');
  const nextBtn  = document.getElementById('nextBtn');
  if (!carTrack) return;

  let allCards = Array.from(carTrack.querySelectorAll('.pcard'));
  let vis      = [...allCards];
  let carIdx   = 0;
  let perPage  = getPP();

  function getPP(){ return window.innerWidth>=1024?3:window.innerWidth>=640?2:1; }

  function buildDots(){
    carDots.innerHTML = '';
    const pages = Math.ceil(vis.length/perPage);
    for(let i=0;i<pages;i++){ const d=document.createElement('div'); d.className='dot'+(i===0?' active':''); d.addEventListener('click',()=>goTo(i)); carDots.appendChild(d); }
  }

  function updateDots(){ const p=Math.floor(carIdx/perPage); carDots.querySelectorAll('.dot').forEach((d,i)=>d.classList.toggle('active',i===p)); }
  function goTo(pi){ carIdx=Math.max(0,Math.min(pi*perPage,vis.length-perPage)); slide(); updateDots(); }
  function slide(){ const w=carTrack.querySelector('.pcard')?.offsetWidth||0; carTrack.style.transform=`translateX(-${carIdx*(w+20)}px)`; }
  function nextSlide(){ const pages=Math.ceil(vis.length/perPage); goTo((Math.floor(carIdx/perPage)+1)%pages); }
  function prevSlide(){ const pages=Math.ceil(vis.length/perPage); goTo((Math.floor(carIdx/perPage)-1+pages)%pages); }

  nextBtn.addEventListener('click',nextSlide);
  prevBtn.addEventListener('click',prevSlide);

  document.querySelectorAll('.fpill').forEach(pill => pill.addEventListener('click', () => {
    document.querySelectorAll('.fpill').forEach(p=>p.classList.remove('active'));
    pill.classList.add('active');
    const cat = pill.dataset.cat;
    allCards.forEach(c=>c.classList.toggle('hidden', cat!=='all' && c.dataset.cat!==cat));
    vis = allCards.filter(c=>!c.classList.contains('hidden'));
    carIdx = 0; carTrack.style.transform='translateX(0)'; buildDots(); updateDots();
  }));

  window.addEventListener('resize', ()=>{ perPage=getPP(); carIdx=0; slide(); buildDots(); });
  buildDots();
})();

/* ── TESTI CAROUSEL ── */
(function() {
  const testiTrack = document.getElementById('testiTrack');
  const testiDots  = document.getElementById('testiDots');
  const tPrev      = document.getElementById('testiPrev');
  const tNext      = document.getElementById('testiNext');
  if (!testiTrack || !tPrev) return;

  const tCards = Array.from(testiTrack.querySelectorAll('.tcard'));
  let tIdx = 0, tPer = getTP();

  function getTP(){ return window.innerWidth>=1024?3:window.innerWidth>=768?2:1; }
  function buildTD(){ testiDots.innerHTML=''; const pages=Math.ceil(tCards.length/tPer); for(let i=0;i<pages;i++){ const d=document.createElement('div'); d.className='dot'+(i===0?' active':''); d.addEventListener('click',()=>goToT(i)); testiDots.appendChild(d); } }
  function updateTD(){ const p=Math.floor(tIdx/tPer); testiDots.querySelectorAll('.dot').forEach((d,i)=>d.classList.toggle('active',i===p)); }
  function goToT(pi){ tIdx=pi*tPer; const w=tCards[0].offsetWidth; testiTrack.style.transform=`translateX(-${tIdx*(w+24)}px)`; testiTrack.style.transition='transform 0.5s cubic-bezier(.4,0,.2,1)'; updateTD(); }
  function nextT(){ const pages=Math.ceil(tCards.length/tPer); goToT((Math.floor(tIdx/tPer)+1)%pages); }
  function prevT(){ const pages=Math.ceil(tCards.length/tPer); goToT((Math.floor(tIdx/tPer)-1+pages)%pages); }

  tNext.addEventListener('click', nextT);
  tPrev.addEventListener('click', prevT);
  window.addEventListener('resize', ()=>{ tPer=getTP(); tIdx=0; testiTrack.style.transform='translateX(0)'; buildTD(); });
  let tTimer = setInterval(nextT, 5500);
  [tPrev,tNext].forEach(btn=>btn.addEventListener('click',()=>{ clearInterval(tTimer); tTimer=setInterval(nextT,5500); }));
  buildTD();
})();
