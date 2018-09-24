'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        email: DataTypes.STRING(255),
        sex: DataTypes.STRING(5),
        profile: DataTypes.STRING(500),
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {});
    User.associate = function (models) {
        // associations can be defined here
    };
    return User;
};