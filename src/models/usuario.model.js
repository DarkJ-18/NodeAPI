const mongo = require("../config/connection");

const schemaUsuario = new mongo.Schema({  
    correo: {
        type: String,
        required: [true, 'El email es obligatorio'],
        minLength:5
    },
    contrasena: {
        type: String,
        minLength: 7,
        required: [true, 'La contraseña es obligatoria'],
    },
    rol: {
        type: String,
        enum: ['invitado', 'vendedor', 'cliente'],
        default: 'invitado',
        required: [true, 'El rol es obligatorio'],
    },

},{versionKey:false});

const modeloUsuario = mongo.model("usuario", schemaUsuario);

module.exports = modeloUsuario;
