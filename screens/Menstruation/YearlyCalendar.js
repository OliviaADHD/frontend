import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
    InnerContainer,
    Colors,
    ButtonText,
    ButtonGroup,
    ButtonGroupChild,
    ButtonGroupContainer,
    StyledCalendarList,
}from '../../components/styles';
import {CalendarList} from 'react-native-calendars';


const YearlyCalendar =({pageNav, setPage}) => {


    return (
        <InnerContainer>  
                <ButtonGroupContainer style={{marginTop: "8%", 
                                        height: "6%",
                                        alignItems: "center"}}>
                    <ButtonGroup style={{width: "62%", height: "100%",
                                        left: "0%", top: "0%", padding: "1%", alignItems: "center"}}>
                        <ButtonGroupChild style={{backgroundColor: Colors.white, alignItems: "center"}}>
                            <ButtonText  style={{color: Colors.black}}
                                onPress = {() => setPage(pageNav.MonthlyCalendar)}
                            >Month</ButtonText>
                        </ButtonGroupChild>
                        <ButtonGroupChild style={{backgroundColor: Colors.purple}}>
                            <ButtonText style={{color: Colors.white}}>Year</ButtonText>
                        </ButtonGroupChild>
                    </ButtonGroup>
                </ButtonGroupContainer>
                <StyledCalendarList>
                        <CalendarList
                            current={Date()}
                            onDayPress={(day) =>onDayPress(day)}
                        />
                </StyledCalendarList>
        </InnerContainer> 
    );
}

export default YearlyCalendar
    