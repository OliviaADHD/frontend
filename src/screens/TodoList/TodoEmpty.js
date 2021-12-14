import React from 'react';
import { Text } from "react-native";

import { 
  StyledContainer,
  InnerContainer,

} from "../../css/todoList/style"

import {NewTaskButton, GroupText, ButtonText, PlusSign} from "../../css/todoList/addTaskButton"

export default function TodoEmpty() {
  return (

    <StyledContainer>

      <InnerContainer>

        <NewTaskButton>

          <GroupText>

          <PlusSign>+{'\n'}</PlusSign>
          <ButtonText>New Task</ButtonText>

          </GroupText>

        </NewTaskButton>

      </InnerContainer>

    </StyledContainer>
  )
}


