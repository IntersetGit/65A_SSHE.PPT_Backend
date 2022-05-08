const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('logs', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัส log การทำงานของระบบ",
      primaryKey: true
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "รหัสผู้ใช้งานที่ใช้งานระบบ",
      references: {
        model: 'sysm_users',
        key: 'id'
      }
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "page ที่เข้าใช้งาน ณ ช่วงเวลานั้นๆ"
    },
    action: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "การกระทำกับระบบ ณ ช่วงเวลานั้น"
    },
    error: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "กระบวนการทำงานมีปัญหาอะไรหรือไม่"
    },
    ip: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ตำแหน่งผุ้ใช้งาน"
    },
    mac_id: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "รหัสอุปกรณ์เครื่องข่ายที่เข้าใช้งานระบบ"
    },
    device: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "อุปกรณ์ที่เข้าใช้งานระบบ"
    },
    browser: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "browser ที่เข้าใช้งานระบบ"
    },
    logdate: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "วันเวลาที่บันทึก log"
    },
    os: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sysm_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    method: {
      type: DataTypes.STRING(7),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'logs',
    schema: 'system',
    timestamps: false,
    indexes: [
      {
        name: "fki_fk_log_user_id",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "logs_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
