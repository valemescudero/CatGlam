const express = require('express');
const router = express.Router();
const pool = require('../db/Index');

//Add products to cart
router.get('/:q/:id', async (req,res) => {
    let logger = {
      "logged" :  req.session.log,
          };
    const productID = req.params.id;
    const productQ = parseInt(req.params.q);
    const product = await pool.query('select * from productos WHERE id_p = ' + productID);

// Crea objeto producto para el carrito
    let prod = {
        id: productID,
        nombre: product[0].nombre_p,
        precio: parseFloat(product[0].precio_p),
        cantidad: productQ,
    }

// Si no existe carrito, lo crea y agrega el producto al carrito
    if (!req.session.cart) {
        let cartItem = { [productID] : prod }
        req.session.cart = cartItem;
        console.log('crear');
        console.log(req.session.cart);
        
    }
 // Si existe carrito y ya contiene el producto, agrega unidades   
    else if (req.session.cart.hasOwnProperty([productID])) {
        console.log('modificar');
        req.session.cart[productID].cantidad += productQ;
        console.log(req.session.cart);
    }
    else {
 // Si existe carrito y no contiene el producto, lo agrega          
        var aux = req.session.cart;
        let cartItem = { [productID] : prod };
        Object.assign(aux, cartItem);
        req.session.cart = aux;
        console.log('agregar');
        console.log(req.session.cart);
    }
    res.status(200).json().redirect('back')


});


module.exports = router;