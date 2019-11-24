const express = require('express');
const router = express.Router();
const pool = require('../db/Index');

router.get('/',  (req,res) => {
 //ya está direccionado a productos por el servidor x eso es '/'
    res.render('productos/productos');
} );


router.get('/productos', async (req,res) => {
    const productos = await pool.query('select * from productos');
    console.log(productos);
    res.render('productos/prueba', {productos})
})

router.get('/productos/subir', (req, res) => {
    res.render('productos/subirproductos')
})

// los datos que manda el front, llega desde el request en el body con los nombres indicados en
// name del input. vos creas objeto y asocias esos valores
router.post('/productos/subir',async (req,res) => {
    console.log("hasta acalegos");
    console.log(req.body);
    let nuevoProducto = {
        nombre_p: req.body.pepito,
        descripcion_p: req.body.Descripcion,
        precio_p: req.body.Precio,
        stock_p: req.body.Stock,
        imagen_p: req.body.Imagen,
    }
    console.log(req);
    await pool.query('insert into productos set ?', [nuevoProducto]);
    res.send('Received');
})

module.exports = router;