module.exports = function (app) {

    app.get('/noticias', function (request, response) {

        var mysql = require('mysql');

        var connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'matheus',
            password : '1234',
            database : 'portal_noticias'
        });
        

        connection.query('select * from noticias', function(error, result){
            response.send(result);
        });


        //response.render("noticias/noticias")
    });
};