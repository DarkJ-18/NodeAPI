const modeloProducto = require('../models/producto.model.js');

// Consultar todos los productos
exports.consultar = async (req, res) => {
    try {
        let listaProductos = await modeloProducto.find({});
        console.log(listaProductos);
        if (listaProductos) {
            //res.json(listaProductos);
            res.render('pages/index', {listaProductos})
        } else {
            res.json({error: 'No hay productos en la base de datos'});
        }
    } catch (error) {
        res.status(500).json({error: 'Error al consultar los productos'});
    }
};

// Consultar un producto por referencia
exports.consultarPorReferencia = async (req, res) => {
    try {
        let producto = await modeloProducto.findOne({"referencia": req.params.ref});
        console.log(producto);
        if (producto) {
            res.status(200).json(producto);
        } else {
            res.status(404).json({error: 'No se encontró el producto'});
        }
    } catch (error) {
        res.status(500).json({error: 'Error al consultar el producto'});
    }
}

// Crear un producto
exports.createproduct = async (req, res) => {
    try {
        const newproduct = {
            referencia: req.body.referencia,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            stock: req.body.stock,
            imagen: req.body.imagen,
            habilitado: true,
        };
        let insercion = await modeloProducto.create(newproduct);
        if (insercion) {
            res.status(200).json({mensaje: 'Producto agregado con éxito'});
        } else {
            res.status(400).json({error: 'Error al agregar el producto'});
        }
    } catch (error) {
        res.status(500).json({error: 'Error al agregar el producto'});
    }
}

// Actualizar un producto

exports.updateProduct = async (req, res) => {
    const productoEditato = {
        referencia: req.params.referencia,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        stock: req.body.stock,
        imagen: req.body.imagen,
        habilitado: true,
    };
    let Actualizacion = await modeloProducto.findOneAndUpdate({referencia:req.params.ref}, productoEditato);
    if(Actualizacion)
        res.status(200).json({mensaje: 'Producto actualizado con exito'});
    else
        res.status(404).json({error: 'Error al actalizar el producto'});
}


// Eliminar un producto

exports.deleteProduct = async (req, res) => {
    console.log(req.params.id, req.body.referencia)
    let Eliminacion = await modeloProducto.findOneAndDelete({referencia: req.params.id});
    if(Eliminacion)
        res.status(200).json({mensaje: 'Producto eliminado con exito'});
    else
        res.status(404).json({error: 'Error al eliminar el producto'});
}
