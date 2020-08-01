import React, {Component} from 'react'
import axios from 'axios'
import MovieClass from './MovieClass'
import AddMovie from './AddMovie'

class Movies extends Component {
    constructor(props) {
        super(props)
        this.state={
            movies: []
        }
    }

    componentDidMount(){
        axios.get('/api/movies')
        .then((results) => {
            this.setState({movies: results.data})
        })
        .catch((err) => console.log(err))
    }

    componentDidMount(){
        axios.get('/api/movies/review')
        .then((results) => {
            this.setState({movies: results.data})
        })
        .catch((err) => console.log(err))
    }

    componentDidMount(){
        axios.get('/api/movies/rating')
        .then((results) => {
            this.setState({movies: results.data})
        })
        .catch((err) => console.log(err))
    }

    deleteMovie = (id) => {
        axios.delete(`./api/movies/${id}`)
        .then((results) => {
            this.setState({movies: results.data})
        })
        .catch((err) => console.log(err))
    }

    addMovie = (title) => {
        axios.post('/api/movies', {title})
        .then((response) => {
            this.setState({movies: response.data})
        })
        .catch((err) => console.log(err))
    }

    editName = (title) => {
        axios.put('/api/movies', {title})
        .then((response) => {
            this.setState({movies: response.data})
        })
        .catch((err) => console.log(err))
    }

    editMovie = (id, title) => {
        axios.put(`/api/movies/${id}`, {title})
        .then((results) => {
            this.setState({movies: results.data})
        })
        .catch((err) => console.log(err))
    }

    render(){
        return(
            <div>
                <h1>Movies</h1>
                <AddMovie addMovie={this.addMovie} />
                {this.state.movies.map((element, index) => {
                    return <MovieClass 
                    movie={element} 
                    key={index} 
                    editMovie={this.editMovie}
                    deleteMovie={this.deleteMovie} />
                })}
            </div>
        )
    }
}

export default Movies