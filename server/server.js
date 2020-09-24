require('./config/config');


const express = require('express');
const mongoose = require('mongoose');
const app = express();


const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(require('./routes/usuario'));


mongoose.connect(process.env.URLDB + '', { useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log('Base de datos ONLINE');
    }
});

app.listen(process.env.PORT, () => {
    console.log("Escuchando en el puerto:", process.env.PORT);
});