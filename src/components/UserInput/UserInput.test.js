import React from 'react';
import { shallow, render, mount } from 'enzyme';
import UserInput from './UserInput';

describe('UserInput', () => {
  let props;
  let shallowUserInput;
  let renderedUserInput;
  let mountedUserInput;

  const shallowTestComponent = () => {
    if (!shallowUserInput) {
      shallowUserInput = shallow(<UserInput {...props} />);
    }
    return shallowUserInput;
  };

  const renderTestComponent = () => {
    if (!renderedUserInput) {
      renderedUserInput = render(<UserInput {...props} />);
    }
    return renderedUserInput;
  };

  const mountTestComponent = () => {
    if (!mountedUserInput) {
      mountedUserInput = mount(<UserInput {...props} />);
    }
    return mountedUserInput;
  };  

  beforeEach(() => {
    props = {};
    shallowUserInput = undefined;
    renderedUserInput = undefined;
    mountedUserInput = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
