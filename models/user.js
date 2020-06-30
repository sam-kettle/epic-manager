const mongoose = require('mongoose');

// Define Schema
let userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isManager: {
        type: Boolean,
        required: true
    }
})

let User = module.exports = mongoose.model('User', userSchema)