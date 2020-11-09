const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'wetube.cqt9qbmvj1eh.eu-west-1.rds.amazonaws.com',
    user: 'admin',
    password: 'saleem123',
    database: 'wetube'
});

connection.connect((errors) => {
    if(errors) {
        throw Error;
    }

    console.log("Connection successfully created..");
});

module.exports = connection;