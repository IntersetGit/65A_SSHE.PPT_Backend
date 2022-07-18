
const models = require('../models/index');
const uuid = require('uuid');
const util = require('../util')


exports.GetAllDataLikeHoodService = async (search) => {
    let sql = ` select * from master.mas_likehood`
    if (search) sql += ` WHERE name_eng ILIKE :search_name
    or name_thai ILIKE :search_name  `
    sql += ` order by created_date  asc `

    return util.sequelizeStringLike(sql, { search })
}


exports.likeHoodAddService = async ( user , model, transaction) => {
    const id = uuid.v4()
      await models.mas_likehood.create({
        id,
        name_eng : model.name_eng ,
        name_thai : model.name_thai ,
        value : model.value,
        created_by: user.sysm_id ,
        created_date: new Date()
    }, transaction)

    return id
}

exports.likeHoodEditService = async (user,model) => {
    await models.mas_likehood.update({
        name_eng : model.name_eng ,
        name_thai : model.name_thai ,
        value : model.value,
        updated_by: user.sysm_id ,
        updated_date: new Date()
    }, { where: {id: model.id}})

    return model.id
}


exports.deleteLikeHoodService = async (id) => {
    await models.mas_likehood.destroy({ where: { id} })
};