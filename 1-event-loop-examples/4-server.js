const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('request event');
    res.end('hello world');
})

server.on('request',(req,res)=>{
    res.end('welcome');
})

server.listen(4000,()=>{
    console.log('server listening on port : 4000');
})