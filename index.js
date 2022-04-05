const http = require('http');
const port = process.env.PORT ||5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'I am edited....Beast Incarnate..'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);

});
