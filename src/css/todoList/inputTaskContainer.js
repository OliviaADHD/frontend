import React from 'react'; 
import styled from 'styled-components';
import { Text, TouchableOpacity, View } from "react-native";
import {Colors} from '../general/style';

const {white, purple, gray} = Colors;


export const TextPlaceholder = styled.Text`
  font-size: 16px; 
  color: ${gray};
`

export const InputContainer = styled.View`
  background-color: ${white};
  width: 100%;
  height: 25%;
  border: ${purple};
`