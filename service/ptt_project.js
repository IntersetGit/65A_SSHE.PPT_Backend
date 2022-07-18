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
        active: model.active?? 1,
        favorite : model.favorite,
        project_type_id:model.project_type_id,
        created_by: model.created_by,
        created_date: new Date()
    }, transaction)

    return id
}


exports.projecctMatchUserService = async (c,company_id) => {
    await models.match_projects.create({
        company_id: company_id,
        project_id: c
    })
}

exports.projectEditService = async (model) => {
    await models.ptt_projects.update({
        project_name: model.project_name,
        favorite_status: model.favorite_status?? 0 ,
        description: model.description,
        active: model.active,
        favorite : model.favorite,
        project_type_id:model.project_type_id
    }, { where: {id: model.id}})

    return model.id
}



exports.projecctMatchUserEditService = async (id, company_id) => {
    await models.match_projects.create({
        company_id: company_id,
        project_id: id
    })
}


exports.GetAllDataProjectService = async (search) => {
    let sql = ` select a.id, a.project_name, a.favorite_status, a.user_id,
     a.created_by, a.created_date, a.description, a.active, a.project_type_id , a.favorite, Z.name,
     (select array(select json_build_object(
        'company_id', company_id,
        'company_name', ptt_data.ptt_company.company_name
    )  from ptt_data.match_projects as b INNER JOIN ptt_data.ptt_company ON  ptt_data.ptt_company.id = b.company_id 
        WHERE project_id = a.id  )) as company from ptt_data.ptt_projects as a
        INNER JOIN master.mas_project_type as Z ON  Z.id = a.project_type_id
     `
    if (search) sql += ` WHERE project_name ILIKE :search_name `
    sql += ` order by a.created_date  asc `
    
    return util.sequelizeStringLike(sql, { search })
}

exports.deleteProjectService = async (id) => {
    await models.ptt_projects.destroy({ where: { id} })
};

exports.projecctMatchUserDeleteService = async (id) => {
    await models.match_projects.destroy({where: { project_id: id }})
};