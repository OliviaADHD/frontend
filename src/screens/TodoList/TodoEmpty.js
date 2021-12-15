import React from 'react';
import { Text, Button, Icon, View } from "react-native";
import { Image } from 'react-native-paper';

import { 
  StyledContainer,
  InnerContainer,

} from "../../css/todoList/style"

import {NewTaskButton, GroupText, ButtonText, PlusSign} from "../../css/todoList/addTaskButton"

export default function TodoEmpty({navigation}) {
  return (

    <StyledContainer>

      <InnerContainer>

        {/* <NewTaskButton
          icon={({ color }) => (
            <Image
          source={require('../../../assets/images/plus.png')}
          style={{tintColor : color}}
          onPress = {() => navigation.navigate("TBD")}
          />
          )}
        > */}

<NewTaskButton
          // icon={{require('../../../assets/images/plus.png')}}
          onPress = {() => navigation.navigate("TBD")}
        >

          <View
          source={require('../../../assets/images/plus.png')}
          color='#FFFFFF'
          />
          <GroupText>

          {/* <PlusSign>+{'\n'}</PlusSign> */}
          <ButtonText>New Task</ButtonText>

          </GroupText>

        </NewTaskButton>

      </InnerContainer>

    </StyledContainer>
  )
}


