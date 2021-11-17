import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import {Signup} from '../Signup';

const mockNavigation = {
    navigate: jest.fn(),
};

it('layout hasnt changed', () =>{
    const {debug} = render(<Signup/>);
    expect(debug).toMatchSnapshot();
});


it('displays errors when submitting empty form', async () => {
    const handleSubmit = jest.fn();
    const {utils, getByPlaceholderText, getByTestId, getByText} = render(<Signup 
        onSubmit={handleSubmit}/>);
    
    await act(async () =>{
        const StyledButton = getByTestId('SubmitButton');
        fireEvent(StyledButton, 'press');
    });
    const errorTextfound = getByText('Full name is required');
    const errorTextfound2 = getByText('Login is required');
    const errorTextfound3 = getByText('Email is required');
    const errorTextfound4 = getByText('Password is required');

})


it('displays errors when submitting only one name', async () => {
    const handleSubmit = jest.fn();
    const {utils, getByPlaceholderText, getByTestId, getByText} = render(<Signup 
        onSubmit={handleSubmit}/>);
    
    await act(async () =>{
        const StyledButton = getByTestId('SubmitButton');
        fireEvent(StyledButton, 'press');
        const NameInput = getByPlaceholderText("Full Name");
        fireEvent.changeText(NameInput,'Name');
    });
    const errorTextfound = getByText('Enter at least 2 names');
})

it('displays an error if the password contains only small letters', async () => {
    const handleSubmit = jest.fn();
    const {utils, getByPlaceholderText, getByTestId, getByText} = render(<Signup 
        onSubmit={handleSubmit}/>);
    
    await act(async () =>{
        const StyledButton = getByTestId('SubmitButton');
        fireEvent(StyledButton, 'press');
        const PasswordInput = getByPlaceholderText("Password");
        fireEvent.changeText(PasswordInput, 'mypass');
    });
    const errorTextfound = getByText('Password must have a capital letter');
})

it('displays an error if the password contains small + capital letters', async () => {
    const handleSubmit = jest.fn();
    const {utils, getByPlaceholderText, getByTestId, getByText} = render(<Signup 
        onSubmit={handleSubmit}/>);
    
    await act(async () =>{
        const StyledButton = getByTestId('SubmitButton');
        fireEvent(StyledButton, 'press');
        const PasswordInput = getByPlaceholderText("Password");
        fireEvent.changeText(PasswordInput, 'myPass');
    });
    const errorTextfound = getByText('Password must have a number');
})

it('displays an error if the password contains small + capital letters + 1 number', async () => {
    const handleSubmit = jest.fn();
    const {utils, getByPlaceholderText, getByTestId, getByText} = render(<Signup 
        onSubmit={handleSubmit}/>);
    
    await act(async () =>{
        const StyledButton = getByTestId('SubmitButton');
        fireEvent(StyledButton, 'press');
        const PasswordInput = getByPlaceholderText("Password");
        fireEvent.changeText(PasswordInput, 'myPass1');
    });
    const errorTextfound = getByText('Password must have a special character');
})

it('displays an error if the password contains small + capital letters + 1 number + special character, but too short', async () => {
    const handleSubmit = jest.fn();
    const {utils, getByPlaceholderText, getByTestId, getByText} = render(<Signup 
        onSubmit={handleSubmit}/>);
    
    await act(async () =>{
        const StyledButton = getByTestId('SubmitButton');
        fireEvent(StyledButton, 'press');
        const PasswordInput = getByPlaceholderText("Password");
        fireEvent.changeText(PasswordInput, 'mP1#');
    });
    const errorTextfound = getByText('Passowrd must be at least 8 characters');
})

it('displays an error if invalid email', async () => {
    const handleSubmit = jest.fn();
    const {utils, getByPlaceholderText, getByTestId, getByText} = render(<Signup 
        onSubmit={handleSubmit}/>);
    
    await act(async () =>{
        const StyledButton = getByTestId('SubmitButton');
        fireEvent(StyledButton, 'press');
        const PasswordInput = getByPlaceholderText("Email");
        fireEvent.changeText(PasswordInput, 'myPass1');
    });
    const errorTextfound = getByText('Please enter valid email');
})

it("goes to the login page when pressing on 'already have an account'", () =>{
    const {debug, getByTestId} = render(<Signup 
        navigation={mockNavigation}/>);
    const linkSignup = getByTestId('Textlink');
    fireEvent.press(linkSignup);
    expect(mockNavigation.navigate).toBeCalledWith("Login");


})
