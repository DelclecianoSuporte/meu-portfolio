const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors'); // Adicione esta linha

const app = express();
const port = 3000;

app.use(cors()); // Adicione esta linha
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail', // ou o serviço de e-mail que você preferir
  auth: {
    user: 'delclecianoj42@gmail.com',
    pass: 'dtsrtieymvuzrzun'
  }
});

app.post('/enviar-email', (req, res) => {
  const { nome, email, mensagem } = req.body;

  const mailOptions = {
    from: email,
    to: 'delclecianoj42@gmail.com',
    subject: `Contato de ${nome}`,
    text: `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).json({ message: 'E-mail enviado com sucesso!' });
  });
});

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});