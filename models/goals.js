const mongoose = require('mongoose');
const goalsModel = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('goalsM', goalsModel);