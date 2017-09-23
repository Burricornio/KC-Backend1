"use strict";

const mongoose = require('mongoose');

// definir un esquema
var spotSchema  = mongoose.Schema({
    name: {
        type: String,
        index: true
    },
    sell: {
        type: Boolean,
        index: true
    },
    price: {
        type: Number,
        index: true
    },
    description: String,
    photo: String,
    tags: [String] 
});

// Añadimos método estático 
spotSchema.statics.list = function( filter, skip, limit, callback) {
   const query = Spot.find(filter);
   query.skip(skip);
   query.limit(limit);
   query.exec(callback); // ejecutamos la consulta
};


// crear el modelo
const Spot = mongoose.model('Spot', spotSchema);

module.exports = Spot;