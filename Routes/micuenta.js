
const express = require('express');
const router = express.Router();
const pool = require('../db/Index');

router.get('/logout', async(req,res,next)=> {
    req.session.destroy(); // destruye la sesion DEL 
    res.redirect('/');
})

router.get('/', async(req,res,next)=> {
    let logger = {
      "logged" :  req.session.log,
      };
    // el id es una pieza fundamental para hacer consultas de un usuario especifico
    // consulta para los datos personales del usuario y para las compras
    if(req.session.idUsuario) {
        // select * from usuarios where id_u = ?, [req.session.idUsuario]
        res.render('usuario', {message : 'Bienvenido Usuario ' + req.session.nombre, title : 'Cat Glam · Mi Cuenta', logger:logger});

    } else if (req.session.idAdmin) {
        res.render('admin', {message : 'Bienvenido Admin ' + req.session.nombre, title : 'Cat Glam · Panel de Control', logger:logger});
    }
    else
        {
        res.redirect('/ingreso');
    }
    // select * from usuarios where id_u = 1
})

module.exports = router;