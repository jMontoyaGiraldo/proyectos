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

const server = require('./app')

const PORT = 3001;

server.listen(PORT,()=>{
  console.log(`Server is listening on port: ${PORT}`);
})