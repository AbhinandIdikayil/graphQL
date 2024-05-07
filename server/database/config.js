 const dbConfig = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "735615",
    DB: "testdb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };

  module.exports = {
    dbConfig
  }