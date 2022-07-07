const models = require('../models/index');
const uuid = require('uuid');
const util = require('../util')


exports.AddSsheIssue = async (  model , user ) => {
    const id = uuid.v4();
    await models.ptt_sshe_issue.create({
        id,
        date: model.date,
        project_id: model.project_id,
        location:model.location,
        issue_type_id: model.issue_type_id,
        hazard_id: model.hazard_id,
        description: model.description,
        suggestion: model.suggestion,
        status: model.status,
        due_date:model.due_date,
        lat:model.lat,
        long:model.long,
        user_id:model.user_id,
        created_by:user.sysm_id,
        created_date: new Date(),
    })
    return id
}


exports.GetAllDataSsheIssueService = async (search) => {
    let sql = ` select a.id, a.date, b.project_name , a.location, c.issue_type_name, d.hazard_name, a.description,
    a.suggestion, a.status, a.due_date, a.lat, a.long, a.created_by, e.user_name, a.created_date, a.updated_by, a.updated_date
    FROM ptt_data.ptt_sshe_issue as a
    LEFT JOIN ptt_data.ptt_projects as b ON b.id = a.project_id
    LEFT JOIN master.mas_issue_type as c ON c.id = a.issue_type_id
    LEFT JOIN ptt_data.ptt_hazard_issue as d ON d.id = a.hazard_id
    LEFT JOIN system.sysm_users as e ON e.id = a.user_id`

    if (search) sql += ` WHERE a.issue_type_id ILIKE :search_name 
    or a.status ILIKE :search_name `

    sql += ` order by a.created_date  asc `

    return util.sequelizeStringLike(sql,{search})
}