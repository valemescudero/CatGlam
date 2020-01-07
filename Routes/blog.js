const express = require('express');
const router = express.Router();
const pool = require('../db/Index');

router.get('/', async(req,res,next)=> {
    let logger = {
      "logged" :  req.session.log,
      };
var blogpost = await pool.query('SELECT * FROM blog ORDER BY id_b DESC LIMIT 5')








      res.render('blog', { title : 'Cat Glam · Novedades', logger:logger, blogpost:blogpost});


    });


module.exports = router;