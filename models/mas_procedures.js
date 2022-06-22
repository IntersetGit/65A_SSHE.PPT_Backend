const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mas_procedures', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสหลักการปฏิบัติงาน",
      primaryKey: true
    },
    code_id: {
      type: DataTypes.STRING(5),
      allowNull: true,
      comment: "รหัสกลุ่มปฏิบัติงาน"
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: false,
      comment: "ชื่อขั้นตอนปฏิบัติงาน"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "คำอธิบายปฏิบัติงาน"
    },
    isuse: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "สถานะข้อมูล 0 = ไม่ใช้งาน 1 = ใช้งาน"
    },
    mitigation_id: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "รหัสจากผลกระทบที่ได้"
    },
    mitigation_code: {
      type: DataTypes.STRING(5),
      allowNull: true,
      comment: "รหัสกลุ่มจากผลกระทบที่ได้"
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
    }
  }, {
    sequelize,
    tableName: 'mas_procedures',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "fki_fk_pocd_created_by",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "fki_fk_pocd_mitigation_id",
        fields: [
          { name: "mitigation_id" },
        ]
      },
      {
        name: "fki_fk_pocd_updated_by",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "master_procedures_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
