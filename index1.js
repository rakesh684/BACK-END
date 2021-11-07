// creating our first server
const http = require('http');
const port = 8000;
//creating request handler
function requestHandler(req,res){
  console.log(req.url);
  res.end('We Got It');
}

const server = http.createServer(requestHandler);
server.listen(port,function(err){
  if(err){
    console.log(err);
    return;
  }
  console.log("Server is up and running on port",port);
});