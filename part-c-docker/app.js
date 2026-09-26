const http = require("http");

const port = process.env.PORT || 3000;
const appName = process.env.APP_NAME || "HRM Labs Docker App";

const server = http.createServer((req, res) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);

  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(`
    <html>
      <body>
        <h1>${appName}</h1>
        <p>Docker container is running successfully.</p>
        <p>Port: ${port}</p>
      </body>
    </html>
  `);
});

server.listen(port, () => {
  console.log(`${appName} is running on port ${port}`);
});