const express = require('express');
const ChecklistService = require('./checklist-service')

const checklistRoutes = express.Router()

checklistRoutes.route('/').get(async (req, res) => {
    const checklists = await ChecklistService.getChecklists()
    res.json(checklists)
})

checklistRoutes.route('/:checklistId/steps/:stepId').put(async (req, res) => {
    const checklistId = req.params.checklistId
    const stepId = req.params.stepId

    const checklist = await ChecklistService.updateStep(checklistId, stepId, req.body)
    
    res.send(checklist);
})

module.exports = checklistRoutes