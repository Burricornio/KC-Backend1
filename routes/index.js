var express = require('express');
var router = express.Router();

const datos = require('../spotsIniciales.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nodepop' });
});

router.get('/articulos', (req, res, next) => {
  console.log(datos.spots)
  res.render('articulos', {
    spots: datos.spots,
    title: 'Articulos'

   });
});

module.exports = router;
