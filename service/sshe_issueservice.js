const models = require('../models/index');
const uuid = require('uuid');
const util = require('../util')


exports.AddSsheIssue = async ( user,model ) => {
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