let http = require('http');
let fs = require('fs');
let path = require('path');

http.createServer(function(req, res){
    if(req.url === "/"){
        fs.readFile('main.html', null, function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
            });
    }
    else if(req.url.match('style.css')){
        var cssPath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(cssPath);
        res.writeHead(200, {"Content-Type": "text/css"});
        fileStream.pipe(res);
    }
    else if (req.url === "/err.css") {
        var cssPath = path.join(__dirname, 'err.css');
        var fileStream = fs.createReadStream(cssPath);
        res.writeHead(200, {"Content-Type": "text/css"});
        fileStream.pipe(res);
    }
    else{
        fs.readFile('err.html', null, function(err, html){
            if(err){
                res.writeHead(500, {"Content-Type": "text/html"});
                res.end("Ошибка сервера");
                return;
            }
            res.writeHead(404,{"Content-Type": "text/html"});
            res.end(html);
        });
    }

}).listen(3000, () => console.log('Сервер запущен'));