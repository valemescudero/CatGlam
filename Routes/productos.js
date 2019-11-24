const express = require('express');
const router = express.Router();
const pool = require('../db/Index');

//Layout para comparar
router.get('/productos',  (req,res) => {
    res.render('productos/prueba');
} );


 //ya está direccionado a productos por el servidor x eso es '/'
router.get('/', async (req,res) => {
    const productos = await pool.query('select * from productos');
    console.log(productos);
    res.render('productos/productos', {productos})
})


router.get('/:id', (req,res,next)=> {
    console.log(req.params);
    res.render('productos/producto')
    // select * from productos where id = 3
    // select * from productos where id = 'pepe'
    // no hay resultados
    // let obj = [
    //     { id: 1, nombre: 'Vino', descripcion: 'vino de calidad', precio: 200, stock: 10 },
    // ]
    // res.render('productos',{info : obj});
})



router.get('/productos/subir', (req, res) => {
    res.render('productos/subirproductos')
})
router.get('/:id', (req,res,next)=> {
    console.log(req.params);
    // {id : 'numero'}
    let consulta = "select * from productos where id ="+req.params.id;
    console.log(consulta);
    // select * from productos where id = 3
    // select * from productos where id = 'pepe'
    // no hay resultados
    // let obj = [
    //     { id: 1, nombre: 'Vino', descripcion: 'vino de calidad', precio: 200, stock: 10 },
    // ]
    // res.render('productos',{info : obj});
})

// los datos que manda el front, llega desde el request en el body con los nombres indicados en
// name del input. vos creas objeto y asocias esos valores
router.post('/productos/subir',async (req,res) => {
    console.log("Control");
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