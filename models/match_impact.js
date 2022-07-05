const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('match_impact', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    impact_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'mas_impacts',
        key: 'id'
      }
    },
    activity_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'mas_activities',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'match_impact',
    schema: 'ptt_data',
    timestamps: false,
    indexes: [
      {
        name: "match_hazard_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
