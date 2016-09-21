var router                 = require("./router")
     ,database             = require("./db")
     ,server               = require("./server")
     ,express              = require('express')
     ,application_main     = express();



application_main.get('/', function (req, res) {
  
  	res.send("working");
  
});



/**
* Upping the servers
*/
var server_application = application_main.listen(server.ApplicationPortNumber, function () {
   console.log('Application server listening at %s',  server.ApplicationPortNumber)
});