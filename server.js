const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const morgan = require('morgan'); // Se utiliza para registrar los detalles de las solicitudes (req) de login
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Rutas
const routesHome = require('./Routes/home');
const routesProductos = require('./Routes/productos');
const routesMicuenta = require('./Routes/micuenta');
const usuarioRouter = require('./Routes/usuario');
const path = require('path');

// Inicialización
const app = express();

// Settings del servidor
const port = process.env.port || 3000;
app.set('Views', path.join(__dirname, 'Views'));
app.use(express.static(path.join(__dirname, 'Public')));
app.engine('.hbs', exphbs({
    defaultLayout: 'layout',
    layoutsDir: path.join(app.get('Views'), 'Layouts'),
    partialsDir: path.join(app.get('Views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars'),
}));
app.set('view engine', '.hbs');


// app.use de norutas
app.use(express.json());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
                  secret : 'catglam',
                  saveUninitialized: true,
                  resave: false,
                  }))





// app.use de rutas
app.use("/", routesHome);
app.use("/productos", routesProductos); 
app.use("/", routesMicuenta); 
app.use('/', usuarioRouter); // solo pueden acceder a esta ruta usuarios que esten logueados :D


// router.get('/',  (req,res) => {
//     let logger = {
//       "logged" :  req.session.log,
//       };
//       console.log (logger);
//   } );
app.listen(port, () => { console.log('listening on port: '+ port)});