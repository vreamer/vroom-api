const Inventory = require('./inventory.model')
const _ = require('lodash')

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
            const total = _.sumBy(items, 'amount')
            return {
                description,
                amount: total
            }
        })
        .value()
}

exports.getInventoryFor = getInventoryFor