# Proyecto VisaLegal Experts

Este es un proyecto web para la gestión y asesoría de trámites de visa, desarrollado con **React (Vite) para el frontend** y **Node.js (Express) para el backend**.

## 📌 Live Demo
Puedes ver la versión en vivo del proyecto en:  
🌐 **[VisaLegal Experts - Live Demo](https://visalegalexperts.com)**

## 📌 Tecnologías Usadas
- **Frontend:** React + Vite + Tailwind CSS
- **Backend:** Node.js + Express
- **Base de datos:** (Opcional, si se usa una DB como MySQL)
- **Servidor:** Ubuntu Server con Nginx (en caso de producción)

---

## 📥 Instalación y Configuración

### 🔹 1️⃣ Clonar el Repositorio
```bash
git clone https://github.com/nilfredb/ds160-form.git
cd tu-repo
```

---

### 🔹 2️⃣ Configurar el Backend
```bash
cd server
npm install
```

📌 **Configurar variables de entorno en `.env`**
```env
EMAIL_USER="tucorreo@gmail.com"
EMAIL_PASS="tucontraseña"
EMAIL_TO="destinatario@gmail.com"
```

📌 **Ejecutar el backend**
```bash
node index.js
```
🔹 Para mantenerlo en ejecución en un servidor:
```bash
npm install -g pm2
pm2 start index.js --name "backend"
pm2 save
```

---

### 🔹 3️⃣ Configurar el Frontend
```bash
cd frontend
npm install
npm run dev
```
📌 Luego, abre en tu navegador:
```
http://localhost:5173
```

Para **modo producción**:
```bash
npm run build
```
Si usas **Nginx en un servidor**, asegúrate de configurar `dist/` como root.

---

## 🚀 Despliegue en Producción
Si deseas alojarlo en un servidor propio:
1. **Configura un VPS con Ubuntu Server**
2. **Instala Node.js, Nginx y Git**
3. **Sube el código y configura Nginx**
4. **Asegura el sitio con un certificado SSL**

📌 **Ejemplo de configuración de Nginx** para React:
```nginx
server {
    listen 80;
    server_name tu-dominio.com;
    
    root /home/usuario/tu-repo/frontend/dist;
    index index.html;
    
    location / {
        try_files $uri /index.html;
    }
}
```
Luego, reinicia Nginx:
```bash
sudo systemctl restart nginx
```

---

## 📌 Contacto y Créditos
- Desarrollado por: **[Nilfred]**
- Email: nbaez414@gmail.com
- Web: https://nilfred.dev

📌 **Si necesitas ayuda con la instalación, abre un issue en GitHub.** 🚀
