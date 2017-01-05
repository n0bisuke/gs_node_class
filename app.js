'use strict'

const http = require('http');
const fs = require('fs');
const PORT = 3000;

const indexPage = (req, res) => {
  fs.readFile(__dirname + '/index.html', {encoding: 'utf8'}, (err, html) => {
    if (err) {
      res.statusCode = 500;
      res.end('Error!');
    }
    //ファイルの読み込みが成功したらHTMLを返す
    else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(html);
    }
  });
}

const postPage = (req, res) => {
  let body = '';
  req.on('readable', (chunk) => {
    body += req.read();
  });
  req.on('end', () => {
    if(body === '' || body === null) return;
    res.end(body);
  });
}

http.createServer((req, res) => {
  // ルート(/)へのGETリクエストの時の処理
  if (req.url === '/' && req.method === 'GET') {
    indexPage(req, res);
  }
  
  // /postPageへのpostリクエストの時の処理
  else if (req.url === '/postPage' && req.method === 'POST'){
   postPage(req, res);
  }

  // その他
  else{
    res.statusCode = 404;
    res.end('Not Found!!');
  }

}).listen(PORT);
 
console.log(`Server running at http://localhost:${PORT}`);