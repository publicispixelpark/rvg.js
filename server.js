// Babel register for JSX
require('babel-register')({
  presets: ['es2015', 'react'],
  extensions: [".es6", ".es", ".jsx", ".js"]
});


// Libraries
const React = require('react');
const ReactDOMServer = require('react-dom/server');


// App
const Main = require('./src/main');


// Server
const http = require('http');


// We need a function which handles requests and send response
const handleRequest = (request, response) => {
  // Render to string
  const string = ReactDOMServer.renderToString(React.createFactory(Main)(), {});

  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end(string);
}


// Create a server
const server = http.createServer(handleRequest);


// Lets start our server
server.listen(8000, function(){
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", 8000);
});