import React, {useEffect} from 'react';
import { StatusBar } from "expo-status-bar";
import { BackHandler } from 'react-native';
import {
    StyledContainer,
    InnerContainer,
    MediumExtraText,
    StyledFormArea,
    StyledButton,
    ButtonText,
}from '../../css/styles';

export default function Intro_Period_Prediction({pageNav, setPage}) {
  const backAction = () => {
    setPage(pageNav.MonthlyCalendar);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);




  return (

    <InnerContainer>

      <MediumExtraText style={{ color : '#694398', marginTop : '50%' }}>Please Enter Your Period For Your Next Prediction</MediumExtraText>
      
      <StyledFormArea>
        <StyledButton onPress = {() => setPage(pageNav.EditPeriod)}>
          <ButtonText>Start Period</ButtonText>
        </StyledButton>
      </StyledFormArea>
    
    </InnerContainer>
  )
}
