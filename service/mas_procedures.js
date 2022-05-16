const models = require('../models/index');
const uuid = require('uuid');

exports.AddProceduresService = (model) => {
    const id = uuid.v4();
    await models.master_procedures.create({
        id,
        code_id: model.code_id,
        name: model.name,
        description: model.description,
        isuse: 1,
        mitigation_id: model.mitigation_id,
        mitigation_code: model.mitigation_code,
        created_by: model.created_by,
        created_date: new Date(),
    })
    return id
}

exports.GetDataProceduresService = () => {
    return await models.master_procedures.findAll()
}