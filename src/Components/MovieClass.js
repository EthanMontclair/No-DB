import React, {Component} from 'react'

class MovieClass extends Component{
    constructor(props){
        super(props)
        this.state = {
            editMovie: true,
            title: " ",
            display: true,
            rating: ' ',
            editRating: true,
            // review: " ",
            // editReview: true,
        }
    }

    toggleDisplay = () => {
        this.setState({display: !this.state.display})
    }

    //movie
    save = () => {
        this.props.editMovie(this.props.movie.id, this.state.title)
        this.toggleEditMovie()
    }

    handleChange = (value) => {
        this.setState({title: value})
    }

    toggleEditMovie = () => {
        this.setState({editMovie: !this.state.editMovie})
    }
    
    //rating
    saveRating = () => {
        this.props.editRating(this.props.movie.id, this.state.rating)
        this.toggleEditRating()
    }

    handleRatingChange = (value) => {
        this.setState({rating: value})
    }

    toggleEditRating = () => {
        this.setState({editRating: !this.state.editRating})
    }

    // saveReview = () => {
    //     this.props.editReview(this.props.movie.id, this.state.review)
    //     this.toggleEditReview()
    // }

    // handleReviewChange = (value) => {
    //     this.setState({review: value})
    // }

    // toggleEditReview = () => {
    //     this.setState({editReview: !this.state.editReview})
    // }

    render(){
        const {movie, deleteMovie, editReview} = this.props
        return(
            <div style={{color:'white'}} className="viewMovie">
                {this.state.display ? (
                    <div onClick={() => this.toggleDisplay()} className="movieInList">
                            <h3 className="movieTitle">{movie.title}</h3>
                            <h3 className="movieRating">{movie.rating}/10</h3>
                            {/* <h5>{movie.review}</h5> */}                      
                    </div>
                    ) : (
                        <div className="editMovie">
                            <div style={{color:'White'}} className="movieEdit">
                                {this.state.editMovie ? (
                                    <div onClick={() => this.toggleEditMovie()}>
                                        <h1>{movie.title}</h1>
                                    </div>
                                        ) : (
                                    <div>
                                        <input value={this.state.title} onChange={(e) => this.handleChange(e.target.value)} /> 
                                        <button onClick={() => this.toggleEditMovie()}>Cancel</button>
                                        <button onClick={() => this.save()}>Save</button>
                                    </div>
                                )}                        
                            </div> 
                            <div className="ratingEdit">
                                {this.state.editRating ? (
                                    <div onClick={() => this.toggleEditRating()}>
                                        <div>
                                            <h3>{movie.rating}/10</h3>
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
                            {/* <div className="reviewEdit">
                                {this.state.editReview ? (
                                    <div>
                                        <div>
                                            <h1>{movie.review}</h1>
                                            <button onClick={() => this.toggleEditReview()}>Review</button>
                                        </div>
                                    </div>
                                        ) : (
                                    <div>
                                        <input value={this.state.review} onChange={(e) => this.handleReviewChange(e.target.value)} /> 
                                        <button onClick={() => this.toggleEditReview()}>Cancel</button>
                                        <button onClick={() => this.saveReview()}>Save</button>
                                    </div>
                                )}                        
                            </div>        */}
                        </div>
                    )}
                </div>
        )
    }
}

export default MovieClass