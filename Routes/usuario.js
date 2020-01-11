
const express = require('express');
const router = express.Router();
const pool = require('../db/Index');


router.get('/', async(req,res,next)=> {
    let logger = {
      "logged" :  req.session.log,
      };
      if (req.session.idUsuario) {
      
        console.log(req.session.idUsuario);
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

      
    // Cambiar foto de perfil
    router.post('/perfil/subir/',async (req,res) => {
      console.log("Control");
      let nuevaFoto = {
          foto: req.body.nfoto,
      }
      req.session.fotoperfil = nuevaFoto.foto;
      await pool.query('UPDATE usuarios SET foto_u = "' + nuevaFoto.foto + '" WHERE id_u =' + req.session.idUsuario);
    
      res.redirect('back');
    })


    router.get('/misdatos/', async(req,res,next)=> {
      let logger = {
        "logged" :  req.session.log,
        };
        var datosUsuario = await pool.query('select * from usuarios where id_u =' + req.session.idUsuario);
        let misDatos = {
          nombre : datosUsuario[0].nombre_u,
          apellido : datosUsuario[0].apellido_u,
          password : datosUsuario[0].password_u,
          email : datosUsuario[0].usuario_u,
        }

        res.render('usuariomisdatos', {message : '¡Hola, ' + req.session.nombre + '!', title : 'Cat Glam · Mi Cuenta', misDatos:misDatos, fotoperfil: req.session.fotoperfil, logger:logger});

      })

 
    // Cambiar foto de perfil
    router.post('/misdatos/editar/',async (req,res) => {
      console.log("Control");
      let editPerfil = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        password: req.body.password,
      }
      req.session.nombre = editPerfil.nombre;
      const ap = await pool.query("UPDATE usuarios SET nombre_u = '" + req.body.nombre + "', apellido_u = '" + req.body.apellido + "', password_u = '" + req.body.password + "' WHERE id_u = " + req.session.idUsuario);
      res.redirect('back');
    })







    module.exports = router;