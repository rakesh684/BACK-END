// creating our first server
const http = require('http');
const port = 8000;

// file module fs is reqire
const fs = require('fs');

//creating request handler
function requestHandler(req,res){
  console.log(req.url);
  // res.end('We Got It');
  // serving HTML

  res.writeHead(200,{'content-type':'text/html'});
  // res.end('<h1> We Got It</h1>');

  // reading html file here
  fs.readFile('./index.html', function(err,data){
    if(err){
      console.log('error',err);
      return res.end('<h1>Error !!</h1>');
    }
    return res.end(data);
  })
}

// Reading and serving HTML from file



const server = http.createServer(requestHandler);
server.listen(port,function(err){
  if(err){
    console.log(err);
    return;
  }
  console.log("Server is up and running on port",port);
});