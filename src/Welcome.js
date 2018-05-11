import React, { Component } from 'react';

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
		
		if (name === 'signIn') {
			console.log(`Submitted ${this.state.email} and ${this.state.password} from Sign In`);
		} else {
			console.log(`Submitted ${this.state.email} and ${this.state.password} from Sign Up`);
		}
	}

	render() {
		return(
			<div>
				<p>Welcome</p>
				<form>
					<label htmlFor="email">Email</label>
					<input id="email" name="email" type="text" value={this.state.email} onChange={this.handleChange} />
					<label htmlFor="password">Password</label>
					<input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange} />
					<input type="submit" name="signIn" value="Sign In" onClick={this.handleSubmit} />
					<input type="button" name="signUp" value="Sign Up" onClick={this.handleSubmit} />
				</form>
			</div>
		);
	}
	
}

export default Welcome; 
