const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('extend_flight', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    flight_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'flight',
        key: 'id'
      }
    },
    plane_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'plane',
        key: 'id'
      }
    },
    departure_airport_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'airport',
        key: 'id'
      }
    },
    arrival_airport_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'airport',
        key: 'id'
      }
    },
    departure_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    arrival_time: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'extend_flight',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "flight_id" },
          { name: "plane_id" },
          { name: "departure_airport_id" },
          { name: "arrival_airport_id" },
        ]
      },
      {
        name: "fk_extend_flight_Flight1_idx",
        using: "BTREE",
        fields: [
          { name: "flight_id" },
        ]
      },
      {
        name: "fk_extend_flight_Plane1_idx",
        using: "BTREE",
        fields: [
          { name: "plane_id" },
        ]
      },
      {
        name: "fk_extend_flight_airport1_idx",
        using: "BTREE",
        fields: [
          { name: "departure_airport_id" },
        ]
      },
      {
        name: "fk_extend_flight_airport2_idx",
        using: "BTREE",
        fields: [
          { name: "arrival_airport_id" },
        ]
      },
    ]
  });
};
