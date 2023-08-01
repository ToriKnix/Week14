const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/index');

class Comment extends Model {}

Comment.init(
  {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Comment',
  }
);

module.exports = Comment;

