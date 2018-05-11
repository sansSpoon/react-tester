import React, { Component } from 'react';

import SignUp from './SignUp';
import SignIn from './SignIn';

class Welcome extends Component {

	constructor(props) {
		super(props);
		this.state = {
			signUp: false,
		}
	}

	render() {
		if (this.state.signUp) {
			return <SignUp />
		} else {
			return <SignIn />
		}
	}
	
}

export default Welcome;