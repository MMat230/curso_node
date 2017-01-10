module.exports = function(application) {
    application.get('/formulario_inclusao_noticia', function(request, response) {
        response.render("admin/form_add_noticia")
    });

    application.post('/noticias/salvar', function(request, response){
        var noticia = request.body;
        var connection = application.config.db_connection();
        var noticiasModel = application.app.models.noticiasModel;

        noticiasModel.salvarNoticia(noticia, connection, function(error, result){
            // a função redirect é usada para o que mesmo registro no BD não seja
            // cadastrado duas vezes caso o usuário atualize a página.
            response.redirect('/noticias');
        });
    });
};