import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Signup} from '../Signup';

const mockNavigation = {
    navigate: jest.fn(),
};

test('Snapshot changed?', () =>{
    const {debug} = render(<Signup/>);
    expect(debug).toMatchSnapshot();
});

/* still under construction
test('Testing FullName that it shows errors', () =>{
    const {debug, getByPlaceholderText, getByTestId} = render(<Signup 
        navigation={mockNavigation}/>);
    const NameTextInput = getByPlaceholderText("Full Name");

    var InvalidNames = ["Name", "MyName"];
    fireEvent.changeText(NameTextInput, InvalidNames[0]);
    const PasswordInput = getByPlaceholderText("Password");
    fireEvent.changeText(PasswordInput, 'MyValidPassword20!');
    

}); 
*/



/*
    const NameLoginInput = getByPlaceholderText("Login");
    const EmailInput = getByPlaceholderText("Email");
    const PasswordInput = getByPlaceholderText("Password");
    fireEvent.changeText(NameLoginInput, "TestUser");
    fireEvent.changeText(EmailInput, "example@email.com");
    fireEvent.changeText(PasswordInput, 'MyValidPassword20!');

*/