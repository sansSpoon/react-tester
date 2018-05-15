import React, { Component } from 'react';
import Welcome from './Welcome';

export default class WelcomeContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			
		};
	}

	render() {
		return (
			<div>
				<p>Welcome</p>
				<Welcome />
			</div>
		);
	}

}