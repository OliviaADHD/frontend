import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import MenstruationIntro from '../MenstruationIntro';

const mockNavigation = {
    navigate: jest.fn(),
};


var YesScreen = "Signup";
var NoScreen = "Signup";
var NotSureScreen = "Signup";


test('Snapshot changed?', () =>{
    const {debug} = render(<MenstruationIntro/>);
    expect(debug).toMatchSnapshot();
});


test('navigate to correct screen after clicking yes', () =>{
    const {debug, getByTestId} = render(<MenstruationIntro 
        navigation={mockNavigation}/>);
    const YesButton = getByTestId("MenstruationIntroYesClickedButton");
    console.log("YesScreen "+debug.YesScreen)
    fireEvent.press(YesButton);
    expect(mockNavigation.navigate).toBeCalledWith(YesScreen);
});

test('navigate to correct screen after clicking no', () =>{
    const {debug, getByTestId} = render(<MenstruationIntro 
        navigation={mockNavigation}/>);
    const NoButton = getByTestId("MenstruationIntroNoClickedButton");
    fireEvent.press(NoButton);
    expect(mockNavigation.navigate).toBeCalledWith(NoScreen);
});

test('navigate to correct screen after clicking Not Sure', () =>{
    const {debug, getByTestId} = render(<MenstruationIntro 
        navigation={mockNavigation}/>);
    const NotSureButton = getByTestId("MenstruationIntroNotSureClickedButton");
    fireEvent.press(NotSureButton);
    expect(mockNavigation.navigate).toBeCalledWith(NotSureScreen);
});
