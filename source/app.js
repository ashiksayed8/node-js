const { write } = require('fs');
var http = require('http');
var URL = require('url');

var server = http.createServer(function(req,res)  {

    var  myURL="http://rabil.com/blog.html?year=2020&month=july";

     var myURLObj = URL.parse(myURL,true); //URL breaking
     var myHostName = myURLObj.host; //We get host name
     var myPathName = myURLObj.pathname; //We get path name
     var mySearchName = myURLObj.search //We get search name
     res.writeHead(200,{'Content-Type':'text/html'})
     res.write(myHostName); 
    //  res.write(myPathName)
    //  res.write(mySearchName)
     res.end()

});

server.listen(5050);
console.log("Server run success");