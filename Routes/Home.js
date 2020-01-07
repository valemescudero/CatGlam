const express = require('express');
const router = express.Router();
const pool = require('../db/Index');

router.get('/', async (req,res) => {
  let logger = {
    "logged" :  req.session.log,
    };
    console.log (logger);
let ultimosProductos = await pool.query('SELECT * FROM productos ORDER BY id_p DESC LIMIT 3')
  res.render('inicio', {title : 'Cat Glam · Accesorios', logger:logger, ultimosProductos:ultimosProductos});
  
   } );



module.exports = router;