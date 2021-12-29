const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('flight', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    departure_airport_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    arrival_airport_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    departure_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    arrivalTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    empty_seat_count: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    booked_seat_count: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'flight',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idFlight_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
