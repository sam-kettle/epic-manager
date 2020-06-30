const express = require('express')
const router = express.Router()
const Review = require('../models/review')

router.get('/login', (req, res) => {
    res.render('pages/login', {
        headertitle: 'Login || EPIC Manager', 
    })
})

router.get('/register', (req, res) => {
    res.render('pages/register', {
        headertitle: 'Register || EPIC Manager', 
    })
})

router.post('/register', (req, res) => {
    console.log(req.body)
})

module.exports = router