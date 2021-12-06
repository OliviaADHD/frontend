import React, {useState, useEffect} from "react";
import { BackHandler } from "react-native";
import {
    StyledContainer,
    InnerContainer, 
    ExtraText,
    ButtonText,
    ErrorMessage,
    ErrorText
} from '../../css/styles';
import {
    StyledTitleCentered,
    StyledButtonNotSure,
    ButtonTextNotSure,
    StyledButtonNotSureContainer,
}from '../../css/stylesMenstruation';
import {
    NextBtnContainer,
    StyledButtonNext,
}from '../../css/stylesCalendar';

import ScrollableDaySelector from "../../components/ScrollableSelectionBox";

const CyclePeriod1 = ({firstPage, setFirstPage, DaySelected, SetDaySelected}) =>{
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
    const [warning, SetWarning] = useState(false);

    const NextClicked = () => {
        if (DaySelected!=undefined){
            SetWarning(false);
            setFirstPage(firstPage+1);
        } else {
            SetWarning(true);
        }
    };

    const NotSureClicked = () => {
        SetDaySelected(28);
        setFirstPage(firstPage+1);
    }

    return(
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
    );
};



export default CyclePeriod1