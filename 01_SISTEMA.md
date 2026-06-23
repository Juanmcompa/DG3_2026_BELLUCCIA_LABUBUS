# SISTEMA · DG3 FADU 2026 · Design System Técnico

ROL_AGENTE: Desarrollador web. Usás este archivo como referencia técnica absoluta para generar código. No inventás tokens, colores ni clases que no estén aquí.

## STACK
- HTML5/CSS3/ES6+ vanilla — sin frameworks, sin npm, sin build tools
- Archivos de salida: `index.html` | `css/styles.css` | `js/main.js` | `assets/`
- Imágenes: siempre en `assets/[nombre].[ext]` — paths relativos desde raíz
- `<script src="js/main.js"></script>` al final de `<body>` en todos los HTML
- `<link rel="stylesheet" href="css/styles.css">` en `<head>` de todos los HTML

## HEAD (copiar en todos los .html)
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>[TITULO_PAGINA]</title>
<meta name="description" content="[DESC_SEO_MAX_160]">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Outfit:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/styles.css">
```

## styles.css
```css
:root {
  --void:#0a0612;--void-2:#110a1f;--panel:#170e29;--panel-2:#1d1233;--line:#2c1d4a;
  --violet:#8b3fff;--violet-deep:#5a1fc4;--neon:#c4ff2e;--neon-dim:#9bd11f;
  --pink:#ff2d95;--pink-soft:#ff6fb8;--text:#ece6ff;--muted:#9a8fc2;--faint:#5d5380;
  --radius:18px;--radius-sm:12px;--maxw:1180px;
  --shadow-neon:0 0 0 1px rgba(196,255,46,.4),0 0 30px rgba(196,255,46,.25);
  --shadow-pink:0 0 40px rgba(255,45,149,.35);
  --font-display:"Syne",system-ui,sans-serif;
  --font-body:"Outfit",system-ui,sans-serif;
  --font-mono:"Space Mono",ui-monospace,monospace;
}
/* ADAPTACION DE COLOR POR TEMA:
   Apex Sim-Racing → --neon:#00f0ff; --pink:#ff3300; --violet:#001aff
   Cúspides Montaña → --neon:#e8f4e8; --pink:#b8860b; --violet:#2d5016
   Raíz Restauración → --neon:#ffcc00; --pink:#ff6b35; --violet:#8b4513
   Trastes Luthería → --neon:#d4af37; --pink:#8b1c1c; --violet:#3d2b1f
*/
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:var(--font-body);background:var(--void);color:var(--text);line-height:1.6;overflow-x:hidden;position:relative}
img{max-width:100%;display:block}
a{color:inherit;text-decoration:none}
.spotlight{position:fixed;inset:0;pointer-events:none;z-index:0;background:radial-gradient(520px circle at var(--mx,50%) var(--my,20%),rgba(139,63,255,.22),rgba(196,255,46,.05) 40%,transparent 65%);transition:background .12s linear}
.grain{position:fixed;inset:0;pointer-events:none;z-index:1;opacity:.05;mix-blend-mode:overlay;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}
.eyebrow{font-family:var(--font-mono);font-size:.72rem;letter-spacing:.28em;text-transform:uppercase;color:var(--neon);margin-bottom:1rem}
.section__title{font-family:var(--font-display);font-weight:800;font-size:clamp(1.8rem,4.5vw,3.1rem);line-height:1.05;letter-spacing:-.02em}
.section{position:relative;z-index:2;max-width:var(--maxw);margin:0 auto;padding:clamp(4rem,9vw,7rem) 1.4rem}
.section--center{text-align:center}
.section__head{max-width:640px;margin-bottom:3rem}
.section--center .section__head{margin-inline:auto}
.microcopy{text-align:center;font-family:var(--font-display);font-weight:700;font-size:clamp(1.1rem,3vw,1.6rem);color:var(--text);margin-top:2.4rem}
.microcopy--band{max-width:var(--maxw);margin:0 auto;padding:2.6rem 1.4rem;color:var(--neon)}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:.5rem;font-family:var(--font-display);font-weight:700;font-size:.95rem;padding:.85rem 1.5rem;border-radius:999px;border:1px solid transparent;cursor:pointer;background:transparent;color:var(--text);transition:transform .18s ease,box-shadow .25s ease,background .2s ease}
.btn:hover{transform:translateY(-2px)}
.btn:focus-visible{outline:3px solid var(--neon);outline-offset:3px}
.btn--primary{background:#9e5cff;color:#fff;padding:18px 40px;border-radius:50px;box-shadow:0 0 40px rgba(165,90,255,.35);transition:transform .35s ease,box-shadow .35s ease}
.btn--primary:hover{transform:translateY(-4px);box-shadow:0 0 60px rgba(175,80,255,.7)}
.btn--ghost{border:1px solid rgba(255,255,255,.2);border-radius:50px;padding:18px 40px;backdrop-filter:blur(10px)}
.btn--ghost:hover{border-color:var(--neon);color:var(--neon)}
.btn--shame{background:transparent;color:var(--muted);text-decoration:underline;font-family:var(--font-body);font-weight:400;text-transform:none;padding:.5rem 1rem;font-size:.85rem;border:none;cursor:pointer}
.btn--shame:hover{color:var(--text)}
.btn--lg{padding:1rem 1.9rem;font-size:1.05rem}
.btn--xl{padding:1.2rem 2.4rem;font-size:1.25rem}
.btn--block{width:100%}
.btn--pulse{animation:pulse 2.4s ease-in-out infinite}
@keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(255,45,149,.5),var(--shadow-pink)}50%{box-shadow:0 0 0 14px rgba(255,45,149,0),0 0 60px rgba(255,45,149,.5)}}
.nav{position:sticky;top:0;z-index:50;display:flex;align-items:center;gap:1.5rem;max-width:var(--maxw);margin:0 auto;padding:1rem 1.4rem;backdrop-filter:blur(14px);background:rgba(10,6,18,.6);border-bottom:1px solid var(--line)}
.nav__brand{display:flex;align-items:center;gap:.55rem;font-family:var(--font-display);font-weight:800;font-size:1.2rem}
.nav__brand-accent{color:var(--neon)}
.nav__links{display:flex;gap:1.6rem;margin-left:auto;font-size:.9rem;color:var(--muted)}
.nav__links a:hover{color:var(--neon)}
.nav__cta{padding:.55rem 1.1rem;font-size:.85rem}
.hero{position:relative;height:100vh;overflow:hidden;display:flex;justify-content:center;align-items:center;padding-bottom:70px;background:#090311}
.hero__bg{position:absolute;inset:0;z-index:0;background:radial-gradient(circle at 50% 20%,rgba(170,90,255,.30),transparent 50%),linear-gradient(180deg,rgba(11,2,24,.55),rgba(9,2,18,.70) 60%,rgba(5,1,8,.92)),url('assets/[IMAGEN_FONDO_HERO]');background-size:contain;background-position:center center;background-repeat:no-repeat}
.hero__grid{position:absolute;inset:0;opacity:.8;background:repeating-linear-gradient(90deg,transparent 0px,transparent 38px,rgba(182,0,255,.09) 40px,transparent 42px);animation:gridMove 8s linear infinite}
@keyframes gridMove{from{transform:translateY(0)}to{transform:translateY(40px)}}
.hero__halo{position:absolute;inset:-10% -20% auto auto;width:60%;height:60%;background:radial-gradient(circle,rgba(255,45,149,.25),transparent 60%);filter:blur(40px);z-index:-1}
.hero__toy{position:absolute;left:50%;top:7%;transform:translateX(-50%);z-index:5;display:grid;place-items:center;opacity:0;animation:heroToy .8s ease forwards}
@keyframes heroToy{to{opacity:1}}
@keyframes float{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-22px) rotate(2deg)}}
.toy{position:relative;width:210px;height:280px;animation:float 5s ease-in-out infinite;filter:drop-shadow(0 25px 40px rgba(139,63,255,.4))}
.toy__head{position:absolute;top:38px;left:50%;transform:translateX(-50%);width:150px;height:140px;background:linear-gradient(160deg,#efe7d8,#cdbfa4);border-radius:50% 50% 46% 46%;border:2px solid rgba(0,0,0,.15)}
.toy__ear{position:absolute;top:-36px;width:40px;height:90px;background:linear-gradient(160deg,#efe7d8,#c9bb9e);border-radius:50% 50% 40% 40%}
.toy__ear--l{left:38px;transform:rotate(-16deg)}
.toy__ear--r{right:38px;transform:rotate(16deg)}
.toy__eye{position:absolute;top:58px;width:30px;height:30px;background:#1a1119;border-radius:50%;box-shadow:inset -4px -4px 0 rgba(255,255,255,.15)}
.toy__eye--l{left:40px}.toy__eye--r{right:40px}
.toy__eye::after{content:"";position:absolute;top:6px;left:7px;width:8px;height:8px;background:#fff;border-radius:50%}
.toy__grin{position:absolute;bottom:30px;left:50%;transform:translateX(-50%);display:flex;gap:2px}
.toy__grin span{width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:11px solid #fff}
.toy__grin span:nth-child(odd){border-top-width:14px}
.toy__jersey{position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:120px;height:90px;background:linear-gradient(110deg,#75aadb 0 33%,#fff 33% 66%,#75aadb 66%);border-radius:16px 16px 12px 12px;display:grid;place-items:center;font-family:var(--font-display);font-weight:800;font-size:2rem;color:#1d3b6e;border:2px solid rgba(0,0,0,.12)}
.hero__content{position:relative;z-index:10;text-align:center;max-width:1100px;margin:auto;padding-top:420px;opacity:0;transform:translateY(50px);animation:heroContent 1s .35s ease forwards}
@keyframes heroContent{to{opacity:1;transform:translateY(0)}}
.hero__eyebrow{letter-spacing:5px;font-size:.8rem;text-transform:uppercase;opacity:.7;margin-bottom:30px}
.hero__title{font-family:var(--font-display);font-weight:800;font-size:clamp(2.8rem,8vw,5.4rem);line-height:.98;letter-spacing:-.03em;margin:.4rem 0 1.3rem}
.hero__title span{background:linear-gradient(90deg,#ff9dff,#9f79ff,#7ae3ff);-webkit-background-clip:text;color:transparent}
.hero__sub{max-width:42ch;color:var(--muted);font-size:1.05rem;margin-bottom:2rem}
.hero__actions{display:flex;flex-wrap:wrap;gap:.9rem;justify-content:center}
.glitch{position:relative;color:var(--neon);display:inline-block}
.glitch::before,.glitch::after{content:attr(data-text);position:absolute;left:0;top:0;width:100%;overflow:hidden}
.glitch::before{color:var(--pink);transform:translate(-2px,0);opacity:.8;animation:glitchA 3s steps(2) infinite}
.glitch::after{color:var(--violet);transform:translate(2px,0);opacity:.7;animation:glitchB 2.7s steps(2) infinite}
@keyframes glitchA{0%,92%,100%{clip-path:inset(0 0 100% 0)}94%{clip-path:inset(20% 0 40% 0)}96%{clip-path:inset(60% 0 10% 0)}}
@keyframes glitchB{0%,90%,100%{clip-path:inset(100% 0 0 0)}93%{clip-path:inset(40% 0 30% 0)}97%{clip-path:inset(10% 0 60% 0)}}
.marquee{position:relative;z-index:2;display:flex;overflow:hidden;padding:1.1rem 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:linear-gradient(90deg,var(--void-2),var(--panel),var(--void-2));-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}
.marquee__track{display:flex;align-items:center;flex-shrink:0;gap:2rem;padding-right:2rem;white-space:nowrap;animation:scroll 30s linear infinite}
@keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-100%)}}
.marquee:hover .marquee__track{animation-play-state:paused}
.marquee__item{font-family:var(--font-display);font-weight:700;font-size:1.05rem}
.marquee__item:nth-child(4n+1){color:var(--neon)}
.marquee__dot{color:var(--pink);font-size:.8rem}
.problem__text{max-width:60ch;margin:0 auto;color:var(--muted);font-size:1.15rem}
.problem__text strong{color:var(--neon)}
.sea{display:grid;grid-template-columns:repeat(9,1fr);gap:12px;max-width:560px;margin:0 auto 2.6rem;justify-items:center}
.sea .same{width:26px;height:26px;border-radius:50% 50% 45% 45%;background:#241a3a;position:relative;opacity:.55}
.sea .same::before,.sea .same::after{content:"";position:absolute;top:-7px;width:8px;height:14px;background:#241a3a;border-radius:50%}
.sea .same::before{left:3px;transform:rotate(-12deg)}
.sea .same::after{right:3px;transform:rotate(12deg)}
.sea .same--star{background:linear-gradient(160deg,var(--pink),var(--violet));opacity:1;transform:scale(1.25);box-shadow:var(--shadow-pink)}
.sea .same--star::before,.sea .same--star::after{background:var(--violet)}
.compare{position:relative;max-width:540px;margin:0 auto;aspect-ratio:3/4;border-radius:var(--radius);overflow:hidden;border:1px solid var(--line);user-select:none;touch-action:none;box-shadow:0 30px 60px rgba(0,0,0,.5)}
.compare__img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.compare__clip{position:absolute;inset:0;width:50%;overflow:hidden}
.compare__clip .compare__img{width:540px;max-width:none}
.compare__label{position:absolute;bottom:14px;z-index:3;font-family:var(--font-mono);font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;padding:.3rem .6rem;border-radius:6px;background:rgba(10,6,18,.7);backdrop-filter:blur(4px)}
.compare__label--before{left:14px;color:var(--text)}
.compare__label--after{right:14px;color:var(--neon)}
.compare__handle{position:absolute;top:0;left:50%;transform:translateX(-50%);width:4px;height:100%;background:var(--neon);cursor:ew-resize;z-index:4;box-shadow:0 0 16px var(--neon)}
.compare__handle:focus-visible{outline:none;box-shadow:0 0 0 3px var(--pink)}
.compare__grip{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:42px;height:42px;border-radius:50%;background:var(--neon);color:var(--void);display:grid;place-items:center;font-weight:700;font-family:var(--font-mono);letter-spacing:-2px}
.chips{list-style:none;display:flex;flex-wrap:wrap;gap:.55rem;justify-content:center;max-width:640px;margin:2.2rem auto 0}
.chips li{font-size:.85rem;padding:.45rem .9rem;border-radius:999px;border:1px solid var(--line);color:var(--muted);background:var(--panel)}
.styles{display:grid;grid-template-columns:repeat(4,1fr);gap:.9rem}
.style-card{font-family:var(--font-display);font-weight:700;font-size:1.05rem;color:var(--text);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.6rem;min-height:130px;padding:1.2rem;cursor:pointer;border-radius:var(--radius);background:linear-gradient(160deg,var(--panel),var(--void-2));border:1px solid var(--line);transition:transform .2s ease,border-color .2s ease,box-shadow .25s ease}
.style-card__emoji{font-size:2rem;transition:transform .25s ease}
.style-card:hover{transform:translateY(-6px);border-color:var(--neon);box-shadow:var(--shadow-neon)}
.style-card:hover .style-card__emoji{transform:scale(1.25) rotate(-8deg)}
.style-card:focus-visible{outline:3px solid var(--pink);outline-offset:2px}
.steps{list-style:none;display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;text-align:left}
.step{position:relative;padding:1.6rem;border-radius:var(--radius);background:var(--panel);border:1px solid var(--line)}
.step__num{font-family:var(--font-mono);color:var(--neon);font-size:1.4rem}
.step h3{font-family:var(--font-display);font-weight:700;font-size:1.15rem;margin:.5rem 0 .4rem}
.step p{color:var(--muted);font-size:.92rem}
.step:not(:last-child)::after{content:"→";position:absolute;top:50%;right:-.85rem;transform:translateY(-50%);color:var(--violet);font-size:1.3rem;z-index:3}
.idea__inner{position:relative;overflow:hidden;border-radius:var(--radius);padding:clamp(2rem,5vw,3.4rem);background:linear-gradient(160deg,var(--panel-2),var(--void-2));border:1px solid var(--violet);box-shadow:0 0 60px rgba(139,63,255,.18)}
.idea__lead{color:var(--muted);margin-top:.8rem;font-size:1.1rem}
.idea__list{list-style:none;display:grid;grid-template-columns:repeat(2,1fr);gap:.7rem 1.6rem;margin:2rem 0}
.idea__list li{position:relative;padding-left:1.9rem;color:var(--text)}
.idea__list li::before{content:"✔";position:absolute;left:0;top:0;color:var(--void);background:var(--neon);width:1.3rem;height:1.3rem;border-radius:5px;display:grid;place-items:center;font-size:.72rem;font-weight:700}
.idea__close{font-family:var(--font-display);font-weight:700;font-size:1.3rem}
.idea__close span{color:var(--neon)}
.why{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem}
.why__card{padding:1.7rem;border-radius:var(--radius);background:linear-gradient(160deg,var(--panel),var(--void-2));border:1px solid var(--line);transition:border-color .2s ease,transform .2s ease}
.why__card:hover{border-color:var(--violet);transform:translateY(-4px)}
.why__icon{font-size:1.8rem}
.why__card h3{font-family:var(--font-display);font-weight:700;font-size:1.15rem;margin:.7rem 0 .4rem}
.why__card p{color:var(--muted);font-size:.92rem}
.gallery{position:relative;z-index:2;max-width:var(--maxw);margin:0 auto;padding:clamp(3rem,8vw,6rem) 1.4rem}
.masonry-gallery{columns:3 280px;column-gap:1rem}
.mg__item{break-inside:avoid;margin-bottom:1rem;border-radius:var(--radius);overflow:hidden;border:1px solid var(--line);will-change:transform}
.mg__item img{width:100%;display:block;background:var(--panel)}
.mg__item:nth-child(3n+1) img{aspect-ratio:3/4;object-fit:cover}
.mg__item:nth-child(3n+2) img{aspect-ratio:1/1;object-fit:cover}
.mg__item:nth-child(3n) img{aspect-ratio:4/5;object-fit:cover}
.stories{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}
.story{padding:1.8rem;border-radius:var(--radius);position:relative;background:linear-gradient(160deg,var(--panel),var(--void-2));border:1px solid var(--line)}
.story::before{content:"\201C";font-family:var(--font-display);font-size:3.4rem;line-height:.6;color:var(--violet)}
.story p{font-size:1.05rem;margin-top:.4rem}
.story cite{display:block;margin-top:1.2rem;font-family:var(--font-mono);font-size:.78rem;color:var(--neon);font-style:normal}
.exclusive{position:relative;overflow:hidden;text-align:center;padding:clamp(2.6rem,6vw,4rem);border-radius:var(--radius);background:var(--void-2);border:1px solid var(--pink);box-shadow:var(--shadow-pink)}
.exclusive__glow{position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(255,45,149,.22),transparent 60%)}
.exclusive .eyebrow,.exclusive .section__title,.exclusive__text,.exclusive .btn{position:relative}
.exclusive__text{max-width:56ch;margin:1rem auto 2rem;color:var(--muted);font-size:1.08rem}
.scarcity{background:rgba(255,42,95,.1);border-left:4px solid var(--pink);padding:1rem 1.5rem;display:flex;justify-content:space-between;align-items:center;border-radius:0 var(--radius-sm) var(--radius-sm) 0;margin-bottom:2rem}
.ticker,.scarcity__timer{font-family:var(--font-mono);font-weight:700;color:var(--pink)}
.faq{max-width:760px;margin:0 auto;display:flex;flex-direction:column;gap:.7rem}
.faq__item{border:1px solid var(--line);border-radius:var(--radius-sm);background:var(--panel);overflow:hidden}
.faq__item summary{list-style:none;cursor:pointer;padding:1.1rem 1.3rem;font-family:var(--font-display);font-weight:700;font-size:1.02rem;display:flex;justify-content:space-between;align-items:center;gap:1rem}
.faq__item summary::-webkit-details-marker{display:none}
.faq__item summary::after{content:"+";color:var(--neon);font-size:1.4rem;transition:transform .3s ease}
.faq__item[open] summary::after{transform:rotate(45deg)}
.faq__body{padding:0 1.3rem 1.2rem;color:var(--muted)}
.final{position:relative;z-index:2;text-align:center;overflow:hidden;padding:clamp(5rem,12vw,9rem) 1.4rem;border-top:1px solid var(--line)}
.final__glow{position:absolute;inset:0;background:radial-gradient(60% 60% at 50% 40%,rgba(139,63,255,.3),transparent 70%)}
.final__inner{position:relative;max-width:760px;margin:0 auto}
.final__title{font-family:var(--font-display);font-weight:800;font-size:clamp(2rem,6vw,3.6rem);line-height:1.05;letter-spacing:-.02em}
.final__sub{color:var(--muted);font-size:1.15rem;margin:1.2rem 0 2.4rem}
.final__actions{display:flex;flex-direction:column;align-items:center;gap:1rem}
.footer{position:relative;z-index:2;border-top:1px solid var(--line);padding:2.4rem 1.4rem}
.footer__inner{max-width:var(--maxw);margin:0 auto;text-align:center}
.footer__brand{font-family:var(--font-display);font-weight:800;font-size:1.4rem}
.footer__brand span{color:var(--neon)}
.footer__copy{color:var(--faint);font-size:.82rem;margin-top:.4rem}
.reveal{opacity:0;transform:translateY(28px);transition:opacity .7s ease,transform .7s ease}
.reveal.in{opacity:1;transform:none}
.experience{position:relative;display:flex;flex-direction:column;align-items:center;min-height:170vh;gap:0}
.experience__video{position:sticky;top:80px;z-index:1;width:100%;max-width:900px;margin:0 auto;overflow:hidden;border-radius:var(--radius);border:1px solid var(--line);background:var(--panel);aspect-ratio:16/9;box-shadow:0 25px 80px rgba(139,63,255,.25),0 10px 40px rgba(0,0,0,.5)}
.experience__video video{width:100%;height:100%;display:block;object-fit:cover;transition:transform .8s ease,filter .8s ease}
.experience__video:hover video{transform:scale(1.03);filter:brightness(1.05)}
.experience__content{position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;text-align:center;gap:1.6rem;max-width:700px;margin:0 auto;padding:4rem 1.4rem 6rem}
.experience__text{color:var(--muted);line-height:1.8;max-width:50ch}
.detalle__hero{padding:clamp(4rem,8vw,7rem) 1.4rem clamp(2rem,4vw,4rem);max-width:var(--maxw);margin:0 auto}
.detalle__tag{font-family:var(--font-mono);font-size:.75rem;padding:.3rem .8rem;border-radius:999px;background:var(--neon);color:var(--void);font-weight:700;display:inline-block;margin-bottom:1.2rem}
.detalle__title{font-family:var(--font-display);font-weight:800;font-size:clamp(2.5rem,7vw,5rem);line-height:.95;letter-spacing:-.04em;margin-bottom:1.5rem}
.detalle__desc{max-width:52ch;color:var(--muted);font-size:1.1rem;line-height:1.75}
.detalle__actions{display:flex;gap:1rem;flex-wrap:wrap;margin-top:2rem}
.detalle__features{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;max-width:var(--maxw);margin:0 auto;padding:0 1.4rem clamp(3rem,6vw,5rem)}
.feature__card{padding:1.8rem;border-radius:var(--radius);background:linear-gradient(160deg,var(--panel),var(--void-2));border:1px solid var(--line)}
.feature__icon{font-size:1.8rem;margin-bottom:.8rem}
.feature__card h3{font-family:var(--font-display);font-weight:700;font-size:1.1rem;margin-bottom:.4rem}
.feature__card p{color:var(--muted);font-size:.9rem;line-height:1.6}
.proceso__grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.5rem}
.proceso__item{display:flex;gap:1.2rem;align-items:flex-start;padding:1.4rem;background:var(--panel);border-radius:var(--radius);border:1px solid var(--line)}
.proceso__num{font-family:var(--font-mono);color:var(--neon);font-size:2rem;font-weight:700;flex-shrink:0;line-height:1}
.proceso__item h3{font-family:var(--font-display);font-weight:700;font-size:1.1rem;margin-bottom:.3rem}
.proceso__item p{color:var(--muted);font-size:.9rem}
.precio__card{border-radius:var(--radius);background:linear-gradient(160deg,var(--panel-2),var(--void-2));border:1px solid var(--violet);padding:2.5rem;text-align:center;box-shadow:0 0 60px rgba(139,63,255,.15);max-width:560px;margin:0 auto}
.precio__monto{font-family:var(--font-mono);font-size:3rem;font-weight:700;color:var(--neon);margin:1rem 0 .5rem}
.precio__periodo{color:var(--muted);font-size:.9rem;margin-bottom:1.5rem}
.precio__lista{list-style:none;margin:0 0 2rem;text-align:left}
.precio__lista li{padding:.55rem 0;border-bottom:1px solid var(--line);color:var(--muted);font-size:.95rem;display:flex;align-items:center;gap:.6rem}
.precio__lista li::before{content:"✔";color:var(--neon);font-size:.8rem;font-weight:700;flex-shrink:0}
.form__field{margin-bottom:1.2rem}
.form__label{display:block;font-family:var(--font-mono);font-size:.75rem;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin-bottom:.4rem}
.form__input,.form__textarea,.form__select{width:100%;background:var(--panel);border:1px solid var(--line);border-radius:var(--radius-sm);padding:.85rem 1rem;color:var(--text);font-family:var(--font-body);font-size:1rem;transition:border-color .2s ease}
.form__input:focus,.form__textarea:focus,.form__select:focus{outline:none;border-color:var(--neon)}
.form__textarea{resize:vertical;min-height:140px}
.form__select{cursor:pointer;appearance:none}
.form__select option{background:var(--panel)}
.modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.8);backdrop-filter:blur(8px);z-index:100;display:none;place-items:center;padding:1.4rem}
.modal-overlay.is-open{display:grid}
.modal{background:var(--panel-2);border:1px solid var(--line);border-radius:var(--radius);padding:2.5rem;max-width:560px;width:100%;position:relative;max-height:90vh;overflow-y:auto}
.modal__close{position:absolute;top:1rem;right:1rem;background:transparent;border:none;color:var(--muted);font-size:1.5rem;cursor:pointer;line-height:1;padding:.25rem .5rem}
.modal__close:hover{color:var(--text)}
.uikit-header{margin-bottom:4rem;border-bottom:1px solid var(--line);padding-bottom:2rem;padding-top:3rem}
.uikit-section{margin-bottom:4rem;max-width:var(--maxw);margin-inline:auto;padding-inline:1.4rem}
.uikit-section-title{font-family:var(--font-mono);font-size:.9rem;text-transform:uppercase;letter-spacing:2px;color:var(--neon);margin-bottom:1.5rem;border-left:3px solid var(--neon);padding-left:10px}
.color-swatch{height:100px;border-radius:var(--radius-sm);display:flex;align-items:flex-end;padding:1rem;font-family:var(--font-mono);font-size:.8rem;font-weight:700;box-shadow:inset 0 0 0 1px rgba(255,255,255,.1)}
.bento__card{background:var(--panel);border-radius:var(--radius-sm);padding:1.5rem;border:1px solid var(--line);transition:transform .3s ease,border-color .3s ease}
.bento__card:hover{transform:translateY(-4px);border-color:rgba(255,255,255,.1)}
.bento__price{font-family:var(--font-mono);color:var(--neon);font-weight:700;font-size:1.1rem;display:block;margin-top:.5rem}
.bento__tag{font-family:var(--font-mono);font-size:.75rem;padding:.2rem .6rem;border-radius:50px;background:var(--text);color:var(--void);display:inline-block}
.darkux-tag{font-family:var(--font-mono);font-size:.75rem;padding:.2rem .6rem;border-radius:50px;background:rgba(255,42,95,.1);color:var(--pink);border:1px solid var(--pink);display:inline-block}
.grid{display:grid;gap:1.5rem}
.grid-col-2{grid-template-columns:repeat(auto-fit,minmax(300px,1fr))}
.grid-col-3{grid-template-columns:repeat(auto-fit,minmax(240px,1fr))}
@media(max-width:980px){
  .styles,.why,.detalle__features{grid-template-columns:repeat(2,1fr)}
  .steps{grid-template-columns:repeat(2,1fr)}
  .step:nth-child(2)::after{display:none}
  .stories{grid-template-columns:1fr}
  .masonry-gallery{columns:2 240px}
  .proceso__grid{grid-template-columns:1fr}
  .experience{min-height:auto}
  .experience__video{position:relative;top:auto;max-width:100%}
  .experience__content{padding:2rem 1.4rem 4rem}
}
@media(max-width:900px){.nav__links{display:none}}
@media(max-width:768px){.hero{height:auto;padding:180px 25px 80px}.hero__content{padding-top:250px}}
@media(max-width:560px){
  .styles{grid-template-columns:repeat(2,1fr)}
  .steps,.why,.idea__list,.detalle__features,.proceso__grid{grid-template-columns:1fr}
  .step::after{display:none!important}
  .stories{grid-template-columns:1fr}
  .masonry-gallery{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;gap:1.2rem;padding:1rem 1.4rem 3rem;width:calc(100% + 2.8rem);margin-left:-1.4rem;columns:auto;scrollbar-width:none}
  .masonry-gallery::-webkit-scrollbar{display:none}
  .mg__item{flex:0 0 75vw;scroll-snap-align:center;margin-bottom:0}
  .sea{grid-template-columns:repeat(6,1fr)}
  .mobile-only{display:inline-block}
  .modal{padding:1.5rem}
}
.mobile-only{display:none}
@media(prefers-reduced-motion:reduce){
  *,*::before,*::after{animation-duration:.001ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}
  .reveal{opacity:1;transform:none}
}
```

## js/main.js
```js
(() => {
  "use strict";
  const $ = (s,c=document)=>c.querySelector(s);
  const $$ = (s,c=document)=>[...c.querySelectorAll(s)];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const spot=$(".spotlight");
  if(spot&&!reduceMotion)window.addEventListener("pointermove",e=>{spot.style.setProperty("--mx",e.clientX+"px");spot.style.setProperty("--my",e.clientY+"px")},{passive:true});

  const io=new IntersectionObserver(entries=>{entries.forEach(en=>{if(en.isIntersecting){en.target.classList.add("in");io.unobserve(en.target)}})},{threshold:0.12});
  $$(".reveal").forEach(el=>io.observe(el));

  const sea=$("#sea");
  if(sea){const TOTAL=36,STAR=22;for(let i=0;i<TOTAL;i++){const d=document.createElement("span");d.className="same"+(i===STAR?" same--star":"");sea.appendChild(d)}}

  const compare=$("#compare");
  if(compare){
    const clip=$("#compareClip"),handle=$("#compareHandle");
    let drag=false;
    const setPos=pct=>{pct=Math.max(0,Math.min(100,pct));clip.style.width=pct+"%";handle.style.left=pct+"%";handle.setAttribute("aria-valuenow",Math.round(pct))};
    const fromEv=e=>{const r=compare.getBoundingClientRect();setPos(((e.touches?e.touches[0].clientX:e.clientX)-r.left)/r.width*100)};
    compare.addEventListener("pointerdown",e=>{drag=true;fromEv(e)});
    window.addEventListener("pointermove",e=>{if(drag)fromEv(e)},{passive:true});
    window.addEventListener("pointerup",()=>{drag=false});
    handle.addEventListener("keydown",e=>{const c=+handle.getAttribute("aria-valuenow");if(e.key==="ArrowLeft")setPos(c-4);if(e.key==="ArrowRight")setPos(c+4)});
    setPos(50);
  }

  if(!reduceMotion){
    const items=$$(".mg__item");let ticking=false;
    window.addEventListener("scroll",()=>{if(ticking)return;ticking=true;requestAnimationFrame(()=>{const vh=window.innerHeight;items.forEach(it=>{const r=it.getBoundingClientRect();if(r.bottom<0||r.top>vh)return;const speed=parseFloat(it.dataset.speed||"1");it.style.transform=`translateY(${(r.top-vh/2)*(speed-1)*.12}px)`});ticking=false})},{passive:true});
  }

  const modalOverlay=$(".modal-overlay");
  if(modalOverlay){
    $$("[data-modal]").forEach(t=>t.addEventListener("click",e=>{e.preventDefault();modalOverlay.classList.add("is-open")}));
    $(".modal__close")?.addEventListener("click",()=>modalOverlay.classList.remove("is-open"));
    modalOverlay.addEventListener("click",e=>{if(e.target===modalOverlay)modalOverlay.classList.remove("is-open")});
    document.addEventListener("keydown",e=>{if(e.key==="Escape")modalOverlay.classList.remove("is-open")});
  }

  const timerEl=$(".scarcity__timer");
  if(timerEl){
    let secs=parseInt(timerEl.dataset.seconds||"17999");
    const tick=()=>{if(secs<=0)return;secs--;const h=Math.floor(secs/3600),m=Math.floor(secs%3600/60),s=secs%60;timerEl.textContent=`${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`};
    setInterval(tick,1000);tick();
  }

  const contactForm=$(".contacto__form");
  if(contactForm)contactForm.addEventListener("submit",e=>{e.preventDefault();contactForm.innerHTML='<p style="text-align:center;padding:3rem;color:var(--neon);font-family:var(--font-display);font-size:1.3rem">✔ ¡Mensaje enviado! Te contactamos pronto.</p>'});
})();
```
