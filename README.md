# JR Rodríguez — Web personal · Ponencias y acompañamiento

Landing single-page para **JR Rodríguez** dedicada a **ponencias sobre adicción, depresión y reconstrucción personal** + **acompañamiento individual**. La web de formaciones profesionales de obra es un proyecto separado.

Construida con **Astro 5 + Tailwind 4**.

---

## Arrancar en local

```powershell
npm install
npm run dev
```

Servidor en `http://localhost:4321`.

Build de producción:

```powershell
npm run build
npm run preview
```

---

## Estructura AIDA

| Sección | Componente | Función AIDA |
|---|---|---|
| Hero | [Hero.astro](src/components/Hero.astro) | **Atención** — frase sello "No vengo a contaros cómo caí…" |
| Mi historia | [About.astro](src/components/About.astro) | **Interés** — historia condensada + línea de tiempo (2 años · 2014 · 2016 · 2019 · hoy) |
| El relato | [Relato.astro](src/components/Relato.astro) | **Interés** — los 6 pasos del testimonio |
| Ponencias | [Talks.astro](src/components/Talks.astro) | **Deseo** — servicio principal B2B |
| Acompañamiento | [Acompanamiento.astro](src/components/Acompanamiento.astro) | **Deseo** — servicio individual |
| Los pilares | [Pilares.astro](src/components/Pilares.astro) | **Deseo** — método (trabajo · ocio · deporte · equilibrio social) |
| Testimonios | [Testimonials.astro](src/components/Testimonials.astro) | **Deseo** — prueba social |
| Reflexiones | [BlogTeaser.astro](src/components/BlogTeaser.astro) | **Interés** — contenido editorial |
| Contacto | [Contact.astro](src/components/Contact.astro) | **Acción** — formulario + email + WhatsApp + recurso 024 |

## Sistema de diseño

| Token | Valor | Uso |
|---|---|---|
| `--color-ember` | `#C56B4F` | Brasa / terracota — herida cerrada, lo que aún arde |
| `--color-ember-deep` | `#9C4C36` | Hover de acento |
| `--color-ink` | `#161616` | Fondo profundo, escritural |
| `--color-deep` | `#14253F` | Azul noche — calma |
| `--color-bone` | `#F2EDE4` | Hueso/papel — luz cálida |

Tipografías:
- **Inter** (UI, texto corrido)
- **Archivo Black** (display industrial — titulares grandes)
- **Source Serif 4** (humanista — citas, italics, textos reflexivos)

## Los 6 pasos del relato

Estructura reutilizable para cualquier ponencia:

1. **Quién era** — antes de todo lo demás
2. **Cómo caí** — el alivio que no era alivio
3. **El infierno** — lo que nadie ve
4. **El clic** — empezar a empezar
5. **La reconstrucción** — disciplina, fe, hábitos, valores
6. **El propósito** — por qué estoy aquí hoy

## Los 4 pilares

1. **Trabajo** — ocupación con sentido
2. **Tiempo libre y ocio** — lo que te alimenta
3. **Deporte** — cuerpo en movimiento
4. **Equilibrio social** — soledad y compañía, en su dosis

## SEO incluido

- Title + description optimizados con keywords B2B + B2C de testimonio.
- Open Graph + Twitter Cards.
- Schema.org JSON-LD: **Person**, **WebSite**, **ProfessionalService** (con `serviceType: ["Ponencias", "Charlas testimonio", "Acompañamiento personal"]`).
- Sitemap automático, `robots.txt`, canonical, `lang="es-ES"`.
- HTML comprimido + CSS inlined en build.

Keywords objetivo:
- ponente adicciones
- charla salud mental empresas
- conferenciante superación
- testimonio recuperación adicción
- acompañamiento personal adicciones
- ponencia depresión

## Accesibilidad

- Skip-link al contenido.
- `prefers-reduced-motion` respetado.
- Focus visible con outline brasa.
- Aria-labels en botones de icono y navegación móvil.
- Recurso de ayuda urgente (024 / 112) visible junto al formulario.
- Honeypot anti-spam.

## Pendientes para fase 2

- [ ] Endpoint del formulario en `Contact.astro` (`FORMSPREE_ENDPOINT`).
- [ ] Email y WhatsApp reales (`Contact.astro`).
- [ ] Enlaces sociales reales (`Footer.astro`).
- [ ] Foto profesional de JR para complementar el hero.
- [ ] Imagen `og-image.jpg` (1200×630) en `public/`.
- [ ] Testimonios reales (sustituir placeholders editoriales).
- [ ] Sub-páginas: `/sobre-mi`, `/ponencias` (ficha extendida + dossier PDF), `/acompanamiento`, `/blog/[slug]`.
- [ ] CMS o content collections para blog.
- [ ] Páginas legales: aviso legal, privacidad, cookies.

## Decisiones de copy (importante)

- **Tono**: primera persona, sin marketing, sin moralina. "Mándaselo así, sin darle muchas vueltas. Natural, limpio y desde la verdad."
- **Estructura del relato**: empieza siempre por **quién eras**, no por **lo que consumías**. La transformación engancha — la caída no.
- **Acompañamiento**: deja claro que **no sustituye** terapia psicológica ni tratamiento médico. Disclaimer visible en la propia sección.
- **Recurso de crisis**: el bloque de contacto incluye el 024 y el 112 como referencia de ayuda inmediata.
