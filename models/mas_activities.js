const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mas_activities', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสหลักกิจกรรมงาน",
      primaryKey: true
    },
    code_id: {
      type: DataTypes.STRING(5),
      allowNull: true,
      comment: "รหัสกลุ่มกิจกรรมของงาน"
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "ชื่อกิจกรรมของงานนั้นๆ"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "คำอธิบายกิจกรรมของงาน"
    },
    isuse: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "สถานะข้อมูล 0 = ไม่ใช้งาน 1 = ใช้งาน "
    },
    created_by: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "สร้างข้อมูลโดย",
      references: {
        model: 'sysm_users',
        key: 'id'
      }
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "สร้างข้อมูลวันที่"
    },
    updated_by: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "ปรับปรุงข้อมูลโดย",
      references: {
        model: 'sysm_users',
        key: 'id'
      }
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "ปรับปรุงข้อมูลวันที่"
    },
    name_thai: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "activity ภาษาไทย"
    }
  }, {
    sequelize,
    tableName: 'mas_activities',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "fki_fk_atty_created_by",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "fki_fk_atty_updated_by",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "master_activities_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
