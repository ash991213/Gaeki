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
        background_sound: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: true,
        },
        sound_effect: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: true,
        },
    }, {
        timestamps: false,
        paranoid: false,
        tableName: 'User',
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    });
    // User.create({
    // 	userid: 'test1',
    // 	nickname: '1 스테이지 번호 1',
    // 	stage: 1,
    // 	gold: 12345,
    // });
    // User.create({
    // 	userid: 'test2',
    // 	nickname: '1 스테이지 번호 2',
    // 	stage: 1,
    // 	gold: 12346,
    // });
    // User.create({
    // 	userid: 'test3',
    // 	nickname: '1 스테이지 번호 3',
    // 	stage: 1,
    // 	gold: 12347,
    // });
    // User.create({
    // 	userid: 'test4',
    // 	nickname: '1 스테이지 번호 4',
    // 	stage: 1,
    // 	gold: 12348,
    // });
    // User.create({
    // 	userid: 'test5',
    // 	nickname: '1 스테이지 번호 5',
    // 	stage: 1,
    // 	gold: 12349,
    // });
    // User.create({
    // 	userid: 'test6',
    // 	nickname: '1 스테이지 번호 6',
    // 	stage: 1,
    // 	gold: 12350,
    // });
    // User.create({
    // 	userid: 'test7',
    // 	nickname: '1 스테이지 번호 7',
    // 	stage: 1,
    // 	gold: 12351,
    // });
    // User.create({
    // 	userid: 'test8',
    // 	nickname: '1 스테이지 번호 8',
    // 	stage: 1,
    // 	gold: 12352,
    // });
    // User.create({
    // 	userid: 'test9',
    // 	nickname: '1 스테이지 번호 9',
    // 	stage: 1,
    // 	gold: 12353,
    // });
    // User.create({
    // 	userid: 'test10',
    // 	nickname: '1 스테이지 번호 10',
    // 	stage: 1,
    // 	gold: 12354,
    // });
    // User.create({
    // 	userid: 'test11',
    // 	nickname: '1 스테이지 번호 11',
    // 	stage: 1,
    // 	gold: 12355,
    // });
    // User.create({
    // 	userid: 'test12',
    // 	nickname: '1 스테이지 번호 12',
    // 	stage: 1,
    // 	gold: 12356,
    // });
    // User.create({
    // 	userid: 'test13',
    // 	nickname: '1 스테이지 번호 13',
    // 	stage: 1,
    // 	gold: 12357,
    // });
    User.associate = (models) => {
        User.hasOne(models.Status, { foreignKey: 'user_idx', sourceKey: 'id' });
        User.hasOne(models.Auto_Gold, { foreignKey: 'user_idx', sourceKey: 'id' });
        User.hasOne(models.Auto_Exp, { foreignKey: 'user_idx', sourceKey: 'id' });
    };
    return User;
};
