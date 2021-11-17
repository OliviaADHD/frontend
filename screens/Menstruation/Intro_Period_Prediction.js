import React from 'react';
import { StatusBar } from "expo-status-bar";
import {
    StyledContainer,
    InnerContainer,
    MediumExtraText,
    StyledFormArea,
    StyledButton,
    ButtonText,
}from '../../components/styles';

export default function Intro_Period_Prediction() {
  return (

    <StyledContainer>   
    <StatusBar style="dark"/>
    <InnerContainer>

      <MediumExtraText style={{ color : '#694398', marginTop : '50%' }}>Please Enter Your Period For Your Next Prediction</MediumExtraText>
      
      <StyledFormArea>
        <StyledButton onPress = {() => navigation.navigate("TBC_Edit_Period_Screen")}>
          <ButtonText>Start Period</ButtonText>
        </StyledButton>
      </StyledFormArea>
    
    </InnerContainer>
</StyledContainer>
  )
}
