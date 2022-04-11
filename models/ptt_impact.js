const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ptt_impact', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสประจำตาราง impact",
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "ชื่อรายการ impact"
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
      comment: "วันที่การสร้างข้อมูล"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "วันที่แก้ไขข้อมูล"
    },
    activities_id: {
      type: DataTypes.ARRAY(DataTypes.UUID),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ptt_impact',
    schema: 'ptt_data',
    timestamps: false,
    indexes: [
      {
        name: "ptt_impact_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
