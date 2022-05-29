import React from 'react'
import axios from 'axios'
import {BrowserRouter, Route, Routes, Navigate, useLocation, Link} from 'react-router-dom'

import UserList from './components/UserList.js'
import ProjectList from './components/ProjectList.js'
import UserProjectsList from './components/UserProjectsList.js'
import TodoList from './components/TodoList.js'
import Menu from './components/Header.js'
import Footer from './components/Footer.js'
import LoginForm from './components/LoginForm.js'
import CreateTodoForm from './components/CreateTodo.js'
import CreateProjectForm from './components/CreateProject.js'


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
                'todoes': [],
                'token': ''
        }
    }

    obtainAuthToken(login, password){
        axios.post('http://127.0.0.1:8000/api-auth-token/', {"username": login, "password": password})
            .then(response => {
                let token = response.data.token
                localStorage.setItem('token', token)
                this.setState({
                    'token': token
                }, this.getData)
            })
            .catch(error => console.log(error))
    }

    componentDidMount() {
        let token = localStorage.getItem('token')
        this.setState({
            'token': token
        }, this.getData)
    }

    logOut() {
        localStorage.setItem('token', '')
        this.setState({
            'token': ''
        }, this.getData)
    }

    isAuth() {
        return !!this.state.token
    }

    getHeadears(){
        if (this.isAuth()){
            return {
                    'Authorization': 'Token ' + this.state.token
                }
        }
        return {}
    }

    getData(){
        let headers = this.getHeadears()
        axios.get('http://127.0.0.1:8000/api/users/', {headers})
            .then(response => {
                const users = response.data.results
                this.setState({
                    'users': users
                })
                this.state.users = users
            })
            .catch(error => {
                this.setState({
                    'users': []
                })
                console.log(error)
            })

        axios.get('http://127.0.0.1:8000/api/projects/', {headers})
            .then(response => {
                const projects = response.data.results
                this.setState({
                    'projects': projects
                })
                this.state.projects = projects
            })
            .catch(error => {
                this.setState({
                    'projects': []
                })
                console.log(error)
            })

        axios.get('http://127.0.0.1:8000/api/todo/', {headers})
            .then(response => {
                let todoes = response.data.results
                this.setState({
                    'todoes': todoes
                })
                this.state.todoes = todoes
            })
            .catch(error => {
                this.setState({
                    'todoes': []
                })
                console.log(error)
            })
    }

    
    createTodo(project, text_todo, creator){
        let headers = this.getHeadears()

        axios.post('http://127.0.0.1:8000/api/todo/', {'project': project[0], 'text_todo': text_todo, 'creator': creator[0]}, {headers})
        .then(response => {
            this.getData()
        })
        .catch(error => {
            this.setState({
                'todoes': []
            })
            console.log(error)
        })
    }


    createProject(name, repo, workers){
        let headers = this.getHeadears()

        axios.post('http://127.0.0.1:8000/api/projects/', {'name': name, 'repo': repo, 'workers': workers}, {headers})
        .then(response => {
            console.log('sdf', name, repo, workers)
            this.getData()
        })
        .catch(error => {
            this.setState({
                'projects': []
            })
            console.log(error)
            console.log(error.response)
        })
    }

    deleteToDo(id){
        let headers = this.getHeadears()

        axios.delete(`http://127.0.0.1:8000/api/todo/${id}`, {headers})
        .then(response => {
            let todoes = response.data.results
            this.setState({
                'todoes': this.state.todoes.filter((todo) => todo.id != id)
            })
        })
        .catch(error => {
            this.setState({
                'todoes': []
            })
            console.log(error)
        })
    }

    deleteProject(id){
        let headers = this.getHeadears()

        axios.delete(`http://127.0.0.1:8000/api/projects/${id}`, {headers})
        .then(response => {
            let projects = response.data.results
            this.setState({
                'projects': this.state.projects.filter((project) => project.id != id)
            })
        })
        .catch(error => {
            this.setState({
                'projects': []
            })
            console.log(error)
        })
    }

    
    render(){
        return (
            <div>
                <BrowserRouter>
                    <Menu/>
                    <li>
                        { this.isAuth() ? <button onClick={()=>this.logOut()}>Logout</button> : <Link to='/login'>Login</Link> }
                    </li>
                    <Routes>
                        <Route exact path='/' element = {<ProjectList projects={this.state.projects} users={this.state.users} deleteProject={(id) => this.deleteProject(id)}/>} />
                        <Route exact path='/users/' element = {<UserList users={this.state.users} />} />
                        <Route exact path='/todo/' element = {<TodoList todoes={this.state.todoes} user={this.state.users} project={this.state.projects} deleteToDo={(id) => this.deleteToDo(id)}/>} />
                        <Route exact path='/todo/create/' element = {<CreateTodoForm users={this.state.users} projects={this.state.projects} createTodo={(project, text_todo, creator) => this.createTodo(project, text_todo, creator)}/>} />
                        <Route exact path='/login/' element = {<LoginForm obtainAuthToken={(login, password) => this.obtainAuthToken(login, password)}/>} />
                        <Route exact path='/projects/' element = {<Navigate to='/' />} />
                        <Route exact path='/projects/create/' element = {<CreateProjectForm users={this.state.users} createProject={(name, repo, workers) => this.createProject(name, repo, workers)}/>} />
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