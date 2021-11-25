import React, {useState} from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

import {
  StyledContainer,
  InnerContainer,
  Colors,
} from '../../components/styles';

import ProfileTopContainer from "../../components/ProfileTopContainer";

export default function ProfileSettingsPage({navigation}) {


  return (
    <StyledContainer> 

      <StatusBar style="dark"/>

      <InnerContainer>

        <ProfileTopContainer/>

      </InnerContainer>

    </StyledContainer>
  )
}

