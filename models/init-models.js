var DataTypes = require("sequelize").DataTypes;
var _logs = require("./logs");
var _mas_company = require("./mas_company");
var _mas_project = require("./mas_project");
var _sysm_roles = require("./sysm_roles");
var _sysm_users = require("./sysm_users");

function initModels(sequelize) {
  var logs = _logs(sequelize, DataTypes);
  var mas_company = _mas_company(sequelize, DataTypes);
  var mas_project = _mas_project(sequelize, DataTypes);
  var sysm_roles = _sysm_roles(sequelize, DataTypes);
  var sysm_users = _sysm_users(sequelize, DataTypes);


  return {
    logs,
    mas_company,
    mas_project,
    sysm_roles,
    sysm_users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
