const models = require('../models/index');
const uuid = require('uuid');

exports.AddProceduresService = async (model) => {
    const id = uuid.v4();
    await models.mas_procedures.create({
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

exports.GetDataProceduresService = async () => {
    return await models.mas_procedures.findAll()
}