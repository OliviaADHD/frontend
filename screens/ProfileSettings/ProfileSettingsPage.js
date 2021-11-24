import React, {useState} from "react";
import { View, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

import {
  StyledContainer,
  InnerContainer,
  MediumExtraText,
  StyledFormArea,
  StyledButton,
  ButtonText,
}from '../../components/styles';

export default function ProfileSettingsPage({navigation, route}) {
  // const {fullName, email, id} = route.params;
  const [profileData, setProfileData] = useState(fullName="Samira Bahram", email="samirabahrampour@gmail.com")
  return (
    <StyledContainer> 

      <StatusBar style="dark"/>

      <InnerContainer>

        <View>

        <Image source={require('../../assets/images/foxicon.png')} style={{width: 70, height: 70,}}/>

        <View style={{flex: 1, paddingLeft: '25%', paddingTop: '15%'}}>
          <Text style={{fontSize: 15}}>
            {fullName}{"\n"}
            {email}{"\n"}
          </Text>
        </View>

    </View>

      </InnerContainer>

    </StyledContainer>
  )
}

