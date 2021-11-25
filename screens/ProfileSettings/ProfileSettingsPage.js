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

        <View style={{
          flex: 1, 
          justifyContent: 'space-between', 
          paddingTop: 40, 
          flexDirection: 'row', 
          alignItems: 'baseline', 
          flexWrap: "wrap",
          paddingRight: 15
      }}>

        <Image source={require('../../assets/images/foxicon.png')} 
        style={{
          width: 70, 
          height: 70,
          // alignSelf: "center",
          borderRadius: 50, 
          borderWidth: 5, 
          borderColor: Colors.purple,
          }}/>

        {/* <View 
        style={{
          paddingLeft: 15, 
          flexDirection:'row'}}> */}
            
          <Text 
          style={{
            fontWeight: 'bold',
            // alignSelf: "center",
            paddingLeft: 20,
            paddingHorizontal: 10,
            paddingRight: 20
            }}>
            
            <Text style={{fontSize:15}}>{fullName}{"\n"}</Text>
            <Text style={{fontSize:12}}>{email}{"\n"}</Text>

          </Text>

          <Image source={require('../../assets/images/penPurple.png')} 
          style={{
            width: 17, 
            height: 17,
            alignSelf: "center",
            alignItems: "center",
            flexDirection: 'column'
            }}/>
        {/* </View> */}

        

    </View>

      </InnerContainer>

    </StyledContainer>
  )
}
