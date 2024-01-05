# LAN Party - Full Stack Learning Journey
Multi repo de practicas

## Descripción

Este repositorio es un espacio de colaboración para aprender desarrollo Full Stack, con un enfoque especial en React, siguiendo el curso https://fullstackopen.com/es y la guía [Full Stack Developer Roadmap](https://roadmap.sh/full-stack). Aquí, exploraremos conceptos clave, realizaremos proyectos prácticos y colaboraremos en desafíos de codificación.

## Cómo Contribuir

### Primeros Pasos

1. **Clona el Repositorio**: `git clone https://github.com/cisarcode/lanparty.git`.
2. **Crea tu Branch**: `git checkout -b usuario`.
3. **Crea tu primer proyecto en tu carpeta de usuario**:
 - `npm create vite@latest`
 -  `-> [nombre_proyecto]`
 -  `-> react`
 -  `-> JavaScript + SWC`
 -  `cd [nombre_proyecto]`
 -  `npm install`
 -  `npm run dev`

### Ramas Comúnmente Utilizadas

- `main` (o `master`): Esta es la rama principal donde se encuentra el código que ya está listo para producción.


- `develop`: Esta es una rama donde se combinan las características que están en desarrollo.


- `feature/<nombre-de-la-feature>`: Para cada nueva característica o proyecto en el que estés trabajando, puedes crear una nueva rama con el patrón `feature/<nombre-de-la-feature>`.

  Por ejemplo:
    - `feature/user-authentication`
    - `feature/payments-integration`
    - `feature/admin-dashboard`

- `release/<nombre-del-release>`: Cuando te estés preparando para una nueva versión de producción, puedes usar esta rama.

  Por ejemplo:
    - `release/v1.0`
    - `release/v1.1-beta`
    - `release/v2.0`


- `hotfix/<nombre-del-hotfix>`: Si surge un error en producción, puedes crear una rama `hotfix/<nombre-del-hotfix>` para corregirlo.

  Por ejemplo:
    - `hotfix/login-error`
    - `hotfix/payment-bug`
    - `hotfix/typo-in-homepage`


### Trabajo Individual

- Cada colaborador tendrá su propia carpeta para subir ejercicios y prácticas individuales.
- Utiliza commits claros y descriptivos.

### Trabajo Colaborativo

- Para proyectos conjuntos, colaboraremos en branches específicos.
- Discutiremos las tareas y las distribuiremos mediante issues.

### Pull Requests

- Realiza pull requests para fusionar tus cambios en el branch principal.
- Asegúrate de que tu código ha sido probado y revisado por otro colaborador.

### Buenas Prácticas de Git

- **Ramas Principales**: En Git, todo se trata de repositorios y ramas. Generalmente, en un repositorio de GitHub, se tienen dos ramas principales que no se mezclan: `main` y `develop`. La rama `main` es donde se encuentra el código que ya está listo para producción. La rama `develop`, por otro lado, es donde los programadores trabajan.
- **Ramas Generadas Periódicamente**: Estas son las características nuevas que se implementarán en el sistema. Estas luego pueden incluirse en la rama `develop` mediante `merge`. Ejemplos de nombre: `feature-automatic-backups`, `feature-dark-mode`.
- **Unir Ramas**: Cuando termines todas tus tareas, debes unir tu rama con la rama de desarrollo principal (`develop`), para que tu código esté disponible para el resto de los programadores. Esto se hace con el comando `git merge`.

## Estructura del Proyecto

- `/miusuario`: Carpetas personales para cada colaborador.
- `/grupo`: Proyectos y desafíos grupales.

## Recursos y Material de Aprendizaje

- [Enlace al Curso de React](https://fullstackopen.com/es)
- [Full Stack Developer Roadmap](https://roadmap.sh/full-stack)
- [Tutorial oficial de React](https://es.react.dev/learn/tutorial-tic-tac-toe)
- [Describir la UI](https://es.react.dev/learn/describing-the-ui)

## Reuniones y Comunicación

- Se sugiere realizar reuniones regulares (virtuales o presenciales) para discutir progresos y desafíos.
- Utiliza las discusiones en GitHub para dudas y debates.
