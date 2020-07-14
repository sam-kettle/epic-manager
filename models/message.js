const mongoose = require('mongoose');

// Define Schema
let messageSchema = mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    isManager: {
        type: Boolean,
        required: true
    }
})

// Static methods
messageSchema.statics.returnAll = function() {
    return mongoose.model('Message').find()
}

let Message = module.exports = mongoose.model('Message', messageSchema)