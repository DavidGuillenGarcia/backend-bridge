let http = require("http");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
    res.setHeader("Access-Control-Max-Age", 2592000);

    res.writeHead(200, { "Content-Type": "application/json" });
    const data = {
      url: req.url,
      method: req.method,
    };
    res.write(JSON.stringify(data));
    res.end();
  })
  .listen(8080);
