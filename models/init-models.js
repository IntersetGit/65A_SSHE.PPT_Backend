var DataTypes = require("sequelize").DataTypes;
var _dat_profile_users = require("./dat_profile_users");
var _logs = require("./logs");
var _mas_company = require("./mas_company");
var _mas_project = require("./mas_project");
var _ptt_Incident = require("./ptt_Incident");
var _ptt_activities = require("./ptt_activities");
var _ptt_impact = require("./ptt_impact");
var _ptt_mitigation = require("./ptt_mitigation");
var _ptt_procedures = require("./ptt_procedures");
var _sysm_roles = require("./sysm_roles");
var _sysm_users = require("./sysm_users");

function initModels(sequelize) {
  var dat_profile_users = _dat_profile_users(sequelize, DataTypes);
  var logs = _logs(sequelize, DataTypes);
  var mas_company = _mas_company(sequelize, DataTypes);
  var mas_project = _mas_project(sequelize, DataTypes);
  var ptt_Incident = _ptt_Incident(sequelize, DataTypes);
  var ptt_activities = _ptt_activities(sequelize, DataTypes);
  var ptt_impact = _ptt_impact(sequelize, DataTypes);
  var ptt_mitigation = _ptt_mitigation(sequelize, DataTypes);
  var ptt_procedures = _ptt_procedures(sequelize, DataTypes);
  var sysm_roles = _sysm_roles(sequelize, DataTypes);
  var sysm_users = _sysm_users(sequelize, DataTypes);


  return {
    dat_profile_users,
    logs,
    mas_company,
    mas_project,
    ptt_Incident,
    ptt_activities,
    ptt_impact,
    ptt_mitigation,
    ptt_procedures,
    sysm_roles,
    sysm_users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
