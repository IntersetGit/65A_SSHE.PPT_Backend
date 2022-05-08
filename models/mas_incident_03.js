const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mas_incident_03', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสประจำตารางคำถามหน้า Incident หัวข้อ How can future incidents be prevented?",
      primaryKey: true
    },
    data: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true,
      comment: "ข้อมูลที่เลือก"
    },
    Incident_id: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "รหัสเชื่อมตารางหลัก Incident"
    },
    issue: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "สถานะของข้อมูล 0 ไม่ได้ใช้งาน 1 ใช้งาน"
    }
  }, {
    sequelize,
    tableName: 'mas_incident_03',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "mas_incident_03_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
