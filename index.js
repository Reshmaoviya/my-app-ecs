const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World! Deployment Successful by Reshma\n');
});

const port = 80;
server.listen(port, '0.0.0.0', () => {
  console.log(`Server running at port ${port}`);
});
