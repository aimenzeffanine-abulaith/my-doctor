const express = require('express');
require('dotenv').config();
const routes = require('./routes');



const port = process.env.PORT || 5000

const app = express();

app.use('/', routes)

app.listen(port, () => {
    console.log('express is running on port ' + port)
})