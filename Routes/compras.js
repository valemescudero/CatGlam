const express = require('express');
const router = express.Router();
const pool = require('../db/Index')

// Tester
// const carritoAux = {
//     '9': { id: '9', nombre: 'Aros Snake', precio: 200, cantidad: 2 },
//     '10': { id: '10', nombre: 'Aros Frutitas', precio: 250, cantidad: 3 }
//   }

router.post('/addOrder', async (req, res) => {
  
// Por las relaciones de la bd, primero toma el ID del cliente y crea la orden de compra
var userID = req.session.idUsuario;
const lastId = await pool.query('INSERT INTO ordencompra (idu_o) VALUES (' + userID + ')');
console.log('Orden de compra del cliente nº: ');
console.log(userID);

// Convierte el objeto carrito en array
const carritoArr = (Object.values(req.session.cart));

// Luego mapea el carrito e inserta los valores en el detalle de compra relacionado al id de orden
carritoArr.map( async x => {
var idp_d = x.id;
var nombre_p = x.nombre;  
var precio_d = x.precio;
var cant_d = x.cantidad;
await pool.query('INSERT INTO detallecompra (ido_d, idp_d, precio_d, cant_d) VALUES('+ lastId.insertId + ', ' + x.id +', ' + x.precio + ', ' + x.cantidad + ')')
})
console.log('vaciar');
delete req.session.cart;
// Muestra mensaje cuando se finaliza la compra, luego de mostrarlo vuelve a 0
req.session.success = 1;
console.log('vaciado');
console.log(req.session.cart);
res.redirect('/carrito/');
});



module.exports = router;


// SELECT ordencompra.fecha_o as FECHA,
// 		usuarios.usuario_u as USUARIO,
//         productos.nombre_p as ARTICULO,
// 	   detallecompra.cant_d as CANTIDAD,
//        detallecompra.precio_d as PRECIO
       
       
// FROM ordencompra INNER JOIN detallecompra ON ordencompra.id_o = detallecompra.ido_d
// 				 INNER JOIN usuarios ON usuarios.id_u = ordencompra.idu_o
//                  INNER JOIN productos ON detallecompra.idp_d = productos.id_p
// WHERE ordencompra.id_o = 18