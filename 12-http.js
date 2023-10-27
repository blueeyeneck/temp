const http=require('http');

// console.log(http);

const server=http.createServer((req,res)=>{
    // console.log(req.url);
    // console.log(res);
    // res.write('welcome to our home page');
    console.log("req.url:-",req.url);

    if(req.url==='/'){
        console.log('in /');
        res.end('welcome to our home page');
    }
    else if(req.url==='/about'){
        console.log('in /about');
        res.end('here is our short history');
    }
    else{
        res.end('<h1>Oops</h1><p>this is paragraph</p>');
    }
});

server.listen(5000,(req,res)=>{
    console.log('server started');
});