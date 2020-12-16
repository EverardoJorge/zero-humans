/* jshint node: true */
'use strict';
const express = require('express');
const app = express();
app.use(require('./fb.routes'));
app.use(require('./pages.routes'));
module.exports = app;