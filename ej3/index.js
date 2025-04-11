let http = require("http");
const numbers = require("./numbers");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(document.write(numbers.isEven(4)));
  })
  .listen(8082);
