"use strict";
module.exports = (sequelize, DataTypes) => {
    const Auto_Gold = sequelize.define('Auto_Gold', {
        pc: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        desk: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        chair: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
    }, {
        timestamps: false,
        paranoid: false,
        tableName: 'Auto_Gold',
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    });
    Auto_Gold.associate = (models) => {
        Auto_Gold.belongsTo(models.User, { foreignKey: 'user_idx', sourceKey: 'id' });
    };
    return Auto_Gold;
};