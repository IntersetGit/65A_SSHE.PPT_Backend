const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('match_assessment', {
    company_id: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "รหัสข้อมูลบริษัท",
      primaryKey: true,
      references: {
        model: 'ptt_company',
        key: 'id'
      }
    },
    activity_id: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "รหัสกิจกรรมของงาน",
      primaryKey: true,
      references: {
        model: 'mas_activities',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'match_assessment',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "fki_fk_asm_activity_id",
        fields: [
          { name: "activity_id" },
        ]
      },
      {
        name: "fki_fk_asm_company_id",
        fields: [
          { name: "company_id" },
        ]
      },
      {
        name: "match_risk_assessment_pkey",
        unique: true,
        fields: [
          { name: "company_id" },
          { name: "activity_id" },
        ]
      },
    ]
  });
};
