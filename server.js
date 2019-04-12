/*---------- Reqirement  ----------*/
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// Import
const config = require('./config/keys');
const index = require('./routes/index');



/*---------- Initialize  ----------*/
const app = express();
app.use(bodyParser.json());



/*---------- MongoDB  ----------*/
// database goes here



/*---------- Routing  ----------*/
// GET
// display home
app.use('/', index);



/*---------- Run Server  ----------*/
app.listen(config.port, () => {
    console.log('server is running on port ' + config.port);
})