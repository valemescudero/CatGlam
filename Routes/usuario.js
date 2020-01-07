
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
      console.log(carrito);

      
        
        res.render('usuario', {message : '¡Hola, ' + req.session.nombre + '!', title : 'Cat Glam · Mi Cuenta', carrito : carrito, fotoperfil: req.session.fotoperfil, logger:logger});
} else {
  if(req.session.success == 1) {
  var realizada = 'Pedido realizado con éxito'
console.log(realizada);
req.session.success = 0;
}
  
  res.render('usuario', {message :  '¡Hola, ' + req.session.nombre + '!', title : 'Cat Glam · Mi Cuenta', realizada:realizada, fotoperfil: req.session.fotoperfil, logger:logger});


}
      }
    else
    {
    res.redirect('/ingreso');
}
    })




    router.get('/update/:id/:q/', async(req,res,next)=> {
      let logger = {
        "logged" :  req.session.log,
        };
        console.log('controles');
        productID = req.params.id;
        console.log(productID);
        productUpdate = req.params.q;
        console.log(productUpdate);
    req.session.cart[productID].cantidad = productUpdate;
    res.redirect('/carrito');

      });

    module.exports = router;