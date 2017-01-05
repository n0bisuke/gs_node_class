'use strict'

const http = require('http');
const fs = require('fs');
const PORT = 3000;

http.createServer((req, res) => {
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
}).listen(PORT);
 
console.log(`Server running at http://localhost:${PORT}`);