const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('game_tournaments', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
