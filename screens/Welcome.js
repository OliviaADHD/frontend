import React, {useState, useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator } from "react-native";
import {
    StyledContainer,
    InnerContainer,
    PageLogoWelcome,
    LoadScreenBottomImage,
    ExtraText,
}from './../components/styles';

const Welcome =(props) => {
    const [authLoaded, setAuthLoaded] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setAuthLoaded(true);
      }, 3000);
      return () => clearTimeout(timer); // To prevent leaks
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
                <ExtraText>Helps You Stay Organized</ExtraText>
                <ActivityIndicator size="large" color="#694398"/>
                <LoadScreenBottomImage source={require('./../assets/images/loadScreenBottom.png')} />
            </InnerContainer>
        </StyledContainer>

    );
}


export default Welcome;