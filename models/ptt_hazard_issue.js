const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ptt_hazard_issue', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    hazard_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    active: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "1 active 0 non active"
    },
    hazard_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    issue_type_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'mas_sshe_issue',
        key: 'id'
      }
    },
    created_by: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'sysm_users',
        key: 'id'
      }
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'sysm_users',
        key: 'id'
      }
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ptt_hazard_issue',
    schema: 'ptt_data',
    timestamps: false,
    indexes: [
      {
        name: "ptt_hazard_issue_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
