import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Welcome_Post_Signup from '../Welcome_Post_Signup';

import TestRenderer from 'react-test-renderer';

const{act} = TestRenderer;

const mockNavigation = {
    navigate: jest.fn(),
    replace: jest.fn()
};
const TestProps ={
    navigation: mockNavigation,
};



test('Snapshot changed?', async () =>{
    const {debug} = render(<Welcome_Post_Signup navigation={mockNavigation}/>);
    expect(debug).toMatchSnapshot();
});

test('Goes to questionairy page when PROCEEDS pressed', async () =>{
    const {debug, getByText} = render(<Welcome_Post_Signup navigation={TestProps.navigation}/>);
    const ToClick = getByText("Proceed");
    fireEvent.press(ToClick);
    expect(mockNavigation.replace).toBeCalledWith("Questionnaire");
});