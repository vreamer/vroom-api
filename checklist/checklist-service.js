const Checklist = require('./checklist.model')
const _ = require('lodash')

const getChecklists = async () => {
    const checklists = await Checklist.find()
    return _(checklists).map(c => ({
        _id: c._id,
        title: c.title,
        steps: _(c.steps).orderBy('title')
    }))
}

const updateStep = async (checklistId, stepId, newStep) => {
    return await Checklist.findById(checklistId, (err, checklist) => {
        const step = _.find(checklist.steps, (s) => s._id == stepId)
        if (newStep.title) {
            step.title = newStep.title
        }

        if (newStep.image) {
            step.image = newStep.image
        }

        return checklist.save();
    })
}

exports.getChecklists = getChecklists
exports.updateStep = updateStep