const http = require('http');
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('¡Hola! Despliegue exitoso con Ansible\n');
});
server.listen(3000, () => {
console.log('Servidor corriendo en puerto 3000');
});