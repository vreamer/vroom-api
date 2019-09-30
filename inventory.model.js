const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Inventory = new Schema({
    description: {
        type: String
    }
});
module.exports = mongoose.model('Inventory', Inventory);