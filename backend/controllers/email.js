const nodemailer = require("nodemailer");
const conexao = require("../config/db.config");

exports.sendMail = (req, res) => {
  let email = req.body;
  console.log(email);
  let transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.PORT_SMTP,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  transporter
    .sendMail({
      from: '"ADM Aplicativo👻" <process.env.USER>',
      to: email.to,
      subject: "Nova Tarefa ✔",
      text: email.description,
      html: `<b>Olá! Você possui uma nova tarefa! ${email.description}</b>`,
    })
    .then((message) => {
      res.send({ response: "Email enviado com sucesso!!!" });
    })
    .catch((err) => {
      console.log(err);
    });
};
