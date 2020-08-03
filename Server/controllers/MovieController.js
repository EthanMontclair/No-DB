let movies = [
    {title: "Arrival", rating: 9, review: "review", id: 1},
    {title: "Drive", rating: 9, review: "review", id: 2},
    {title: "Signs", rating: 9.5, review: "review", id: 3},
]

let nextId = 4

module.exports = {
    getReview: (req, res) => {
        return res.status(200).send(movies)
    },
    
    getMovies: (req, res) => {
        return res.status(200).send(movies)
    },

    getRating: (req, res) => {
        return res.status(200).send(movies)
    },
    
    editRating: (req, res) => {
        const{id} = req.params
        const{rating} = req.body
        const index = movies.findIndex((element) => element.id === +id)
        movies[index].rating = rating
        return res.status(200).send(movies)
    },
    
    editReview: (req, res) => {
        const{id} = req.params
        const{review} = req.body
        const index = movies.findIndex((element) => element.id === +id)
        movies[index].review = review
        return res.status(200).send(movies)
    },    

    //last step in the edit process
    //first destructure the id off params to identify the thing we are editing
    //second we destructure title off of body 
    //then we need to locate the index that we are changing by using findIndex and finding the movie 
    editMovie: (req, res) => {
        //edit movie needs id and title
        const{id} = req.params
        const{title} = req.body
        const index = movies.findIndex((element) => element.id === +id)
        //this editMovie function is for updating in the server what was changed in the front end
        movies[index].title = title
        return res.status(200).send(movies)
    },

    addMovie: (req, res) => {
        const {title} = req.body
        const newMovie = {
            id: nextId,
            ...req.body
        }
        nextId++
        movies.push(newMovie)
        console.log(newMovie)
        console.log(req.body)
        return res.status(200).send(movies)
    },
    
     deleteMovie: (req, res) => {
        console.log(req.params)
        const {id} = req.params
        // req.params is referencing :id in index.js
        movies = movies.filter((elements) => {
        return elements.id !== +id
        })
        return res.status(200).send(movies)
    },
}