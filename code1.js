const http = require("http");
const fs = require("fs");
const path = require('path');
const server = http
  .createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
      fs.readFile(path.join(__dirname,'message.txt'), { encoding: "utf-8" }, (err, data) => {
        if (err) {
          console.log(err);
        }
        console.log(`data from file` + data);
        res.write("<html>");
        res.write("<head><title>Enter Message</title></head>");
        res.write(`<body>${data}</body>`);
        res.write(
          "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
        );

        res.write("</html>");
        return res.end();
      });
    } else if (url === "/message" && method === "POST") {
      const body = [];
      req.on("data", (chunk) => {
        // console.log(chunk);
        body.push(chunk);
      });
      return req.on("end", () => {
        const parsedBody = Buffer.concat(body).toString();
        console.log('parsedbody>>>>', parsedBody);
        const message = parsedBody.split("=")[1];
        fs.writeFile("message.txt", message, (err) => {
          if(err){
            console.log(err)
          }
          // console.log(`inside fs.writefile`);
          res.statusCode = 302;
          res.setHeader("Location", "/");
          return res.end();
        });
      });
    } 
    else {
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>My first Page</title></head>");
      res.write("<body><h1>Welcome to my Node Js project</h1></body>");
      res.write("</html>");
      res.end();
    }
  })
  .listen(7500);
