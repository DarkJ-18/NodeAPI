const mongo = require('../config/connection');

const schemaVendedor = new mongo.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
    },
    documento: {
        type: String,
        minLength: [7, 'El documento debe tener al menos 7 caracteres'],
        maxLength: [10, 'El documento debe tener máximo 10 caracteres'],
        required: [true, 'El documento es obligatorio'],
    },
    ventas: {
        type: Number,
        default: 0,
        min: [0, 'Las ventas no pueden ser negativas'],
    },
    userId: {
        type: mongo.Schema.Types.ObjectId,
        ref: 'usuario',
    }
},{versionKey:false});

const modeloVendedor = mongo.model("vendedor", schemaVendedor);
module.exports = modeloVendedor;