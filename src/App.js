import React, {Component} from 'react';
import './App.css';
import Movies from './Components/Movies'
import Books from './Components/Books'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      displayMovieList: true,
      displayBookList: false
    }
  }
  
  openMoviesList = () => {
    this.setState({displayMovieList: !this.state.displayMovieList})
  }

  render(){
  return (
    <div>
      {this.state.displayMovieList ? (
      <div className="homepage">

        <div className='Buttons'>
        <button onClick={() => this.openMoviesList()}>Movies</button>
        </div>

      </div>
      ) : (
      <div className="displays">
      
        <div>
          <Movies />
          <button onClick={() => this.openMoviesList()}>Home</button>
        </div>

      </div>

      )}
    </div>
  )
  }
}

export default App;
