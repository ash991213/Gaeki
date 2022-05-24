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
const Auto_Gold = require('./auto_Gold.js')(sequelize, DataTypes);
const Auto_Exp = require('./auto_Exp.js')(sequelize, DataTypes);
const Status = require('./status.js')(sequelize, DataTypes);
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
db.Auto_Gold = Auto_Gold;
db.Auto_Exp = Auto_Exp;
db.Status = Status;
module.exports = db;
