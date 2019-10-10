const express = require('express');
const InventoryItemService = require('./inventory-items-service')

const routes = express.Router()

routes.route('/').get(function (req, res) {
    InventoryItemService.getInventoryItems((items) => res.json(items))
});

routes.route('/add').post(function (req, res) {
    InventoryItemService.saveInventoryItem(req.body)
        .then(_ => {
            res.status(200).json({ 'inventory-item': 'inventory item added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new inventory item failed');
        });
})

module.exports = routes