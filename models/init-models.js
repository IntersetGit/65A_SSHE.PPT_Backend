var DataTypes = require("sequelize").DataTypes;
var _logs = require("./logs");
var _macth_company = require("./macth_company");
var _mas_Incident_02 = require("./mas_Incident_02");
var _mas_activities = require("./mas_activities");
var _mas_impacts = require("./mas_impacts");
var _mas_incident_01 = require("./mas_incident_01");
var _mas_incident_03 = require("./mas_incident_03");
var _mas_incident_04 = require("./mas_incident_04");
var _mas_incident_type = require("./mas_incident_type");
var _mas_issue_type = require("./mas_issue_type");
var _mas_mitigations = require("./mas_mitigations");
var _mas_procedures = require("./mas_procedures");
var _mas_project_type = require("./mas_project_type");
var _mas_subcontract = require("./mas_subcontract");
var _match_assessment = require("./match_assessment");
var _match_impact = require("./match_impact");
var _match_mitigation = require("./match_mitigation");
var _match_procedures = require("./match_procedures");
var _match_projects = require("./match_projects");
var _ptt_Incident_old = require("./ptt_Incident_old");
var _ptt_company = require("./ptt_company");
var _ptt_hazard_issue = require("./ptt_hazard_issue");
var _ptt_incidents = require("./ptt_incidents");
var _ptt_profile_users = require("./ptt_profile_users");
var _ptt_projects = require("./ptt_projects");
var _ptt_sshe_issue = require("./ptt_sshe_issue");
var _ptt_sub_company = require("./ptt_sub_company");
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
  var mas_incident_type = _mas_incident_type(sequelize, DataTypes);
  var mas_issue_type = _mas_issue_type(sequelize, DataTypes);
  var mas_mitigations = _mas_mitigations(sequelize, DataTypes);
  var mas_procedures = _mas_procedures(sequelize, DataTypes);
  var mas_project_type = _mas_project_type(sequelize, DataTypes);
  var mas_subcontract = _mas_subcontract(sequelize, DataTypes);
  var match_assessment = _match_assessment(sequelize, DataTypes);
  var match_impact = _match_impact(sequelize, DataTypes);
  var match_mitigation = _match_mitigation(sequelize, DataTypes);
  var match_procedures = _match_procedures(sequelize, DataTypes);
  var match_projects = _match_projects(sequelize, DataTypes);
  var ptt_Incident_old = _ptt_Incident_old(sequelize, DataTypes);
  var ptt_company = _ptt_company(sequelize, DataTypes);
  var ptt_hazard_issue = _ptt_hazard_issue(sequelize, DataTypes);
  var ptt_incidents = _ptt_incidents(sequelize, DataTypes);
  var ptt_profile_users = _ptt_profile_users(sequelize, DataTypes);
  var ptt_projects = _ptt_projects(sequelize, DataTypes);
  var ptt_sshe_issue = _ptt_sshe_issue(sequelize, DataTypes);
  var ptt_sub_company = _ptt_sub_company(sequelize, DataTypes);
  var sysm_roles = _sysm_roles(sequelize, DataTypes);
  var sysm_users = _sysm_users(sequelize, DataTypes);

  ptt_company.belongsToMany(ptt_projects, { through: match_projects, foreignKey: "company_id", otherKey: "project_id" });
  ptt_company.belongsToMany(sysm_users, { through: macth_company, foreignKey: "company_id", otherKey: "user_id" });
  ptt_projects.belongsToMany(ptt_company, { through: match_projects, foreignKey: "project_id", otherKey: "company_id" });
  sysm_users.belongsToMany(ptt_company, { through: macth_company, foreignKey: "user_id", otherKey: "company_id" });
  mas_mitigations.belongsTo(mas_impacts, { as: "impact", foreignKey: "impact_id"});
  mas_impacts.hasMany(mas_mitigations, { as: "mas_mitigations", foreignKey: "impact_id"});
  mas_procedures.belongsTo(mas_impacts, { as: "impact", foreignKey: "impact_id"});
  mas_impacts.hasMany(mas_procedures, { as: "mas_procedures", foreignKey: "impact_id"});
  mas_subcontract.belongsTo(ptt_company, { as: "company", foreignKey: "company_id"});
  ptt_company.hasMany(mas_subcontract, { as: "mas_subcontracts", foreignKey: "company_id"});
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
  mas_incident_type.belongsTo(sysm_users, { as: "created_by_sysm_user", foreignKey: "created_by"});
  sysm_users.hasMany(mas_incident_type, { as: "mas_incident_types", foreignKey: "created_by"});
  mas_incident_type.belongsTo(sysm_users, { as: "update_by_sysm_user", foreignKey: "update_by"});
  sysm_users.hasMany(mas_incident_type, { as: "update_by_mas_incident_types", foreignKey: "update_by"});
  mas_mitigations.belongsTo(sysm_users, { as: "created_by_sysm_user", foreignKey: "created_by"});
  sysm_users.hasMany(mas_mitigations, { as: "mas_mitigations", foreignKey: "created_by"});
  mas_mitigations.belongsTo(sysm_users, { as: "updated_by_sysm_user", foreignKey: "updated_by"});
  sysm_users.hasMany(mas_mitigations, { as: "updated_by_mas_mitigations", foreignKey: "updated_by"});
  mas_procedures.belongsTo(sysm_users, { as: "created_by_sysm_user", foreignKey: "created_by"});
  sysm_users.hasMany(mas_procedures, { as: "mas_procedures", foreignKey: "created_by"});
  mas_procedures.belongsTo(sysm_users, { as: "updated_by_sysm_user", foreignKey: "updated_by"});
  sysm_users.hasMany(mas_procedures, { as: "updated_by_mas_procedures", foreignKey: "updated_by"});
  match_impact.belongsTo(mas_activities, { as: "activity", foreignKey: "activity_id"});
  mas_activities.hasMany(match_impact, { as: "match_impacts", foreignKey: "activity_id"});
  match_impact.belongsTo(mas_impacts, { as: "impact", foreignKey: "impact_id"});
  mas_impacts.hasMany(match_impact, { as: "match_impacts", foreignKey: "impact_id"});
  match_mitigation.belongsTo(mas_impacts, { as: "impact", foreignKey: "impact_id"});
  mas_impacts.hasMany(match_mitigation, { as: "match_mitigations", foreignKey: "impact_id"});
  match_procedures.belongsTo(mas_impacts, { as: "hazard", foreignKey: "hazard_id"});
  mas_impacts.hasMany(match_procedures, { as: "match_procedures", foreignKey: "hazard_id"});
  ptt_hazard_issue.belongsTo(mas_issue_type, { as: "issue_type", foreignKey: "issue_type_id"});
  mas_issue_type.hasMany(ptt_hazard_issue, { as: "ptt_hazard_issues", foreignKey: "issue_type_id"});
  match_mitigation.belongsTo(mas_mitigations, { as: "mitigation", foreignKey: "mitigation_id"});
  mas_mitigations.hasMany(match_mitigation, { as: "match_mitigations", foreignKey: "mitigation_id"});
  match_procedures.belongsTo(mas_procedures, { as: "procedure", foreignKey: "procedures_id"});
  mas_procedures.hasMany(match_procedures, { as: "match_procedures", foreignKey: "procedures_id"});
  ptt_sub_company.belongsTo(mas_subcontract, { as: "subcontract", foreignKey: "subcontract_id"});
  mas_subcontract.hasMany(ptt_sub_company, { as: "ptt_sub_companies", foreignKey: "subcontract_id"});
  match_mitigation.belongsTo(match_impact, { as: "match_impact", foreignKey: "match_impact_id"});
  match_impact.hasMany(match_mitigation, { as: "match_mitigations", foreignKey: "match_impact_id"});
  macth_company.belongsTo(ptt_company, { as: "company", foreignKey: "company_id"});
  ptt_company.hasMany(macth_company, { as: "macth_companies", foreignKey: "company_id"});
  match_projects.belongsTo(ptt_company, { as: "company", foreignKey: "company_id"});
  ptt_company.hasMany(match_projects, { as: "match_projects", foreignKey: "company_id"});
  ptt_sub_company.belongsTo(ptt_company, { as: "company", foreignKey: "company_id"});
  ptt_company.hasMany(ptt_sub_company, { as: "ptt_sub_companies", foreignKey: "company_id"});
  match_projects.belongsTo(ptt_projects, { as: "project", foreignKey: "project_id"});
  ptt_projects.hasMany(match_projects, { as: "match_projects", foreignKey: "project_id"});
  macth_company.belongsTo(sysm_users, { as: "user", foreignKey: "user_id"});
  sysm_users.hasMany(macth_company, { as: "macth_companies", foreignKey: "user_id"});
  ptt_hazard_issue.belongsTo(sysm_users, { as: "created_by_sysm_user", foreignKey: "created_by"});
  sysm_users.hasMany(ptt_hazard_issue, { as: "ptt_hazard_issues", foreignKey: "created_by"});
  ptt_hazard_issue.belongsTo(sysm_users, { as: "updated_by_sysm_user", foreignKey: "updated_by"});
  sysm_users.hasMany(ptt_hazard_issue, { as: "updated_by_ptt_hazard_issues", foreignKey: "updated_by"});
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
    mas_incident_type,
    mas_issue_type,
    mas_mitigations,
    mas_procedures,
    mas_project_type,
    mas_subcontract,
    match_assessment,
    match_impact,
    match_mitigation,
    match_procedures,
    match_projects,
    ptt_Incident_old,
    ptt_company,
    ptt_hazard_issue,
    ptt_incidents,
    ptt_profile_users,
    ptt_projects,
    ptt_sshe_issue,
    ptt_sub_company,
    sysm_roles,
    sysm_users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
