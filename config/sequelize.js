const {Sequelize} = require('sequelize')

const sequelize = new Sequelize({
    database: 'belajar-cruds-v2',
    host: 'localhost',
    username: 'farid',
    password: 'Farid982',
    dialect: 'mysql'
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})();

module.exports = sequelize;