var DataTypes = require("sequelize").DataTypes;
var _logs = require("./logs");
var _macth_company = require("./macth_company");
var _mas_Incident_02 = require("./mas_Incident_02");
var _mas_activities = require("./mas_activities");
var _mas_impacts = require("./mas_impacts");
var _mas_incident_01 = require("./mas_incident_01");
var _mas_incident_03 = require("./mas_incident_03");
var _mas_incident_04 = require("./mas_incident_04");
var _mas_mitigations = require("./mas_mitigations");
var _mas_procedures = require("./mas_procedures");
var _match_assessment = require("./match_assessment");
var _match_projects = require("./match_projects");
var _ptt_Incident = require("./ptt_Incident");
var _ptt_company = require("./ptt_company");
var _ptt_profile_users = require("./ptt_profile_users");
var _ptt_projects = require("./ptt_projects");
var _sysm_roles = require("./sysm_roles");
var _sysm_users = require("./sysm_users");

function initModels(sequelize) {
  var logs = _logs(sequelize, DataTypes);
  var macth_company = _macth_company(sequelize, DataTypes);
  var mas_Incident_02 = _mas_Incident_02(sequelize, DataTypes);
  var mas_activities = _mas_activities(sequelize, DataTypes);
  var mas_impacts = _mas_impacts(sequelize, DataTypes);
  var mas_incident_01 = _mas_incident_01(sequelize, DataTypes);
  var mas_incident_03 = _mas_incident_03(sequelize, DataTypes);
  var mas_incident_04 = _mas_incident_04(sequelize, DataTypes);
  var mas_mitigations = _mas_mitigations(sequelize, DataTypes);
  var mas_procedures = _mas_procedures(sequelize, DataTypes);
  var match_assessment = _match_assessment(sequelize, DataTypes);
  var match_projects = _match_projects(sequelize, DataTypes);
  var ptt_Incident = _ptt_Incident(sequelize, DataTypes);
  var ptt_company = _ptt_company(sequelize, DataTypes);
  var ptt_profile_users = _ptt_profile_users(sequelize, DataTypes);
  var ptt_projects = _ptt_projects(sequelize, DataTypes);
  var sysm_roles = _sysm_roles(sequelize, DataTypes);
  var sysm_users = _sysm_users(sequelize, DataTypes);

  mas_activities.belongsToMany(ptt_company, { through: match_assessment, foreignKey: "activity_id", otherKey: "company_id" });
  ptt_company.belongsToMany(mas_activities, { through: match_assessment, foreignKey: "company_id", otherKey: "activity_id" });
  ptt_company.belongsToMany(ptt_projects, { through: match_projects, foreignKey: "company_id", otherKey: "project_id" });
  ptt_company.belongsToMany(sysm_users, { through: macth_company, foreignKey: "company_id", otherKey: "user_id" });
  ptt_projects.belongsToMany(ptt_company, { through: match_projects, foreignKey: "project_id", otherKey: "company_id" });
  sysm_users.belongsToMany(ptt_company, { through: macth_company, foreignKey: "user_id", otherKey: "company_id" });
  mas_impacts.belongsTo(mas_activities, { as: "activity", foreignKey: "activity_id"});
  mas_activities.hasMany(mas_impacts, { as: "mas_impacts", foreignKey: "activity_id"});
  match_assessment.belongsTo(mas_activities, { as: "activity", foreignKey: "activity_id"});
  mas_activities.hasMany(match_assessment, { as: "match_assessments", foreignKey: "activity_id"});
  mas_mitigations.belongsTo(mas_impacts, { as: "impact", foreignKey: "impact_id"});
  mas_impacts.hasMany(mas_mitigations, { as: "mas_mitigations", foreignKey: "impact_id"});
  match_assessment.belongsTo(ptt_company, { as: "company", foreignKey: "company_id"});
  ptt_company.hasMany(match_assessment, { as: "match_assessments", foreignKey: "company_id"});
  mas_activities.belongsTo(sysm_users, { as: "created_by_sysm_user", foreignKey: "created_by"});
  sysm_users.hasMany(mas_activities, { as: "mas_activities", foreignKey: "created_by"});
  mas_activities.belongsTo(sysm_users, { as: "updated_by_sysm_user", foreignKey: "updated_by"});
  sysm_users.hasMany(mas_activities, { as: "updated_by_mas_activities", foreignKey: "updated_by"});
  mas_impacts.belongsTo(sysm_users, { as: "created_by_sysm_user", foreignKey: "created_by"});
  sysm_users.hasMany(mas_impacts, { as: "mas_impacts", foreignKey: "created_by"});
  mas_impacts.belongsTo(sysm_users, { as: "updated_by_sysm_user", foreignKey: "updated_by"});
  sysm_users.hasMany(mas_impacts, { as: "updated_by_mas_impacts", foreignKey: "updated_by"});
  mas_mitigations.belongsTo(sysm_users, { as: "created_by_sysm_user", foreignKey: "created_by"});
  sysm_users.hasMany(mas_mitigations, { as: "mas_mitigations", foreignKey: "created_by"});
  mas_mitigations.belongsTo(sysm_users, { as: "updated_by_sysm_user", foreignKey: "updated_by"});
  sysm_users.hasMany(mas_mitigations, { as: "updated_by_mas_mitigations", foreignKey: "updated_by"});
  mas_procedures.belongsTo(sysm_users, { as: "created_by_sysm_user", foreignKey: "created_by"});
  sysm_users.hasMany(mas_procedures, { as: "mas_procedures", foreignKey: "created_by"});
  mas_procedures.belongsTo(sysm_users, { as: "updated_by_sysm_user", foreignKey: "updated_by"});
  sysm_users.hasMany(mas_procedures, { as: "updated_by_mas_procedures", foreignKey: "updated_by"});
  macth_company.belongsTo(ptt_company, { as: "company", foreignKey: "company_id"});
  ptt_company.hasMany(macth_company, { as: "macth_companies", foreignKey: "company_id"});
  match_projects.belongsTo(ptt_company, { as: "company", foreignKey: "company_id"});
  ptt_company.hasMany(match_projects, { as: "match_projects", foreignKey: "company_id"});
  match_projects.belongsTo(ptt_projects, { as: "project", foreignKey: "project_id"});
  ptt_projects.hasMany(match_projects, { as: "match_projects", foreignKey: "project_id"});
  macth_company.belongsTo(sysm_users, { as: "user", foreignKey: "user_id"});
  sysm_users.hasMany(macth_company, { as: "macth_companies", foreignKey: "user_id"});
  ptt_projects.belongsTo(sysm_users, { as: "created_by_sysm_user", foreignKey: "created_by"});
  sysm_users.hasMany(ptt_projects, { as: "ptt_projects", foreignKey: "created_by"});
  ptt_projects.belongsTo(sysm_users, { as: "user", foreignKey: "user_id"});
  sysm_users.hasMany(ptt_projects, { as: "user_ptt_projects", foreignKey: "user_id"});
  logs.belongsTo(sysm_users, { as: "user", foreignKey: "user_id"});
  sysm_users.hasMany(logs, { as: "logs", foreignKey: "user_id"});

  return {
    logs,
    macth_company,
    mas_Incident_02,
    mas_activities,
    mas_impacts,
    mas_incident_01,
    mas_incident_03,
    mas_incident_04,
    mas_mitigations,
    mas_procedures,
    match_assessment,
    match_projects,
    ptt_Incident,
    ptt_company,
    ptt_profile_users,
    ptt_projects,
    sysm_roles,
    sysm_users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
