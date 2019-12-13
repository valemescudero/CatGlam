const express = require('express');
const router = express.Router();
const pool = require('../db/Index');

// router.get('/micuenta/logout', async(req,res,next)=> {
//     req.session.destroy(); // destruye la sesion DEL 
//     res.redirect('/');
// })
   
// Cliente --> servidor (formulario : method | action)

// INGRESO
router.get('/micuenta',  (req,res) => {
    res.render('ingreso');
} );

router.post('/micuenta', async(req,res,next)=> {
    console.log(req.body.usuario);
    let usuario = req.body.usuario;
    let password = req.body.password;
    let data = await ingreso(usuario,password);
    console.log(data);
    if(data.length == 1) {   
        req.session.log = true;
        let permisos = data[0].permisos_u;
        let id = data[0].id_u;
        console.log(permisos);
        console.log(id);
        if(permisos == 0) {
            // req -->body --> {nombre :, apellido : 
            // req--> sessio --> {idUsuario : 2}}
            req.session.logUsuario = true;
            req.session.idUsuario = id; // Variable de nombre de sesión
            console.log("Variable de sesion: ",req.session.idUsuario)
        } else {
            req.session.logAdmin = true;
            req.session.idAdmin = id;
            console.log("Variable de sesion admin: ",req.session.idAdmin)
        }
        res.render('usuario', {message : 'Hola '+ usuario});

    } else {
        res.render('ingreso', {message : 'Usuario o contraseña incorrectos'})

}});

async function ingreso(usuario,password) {
    let query = 'select * from usuarios where usuario_u = ? and password_u = ?';
    const rows = await pool.query(query,[usuario,password])
    return rows;
}

// REGISTRO
router.get('/micuenta/registro',  (req,res) => {
    res.render('registro');
} );

router.post('/micuenta/registro',async (req,res) => {
    console.log("Control");
    console.log(req.body);
    let nuevoUsuario = {
        nombre_u: req.body.nombre,
        apellido_u: req.body.apellido,
        usuario_u: req.body.usuario,
        password_u: req.body.password,
    }
    await pool.query('insert into usuarios set ?', [nuevoUsuario]);
    res.send('Received');
})


module.exports = router;