import React from 'react'
import axios from 'axios'
import {BrowserRouter, Route, Routes, Navigate, useLocation} from 'react-router-dom'

import UserList from './components/UserList.js'
import ProjectList from './components/ProjectList.js'
import UserProjectsList from './components/UserProjectsList.js'
import TodoList from './components/TodoList.js'
import Menu from './components/Header.js'
import Footer from './components/Footer.js'


const NotFound = () => {
    var location = useLocation()

    return (
        <div>
            Page "{location.pathname}" not found
        </div>
    )
}

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
                'users': [],
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
                <BrowserRouter>
                    <Menu/>
                    <Routes>
                        <Route exact path='/' element = {<ProjectList projects={this.state.projects} />} />
                        <Route exact path='/users/' element = {<UserList users={this.state.users} />} />
                        <Route exact path='/todo/' element = {<TodoList todoes={this.state.todoes} />} />
                        <Route exact path='/projects/' element = {<Navigate to='/' />} />
                        <Route exact path='/user/:id/' element = {<UserProjectsList projects={this.state.projects} />} />
                        <Route path='*' element = {<NotFound />} />
                    </Routes>
                </BrowserRouter>
                <Footer/>
            </div>
        )
    }
}

export default App;