import React, {useState, useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyledContainer,
    InnerContainer,
    ExtraText,
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

const MenstruationIntro =({navigation}) => {
    const [Name, setCurrentName] = useState("UserName");

    const YesClicked = () => {
        console.log('Clicked yes, navigate to next screen');
        navigation.navigate("Signup");
      };
    const NoClicked = () => {
        console.log('Clicked No, navigate to next screen');
        navigation.navigate("Signup");
      };
    const NotSureClicked = () => {
        console.log('Clicked Not Sure, navigate to next screen');
        navigation.navigate("Signup");
      };

      
    return (
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <StyledTitleCentered>
                    Hi {Name}!{"\n"}Is your menstruation cycle regular?
                </StyledTitleCentered>
                <ExtraText>
                    The Variation Of Cycle Length Less Than 7 Days
                </ExtraText>
                <ButtonContainer>
                    <StyledButtonMens onPress={YesClicked}>
                        <ButtonText>Yes</ButtonText>
                    </StyledButtonMens>
                    <StyledButtonMens onPress={NoClicked}>
                        <ButtonText>No</ButtonText>
                    </StyledButtonMens>
                </ButtonContainer>
                <StyledButtonNotSureContainer>
                    <StyledButtonNotSure onPress={NotSureClicked}>
                        <ButtonTextNotSure>NOT SURE</ButtonTextNotSure>
                    </StyledButtonNotSure>
                </StyledButtonNotSureContainer>
            </InnerContainer>
        </StyledContainer>

    );
}


export default MenstruationIntro;