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
        errors: undefined
    })
})

router.post('/register', (req, res) => {
    const { name, email, password, password2, isManager } = req.body
    
    // Simple validation
    let errors = []
    if (!name || !email || !password || !password2 || !isManager) {
        errors.push({ msg: 'You must complete all fields to register' })
    }
    if (password !== password2) {
        errors.push({ msg: 'Your passwords must match' })
    }
    if (password.length < 8) {
        errors.push({ msg: 'Password must be at least 8 characters long' })
    }
    if (errors.length > 0) {
        res.render('pages/register', {
            headertitle: 'Register || EPIC Manager',
            errors: errors
        })
    } else {
        res.send('Success')
    }
})

module.exports = router