import React from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyledContainer,
    InnerContainer,
    CenteredImage,
    MediumExtraText,
    StyledFormArea,
    StyledButton,
    ButtonText,
}from './../components/styles';

const Welcome_Post_Signup = ({navigation}) => {
  return (
    
    <StyledContainer>   
    <StatusBar style="dark"/>
    <InnerContainer>

      <CenteredImage source={require('./../assets/images/woman_waving.png')} />
        
      <MediumExtraText>Hi There, We Would Love To Know About You!</MediumExtraText>
      
      <StyledFormArea>
        <StyledButton onPress = {() => navigation.navigate("Questionnaire")}>
          <ButtonText>Proceed</ButtonText>
        </StyledButton>
      </StyledFormArea>
    
    </InnerContainer>
</StyledContainer>

  )
}

export default Welcome_Post_Signup
