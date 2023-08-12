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

const { conn } = require('./DB_connection')
const server = require('./app')
require('dotenv').config()

const {PORT} = process.env;

server.listen(PORT, async ()=>{
  await conn.sync({force:true})
  console.log(`Server is listening on port: ${PORT}`);
})
