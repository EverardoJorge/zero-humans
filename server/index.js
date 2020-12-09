/* jshint node: true */
'use strict';
const express = require('express');
const app = express();
const morgan = require('morgan');
const config = require('../settings/index');
const bodyParser = require('body-parser');

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(require('./routers/index.routes'));


app.listen(config.PORT, () => {
    console.log(`Server Running on te ${config.PORT}`);
});