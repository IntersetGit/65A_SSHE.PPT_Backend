const address = require('address');
const { CreateMotionApi } = require('../service/logs');
const util = require('../util')
const config = require('../config')

module.exports = async (res, req, action, data, status = 200) => {
    try {
        const authorization = req.headers["authorization"]
        if (authorization && config.NODE_ENV == 'production') {
            const decode = await util.decodeToken(authorization);
            const user = decode.token
            let mac_id
            req.method
            address.mac((err, addr) => {
                mac_id = addr
            });
            if (user.sysm_id) {
                await CreateMotionApi({
                    user_id: user.sysm_id,
                    url: req.path,
                    action,
                    error: null,
                    ip: address.ip(),
                    mac_id,
                    device: req.device.type.toUpperCase(),
                    browser: null,
                    logdate: new Date(),
                    os: null,
                    sysm_type: null,
                    method: req.method
                })
            }
        }
        
        return res.status(status).json({
            items: data,
            status_code: status,
        });

    } catch (error) {
        throw error
    }
}