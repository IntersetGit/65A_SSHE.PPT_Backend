const models = require('../models/index');
const uuid = require('uuid');
const util = require('../util')



exports.GetAllDataIncidentTypeService = async (search) => {
    let sql = ` select * from master.mas_incident_type `
    if (search) sql += ` WHERE incident_type_name ILIKE :search_name `
    sql += ` order by created_by asc `
    return util.sequelizeStringLike(sql, { search })
}

exports.incidentTypeAddService = async ( user , model, transaction) => {
    const id = uuid.v4()
      await models.mas_incident_type.create({
        id,
        incident_type_name : model.incident_type_name ,
        active : model.active ?? 1 ,
        incident_type_id : model.incident_type_id,
        description : model.description,
        created_by: user.sysm_id ,
        created_date: new Date()
    }, transaction)

    return id
}

exports.incidentTypeEditService = async (user,model) => {
    await models.mas_incident_type.update({
        incident_type_name : model.incident_type_name ,
        active : model.active ?? 1 ,
        incident_type_id : model.incident_type_id,
        description : model.description,
        updated_by: user.sysm_id ,
        updated_date: new Date()
    }, { where: {id: model.id}})

    return model.id
}


exports.deleteIncidentTypeService = async (id) => {
    await models.mas_incident_type.destroy({ where: { id} })
};