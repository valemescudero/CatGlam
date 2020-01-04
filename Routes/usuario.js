
const express = require('express');
const router = express.Router();
const pool = require('../db/Index');


router.get('/', async(req,res,next)=> {
    let logger = {
      "logged" :  req.session.log,
      };
      if (req.session.idUsuario) {
        if (req.session.cart !== undefined) {
      var carrito = req.session.cart;
      console.log('carrito');
        res.render('usuario', {message : 'Bienvenido Usuario ' + req.session.nombre, title : 'Cat Glam · Mi Cuenta', carrito : carrito, logger:logger});
} else {
  
  res.render('usuario', {message : 'Bienvenido Usuario ' + req.session.nombre, title : 'Cat Glam · Mi Cuenta', logger:logger});


}
      }
    else
    {
    res.redirect('/ingreso');
}
    })
    module.exports = router;