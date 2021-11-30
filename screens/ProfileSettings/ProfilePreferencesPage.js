import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
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

          <Text
            fields={{
              mode: {
                label: 'Dark mode',

              }
            }}
          >

          </Text>

        </StyledFormArea>
        {/* <Profile/> */}
      </InnerContainer>
    </StyledContainer>

  )
}

