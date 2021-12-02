import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyledContainer,
    ButtonText,
    ButtonGroup,
    ButtonGroupChild,
    ButtonGroupContainer,
    StyledCalendarList,
}from '../../components/styles';
import {CalendarList} from 'react-native-calendars';


const YearlyCalendar =({pageNav, setPage}) => {


    return (
        <StyledContainer>  
            <StatusBar style="dark"/>
                <ButtonGroupContainer>
                    <ButtonGroup>
                        <ButtonGroupChild><ButtonText onPress = {() => setPage(pageNav.MonthlyCalendar)} style={{color: 'black'}}>Month</ButtonText></ButtonGroupChild>
                        <ButtonGroupChild><ButtonText  style={{color: 'black'}}>Year</ButtonText></ButtonGroupChild>
                    </ButtonGroup>
                </ButtonGroupContainer>
                <StyledCalendarList>
                        <CalendarList
                            current={Date()}
                            onDayPress={(day) =>onDayPress(day)}
                        />
                </StyledCalendarList>
        </StyledContainer> 
    );
}

export default YearlyCalendar
    