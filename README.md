======================================================
 DS-160 Form Project with React & Node (Express)
======================================================

Este proyecto implementa un formulario DS-160 con varias secciones 
tipo “wizard”, validaciones y envío de datos a un servidor Node/Express 
que reenvía la información por correo (Nodemailer).

Live Demo:
----------
Puedes ver una demostración en:
https://visalegalexperts.com

----------------------------------------------------
1. Estructura del Proyecto
----------------------------------------------------

├─ ds-160/          (Carpeta con el frontend de React)
│   ├─ src/         (Componentes, páginas, etc.)
│   ├─ package.json (Dependencias frontend)
│   └─ ...          
│
└─ server/          (Carpeta con el backend en Node + Express)
    ├─ index.js     (Archivo principal que inicia Express)
    ├─ package.json (Dependencias backend)
    └─ .env         (Variables de entorno)

----------------------------------------------------
2. Descripción General
----------------------------------------------------

Frontend (React):
- Estructurado como un formulario DS-160 por pasos (wizard).
- Validaciones con React Hook Form + Yup (campos obligatorios, 
  patrones, etc.).
- Incluye una página de “Contacto” más simple.
- Usa Framer Motion para animaciones sutiles y Tailwind CSS 
  para estilos.

Backend (Node/Express):
- Un servidor que escucha peticiones POST en rutas como "/api/ds160" 
  y "/api/contact".
- Al recibir los datos, envía un correo usando Nodemailer con 
  las credenciales definidas en variables de entorno.

----------------------------------------------------
3. Ejecución Local
----------------------------------------------------

A) Frontend
   1. Ve a la carpeta ds-160/
   2. Instala dependencias: npm install
   3. Inicia modo desarrollo: npm run dev
      - Proyecto en http://localhost:5173

B) Backend
   1. Ve a la carpeta server/
   2. Crea un archivo .env con:
      EMAIL_USER="tu-correo@gmail.com"
      EMAIL_PASS="app-password"   (App Password de Gmail)
      EMAIL_TO="destinatario@correo.com"
   3. Instala dependencias: npm install
   4. Inicia servidor: node index.js
      - Escucha por defecto en http://localhost:4000

----------------------------------------------------
4. Flujo de Uso
----------------------------------------------------

1) El usuario completa el formulario DS-160 (secciones, validaciones).
2) Al finalizar, un clic en “Enviar” dispara un POST a "/api/ds160" 
   con todos los datos.
3) El servidor (Node) recibe, arma un correo y lo envía a EMAIL_TO 
   vía Nodemailer.
4) El frontend notifica al usuario si tuvo éxito o falló.

En la página “Contacto” sucede lo mismo pero a "/api/contact", 
con un formulario más simple.

----------------------------------------------------
5. Personalización
----------------------------------------------------

- ds160Questions (carpeta data/): lista de campos y secciones 
  que definen el formulario.
- Yup Schema: se configuran las validaciones (campos obligatorios, 
  condicionales).
- Email Credentials (server/.env): ajustar a tu cuenta Gmail o 
  cualquier servicio SMTP.
- Lógica de diseño: ver componentes como DynamicField, Sidebar, 
  Hero, etc.

----------------------------------------------------
6. Observaciones
----------------------------------------------------

- Para usar Gmail, es recomendable una App Password (ver 
  documentación de Google).
- El wizard DS-160 maneja validaciones condicionales: si 
  “Sí”, aparecen campos extras; si “No”, se borran.
- React Hook Form y Yup rechazarán la navegación al siguiente 
  paso si faltan campos obligatorios.

----------------------------------------------------
7. Contacto
----------------------------------------------------

Para dudas o sugerencias sobre este proyecto, 
puedes abrir un “Issue” en el repo o escribir a:
nbaez414@gmail.com

¡Gracias por utilizar este DS-160 Form Project!
