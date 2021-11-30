import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
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

// import Profile from "../Dashboard/Profile";

export default function ProfilePreferencesPage({navigation}) {

  return (
    <StyledContainer> 

      <StatusBar style="dark"/>

      <InnerContainer>
        {/* <ProfileTopContainer/> */}
        <StyledFormArea>
        
          <View
            style={{
              // borderTopWidth: 1,
              borderBottomWidth: 1,
              // borderTopColor: Colors.lightpurple,
              borderBottomColor: Colors.lightpurple, 
              width: 120
            }}
          >
                      
            <Text
            style={{
              paddingLeft: 20
            }}
            > Preferences </Text>          

          </View>

          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: Colors.lightpurple
            }}
          >
            <TouchableOpacity 
              activeOpacity={0.5}
              onPress = {() => navigation.navigate('Login')}
            >
              <Text> Language </Text>            
            </TouchableOpacity>
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: Colors.lightpurple
            }}
          >
            <TouchableOpacity
              activeOpacity={0.5}
              onPress = {() => navigation.navigate('Login')}
            >
              <Text> Dark mode </Text>            
            </TouchableOpacity>
          </View>

        </StyledFormArea>
        {/* <Profile/> */}
      </InnerContainer>
    </StyledContainer>

  )
}

