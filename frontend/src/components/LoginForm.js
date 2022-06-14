import React from 'react'

class LoginForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
                'login': [],
                'password':[]
        }
    }

    handleSubmit(event){
        this.props.obtainAuthToken(this.state.login, this.state.password)
        event.preventDefault()
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render(){
        return (
            <form className="login-form" onSubmit={(event) => this.handleSubmit(event)}>
                <input className="creation-input" type="text" name="login" placeholder="login" value={this.state.login} onChange={(event) => this.handleChange(event)}/>
                <input className="creation-input" type="password" name="password" placeholder="password" value={this.state.password} onChange={(event) => this.handleChange(event)}/>
                <input className="btn-submit" type="submit" value="Login"/>
            </form>
        )
    }
}

export default LoginForm;