import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
    StyledContainer,
    ButtonText,
    ButtonGroup,
    ButtonGroupChild,
    ButtonGroupContainer,
    InnerContainer,
    ButtonContainers,
    InputMoodBtn,
    EditPeriodBtn,
    MediumExtraText,
    Colors
}from '../../components/styles';

import {Calendar} from 'react-native-calendars';
import {
    StyledCalendar
}from '../../components/stylesCalendar';

import {calculateNextPeriods} from "../../components/Menstruation/helperFunctions";

const MonthlyCalendar =({pageNav, setPage}) => {
    const menstruationData = useSelector(state => state.menstruationInfo);
    const [selectedDate, setSelectedDate] = useState();

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
                        <ButtonGroupChild style={{backgroundColor: Colors.purple, alignItems: "center"}}>
                            <ButtonText  style={{color: Colors.white}}>Month</ButtonText>
                        </ButtonGroupChild>
                        <ButtonGroupChild>
                            <ButtonText onPress = {() => setPage(pageNav.YearlyCalendar)} 
                            style={{color: 'black'}}>Year</ButtonText>
                        </ButtonGroupChild>
                    </ButtonGroup>
                </ButtonGroupContainer>
                
                <StyledCalendar style={{marginTop: "4%", marginBottom: "2%", height: "62%"}}>
                        <Calendar
                            current={Date()}
                            onDayPress={(day) =>console.log(day)}
                            monthFormat={'MMMM yyyy'}
                            onPressArrowLeft={subtractMonth => subtractMonth()}
                            onPressArrowRight={addMonth => addMonth()}
                            enableSwipeMonths={true} 
                            theme={{
                                
                                todayTextColor: '#7047EB',
                                dayTextColor: '#333333',
                                textDisabledColor: '#BDBDBD',
                                arrowColor: '#7047EB',
                                monthTextColor: '#333333',
                                textDayFontWeight: '500',
                                textMonthFontWeight: 'bold',
                                textDayHeaderFontWeight: 'normal',
                                textDayFontSize: 15,
                                textMonthFontSize: 18,
                                textDayHeaderFontSize: 15,
                                textSectionTitleColor: '#7047EB',
                              }}
                            markedDates={nextPeriods}
                        
                        />
                    </StyledCalendar>
                
                <ButtonContainers style={{width: "70%",
                                          marginTop: "0%", top: "0%", alignItems: "center"}}>
                    <InputMoodBtn><ButtonText onPress = {() => setPage(pageNav.Mood)} >Input Mood</ButtonText></InputMoodBtn>
                    <EditPeriodBtn><ButtonText onPress = {() => setPage(pageNav.Period)} >Input Period</ButtonText></EditPeriodBtn>
                </ButtonContainers>
                <MediumExtraText style={{ color : Colors.black, margin : '0%', width: "60%", top: "3%",
                                            textDecorationLine: "underline",
                                            padding: "0%", paddingTop: "0%", paddingBottom: "0%",
                                        height: "7%"}}>Mood Analysis Chart</MediumExtraText>
              </InnerContainer>  
    );
}

export default MonthlyCalendar;
    