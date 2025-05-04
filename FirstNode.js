const http = require('http');
const fs = require('fs');
const fileContent = fs.readFileSync('FirstWP.html','utf-8');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(fileContent);
})
server.listen(80,'127.0.0.1',()=>{
    console.log("Hello Sarvesh Mishra ,wellcome to your first Node Class");
})
