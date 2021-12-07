import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Questionnaire from '../Questionnaire';

import TestRenderer from 'react-test-renderer';
import { isTablet } from 'react-native-calendars/src/expandableCalendar/commons';

const{act} = TestRenderer;

const mockNavigation = {
    navigate: jest.fn(),
    replace: jest.fn()
};
const TestProps ={
    navigation: mockNavigation,
};

test('Snapshot changed?', async () =>{
    const {debug} = render(<Questionnaire navigation={mockNavigation}/>);
    expect(debug).toMatchSnapshot();
});

//write more snapshots for the other pages of the questionnaire!

test("shows error on the first page if no answer given", async()=>{
    const {debug, getByText} = render(<Questionnaire navigation={mockNavigation}/>);
    const NextButton = getByText("Next");
    var found = false;
    fireEvent.press(NextButton);
    try {
        const bla = getByText('Please select a category!');
        found = true;
    } catch(error) {
        found = false;
    }
    expect(found).toBeTruthy();
});


test("goes to question 2 if something was selected", async()=>{
    const {debug, getByText} = render(<Questionnaire navigation={mockNavigation}/>);
    const NextButton = getByText("Next");
    const clickOption = getByText("18-25 Years")
    fireEvent.press(clickOption);
    var found = false;
    fireEvent.press(NextButton);
    try {
        getByText('Please select a category!');
        found = true;
    } catch(error) {
        found = false;
    }
    var foundQuestion2 = false;
    try{
        getByText('Choose one or more of these, if you have felt/had.');
        foundQuestion2=true;
    } catch(error) {foundQuestion2=false;}
    expect(found).toBeFalsy();
    expect(foundQuestion2).toBeTruthy;
});

test("Displays warning on page 2 if nothing selected", async()=>{
    const {debug, getByText} = render(<Questionnaire navigation={mockNavigation}/>);
    const NextButton = getByText("Next");
    const clickOption = getByText("18-25 Years")
    fireEvent.press(clickOption);
    var foundWarning = false;
    fireEvent.press(NextButton);
    fireEvent.press(NextButton);
    try {
        getByText('Please select at least one answer!');
        found = true;
    } catch(error) {
        found =
        false;
    }
    expect(foundWarning).toBeTruthy;
});

test("Goes back to page 1 from page 2", async()=>{
    const {debug, getByText} = render(<Questionnaire navigation={mockNavigation}/>);
    const NextButton = getByText("Next");
    const clickOption = getByText("18-25 Years")
    fireEvent.press(clickOption);
    var found = false;
    fireEvent.press(NextButton);
    const backButton = getByText("Previous");
    fireEvent.press(backButton);
    try {
        getByText('Please select a category!');
        found = true;
    } catch(error) {
        found = false;
    }
    var foundQuestion1 = false;
    try{
        getByText('What age group do you fall under?');
        foundQuestion1=true;
    } catch(error) {foundQuestion1=false;}
    expect(found).toBeFalsy();
    expect(foundQuestion1).toBeTruthy;

});

test("Goes to page 3 if 'ADH diagnosed' selected", async()=>{
    const {debug, getByText} = render(<Questionnaire navigation={mockNavigation}/>);
    const NextButton = getByText("Next");
    const clickOption = getByText("18-25 Years")
    fireEvent.press(clickOption);
    var foundWarning = false;
    fireEvent.press(NextButton);
    const clickOption2 = getByText("Diagnosed ADHD");
    fireEvent.press(NextButton);
    try {
        getByText('Please select at least one answer!');
        found = true;
    } catch(error) {
        found =false;
    }
    var foundQuestion3 = false;
    try {
        getByText("If you have ADHD, How many years it has been diagnosed?");
        foundQuestion3=true;
    } catch (Error) {foundQuestion3=false}
    expect(foundWarning).toBeFalsy;
    expect(foundQuestion3).toBeTruthy;
});
/*
test("Goes to page 3 if 'ADH diagnosed' among multiple selected", async()=>{});

test("Displays warning on page 3 if nothing selected", async()=>{});

test("Goes back to page 2 from page 3", async()=>{});

test("Goes to page 4 if 'ADH diagnosed' not among selected"), async()=>{}

test("Goes from page 4 back to page 3 if 'ADH diagnosed' selected"), async()=>{}

test("Goes from page 4 back to page 2 if 'ADH diagnosed' not in selected"), async()=>{}
*/