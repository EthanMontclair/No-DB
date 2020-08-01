import React, {Component} from 'react'

class AddMovie extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: " "
        }
    }

    handleChange = (value) => {
        this.setState({name: value})
    }

    saveMovie = (e) => {
        this.props.addMovie(this.state.name)
        this.setState({name: " "})
    }



    render(){
        return(
            <div>
                <input value={this.state.name} 
                onChange={(e) => this.handleChange(e.target.value)} />
                <button onClick={this.saveMovie}>Add Movie</button>
            </div>
        )
    }
}

export default AddMovie