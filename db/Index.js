const mysql = require("mysql");
const promisify = require("util").promisify;
const {database} = require('../config/keys'); // práctica de seguridad


const pool =  mysql.createPool(database);

pool.getConnection((err, connection) => {
    console.log(database)
    if(err) {
        console.log(database);
        console.log(err);
    }
    if(connection) {
        connection.release();
        console.log('db está conectada');
    }
    return;
})
pool.query = promisify(pool.query); // sobreescribí con los mecanismos de promesas porque no los tiene por defecto



module.exports = pool;