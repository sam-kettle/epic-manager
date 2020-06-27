const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')

// Express config
const app = express();
app.set('view engine', 'ejs')
app.use('/static', express.static(path.join(__dirname, 'static')))

// Mongoose connection
mongoose.connect('mongodb://localhost/epicmanagerdb', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

// Check for database connection errors
db.on('error', (err) => { console.log(err) })
db.once('open', () => { console.log('Successfully connected to database.') })

// Middleware configuration
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Home route
app.get('/', (req, res,) =>{
    res.render('pages/index', { headertitle: 'EPIC Manager Home'})
})

// Message board route handler
const messageBoard = require('./routes/message-board')
app.use('/message-board', messageBoard)

// Run server
const port  = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})