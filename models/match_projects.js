const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('match_projects', {
    company_id: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "รหัสบริษัทของผู้รับเหมา",
      primaryKey: true
    },
    project_id: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "รหัสโครงการที่บริษัทรับผิดชอบ",
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'match_projects',
    schema: 'ptt_data',
    timestamps: false,
    indexes: [
      {
        name: "fki_fk_mpjt_company_id",
        fields: [
          { name: "company_id" },
        ]
      },
      {
        name: "fki_fk_mpjt_project_id",
        fields: [
          { name: "project_id" },
        ]
      },
      {
        name: "match_projects_pkey",
        unique: true,
        fields: [
          { name: "company_id" },
          { name: "project_id" },
        ]
      },
    ]
  });
};
