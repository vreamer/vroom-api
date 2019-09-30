const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const Inventory = require('./inventory.model')

mongoose.connect('mongodb://127.0.0.1:27017/inventory', { useNewUrlParser: true, useUnifiedTopology: true });

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
    let inventory = new Inventory(req.body);
    inventory.save()
        .then(inventory => {
            res.status(200).json({ 'inventory': 'inventory added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new inventory failed');
        });
});

app.use(cors());
app.use(bodyParser.json());

app.use('/inventory', inventoryRoutes)

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});