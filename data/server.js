let http = require("http");
let props = require("./data");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title></title>
      </head>
      <body>
          <h1>${props.properties.title}</h1>
          <h4>${props.properties.subtitle}</h4>
          <p>${props.properties.description}</p>
      </body>
      </html>`);
    res.end();
  })
  .listen(8080);
