const InventoryItem = require('./inventory-item.model')
const groupBy = require('lodash.groupby');

const getInventoryGroups = (callback) => {
    InventoryItem.find(function (err, inventoryItems) {
        if (err) {
            console.log(err);
        } else {
            const inventoryGroups = groupBy(inventoryItems, i => i.group)
            callback(inventoryGroups)
        }
    });
}

const getInventoryItems = (callback) => {
    InventoryItem.find(function (err, inventoryItems) {
        if (err) {
            console.log(err);
        } else {
            callback(inventoryItems)
        }
    });
}

module.exports = getInventoryGroups
module.exports = getInventoryItems