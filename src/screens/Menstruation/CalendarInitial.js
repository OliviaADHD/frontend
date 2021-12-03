import React, { useState, useEffect } from "react";
import { BackHandler } from "react-native";
import {
    StyledContainer,
    InnerContainer,
    ButtonText,
    Colors,
    ErrorText,
    ErrorMessage,
}from '../../css/styles';
import {
    StyledTitleCentered,
    StyledButtonNotSure,
    ButtonTextNotSure,
    StyledButtonNotSureContainer,
}from '../../css/stylesMenstruation';
import {
    NextBtnContainer,
    StyledButtonNext,
    StyledCalendar
}from '../../css/stylesCalendar';
import {Calendar} from 'react-native-calendars';
import {makeDateString} from "../../css/Menstruation/helperFunctions";

const CalendarInitial =({firstPage, setFirstPage, selectedDate, setSelectedDate}) => {
    //backhandler
    const backAction = () => {
        setFirstPage(firstPage-1);
        return true;
      };
    
      useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);
    
        return () =>
          BackHandler.removeEventListener("hardwareBackPress", backAction);
      }, []);
    

    //the rest of the screen
    const [error, setError] = useState(false);
    const [markedDate, setMarkedDate] =useState(undefined);
    const NextClicked = () => {
        if (selectedDate === undefined){
            setError(true);
        } else {
            setFirstPage(firstPage+1);
        }
      };
    const NotSureClicked = () => {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate()+1);
        const tomorrowDate = makeDateString(tomorrow);
        setSelectedDate(tomorrowDate);
        setFirstPage(firstPage+1);
      };
    return (
        <InnerContainer style={{height: "10%"}}>
            <StyledTitleCentered style={{marginTop: "4%"}}>
                When did your last period start?
            </StyledTitleCentered>
            <StyledCalendar style={{marginTop: "4%", marginBottom: "2%"}}>
            <Calendar
                current={Date()}
                maxDate={new Date()}
                onDayPress={(day) => {
                    console.log(day);
                    setSelectedDate(day.date+"/"+day.month+"/"+day.year);
                    setMarkedDate(day.dateString);
                }}
                markedDates={{
                    [markedDate]: {
                                        selected: true,
                                        disableTouchEvent: true,
                                        selectedColor: '#F1EFFE',
                                        selectedTextColor: '#7954FA',
                                    }
                }}
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
                    selectedDayBackgroundColor: Colors.purple,
                    selectedDayTextColor: '#ffffff'
                    }}
            />
            </StyledCalendar>
            <NextBtnContainer style={{marginTop: "70%", marginBottom: "0%"}}>
                <StyledButtonNext
                    onPress={NextClicked}
                    testID={"CalendarNextClickedButton"}>
                    <ButtonText>Next</ButtonText>
                </StyledButtonNext>
            </NextBtnContainer>
            {error && 
                <ErrorMessage style={{marginBottom: "0%", marginTop:"1%"}}>
                    <ErrorText>Please select a date before clicking next. 
                    If you are not sure, click 'not sure' and we'll asume your period will start tomorrow. 
                    You can change your period starting date later if necessary.</ErrorText>
            </ErrorMessage>}
            <StyledButtonNotSureContainer style={error?{marginTop: "0%"}:{}}>
                <StyledButtonNotSure
                    onPress={NotSureClicked}
                    testID={"CalendarNotSureClickedButton"}>
                    <ButtonTextNotSure>NOT SURE</ButtonTextNotSure>
                </StyledButtonNotSure>
            </StyledButtonNotSureContainer> 
    </InnerContainer>
    );
}

export default CalendarInitial;