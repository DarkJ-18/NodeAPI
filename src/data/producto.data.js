const Producto = require('../models/producto.model');

exports.createProductRecord = async (productInfo) => {
    try {
     return new Producto(productInfo).save();
    } catch (error) {
        return error;
    }
};

exports.findProduct = async (filter, projection) => {
    try {
            if (!projection) return await Producto.findOne(filter);
            else return await Producto.find(filter, projection);
        } catch (error) {
            return error;
        }
};


exports.updatePrductoRecord = async (filter, update) => {
    
};

exports.deleteProductoRecord = async (filter) => {

};
