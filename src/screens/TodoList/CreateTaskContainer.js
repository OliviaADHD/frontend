import React from 'react';
import { StatusBar } from "expo-status-bar";
import { Text, Icon, View, Button, Image } from "react-native";
// import {Button} from 'react-native-paper'

import { 
  StyledContainer,
  InnerContainer,
  // StyledFormArea,

} from "../../css/todoList/style"

import {InputContainer, TextPlaceholder, CloseWindowContainer} from "../../css/todoList/inputTaskContainer"

import CloseWindow from './CloseWindow'

export default function CreateTaskContainer({navigation}) {
  return (

    <StyledContainer>
      <StatusBar style="dark"/>
      <InnerContainer>

        <InputContainer>

        <CloseWindowContainer>

        <CloseWindow 
            // activeOpacity={0.5}
            // onPress = {() => navigation.navigate('TodoEmpty')}          
          />

        </CloseWindowContainer>

          <TextPlaceholder>
              Create a small task
          </TextPlaceholder>


        </InputContainer>

      </InnerContainer>

    </StyledContainer>
  )
}