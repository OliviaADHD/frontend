import React, {useState} from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

import {
  StyledContainer,
  InnerContainer,
  Colors,
} from '../../components/styles';

import ProfileTopContainer from "../../components/ProfileTopContainer";

export default function ProfileSettingsPage({navigation, route}) {
  
  // const {fullName, email, id} = route.params;
  // const [profileData, setProfileData] = useState(fullName="Samira Bahram", email="samirabahrampour@gmail.com")

  return (
    <StyledContainer> 

      <StatusBar style="dark"/>

      <InnerContainer>

        <ProfileTopContainer/>

      </InnerContainer>

    </StyledContainer>
  )
}

