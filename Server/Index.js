const express = require('express')

const app = express()
const port = 3333

//Controllers

const movieCtrl = require('./controllers/movieController')

const bookCtrl = require('./controllers/bookControllers')

app.use(express.json())


//Endpoints
app.get('/api/movies', movieCtrl.getMovies)
app.post('/api/movies', movieCtrl.addMovie)
app.put('/api/movies/:id', movieCtrl.editMovie)
app.delete('/api/movies/:id', movieCtrl.deleteMovie)
//ratings
app.get('/api/movies/rating', movieCtrl.getRating)
app.put('/api/movies/rating/:id', movieCtrl.editRating)
//reviews
// app.get('/api/movies/review', movieCtrl.getReview)
// app.put('/api/movies/review/:id', movieCtrl.editReview)

//EndpointsBooks
app.get('/api/books', bookCtrl.getBooks)
app.post('/api/books', bookCtrl.addBook)
app.put('/api/books/:id', bookCtrl.editBook)
app.delete('/api/books/:id', bookCtrl.deleteBook)
//ratings
app.get('/api/books/rating', bookCtrl.getBookRating)
app.put('/api/books/rating/:id', bookCtrl.editBookRating)


//new endpoint ex '/.api/movies/delete are needed for different methods

app.listen(port, () => console.log(`Server listening on port ${port}`))