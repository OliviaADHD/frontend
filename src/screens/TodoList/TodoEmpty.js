import React from 'react';
import { Text, Button, Icon, View, Image } from "react-native";

import { 
  StyledContainer,
  InnerContainer,

} from "../../css/todoList/style"

import {NewTaskButton, ButtonText} from "../../css/todoList/addTaskButton"

export default function TodoEmpty({navigation}) {
  return (

    <StyledContainer>

      <InnerContainer>

        <NewTaskButton
          mode='contained'
          icon={() => (
            <Image
              source={require('../../../assets/images/plus.png')}
              style={{width: 25, height: 25, tintColor : '#FFFFFF'}}
              onPress = {() => navigation.navigate("TBD")}
            />
          )}
        >

          <ButtonText> New Task</ButtonText>

        </NewTaskButton>

      </InnerContainer>

    </StyledContainer>
    
  )
}


