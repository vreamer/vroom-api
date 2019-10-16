const express = require('express');
const Inventory = require('./inventory.model')
const InventoryService = require('./inventory-service')

const inventoryRoutes = express.Router()

inventoryRoutes.route('/:date').get(async function (req, res) {
    const inventories = await InventoryService.getInventoryFor(req.params.date)
    res.json(inventories)
});

inventoryRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Inventory.findById(id, function (err, inventory) {
        res.json(inventory);
    });
});

inventoryRoutes.route('/add').post(function (req, res) {
    let inventories = req.body.inventories.map(inventory => new Inventory(inventory));
    Inventory.insertMany(inventories)
        .then(_ => {
            res.status(200).json({ 'inventory': 'inventory added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new inventory failed');
        });
});

module.exports = inventoryRoutes