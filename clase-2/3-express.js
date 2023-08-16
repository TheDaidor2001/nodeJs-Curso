const express = require('express')
const PORT = process.env.PORT || 1234

const app = express()

app.disable('x-powered-by')

app.use((req, res, next) => {
  console.log('mi primer middleware')
  // trakear la req a la BD
  next()
})

app.get('/', (req, res) => {
  res.json({
    msg: 'Hola mundo'
  })
})

app.use((req, res) => {
  res.status(404).json({
    msg: '404 Not found'
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
