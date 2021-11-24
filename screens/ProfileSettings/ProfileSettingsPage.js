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

export default function ProfileSettingsPage({navigation}) {
  return (
    <StyledContainer> 

      <StatusBar style="dark"/>

      <InnerContainer>

        <MediumExtraText> Hello</MediumExtraText>

      </InnerContainer>

    </StyledContainer>
  )
}

