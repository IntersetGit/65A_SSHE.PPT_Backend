const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mas_Incident_02', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "รหัสประจำตารางคำถามหน้า incident หัวข้อ . Details of Injury",
      primaryKey: true
    },
    data: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true,
      comment: "ข้อมูลที่เลือก"
    },
    issue: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "สถานะของข้อมูล 0 ไม่ได้ใช้งาน 1 ใช้งาน"
    },
    incident_id: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "รหัสประจำตารางหลัก incident"
    }
  }, {
    sequelize,
    tableName: 'mas_Incident_02',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "mas_Incident_02_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
