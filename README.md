======================================================
 DS-160 Form Project with React & Node (Express)
======================================================

Este proyecto implementa un formulario DS-160 que se envía a un servidor Node/Express para procesar y enviar los datos por correo.

Live Demo:
----------
Puedes ver una demostración en producción en:
https://visalegalexperts.com

------------------------------------------------------
1. Estructura del Proyecto
------------------------------------------------------

El proyecto está dividido en dos partes principales:

1) Frontend (React)
   - Ubicado en la carpeta: ds-160 (o nombre equivalente).
   - Utiliza Vite o Create React App para su configuración.
   - Contiene el código fuente de la SPA (Single Page Application) que incluye
     varias secciones y un wizard para completar el formulario DS-160.
   - También incluye una página de Contacto con un formulario más sencillo.
   - Se compila en un build estático (carpeta "build/" o "dist/").

2) Backend (Node + Express)
   - Ubicado en la carpeta: server (o nombre equivalente).
   - Contiene un archivo "index.js" o "server.js" que inicia un servidor
     Express, escuchando en un puerto (por defecto, 4000).
   - Maneja rutas como "/api/ds160" y "/api/contact", procesando datos recibidos
     y enviándolos por correo vía Nodemailer con credenciales de Gmail (App Password).
   - Puede configurarse con un Reverse Proxy en Apache, Nginx o similar.

------------------------------------------------------
2. Requisitos y Configuración
------------------------------------------------------

- Node.js >= 16 (recomendado Node 18 o 20 para evitar warnings).
- NPM o Yarn para instalar dependencias.

Pasos básicos de instalación:

1) Clonar el repositorio:
   git clone (https://github.com/nilfredb/ds160-form.git)
   (o descargar el ZIP)

2) Instalar dependencias del Frontend:
   cd ds-160
   npm install

3) Compilar el frontend para producción:
   npm run build
   (Genera la carpeta "dist/" o "build/" con los archivos estáticos.)

4) Instalar dependencias del Backend:
   cd ../server
   npm install

5) Configurar variables de entorno en "server/.env":
   EMAIL_USER="tu-correo@gmail.com"
   EMAIL_PASS="tu-app-password"   (App Password de Gmail)
   EMAIL_TO="destinatario@correo.com"
   (y cualquier otra variable que requieras)

6) Iniciar el servidor:
   node index.js
   # o nodemon index.js, pm2, etc.

------------------------------------------------------
3. Despliegue en un Servidor con Apache (Ejemplo)
------------------------------------------------------

A) Servir el Frontend:
   - Mover la carpeta compilada (dist/ o build/) dentro de /var/www/html/ds-160
   - Configurar el VirtualHost en Apache (ds-160.conf) para que DocumentRoot
     apunte a /var/www/html/ds-160 y reescriba rutas a index.html.

B) Correr el Backend:
   - Ubicar la carpeta "server" en /var/www/html/server o en otra ruta.
   - Iniciar con "node index.js" o usar un manejador de procesos (PM2, systemd).
   - Asegúrate de que escuche en un puerto (ej. 4000).

C) (Opcional) Configurar Reverse Proxy:
   - Habilitar mod_proxy y mod_proxy_http en Apache.
   - Añadir ProxyPass /api http://127.0.0.1:4000/api en tu VirtualHost.

------------------------------------------------------
4. Flujo de Uso
------------------------------------------------------

1) El usuario ingresa a https://visalegalexperts.com (live demo) y ve la
   aplicación React. Allí puede:
   - Completar el wizard DS-160, paso a paso.
   - Llenar el formulario de Contacto, si desea.

2) Al finalizar el formulario DS-160, al hacer clic en "Enviar Solicitud",
   el Frontend envía un POST a "/api/ds160", donde Express recibe los datos,
   arma un correo con Nodemailer y lo remite a la dirección configurada en
   EMAIL_TO.

3) El usuario recibe un mensaje de éxito o error, según la respuesta del servidor.

------------------------------------------------------
5. Créditos y Detalles
------------------------------------------------------

- Librerías Principales:
  - React, React Hook Form, Yup: Para la validación y el wizard del DS-160.
  - Framer Motion: Animaciones suaves.
  - Nodemailer: Envío de correos desde Node.
  - Tailwind CSS: Estilos en las páginas.

- Para las preguntas y campos del DS-160, se usa un arreglo "ds160Questions"
  que define cada sección y sus campos. La validación condicional se maneja
  con Yup.

- El botón de WhatsApp y otros añadidos (Disclaimer, Sidebar) son ejemplos
  de integración adicional para mejorar la experiencia del usuario.

------------------------------------------------------
6. Soporte o Contribuciones
------------------------------------------------------

Si encuentras un problema o deseas colaborar:
- Crea un "Issue" en el repositorio de GitHub.
- O contáctanos a contacto@visalegal.com.

¡Gracias por probar el DS-160 Project!

------------------------------------------------------
