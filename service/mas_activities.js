const models = require('../models/index');
const uuid = require('uuid');

exports.AddActivityService = async (data) => {
    const id = uuid.v4();
    await models.master_activities.create({
        id,
        code_id: data.code_id,
        name: data.name,
        description: data.description,
        isuse: 1,
        created_by: user.sysm_id,
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