import React, { Component } from 'react';


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