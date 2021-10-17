import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import MenstruationIntro from '../MenstruationIntro';

const mockNavigation = {
    navigate: jest.fn(),
};

test('test whether it renders correctly (snapshot unchanged)', () =>{
    const {debug} = render(<MenstruationIntro/>);
    expect(debug).toMatchSnapshot();
});




