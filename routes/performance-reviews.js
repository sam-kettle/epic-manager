const express = require('express')
const router = express.Router()
const Review = require('../models/review')

router.get('/', (req, res) => {
    res.send('On the performance review route')
})

router.get('/add', (req, res) => {
    res.render('pages/add-review', { 
        headertitle: "Add new review || EPIC Manager"
    })
})

module.exports = router