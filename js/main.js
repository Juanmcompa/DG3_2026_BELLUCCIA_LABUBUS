/* =========================================================
   MONSTER LAB · main.js
   Interactividad de las 12 secciones
   ========================================================= */
(() => {
  "use strict";

  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ARS = n => "$" + n.toLocaleString("es-AR");

  /* ---------- 1. Spotlight que sigue al cursor ---------- */
  const spot = $(".spotlight");
  if (spot && !reduceMotion) {
    window.addEventListener("pointermove", (e) => {
      spot.style.setProperty("--mx", e.clientX + "px");
      spot.style.setProperty("--my", e.clientY + "px");
    }, { passive: true });
  }

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  $$(".reveal").forEach((el) => io.observe(el));

  /* ---------- 3. Tilt 3D en las tarjetas del bento ---------- */
  if (!reduceMotion) {
    $$("[data-tilt]").forEach((card) => {
      const inner = $(".tilt__inner", card);
      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width  - 0.5;
        const py = (e.clientY - r.top)  / r.height - 0.5;
        inner.style.transform = `rotateY(${px * 10}deg) rotateX(${-py * 10}deg) translateZ(10px)`;
      });
      card.addEventListener("pointerleave", () => { inner.style.transform = ""; });
    });
  }

  /* ---------- 4. Blind box + confeti en canvas ---------- */
  const box = $("#blindBox");
  const boxResult = $("#boxResult");
  const canvas = $("#confetti");
  if (box && canvas) {
    const ctx = canvas.getContext("2d");
    const prizes = [
      "15% OFF en utilería 3D",
      "Envío gratis en tu primer proyecto",
      "Gemas dentales de regalo",
      "10% OFF en repaint facial",
      "Sellado UV premium gratis"
    ];
    let opened = false;

    box.addEventListener("click", () => {
      if (opened) return;
      opened = true;
      box.classList.add("open");
      // pequeña pausa para construir tensión, luego revelar
      setTimeout(() => {
        const prize = prizes[Math.floor(Math.random() * prizes.length)];
        boxResult.textContent = "🎉 " + prize + " — se autodestruye en 5:00";
        boxResult.classList.add("show");
        if (!reduceMotion) burst();
      }, 450);
    });

    function burst() {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width; canvas.height = rect.height;
      const colors = ["#c4ff2e", "#ff2d95", "#8b3fff", "#ff6fb8", "#ece6ff"];
      const parts = Array.from({ length: 120 }, () => ({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 12,
        vy: (Math.random() - 0.5) * 12 - 4,
        size: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.3,
        life: 1
      }));
      let frame = 0;
      (function loop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        parts.forEach((p) => {
          p.vy += 0.35; p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.life -= 0.012;
          ctx.save();
          ctx.globalAlpha = Math.max(p.life, 0);
          ctx.translate(p.x, p.y); ctx.rotate(p.rot);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.6);
          ctx.restore();
        });
        frame++;
        if (frame < 130) requestAnimationFrame(loop);
        else ctx.clearRect(0, 0, canvas.width, canvas.height);
      })();
    }
  }

  /* ---------- 5. Parallax de la galería ---------- */
  if (!reduceMotion) {
    const items = $$(".gallery__item");
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const vh = window.innerHeight;
        items.forEach((it) => {
          const r = it.getBoundingClientRect();
          if (r.bottom < 0 || r.top > vh) return;
          const speed = parseFloat(it.dataset.speed || "1");
          const offset = (r.top - vh / 2) * (speed - 1) * 0.15;
          it.style.transform = `translateY(${offset}px)`;
        });
        ticking = false;
      });
    }, { passive: true });
  }

  /* ---------- 6. Ticker de cupos + cuenta regresiva ---------- */
  const ticker = $("#slotTicker");
  if (ticker) {
    const target = +ticker.dataset.target;
    let n = 0;
    const step = () => {
      n++; ticker.textContent = n;
      if (n < target) setTimeout(step, 220);
    };
    const tio = new IntersectionObserver((e) => {
      if (e[0].isIntersecting) { step(); tio.disconnect(); }
    });
    tio.observe(ticker);
  }

  function countdown(el, totalSeconds, format) {
    let t = totalSeconds;
    const tick = () => {
      el.textContent = format(Math.max(t, 0));
      if (t > 0) { t--; setTimeout(tick, 1000); }
    };
    tick();
  }
  const scTimer = $("#scarcityTimer");
  if (scTimer) {
    countdown(scTimer, 11 * 3600 + 59 * 60 + 30, (s) => {
      const h = String(Math.floor(s / 3600)).padStart(2, "0");
      const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
      const sec = String(s % 60).padStart(2, "0");
      return `${h}:${m}:${sec}`;
    });
  }

  /* ---------- 7. Confirm-shaming modal al evadir testimonios ---------- */
  const shameModal = $("#shameModal");
  const testimonios = $("#testimonios");
  if (shameModal && testimonios) {
    let shown = false;
    let lastY = window.scrollY;
    window.addEventListener("scroll", () => {
      const dir = window.scrollY - lastY;
      lastY = window.scrollY;
      if (shown) return;
      const r = testimonios.getBoundingClientRect();
      // si la sección está en pantalla y el usuario hace scroll rápido hacia abajo
      if (r.top < window.innerHeight && r.bottom > 0 && dir > 45) {
        shown = true;
        openDialog(shameModal);
      }
    }, { passive: true });
    $$("[data-close-modal]", shameModal).forEach((b) =>
      b.addEventListener("click", () => closeDialog(shameModal)));
  }

  /* ---------- 8. Cotizador con anclaje de precios ---------- */
  const quote = $("#cotizar");
  if (quote) {
    const boxes = $$('.opt input[type="checkbox"]', quote);
    const payRadios = $$('input[name="pay"]', quote);
    const totalEl = $("#quoteTotal");
    const anchorEl = $("#anchorPrice");
    const payNote = $("#payNote");

    const recalc = () => {
      let base = 0;
      boxes.forEach((b) => { if (b.checked) base += +b.dataset.price; });
      const pay = ($('input[name="pay"]:checked', quote) || {}).value;
      let total = base, note = "";
      if (pay === "transfer") {
        total = Math.round(base * 0.85);
        note = "15% OFF aplicado vía transferencia (Mercado Pago)";
      } else {
        note = "3 cuotas sin interés de " + ARS(Math.round(base / 3));
      }
      // anclaje: precio "de lista" inflado y tachado
      anchorEl.textContent = ARS(Math.round(base * 1.4));
      animateNumber(totalEl, total);
      payNote.textContent = base ? note : "Elegí al menos un servicio";
    };

    boxes.forEach((b) => b.addEventListener("change", recalc));
    payRadios.forEach((r) => r.addEventListener("change", recalc));
    recalc();

    $("#reserveBtn").addEventListener("click", (e) => {
      e.preventDefault();
      alert("Demo: acá iría la reserva. No se procesa ningún pago real.");
    });
  }

  // anima un número entre su valor actual y el nuevo
  function animateNumber(el, to) {
    const from = +(el.dataset.val || 0);
    const dur = 400, t0 = performance.now();
    const frame = (t) => {
      const k = Math.min((t - t0) / dur, 1);
      const val = Math.round(from + (to - from) * (1 - Math.pow(1 - k, 3)));
      el.textContent = ARS(val);
      if (k < 1) requestAnimationFrame(frame);
      else el.dataset.val = to;
    };
    requestAnimationFrame(frame);
  }

  /* ---------- 12. Exit-intent ---------- */
  const exitModal = $("#exitModal");
  if (exitModal) {
    let fired = false;
    const fire = () => {
      if (fired) return;
      fired = true;
      openDialog(exitModal);
      const timer = $("#exitTimer");
      countdown(timer, 5 * 60 - 1, (s) =>
        String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0"));
    };
    // desktop: el cursor sale por arriba
    document.addEventListener("mouseout", (e) => {
      if (!e.relatedTarget && e.clientY <= 0) fire();
    });
    $$("[data-close-exit]", exitModal).forEach((b) =>
      b.addEventListener("click", () => closeDialog(exitModal)));
  }

  /* ---------- Helpers de diálogo ---------- */
  function openDialog(el) {
    el.hidden = false;
    document.body.style.overflow = "hidden";
    const focusable = $("button, a", el);
    if (focusable) focusable.focus();
    el.addEventListener("keydown", escClose);
  }
  function closeDialog(el) {
    el.hidden = true;
    document.body.style.overflow = "";
    el.removeEventListener("keydown", escClose);
  }
  function escClose(e) {
    if (e.key === "Escape") closeDialog(e.currentTarget);
  }
})();
