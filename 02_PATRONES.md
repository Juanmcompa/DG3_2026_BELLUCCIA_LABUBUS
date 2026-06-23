# PATRONES HTML · DG3 FADU 2026

ROL_AGENTE: Usás estas plantillas de sección para armar index.html, detalle.html, contacto.html y biblioteca.html. Reemplazás todo [TEXTO_EN_MAYUSCULAS] con el contenido del proyecto del alumno. Clases y estructura: exactas. No agregás clases que no estén en 01_SISTEMA.md.

## BODY_WRAPPER (inicio de body en todos los .html)
```html
<body>
  <div class="spotlight" aria-hidden="true"></div>
  <div class="grain" aria-hidden="true"></div>
  <!-- SECCIONES -->
  <script src="js/main.js"></script>
</body>
```

---
# index.html — HOMEPAGE

## NAV
```html
<header class="nav" id="nav">
  <a href="#hero" class="nav__brand">
    [LOGO_SVG_O_ICONO_OPCIONAL]
    [NOMBRE_MARCA]<span class="nav__brand-accent">[ACENTO_NOMBRE]</span>
  </a>
  <nav class="nav__links">
    <a href="#servicios">[Link 1]</a>
    <a href="#galeria">[Link 2]</a>
    <a href="#proceso">[Link 3]</a>
    <a href="#faq">FAQ</a>
  </nav>
  <a href="contacto.html" class="btn btn--ghost nav__cta" data-modal>[CTA_NAV]</a>
</header>
```

## HERO (pantalla completa con figura CSS + contenido)
```html
<section class="hero" id="hero">
  <div class="hero__bg"></div>
  <div class="hero__grid"></div>
  <div class="hero__halo"></div>
  <div class="hero__toy">
    <!-- FIGURA CSS DEL PRODUCTO: ver .toy en 01_SISTEMA.md o reemplazar con <img> -->
    <div class="toy">
      <div class="toy__ear toy__ear--l"></div>
      <div class="toy__ear toy__ear--r"></div>
      <div class="toy__head">
        <div class="toy__eye toy__eye--l"></div>
        <div class="toy__eye toy__eye--r"></div>
        <div class="toy__grin"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
      </div>
      <div class="toy__jersey">[NUMERO_O_ICONO]</div>
    </div>
  </div>
  <div class="hero__content">
    <p class="hero__eyebrow">[EYEBROW — descripción breve en mayúsculas]</p>
    <h1 class="hero__title">[TITULO_LINEA_1]<br>ser <span>[PALABRA_CLAVE].</span></h1>
    <p class="hero__sub">[Subtítulo: 2-3 oraciones que explican el valor del producto.]</p>
    <div class="hero__actions">
      <a href="detalle.html" class="btn btn--primary">[CTA_PRIMARIO]</a>
      <a href="#galeria" class="btn btn--ghost">[CTA_SECUNDARIO]</a>
    </div>
  </div>
</section>
```

## EXPERIENCIA (video sticky + texto)
```html
<section class="section experience reveal" id="experiencia">
  <div class="experience__video">
    <video autoplay muted loop playsinline preload="auto">
      <source src="assets/[VIDEO.mp4]" type="video/mp4">
    </video>
  </div>
  <div class="experience__content">
    <p class="eyebrow">[Eyebrow sección]</p>
    <h2 class="section__title">[Título de experiencia.]</h2>
    <p class="experience__text">[Párrafo 1 — proceso o filosofía del producto.]</p>
    <p class="experience__text">[Párrafo 2 — resultado o promesa.]</p>
    <a href="detalle.html" class="btn btn--primary">[CTA]</a>
  </div>
</section>
```

## MARQUEE (cinta de texto infinita)
```html
<section class="marquee reveal" aria-label="[Propuesta de valor]">
  <div class="marquee__track">
    <span class="marquee__item">[Frase 1]</span><span class="marquee__dot">✦</span>
    <span class="marquee__item">[Frase 2]</span><span class="marquee__dot">✦</span>
    <span class="marquee__item">[Frase 3]</span><span class="marquee__dot">✦</span>
    <span class="marquee__item">[Frase 4]</span><span class="marquee__dot">✦</span>
  </div>
  <div class="marquee__track" aria-hidden="true">
    <span class="marquee__item">[Frase 1]</span><span class="marquee__dot">✦</span>
    <span class="marquee__item">[Frase 2]</span><span class="marquee__dot">✦</span>
    <span class="marquee__item">[Frase 3]</span><span class="marquee__dot">✦</span>
    <span class="marquee__item">[Frase 4]</span><span class="marquee__dot">✦</span>
  </div>
</section>
```

## PROBLEMA (mar de iguales — problema que resuelve el producto)
```html
<section class="section section--center problem reveal" id="problema">
  <div class="section__head reveal">
    <p class="eyebrow">El problema</p>
    <h2 class="section__title">[Todos tienen el mismo X.]</h2>
  </div>
  <div class="sea reveal" aria-hidden="true" id="sea"></div>
  <p class="problem__text reveal">
    [Descripción del problema masivo. Podés tener una solución que 
    <strong>nadie más en el mundo</strong> tenga.]
  </p>
</section>
```

## ANTES / DESPUÉS (slider comparativo — omitir si no aplica)
```html
<section class="section section--center" id="antes-despues">
  <div class="section__head reveal">
    <p class="eyebrow">Antes / Después</p>
    <h2 class="section__title">[Mirá la transformación.]</h2>
  </div>
  <div class="compare reveal" id="compare">
    <img class="compare__img compare__img--after" src="assets/[IMAGEN_DESPUES]" alt="[Resultado]">
    <div class="compare__clip" id="compareClip">
      <img class="compare__img" src="assets/[IMAGEN_ANTES]" alt="[Estado inicial]">
    </div>
    <span class="compare__label compare__label--before">Antes</span>
    <span class="compare__label compare__label--after">Después</span>
    <div class="compare__handle" id="compareHandle" role="slider" aria-label="Comparar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" tabindex="0">
      <span class="compare__grip">‹ ›</span>
    </div>
  </div>
  <ul class="chips reveal">
    <li>[Variante 1]</li><li>[Variante 2]</li><li>[Variante 3]</li>
    <li>[Variante 4]</li><li>[Variante 5]</li><li>[Variante 6]</li>
  </ul>
</section>
```

## CATEGORÍAS / SERVICIOS (grilla de tarjetas)
```html
<section class="section" id="servicios">
  <div class="section__head reveal">
    <p class="eyebrow">[Eyebrow]</p>
    <h2 class="section__title">[Título de la sección]</h2>
  </div>
  <div class="styles reveal">
    <button class="style-card"><span class="style-card__emoji">[emoji]</span>[Categoría 1]</button>
    <button class="style-card"><span class="style-card__emoji">[emoji]</span>[Categoría 2]</button>
    <button class="style-card"><span class="style-card__emoji">[emoji]</span>[Categoría 3]</button>
    <button class="style-card"><span class="style-card__emoji">[emoji]</span>[Categoría 4]</button>
    <button class="style-card"><span class="style-card__emoji">[emoji]</span>[Categoría 5]</button>
    <button class="style-card"><span class="style-card__emoji">[emoji]</span>[Categoría 6]</button>
  </div>
</section>
```

## PROCESO (cómo funciona — 4 pasos)
```html
<section class="section section--center" id="proceso">
  <div class="section__head reveal">
    <p class="eyebrow">¿Cómo funciona?</p>
    <h2 class="section__title">[Simple. En X pasos.]</h2>
  </div>
  <ol class="steps reveal">
    <li class="step"><span class="step__num">01</span><h3>[Paso 1]</h3><p>[Descripción breve]</p></li>
    <li class="step"><span class="step__num">02</span><h3>[Paso 2]</h3><p>[Descripción breve]</p></li>
    <li class="step"><span class="step__num">03</span><h3>[Paso 3]</h3><p>[Descripción breve]</p></li>
    <li class="step"><span class="step__num">04</span><h3>[Paso 4]</h3><p>[Descripción breve]</p></li>
  </ol>
</section>
```

## PROPUESTA / IDEA (sección de lista destacada)
```html
<section class="section idea" id="propuesta">
  <div class="idea__inner reveal">
    <div class="idea__head">
      <p class="eyebrow">[Eyebrow]</p>
      <h2 class="section__title">[¿Tenés una necesidad específica?]</h2>
      <p class="idea__lead">[Podemos convertir cualquier idea en X.]</p>
    </div>
    <ul class="idea__list">
      <li>[Item 1]</li><li>[Item 2]</li>
      <li>[Item 3]</li><li>[Item 4]</li>
      <li>[Item 5]</li><li>[Item 6]</li>
    </ul>
    <p class="idea__close">Vos imaginás. <span>Nosotros lo hacemos realidad.</span></p>
  </div>
</section>
```

## POR QUÉ ELEGIRNOS (4 tarjetas de beneficios)
```html
<section class="section" id="porque">
  <div class="section__head reveal">
    <p class="eyebrow">¿Por qué elegirnos?</p>
    <h2 class="section__title">[Cada detalle cuenta.]</h2>
  </div>
  <div class="why reveal">
    <article class="why__card"><span class="why__icon">[emoji]</span><h3>[Beneficio 1]</h3><p>[Descripción.]</p></article>
    <article class="why__card"><span class="why__icon">[emoji]</span><h3>[Beneficio 2]</h3><p>[Descripción.]</p></article>
    <article class="why__card"><span class="why__icon">[emoji]</span><h3>[Beneficio 3]</h3><p>[Descripción.]</p></article>
    <article class="why__card"><span class="why__icon">[emoji]</span><h3>[Beneficio 4]</h3><p>[Descripción.]</p></article>
  </div>
</section>
```

## GALERÍA MASONRY (agregar data-speed entre 0.85 y 1.15)
```html
<section class="gallery" id="galeria">
  <div class="section__head reveal">
    <p class="eyebrow">Galería</p>
    <h2 class="section__title">[Título de galería.]</h2>
  </div>
  <div class="masonry-gallery reveal">
    <figure class="mg__item" data-speed="0.9"><img src="assets/image1.png" alt="[Alt]" loading="lazy"></figure>
    <figure class="mg__item" data-speed="1.1"><img src="assets/image2.png" alt="[Alt]" loading="lazy"></figure>
    <figure class="mg__item" data-speed="0.85"><img src="assets/image3.png" alt="[Alt]" loading="lazy"></figure>
    <figure class="mg__item" data-speed="1.12"><img src="assets/image4.png" alt="[Alt]" loading="lazy"></figure>
    <figure class="mg__item" data-speed="0.92"><img src="assets/image5.png" alt="[Alt]" loading="lazy"></figure>
    <figure class="mg__item" data-speed="1.06"><img src="assets/image6.png" alt="[Alt]" loading="lazy"></figure>
  </div>
</section>
```

## TESTIMONIOS (3 citas con nombre)
```html
<section class="section" id="testimonios">
  <div class="section__head reveal">
    <p class="eyebrow">Testimonios</p>
    <h2 class="section__title">Historias reales.</h2>
  </div>
  <div class="stories reveal">
    <blockquote class="story"><p>"[Testimonio 1 — resultado concreto y emotivo.]"</p><cite>— [Nombre], [Ciudad]</cite></blockquote>
    <blockquote class="story"><p>"[Testimonio 2.]"</p><cite>— [Nombre], [Ciudad]</cite></blockquote>
    <blockquote class="story"><p>"[Testimonio 3.]"</p><cite>— [Nombre], [Ciudad]</cite></blockquote>
  </div>
</section>
```

## ESCASEZ / DARK PATTERN SCARCITY (cupos limitados + timer)
```html
<section class="section" id="exclusividad">
  <div class="exclusive reveal">
    <div class="exclusive__glow" aria-hidden="true"></div>
    <p class="eyebrow">Exclusividad real</p>
    <h2 class="section__title">[No trabajamos con todos. Trabajamos bien.]</h2>
    <aside class="scarcity">
      <p><strong>ALERTA:</strong> solo quedan <span class="ticker">[N]</span> cupos disponibles este mes.</p>
      <div class="scarcity__timer" data-seconds="17999">04:59:59</div>
    </aside>
    <p class="exclusive__text">[Descripción de la exclusividad y por qué hay cupos limitados.]</p>
    <a href="contacto.html" class="btn btn--primary btn--lg" data-modal>[CTA principal]</a>
  </div>
</section>
```

## FAQ (acordeón nativo con details/summary)
```html
<section class="section" id="faq">
  <div class="section__head reveal">
    <p class="eyebrow">Preguntas frecuentes</p>
    <h2 class="section__title">Antes de empezar</h2>
  </div>
  <div class="faq reveal">
    <details class="faq__item"><summary>[Pregunta 1]</summary><div class="faq__body"><p>[Respuesta 1.]</p></div></details>
    <details class="faq__item"><summary>[Pregunta 2]</summary><div class="faq__body"><p>[Respuesta 2.]</p></div></details>
    <details class="faq__item"><summary>[Pregunta 3]</summary><div class="faq__body"><p>[Respuesta 3.]</p></div></details>
    <details class="faq__item"><summary>[Pregunta 4]</summary><div class="faq__body"><p>[Respuesta 4.]</p></div></details>
    <details class="faq__item"><summary>[Pregunta 5]</summary><div class="faq__body"><p>[Respuesta 5.]</p></div></details>
  </div>
</section>
```

## CTA FINAL + DARK PATTERN CONFIRM-SHAMING
```html
<section class="final" id="contactar">
  <div class="final__glow" aria-hidden="true"></div>
  <div class="final__inner reveal">
    <h2 class="final__title">[Título final urgente e inspirador.]</h2>
    <p class="final__sub">[Subtítulo que refuerza la propuesta de valor.]</p>
    <div class="final__actions">
      <a href="contacto.html" class="btn btn--primary btn--xl" data-modal>[CTA PRINCIPAL]</a>
      <button class="btn btn--shame">No, prefiero [versión negativa del beneficio]</button>
    </div>
  </div>
</section>
```

## FOOTER
```html
<footer class="footer">
  <div class="footer__inner">
    <p class="footer__brand">[NOMBRE]<span>[ACENTO]</span></p>
    <p class="footer__copy">[Tagline corto] · [Ciudad/País] · <a href="contacto.html">[Email o contacto]</a></p>
  </div>
</footer>
```

---
# detalle.html — PÁGINA DE DETALLE DE SERVICIO

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <!-- HEAD del 01_SISTEMA.md -->
  <title>[Nombre del Servicio] — [Marca]</title>
</head>
<body>
  <div class="spotlight" aria-hidden="true"></div>
  <div class="grain" aria-hidden="true"></div>

  <!-- NAV igual a index.html -->

  <!-- HERO DEL DETALLE -->
  <div class="detalle__hero reveal">
    <span class="detalle__tag">[CATEGORIA / TIPO DE SERVICIO]</span>
    <h1 class="detalle__title">[Nombre del<br>Servicio en Detalle]</h1>
    <p class="detalle__desc">[2-3 oraciones que describen qué es el servicio y para quién es.]</p>
    <div class="detalle__actions">
      <a href="#" class="btn btn--primary" data-modal>[Contratar / Reservar]</a>
      <a href="index.html#galeria" class="btn btn--ghost">Ver trabajos</a>
    </div>
  </div>

  <!-- FEATURES / INCLUYE -->
  <div class="detalle__features reveal">
    <div class="feature__card"><span class="feature__icon">[emoji]</span><h3>[Feature 1]</h3><p>[Descripción breve.]</p></div>
    <div class="feature__card"><span class="feature__icon">[emoji]</span><h3>[Feature 2]</h3><p>[Descripción breve.]</p></div>
    <div class="feature__card"><span class="feature__icon">[emoji]</span><h3>[Feature 3]</h3><p>[Descripción breve.]</p></div>
  </div>

  <!-- PROCESO DEL SERVICIO -->
  <section class="section">
    <div class="section__head reveal">
      <p class="eyebrow">El proceso</p>
      <h2 class="section__title">[Cómo lo hacemos.]</h2>
    </div>
    <div class="proceso__grid reveal">
      <div class="proceso__item"><span class="proceso__num">01</span><div><h3>[Etapa 1]</h3><p>[Descripción detallada de esta etapa.]</p></div></div>
      <div class="proceso__item"><span class="proceso__num">02</span><div><h3>[Etapa 2]</h3><p>[Descripción.]</p></div></div>
      <div class="proceso__item"><span class="proceso__num">03</span><div><h3>[Etapa 3]</h3><p>[Descripción.]</p></div></div>
      <div class="proceso__item"><span class="proceso__num">04</span><div><h3>[Etapa 4]</h3><p>[Descripción.]</p></div></div>
    </div>
  </section>

  <!-- PRECIO / PAQUETE -->
  <section class="section section--center">
    <div class="section__head reveal"><p class="eyebrow">Inversión</p><h2 class="section__title">[Lo que incluye.]</h2></div>
    <div class="precio__card reveal">
      <p class="eyebrow">[NOMBRE DEL PAQUETE]</p>
      <p class="precio__monto">$[MONTO]</p>
      <p class="precio__periodo">[por unidad / por mes / por proyecto]</p>
      <ul class="precio__lista">
        <li>[Incluye item 1]</li>
        <li>[Incluye item 2]</li>
        <li>[Incluye item 3]</li>
        <li>[Incluye item 4]</li>
        <li>[Incluye item 5]</li>
      </ul>
      <a href="#" class="btn btn--primary btn--block" data-modal>[Reservar este servicio]</a>
      <button class="btn btn--shame" style="margin-top:.8rem;display:block;width:100%">No, prefiero [versión negativa]</button>
    </div>
  </section>

  <!-- FAQ del servicio (misma estructura que index.html) -->

  <!-- FOOTER igual a index.html -->

  <!-- MODAL CONTACTO -->
  <!-- (ver patrón contacto.html abajo — puede usarse como modal) -->

  <script src="js/main.js"></script>
</body>
</html>
```

---
# contacto.html — FORMULARIO DE CONTACTO (también puede usarse como modal)

## COMO PÁGINA INDEPENDIENTE
```html
<!DOCTYPE html>
<html lang="es">
<head><!-- HEAD del 01_SISTEMA.md --><title>Contacto — [Marca]</title></head>
<body>
  <div class="spotlight" aria-hidden="true"></div>
  <div class="grain" aria-hidden="true"></div>
  <!-- NAV igual -->
  <section class="section contacto-section">
    <div class="section__head reveal">
      <p class="eyebrow">Contacto</p>
      <h2 class="section__title">[Empezá tu proyecto.]</h2>
    </div>
    <form class="contacto__form reveal" novalidate>
      <div class="form__field">
        <label class="form__label" for="nombre">Nombre completo</label>
        <input class="form__input" type="text" id="nombre" name="nombre" required placeholder="[Ej: María González]">
      </div>
      <div class="form__field">
        <label class="form__label" for="email">Email</label>
        <input class="form__input" type="email" id="email" name="email" required placeholder="tu@email.com">
      </div>
      <div class="form__field">
        <label class="form__label" for="servicio">Servicio de interés</label>
        <select class="form__select" id="servicio" name="servicio">
          <option value="">Seleccioná una opción</option>
          <option>[Servicio 1]</option>
          <option>[Servicio 2]</option>
          <option>[Servicio 3]</option>
        </select>
      </div>
      <div class="form__field">
        <label class="form__label" for="mensaje">Contanos tu proyecto</label>
        <textarea class="form__textarea" id="mensaje" name="mensaje" placeholder="[Placeholder orientador]"></textarea>
      </div>
      <button type="submit" class="btn btn--primary btn--block">[Enviar consulta]</button>
    </form>
  </section>
  <!-- FOOTER -->
  <script src="js/main.js"></script>
</body>
</html>
```

## COMO MODAL (insertar al final de index.html y detalle.html, antes del script)
```html
<div class="modal-overlay" role="dialog" aria-modal="true" aria-label="Formulario de contacto">
  <div class="modal">
    <button class="modal__close" aria-label="Cerrar">✕</button>
    <p class="eyebrow">Contacto</p>
    <h2 style="font-family:var(--font-display);font-weight:800;font-size:1.8rem;margin-bottom:1.5rem">[Empezá tu proyecto.]</h2>
    <form class="contacto__form" novalidate>
      <div class="form__field">
        <label class="form__label" for="m-nombre">Nombre</label>
        <input class="form__input" type="text" id="m-nombre" required placeholder="[Tu nombre]">
      </div>
      <div class="form__field">
        <label class="form__label" for="m-email">Email</label>
        <input class="form__input" type="email" id="m-email" required placeholder="tu@email.com">
      </div>
      <div class="form__field">
        <label class="form__label" for="m-mensaje">Mensaje</label>
        <textarea class="form__textarea" id="m-mensaje" style="min-height:100px" placeholder="[Contanos tu idea]"></textarea>
      </div>
      <button type="submit" class="btn btn--primary btn--block">[Enviar]</button>
    </form>
  </div>
</div>
```

## ACTIVAR MODAL: agregar data-modal a cualquier <a> o <button> CTA
```html
<a href="#" class="btn btn--primary" data-modal>Contactar</a>
```

---
# biblioteca.html — UI KIT / DESIGN SYSTEM

```html
<!DOCTYPE html>
<html lang="es">
<head><!-- HEAD del 01_SISTEMA.md --><title>Biblioteca UI — [Marca]</title></head>
<body>
  <div class="grain" aria-hidden="true"></div>
  <div style="max-width:var(--maxw);margin:0 auto;padding:0 1.4rem">

    <header class="uikit-header">
      <h1 style="font-family:var(--font-display);font-weight:800;font-size:3rem;text-transform:uppercase">[MARCA]</h1>
      <p style="font-family:var(--font-mono);color:var(--muted)">UI Kit & Design System · [Alumno/a] · DG3 FADU 2026</p>
    </header>

    <div class="uikit-section">
      <h4 class="uikit-section-title">Paleta de Colores</h4>
      <div class="grid grid-col-3">
        <div class="color-swatch" style="background:var(--void);color:var(--text);border:1px solid #333">--void [#HEX]</div>
        <div class="color-swatch" style="background:var(--panel);color:var(--text)">--panel [#HEX]</div>
        <div class="color-swatch" style="background:var(--neon)">--neon [#HEX]</div>
        <div class="color-swatch" style="background:var(--pink);color:#fff">--pink [#HEX]</div>
        <div class="color-swatch" style="background:var(--violet);color:#fff">--violet [#HEX]</div>
        <div class="color-swatch" style="background:var(--muted);color:var(--void)">--muted [#HEX]</div>
      </div>
    </div>

    <div class="uikit-section">
      <h4 class="uikit-section-title">Tipografía</h4>
      <p class="eyebrow">Eyebrow / Space Mono</p>
      <h1 style="font-family:var(--font-display);font-size:3.5rem;font-weight:800">[Título Display H1]</h1>
      <h2 style="font-family:var(--font-display);font-size:2.5rem;font-weight:800">[Título H2]</h2>
      <h3 style="font-family:var(--font-display);font-size:1.5rem;font-weight:700">[Título H3]</h3>
      <p style="max-width:600px;margin-top:.5rem">[Cuerpo Outfit Regular: texto de ejemplo con la tipografía del cuerpo en una densidad representativa del uso real en la página.]</p>
    </div>

    <div class="uikit-section">
      <h4 class="uikit-section-title">Botones</h4>
      <div style="display:flex;gap:1.5rem;align-items:center;flex-wrap:wrap">
        <a href="#" class="btn btn--primary">Primario</a>
        <a href="#" class="btn btn--primary btn--pulse">Primario Pulse</a>
        <a href="#" class="btn btn--ghost">Secundario Ghost</a>
        <button class="btn btn--shame">No, prefiero [versión negativa — confirm-shaming]</button>
      </div>
    </div>

    <div class="uikit-section">
      <h4 class="uikit-section-title">Tags / Etiquetas</h4>
      <div style="display:flex;gap:1rem;flex-wrap:wrap">
        <span class="bento__tag">PREMIUM</span>
        <span class="bento__tag">NUEVO</span>
        <span class="darkux-tag">Demo · Confirm-shaming</span>
        <span class="darkux-tag">Demo · Scarcity</span>
      </div>
    </div>

    <div class="uikit-section">
      <h4 class="uikit-section-title">Cards</h4>
      <div class="grid grid-col-3">
        <div class="bento__card">
          <span class="bento__tag">01</span>
          <h3 style="font-family:var(--font-display);font-weight:700;margin:.8rem 0 .4rem">[Nombre del servicio]</h3>
          <p style="color:var(--muted);font-size:.9rem">[Descripción corta del servicio o producto.]</p>
          <span class="bento__price">desde $[PRECIO]</span>
        </div>
        <div class="bento__card">
          <span class="bento__tag">02</span>
          <h3 style="font-family:var(--font-display);font-weight:700;margin:.8rem 0 .4rem">[Servicio 2]</h3>
          <p style="color:var(--muted);font-size:.9rem">[Descripción.]</p>
          <span class="bento__price">desde $[PRECIO]</span>
        </div>
      </div>
    </div>

    <div class="uikit-section">
      <h4 class="uikit-section-title">Formulario</h4>
      <div style="max-width:460px">
        <div class="form__field"><label class="form__label">Nombre</label><input class="form__input" type="text" placeholder="[Placeholder]"></div>
        <div class="form__field"><label class="form__label">Mensaje</label><textarea class="form__textarea" style="min-height:100px"></textarea></div>
      </div>
    </div>

    <div class="uikit-section">
      <h4 class="uikit-section-title">Dark UX Patterns implementados</h4>
      <div style="display:flex;flex-direction:column;gap:1rem">
        <aside class="scarcity">
          <p><strong>SCARCITY:</strong> Solo quedan <span class="ticker">3</span> cupos disponibles.</p>
          <div class="scarcity__timer" data-seconds="17999">04:59:59</div>
        </aside>
        <div style="padding:1rem;background:var(--panel);border-radius:var(--radius-sm);border:1px solid var(--line)">
          <p style="color:var(--muted);font-size:.9rem;margin-bottom:.8rem"><span class="darkux-tag">CONFIRM-SHAMING</span> El botón de rechazo está redactado para generar culpa:</p>
          <button class="btn btn--shame">No, prefiero [consecuencia negativa de no contratar]</button>
        </div>
      </div>
    </div>

  </div>
  <script src="js/main.js"></script>
</body>
</html>
```
