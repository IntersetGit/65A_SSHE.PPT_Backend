const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mas_sshe_issue', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    issue_type_name: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "ชื่อ sshe issue"
    },
    active: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "1 ใช้งาน 0 ไม่ใช้งาน"
    },
    issue_type_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    created_by: {
      type: DataTypes.UUID,
      allowNull: true
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.UUID,
      allowNull: true
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mas_sshe_issue',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "mas_sshe_issue_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
