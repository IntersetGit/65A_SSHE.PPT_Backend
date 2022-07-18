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
        name_thai : data.name_thai,
        description: data.description,
        isuse: 1,
        created_by: data.created_by,
        created_date: new Date(),
    })
    return id
}

exports.GetDataActivityService = async () => {
    return await models.mas_activities.findAll({ 
        order: [
        ['created_date', 'ASC'],
    ],})

}


exports.BulkCreateActivityService = async (model) => {
    await models.mas_activities.bulkCreate(model)
}
