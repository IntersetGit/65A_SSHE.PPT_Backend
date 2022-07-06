const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mas_impacts', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสหลักผลกระทบของกิจกรรมงาน",
      primaryKey: true
    },
    code_id: {
      type: DataTypes.STRING(5),
      allowNull: true,
      comment: "รหัสกลุ่มผลกระทบกิจกรรมงาน"
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "ชื่อผลกระทบกิจกรรมงาน"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "คำอธิบายของผลกระทบของงาน"
    },
    isuse: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "สถานะข้อมูล 0 = ไม่ใช้งาน 1 = ใช้งาน"
    },
    activity_id: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "รหัสกิจกรรมของงาน"
    },
    activity_code: {
      type: DataTypes.STRING(5),
      allowNull: true,
      comment: "รหัสกลุ่มกิจกรรมของงาน"
    },
    created_by: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "ผู้สร้างข้อมูลโดย",
      references: {
        model: 'sysm_users',
        key: 'id'
      }
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "วันที่สร้างข้อมูล"
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
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mas_impacts',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "fki_fk_imp_activity_id",
        fields: [
          { name: "activity_id" },
        ]
      },
      {
        name: "fki_fk_imp_created_by",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "fki_fk_imp_updated_by",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "master_impacts_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
