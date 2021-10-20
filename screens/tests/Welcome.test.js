import React from 'react';
import {render} from '@testing-library/react-native';
import Welcome from '../Welcome';

import TestRenderer from 'react-test-renderer';

const{act} = TestRenderer;

const mockNavigation = {
    navigate: jest.fn(),
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
    const {debug} = render(<Welcome props={mockNavigation}/>);
    console.log("name of debug " + debug.name)
    const value = await new Promise(() => {
        setTimeout(()=>{console.log("name of debug "+debug.name)},
                        4000);
        return true;
                    });
    expect(value).toBe(true);
    
})
*/
