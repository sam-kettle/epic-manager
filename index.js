const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

// Express config
const app = express();

// Middleware configuration
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Home route
app.get('/', (req, res,) =>{
    res.send('Server running.');
})

// Run server
const port  = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})