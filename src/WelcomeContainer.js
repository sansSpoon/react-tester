import React from 'react';
import Welcome from './Welcome';


export default function WelcomeContainer(props) {
	return (
		<div>
			<p>Welcome</p>
			<Welcome onLogin={props.onLogin} />
		</div>
	);
}





// Originally created the container as a class,
// but no state was being used, need to look at
// seperating out welcome method and put in here

/*
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
				<Welcome onLogin={this.props.onLogin} />
			</div>
		);
	}

}
*/