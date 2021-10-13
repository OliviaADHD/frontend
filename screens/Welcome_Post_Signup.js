import React, {useState, useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator } from "react-native";
import {
    StyledContainer,
    InnerContainer,
    PageLogoWelcome,
    StyledFormArea,
    ExtraText,
    StyledButton,
    ButtonText,
}from './../components/styles';

const Welcome_Post_Signup = () => {
  return (
    <StyledContainer>
    <StatusBar style="dark"/>
    <InnerContainer>
      {/* Kept PageLogoWelcome styling */}
        <PageLogoWelcome source={require('./../assets/images/woman_waving.png')} />
        <StyledFormArea>
        <ExtraText>Hi There, We Would Love To Know About You!</ExtraText>
        <StyledButton>
          <ButtonText>Proceed</ButtonText>
        </StyledButton>
        </StyledFormArea>
    </InnerContainer>
</StyledContainer>




  )
}

export default Welcome_Post_Signup
