var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.post('/', async (req, res, next) => {
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var dni = req.body.dni;
  var telefono = req.body.telefono;
  var email = req.body.email;

  var obj = {
    to: 'sandbox.smtp.mailtrap.io', // A dónde llega la info
    subject: 'Datos de la página web', // Asunto del correo
    html: `${nombre} ${apellido} se contactó y quiere unirse al gimnasio a través de este correo: ${email}. Este es su teléfono: ${telefono}` 
    // Cuerpo del correo
  };

  // Creación del transportador (transporter)
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });


});

module.exports = router;
