import React, { useState, Text } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyledContainer,
  InnerContainer,
  MediumExtraText,
  StyledFormArea,
  StyledButton,
  ButtonText,
  BlockText,
}from './../components/styles';


export default function ResetPassword({navigation}) {

  return (
    <StyledContainer>   
    <StatusBar style="dark"/>
    <InnerContainer>
    

      <MediumExtraText style={{ color : '#694398', marginTop : '20%', paddingBottom: '10%' }}>Forgot your password?</MediumExtraText>
      
      <BlockText style={{textAlign: 'center'}}>
      Enter Your Registered Email Below To Receive Password Reset Instruction{"\n"}{"\n"}
      </BlockText>
      
      <StyledFormArea>
        <StyledButton onPress = {() => navigation.navigate("TBC")}>
          <ButtonText>Submit</ButtonText>
        </StyledButton>
      </StyledFormArea>
    
    </InnerContainer>
</StyledContainer>
  );
}
