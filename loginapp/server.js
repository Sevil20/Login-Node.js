// server.js
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

app.use(express.json());


const PORT = 5175;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.post('/send-email', (req, res) => {
    const { to, subject, text } = req.body;
  
    const mailOptions = {
      from: 'sevilmirzyeva010@gmail.com', // Replace with your own email address
      to,
      subject,
      text,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
      } else {
        console.log('Email sent:', info.response);
        res.json({ message: 'Email sent successfully' });
      }
    });
  });
  
  const transporter = nodemailer.createTransport({
    host: 'local', // Replace with your email provider's SMTP server
    port: 587,
    secure: false, // Set to true if your provider requires a secure connection
    auth: {
      user: 'sevilmirzyeva010@gmail.com',
      pass: 'Codegenerator2002*',
    },
  });

  
  

