const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3003, () => {
  console.log("JSON Server is running");
});

//para que funcioen debemos ir a http://localhost:3003/inmuebles

//tambien podemos correr el servidor asi
//json-server --watch data/data.json --port 3004
