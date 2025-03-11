const router = require('express').Router();
const controladorProductos = require('../src/controller/producto.controller.js');
const controladorVendedor = require('../src/controller/vendedor.controller.js');


/* Rutas productos */
router.get('/productos', controladorProductos.consultar);
router.get('/productos', controladorProductos.consultarPorReferencia);
router.post('/productos', controladorProductos.createproduct);
router.post('/productos', controladorProductos.updateProduct);
router.post('/productos',controladorProductos.deleteProduct);

router.get('/vendedores', controladorVendedor.registrar);

module.exports = router;