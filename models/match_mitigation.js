const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('match_mitigation', {
    impact_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'mas_impacts',
        key: 'id'
      }
    },
    mitigation_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'mas_mitigations',
        key: 'id'
      }
    },
    match_impact_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'match_impact',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'match_mitigation',
    schema: 'ptt_data',
    timestamps: false
  });
};
