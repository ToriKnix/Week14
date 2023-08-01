const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class BlogPost extends Model {}
  BlogPost.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'BlogPost',
    }
  );

  return BlogPost;
};

