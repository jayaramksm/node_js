const http = require("http");
const fs = require("fs");

const sever = http.createServer((req, res) => {
    console.log("req==>", req.url)
    if (req.url == "/text") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("sending plan text")
    } else if (req.url == "/html") {
        // res.end("<h1>Hello World!<h1/>") 
        const html = fs.readFileSync("./practice/htmlcon.html", "utf-8");
        res.end(html)
    } else if (req.url == "/") {
        const json = {
            name:"jayaram",
            age:26
        }
        res.end(JSON.stringify(json))
    }

});

sever.listen(3000, () => {
    console.log("sever running");

})