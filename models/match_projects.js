const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('match_projects', {
    company_id: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "รหัสบริษัทของผู้รับเหมา"
    },
    project_id: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "รหัสโครงการที่บริษัทรับผิดชอบ"
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
    ]
  });
};
