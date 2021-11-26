import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

import {
  StyledContainer,
  InnerContainer,
  Colors,
  ProfileListText,
  ProfileListTouch,
  StyledFormArea
} from '../../components/styles';

// import ProfileTopContainer from "../../components/ProfileTopContainer";

import CprofileTopContainer from "../../components/CprofileTopContainer";

import Profile from "../Dashboard/Profile";

export default function ProfileSettingsPage({navigation}) {

  return (
    <StyledContainer> 

      <StatusBar style="dark"/>

      <InnerContainer>
        {/* <ProfileTopContainer/> */}
        <CprofileTopContainer/>
        <StyledFormArea>
        
          <View
            style={{
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderTopColor: Colors.lightpurple,
              borderBottomColor: Colors.lightpurple
            }}
          >
            <ProfileListTouch
              activeOpacity={0.5}
              onPress = {() => navigation.navigate('ToBeDefined')}
            >            
            <ProfileListText> Preferences </ProfileListText>          
            </ProfileListTouch>
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: Colors.lightpurple
            }}
          >
            <ProfileListTouch 
              activeOpacity={0.5}
              onPress = {() => navigation.navigate('ToBeDefined')}
            >
              <ProfileListText> Setting and Privacy </ProfileListText>            
            </ProfileListTouch>
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: Colors.lightpurple
            }}
          >
            <ProfileListTouch
              activeOpacity={0.5}
              onPress = {() => navigation.navigate('ToBeDefined')}
            >
              <ProfileListText> Help </ProfileListText>            
            </ProfileListTouch>
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: Colors.lightpurple
            }}
            >
            <ProfileListTouch
              activeOpacity={0.5}
              onPress = {() => navigation.navigate('Login')}
            >            
              <ProfileListText> Sign Out </ProfileListText>         
            </ProfileListTouch>
          </View>

        </StyledFormArea>
        {/* <Profile/> */}
      </InnerContainer>
    </StyledContainer>

  )
}

