// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hola!! Despliegue exitoso con Ansible - CLASE\n");
// });
// server.listen(3000, () => {
//   console.log("Servidor corriendo en puerto 3000");
// });


// app/index.js
const http = require('http');
const fs = require('fs'); // Librería para leer archivos
const path = require('path');

const server = http.createServer((req, res) => {
  // Leemos el archivo index.html
  fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Error cargando el archivo');
      return;
    }
    // Enviamos el HTML al navegador
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});