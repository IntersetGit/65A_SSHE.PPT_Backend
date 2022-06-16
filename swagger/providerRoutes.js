const Joi = require("@hapi/joi");

module.exports = {
    0: {
        body: {
            username: Joi.string().required(),
            password: Joi.string().required(),
        },
        model: 'provider',
        group: 'backend-system-user',
        description: 'Login system user'
    }
}