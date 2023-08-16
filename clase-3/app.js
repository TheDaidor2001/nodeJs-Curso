const express = require('express')
const crypto = require('node:crypto')
const movies = require('./movies.json')
const { validateMovie } = require('./squemas/movies')

const app = express()
app.disable('x-powered-by')
app.use(express.json())

app.post('/movies', (req, res) => {
  const result = validateMovie(req.body)
  if (!result.success) {
    return res.status(400).json({ error: result.error.message })
  }

  const newMovie = {
    id: crypto.randomUUID(),
    ...result.data
  }

  // esto no es REST
  movies.push(newMovie)

  res.status(201).json(newMovie)
})

app.get('/movies', (req, res) => {
  const { genre } = req.query

  if (genre) {
    const filteredMovies = movies.filter(
      movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
    )
    return res.json(filteredMovies)
  }
  res.json(movies)
})

app.get('/movies/:id', (req, res) => {
  const { id } = req.params
  const movie = movies.find(movie => movie.id === id)
  if (movie) return res.json(movie)
  res.status(404).json({ message: 'movie not found' })
})

const PORT = process.env.PORT || 1234

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
