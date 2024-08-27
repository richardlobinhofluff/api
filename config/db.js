const mysql = require('mysql2')

const db =  mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456789',
    database: 'apinodejs',
    port:3306
});

db.connect((err) => {
    if (err) {
        console.error('Error conneting to the database:',err);
        return;
    }
    console.log('Connected to the MySQL database');
});
module.exports = db;
