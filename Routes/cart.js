const express = require('express');
const router = express.Router();
const pool = require('../db/Index');

//Add products to cart
router.get('/:cant/:id', async (req,res) => {
    let logger = {
      "logged" :  req.session.log,
          };
    const productID = req.params.id;
    const productCant = parseInt(req.params.cant);
    const product = await pool.query('select * from productos WHERE id_p = ' + productID);

// Crea objeto producto para el carrito
    let prod = {
        id: productID,
        nombre: product[0].nombre_p,
        precio: parseFloat(product[0].precio_p),
        cantidad: productCant,
    }

// Si no existe carrito, lo crea
    if (!req.session.cart) {
        let cartItem = { [productID] : prod }
        req.session.cart = cartItem;

// Agrega el producto al carrito
// req.session.cart = ( { [productID]: prod } );
        console.log(req.session.cart);
        
    }
    else if (req.session.cart.hasOwnProperty([productID])) {
        console.log('modificar');
        req.session.cart[productID].cantidad += productCant;
        console.log(req.session.cart);
    }
    else {
        var aux = req.session.cart;
        let cartItem = { [productID] : prod };
        Object.assign(aux, cartItem);
        req.session.cart = aux;
        console.log(req.session.cart);
    }
    res.status(200).json().redirect('back')
//!req.session.cart ? (req.session.cart = [ { productID : prod} ]) :  



});


module.exports = router;