const Checklist = require('./checklist.model')
const _ = require('lodash')

const getChecklists = async () => {
    const checklists = await Checklist.find()
    
    return _(checklists).map(c => ({
        title: c.title,
        steps: _(c.steps).orderBy('title')
    }))
}

exports.getChecklists = getChecklists