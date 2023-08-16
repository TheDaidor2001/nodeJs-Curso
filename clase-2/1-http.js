const http = require('node:http') // protocolo HTTP

const desiredPort = process.env.PORT ?? 1234

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  if (req.url === '/') {
    res.statusCode = 200 // OK
    res.end('<h1>Bienvenido a mi servidor</h1>')
  } else if (req.url === '/contacto') {
    res.statusCode = 200 // OK
    res.end('<h1>Contactos</h1>')
  } else {
    res.statusCode = 404 // Not Found
    res.end('<h1>404 Not Found</h1>')
  }
})

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`)
})
