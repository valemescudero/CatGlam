const express = require('express');
const router = express.Router();
const pool = require('../db/Index');

router.get('/micuenta/logout', async(req,res,next)=> {
    req.session.destroy(); // destruye la sesion DEL 
    res.redirect('/');
})

router.get('/micuenta',  (req,res) => {
       res.render('ingreso');
   } );

router.get('/micuenta/registro',  (req,res) => {
       res.render('registro');
   } );

// Cliente --> servidor (formulario : method | action)
router.post('/micuenta', async(req,res,next)=> {
    console.log(req.body);
    let usuario = req.body.usuario;
    let password = req.body.password;
    let data = await ingreso(usuario,password);
    console.log(req.body);
 //   if(data.length == 1) {
//        let permisos = data[0].permisos;
//        let id = data[0].id; 
//       console.log(permisos);
//      console.log(id)
//      if(permisos == 0) {
//          req.session.idUsuario = id;
//      } else {
//          req.session.idAdmin = id;
//      }

        res.redirect('usuario');

//  } else {
//      res.render('ingreso', {message : 'Usuario o contraseña incorrectos'})
//  }

});
async function ingreso(usuario,password) {
    // select * from usuarios where usuario_u = usuario and password_u = password

    let query = "select * from usuarios where usuario_u = ? and password_u = ?";
    const rows = await pool.query(query,[usuario,password])
    return rows;


}

router.post('/micuenta/registro',async (req,res) => {
    console.log("Control");
    console.log(req.body);
    let nuevoUsuario = {
        nombre_u: req.body.nombre,
        apellido_u: req.body.apellido,
        usuario_u: req.body.usuario,
        password_u: req.body.password,
    }
    await pool.query('insert into usuarios set ?', [nuevoUsuario]);
    res.send('Received');
})


module.exports = router;