"use strict";

// requerimos mongoose
const mongoose = require('mongoose');

// creamos un objeto de conexion
const conn = mongoose.connection;

    // creamos un evento llamando al eventEmitter de mongoose por si hay un error
    conn.on('error', err => {
        console.log('Error de conexión', err);
        // cerramos el programa y pasamos el parametro 1 de error
        process.exit(1);
    })
    // Si funciona lo comunicamos
    conn.once('open', () => {
        console.log('Conectado a MongoDB.')
    })

// Creamos la conexion. La cadena de conexion es como una url pero con protocolo mongoDB - cursonode = nombreBBDD
mongoose.connect('mongodb://localhost/nodepop');


