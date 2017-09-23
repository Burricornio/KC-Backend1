"use strict";

const mongoose = require('mongoose');
const conn = mongoose.connection;
const Spot = require('../models/Spot');
const datos = require('../spotsIniciales.json');

mongoose.connect('mongodb://localhost/nodepop');


  // Si funciona lo comunicamos
    conn.once('open', () => {
      console.log('Conectado a MongoDB.')
      //conn.dropDatabase('nodepop');
      Spot.deleteMany({}, () => {
        Spot.insertMany(datos.spots);
      });
  })

