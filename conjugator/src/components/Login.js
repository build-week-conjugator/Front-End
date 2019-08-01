import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../actions'
import './css/login.css'

class Login extends React.Component {
    constructor() {
		super()
		this.state = {
			username: '',
			password: '',
		}
	}

    handleChange = (evt) => {

		this.setState({
			[evt.target.name]: evt.target.value,
		})
	}
    
    handleSubmit = (evt) => {
		evt.preventDefault()

		const { username, password } = this.state

		this.props.login(username, password)
			.then(() => {
				this.props.history.push("/")
			})
			.catch((err) => {
				console.error(err)
			})
	}

    render() {
        const { username, password } = this.state
        const { isLoading, errorMessage } = this.props

        return (
            <div className='login-content'>
                <form onSubmit={this.handleSubmit}>
                    <h3>Login</h3>
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

                    {isLoading
                        ? <p>Logging in...</p>
                        : <button type="submit">Login</button>}

                    <br/>
                </form>
                <span>Don't have an account yet? <a href='/signUp'>Sign up</a> here</span>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
	isLoading: state.isLoading,
	errorMessage: state.errorMessage,
})

const mapDispatchToProps = {
	login,
}

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps,
	)(Login)
)