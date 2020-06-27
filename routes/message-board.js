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

router.get('/add', (req, res) => {

    res.render('pages/add-message', { 
        headertitle: "Add Message || EPIC Manager"
    })
})

module.exports = router;