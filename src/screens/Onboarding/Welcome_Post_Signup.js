import React, {useEffect, useRef, useState} from "react";
import { StatusBar } from "expo-status-bar";
import * as Notifications from 'expo-notifications';
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
import {registerForPushNotificationsAsync,
  sendPushNotification} from '../../helpers/notifications';
import { useDispatch} from "react-redux";

const Welcome_Post_Signup = ({navigation}) => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.userName);

  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  

  useEffect(() => {
    console.log('!');
    const token = dispatch(registerForPushNotificationsAsync());
    console.log(token);
    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log('notification received');
      console.log(notification.request.content.data.notificationReceived);
      //console.log(notification);
      //setNotification(notification);
    });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log('clicked on notification:');
      console.log(response.notification.request.content.data.onClicked);
      //console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };

  },[]);

  //example
  const sendNotification = () => {
    //console.warn("Here we go")
    //console.warn(userData)
    //console.warn(userData.token);
    dispatch(sendPushNotification(userData.token));
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
