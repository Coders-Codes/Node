// const http = require ('http');
// const server = http.createServer((req, res) => {
//   res.write ("<h1>Welcome to my Node Js project</h1>");
//   res.end();
// }).listen(7500)

const http = require ('http');
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type','text/html')
  res.write('<html>');
  res.write('<head><title>My first Page</title></head>');
  res.write ("<body><h1>Welcome to my Node Js project</h1></body>");
  res.write('</html>')
  res.end();
}).listen(7500)

