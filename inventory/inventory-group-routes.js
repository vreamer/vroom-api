const express = require('express');
const InventoryItemService = require('./inventory-items-service')

const routes = express.Router()

routes.route('/').get(function (req, res) {
    InventoryItemService.getInventoryGroups((groups) => res.json(groups))
});

module.exports = routes