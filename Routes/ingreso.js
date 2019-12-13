const express = require('express');
const router = express.Router();
const pool = require('../db/Index');

// Cliente --> servidor (formulario : method | action)

// INGRESO
router.get('/',  (req,res) => {
    let logger = {
      "logged" :  req.session.log,
      };
      if (req.session.log == true) {
    res.redirect('/micuenta');
      } else {
    res.render('ingreso', {title : 'Cat Glam · Ingresá', logger:logger});
}});

router.post('/', async(req,res,next)=> {
    console.log(req.body.usuario);
    let usuario = req.body.usuario;
    let password = req.body.password;
    let data = await ingreso(usuario,password);
    console.log(data);
    if(data.length == 1) {   
        req.session.log = true;
    let logger = {
        "logged" :  req.session.log,
        };
        let permisos = data[0].permisos_u;
        let id = data[0].id_u;
        req.session.nombre = data[0].nombre_u;
        console.log(permisos);
        console.log(id);
        if(permisos !== 1) {
            // req -->body --> {nombre :, apellido : 
            // req--> sessio --> {idUsuario : 2}}
            req.session.logUsuario = true;
            req.session.idUsuario = id; // Variable de nombre de sesión
            console.log("Variable de sesion: " + req.session.idUsuario);
            res.redirect('/micuenta');

        } else {
            req.session.logAdmin = true;
            req.session.idAdmin = id;
            console.log("Variable de sesion admin: " + req.session.idAdmin);
            res.redirect('/micuenta');
        }
    } else {
        res.render('ingreso', {textcolor : 'text-danger', message : 'Usuario o contraseña incorrecta'})

}});

async function ingreso(usuario,password) {
    let query = 'select * from usuarios where usuario_u = ? and password_u = ?';
    const rows = await pool.query(query,[usuario,password])
    return rows;
}

// REGISTRO
router.get('/registro',  (req,res) => {
    let logger = {
      "logged" :  req.session.log,
      };
    res.render('registro', {title : 'Cat Glam · Registrate', logger:logger});
} );

router.post('/registro',async (req,res) => {
    console.log(req.body);
    let nuevoUsuario = {
        nombre_u: req.body.nombre,
        apellido_u: req.body.apellido,
        usuario_u: req.body.usuario,
        password_u: req.body.password,
    }
    await pool.query('insert into usuarios set ?', [nuevoUsuario]);
    res.render('ingreso', {textcolor : 'text-success', message : 'Usuario creado exitosamente'})
})


module.exports = router;