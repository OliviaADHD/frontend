import React from 'react';
import { Text } from "react-native";

import { 
  StyledContainer,
  InnerContainer,

} from "../../css/todoList/style"

import {NewTaskButton, ButtonText} from "../../css/todoList/addTaskButton"

export default function TodoEmpty() {
  return (
    <StyledContainer>
      <InnerContainer>
        <NewTaskButton>
          <ButtonText>

            New Task

          </ButtonText>
        </NewTaskButton>

      </InnerContainer>


    </StyledContainer>
  )
}


