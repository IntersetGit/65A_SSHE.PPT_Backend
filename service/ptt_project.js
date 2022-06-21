const uuid = require('uuid')
const models = require('../models')
const util = require('../util')



exports.projectAddService = async (model, transaction) => {
    const id = uuid.v4()
    await models.ptt_projects.create({
        id,
        project_name: model.project_name,
        favorite_status: model.favorite_status?? 0 ,
        description: model.description,
        active: model.active,
        project_type_id:model.project_type_id,
        created_by: model.created_by,
        created_date: new Date()
    }, transaction)

    return id
}

exports.projectEditService = async (model) => {
    await models.ptt_projects.update({
        project_name: model.project_name,
        favorite_status: model.favorite_status?? 0 ,
        description: model.description,
        active: model.active,
        project_type_id:model.project_type_id
    }, { where: {id: model.id}})

    return model.id
}

exports.projecctMatchUserService = async (model) => {
    await models.match_projects.create({
        company_id: model.company_id,
        project_id: model.id
    })
    return company_id
}

exports.projecctMatchUserEditService = async (model) => {
    await models.match_projects.create({
        company_id: model.company_id     
    },{ where: {project_id: model.id}})
    return company_id
}

exports.GetAllDataProjectService = async (search) => {
    let sql = ` select * from ptt_data.ptt_projects `
    if (search) sql += ` WHERE project_name ILIKE :search_name `
    return util.sequelizeStringLike(sql, { search })
}

exports.deleteProjectService = async (id) => {
    await models.ptt_projects.destroy({ where: { id} })
};