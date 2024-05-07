const { dbConfig } = require('../database/config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
})

const db = {};

db.sequelize = sequelize
db.Sequelize = Sequelize

db.Author = require('./author.model')(sequelize, Sequelize, db);
db.Book = require('./book.model')(sequelize, Sequelize, db)


Object.values(db).forEach((model) => {
    if (model.associate) {
      model.associate(db);
    }
  });
  

module.exports = db 