const express = require('express');
const router = express.Router();

router.get('/',  (req,res) => {
  let logger = {
    "logged" :  req.session.log,
    };
    console.log (logger);
  res.render('inicio', {title : 'Cat Glam · Accesorios', logger:logger});
  
   } );



module.exports = router;