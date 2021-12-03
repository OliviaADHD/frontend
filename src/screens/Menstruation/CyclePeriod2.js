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
import { useDispatch} from "react-redux";
import { setMensDataFirstTime } from "../../redux/actions/menstruation/menstruation";

const CyclePeriod2 = ({firstPage, setFirstPage, DaySelected, SetDaySelected, allMensData}) =>{
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
    const dispatch = useDispatch();
    const [warning, SetWarning] = useState(false);

    const NextClicked = () => {
        if (DaySelected!=undefined){
            SetWarning(false);
            allMensData.periodLength = DaySelected;
            dispatch(setMensDataFirstTime(allMensData));
            console.log(allMensData);
            setFirstPage(firstPage+1);
        } else {
            SetWarning(true);
        }
    };

    const NotSureClicked = () => {
        SetDaySelected(5);
        allMensData.periodLength = 5;
        console.log("just before dispatching:", allMensData);
        dispatch(setMensDataFirstTime(allMensData));
        setFirstPage(firstPage+1);
    }

    return(
            <InnerContainer>
                <StyledTitleCentered style={{marginBottom: '0%'}}
                    >How long does your period usually last?
                </StyledTitleCentered>
                <ScrollableDaySelector 
                    startDay={2} numberDays={15} 
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



export default CyclePeriod2