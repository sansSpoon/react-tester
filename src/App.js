import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WelcomeContainer from './WelcomeContainer';
import HomeContainer from './HomeContainer';

// create context for the currently logged in user
// will be populated by Welcome
const AuthContext = React.createContext();

class App extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			authUser: '',
		};
	}
	
	static displayName = "foo"
	
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Welcome />
      </div>
    );
  }
}

export default App;
