const express = require('express');
const router = express.Router();
const pool = require('../db/Index');

//Layout para comparar
router.get('/productos',  (req,res) => {
    let logger = {
      "logged" :  req.session.log,
      };
    res.render('productos/prueba', { title : 'Cat Glam · Prueba', logger:logger});
} );


 //Filtro de Categorías
router.get('/:id?', async (req,res) => {
    let logger = {
      "logged" :  req.session.log,
      };
    const categorias = await pool.query('SELECT id_c, nombre_c FROM categorias INNER JOIN productos ON categorias.id_c = productos.categoria_p GROUP BY id_c');
    let productos;
    if (req.params.id) {
      productos = await pool.query('select * from productos where categoria_p = ' + req.params.id);
    } else {
      productos = await pool.query('select * from productos ORDER BY categoria_p');
    }
    console.log(categorias);
    res.render('productos/productos', {title : 'Cat Glam · Productos', productos, categorias, logger:logger})
})


//Prueba modificar BD
router.get('/productos/subir', (req, res) => {
    let logger = {
      "logged" :  req.session.log,
      };
    res.render('productos/subirproductos', {title : 'Cat Glam · Subir Productos', logger:logger})
})

router.get('/detalle/:id', async (req,res) => {
    let logger = {
      "logged" :  req.session.log,
      };
    console.log(req.params);
    let id = req.params.id;
    // {id : 'numero'}
    let producto = await pool.query('select * from productos where id_p='+id);
    let nombre = producto[0].nombre_p;
    console.log(producto);
    res.render('productos/producto', {title : 'Cat Glam · ' + nombre, producto:producto, logger:logger});
})



module.exports = router;