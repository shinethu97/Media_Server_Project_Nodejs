let http=require('http');
let fs=require("fs");

let server=http.createServer((req,res)=>{
    
    myReaderStream=fs.createReadStream("index.html","utf-8");
    res.writeHead(200,{"content-type":"text/html"});
    myReaderStream.pipe(res);

})

server.listen(3000,()=>{
    console.log("Server is Running");
});