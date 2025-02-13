require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json()); // Para parsear JSON en el body

// Función reutilizable para enviar correos
const sendEmail = async (subject, body) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: `DS-160 & Contacto <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject,
    text: body
  };

  const info = await transporter.sendMail(mailOptions);
  return info;
};

// RUTA para recibir el formulario de contacto
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log("📩 Formulario de contacto recibido:", req.body);

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    const emailBody = `Se ha recibido un nuevo mensaje de contacto:
    
    Nombre: ${name}
    Email: ${email}
    Mensaje: ${message}`;

    await sendEmail('Nuevo Mensaje de Contacto', emailBody);
    console.log('📨 Correo enviado para Contacto');

    return res.status(200).json({ message: 'Mensaje enviado correctamente.' });
  } catch (error) {
    console.error('❌ Error en /api/contact:', error);
    return res.status(500).json({ error: 'Error al enviar el mensaje.' });
  }
});

// RUTA para recibir el formulario DS-160
app.post('/api/ds160', async (req, res) => {
  try {
    const formData = req.body;
    console.log("📩 Formulario DS-160 recibido:", req.body);

    if (!formData || Object.keys(formData).length === 0) {
      return res.status(400).json({ error: 'Solicitud inválida, JSON vacío' });
    }

    const emailBody = `Nueva Solicitud DS-160 recibida:
    
    ${JSON.stringify(formData, null, 2)}
    
    Revisa el contenido y responde al cliente.`;

    await sendEmail('Nueva Solicitud DS-160', emailBody);
    console.log('📨 Correo enviado para DS-160');

    return res.status(200).json({ message: 'Datos recibidos y correo enviado.' });
  } catch (error) {
    console.error('❌ Error en /api/ds160:', error);
    return res.status(500).json({ error: 'Error al enviar correo.' });
  }
});

app.listen(4000, () => {
  console.log('🚀 Servidor corriendo en http://localhost:4000');
});
