const express = require('express');
const ChecklistService = require('./checklist-service')

const checklistRoutes = express.Router()

checklistRoutes.route('/').get(async (req, res) => {
    const checklists = await ChecklistService.getChecklists()
    res.json(checklists)
})

module.exports = checklistRoutes