import React from 'react'; 
import styled from 'styled-components';
import { Text, TouchableOpacity, View } from "react-native";
import { Button } from 'react-native-paper';
import {Colors} from '../general/style';
import { 
  StyledContainer,
  InnerContainer,

} from "./style"

const {white, purple} = Colors;

export const ButtonContainer = styled.View`
margin-top: 90%;
padding-top: 50%;
margin-left: 35%;
`

export const NewTaskButton = styled(Button)`
width: 100%;
padding: 10px;
background-color: ${purple};
`

export const ButtonText = styled.Text`
  font-size: 12px; 
  color: ${white};
`

