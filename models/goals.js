const mongoose = require('mongoose');
const goalsModel = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true
    },
    collapse_id: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('goalsM', goalsModel);