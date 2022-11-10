const Sequelize = require('sequelize');
const sequelize = new Sequelize('aruskas','root','',{dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;
global.sequelize = sequelize;