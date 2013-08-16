var static = require('node-static');

var port = process.env.PORT || 5000;

//
// Create a node-static server instance to serve the './public' folder
//
var file = new static.Server('./site');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    }).resume();
}).listen(port);