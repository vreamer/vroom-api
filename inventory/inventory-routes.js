const express = require('express');
const Inventory = require('./inventory.model')

const inventoryRoutes = express.Router()

inventoryRoutes.route('/:date').get(function (req, res) {
    Inventory.find({date: new Date(req.params.date)})
    .then(inventories => res.json(inventories))
    .catch(err => console.log(err))
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