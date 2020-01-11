const express = require('express');
const nodemailer = require("nodemailer");
const router = express.Router();

router.get('/', async (req,res) => {
    let logger = {
      "logged" :  req.session.log,
      };
      console.log (logger);
    res.render('contacto', {title : 'Cat Glam · Contacto', logger:logger});
    
     } );
    
router.post('/mail', (req, res) => {

    console.log(req.body)
    
      // Instantiate the SMTP server
      const smtpTrans = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: "accesorios.catglam@gmail.com",
          pass: "annoyedgrunt"
        }
      })
      // Specify what the email will look like
      var mailOpts = {
        from: '', // This is ignored by Gmail
        to: "accesorios.catglam@gmail.com",
        subject: 'Nuevo mensaje de contacto desde catglam.com',
        text: `${req.body.nombre} ${req.body.apellido}  (${req.body.email} - ${req.body.telefono} ) dice: ${req.body.mensaje}`
      }
      console.log('control')
      console.log(mailOpts);
    
      // Attempt to send the email
      smtpTrans.sendMail(mailOpts, (error, response) => {
        if (error) {
          res.redirect('emailerror'); // Show a page indicating success
        }
        else {
          res.render('emailok'); // Show a page indicating success
        }
      })
    })

module.exports = router;