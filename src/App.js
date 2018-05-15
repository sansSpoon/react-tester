import React, { Component } from 'react';
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
			authenticated: false,
			authUser: '',
		};
	}
	
	static displayName = "foo"
	
	render() {
			if (this.state.authenticated) {
				return <HomeContainer />;
			} else {
				return <WelcomeContainer />;
			}
	}
}

export default App;
