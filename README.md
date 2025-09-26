# 🚀 PRUEBA TÉCNICA FRONT-END: Papalote Museo del Niño 🦋

<img width="743" height="808" alt="imagen" src="https://github.com/user-attachments/assets/46da33bc-46cb-4ef5-86a8-7849d2953a78" />


> **Desarrollado con las últimas tecnologías para garantizar calidad, rendimiento y una experiencia de usuario excepcional.**

## 🛠️ Tecnologías Utilizadas

| Tecnología | Descripción |
|------------|-------------|
| ⚛️ React | Biblioteca principal para la construcción de la interfaz de usuario. |
| 🎯 Next.js | Framework de React para producción, con renderizado híbrido estático y servidor. |
| 🔷 TypeScript | Superset de JavaScript que aporta tipado estático para mayor robustez. |
| 💅 CSS | Estilos personalizados para una interfaz atractiva y fiel al diseño. |
| 🚀 Vercel | Plataforma de despliegue continuo para aplicaciones web. |

## ✨ Visión General del Proyecto

Este repositorio contiene la solución completa a la prueba técnica propuesta, cuyo objetivo fue evaluar la capacidad técnica, atención al detalle y creatividad en el desarrollo Front-End.

La implementación se centra en replicar un diseño de Landing Page con funcionalidades avanzadas de navegación y gestión dinámica de contenido (Carrusel), utilizando las mejores prácticas de Next.js y TypeScript.

## 🎯 Funcionalidades Clave

| Funcionalidad | Estado | Descripción |
|---------------|--------|-------------|
| 🌐 Despliegue Continuo | ✅ Implementado en Vercel | Despliegue automático en cada push al repositorio. |
| 🧭 Navegación Fluida | ✅ Implementada | Scroll suave entre secciones usando `useRef` y `scrollIntoView`. |
| 📘 Tipado Estricto | ✅ TypeScript | Tipado de refs, props e interfaces para mayor confiabilidad. |
| 🖼️ Carrusel Dinámico | ✅ Auto-play y control de `object-fit` | Carrusel que se adapta a diferentes proporciones de imagen. |

## 💻 Demostración de Habilidades Técnicas

### ⚛️ React, Next.js y TypeScript

- **Tipado Robusto**: Uso de TypeScript para definir interfaces (e.g., `SectionRefs`, `HeaderProps`) y tipar los props y los `useRef` para asegurar la solidez y escalabilidad del proyecto, minimizando errores en tiempo de ejecución.

- **Next.js Image**: Uso de `<Image>` optimizado y la propiedad `fill` en el carrusel para un mejor rendimiento y gestión de la proporción de imágenes (controlando `object-fit` vía CSS).

- **Hooks Avanzados**: Implementación de `useImperativeHandle` y `forwardRef` para controlar el carrusel de proyectos desde un componente padre (lo que permite métodos `prev()` y `next()`).

### 🗺️ Navegación y Experiencia de Usuario (UX)

- **Scroll Inter-Sección**: Implementación de smooth scrolling programático utilizando el DOM (`scrollIntoView`) manejado a través de referencias (`useRef`) pasadas del `LandingPage` al `Header`.

- **Redirección Externa**: Lógica de navegación implementada en botones clave (Schedule a Call) para redirigir a la ruta `/Form` usando `window.location.href`.

### 🎨 Implementación de Diseño (Fidelidad y Flexibilidad)

- **Fidelidad Visual**: Replicación precisa del diseño, prestando especial atención a los detalles de tipografía, colores (fondo `#191921`) y espaciado.

- **Carrusel Adaptativo**: Lógica implementada para gestionar diferentes proporciones de imagen:
  - Imágenes Anchas (e.g., project1, project4, project5): Usan `object-fit: cover` para llenar el espacio por completo.
  - Imágenes Altas (e.g., project2, project3): Usan `object-fit: contain` para mostrar la imagen completa sin recortar.

## 🚀 Guía de Ejecución Local

Sigue estos sencillos pasos para tener el proyecto corriendo en tu entorno de desarrollo.

1. **Clonar el Repositorio**:

   ```bash
   git clone https://github.com/LuisAtzelMB/Papalote-museo-del-nino-prueba-tecnica

Instalar Dependencias:
bash

cd tu-repositorio
npm install

Ejecutar el Proyecto:
bash

npm run dev

    Abrir el Navegador:

    Ve a http://localhost:3000 para ver el proyecto en acción.

🙋 Contacto

¡Gracias por revisar mi proyecto! Si tienes alguna pregunta o quieres contactarme, no dudes en hacerlo.

Medio	Información
👤 Luis Montaño
🌐 https://github.com/LuisAtzelMB
💼 www.linkedin.com/in/luis-atzel-montaño-briz-4a24772ab
📧 luisatzelmb@gmail.com
<div align="center">

¡No olvides dejar una ⭐ si te gusta este proyecto!
</div> 
✨ Visión General del Proyecto

Características implementadas:

    ✅ Next.js Image Optimization con fill property

    ✅ Hooks Avanzados: useImperativeHandle, forwardRef

    ✅ Tipado de Props y Refs para máxima robustez

    ✅ CSS Modules para estilos scoped y mantenibles

🗺️ Navegación y UX Excellence
typescript

Logros de UX:

    🌊 Scroll Inter-Sección con comportamiento suave

    🔗 Redirección Inteligente a rutas externas

    📱 Navegación Táctil optimizada para mobile

    ⚡ Performance Optimizada con lazy loading

🎨 Fidelidad de Diseño y Adaptabilidad
Tipo Imagen	Estrategia	Resultado
🖼️ Imágenes Anchas	object-fit: cover	Llenado completo del espacio
📐 Imágenes Altas	object-fit: contain	Visualización completa sin recorte
🚀 Guía de Instalación y Ejecución
Prerrequisitos
bash

node >= 18.0.0
npm >= 9.0.0

⚡ Instalación Rápida
bash

# 1. Clonar el repositorio
git clone https://github.com/LuisAtzelMB/Papalote-museo-del-nino-prueba-tecnica
# 2. Navegar al directorio
cd Papalote-museo-del-nino-prueba-tecnica

# 3. Instalar dependencias
npm install

# 4. Ejecutar en modo desarrollo
npm run dev

📦 Scripts Disponibles
json

{
  "dev": "next dev",           // Desarrollo con hot-reload
  "build": "next build",       // Build de producción
  "start": "next start",       // Servir build de producción
  "lint": "next lint"          // Análisis de código
}

🌐 Acceso local: http://localhost:3000
🏗️ Arquitectura del Proyecto
text
<img width="387" height="257" alt="imagen" src="https://github.com/user-attachments/assets/6bb7b966-04dc-452d-bea7-c035a7b5112a" />





¡Gracias por la oportunidad de demostrar mis habilidades! 🚀
