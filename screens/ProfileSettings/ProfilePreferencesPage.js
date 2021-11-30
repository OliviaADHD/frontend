import React, {useState} from "react";
import { View, Text, Button, TouchableOpacity, Switch } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Formik, Field, Form } from 'formik';

import {
  StyledContainer,
  InnerContainer,
  Colors,
  // ProfileListText,
  // ProfileListTouch,
  StyledFormArea
} from '../../components/styles';

// import ProfileTopContainer from "../../components/ProfileTopContainer";

// import Profile from "../Dashboard/Profile";

export default function ProfilePreferencesPage({navigation}) {

  // const [preferences, setPreferences] = useState({
  //   language: '',
  //   mode: false
  // })

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <StyledContainer> 

      <StatusBar style="dark"/>

      <InnerContainer>
        {/* <ProfileTopContainer/> */}
        <StyledFormArea>
        
          <View
            style={{
              // borderTopWidth: 1,
              borderBottomWidth: 2,
              // borderTopColor: Colors.lightpurple,
              borderBottomColor: Colors.lightpurple, 
              width: 120,
              alignItems: 'center'
            }}
          >
                      
            <Text> Preferences </Text>          

          </View>
          
          <View
            style={{
              borderColor: "#000000",
              borderWidth: 2,
              // width: 150,
              display: 'flex',
              // flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              // alignContent: 'flex-start',
              // justifyContent: 'space-between',
              // alignItems: 'stretch',
              justifyContent: 'space-between',
              alignItems: 'center',
              // paddingVertical: 20,
              // position: 'absolute'
            }}
          >
            <Text
              style={{
                // alignItems: 'stretch',
                // paddingBottom: 100,
                // textAlignVertical: 'center'
                // alignItems: 'baseline'
              }}
            >Dark Mode</Text>
          <Switch
        trackColor={{ false: Colors.darkgray, true: Colors.purple}}
        thumbColor={isEnabled ? Colors.white : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        // style={{alignItems: 'center'}}
      />
          
          </View> 
        </StyledFormArea>
        {/* <Profile/> */}
      </InnerContainer>
    </StyledContainer>

  )
}

