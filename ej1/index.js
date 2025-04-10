let http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Mi primer script en The Bridge");
  })
  .listen(8082);
