const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let InventoryItem = new Schema({
    title: {
        type: String
    },
    group: {
        type: String
    }
});
module.exports = mongoose.model('InventoryItem', InventoryItem);