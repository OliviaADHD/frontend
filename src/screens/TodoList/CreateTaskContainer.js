import React from 'react';
import { StatusBar } from "expo-status-bar";
import { Text, Icon, View, Button, Image } from "react-native";
// import {Button} from 'react-native-paper'

import { 
  StyledContainer,
  InnerContainer,
  // StyledFormArea,

} from "../../css/todoList/style"

import {InputContainer, TextPlaceholder} from "../../css/todoList/inputTaskContainer"

import CloseWindow from './CloseWindow'

export default function CreateTaskContainer({navigation}) {
  return (

    <StyledContainer>
      <StatusBar style="dark"/>
      <InnerContainer>

        <InputContainer>

          <CloseWindow />
      
          <TextPlaceholder>
              Create a small task
          </TextPlaceholder>


        </InputContainer>

      </InnerContainer>

    </StyledContainer>
  )
}
