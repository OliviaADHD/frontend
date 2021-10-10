import React, {useState, useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator } from "react-native";
import {
    StyledContainer,
    InnerContainer,
    PageLogoWelcome,
    ExtraText,
    StyledButton,
}from './../components/styles';

const Welcome_Post_Signup = () => {
  return (
    <StyledContainer>
    <StatusBar style="dark"/>
    <InnerContainer>
      {/* Kept PageLogoWelcome styling */}
        <PageLogoWelcome source={require('./../assets/images/mock_woman_waving.png')} />
        <ExtraText>Hi There, We Would Love To Know About You!</ExtraText>
        <ActivityIndicator size="large" color="#694398"/>
        <StyledButton>
          <ButtonText>Proceed</ButtonText>
        </StyledButton>
    </InnerContainer>
</StyledContainer>
  )
}

export default Welcome_Post_Signup
