const express = require('express')
const router = express.Router()
const Review = require('../models/review')

router.get('/', (req, res) => {
    res.render('pages/performance-review', {
        headertitle: 'Performance reviews || EPIC Manager', 
        reviewActive: 'active', messageActive: '', homeActive: ''
    })
})

router.get('/add', (req, res) => {
    res.render('pages/add-review', { 
        headertitle: "Add new review || EPIC Manager",
        reviewActive: 'active', messageActive: '', homeActive: ''
    })
})

module.exports = router