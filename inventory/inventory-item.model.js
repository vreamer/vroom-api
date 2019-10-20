const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let InventoryItem = new Schema({
    title: {
        type: String
    },
    group: {
        type: String
    },
    displayOrder: {
        type: Number
    },
    hasStockIn: {
        type: Boolean
    }
});
module.exports = mongoose.model('InventoryItem', InventoryItem);