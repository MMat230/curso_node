module.exports = function (app) {

    app.get('/noticias', function (request, response) {
        var connection = app.config.db_connection();
        connection.query('select * from noticias', function(error, result){
            //response.send(result);
            response.render("noticias/noticias", {noticias : result})
        });
    });
    
};