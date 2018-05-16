import React, { Component } from 'react';
import './App.css';
import { AuthContext } from './AuthContext';
import WelcomeContainer from './WelcomeContainer';
import HomeContainer from './HomeContainer';

class App extends Component {

	static displayName = "foo"

	constructor(props) {
		super(props);
		this.state = {
			authenticated: false,
			authUser: '',
			token: '',
		};
		this.handleAuth = this.handleAuth.bind(this);
	}
	
	handleAuth(auth) {
		this.setState({
			authenticated: auth,
		});
	}
	
	render() {
		if (this.state.authenticated) {
			return (
				<AuthContext.Provider value={this.state}>
					<HomeContainer />
				</AuthContext.Provider>
			);
		} else {
			return <WelcomeContainer onLogin={this.handleAuth} />;
		}
	}
}

export default App;
