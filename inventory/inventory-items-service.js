const InventoryItem = require('./inventory-item.model')
const _ = require('lodash')

const getInventoryGroups = (callback) => {
    InventoryItem.find(function (err, inventoryItems) {
        if (err) {
            console.log(err);
        } else {
            const sortedInventoryGroups = _(inventoryItems)
                .sortBy('title')
                .groupBy('group')
                .toPairs()
                .sortBy(g => g[0])
                .fromPairs()
                .value();

            callback(sortedInventoryGroups)
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

const saveInventoryItem = (inventoryItem) => {
    const newInventoryItem = new InventoryItem(inventoryItem)
    return newInventoryItem.save()
}

exports.getInventoryItems = getInventoryItems
exports.getInventoryGroups = getInventoryGroups
exports.saveInventoryItem = saveInventoryItem