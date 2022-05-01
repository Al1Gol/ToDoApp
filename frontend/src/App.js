import React from 'react'
import UserList from './components/UserList.js'
import ProjectList from './components/ProjectList.js'
import TodoList from './components/TodoList.js'
import Menu from './components/Header.js'
import Footer from './components/Footer.js'
import axios from 'axios'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
                'users':  [],
                'projects':[],
                'todoes': []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users/')
            .then(response => {
                const users = response.data.results
                this.setState({
                    'users': users
                })
                this.state.users = users
            })
            .catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/projects/')
            .then(response => {
                const projects = response.data.results
                this.setState({
                    'projects': projects
                })
                this.state.projects = projects
            })
            .catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/todo/')
            .then(response => {
                const todoes = response.data.results
                this.setState({
                    'todoes': todoes
                })
                this.state.todoes = todoes
            })
            .catch(error => console.log(error))
    }

    render(){
        return (
            <div>
                <Menu/>
                <UserList users={this.state.users}/>
                <ProjectList projects={this.state.projects}/>
                <TodoList todoes={this.state.todoes}/>
                <Footer/>
            </div>
        )
    }
}

export default App;