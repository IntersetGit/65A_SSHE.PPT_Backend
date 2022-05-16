const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('match_risk_assessment', {
    company_id: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "รหัสข้อมูลบริษัท",
      primaryKey: true
    },
    activity_id: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "รหัสกิจกรรมของงาน",
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'match_risk_assessment',
    schema: 'master',
    timestamps: false,
    indexes: [
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
