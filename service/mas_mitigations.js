const models = require('../models/index');
const uuid = require('uuid');
const util = require('../util')

exports.AddMitigationsService = async (model) => {
    const id = uuid.v4();
    await models.mas_mitigations.create({
        id,
        code_id: model.code_id,
        name: model.name,
        description: model.description,
        isuse: 1,
        // impact_id: model.impact_id,
        // impact_code: model.impact_code,
        created_by: model.created_by,
        created_date: new Date(),
    })
    return id
}

exports.GetDataMitigationsService = async () => {
    let sql = ` select * from master.mas_mitigations `
    sql += ` order by created_by asc `
    return util.sequelizeStringLike(sql)
}