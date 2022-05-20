"use strict";
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        userid: {
            type: DataTypes.STRING(32),
            allowNull: true,
            unique: true,
        },
        nickname: {
            type: DataTypes.STRING(16),
            allowNull: true,
        },
        stage: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 1,
        },
        gauge: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 100,
        },
        gold: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0,
        },
        exp: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0,
        },
    }, {
        timestamps: false,
        paranoid: false,
        tableName: 'User',
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    });
    User.associate = (models) => {
        User.hasOne(models.Status, { foreignKey: 'user_idx', sourceKey: 'id' });
        User.hasOne(models.Auto_Gold, { foreignKey: 'user_idx', sourceKey: 'id' });
        User.hasOne(models.Auto_Exp, { foreignKey: 'user_idx', sourceKey: 'id' });
    };
    return User;
};
