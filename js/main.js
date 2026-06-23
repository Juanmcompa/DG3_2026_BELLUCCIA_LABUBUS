/* =========================================================
   MONSTER LAB · main.js
   ========================================================= */
(() => {
  "use strict";

  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Spotlight ---------- */
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

  /* ---------- Mar de iguales (sección 2) ---------- */
  const sea = $("#sea");
  if (sea) {
    const TOTAL = 36, STAR = 22;
    for (let i = 0; i < TOTAL; i++) {
      const d = document.createElement("span");
      d.className = "same" + (i === STAR ? " same--star" : "");
      sea.appendChild(d);
    }
  }

  /* ---------- Slider Antes / Después (sección 3) ---------- */
  const compare = $("#compare");
  if (compare) {
    const clip = $("#compareClip");
    const handle = $("#compareHandle");
    let dragging = false;

    const setPos = (pct) => {
      pct = Math.max(0, Math.min(100, pct));
      clip.style.width = pct + "%";
      handle.style.left = pct + "%";
      handle.setAttribute("aria-valuenow", Math.round(pct));
    };
    const fromEvent = (e) => {
      const r = compare.getBoundingClientRect();
      const x = (e.touches ? e.touches[0].clientX : e.clientX) - r.left;
      setPos((x / r.width) * 100);
    };

    compare.addEventListener("pointerdown", (e) => { dragging = true; fromEvent(e); });
    window.addEventListener("pointermove", (e) => { if (dragging) fromEvent(e); }, { passive: true });
    window.addEventListener("pointerup", () => { dragging = false; });

    handle.addEventListener("keydown", (e) => {
      const cur = +handle.getAttribute("aria-valuenow");
      if (e.key === "ArrowLeft")  setPos(cur - 4);
      if (e.key === "ArrowRight") setPos(cur + 4);
    });

    setPos(50);
  }

  /* ---------- Parallax de galería (sección 8) ---------- */
  if (!reduceMotion) {
    const items = $$(".mg__item");
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
          const offset = (r.top - vh / 2) * (speed - 1) * 0.12;
          it.style.transform = `translateY(${offset}px)`;
        });
        ticking = false;
      });
    }, { passive: true });
  }

})();
