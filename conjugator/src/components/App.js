import './css/App.css';
import React from 'react';
import { Route, Link } from "react-router-dom";
import PrivateRoute from './PrivateRoute'
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp'
import Dashboard from './Dashboard';
import Settings from './Settings';

class App extends React.Component {
	render() {
		return (
      <div>
        <nav>
          <div className="header-content">
            <Link to="/">Conjugator</Link>
            <div>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/settings">Settings</Link>
              <Link to="/login">Login</Link>
            </div>
          </div>
        </nav>

        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/settings" component={Settings} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signUp" component={SignUp} />
			</div>
		)
	}
}

export default App;