require('dotenv').config()
const fs = require('fs');
const mongoose = require('mongoose');

const Checklist = require('../checklist/checklist.model')
const InventoryItem = require('../inventory/inventory-item.model')

mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

const checklistJson = JSON.parse(fs.readFileSync('./data/checklists.seed.json'));
const inventoryItemJson = JSON.parse(fs.readFileSync('./data/inventory-items.seed.json'));

connection.once('open', async () => {
    console.log("MongoDB database connection established successfully");
    console.log(process.env.MONGODB_URI)
    await connection.db.dropCollection('checklists')

    const checklists = checklistJson.map(c => new Checklist(c))
    await Checklist.insertMany(checklists)
    console.log('checklist loaded')

    const inventoryItems = inventoryItemJson.map(i => new InventoryItem(i))
    await InventoryItem.insertMany(inventoryItems)
    console.log('inventory items loaded')

    await connection.close()
    console.log('connection closed')
})



