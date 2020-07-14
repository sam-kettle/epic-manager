const express = require('express')
const router = express.Router();
const Message = require('../models/message')
const { ensureAuthenticated } = require('../config/auth')


router.get('/', ensureAuthenticated, (req, res) => {
    Message.returnAll().then((messages) => {
        res.render('pages/message-board', { 
            headertitle: "Message Board || Epic Manager",
            messages: messages,
            reviewActive: '', messageActive: 'active', homeActive: '', trackerActive: '',
            name: req.user.name
        })
    })
})

router.post('/', (req, res) => {
    const message = new Message({
        author: req.body.author,
        title: req.body.title,
        content: req.body.content,
    })
    message.save((err) => {
        if (err) { console.log(err) }
    })
    res.redirect('/message-board')
})

router.get('/add', ensureAuthenticated, (req, res) => {
    console.log(req.user)
    res.render('pages/add-message', { 
        headertitle: "Add Message || EPIC Manager",
        reviewActive: '', messageActive: 'active', homeActive: '', trackerActive: '',
        name: req.user.name
    })
})

module.exports = router