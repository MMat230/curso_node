function NoticiaDAO(connection){
    this._connection = connection;
}

NoticiaDAO.prototype.getNoticias = function(callback){
    this._connection.query('select * from noticias', callback);
}

NoticiaDAO.prototype.getNoticia = function(callback){
    this._connection.query('select * from noticias where id_noticia = 1', callback);
}

NoticiaDAO.prototype.salvarNoticia = function(noticia, callback){
    //o nome das variáveis json devem ser iguais as colunas na tabela
    this._connection.query('insert into noticias set ?', noticia, callback)
}

module.exports = function() {
    return NoticiaDAO;
};