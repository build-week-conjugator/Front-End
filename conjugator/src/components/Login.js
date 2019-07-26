import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div>
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

                    <button>Login</button>

                    <br/>

                    <span>Don't have an account yet? Sign up here</span>
                </form>
            </div>
        )
    }
}

export default Login;