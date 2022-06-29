const models = require('../models/index');
const uuid = require('uuid');
const util = require('../util')



exports.GetAllDataIssueTypeService = async (search) => {
    let sql = ` select * from master.mas_sshe_issue `
    if (search) sql += ` WHERE issue_type_name ILIKE :search_name `
    sql += ` order by created_by asc `
    return util.sequelizeStringLike(sql, { search })
}

exports.issueTypeAddService = async ( user , model, transaction) => {
    const id = uuid.v4()
      await models.mas_sshe_issue.create({
        id,
        issue_type_name : model.issue_type_name ,
        active : model.active ?? 1 ,
        issue_type_id : model.issue_type_id,
        description : model.description,
        created_by: user.sysm_id ,
        created_date: new Date()
    }, transaction)

    return id
}

exports.issueTypeEditService = async (user,model) => {
    await models.mas_sshe_issue.update({
        issue_type_name : model.issue_type_name ,
        active : model.active ?? 1 ,
        issue_type_id : model.issue_type_id,
        description : model.description,
        updated_by: user.sysm_id ,
        updated_date: new Date()
    }, { where: {id: model.id}})

    return model.id
}


exports.deleteIssueTypeService = async (id) => {
    await models.mas_sshe_issue.destroy({ where: { id} })
};