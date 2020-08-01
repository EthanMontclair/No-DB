import React, {Component} from 'react'
import axios from 'axios'

class Books extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: []
        }
    }

    render(){
        return(
            <div>
                <h1>Books to come!!!</h1>
            </div>
        )
    }
}

export default Books