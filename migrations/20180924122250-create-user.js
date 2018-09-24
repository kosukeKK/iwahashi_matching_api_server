'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            email: {
                type: Sequelize.STRING(255),
                allowNull: false,
                unique: true
            },
            name: {
                type: Sequelize.STRING(30),
                allowNull: false,
                unique: true
            },
            sex: {
                type: Sequelize.STRING(5),
                allowNull: false
            },
            profile: {
                type: Sequelize.STRING(500)
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false
            }
        }, {
            indexes: [
                {unique: true, fields: ['name']},
                {unique: true, fields: ['email']}
            ]
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Users');
    }
};