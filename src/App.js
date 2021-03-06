import React, {Component} from 'react';
import './App.css';
import Movies from './Components/Movies'
import Books from './Components/Books'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      displayMovieList: true,
      displayBookList: true
    }
  }
  
  openMoviesList = () => {
    this.setState({displayMovieList: !this.state.displayMovieList})
  }

  openBooksList = () => {
    this.setState({displayBookList: !this.state.displayBookList})
  }

  render(){
  return (
      <div style={{color:'yellow'}}>
        <h1 className="entertain">My Media Lists</h1>
          <div className="moviesHomepage">
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
                  <button onClick={() => this.openMoviesList()}>Hide Movies</button>
                </div>
              </div>
            )}
          </div>
          <div className="bookshomepage">
            {this.state.displayBookList ? (
              <div className="homepage">
                <div className='Book Buttons'>
                  <button onClick={() => this.openBooksList()}>Books</button>
                </div>
              </div>
            ) : (
            <div className="Book displays">
              <div>
                <Books />
                <button onClick={() => this.openBooksList()}>Hide Books</button>
              </div>
            </div>
            )}
          </div>
      </div>
  )
  }
}

export default App;
