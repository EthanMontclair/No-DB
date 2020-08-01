const express = require('express')

const app = express()
const port = 3333

//Controllers

const movieCtrl = require('./controllers/movieController')

app.use(express.json())


//Endpoints
app.get('/api/movies', movieCtrl.getMovies)
app.post('/api/movies', movieCtrl.addMovie)
app.put('/api/movies/:id', movieCtrl.editMovie)
app.delete('/api/movies/:id', movieCtrl.deleteMovie)

app.listen(port, () => console.log(`Server listening on port ${port}`))