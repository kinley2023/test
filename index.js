const http = require("http");
const fs = require('fs');
const { log } = require("console");
const PORT = process.env.PORT;
// const hostname = '127.0.0.1';

 const myServer = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile('index.html', (err, data) => {
        res.writeHead (200, {'content-type':'text/html'});
        res.write(data);
        res.end();
    });
  }
 else if (req.url === "/about") {
    fs.readFile('about.html', (err, data) => {
        res.writeHead (200, {'content-type':'text/html'});
        res.write(data);
        res.end();
    });
  }

 else if (req.url === "/services") {
    fs.readFile('services.html', (err, data) => {
        res.writeHead (200, {'content-type':'text/html'});
        res.write(data);
        res.end();
    });
  }

 else if (req.url === "/contact") {
    fs.readFile('contact.html', (err, data) => {
        res.writeHead (200, {'content-type':'text/html'});
        res.write(data);
        res.end();
    });
  }

  else {
    fs.readFile('404.html', (err, data) => {
        res.writeHead (200, {'content-type':'text/html'});
        res.write(data);
        res.end();
    });
  }
});

  myServer.listen(PORT, () => {
     console.log(`Server has been running`);
  });

