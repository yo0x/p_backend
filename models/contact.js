const mongoose = require('mongoose');
const contactModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('contactM', contactModel);