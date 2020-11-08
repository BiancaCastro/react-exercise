import React from 'react';

const UserInput = props => (
	<div>
		<input onChange={props.changeName} value={props.name} />
	</div>
	
);


const UserInputPropTypes = {
	// always use prop types!
};

UserInput.propTypes = UserInputPropTypes;

export default UserInput;
