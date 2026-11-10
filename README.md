# Portafolio · Kai Morin

Portafolio personal hecho con React + Vite. Diseño minimalista con modo claro y modo noche
(botón en el header; respeta la preferencia del sistema y recuerda la elección del visitante).

## Desarrollo

```bash
npm install
npm run dev      # servidor local
npm run build    # genera /dist
npm run lint
```

## Qué editar

- **Lenguajes, aptitudes y experiencia:** listas `skills`, `aptitudes` y `experiencia` en `src/core/Portafolio.jsx`.
- **Foto de perfil:** copia la imagen a `public/` y escribe su ruta en `src/core/Photo.jsx`.
- **Formulario de contacto:** reemplaza `tu-form-id` en `src/core/ContactForm.jsx` por tu ID de [Formspree](https://formspree.io).

## Despliegue

El workflow `.github/workflows/deploy.yml` compila y publica en GitHub Pages en cada push a `main`.
En el repositorio: **Settings → Pages → Source: GitHub Actions**.

La versión anterior en HTML plano se conserva en `docs/legacy/`.
