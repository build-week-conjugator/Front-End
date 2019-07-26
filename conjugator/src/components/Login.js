import React from 'react';
import './css/login.css'

class Login extends React.Component {
    render() {
        return (
            <div className='login-content'>
                <form>
                    <h3>Login</h3>
                    <input 
                        type= 'text'
                        placeholder='Email'
                        name='email'
                    />

                    <br/>

                    <input 
                        type= 'text'
                        placeholder='Password'
                        name='Password'
                    />

                    <br/>

                    <button className='login-button'>Login</button>

                    <br/>

                    <span>Don't have an account yet? Sign up here</span>
                </form>
            </div>
        )
    }
}

export default Login;