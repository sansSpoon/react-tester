import React, { Component } from 'react';

class SignUp extends Component {

	constructor(props) {
		super(props);
		this.state={
			email:'',
			password:'',
		};
	}

	render() {
		return (
			<div>
				<p>Sign Up</p>
				<form>
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

export default SignUp;

/*
@example curl -i -XPOST '<host>:<port>/auth/signin' -d '{"email":"foo@foo.com", "password":"notARealPassword123!@#"}' -H 'Content-Type: application/json'
*/