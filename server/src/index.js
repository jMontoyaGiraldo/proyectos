// const http = require('http');
// const getCharById = require('./controllers/getCharById.js');

// http.createServer((req, res)=>{
//   res.setHeader('Access-Control-Allow-Origin', '*');

//   const { url } = req;

//   if(url.includes("/rickandmorty/character")){
//     let id = url.split('/').at(-1)
//     return getCharById(res,id) 
//   }
//   res.writeHead(404, { 'Content-Type': 'text/plain' });
//   res.end('Route nor found');
// })
// .listen(3001, 'localhost');
//////////////////////////////////////////////////////////////////////////////////////77

const express = require('express');
const server = express();
const PORT = 3001;
const router = require('./routes/routes.js');

// Configuración de CORS
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});

server.use(express.json());
server.use('/rickandmorty', router); // Usar el enrutador llamado 'router'
server.listen(PORT, () => {
  console.log(`Server raised in port ${PORT}`);
});