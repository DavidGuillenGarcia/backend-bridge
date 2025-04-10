let http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Server is running properly");
  })
  .listen(8080);

const reyes = [
  "Rey del quitanieves",
  "Rey Dau",
  "Rey Misterio",
  "Rey Dabra",
  "Rey del cachopo",
];

console.log("Top 5 reyes");
console.log("-----------");
for (let i = 0; i < reyes.length; i++) {
  console.log(`Top ${i}: ${reyes[i]}`);
}
