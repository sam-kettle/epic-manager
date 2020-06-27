const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')

// Express config
const app = express();
app.set('view engine', 'ejs')
app.use('/static', express.static(path.join(__dirname, 'static')))


// Middleware configuration
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Home route
app.get('/', (req, res,) =>{
    res.render('pages/index', { headertitle: 'EPIC Manager Home'})
})

// Run server
const port  = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})