import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";

import {
    StyledContainer,
    InnerContainer, 
    ExtraText,
    ButtonText,
    ErrorMessage,
    ErrorText
} from './../components/styles';
import {
    StyledTitleCentered,
    StyledButtonNotSure,
    ButtonTextNotSure,
    StyledButtonNotSureContainer,
}from '../components/stylesMenstruation';
import {
    NextBtnContainer,
    StyledButtonNext,
}from '../components/stylesCalendar';

import ScrollableDaySelector from "./ScrollableSelectionBox";

const CyclePeriod1 = ({navigation}) =>{
    const [DaySelected, SetDaySelected] = useState(undefined);
    const [warning, SetWarning] = useState(false);
    var NextScreen = "CyclePeriod2";
    var NotSureScreen = "Signup";


    const NextClicked = () => {
        console.log('next was clicked');
        if (DaySelected!=undefined){
            SetWarning(false);
            console.log("a specific day was selected: " + DaySelected);
            navigation.navigate(NextScreen);
        } else {
            console.log(" no specific day was selected, display warning");
            SetWarning(true);
        }
    };

    const NotSureClicked = () => {
        console.log('Not sure was clicked, and the Day was '+DaySelected);
        navigation.navigate(NotSureScreen);
    }

    return(
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <StyledTitleCentered style={{marginBottom: '0%'}}
                    >How long is your periodic cycle?
                </StyledTitleCentered>
                <ExtraText style={{marginTop: '0%'}}>(Usually 21-35 Days)</ExtraText>
                <ScrollableDaySelector 
                    startDay={10} numberDays={51} 
                    daySelected={DaySelected} setDaySelected={SetDaySelected}/>
                { warning &&
                            <ErrorMessage style={{width: "80%"}}>
                                <ErrorText style={{textAlign: 'center'}}>
                                    Please select a Day before Clicking 'Next'.
                                    Otherwise click on 'Not Sure'.
                                </ErrorText>
                            </ErrorMessage> 
                        }
                <NextBtnContainer style={{marginTop: '5%'}}>
                    <StyledButtonNext
                        onPress={NextClicked}
                        testID={"CyclePeriod1NextClickedButton"}>
                        <ButtonText>Next</ButtonText>
                    </StyledButtonNext>
                </NextBtnContainer>
                <StyledButtonNotSureContainer style={{marginTop: '0%'}}>
                    <StyledButtonNotSure 
                        onPress={NotSureClicked}
                        testID={"CyclePeriod2NotSureClickedButton"}>
                        <ButtonTextNotSure>NOT SURE</ButtonTextNotSure>
                    </StyledButtonNotSure>
                </StyledButtonNotSureContainer> 
            </InnerContainer>
        </StyledContainer>
    );
};



export default CyclePeriod1