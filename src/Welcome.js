import React, { Component } from 'react';
import { logResponse, json, status } from './fetchMethods';

//import SignUp from './SignUp';
//import SignIn from './SignIn';

class Welcome extends Component {

	constructor(props) {
		
		super(props);
		this.state = {
			email: '',
			password: '',
		}
		
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({[name]: value});
	}

	handleSubmit(event) {
		event.preventDefault();
		
		const target = event.target;
		const name = target.name;
		
		
		const apiBaseUri = "http://localhost:3001/auth/",
			payload = {
				"email": this.state.email,
				"password": this.state.password
			},
			initGet = {
				body: JSON.stringify(payload),
				method: 'POST',
				mode: 'cors',
				cache: 'default',
				headers: {
					'Content-Type': 'application/json'
				}
			};
		
		let authFetch;
		
		if (name === 'signIn') {
			console.log(`Submitted ${this.state.email} and ${this.state.password} from Sign In`);
			console.log(payload);
			
			authFetch = fetch(`${apiBaseUri}signin`, initGet);
			
		} else {
			console.log(`Submitted ${this.state.email} and ${this.state.password} from Sign Up`);
			console.log(payload);
			
			authFetch = fetch(`${apiBaseUri}signup`, initGet);
		}
		
		authFetch
			.then(logResponse).then(status).then(json)
			.then(data => {
				console.log(data);
				this.props.onLogin({
					authenticated: true,
					authUser: payload.email,
					token: data.token,
				});
				
			}).catch(error => {
				console.log('There has been a problem with the fetch operation: ', error.message);
			});
	}

	render() {
		return(
			<form>
				<label htmlFor="email">Email</label>
				<input id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
				<label htmlFor="password">Password</label>
				<input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange} />
				<input type="submit" name="signIn" value="Sign In" onClick={this.handleSubmit} />
				<input type="button" name="signUp" value="Sign Up" onClick={this.handleSubmit} />
			</form>
		);
	}
	
}

export default Welcome; 


/*
@example curl -i -XPOST '<host>:<port>/auth/signin' -d '{"email":"foo@foo.com", "password":"notARealPassword123!@#"}' -H 'Content-Type: application/json'
@example curl -i -XPOST '<host>:<port>/auth/signup' -d '{"email":"foo@foo.com", "password":"notARealPassword123!@#"}' -H 'Content-Type: application/json'
*/