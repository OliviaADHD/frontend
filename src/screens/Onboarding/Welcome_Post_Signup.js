import React, {useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyledContainer,
    InnerContainer,
    CenteredImage,
    MediumExtraText,
    StyledFormArea,
    StyledButton,
    ButtonText,
}from '../../css/styles';
import {useSelector } from "react-redux";
import {registerForPushNotificationsAsync, sendPushNotification} from '../../helpers/notifications';

const Welcome_Post_Signup = ({navigation}) => {
  const userData = useSelector(state => state.userName);

  useEffect(() => {
    (() => registerForPushNotificationsAsync())();
  },[]);

  //example
  const sendNotification = () => {
    console.warn("Here we go")
    console.warn(userData)
    console.warn(userData.token);
    sendPushNotification(userData.token);
  }
  
  return (
    
    <StyledContainer>   
    <StatusBar style="dark"/>
    <InnerContainer>

      <CenteredImage source={require('../../../assets/images/woman_waving.png')} />
        
      <MediumExtraText>Hi {userData.Name}, We Would Love To Know About You!</MediumExtraText>
      <StyledFormArea>
      <StyledButton onPress = {sendNotification }>
        <ButtonText>Test Push Notification</ButtonText>
      </StyledButton>

        <StyledButton onPress = {() => navigation.replace("Questionnaire")}>
          <ButtonText>Proceed</ButtonText>
        </StyledButton>


    </StyledFormArea>
    
    </InnerContainer>
</StyledContainer>

  )
}

export default Welcome_Post_Signup
