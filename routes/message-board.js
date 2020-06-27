const express = require('express')
const router = express.Router();


router.get('/', (req, res) => {
    res.render('pages/message-board', { 
        headertitle: "EPIC Manager || Message Board"
    })
})


module.exports = router;