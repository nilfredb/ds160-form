

------------------------------------------------------
 DS-160 Form Project with React & Node (Express)
------------------------------------------------------

Este proyecto implementa un formulario DS-160 que se envía a un servidor 
Node/Express para procesar la información y enviarla por correo.

Live Demo:
----------
Visita la versión en línea:
https://visalegalexperts.com

------------------------------------------------------
1. Estructura del Proyecto
------------------------------------------------------

├─ ds-160/          
│   ├─ src/         (Código fuente del frontend - React)
│   ├─ package.json (Dependencias del frontend)
│   └─ ...          
│
└─ server/          
    ├─ index.js     (Backend en Node/Express)
    ├─ package.json (Dependencias del backend)
    └─ .env         (Credenciales y configuración)

------------------------------------------------------
2. Descripción General
------------------------------------------------------

Front (React):
- Un wizard DS-160 con varias secciones y validaciones 
  condicionales (React Hook Form + Yup).
- Framer Motion para animaciones sutiles.
- Tailwind CSS para estilos.

Back (Express):
- Recibe los POST desde "/api/ds160" y "/api/contact".
- Envía los datos vía Nodemailer usando credenciales 
  configuradas en .env (EMAIL_USER, EMAIL_PASS, EMAIL_TO).

------------------------------------------------------
3. Cómo Ejecutar Localmente
------------------------------------------------------

A) Frontend:
   1. cd ds-160
   2. npm install
   3. npm run dev
   - Levanta en http://localhost:5173

B) Backend:
   1. cd server
   2. npm install
   3. Crear .env con:
      EMAIL_USER="tu-correo@gmail.com"
      EMAIL_PASS="app-password"
      EMAIL_TO="destino@ejemplo.com"
   4. node index.js
   - Escucha en http://localhost:4000

------------------------------------------------------
4. Flujo de Uso
------------------------------------------------------

1) El usuario completa el DS-160 por pasos (wizard).
2) Pulsa "Enviar Solicitud" => se hace POST a /api/ds160.
3) El servidor procesa y reenvía un correo con los datos.
4) El usuario ve un mensaje de éxito o error.

Lo mismo ocurre con la página "Contacto" usando "/api/contact".

------------------------------------------------------
5. Personalización
------------------------------------------------------

- ds160Questions (carpeta data/) define campos y secciones.
- Yup validations en generateValidationSchema() ajustan 
  patrones y requerimientos.
- .env en backend para credenciales de correo (Nodemailer).
- Para CSS, usamos Tailwind; para animaciones, Framer Motion.

------------------------------------------------------
6. Créditos
------------------------------------------------------

- React Hook Form + Yup para validaciones.
- Nodemailer para envío de correos.
- Framer Motion y Tailwind para UI/UX.
- Proyecto de demostración en:
  https://visalegalexperts.com

¡Gracias por usar este DS-160 Form Project!


