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
}from '../../components/styles';

import {Calendar} from 'react-native-calendars';
import {
    StyledCalendar
}from '../../components/stylesCalendar';


const MonthlyCalendar =({navigation}) => {
    const [selectedDate, setSelectedDate] = useState()



    return (
        <StyledContainer>  
            <StatusBar style="dark"/>
            <InnerContainer>
                <ButtonGroupContainer>
                    <ButtonGroup>
                        <ButtonGroupChild><ButtonText  style={{color: 'black'}}>Month</ButtonText></ButtonGroupChild>
                        <ButtonGroupChild><ButtonText onPress = {() => navigation.navigate("YearlyCalendar")} style={{color: 'black'}}>Year</ButtonText></ButtonGroupChild>
                    </ButtonGroup>
                </ButtonGroupContainer>
                <StyledCalendar>
                        <Calendar
                            current={Date()}
                            onDayPress={(day) =>onDayPress(day)}
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
                <ButtonContainers>
                    <InputMoodBtn><ButtonText onPress = {() => navigation.navigate("Mood")} >Input Mood</ButtonText></InputMoodBtn>
                    <EditPeriodBtn><ButtonText onPress = {() => navigation.navigate("Period")} >Input Period</ButtonText></EditPeriodBtn>
                </ButtonContainers>
                <MediumExtraText style={{ color : '#694398', marginTop : '50%'}}>Mood Analysis Chart</MediumExtraText>
              </InnerContainer>  
        </StyledContainer> 
    );
}

export default MonthlyCalendar
    