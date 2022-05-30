"use strict";
module.exports = (sequelize, DataTypes) => {
    const Status = sequelize.define('Status', {
        coding: {
            type: DataTypes.INTEGER,
            defaultValue: 120000,
            allowNull: false,
        },
        hp: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
            allowNull: false,
        },
        typing: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
            allowNull: false,
        },
        luck: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
            allowNull: false,
        },
        patience: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false,
        },
        user_idx: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false,
        },
    }, {
        timestamps: false,
        paranoid: false,
        tableName: 'Status',
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    });
    Status.associate = (models) => {
        Status.belongsTo(models.User, { foreignKey: 'user_idx', sourceKey: 'id' });
    };
    return Status;
};
