'use strict'

const http = require('http');
const PORT = 3000;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="utf-8">
    <title>ログイン</title>
</head>
<body>
    <form method="post" action="/post">
        <p>ユーザID:<input type="text" name="userid"></p>
        <p>パスワード:<input type="password" name="password"></p>
        <p><input type="submit"></p>
    </form>
</body>
</html>`);
}).listen(PORT);
 
console.log(`Server running at http://localhost:${PORT}`);