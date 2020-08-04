import React, {Component} from 'react'

class AddBook extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: " "
        }
    }

    handleChange = (value) => {
        this.setState({name: value})
    }

    saveBook = (e) => {
        this.props.addBook(this.state.name)
        this.setState({name: " "})
    }



    render(){
        return(
            <div>
                <input value={this.state.name} 
                onChange={(e) => this.handleChange(e.target.value)} />
                <button onClick={this.saveBook}>Add Book</button>
            </div>
        )
    }
}

export default AddBook