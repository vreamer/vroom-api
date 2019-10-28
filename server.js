require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const formData = require('express-form-data')
const cors = require('cors');
const mongoose = require('mongoose');

const inventoryRoutes = require('./inventory/inventory-routes')
const inventoryGroupRoutes = require('./inventory/inventory-group-routes')
const inventoryItemRoutes = require('./inventory/inventory-item-routes')
const checklistRoutes = require('./checklist/checklist-routes')

app.use(cors());
app.use(bodyParser.json());
app.use(formData.parse())

mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
})

app.use('/inventory', inventoryRoutes)
app.use('/inventory-group', inventoryGroupRoutes)
app.use('/inventory-item', inventoryItemRoutes)
app.use('/checklist', checklistRoutes)

const port = parseInt(process.env.PORT, 10) || 4000;
app.listen(port, function () {
    console.log("Server is running on Port: " + port);
});