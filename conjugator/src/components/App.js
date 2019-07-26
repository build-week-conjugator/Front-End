import './App.css';
import React from 'react';
import { Route, Link } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import Settings from './Settings';

class App extends React.Component {
	render() {
		return (
      <div>
        <nav>
        <div>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/settings">Settings</Link>
        </div>
      </nav>

        <Route path="/" exact render={(props) => <Home {...props} />} />
        <Route path="/login" exact render={(props) => <Login {...props} />} />
        <Route path="/dashboard" exact render={(props) => <Dashboard {...props} />} />
        <Route path="/settings" exact render={(props) => <Settings {...props} />} />
			</div>
		)
	}
}

export default App