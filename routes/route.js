const router = require('express').Router();
const controladorProductos = require('../src/controller/producto.controller.js');

/* Rutas productos */
router.get('/productos', controladorProductos.consultar);
router.get('/productos', controladorProductos.consultarPorReferencia);

module.exports = router;