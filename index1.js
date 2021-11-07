// creating our first server
const http = require('http');
const port = 8000;
//creating request handler
function requestHandler(req,res){
  console.log(req.url);
  // res.end('We Got It');
  // serving HTML

  res.writeHead(200,{'content-type':'text/html'});
  res.end('<h1> We Got It</h1>');
}

// serving HTML



const server = http.createServer(requestHandler);
server.listen(port,function(err){
  if(err){
    console.log(err);
    return;
  }
  console.log("Server is up and running on port",port);
});