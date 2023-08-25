const http = require ('http');
const server = http.createServer((req, res) => {
  const url = req.url;
  if(url === '/home'){
    res.write('<h1>Welcome, to Home Page<h1>');
    return res.end();
  }
  if(url === '/about'){
    res.write('<h1>Welcome, to About Page</h1>');
     return res.end();
  }
  if( url === '/node'){
    res.setHeader('Content-Type','text/html')
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write ("<body><h1>Welcome to my Node Js project</h1></body>");
    res.write('</html>')
    return res.end();
  }
  
}).listen(7500)


