
const express = require('express');
const router = express.Router();
const pool = require('../db/Index');

router.get('/logout', async(req,res,next)=> {
    req.session.destroy(); // destruye la sesion DEL 
    res.redirect('/');
})

router.get('/', async(req,res,next)=> {
    let logger = {
      "logged" :  req.session.log,
      };
    // el id es una pieza fundamental para hacer consultas de un usuario especifico
    // consulta para los datos personales del usuario y para las compras
    if(req.session.idUsuario) {
        // select * from usuarios where id_u = ?, [req.session.idUsuario]
        res.render('usuario', {message : 'Bienvenido Usuario ' + req.session.nombre, title : 'Cat Glam · Mi Cuenta', logger:logger});

    } else if (req.session.idAdmin) {
        const productos = await pool.query('select * from productos INNER JOIN categorias ON productos.categoria_p = categorias.id_c');
        console.log(productos);
        res.render('admin', {message : 'Bienvenido Admin ' + req.session.nombre, title : 'Cat Glam · Panel de Control', productos, logger:logger});
    }
    else
        {
        res.redirect('/ingreso');
    }
    // select * from usuarios where id_u = 1
})


router.post("/modificar/", async(req, res) => { console.log(req.body)
  try {
     await pool.query("UPDATE productos SET nombre_p = \""
    + req.body.nombre + "\" WHERE id_p = " + req.body.id);
    console.log(asd)
    res.status(200)
  } catch (error) {
      console.log("asda")
    res.status(400).json({ error: error})
  }
})
router.delete("/eliminar/:id", async(req,res) => { console.log("asdasd")
  try {
    await pool.query("DELETE FROM productos WHERE id_p = " +req.params.id);
    console.log("loborre");
  } catch (error) {
    alert("MAL")
  }
})

module.exports = router;