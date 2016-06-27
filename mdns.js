// Load the http module to create an http server.
var http = require('http');
var mdns = require('mdns-js');
mdns.excludeInterface('0.0.0.0');

var PORT = 9001;

var service = mdns.createAdvertisement(mdns.tcp('_http'), PORT, {
  name:'Sweet Television Device',
  txt:{
    txtvers:'1'
  }
});
service.start();

var output = `
  <!doctype html>
  <html>
    <head>
      <style>
        html, body {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000;
          flex-direction: column;
        }
        h1 {
          color: #fff;
          text-align: center;
          font-size: 7.5vw;
          font-family: sans-serif;
        }
        h2 {
          color: #fff;
          text-align: center;
          font-size: 5vw;
          font-family: sans-serif;
        }
      </style>
    </head>
    <body>
      <h1>TELEVISION INTERFACE</h1>
      <h2>it is a good one</h2>
    </body>
  </html>
`;

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end(output);
});

server.listen(PORT);
