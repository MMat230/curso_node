module.exports = function (app) {

    app.get('/noticia', function (request, response) {
        var connection = app.config.db_connection();
        connection.query('select * from noticias where id_noticia = 1', function(error, result){
            //response.send(result);
            response.render("noticias/noticia", {noticia : result})
        });
    });
    
};