import React, {useState} from "react";
import { View, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

import {
  StyledContainer,
  InnerContainer,
  Colors,
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

        <View style={{flex: 1, justifyContent: 'space-between', padding: 8, paddingTop: 40, flexDirection:'row', alignItems: 'baseline'
      }}>

        <Image source={require('../../assets/images/foxicon.png')} 
        style={{
          width: 70, 
          height: 70, 
          borderRadius: 50, borderWidth: 5, 
          borderColor: Colors.purple}}/>

        <View 
        style={{
          paddingLeft: 15, 
          flexDirection:'row'}}>
            
          <Text 
          style={{
            fontSize: 15, 
            fontWeight: 'bold'}}>
            
            {fullName}{"\n"}
            {email}{"\n"}

          </Text>

          <Image source={require('../../assets/images/penPurple.png')} 
          style={{
            width: 15, 
            height: 15}}/>
        </View>

        

    </View>

      </InnerContainer>

    </StyledContainer>
  )
}

