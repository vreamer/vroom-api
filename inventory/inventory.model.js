const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Inventory = new Schema({
    description: {
        type: String
    },
    amount: {
        type: Number
    },
    date: {
        type: Date
    }
});
module.exports = mongoose.model('Inventory', Inventory);