const models = require('../models/index');
const uuid = require('uuid');

exports.AddActivityService = async (model) => {
    const id = uuid.v4();
    await models.master_activities.create({
        id,
        code_id: model.code_id,
        name: model.name,
        description: model.description,
        isuse: 1,
        created_by: model.created_by,
        created_date: new Date(),
    })
    return id
}

exports.GetDataActivityService = async () => {
    return await models.master_activities.findAll()
}

exports.BulkCreateActivityService = async (model) => {
    await models.master_activities.bulkCreate(model)
}