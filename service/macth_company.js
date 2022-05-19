const models = require('../models/index');
const uuid = require('uuid');

exports.GetMachCompany = async (user_id) => {
    const whereUserId = user_id ? { where: { user_id } } : {}
    return await models.macth_company.findAll(whereUserId)
}