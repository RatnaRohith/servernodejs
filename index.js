const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res) => {
    // if(req.url === '/'){
    //     fs.readFile(path.join(__dirname,'public','index.html'),(err, Content) =>{
    //         if (err) throw err;
    //         res.writeHead(200, {'Content-Type': 'text/html'});
    //         res.end(Content);
    //     });
    // }
    // if(req.url === '/api/users'){
    //     const users = [
    //         {name:'bob',age:34},
    //         {name:'john',age:23}
    //     ];
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //     res.end(JSON.stringify(users));
    //     // fs.readFile(path.join(__dirname,'public','about.html'),(err, Content) =>{
    //     //     if (err) throw err;
    //     //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     //     res.end(Content);
    //     // });
    // }
    //build file path
    let filepath = path.join(__dirname,'public',req.url === '/' ? 'index.html' : req.url);
    // console.log(filepath)
    res.end();
    //Extension of file
    let extname = path.extname(filepath);

    //initial content type
    let contentType = '/text/html';

    //Check ext and set content type
    switch(extname){
        case '.js':
        contentType = 'text/javscript';
        case '.css':
        contentType = 'text/css';
        case '.json':
        contentType = 'application/json';
        case '.png':
        contentType = 'image/png';
        case '.jpg':
        contentType = 'image/jpg';
        break;
    }
    //read File
    fs.readFile(filepath, (err, content) => {
        if(err){
            if(err.code == 'ENONET'){
                //Page not found
                fs.readFile(path.join(__dirname,'public','404.html'),(err,content) =>{
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(content,'utf8');
                })
            }else{
                //Some Server error
                res.writeHead(500);
                res.end(`Server Error:${err.code}`);
            }
        }else{
            //Success
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content,'utf8');
        }
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT , () => console.log(`server running on port ${PORT}`));

















// const Logger = require('./logger');

// const logger = new Logger();

// // logger.on('message',(data)=> console.log(``));
// logger.on('message',(data)=> console.log('Called Listener',data));


// logger.log('Hello world');
// logger.log('Hi');
// logger.log('Hello'); 
