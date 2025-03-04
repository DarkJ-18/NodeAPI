const { version } = require("mongoose");
const mongoose = require("../config/connection");

// los nombres y tipos deben coincidir con los datos en la bd que ya se encuentran almacenados
const schemaProducto = new mongoose.Schema({
  referencia: {
    type: Number,
    required: [true, 'La referencia es obligatoria'],
  },
  nombre: {
    type: String,
    minlength: [3, 'El nombre debe tener al menos 3 caracteres'],
    required: [true, 'El nombre es obligatorio'],
  },
  descripcion: {
    type: String,
    required: [true, 'La descripcion es obligatoria'],
  },
  precio: {
    type: mongoose.Types.Decimal128,
    default: [0.0, 'El precio por defecto es cero'],
    min: [0, 'El precio minimo es cero'],
  },
  stock: {
    type: Number,
    default: [0, 'El stock por defecto es cero'],
    min: [0, 'El stock minimo es cero'],
  },
  imagen: {
    type: String,
    required: [true, 'No existe la imagen o ruta de la imagen'],
  },
  habilitado: {
    type: Boolean,
    default: true
  },
}, {versionKey:false});

const modeloProducto = mongoose.model("productos", schemaProducto);

module.exports = modeloProducto; 