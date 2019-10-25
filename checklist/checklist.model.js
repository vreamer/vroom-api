const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Checklist = new Schema({
    title: {
        type: String
    },
    steps: {
        type: [String]
    }
});
module.exports = mongoose.model('Checklist', Checklist);