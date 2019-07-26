import './css/App.css';
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
          <div className="header-content">
            <Link to="/">Conjugator</Link>
            <div>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/settings">Settings</Link>
              <Link to="/login">Login</Link>
            </div>
          </div>
        </nav>

        <Route path="/" exact render={(props) => <Home {...props} />} />
        <Route path="/dashboard" exact render={(props) => <Dashboard {...props} />} />
        <Route path="/settings" exact render={(props) => <Settings {...props} />} />
        <Route path="/login" exact render={(props) => <Login {...props} />} />
			</div>
		)
	}
}

export default App;