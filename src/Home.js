import React from 'react';
import { AuthContext } from './AuthContext';
import './home.css';

export default function WelcomeContainer() {
	return (
		<AuthContext.Consumer>
			{footastic => (
				<div className="bg">
					<p>Email: {footastic.authUser}</p>
					<p>Token: {footastic.token}</p>
					<p>Authenticated: Duh, {footastic.authenticated.toString()}</p>
				</div>
			)}
		</AuthContext.Consumer>
	);
}
