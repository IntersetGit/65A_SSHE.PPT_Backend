const uuid = require('uuid')
const models = require('../models');

exports.CreateMotionApi = async (model) => {
    const id = uuid.v4();
    await models.logs.create({
        id,
        user_id: model.user_id,
        url: model.url,
        action: model.action,
        error: model.error,
        ip: model.ip,
        mac_id: model.mac_id,
        device: model.device,
        browser: model.browser,
        logdate: model.logdate,
        os: model.os,
        sysm_type: model.sysm_type,
        method: model.method
    });
    return id
}