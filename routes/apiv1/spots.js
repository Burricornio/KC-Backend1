"use strict";

const express = require('express');
const router = express.Router();
const datos = require('../../spotsIniciales.json');

const Spot = require('../../models/Spot')


// GET /
router.get('/', (req, res, next) => {

        // creamos los filtros por nombre y precio
        const name = req.query.name;
        const sell = req.query.sell;
        const tags = req.query.tags;
        const price = parseInt(req.query.price);

        const skip = parseInt(req.query.skip);
        const limit = parseInt(req.query.limit);
    
        const filter = {};
    
        if (name) {
            filter.name =  new  RegExp('^' +   req.query.name,   "i");
        }

        if (sell) {
            filter.sell =  sell;
        }

        if (tags) {
            filter.tags =  tags;
        }

        if (price) {

            let range = req.query.price.split('-');
            console.log(range);
            console.log(range.length);

            if (range.length === 1) {

                filter.price = range[0];

            }  else if (range.length === 2) {

                if (!range[0]) {
                    filter.price = {$lt: range[1]};
                }
                else if (!range[1]) {
                    filter.price = {$gt: range[0]};
                }
                else {
                    filter.price = {$gte: range[0], $lte: range[1]};
                }

            }

        }
    
      // recuperar una lista de agentes
      Spot.list( filter, skip, limit, (err, lista) => {
          if (err) {
              console.log('Error', err);
              next(err); // para que retorne la página de error
              return;
          }
          res.json({ success: true, rows: lista});
      })
    });


// POST / 
// Crear un anuncio
router.post('/', (req, res, next) => {
    console.log(req.body);
    // creamos un nuevo anuncio
    // lo guardamos en la BBDD
    const spot = new Spot(req.body);

    //lo guardamos en la BBDD
    spot.save((err, spotGuardado) => {
        if (err) {
            console.log('Error', err);
            next(err); // para que retorne la página de error
            return;
        }
        res.json({ success: true, result: spotGuardado});

    })
});

// PASAMOS PARÁMETROS
router.get('/:filtro?', (req, res, next) => {
    var filtro = req.params.filtro;
    for (var i in datos.spots) {
        if (datos.spots[i].name === filtro) {
            res.send(datos.spots[i]);
        }
    } 
  });

module.exports = router;
    