import React from 'react';
import { AuthContext } from './AuthContext';

export default function WelcomeContainer() {
	return (
		<AuthContext.Consumer>
			{footastic => (
				<div>
					<p>Email: {footastic.authUser}</p>
					<p>Token: {footastic.token}</p>
					<p>Authenticated: Duh, {footastic.authenticated.toString()}</p>
				</div>
			)}
		</AuthContext.Consumer>
	);
}
