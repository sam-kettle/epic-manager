const express = require('express')
const router = express.Router()
const Review = require('../models/review')
const { ensureAuthenticated } = require('../config/auth')

router.get('/', ensureAuthenticated, (req, res) => {
    res.render('pages/performance-review', {
        headertitle: 'Performance reviews || EPIC Manager', 
        reviewActive: 'active', messageActive: '', homeActive: ''
    })
})

router.get('/add', ensureAuthenticated, (req, res) => {
    res.render('pages/add-review', { 
        headertitle: "Add new review || EPIC Manager",
        reviewActive: 'active', messageActive: '', homeActive: ''
    })
})

module.exports = router