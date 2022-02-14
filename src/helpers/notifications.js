import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import { Text, View, Button, Platform } from 'react-native';
import {PUSH_NOTIFICATIONS} from "../redux/actions/types";
import axios from "axios";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export const registerForPushNotificationsAsync = () => async dispatch => {
    let token;
    console.log(Constants.isDevice);
    if (Constants.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }
    console.log('token?? ', token);
    if(token){
        console.warn("inside");
        dispatch({type: PUSH_NOTIFICATIONS, payload: token});
        console.log(token);
    }
    
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }

    return token;
  
  }


  export const sendPushNotification = (token) => async dispatch => {
    const message = {
      to: token,
      sound: 'default',
      title: 'test, test!',
      body: 'And here is the body!',
      data: { 
        someData: 'goes here' ,
        notificationReceived: 'data for notification received',
        onClicked: 'data or link to onClicked'
            },
    };
    return axios.post('https://exp.host/--/api/v2/push/send', 
         message, {
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
    }, {timeout: 2})
    .then(res => {
      console.log('success, yes or no??');
      //console.log(res); 
      return true;})
    .catch(err => {console.log(err); return false;})
  }