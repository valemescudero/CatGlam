const express = require('express');
const router = express.Router();
const pool = require('../db/Index');

router.get('/micuenta/logout', async(req,res,next)=> {
    req.session.destroy(); // destruye la sesion DEL 
    res.redirect('/');
})

router.get('/micuenta',  (req,res) => {
       res.render('ingreso');
   } );

router.get('/micuenta/registro',  (req,res) => {
       res.render('registro');
   } );

// Cliente --> servidor (formulario : method | action)
router.post('/micuenta/registro', async(req,res,next)=> {
   
    console.log(req.body); // params
    // /login/1 req.params

    // req : Request (todo lo que llega al servidor)
    //  params : contiene informacion de la URL
    //  body : contiene informacion de parametros que se envian por POST
        // --> {propiedad1 : nombre, propiedad2 : passwword}
        // --> {usuario_u : 'franco', password_u : '1234'}
    let usuario_u = req.body.usuario;
    let password = req.body.password_u;
    let data = await registro(usuario_u,password);
    console.log(req.body);
    if(data.length == 1) {
        // permisos_u : nombre del campo
        // [
            // {nombre_u, permisos_u, mail_u}
        //]
        let permisos = data[0].permisos_u;
        let id = data[0].id_u; // devuelve el id del usario  
        console.log(permisos);
        console.log(id)
        if(permisos == 0) {
            // no es admin
            req.session.idUsuario = id;
        } else {
            // si es admin
            // crear una variable de sesion de nombre : idAdmin
            req.session.idAdmin = id;

        }


        // REQ.BODY.name
        // REQ.PARAMS.
        // el id es el identificador unico 
       
        res.redirect('/perfil');

    } else {
        res.render('registro', {message : 'Usuario o contraseña incorrectos'})
    }

});

async function registro(usuario,password) {
    // select * from usuarios where usuario_u = usuario and password_u = password

    let query = "select * from usuarios where usuario_u = ? and password_u = ?";
    const rows = await pool.query(query,[usuario,password])
    return rows;


}

module.exports = router;