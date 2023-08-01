const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

const models = {};

models.User = require('./User')(sequelize, Sequelize);
models.BlogPost = require('./BlogPost')(sequelize, Sequelize);
models.Comment = require('./Comment')(sequelize, Sequelize);

models.User.hasMany(models.BlogPost, { foreignKey: 'user_id', onDelete: 'CASCADE' });
models.BlogPost.belongsTo(models.User, { foreignKey: 'user_id' });

models.User.hasMany(models.Comment, { foreignKey: 'user_id', onDelete: 'CASCADE' });
models.Comment.belongsTo(models.User, { foreignKey: 'user_id' });

models.BlogPost.hasMany(models.Comment, { foreignKey: 'blogpost_id', onDelete: 'CASCADE' });
models.Comment.belongsTo(models.BlogPost, { foreignKey: 'blogpost_id' });

module.exports = { sequelize, ...models };
