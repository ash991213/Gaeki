"use strict";
module.exports = (sequelize, DataTypes) => {
    const counte = sequelize.define('Counte', {
        num: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false,
        },
    }, {
        timestamps: false,
        paranoid: false,
        tableName: 'Counte',
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    });
    return counte;
};
