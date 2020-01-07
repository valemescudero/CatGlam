
const express = require('express');
const router = express.Router();
const pool = require('../db/Index');

router.get('/logout', async(req,res,next)=> {
    req.session.destroy(); // destruye la sesión
    res.redirect('/ingreso');
})

// Maneja las redirecciones
router.get('/', async(req,res,next)=> {
    let logger = {
      "logged" :  req.session.log,
      };
    if(req.session.idUsuario) {
        res.redirect('/carrito');
    } else if (req.session.idAdmin) {    
      res.redirect('/panel');
    }
    else
        {
        res.redirect('/ingreso');
    }
})

module.exports = router;