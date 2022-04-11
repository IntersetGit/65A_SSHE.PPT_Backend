const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ptt_procedures', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสประจำตาราง procedures",
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "ชื่อรายการ procedures"
    },
    mitigation_id: {
      type: DataTypes.ARRAY(DataTypes.UUID),
      allowNull: true,
      comment: "ความสัมพันธ์ข้อมูลกับตาราง mitigation"
    },
    create_by: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "สร้างข้อมูลโดย"
    },
    update_by: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "แก้ไขข้อมูลโดย"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "วันที่สร้างข้อมูล"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "วันที่แก้ไขข้อมูล"
    }
  }, {
    sequelize,
    tableName: 'ptt_procedures',
    schema: 'ptt_data',
    timestamps: false,
    indexes: [
      {
        name: "ptt_procedures_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
