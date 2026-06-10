# Pudú — El ecosistema en movimiento

**Pudú** es una plataforma de *networking e inteligencia para eventos de innovación* del sur de Chile. Funciona sin base de datos (persistencia en `localStorage`) y está lista para desplegar en **Vercel**.

Evento: **MadeInnConce 2026** · 7, 8 y 9 de abril 2026 · Concepción, Biobío · 3 escenarios (Principal, Garage, Sala de Cámara).

## Vistas

1. **Mi Perfil** — registro del asistente con rol, qué ofrece y qué busca. Toggle **Premium** (pitch de 30s, LinkedIn y visibilidad en directorio con compatibilidad).
2. **Programación** — programa real completo (3 escenarios × 3 días) con filtros por día y escenario, chips de tipo (keynote/charla/panel/taller/show/pitch), detalle de cada sesión con speakers y "Me interesa".
3. **Matchmaking** — recomendación **contextual en vivo**: al ingresar al evento, el sistema avisa *quién está presente y ofrece lo que tú buscas*. Spotlight "Ahora en el evento", modal de ingreso y 6 perfiles del ecosistema biobiano. Con Premium: compatibilidad calculada, pitch, LinkedIn y "Agendar reunión".
4. **Stands** — 8 stands del evento; toca para **simular el escaneo del QR**, ver detalle, "guardar contacto", "descargar brochure" y contador de visitas.
5. **Panel Organizador** — métricas, actividad de stands, flujo por escenario, últimas conexiones y alertas.

## Stack

- **Next.js 14** (App Router) + **React 18**
- **Tailwind CSS 3** (colores Pudú como tokens custom en `tailwind.config.js`)
- **localStorage** para perfil, intereses, conexiones y visitas
- Sin dependencias externas más allá de Next.js y Tailwind

## Desarrollo local

Requiere Node.js 18.18+ (o 20+).

```bash
npm install
npm run dev
# abre http://localhost:3000  (redirige a /perfil)
```

## Deploy en Vercel (3 pasos)

1. **Sube el proyecto a un repositorio** de GitHub / GitLab / Bitbucket (este folder `pudu/` como raíz del repo).
2. En **vercel.com → New Project**, importa el repositorio. Vercel detecta **Next.js** automáticamente (no hay que configurar build ni variables de entorno).
3. Pulsa **Deploy**. En ~1 minuto tendrás la URL pública. Cada push a la rama principal vuelve a desplegar.

> Alternativa por CLI: `npm i -g vercel` y luego `vercel` dentro de la carpeta.

## Paleta oficial Pudú

| Token | Hex | Uso |
|---|---|---|
| `pudu-green` | `#1B5E3B` | Verde profundo — primario, logo, botones, headers |
| `pudu-moss` | `#2D6A4F` | Verde medio — secundario, hovers, acentos |
| `pudu-earth` | `#A0785A` | Tierra pudú — badges premium, acentos cálidos |
| `pudu-mist` | `#E8F5EE` | Verde claro — fondos de cards, superficies suaves |
| `pudu-night` | `#1A1A2E` | Noche sur — navbar, premium, contraste máximo |
| `pudu-sand` | `#F7F7F5` | Gris claro — fondo de página |

## Estructura

```
pudu/
├── app/
│   ├── layout.js              # navbar fija + provider de toasts
│   ├── page.js                # redirige a /perfil
│   ├── globals.css
│   ├── perfil/page.js
│   ├── programacion/page.js
│   ├── matchmaking/page.js
│   ├── stands/page.js
│   └── organizador/page.js
├── components/
│   ├── Navbar.js              # navbar fija + menú hamburguesa (móvil)
│   ├── Logo.js
│   ├── ProfileCard.js
│   ├── Toast.js               # ToastProvider + useToast()
│   └── StandModal.js
├── lib/
│   ├── data.js                # ecosistema (programa, perfiles, stands, métricas)
│   └── store.js               # helpers de localStorage
├── tailwind.config.js         # colores Pudú
├── next.config.js
└── package.json
```

---

Hecho como infraestructura del ecosistema de innovación del sur de Chile. 🌱
