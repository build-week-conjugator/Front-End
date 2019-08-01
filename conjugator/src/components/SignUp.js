import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp, unload } from '../actions'
import './css/login.css'

class SignUp extends React.Component {
    constructor() {
		super()
		this.state = {
			username: '',
			password: '',
		}
    }
    
    componentWillUnmount() {
        this.props.unload();
    }

    handleChange = (evt) => {

		this.setState({
			[evt.target.name]: evt.target.value,
		})
	}
    
    handleSubmit = (evt) => {
		evt.preventDefault()

		const { username, password } = this.state

		this.props.signUp(username, password)
			
	}

    render() {
        const { username, password } = this.state
        const { created, errorMessage } = this.props

        return (
            <div className='login-content'>
                <form onSubmit={this.handleSubmit}>
                    <h3>Sign Up</h3>
                    {errorMessage && <p>{errorMessage}</p>}
                    <input 
                        type= 'text'
                        placeholder='Email'
                        name='username'
                        value={username}
                        onChange={this.handleChange}
                    />

                    <br/>

                    <input 
                        type= 'text'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                    />

                    <br/>

                    {created
                        ? <p>Account created successfully.</p>
                        : <button type="submit">Sign Up</button>}

                    <br/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
	created: state.created,
	errorMessage: state.errorMessage,
})

const mapDispatchToProps = {
    signUp,
    unload,
}

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps,
	)(SignUp)
)