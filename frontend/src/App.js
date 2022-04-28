import React from 'react'
import UserList from './components/UserList.js'
import Menu from './components/Header.js'
import Footer from './components/Footer.js'
import axios from 'axios'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
                'users':  []
        }
    }

    componentDidMount() {
        axios
            .get('http://127.0.0.1:8000/api/users/')
            .then(response => {
                let users = response.data.results
                this.setState({
                    'users': users
                })
                this.state.users = users
            })
            .catch(error => console.log)
    }

    render(){
        return (
            <div>
                <Menu/>
                <UserList users={this.state.users}/>
                <Footer/>
            </div>
        )
    }
}

export default App;