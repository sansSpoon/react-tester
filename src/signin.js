import React, { Component } from 'react';

function logResponse(response) {
	console.log(response.headers.get('Content-Type'));
	console.log(response.headers.get('Date'));
	console.log(response.status);
	console.log(response.statusText);
	console.log(response.type);
	console.log(response.url);
	return response;
}

function json(response) {
  return response.json()
}

function status(response) {
	if (response.ok) {
		return Promise.resolve(response)
	} else {
		return Promise.reject(new Error(response.statusText))
	}
}


class Signin extends Component {
	constructor(props){
		super(props);
		this.state={
			email:'',
			password:'',
		};
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
		alert(`Submitted ${this.state.email} and ${this.state.password}`);
		
		const apiBaseUri = "http://localhost:3000/auth/signin",
		payload = {
			"email": this.state.email,
			"password": this.state.password
		},
		initGet = {
			body: payload,
			method: 'POST',
			mode: 'cors',
			cache: 'default',
			headers: {
				'Content-Type': 'application/json'
			}
		};
		
		fetch(apiBaseUri, initGet)
			.then(logResponse)
			.then(status)
			.then(json)
			.then(data => {
				console.log(data);
			}).catch(error => {
				console.log('There has been a problem with the fetch operation: ', error.message);
			});
		
		event.preventDefault();
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="email">Email</label>
					<input name="email" type="text" value={this.state.email} onChange={this.handleChange} />
					<label htmlFor="password">Password</label>
					<input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default Signin;

/*
@example curl -i -XPOST '<host>:<port>/auth/signin' -d '{"email":"foo@foo.com", "password":"notARealPassword123!@#"}' -H 'Content-Type: application/json'
*/