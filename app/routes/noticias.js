module.exports = function (app) {

    app.get('/noticias', function (request, response) {
        var connection = app.config.db_connection();
        var noticiasModel = new app.app.models.NoticiaDAO(connection);

        noticiasModel.getNoticias(function(error, result){
            response.render("noticias/noticias", {noticias : result})
        });
    });
    
};