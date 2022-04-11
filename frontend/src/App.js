import React from 'react'
import AuthorList from './components/AuthorList.js'
import axios from 'axios'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
                'authors':  []
        }
    }

    componentDidMount() {
        axios
            .get('http://127.0.0.1:8000/api/users/')
            .then(response => {
                let authors = response.data
                this.setState({
                    'authors': authors
                })
                this.state.authors = authors
            })
            .catch(error => console.log)
    }

    render(){
        return (
            <div>
                <AuthorList authors={this.state.authors}/>
            </div>
        )
    }
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


*/

export default App;