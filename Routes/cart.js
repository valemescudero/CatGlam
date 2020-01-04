const express = require('express');
const router = express.Router();
const pool = require('../db/Index');

//Add products to cart
router.get('/:id', async (req,res) => {
    let logger = {
      "logged" :  req.session.log,
          };
    const productID = req.params.id;
    const product = await pool.query('select from productos WHERE id_p = ' + productID);




});


module.exports = router;