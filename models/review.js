const mongoose = require('mongoose');

// Define Schema
let reviewSchema = mongoose.Schema({
    employee: {
        type: String,
        required: true
    },
    reviewer: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    objectives: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
    
})

// Static methods
reviewSchema.statics.returnAll = function() {
    return mongoose.model('Review').find()
}

let Review = module.exports = mongoose.model('Review', reviewSchema)