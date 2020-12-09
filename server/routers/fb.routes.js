const express = require('express');
const app = express();
const fb = require('../controllers/fb.controller');


app.get('/webhook/', (req, res) => {
    fb.webhook(req, res);
})

module.exports = app;