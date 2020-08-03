import React, {Component} from 'react'

class MovieClass extends Component{
    constructor(props){
        super(props)
        this.state = {
            // the edit: false makes it so we default start NOT in the edit phase
            edit: true,
            title: " ",
            //display false makes it so the movie div is not displayed until toggled
            display: true,
            rating: ' ',
            editRating: true,
        }
    }

    //movietitle
    save = () => {
        //this is so the edit saves and toggles when you click save
        this.props.editMovie(this.props.movie.id, this.state.title)
        //this.toggleEdit() turns the edit off
        this.toggleEdit()
    }

    saveRating = () => {
        //this is so the edit saves and toggles when you click save
        this.props.editRating(this.props.movie.id, this.state.rating)
        //this.toggleEdit() turns the edit off
        this.toggleEditRating()
    }

    //movietitle
    handleChange = (value) => {
        this.setState({title: value})
    }

    handleRatingChange = (value) => {
        this.setState({rating: value})
    }

    toggleEdit = () => {
        this.setState({edit: !this.state.edit})
    }

    toggleEditRating = () => {
        this.setState({editRating: !this.state.editRating})
    }

    toggleDisplay = () => {
        this.setState({display: !this.state.display})
    }

    render(){
        const {movie, deleteMovie, editRating} = this.props
        return(
            <div className="viewMovie">
                {this.state.display ? (
                    <div className="Movie List">
                            <h3>{movie.title}</h3>
                            <h3>{movie.rating}/10</h3>
                            <h1>Movie Poster</h1> 
                            <button onClick={() => this.toggleDisplay()}>View</button>                        
                    </div>
                    ) : (
                        <div>
                            <div className="movieEdit">
                                {this.state.edit ? (
                                    <div>
                                        <h1>{movie.title}</h1>
                                        <button onClick={() => this.toggleEdit()}>Edit Title</button>
                                    </div>
                                        ) : (
                                    <div>
                                        <input value={this.state.title} onChange={(e) => this.handleChange(e.target.value)} /> 
                                        <button onClick={() => this.toggleEdit()}>Cancel</button>
                                        <button onClick={() => this.save()}>Save</button>
                                    </div>
                                )}                        
                            </div>    
                            <div className="ratingEdit">
                                {this.state.editRating ? (
                                    <div>
                                        <div>
                                            <h3>{movie.rating}/10</h3>
                                            <button onClick={() => this.toggleEditRating()}>Rating</button>
                                        </div>
                                        <div className="closeAndDisplay">
                                            <button onClick={() => this.toggleDisplay()}>Close</button>
                                            <button onClick={() => deleteMovie(movie.id)}>Delete</button>
                                        </div>
                                    </div>
                                        ) : (
                                    <div>
                                        <input value={this.state.rating} onChange={(e) => this.handleRatingChange(e.target.value)} /> 
                                        <button onClick={() => this.toggleEditRating()}>Cancel</button>
                                        <button onClick={() => this.saveRating()}>Save</button>
                                    </div>
                                )}                        
                            </div>
                        </div>
                    )}
                </div>
        )
    }
}

export default MovieClass