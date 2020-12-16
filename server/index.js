/* jshint node: true */
'use strict';
const express = require('express');
const app = express();
const morgan = require('morgan');
const config = require('../settings/index');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({
    extended: false
}));

/**
 * GLOBAL ROUTES
 */
app.use(require('./routers/index.routes'));

/**
 * CONECTION TO DB
 */

mongoose.connect(config.DB_ADDRESS, { useNewUrlParser: true, useCreateIndex: true }, (err, res) => {
    if (err) throw err;
    console.log('*******************Conection Success************')
});

app.listen(config.PORT, () => {
    console.log(`Server Running on te ${config.PORT}`);
});