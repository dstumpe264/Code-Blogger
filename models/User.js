const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model
class User extends Model {}

User.init(
  // Define fields/columns on model
  // An `id` is automatically created by Sequelize, though best practice would be to define the primary key ourselves
  {
    name: {
      type: DataTypes.STRING
    },
    password: {
        type: DataTypes.String
    }
  },
  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;
