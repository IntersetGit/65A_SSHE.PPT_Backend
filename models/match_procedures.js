const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('match_procedures', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    hazard_id: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "รหัสตาราง hazard",
      references: {
        model: 'mas_impacts',
        key: 'id'
      }
    },
    procedures_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'mas_procedures',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'match_procedures',
    schema: 'ptt_data',
    timestamps: false,
    indexes: [
      {
        name: "match_procedures_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
