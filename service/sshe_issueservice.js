const models = require('../models/index');
const uuid = require('uuid');
const util = require('../util')
const fs = require("fs");
const config = require("../config");
const _path = require('path')

exports.AddSsheIssue = async (  model , user ) => {
    const id = uuid.v4();
    await models.ptt_sshe_issue.create({
        id,
        date: model.date,
        project_id: model.project_id,
        location:model.location,
        primary_case: model.primary_case,
        hazard_id: model.hazard_id,
        description: model.description,
        suggestion: model.suggestion,
        status: model.status,
        due_date:model.due_date,
        lat:model.lat,
        long:model.long,
        close:model.close,
        user_id:model.user_id,
        created_by:user.sysm_id,
        created_date: new Date(),
    })
    return id
}


exports.GetAllDataSsheIssueService = async ( status , primary_case , start_date, end_date) => {
    let sql = ` select a.id, a.date, a.project_id, b.project_name, a.primary_case , a.location, c.issue_type_name, d.hazard_name, a.description,
    a.suggestion, a.status, a.due_date, a.lat, a.long, a.created_by, e.user_name, a.user_id , a.created_date, a.updated_by, a.updated_date, a.hazard_id
    , a.close FROM ptt_data.ptt_sshe_issue as a
    LEFT JOIN ptt_data.ptt_projects as b ON b.id = a.project_id
    LEFT JOIN master.mas_issue_type as c ON c.id = a.primary_case
    LEFT JOIN ptt_data.ptt_hazard_issue as d ON d.id = a.hazard_id
    LEFT JOIN system.sysm_users as e ON e.id = a.user_id`

        if (primary_case && status && start_date && end_date) 
        sql += ` WHERE a.primary_case = '${primary_case}' AND 
         a.status = '${status}' AND a.date BETWEEN '${start_date}' AND '${end_date}' `

        if (primary_case  && start_date && end_date && !status  ) 
        sql += ` WHERE a.primary_case = '${primary_case}' 
         AND a.date BETWEEN '${start_date}' AND   '${end_date}' `

        if (status  && start_date && end_date && !primary_case ) 
        sql += ` WHERE a.status = '${status}'  
        AND a.date BETWEEN '${start_date}' AND '${end_date}' `

        if (primary_case && status && !start_date && !end_date   )
         sql += ` WHERE a.primary_case = '${primary_case}' 
        AND  a.status = '${status}' `

        if (primary_case && !status && !start_date && !end_date  ) 
        sql += ` WHERE a.primary_case = '${primary_case}'  `
        if (status && !primary_case   && !start_date && !end_date)
         sql += ` WHERE a.status = '${status}'  `
        if (start_date && end_date && !status&& !primary_case) 
        sql += ` WHERE a.date BETWEEN '${start_date}' AND  '${end_date}' `
        
    
    sql += ` order by a.created_date  asc `

    
    return util.sequelizeStringLike(sql,{status , primary_case , start_date, end_date})
}

exports.checkImgById = (group , path, type = ".jpg") => {
    let img;
    const projectPath = _path.resolve("./");
    const uploadPath = `${projectPath}/public/uploads/${path}/${group}`;
    if (fs.existsSync(uploadPath))
        img = `${config.SERVICE_HOST}/uploads/${path}/${group}`
    return img
}


exports.updateSsheIssue = async (  model , user ) => {
    await models.ptt_sshe_issue.update({
        date: model.date,
        project_id: model.project_id,
        location:model.location,
        primary_case: model.primary_case,
        hazard_id: model.hazard_id,
        description: model.description,
        suggestion: model.suggestion,
        status: model.status,
        due_date:model.due_date,
        lat:model.lat,
        long:model.long,
        close:model.close,
        user_id:model.user_id,
        updated_by:user.sysm_id,
        updated_date: new Date(),

    },{where: { id : model.id }})
    return model.id
}

exports.deleteSsheIssueService = async (id) => {
    await models.ptt_sshe_issue.destroy({where: { id : id }})
};