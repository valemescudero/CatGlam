const express = require('express');
const router = express.Router();
const pool = require('../db/Index');

// Cliente --> servidor (formulario : method | action)

// INGRESO
router.get('/',  (req,res) => {
    let logger = {
      "logged" :  req.session.log,
      };
      if (req.session.log == true) {
    res.redirect('/micuenta');
      } else {
    res.render('registro', {title : 'Cat Glam · Registrate', logger:logger});
}});

router.post('/registro',async (req,res) => {
    console.log(req.body);
    let nuevoUsuario = {
        nombre_u: req.body.nombre,
        apellido_u: req.body.apellido,
        usuario_u: req.body.usuario,
        password_u: req.body.password,
    }
    await pool.query('insert into usuarios set ?', [nuevoUsuario]);
    res.render('ingreso', {textcolor : 'text-success', message : 'Usuario creado exitosamente'})
})



module.exports = router;