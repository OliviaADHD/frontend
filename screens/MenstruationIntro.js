import React, {useState} from "react";
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
    var YesScreen = "Signup";
    var NoScreen = "Signup";
    var NotSureScreen = "Signup";

    const YesClicked = () => {
        navigation.navigate(YesScreen);
      };
    const NoClicked = () => {
        navigation.navigate(NoScreen);
      };
    const NotSureClicked = () => {
        navigation.navigate(NotSureScreen);
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
                    <StyledButtonMens 
                        onPress={YesClicked}
                        testID={"MenstruationIntroYesClickedButton"}>
                        <ButtonText>Yes</ButtonText>
                    </StyledButtonMens>
                    <StyledButtonMens 
                        onPress={NoClicked}
                        testID={"MenstruationIntroNoClickedButton"}>
                        <ButtonText>No</ButtonText>
                    </StyledButtonMens>
                </ButtonContainer>
                <StyledButtonNotSureContainer>
                    <StyledButtonNotSure 
                        onPress={NotSureClicked}
                        testID={"MenstruationIntroNotSureClickedButton"}>
                        <ButtonTextNotSure>NOT SURE</ButtonTextNotSure>
                    </StyledButtonNotSure>
                </StyledButtonNotSureContainer>
            </InnerContainer>
        </StyledContainer>

    );
}

export default MenstruationIntro;