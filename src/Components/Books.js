import React, {Component} from 'react'
import axios from 'axios'
import BookDisplay from './BookDisplay'
import AddBook from './AddBook'

class Books extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: []
        }
    }

    editBook = (id, title) => {
        axios.put(`/api/books/${id}`, {title})
        .then((results) => {
            this.setState({books: results.data})
        })
        .catch((err) => console.log(err))
    }

    componentDidMount(){
        axios.get('/api/books')
        .then((results) => {
            this.setState({books: results.data})
        })
        .catch((err) => console.log(err))
    }

    deleteBook = (id) => {
        axios.delete(`./api/books/${id}`)
        .then((results) => {
            this.setState({books: results.data})
        })
        .catch((err) => console.log(err))
    }

    addBook = (title) => {
        axios.post('/api/books', {title})
        .then((response) => {
            this.setState({books: response.data})
        })
        .catch((err) => console.log(err))
    }

    //review
    
    //rating
    componentDidMount(){
        axios.get('/api/books/rating')
        .then((results) => {
            this.setState({books: results.data})
        })
        .catch((err) => console.log(err))
    }

    editBookRating = (id, rating) => {
        axios.put(`/api/books/rating/${id}`, {rating})
        .then((response) => {
            this.setState({books: response.data})
        })
        .catch((err) => console.log(err))
    }

    render(){
        return(
            <div className="booksList">
                <h1>Books</h1>
                <AddBook addBook={this.addBook} />
                {this.state.books.map((element, index) => {
                    return <BookDisplay 
                    books={element} 
                    key={index} 
                    editBook={this.editBook}
                    deleteBook={this.deleteBook} 
                    editBookRating={this.editBookRating}
                    />
                })}
            </div>
        )
    }
}

export default Books