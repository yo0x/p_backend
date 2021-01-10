const mongoose = require('mongoose');
const projectsModel = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('projectsM', projectsModel);