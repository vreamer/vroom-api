const express = require('express');
const getInventoryGroups = require('./inventory-items-service')

const routes = express.Router()

routes.route('/').get(function (req, res) {
    getInventoryGroups((groups) => res.json(groups))
});

module.exports = routes