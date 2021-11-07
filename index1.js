// creating our first server
const http = require('http');
const port =8080;

// file module fs is reqire
const fs=require('fs');

function requesthandler(req , res){
  console.log(req.url);
  // res.end('We Got It');
  // serving HTML
  res.writeHead(200,{'content-type':'text/html'});
  // res.end('<h1> We Got It</h1>');

  //executing multiple html pages
  let filePath;
  switch(req.url){
    case '/':
      filePath='./index.html'
      break;
    
    case '/profile':
      filePath='./profile.html'
      break;
    
    default:
      filePath ='./404.html'
  }
  fs.readFile(filePath, function(err,data){
    if(err){
      console.log('error',err);
      return res.end('<h1> Eror! </h1>');
    }
    return res.end(data);
  });
  
}
const server = http.createServer(requesthandler);
server.listen(port ,function(err)
{
  if(err){
    console.log(err);
    return;
  }
  console.log("server is up and running on port",port);
})