import React, {Component} from 'react'

class BookDisplay extends Component{
    constructor(props){
        super(props)
        this.state = {
            editBook: true,
            title: " ",
            display: true,
            rating: ' ',
            editBookRating: true,
        }
    }

    toggleBookDisplay = () => {
        this.setState({display: !this.state.display})
    }

    //book
    saveBook = () => {
        this.props.editBook(this.props.books.id, this.state.title)
        this.toggleEditBook()
    }

    handleBookChange = (value) => {
        this.setState({title: value})
    }

    toggleEditBook = () => {
        this.setState({editBook: !this.state.editBook})
    }
    
    //rating
    saveBookRating = () => {
        this.props.editBookRating(this.props.books.id, this.state.rating)
        this.toggleEditBookRating()
    }

    handleBookRatingChange = (value) => {
        this.setState({rating: value})
    }

    toggleEditBookRating = () => {
        this.setState({editBookRating: !this.state.editBookRating})
    }

    render(){
        const {books, deleteBook} = this.props
        return(
            <div style={{color:'yellow'}} className="viewBook">
                {this.state.display ? (
                    <div onClick={() => this.toggleBookDisplay()} className="bookInList">
                            <h3>{books.title}</h3>
                            <h3>{books.rating}/10</h3>                     
                    </div>
                    ) : (
                        <div>
                            <div className="bookEdit">
                                {this.state.editBook ? (
                                    <div onClick={() => this.toggleEditBook()}>
                                        <h1>{books.title}</h1>
                                    </div>
                                        ) : (
                                    <div>
                                        <input value={this.state.title} onChange={(e) => this.handleBookChange(e.target.value)} /> 
                                        <button onClick={() => this.toggleEditBook()}>Cancel</button>
                                        <button onClick={() => this.saveBook()}>Save</button>
                                    </div>
                                )}                        
                            </div> 
                            <div className="ratingEdit">
                                {this.state.editBookRating ? (
                                    <div>
                                        <div onClick={() => this.toggleEditBookRating()}>
                                            <h3>{books.rating}/10</h3>
                                        </div>
                                        <div className="closeAndDisplayBook">
                                            <button onClick={() => this.toggleBookDisplay()}>Close</button>
                                            <button onClick={() => deleteBook(books.id)}>Delete</button>
                                        </div>
                                    </div>
                                        ) : (
                                    <div>
                                        <input value={this.state.rating} onChange={(e) => this.handleBookRatingChange(e.target.value)} /> 
                                        <button onClick={() => this.toggleEditBookRating()}>Cancel</button>
                                        <button onClick={() => this.saveBookRating()}>Save</button>
                                    </div>
                                )}                        
                            </div>
                        </div>
                    )}
                </div>
        )
    }
}

export default BookDisplay