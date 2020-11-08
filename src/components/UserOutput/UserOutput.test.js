import React from 'react';
import { shallow, render, mount } from 'enzyme';
import UserOutput from './UserOutput';

describe('UserOutput', () => {
  let props;
  let shallowUserOutput;
  let renderedUserOutput;
  let mountedUserOutput;

  const shallowTestComponent = () => {
    if (!shallowUserOutput) {
      shallowUserOutput = shallow(<UserOutput {...props} />);
    }
    return shallowUserOutput;
  };

  const renderTestComponent = () => {
    if (!renderedUserOutput) {
      renderedUserOutput = render(<UserOutput {...props} />);
    }
    return renderedUserOutput;
  };

  const mountTestComponent = () => {
    if (!mountedUserOutput) {
      mountedUserOutput = mount(<UserOutput {...props} />);
    }
    return mountedUserOutput;
  };  

  beforeEach(() => {
    props = {};
    shallowUserOutput = undefined;
    renderedUserOutput = undefined;
    mountedUserOutput = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
