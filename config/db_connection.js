var mysql = require('mysql');

module.exports = function() {
        return mysql.createConnection({
            host     : 'localhost',
            user     : 'matheus',
            password : '1234',
            database : 'portal_noticias'
        });
}