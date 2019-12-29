
const express = require('express');
const router = express.Router();
const pool = require('../db/Index');


router.get('/', async(req,res,next)=> {
    let logger = {
      "logged" :  req.session.log,
      };
      if (req.session.idUsuario) {
        res.render('usuario', {message : 'Bienvenido Usuario ' + req.session.nombre, title : 'Cat Glam · Mi Cuenta', logger:logger});
}
    else
    {
    res.redirect('/ingreso');
}
    })
    module.exports = router;