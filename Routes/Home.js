const express = require('express');
const router = express.Router();


router.get('/',  (req,res) => {
    //ya está direccionado a productos por el servidor x eso es '/'
       res.render('inicio');
   } );

module.exports = router;