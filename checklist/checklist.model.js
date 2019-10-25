const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ChecklistStep = new Schema({
    title: {
        type: String
    },
    image: {
        type: String
    },
    description: {
        type: String
    }
})
let Checklist = new Schema({
    title: {
        type: String
    },
    steps: {
        type: [ChecklistStep]
    }
});
module.exports = mongoose.model('Checklist', Checklist);