import React from 'react'; 
import styled from 'styled-components';
import { Text, TouchableOpacity, View } from "react-native";
import {Colors} from '../general/style';

const {white, purple, gray} = Colors;


export const TextPlaceholder = styled.Text`
  font-size: 16px; 
  color: ${gray};
  padding: 5% 0 0 10%;
`

export const InputContainer = styled.View`
  width: 100%;
  height: 25%;
  margin-top: auto;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background-color: ${white};
`

export const CloseWindowContainer = styled.View`
  padding: 5% 0% 0% 85%;

`