import React from 'react';
import { StatusBar } from "expo-status-bar";

import {
  StyledContainer,
  InnerContainer,
  MediumExtraText,
  StyledTextInput,
  StyledFormArea,
  StyledButton,
  ButtonText,
  BlockText,
  ExtraText,
}from './../components/styles';

export default function MessageResetPassword({navigation}) {
  return (
   
    <StyledContainer>   
    <StatusBar style="dark"/>
    <InnerContainer>

    <MediumExtraText style={{ fontSize: 20, marginTop : '40%' }}>
      To reset your password, please check your emails and go back to the Login page.
    </MediumExtraText>

    <StyledFormArea>
        <StyledButton onPress = {() => navigation.navigate("Login")}>
          <ButtonText>Back to Login page</ButtonText>
        </StyledButton>
      </StyledFormArea>

    </InnerContainer>
</StyledContainer>


  )
}

