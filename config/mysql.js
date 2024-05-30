const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'farid',
    password: 'Farid982',
    database: 'belajar-cruds'
});

module.exports = connection;