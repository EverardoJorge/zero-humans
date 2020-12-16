/* jshint node: true */
'use strict';
require('dotenv').config();
module.exports = {
    PORT: process.env.PORT,
    FB_VERIFY_TOKEN: process.env.FB_VERIFY_TOKEN,
    DB_ADDRESS: process.env.DB_ADDRESS
}