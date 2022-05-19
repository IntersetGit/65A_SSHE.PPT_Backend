const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysm_roles', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสหลักสิทธิ์ผู้ใช้งาน",
      primaryKey: true
    },
    roles_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ชื่อสิทธิ์ผู้ใช้งาน"
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "บันทึก"
    },
    isuse: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "สถานะข้อมูล 0 = ไม่ใช้งาน 1 = ใช้งาน"
    },
    order_by: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "ตัวเรียงลำดับ"
    }
  }, {
    sequelize,
    tableName: 'sysm_roles',
    schema: 'system',
    timestamps: false,
    indexes: [
      {
        name: "sysm_roles_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
