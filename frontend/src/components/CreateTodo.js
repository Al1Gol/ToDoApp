import React from 'react'

class CreateTodoForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
                'project': [],
                'text_todo':[],
                'creator':[]
        }
    }

    handleSubmit(event){
        this.props.createTodo(this.state.project, this.state.text_todo, this.state.creator)
        event.preventDefault()
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleCreatorChange(event){
        if (!event.target.selectedOptions){
            return
        }
        let creator = []

        for (let i = 0; i < event.target.selectedOptions.length; i++){
            creator.push(parseInt(event.target.selectedOptions.item(i).value))
        }

        this.setState({
            "creator": creator
        })
    }
    
    handleProjectChange(event){
        if (!event.target.selectedOptions){
            return
        }
        let project = []

        for (let i = 0; i < event.target.selectedOptions.length; i++){
            project.push(parseInt(event.target.selectedOptions.item(i)))
        }

        this.setState({
            "project": project
        })
    }

    render(){
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <select onChange={(event) => this.handleProjectChange(event)}> 
                    {this.props.projects.map((project) => <option value={project.id}>{project.name}</option>)}
                </select>
                <input type="text" name="text_todo" placeholder="text todo" value={this.state.text_todo} onChange={(event) => this.handleChange(event)}/>
                <select onChange={(event) => this.handleCreatorChange(event)}> 
                    {this.props.users.map((user) => <option value={user.id}>{user.username}</option>)}
                </select>
                <input type="submit" value="Create"/>
            </form>
        )
    }
}

export default CreateTodoForm;