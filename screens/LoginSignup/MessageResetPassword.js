import React from 'react';
import { StatusBar } from "expo-status-bar";

import {
  MediumExtraText,
  StyledFormArea,
  StyledButton,
  ButtonText,
}from '../../components/LoginSignup/messageReset';

import {
  StyledContainer,
  InnerContainer
} from '../../components/general/style';

export default function MessageResetPassword({navigation}) {
  return (
   
    <StyledContainer>   
      <StatusBar style="dark"/>

      <InnerContainer>

        <MediumExtraText>
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

