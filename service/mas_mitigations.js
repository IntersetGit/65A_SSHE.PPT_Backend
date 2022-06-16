const models = require('../models/index');
const uuid = require('uuid');

exports.AddMitigationsService = async (model) => {
    const id = uuid.v4();
    await models.mas_mitigations.create({
        id,
        code_id: model.code_id,
        name: model.name,
        description: model.description,
        isuse: 1,
        impact_id: model.impact_id,
        impact_code: model.impact_code,
        created_by: model.created_by,
        created_date: new Date(),
    })
    return id
}

exports.GetDataMitigationsService = async () => {
    return await models.mas_mitigations.findAll()
}