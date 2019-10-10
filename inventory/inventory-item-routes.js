const express = require('express');
const getInventoryItems = require('./inventory-items-service')

const routes = express.Router()

routes.route('/').get(function (req, res) {
    getInventoryItems((items) => res.json(items))
});

module.exports = routes