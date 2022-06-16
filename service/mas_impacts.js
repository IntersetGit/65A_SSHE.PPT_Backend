const models = require('../models/index');
const uuid = require('uuid');

exports.AddImpactService = async (model) => {
    const id = uuid.v4();
    await models.mas_impacts.create({
        id,
        code_id: model.code_id,
        name: model.name,
        description: model.description,
        isuse: 1,
        activity_id: model.activity_id,
        activity_code: model.activity_code,
        created_by: model.created_by,
        created_date: new Date(),
    })
    return id
}

exports.GetDataImpactService = async () => {
    return await models.mas_impacts.findAll()
}

exports.BulkCreateImpactService = async (model) => {
    await  models.mas_impacts.bulkCreate(model)
}