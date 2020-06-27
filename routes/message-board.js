const express = require('express')
const router = express.Router();


router.get('/', (req, res) => {
    res.render('pages/message-board', { 
        headertitle: "Message Board || Epic Manager"
    })
})

router.get('/add', (req, res) => {
    res.render('pages/add-message', { 
        headertitle: "Add Message || EPIC Manager"
    })
})

module.exports = router;