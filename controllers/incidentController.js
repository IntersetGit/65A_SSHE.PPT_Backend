const sequelize = require("../config/dbConfig"); //connect db  query string
const messages = require('../messages/index');
const config = require('../config');
const jwt = require('jsonwebtoken');
const result = require('../middleware/result');
const { ldap } = require("../libs/ldapConnect");
const {GetAllDataIncidentService} = require("../service/incident");
const { EncryptCryptoJS, DecryptCryptoJS, checkPassword, sequelizeString, encryptPassword } = require('../util');
const ActiveDirectory = require('activedirectory');
const { GetMachCompany } = require("../service/macth_company");



exports.getDataIncident = async (req, res, next) => {
    try {
        const decode = await util.decodeToken(req.headers.authorization)
        const user = decode.token
        const { search } = req.query
        result(res, req, '', await GetAllDataIncidentService(search))

    } catch (error) {
        next(error);
    }
}