import React, { Component } from 'react';
import './App.css';
import { AuthContext } from './AuthContext';
import WelcomeContainer from './WelcomeContainer';
import HomeContainer from './HomeContainer';

class App extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			authenticated: false,
			authUser: '',
			token: '',
		};
	}
	
	static displayName = "foo"
	
	render() {
		if (this.state.authenticated) {
			return (
				<AuthContext.Provider value={this.state}>
					<HomeContainer />
				</AuthContext.Provider>
			);
		} else {
			return <WelcomeContainer />;
		}
	}
}

export default App;
