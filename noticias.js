var http = require('http');

var server = http.createServer(function (request, response) {

    var categoria = request.url;

    if (categoria == '/tecnologia')
        response.end("<html><body> Notícias de Tecnologia </body></html>");

    else if (categoria == '/moda')
        response.end("<html><body> Notícias de Moda</body></html>");

    else if (categoria == '/beleza')
        response.end("<html><body> Notícias de Beleza </body></html>");

    else
        response.end("<html><body> Portal de Notícias </body></html>");
});

server.listen(3000);