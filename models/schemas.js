var { Sequelize, DataTypes } = require('sequelize');

const user = {
    // Model attributes are defined here
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
};

const game = {
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    note: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    completion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    playtime: {
        type: DataTypes.TIME,
        allowNull: true
    }
};
