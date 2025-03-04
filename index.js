const exp = require('express');
const enrutamiento = require('./routes/route.js');
require('dotenv').config();

const app = exp();

app.use(exp.json()); // para que pueda recibir datos en formato json
app.use(exp.urlencoded({extended: false}));  // para que pueda recibir datos de formularios

app.use('/v1', enrutamiento);

app.listen(process.env.PORT, () => {
    console.log('Servidor en linea, puerto 9292');
});