const Checklist = require('./checklist.model')

const getChecklists = async () => {
    return await Checklist.find()
}

exports.getChecklists = getChecklists