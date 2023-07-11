const http = require('http');
const data = require('./utils/data');

const server = http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const { url } = req;

  if (url.includes('/rickandmorty/character')) {
    const id = url.split('/').pop();

    const character = data.find((item) => item.id === parseInt(id));

    if (character) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(character));
      return;
    }
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Route not found');
});

server.listen(3001, 'localhost');
