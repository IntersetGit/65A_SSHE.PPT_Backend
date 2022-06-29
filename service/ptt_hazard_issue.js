const models = require('../models/index');
const uuid = require('uuid');
const util = require('../util')



exports.GetAllDataHazardIssueService = async (search) => {
    let sql = ` SELECT a.id as id, a.hazard_name, a.active, a.hazard_id, a.issue_type_id, a.created_by, a.created_date, a.description,
    a.updated_by, a.updated_date,b.issue_type_name 
      FROM ptt_data.ptt_hazard_issue as a
      inner join master.mas_sshe_issue as b on b.id = a.issue_type_id `
    if (search) sql += ` WHERE hazard_name ILIKE :search_name `
    sql += ` order by a.created_date  asc `
    return util.sequelizeStringLike(sql, { search })
}

exports.hazardIssueAddService = async ( user , model, transaction) => {
    const id = uuid.v4()
      await models.ptt_hazard_issue.create({
        id,
        hazard_name : model.hazard_name ,
        active :  1 ,
        hazard_id : model.hazard_id,
        issue_type_id : model.issue_type_id,
        description : model.description,
        created_by: user.sysm_id ,
        created_date: new Date()
    }, transaction)

    return id
}

exports.hazardIssueEditService = async (user,model) => {
    await models.ptt_hazard_issue.update({
        hazard_name : model.hazard_name ,
        active : model.active ,
        hazard_id : model.hazard_id,
        issue_type_id : model.issue_type_id,
        description : model.description,
        updated_by: user.sysm_id ,
        updated_date: new Date()
    }, { where: {id: model.id}})

    return model.id
}


exports.deleteHazardIssueService = async (id) => {
    await models.ptt_hazard_issue.destroy({ where: { id} })
};