var http = require('http');

var handleRequest = function(request, response) {
  var now = new Date()
  console.log('Received request for URL: ' + request.url + ' ' + now.toString());
  response.writeHead(200);
  response.end('Hello World From node!');
};

var www = http.createServer(handleRequest);
www.listen(8888);
