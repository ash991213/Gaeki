'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};
let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
}
else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}
const User = require('./user.js')(sequelize, DataTypes);
const Click_Gold = require('./click_Gold.js')(sequelize, DataTypes);
const Auto_Gold = require('./auto_Gold.js')(sequelize, DataTypes);
const Gauge = require('./gauge.js')(sequelize, DataTypes);
fs.readdirSync(__dirname)
    .filter((file) => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
})
    .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
});
Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = User;
db.Click_Gold = Click_Gold;
db.Auto_Gold = Auto_Gold;
db.Gauge = Gauge;
module.exports = db;
