console.log("Hello ");

const http = require('http');

const PORT = 3000;
http.createServer(function (request, response)
{
    const responseData = {
        status: 'ok'
    };

    response.writeHead(200, {
        'Content-Type' : 'application/json'
    });
    response.end(JSON.stringify(responseData))
}).listen(PORT);

console.log(`Node servier is runnign on port ${PORT}`);