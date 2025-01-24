const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Tournament = require('./Tournament');

const Participant = sequelize.define('Participant', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tournamentId: {
        type: DataTypes.INTEGER,
        allowNull: true,  // Conform tabelului care permite NULL
        references: {
            model: Tournament,
            key: 'id'
        },
        field: 'tournament_id'  // Mapează la coloana din MySQL
    }
}, {
    timestamps: true  // Sequelize va folosi createdAt și updatedAt
});

Tournament.hasMany(Participant, { foreignKey: 'tournamentId' });
Participant.belongsTo(Tournament, { foreignKey: 'tournamentId' });

module.exports = Participant;
