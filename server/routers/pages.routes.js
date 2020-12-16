/* jshint node: true */
'use strict';
const express = require('express');
const app = express();
const pages = require('../controllers/pages.controller')


app.get('/', (req, res) => {
    pages.index(req, res);
})

module.exports = app;