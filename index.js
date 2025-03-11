const exp = require('express');
const enrutamiento = require('./routes/route.js');
const path = require('path');
require('dotenv').config();

const app = exp();

app.set('view engine', 'ejs');

app.use(exp.json()); // para que pueda recibir datos en formato json
app.use(exp.urlencoded({extended: false}));  // para que pueda recibir datos de formularios

app.get('/', function(req, res){
    res.render('pages/index' );
});

app.get('/about', function(req, res){
    res.render('pages/about');
}
);

app.use('/v1', enrutamiento);

app.listen(process.env.PORT, () => {
    console.log(`Servidor en linea, puerto ${process.env.PORT}`);
});