var dbConnection = require ('../../config/db_connection')

module.exports = function (app) {

    var connection = dbConnection();

    app.get('/noticias', function (request, response) {
        connection.query('select * from noticias', function(error, result){
            //response.send(result);
            response.render("noticias/noticias", {noticias : result})
        });
    });
};