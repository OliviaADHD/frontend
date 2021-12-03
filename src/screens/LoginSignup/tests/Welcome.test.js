import React from 'react';
import {render} from '@testing-library/react-native';
import Welcome from '../Welcome';

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
    const {debug} = render(<Welcome props={mockNavigation}/>);
    expect(debug).toMatchSnapshot();
});

/*
test('Went to login Screen after 3 sec', async () =>{
    const {debug} = render(<Welcome props={TestProps}/>);
    act(()=> new Promise(() => {
        setTimeout(()=>{},
                        3000)
                    }));
    expect(TestProps.mockNavigation.replace).toBeCalledWith("Questionnaire");
    
})*/


