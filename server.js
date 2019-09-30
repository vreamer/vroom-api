require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Inventory = require('./inventory.model')

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/inventory',
    { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
})

const inventoryRoutes = express.Router()
inventoryRoutes.route('/').get(function (req, res) {
    Inventory.find(function (err, inventories) {
        if (err) {
            console.log(err);
        } else {
            res.json(inventories);
        }
    });
});

inventoryRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Inventory.findById(id, function (err, inventory) {
        res.json(inventory);
    });
});

inventoryRoutes.route('/add').post(function (req, res) {
    let inventory = new Inventory(req.body.inventory);
    inventory.save()
        .then(inventory => {
            res.status(200).json({ 'inventory': 'inventory added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new inventory failed');
        });
});

app.use('/inventory', inventoryRoutes)

const port = parseInt(process.env.PORT, 10) || 4000;
app.listen(port, function () {
    console.log("Server is running on Port: " + port);
});