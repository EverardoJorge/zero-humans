/* jshint node: true */
'use strict';
const config = require('../../settings/index');

const index = (req, res) => {
    console.log("request");
    res.send('Hello World')
}

module.exports = {
    index
}