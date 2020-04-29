//  Set up database connection
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 8080,
    user: 'root',
    password: "",
    database: ''
});

connection.connect(function(error){
    if (error) throw error;
    console.log('Result: ' + connection.resultId);

})

module.exports = connection;