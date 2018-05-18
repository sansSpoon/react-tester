import React, { Component } from 'react';
import './App.css';
import { AuthContext } from './AuthContext';
import WelcomeContainer from './WelcomeContainer';
import HomeContainer from './HomeContainer';

class App extends Component {

	//static displayName = "foo"

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
			authenticated: auth.authenticated,
			authUser: auth.authUser,
			token: auth.token,
		});
	}
	
	handleSetLocalStorage() {
		for (let key in this.state) {
			localStorage.setItem(key, JSON.stringify(this.state[key]));
		}
	}
	
	handleGetLocalStorage() {
		for (let key in this.state) {
			if (localStorage.hasOwnProperty(key)) {
				let value = localStorage.getItem(key);
				try {
					value = JSON.parse(value);
					this.setState({ [key]: value });
				} catch (e) {
					// handle empty string
					this.setState({ [key]: value });
				}
			}
		}
	}
	
	componentDidMount() {
		this.handleGetLocalStorage();
		
		// add event listener to save state to localStorage
		// when user leaves/refreshes the page
		window.addEventListener(
			"beforeunload",
			this.handleSetLocalStorage.bind(this)
		);
	}
	
	componentWillUnmount() {
		window.removeEventListener(
			"beforeunload",
			this.handleSetLocalStorage.bind(this)
		);
		
		this.handleGetLocalStorage();
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
