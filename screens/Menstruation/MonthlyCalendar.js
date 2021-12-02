import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
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


const MonthlyCalendar =({pageNav, setPage}) => {
    const [selectedDate, setSelectedDate] = useState()



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
                
                <StyledCalendar style={{marginTop: "4%", marginBottom: "2%", height: "50%"}}>
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
                            markedDates={{
                                '2021-11-15': {selected: true, selectedColor: '#694398'},
                            }}
                        
                        />
                    </StyledCalendar>
                
                <ButtonContainers style={{width: "70%",
                                          marginTop: "0%", top: "5%", alignItems: "center"}}>
                    <InputMoodBtn><ButtonText onPress = {() => setPage(pageNav.Mood)} >Input Mood</ButtonText></InputMoodBtn>
                    <EditPeriodBtn><ButtonText onPress = {() => setPage(pageNav.Period)} >Input Period</ButtonText></EditPeriodBtn>
                </ButtonContainers>
                <MediumExtraText style={{ color : Colors.black, margin : '0%', width: "60%", top: "6%",
                                            textDecorationLine: "underline",
                                            padding: "0%", paddingTop: "0%", paddingBottom: "0%",
                                        height: "7%"}}>Mood Analysis Chart</MediumExtraText>
              </InnerContainer>  
    );
}

export default MonthlyCalendar;
    