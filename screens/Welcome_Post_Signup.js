import React, {useState, useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator } from "react-native";
import {
    StyledContainer,
    InnerContainer,
    CenteredImage,
    MediumExtraText,
    StyledFormArea,
    StyledButton,
    ButtonText,
}from './../components/styles';

const Welcome_Post_Signup = () => {
  return (
    
    <StyledContainer>   
    <StatusBar style="dark"/>
    <InnerContainer>

      <CenteredImage source={require('./../assets/images/woman_waving.png')} />
        
      <MediumExtraText>Hi There, We Would Love To Know About You!</MediumExtraText>
      
      <StyledFormArea>
        <StyledButton>
          <ButtonText>Proceed</ButtonText>
        </StyledButton>
      </StyledFormArea>
    
    </InnerContainer>
</StyledContainer>

  )
}

export default Welcome_Post_Signup
