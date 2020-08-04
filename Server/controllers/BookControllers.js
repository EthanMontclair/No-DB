let books = [
    {title: "The Name of the Wind by Patrick Rothfuss", rating: 9, review: "review", id: 1},
    {title: "All Creatures Great and Small by James Herriot", rating: 9, review: "review", id: 2},
    {title: "Being and Time by Martin Heidegger", rating: 7, review: "review", id: 3},
]

let nextId = 4

module.exports = {
    // getReview: (req, res) => {
    //     return res.status(200).send(movies)
    // },
    
    getBooks: (req, res) => {
        return res.status(200).send(books)
    },

    getBookRating: (req, res) => {
        return res.status(200).send(books)
    },
    
    editBookRating: (req, res) => {
        const{id} = req.params
        const{rating} = req.body
        const index = books.findIndex((element) => element.id === +id)
        books[index].rating = rating
        return res.status(200).send(books)
    },

    editBook: (req, res) => {
        const{id} = req.params
        const{title} = req.body
        const index = books.findIndex((element) => element.id === +id)
        books[index].title = title
        return res.status(200).send(books)
    },

    addBook: (req, res) => {
        const {title} = req.body
        const newBook = {
            id: nextId,
            ...req.body
        }
        nextId++
        books.push(newBook)
        console.log(newBook)
        console.log(req.body)
        return res.status(200).send(books)
    },
    
     deleteBook: (req, res) => {
        console.log(req.params)
        const {id} = req.params
        books = books.filter((elements) => {
        return elements.id !== +id
        })
        return res.status(200).send(books)
    },
}