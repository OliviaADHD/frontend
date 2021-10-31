import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyledContainer,
    InnerContainer,
    ButtonText,
}from '../components/styles';
import {
    StyledTitleCentered,
    StyledButtonNotSure,
    ButtonTextNotSure,
    StyledButtonNotSureContainer,
}from '../components/stylesMenstruation';
import {
    NextBtnContainer,
    StyledButtonNext,
    StyledCalendar
}from '../components/stylesCalendar';
import {Calendar} from 'react-native-calendars';

const CalendarInitial =({navigation}) => {
    var NextScreen = "Infonotice_Menstruation";
    var NotSureScreen = "Infonotice_Menstruation";

    const NextClicked = () => {
        navigation.navigate(NextScreen);
      };
    const NotSureClicked = () => {
        navigation.navigate(NotSureScreen);
      };

    return (
        <StyledContainer>  
            <StatusBar style="dark"/>
            <InnerContainer>
                <StyledTitleCentered>
                    When did your last period start?
                </StyledTitleCentered>
                <StyledCalendar>
                <Calendar
                    current={Date()}
                    maxDate={new Date()}
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
                />
                </StyledCalendar>
                <NextBtnContainer>
                    <StyledButtonNext
                        onPress={NextClicked}
                        testID={"CalendarNextClickedButton"}>
                        <ButtonText>Next</ButtonText>
                    </StyledButtonNext>
                </NextBtnContainer>
                <StyledButtonNotSureContainer>
                    <StyledButtonNotSure 
                        onPress={NotSureClicked}
                        testID={"CalendarNotSureClickedButton"}>
                        <ButtonTextNotSure>NOT SURE</ButtonTextNotSure>
                    </StyledButtonNotSure>
                </StyledButtonNotSureContainer> 
             </InnerContainer>
        </StyledContainer> 
    );
}

export default CalendarInitial;