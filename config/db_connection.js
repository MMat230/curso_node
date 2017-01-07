var mysql = require('mysql');

var connMySQL = function(){
    return mysql.createConnection({
        host     : 'localhost',
        user     : 'matheus',
        password : '1234',
        database : 'portal_noticias'
    });
}
module.exports = function() {
    return connMySQL;
}   