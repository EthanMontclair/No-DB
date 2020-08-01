import React, {Component} from 'react'

class MovieClass extends Component{
    constructor(props){
        super(props)
        this.state = {
            // the edit: false makes it so we default start NOT in the edit phase
            edit: false,
            title: " "
        }
    }

    save = () => {
        //this is so the edit saves and toggles when you click save
        this.props.editMovie(this.props.movie.id, this.state.title)
        //this.toggleEdit() turns the edit off
        this.toggleEdit()
    }

    handleChange = (value) => {
        this.setState({title: value})
    }

    //this is to take us in and out of the edit state in the this.state and the this.state.edit ternery in the return
    toggleEdit = () => {
        this.setState({edit: !this.state.edit})
    }

    render(){
        const {movie, deleteMovie} = this.props
        return(
            <div>
                {this.state.edit ? (
                    <div>
                {/* //this input field only shows if we are in edit mode */}
                <input value={this.state.name} onChange={(e) => this.handleChange(e.target.value)} /> 
                <button onClick={() => this.toggleEdit()}>Cancel</button>
                <button onClick={() => this.save()}>Save</button>
                    </div>
                ) : (
                    <div>
                <h1>{movie.title}</h1>
                <button onClick={() => deleteMovie(movie.id)}>Delete Movie</button>
                <button onClick={() => this.toggleEdit()}>Edit</button>
                    </div>
                )}
            </div>
        )
    }
}

export default MovieClass