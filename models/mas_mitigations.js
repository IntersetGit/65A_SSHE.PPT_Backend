const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mas_mitigations', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสหลักกิจกรรมลกระทบที่ได้",
      primaryKey: true
    },
    code_id: {
      type: DataTypes.STRING(5),
      allowNull: true,
      comment: "รหัสกลุ่มกิจกรรมลกระทบที่ได้"
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: false,
      comment: "ชื่อของผลกระทบที่ได้"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "คำอธิบายของผลกระทบ"
    },
    isuse: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "สถานะข้อมูล 0 = ไม่ใช้งาน 1 = ใช้งาน"
    },
    impact_id: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "รหัสผลกระทบของกิจกรรมงาน",
      references: {
        model: 'mas_impacts',
        key: 'id'
      }
    },
    impact_code: {
      type: DataTypes.STRING(5),
      allowNull: true,
      comment: "รหัสกลุ่มผลกระทบของกิจกรรมงาน"
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
    tableName: 'mas_mitigations',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "fki_fk_mtgt_created_by",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "fki_fk_mtgt_impact_id",
        fields: [
          { name: "impact_id" },
        ]
      },
      {
        name: "fki_fk_mtgt_updated_by",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "master_mitigations_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
