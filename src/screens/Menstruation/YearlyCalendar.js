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
}from '../../css/styles';
import {CalendarList} from 'react-native-calendars';
import { useSelector } from "react-redux";
import {calculateNextPeriods} from "../../helpers/menstruation";


const YearlyCalendar =({pageNav, setPage}) => {
    const menstruationData = useSelector(state => state.menstruationInfo);
    const nextPeriods = calculateNextPeriods(20, 
        menstruationData.startLastPeriod,
        menstruationData.periodCycleLength,
        menstruationData.periodLength);

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
                <StyledCalendarList styles={{height: "50%", backgroundColor: "green"}}>
                        <CalendarList styles={{height:"20%", paddingBottom: "20%"}}
                            current={Date()}
                            onDayPress={(day) =>console.log(day)}
                            markedDates={nextPeriods}
                        />
                </StyledCalendarList>
        </InnerContainer> 
    );
}

export default YearlyCalendar
    