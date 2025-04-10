let http = require("http");

const dt = require("./date");

const Logger = require("logplease");
const logger = Logger.create("utils");
logger.debug(`This is a debug message`);
logger.log(`This is a log message`); // alias for debug()
logger.info(`This is a info message`);
logger.warn(`This is a warning`);
logger.error(`This is an error`);

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Server is running properly at " + dt.myDateTime());
  })
  .listen(8082);
