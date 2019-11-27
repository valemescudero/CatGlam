const express = require('express');
const router = express.Router();


router.get('/micuenta',  (req,res) => {
       res.render('ingreso');
   } );

router.get('/micuenta/registro',  (req,res) => {
       res.render('registro');
   } );

module.exports = router;