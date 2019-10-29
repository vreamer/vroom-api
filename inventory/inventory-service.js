const Inventory = require('./inventory.model')
const InventoryItem = require('./inventory-item.model')
const _ = require('lodash')


const getAmountFromSum = (sum) => {
    if (Number.isInteger(sum)) {
        return sum
    }
    return Number.parseFloat(sum).toFixed(1)
}

const getInventoryFor = async (date) => {
    const inventories = await Inventory.find(
        { date: new Date(date) },
        null,
        { sort: 'description' }
    )
    return _(inventories)
        .groupBy('description')
        .toPairs()
        .map(([description, items]) => {
            const total = getAmountFromSum(_(items).sumBy('amount'))
            return [
                description,
                total
            ]
        })
        .fromPairs()
        .value()
}

const getInventoryWithDefault = async (date) => {
    const totalInventory = await getInventoryFor(date)
    const inventoryItems = await InventoryItem.find().sort('displayOrder')

    return inventoryItems
        .map(i => {
            return {
                description: i.title,
                amount: totalInventory[i.title] || 0,
                group: i.group,
                hasStockIn: i.hasStockIn,
                stepAmounts: i.stepAmounts
            }
        })
}

exports.getInventoryWithDefault = getInventoryWithDefault