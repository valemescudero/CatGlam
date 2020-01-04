const express = require('express');
const router = express.Router();
const pool = require('../db/Index')

const carritoAux = {
    '9': { id: '9', nombre: 'Aros Snake', precio: 200, cantidad: 2 },
    '10': { id: '10', nombre: 'Aros Frutitas', precio: 250, cantidad: 3 }
  }

router.post('/addOrder', async (req, res) => {
var userID = req.body.userId;
//await pool.query('INSERT INTO ordencompra (idu_o) VALUES (' + userID + ')')
const lastId = await pool.query('INSERT INTO ordencompra (idu_o) VALUES (' + userID + ')');
console.log('control');
console.log(userID);

const carritoArr = (Object.values(carritoAux));

carritoArr.map( async x => {
var idp_d = x.id;
var nombre_p = x.nombre;  
var precio_d = x.precio;
var cant_d = x.cantidad;
await pool.query('INSERT INTO detallecompra (ido_d, idp_d, precio_d, cant_d) VALUES('+ lastId.insertId + ', ' + x.id +', ' + x.precio + ', ' + x.cantidad + ')')
})

res.status(200).json({ 
    "userID":userID,
    "lastID": lastId.insertId,
    "carrito": carritoAux,
    "carritoArr": (Object.values(carritoAux))
})


//por cada producto que haya en la orden, haces un insert a la db en detalle con el lastID
// var idp_d = req.body.idpD;
// var precio_d = req.body.precioD;
// var cant_d = req.body.cantD;
// await pool.query('INSERT INTO detallecompra (ido_d, idp_d, precio_d, cant_d) VALUES('+ '')')



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