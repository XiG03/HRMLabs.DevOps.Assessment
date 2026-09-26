const http = require("http");

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";

const server = http.createServer((req, res) => {
    console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);

    if (req.url === "/health") {
        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
            status: "healthy",
            environment: NODE_ENV
        }));

        return;
    }

    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(`
        <html>
            <head>
                <title>HRM Labs</title>
            </head>
            <body>
                <h1>HRM Labs Mini Project</h1>
                <p>Application is running successfully.</p>
                <p>Environment: ${NODE_ENV}</p>
                <p>Health: <a href="/health">/health</a></p>
            </body>
        </html>
    `);
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Application running on port ${PORT}`);
    console.log(`Environment: ${NODE_ENV}`);
});