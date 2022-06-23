const { sequelizeString } = require('../util/index')
const models = require('../models')
const messages = require('../messages/index')
const result = require('../middleware/result')
const { sequelize } = require('../models/index')


exports.GetAllDataIncidentService = async (search) => {
    let sql = ` SELECT a.id as id, a.hazard_name, a.active, a.hazard_id, a.issue_type_id, a.created_by, a.created_date, 
    a.updated_by, a.updated_date,b.issue_type_name 
      FROM ptt_data.ptt_hazard_issue as a
      inner join master.mas_sshe_issue as b on b.id = a.issue_type_id `
    if (search) sql += ` WHERE hazard_name ILIKE :search_name `
    return util.sequelizeStringLike(sql, { search })
}