const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });

        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Node.js Server</title>
                <style>
                    * {
                        box-sizing: border-box;
                        margin: 0;
                        padding: 0;
                    }

                    body {
                        font-family: Arial, sans-serif;
                        background: linear-gradient(135deg, #eef2ff, #dbeafe);
                        min-height: 100vh;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .container {
                        width: 700px;
                        background: white;
                        border-radius: 20px;
                        padding: 40px;
                        box-shadow: 0 10px 30px rgba(0,0,0,0.12);
                        text-align: center;
                    }

                    .logo {
                        width: 80px;
                        height: 80px;
                        background: #2563eb;
                        color: white;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 32px;
                        font-weight: bold;
                        margin: 0 auto 20px;
                    }

                    h1 {
                        color: #1e293b;
                        margin-bottom: 12px;
                    }

                    .subtitle {
                        color: #64748b;
                        font-size: 18px;
                        margin-bottom: 30px;
                    }

                    .cards {
                        display: flex;
                        gap: 15px;
                        justify-content: center;
                        margin-bottom: 30px;
                    }

                    .card {
                        flex: 1;
                        padding: 20px;
                        background: #f8fafc;
                        border-radius: 12px;
                        border: 1px solid #e2e8f0;
                    }

                    .card h3 {
                        color: #2563eb;
                        margin-bottom: 8px;
                    }

                    .card p {
                        color: #64748b;
                    }

                    .status {
                        background: #dcfce7;
                        color: #166534;
                        padding: 12px;
                        border-radius: 10px;
                        font-weight: bold;
                    }

                    footer {
                        margin-top: 25px;
                        color: #94a3b8;
                        font-size: 14px;
                    }
                </style>
            </head>

            <body>
                <div class="container">

                    <div class="logo">N</div>

                    <h1>Node.js HTTP Server</h1>

                    <p class="subtitle">
                        A web server created using Node.js built-in HTTP module
                    </p>

                    <div class="cards">

                        <div class="card">
                            <h3>Server</h3>
                            <p>Node.js</p>
                        </div>

                        <div class="card">
                            <h3>Module</h3>
                            <p>Built-in HTTP</p>
                        </div>

                        <div class="card">
                            <h3>Port</h3>
                            <p>3000</p>
                        </div>

                    </div>

                    <div class="status">
                        ● Server is running successfully
                    </div>

                    <footer>
                        Created for Node.js Practical
                    </footer>

                </div>
            </body>
            </html>
        `);
    }

    else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });

        res.end(`
            <html>
            <head>
                <title>About Server</title>
                <style>
                    body {
                        font-family: Arial;
                        background: #f1f5f9;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                    }

                    .box {
                        background: white;
                        padding: 40px;
                        width: 600px;
                        border-radius: 15px;
                        box-shadow: 0 8px 25px rgba(0,0,0,0.1);
                    }

                    h1 {
                        color: #2563eb;
                        margin-bottom: 15px;
                    }

                    p {
                        color: #475569;
                        line-height: 1.7;
                    }

                    a {
                        display: inline-block;
                        margin-top: 20px;
                        text-decoration: none;
                        background: #2563eb;
                        color: white;
                        padding: 10px 20px;
                        border-radius: 8px;
                    }
                </style>
            </head>

            <body>
                <div class="box">
                    <h1>About Node.js Server</h1>

                    <p>
                        This web server is created using the built-in
                        HTTP module of Node.js. It handles client requests
                        and sends HTML responses directly to the browser.
                    </p>

                    <a href="/">Back to Home</a>
                </div>
            </body>
            </html>
        `);
    }

    else {
        res.writeHead(404, { "Content-Type": "text/html" });

        res.end(`
            <html>
            <head>
                <title>404 - Page Not Found</title>
                <style>
                    body {
                        font-family: Arial;
                        background: #f8fafc;
                        text-align: center;
                        padding-top: 120px;
                    }

                    h1 {
                        font-size: 70px;
                        color: #ef4444;
                    }

                    p {
                        color: #64748b;
                        font-size: 20px;
                    }

                    a {
                        display: inline-block;
                        margin-top: 20px;
                        background: #2563eb;
                        color: white;
                        padding: 12px 25px;
                        text-decoration: none;
                        border-radius: 8px;
                    }
                </style>
            </head>

            <body>
                <h1>404</h1>
                <p>The requested page was not found.</p>
                <a href="/">Go Home</a>
            </body>
            </html>
        `);
    }
});

server.listen(3000, () => {
    console.log("=================================");
    console.log("   Node.js HTTP Server Started");
    console.log("=================================");
    console.log("Server: http://localhost:3000");
    console.log("About : http://localhost:3000/about");
    console.log("Status: Running");
});