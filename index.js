const express = require('express')
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
app.use(express.urlencoded({ extended: true }))

// Home route
app.get('/', (req, res,) =>{
    res.render('pages/index', { 
        headertitle: 'EPIC Manager Home',
        reviewActive: '', messageActive: '', homeActive: 'active'
    })
})

// Message board route handler
app.use('/message-board', require('./routes/message-board'))
// Performance review route handler
app.use('/performance-reviews', require('./routes/performance-reviews'))
// Users route handler
app.use('/users', require('./routes/users'))

// Run server
const port  = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})