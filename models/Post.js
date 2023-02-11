const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model
class Post extends Model {}

Example.init(
  // Define fields/columns on model
  // An `id` is automatically created by Sequelize, though best practice would be to define the primary key ourselves
  {
    title: {
      type: DataTypes.STRING
    },
    text: {
        type: DataTypes.BLOB
    }
  },
  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: 'post'
  }
);

module.exports = Post;
