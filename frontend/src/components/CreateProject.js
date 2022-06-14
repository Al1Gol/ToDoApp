import React from 'react'

class CreateProjectForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
                'name': '',
                'repo': '',
                'workers':[]
        }
    }

    handleSubmit(event){
        this.props.createProject(this.state.name, this.state.repo, this.state.workers)
        event.preventDefault()
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    

    handleWorkersChange(event){
        if (!event.target.selectedOptions){
            return
        }
        let workers = []

        for (let i = 0; i < event.target.selectedOptions.length; i++){
            workers.push(parseInt(event.target.selectedOptions.item(i).value))
        }

        this.setState({
            "workers": workers
        })
    }

    render(){
        return (
            <form className="create-form" onSubmit={(event) => this.handleSubmit(event)}>
                <input className='creation-input' type="text" name="name" placeholder="project name" value={this.state.name} onChange={(event) => this.handleChange(event)}/>
                <input className='creation-input' type="text" name="repo" placeholder="repository" value={this.state.repo} onChange={(event) => this.handleChange(event)}/>
                <select multiple required size="10" className='creation-select' onChange={(event) => this.handleWorkersChange(event)}> 
                    {this.props.users.map((user) => <option value={user.id}>{user.username}</option>)}
                </select>
                <input className="btn-submit" type="submit" value="Create"/>
            </form>
        )
    }
}

export default CreateProjectForm;