const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];

const sequelize = new Sequelize(config.DB_NAME, config.user, config.password, {
  host: config.host,
  dialect: config.dialect,
  logging: false 
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
