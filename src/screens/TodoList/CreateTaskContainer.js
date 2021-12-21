import React from 'react';
import { StatusBar } from "expo-status-bar";
import { Text, Button, Icon, View, Image } from "react-native";

import { 
  StyledContainer,
  InnerContainer,
  // StyledFormArea,

} from "../../css/todoList/style"

import {InputContainer, TextPlaceholder} from "../../css/todoList/inputTaskContainer"

export default function CreateTaskContainer({navigation}) {
  return (

    <StyledContainer>
      <StatusBar style="dark"/>
      <InnerContainer>

        {/* <StyledFormArea> */}
        <InputContainer>
        <TextPlaceholder>
            Create a small task
          </TextPlaceholder>
        
        </InputContainer>
          

        {/* </StyledFormArea> */}

      </InnerContainer>

    </StyledContainer>
  )
}
