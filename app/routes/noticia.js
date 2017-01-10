module.exports = function (app) {

    app.get('/noticia', function (request, response) {
        var connection = app.config.db_connection();
        var noticiasModel = new app.app.models.NoticiaDAO(connection);

        noticiasModel.getNoticia(function(error, result){
            response.render("noticias/noticias", {noticias : result})
        });
    });
    
};