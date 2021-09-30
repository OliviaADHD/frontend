import React, {useState, useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import { Alert, Button } from "react-native";
import {
    StyledContainer,
    InnerContainer,
    PageLogoWelcome,
    LoadScreenBottomImage,
    ExtraText,
    TextLink,
}from './../components/styles';

const Welcome =(props) => {
    const [authLoaded, setAuthLoaded] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setAuthLoaded(true);
      }, 5000);
    }, []);
  
    useEffect(() => {
      if (authLoaded) {
        props.navigation.replace('Login');
      }
    }, [authLoaded, props.navigation]);
    return (
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageLogoWelcome source={require('./../assets/images/logo.png')} />
                <ExtraText>Keeps You Stay Organised</ExtraText>
                <LoadScreenBottomImage source={require('./../assets/images/loadScreenBottom.png')} />
            </InnerContainer>
        </StyledContainer>

    );
}


export default Welcome;