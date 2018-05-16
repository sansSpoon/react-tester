import React, { Component } from 'react';
import { AuthContext } from './AuthContext';

export default class HomeContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			
		};
	}

	render() {
		return (
			<React.Fragment>
				<h1>There is nothing like 127.0.0.1</h1>
				<AuthContext.Consumer>
					{footastic => (
						<div>
							<p>Email: {footastic.authUser}</p>
							<p>Token: {footastic.token}</p>
							<p>Authenticated: Duh, {footastic.authenticated.toString()}</p>
						</div>
					)}
				</AuthContext.Consumer>
			</React.Fragment>
		);
	}

}