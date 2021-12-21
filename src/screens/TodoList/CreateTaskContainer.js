import React from 'react';
import { StatusBar } from "expo-status-bar";
import { Text, Button, Icon, View, Image } from "react-native";

import { 
  StyledContainer,
  InnerContainer,
  StyledFormArea,

} from "../../css/todoList/style"

import {textPlaceholder} from "../../css/todoList/inputTaskContainer"

export default function CreateTaskContainer({navigation}) {
  return (

    <StyledContainer>
      <StatusBar style="dark"/>
      <InnerContainer>

        <StyledFormArea>

          <textPlaceholder>Create a small task</textPlaceholder>

        </StyledFormArea>

      </InnerContainer>

    </StyledContainer>
  )
}
