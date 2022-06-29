const models = require('../models/index');
const uuid = require('uuid');
const util = require('../util')





exports.GetAllDataProjectTypeService = async (search) => {
    let sql = ` select * from master.mas_project_type `
    if (search) sql += ` WHERE name ILIKE :search_name `
    sql += ` order by created_date  asc `

    return util.sequelizeStringLike(sql, { search })
}

exports.projectTypeAddService = async ( user , model, transaction) => {
    const id = uuid.v4()
      await models.mas_project_type.create({
        id,
        name : model.name ,
        active : model.active ?? 1 ,
        created_by: user.sysm_id ,
        created_date: new Date()
    }, transaction)

    return id
}

exports.projectTypeEditService = async (user,model) => {
    await models.mas_project_type.update({
        name : model.name ,
        active : model.active ?? 1 ,
        updated_by: user.sysm_id ,
        updated_date: new Date()
    }, { where: {id: model.id}})

    return model.id
}


exports.deleteProjectTypeService = async (id) => {
    await models.mas_project_type.destroy({ where: { id} })
};