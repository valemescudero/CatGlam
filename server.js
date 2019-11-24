const express = require('express');
const exphbs = require('express-handlebars');
const routesHome = require('./Routes/home');
const routesProductos = require('./Routes/productos');
const bodyParser = require('body-parser');
const morgan = require('morgan'); // Se utiliza para registrar los detalles de las solicitudes (req) de login
const path = require('path');

// Inicialización
const app = express();

//settings del servidor
const port = process.env.port || 3000;
app.set('Views', path.join(__dirname, 'Views'));
app.use(express.static(path.join(__dirname, 'Public')));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('Views'), 'Layouts'),
    partialsDir: path.join(app.get('Views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars'),
}));
app.set('view engine', '.hbs');


//app.use de norutas
app.use(express.json());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.urlencoded({
    extended: false
}));

//app.use de rutas
app.use("/", routesHome);
app.use("/productos", routesProductos); 


app.listen(port, () => { console.log('listening on port: '+ port)});