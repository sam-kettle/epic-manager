const express = require('express')
const router = express.Router();
const Message = require('../models/message')


router.get('/', (req, res) => {
    Message.returnAll().then((messages) => {
        res.render('pages/message-board', { 
            headertitle: "Message Board || Epic Manager",
            messages: messages,
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

router.get('/add', (req, res) => {
    res.render('pages/add-message', { 
        headertitle: "Add Message || EPIC Manager"
    })
})

module.exports = router