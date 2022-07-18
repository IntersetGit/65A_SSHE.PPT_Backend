const models = require('../models/index');
const uuid = require('uuid');
const util = require('../util')

exports.AddProceduresService = async (model) => {
    const id = uuid.v4();
    await models.mas_procedures.create({
        id,
        code_id: model.code_id,
        name: model.name,
        name_thai:model.name_thai,
        description: model.description,
        isuse: 1,
        impact_id: model.impact_id,
        created_by: model.created_by,
        created_date: new Date(),
    })
    return id
}

exports.GetDataProceduresService = async () => {
    return await models.mas_procedures.findAll()
}

exports.BulkCreateProceduresService = async (model) => {
    await models.mas_procedures.bulkCreate(model)
}