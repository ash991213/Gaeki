"use strict";
module.exports = (sequelize, DataTypes) => {
    const Gauge = sequelize.define('Gauge', {
        gauge: {
            type: DataTypes.INTEGER,
            defaultValue: 100,
            allowNull: false,
        },
    }, {
        timestamps: false,
        paranoid: false,
        tableName: 'Gauge',
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    });
    Gauge.associate = (models) => {
        Gauge.belongsTo(models.User, { foreignKey: 'user_idx', sourceKey: 'id' });
    };
    return Gauge;
};
