
const express = require('express');
const router = express.Router();
const pool = require('../db/Index');

router.get('/', async(req,res,next)=> {
    // el id es una pieza fundamental para hacer consultas de un usuario especifico
    // consulta para los datos personales del usuario y para las compras
    console.log(req.session.idUsuario);
    if(req.session.idUsuario) {
        // select * from usuarios where id_u = ?, [req.session.idUsuario]
        res.render('usuario', {message : 'Bienvenido'});

    } else {
        res.redirect('/micuenta');
    }
    // select * from usuarios where id_u = 1
})

module.exports = router;