"use strict";
module.exports = (sequelize, DataTypes) => {
    const Click_Gold = sequelize.define('Click_Gold', {
        click_Gold: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        timestamps: false,
        paranoid: false,
        tableName: 'Click_Gold',
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    });
    Click_Gold.associate = (models) => {
        Click_Gold.belongsTo(models.User, { foreignKey: 'user_idx', sourceKey: 'id' });
    };
    return Click_Gold;
};
