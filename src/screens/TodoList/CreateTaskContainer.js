import React from 'react';
import { StatusBar } from "expo-status-bar";
import { Text, Icon, View, Image } from "react-native";
import {Button} from 'react-native-paper'

import { 
  StyledContainer,
  InnerContainer,
  // StyledFormArea,

} from "../../css/todoList/style"

import {InputContainer, TextPlaceholder} from "../../css/todoList/inputTaskContainer"

import {CloseWindow} from './CloseWindow'

export default function CreateTaskContainer({navigation}) {
  return (

    <StyledContainer>
      <StatusBar style="dark"/>
      <InnerContainer>

        <InputContainer>

          <Image
          source={require('../../../assets/images/window-close.png')}
          style={{width: 25, height: 25, tintColor : '#000000'}}
        />

        {/* <CloseWindow /> */}

      
          <TextPlaceholder>
              Create a small task
          </TextPlaceholder>


        </InputContainer>

      </InnerContainer>

    </StyledContainer>
  )
}
