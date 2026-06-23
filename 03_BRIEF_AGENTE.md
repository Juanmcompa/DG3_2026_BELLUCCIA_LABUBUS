# BRIEF AGENTE · TP2 · DG3 FADU 2026

## INSTRUCCION_AGENTE
Sos un desarrollador web y copywriter experto en diseño persuasivo. Tu tarea es generar un sitio web completo para el proyecto del alumno descripto en ##DATOS_ALUMNO.

ARCHIVOS A GENERAR (uno por uno, completos):
1. `index.html` — homepage con todas las secciones de ##SECCIONES_HOME
2. `detalle.html` — página de detalle del servicio indicado en ##SERVICIO_DETALLE
3. `contacto.html` — formulario de contacto (página independiente)
4. `biblioteca.html` — UI kit con todos los componentes usados
5. `css/styles.css` — exactamente el CSS de 01_SISTEMA.md adaptando los tokens de color a ##PALETA
6. `js/main.js` — exactamente el JS de 01_SISTEMA.md sin modificaciones

REGLAS:
- Estructura HTML: usar patrones de 02_PATRONES.md exactos, sin inventar clases
- Clases CSS: solo las definidas en 01_SISTEMA.md
- Imágenes: paths siempre `assets/[nombre]` — usar los nombres de ##ASSETS
- Copias: escribir en el tono y voz definidos en ##VOZ, en español rioplatense
- Dark patterns requeridos: SCARCITY + CONFIRM-SHAMING (obligatorios), PRE_TICKED (opcional)
- El modal de contacto debe estar incluido en index.html y detalle.html, activado con data-modal
- No usar frameworks, CDNs externos (solo Google Fonts del HEAD), ni bibliotecas JS

---

## DATOS_ALUMNO

```yaml
alumno: [NOMBRE Y APELLIDO]
tema_asignado: [A / B / C / D]
nombre_empresa: [NOMBRE COMERCIAL DE LA EMPRESA]
tagline: [FRASE CORTA DE VENTA — máx 10 palabras]
descripcion_negocio: >
  [2-3 oraciones describiendo qué hace la empresa, para quién y por qué es especial]
ciudad: [Ciudad, País]
```

---

## PALETA
```yaml
# Reemplazar los tokens en css/styles.css :root
neon: "[#HEX — color de acento principal luminoso]"
pink: "[#HEX — color de acento secundario / danger]"
violet: "[#HEX — color de acento terciario / purple]"
void: "[#HEX — fondo más oscuro — default: #0a0612]"
panel: "[#HEX — fondo de cards — default: #170e29]"
# Si dejás vacío, se usan los valores default del design system (cyberpunk morado/verde)
```

---

## FIGURA_HERO
```yaml
tipo: "[css-toy / imagen / ninguna]"
descripcion: >
  [Si css-toy: describir la figura que quieren en CSS puro (forma, colores, proporciones).
   Si imagen: assets/[nombre_archivo] — será el url() del hero__bg.
   Si ninguna: el hero__toy div queda vacío, solo importa el texto.]
```

---

## SECCIONES_HOME
```yaml
# Marcar con true las secciones que se incluyen. Las marcadas false se omiten.
nav: true
hero: true
experiencia: true        # Requiere video en assets/ o imagen grande
marquee: true
problema: true
antes_despues: [true/false]   # Requiere 2 imágenes comparativas
categorias: true
proceso: true
propuesta_lista: true
por_que_elegirnos: true
galeria: true
testimonios: true
escasez: true            # DARK PATTERN — cupos + timer
faq: true
cta_final_shame: true    # DARK PATTERN — confirm-shaming
footer: true
```

---

## CONTENIDO

### hero
```yaml
eyebrow: "[PIEZAS DE COLECCIÓN / SIMULADORES DE ALTO RENDIMIENTO / etc.]"
titulo_l1: "[Primera línea del h1]"
titulo_palabra_clave: "[Palabra destacada con gradiente]"
subtitulo: "[2-3 oraciones de propuesta de valor]"
cta_primario: "[Texto botón principal]"
cta_secundario: "[Texto botón secundario]"
```

### experiencia
```yaml
eyebrow: "[Etiqueta de la sección]"
titulo: "[Título de la sección experiencia]"
parrafo_1: "[Primer párrafo — proceso o filosofía]"
parrafo_2: "[Segundo párrafo — resultado o diferencial]"
video_o_imagen: "assets/[archivo]"
```

### marquee_textos:
  - "[Frase 1 — propuesta de valor]"
  - "[Frase 2]"
  - "[Frase 3]"
  - "[Frase 4]"

### problema
```yaml
titulo: "[Todos tienen el mismo X / El problema que resolvemos]"
texto: "[Descripción del problema masivo que enfrenta el público objetivo. Mencionar la solución sin revelarla completamente.]"
```

### antes_despues
```yaml
imagen_antes: "assets/[nombre]"
imagen_despues: "assets/[nombre]"
chips:
  - "[Variante/categoría 1]"
  - "[Variante 2]"
  - "[Variante 3]"
  - "[Variante 4]"
  - "[Variante 5]"
```

### categorias
```yaml
titulo: "[Título de la sección de categorías/servicios]"
items:
  - {emoji: "[emoji]", label: "[Nombre]"}
  - {emoji: "[emoji]", label: "[Nombre]"}
  - {emoji: "[emoji]", label: "[Nombre]"}
  - {emoji: "[emoji]", label: "[Nombre]"}
  - {emoji: "[emoji]", label: "[Nombre]"}
  - {emoji: "[emoji]", label: "[Nombre]"}
```

### proceso
```yaml
titulo: "[Cómo funciona en X pasos]"
pasos:
  - {num: "01", titulo: "[Paso 1]", texto: "[Descripción]"}
  - {num: "02", titulo: "[Paso 2]", texto: "[Descripción]"}
  - {num: "03", titulo: "[Paso 3]", texto: "[Descripción]"}
  - {num: "04", titulo: "[Paso 4]", texto: "[Descripción]"}
```

### propuesta_lista
```yaml
eyebrow: "[Etiqueta]"
titulo: "[¿Tenés una necesidad específica?]"
lead: "[Podemos resolver cualquier X.]"
items:
  - "[Item 1]"
  - "[Item 2]"
  - "[Item 3]"
  - "[Item 4]"
  - "[Item 5]"
  - "[Item 6]"
cierre: "[Frase de cierre con énfasis]"
```

### por_que_elegirnos
```yaml
titulo: "[Cada detalle cuenta / Lo que nos diferencia]"
cards:
  - {icon: "[emoji]", titulo: "[Diferencial 1]", texto: "[Descripción]"}
  - {icon: "[emoji]", titulo: "[Diferencial 2]", texto: "[Descripción]"}
  - {icon: "[emoji]", titulo: "[Diferencial 3]", texto: "[Descripción]"}
  - {icon: "[emoji]", titulo: "[Diferencial 4]", texto: "[Descripción]"}
```

### galeria
```yaml
titulo: "[Título de la galería]"
imagenes:
  - {src: "assets/image1.png", alt: "[descripción]", speed: 0.9}
  - {src: "assets/image2.png", alt: "[descripción]", speed: 1.1}
  - {src: "assets/image3.png", alt: "[descripción]", speed: 0.85}
  - {src: "assets/image4.png", alt: "[descripción]", speed: 1.12}
  - {src: "assets/image5.png", alt: "[descripción]", speed: 0.92}
  - {src: "assets/image6.png", alt: "[descripción]", speed: 1.06}
```

### testimonios
```yaml
- {texto: "[Testimonio 1 — máx 2 oraciones, específico y emotivo]", autor: "[Nombre, Ciudad]"}
- {texto: "[Testimonio 2]", autor: "[Nombre, Ciudad]"}
- {texto: "[Testimonio 3]", autor: "[Nombre, Ciudad]"}
```

### escasez
```yaml
cupos_disponibles: [N]
timer_segundos: 17999
titulo: "[No hacemos X para todos. Hacemos X bien.]"
texto: "[Descripción de la limitación real de capacidad y por qué existe.]"
cta: "[Reservar mi lugar / Consultar disponibilidad]"
```

### faq
```yaml
- {q: "[Pregunta 1]", a: "[Respuesta 1]"}
- {q: "[Pregunta 2]", a: "[Respuesta 2]"}
- {q: "[Pregunta 3]", a: "[Respuesta 3]"}
- {q: "[Pregunta 4]", a: "[Respuesta 4]"}
- {q: "[Pregunta 5]", a: "[Respuesta 5]"}
- {q: "[Pregunta 6]", a: "[Respuesta 6]"}
```

### cta_final
```yaml
titulo: "[Frase final urgente e inspiradora — máx 12 palabras]"
subtitulo: "[2 oraciones que refuercen la propuesta]"
cta_primario: "[Texto botón principal]"
cta_shame: "No, prefiero [consecuencia negativa de no contratar — ej: 'seguir igual que siempre']"
```

---

## SERVICIO_DETALLE
```yaml
nombre: "[Nombre del servicio principal a detallar]"
tag: "[CATEGORIA EN MAYUSCULAS]"
titulo_h1_l1: "[Primera parte del título grande]"
titulo_h1_l2: "[Segunda parte]"
descripcion: "[2-3 oraciones describiendo qué es, para quién y qué resuelve]"
cta_contratar: "[Texto del botón de conversión]"
features:
  - {icon: "[emoji]", titulo: "[Feature 1]", texto: "[Descripción]"}
  - {icon: "[emoji]", titulo: "[Feature 2]", texto: "[Descripción]"}
  - {icon: "[emoji]", titulo: "[Feature 3]", texto: "[Descripción]"}
proceso:
  - {num: "01", titulo: "[Etapa 1]", texto: "[Descripción del proceso interno]"}
  - {num: "02", titulo: "[Etapa 2]", texto: "[Descripción]"}
  - {num: "03", titulo: "[Etapa 3]", texto: "[Descripción]"}
  - {num: "04", titulo: "[Etapa 4]", texto: "[Descripción]"}
paquete_nombre: "[Nombre del paquete]"
paquete_precio: "$[MONTO]"
paquete_periodo: "[por proyecto / por mes / por unidad]"
paquete_incluye:
  - "[Item incluido 1]"
  - "[Item incluido 2]"
  - "[Item incluido 3]"
  - "[Item incluido 4]"
  - "[Item incluido 5]"
cta_shame: "No, prefiero [consecuencia negativa]"
faq_servicio:
  - {q: "[Pregunta específica del servicio]", a: "[Respuesta]"}
  - {q: "[Pregunta 2]", a: "[Respuesta]"}
  - {q: "[Pregunta 3]", a: "[Respuesta]"}
```

---

## CONTACTO_FORM
```yaml
titulo: "[Empezá tu proyecto / Reservá tu lugar]"
opciones_servicio:
  - "[Servicio 1]"
  - "[Servicio 2]"
  - "[Servicio 3]"
placeholder_mensaje: "[Orientación: ej. 'Contanos qué tenés en mente, cuándo lo necesitás y qué presupuesto manejan']"
```

---

## VOZ
```yaml
persona_gramatical: "segunda persona singular (vos)"
tono: "[profesional-exclusivo / técnico-apasionado / artesanal-íntimo / aventurero-exigente]"
evitar: "[adjetivos genéricos sin sustancia / superlativo vacío / texto corporativo frío]"
```

---

## ASSETS
```yaml
# Archivos que el alumno va a colocar en la carpeta assets/
# El agente usa estos nombres exactos en los src=""
imagenes:
  - assets/image1.png
  - assets/image2.png
  - assets/image3.png
  - assets/image4.png
  - assets/image5.png
  - assets/image6.png
video: assets/[nombre_video.mp4]
imagen_hero_fondo: assets/[nombre_imagen_hero.png]
logo: "[none / assets/logo.svg]"
```

---

## CONTEXTO_TEMA (copiar el texto del tema asignado del TP2)
```
[Pegar aquí el bloque completo del tema A/B/C/D del archivo TP2 FADU 2026 WEB.md]
```
