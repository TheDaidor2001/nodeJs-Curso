const z = require('zod')

const movieSquema = z.object({
  title: z.string({
    invalid_type_error: 'Title must be a string',
    required_error: 'Title is required'
  }),
  year: z.number().int().min(1900).max(new Date().getFullYear()),
  director: z.string(),
  duration: z.number().int().positive(),
  rate: z.number().min(0).max(10),
  poster: z.string().url({
    message: 'Poster must be a valid URL'
  }),
  genre: z.array(
    z.enum(['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Sci-Fi', 'Romance', 'Thriller']),
    {
      required_error: 'Genre is required',
      invalid_type_error: 'Genre must be an array of strings'
    }
  )
})

function validateMovie (movie) {
  return movieSquema.safeParse(movie)
}

module.exports = {
  validateMovie
}
