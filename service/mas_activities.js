const models = require('../models/index');
const uuid = require('uuid');
const { sequelizeString, sequelizeStringFindOne, sequelizeStringLike } = require("../util/index")
const util = require('../util')

exports.AddActivityService = async (data) => {
    const id = uuid.v4();
    await models.mas_activities.create({
        id,
        code_id: data.code_id,
        name: data.name,
        description: data.description,
        isuse: 1,
        created_by: data.created_by,
        created_date: new Date(),
    })
    return id
}

exports.GetDataActivityService = async () => {
    let sql = ` select * from master.mas_activities  `
    sql += ` order by created_by asc `
    return util.sequelizeStringLike(sql)
}


exports.BulkCreateActivityService = async (model) => {
    await models.mas_activities.bulkCreate(model)
}
