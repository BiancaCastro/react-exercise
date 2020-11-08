import React from 'react';

const UserOutput = props => (
	<div>
		<p>This is the first: {props.name}</p>
		<p>This is the second: {props.username}</p>
		<p>{props.children}</p>
	</div>
);


const UserOutputPropTypes = {
	// always use prop types!
};

UserOutput.propTypes = UserOutputPropTypes;

export default UserOutput;
