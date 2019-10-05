const express = require('express');
const getInventoryGroups = require('./inventory-groups-service')

const routes = express.Router()

routes.route('/').get(function (req, res) {
    res.json(getInventoryGroups());
});

module.exports = routes