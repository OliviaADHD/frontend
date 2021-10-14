import React, {useState, useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyledContainer,
    InnerContainer,
    ExtraText,
    StyledTitle,
    StyledButton,
    MediumExtraText,
    ButtonText,
}from '../components/styles';
import {
    ButtonContainer,
    StyledButtonMens,
    StyledTitleCentered,
    StyledButtonNotSure,
    ButtonTextNotSure,
    StyledButtonNotSureContainer,
}from '../components/stylesMenstruation';

const Anja2 =({navigation}) => {
   
    return (
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <StyledTitleCentered>
                    Hi Name!{"\n"}Is your menstruation cycle regular?
                </StyledTitleCentered>
                <ExtraText>
                    The Variation Of Cycle Length Less Than 7 Days
                </ExtraText>
                <ButtonContainer>
                    <StyledButtonMens onPress={() =>{console.log("Pressed Yes")}}>
                        <ButtonText>Yes</ButtonText>
                    </StyledButtonMens>
                    <StyledButtonMens onPress={() =>{console.log("Pressed No")}}>
                        <ButtonText>No</ButtonText>
                    </StyledButtonMens>
                </ButtonContainer>
                <StyledButtonNotSureContainer>
                    <StyledButtonNotSure onPress={() =>{console.log("Pressed not Sure")}}>
                        <ButtonTextNotSure>NOT SURE</ButtonTextNotSure>
                    </StyledButtonNotSure>
                </StyledButtonNotSureContainer>
            </InnerContainer>
        </StyledContainer>

    );
}


export default Anja2;