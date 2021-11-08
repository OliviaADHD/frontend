import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import Login from '../Login';



const mockNavigation = {
    navigate: jest.fn(),
};

it('renders correctly', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });

