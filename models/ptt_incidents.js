const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ptt_incidents', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "รหัสหลักเอกสารประวัติเหตุการ",
      primaryKey: true
    },
    doc_no: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "เลขที่เอกสาร"
    },
    datetime_incident: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "วันที่เวลาเกิดเหตุการณ์"
    },
    datetime_incident_report: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "วันที่เวลารายงานผลเหตุการณ์"
    },
    date_incident: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "วันที่เกิดเหตุการณ์"
    },
    date_incident_report: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "วันที่รายงานผลเหตุการณ์"
    },
    locale: {
      type: DataTypes.STRING(60),
      allowNull: true,
      comment: "ชื่อสถานที่เกิดเหตุการณ์"
    },
    type_incident: {
      type: DataTypes.STRING(60),
      allowNull: true,
      comment: "ประเภทเหตุการณ์"
    },
    description_incident: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "รายละเอียดเพิ่มเติม"
    },
    materials_damage: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ความเสียหายของวัสดุ"
    },
    nature_damage: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ความเสียหายที่เกิดขึ้นตามธรรมชาติ"
    },
    substance_inflicting_damage: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "สารที่ก่อให้เกิดความเสียหาย"
    },
    damage_cost: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "ค่าเสียหายจากเหตุการณ์"
    },
    future_incidents_prevented: {
      type: DataTypes.STRING(60),
      allowNull: true,
      comment: "การป้องกันเหตุการณ์ในอนาคต"
    },
    'incidents prevented_active': {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: "คำอธิบายการแนบเอกสาร true = yes fales = no"
    },
    question_suggestion: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "สิ่งที่ควรทำ (หรือเคยทำ) เพื่อดำเนินการตามคำแนะนำที่ได้ตรวจสอบข้างต้น\nWhat should be (or has been) done to carry out the suggestion(s) checked above?"
    }
  }, {
    sequelize,
    tableName: 'ptt_incidents',
    schema: 'ptt_data',
    timestamps: false,
    indexes: [
      {
        name: "ptt_incidents_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
