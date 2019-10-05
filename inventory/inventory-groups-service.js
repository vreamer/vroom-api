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

module.exports = getInventoryGroups