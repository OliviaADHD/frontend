import React from 'react'; 
import styled from 'styled-components';
import { Text, TouchableOpacity, View } from "react-native";
import {Colors} from '../general/style';

const {white, purple, gray} = Colors;


export const TaskInputed= styled.TextInput`
  font-size: 16px;
  width: 100%;
  height: 25%;
  margin-top: auto;
`

// export const TaskInputed= styled.TextInput`
//   font-size: 16px;
//   width: 100%;
//   height: 25%;
//   margin-top: auto;
//   border-top-left-radius: 25px;
//   border-top-right-radius: 25px;
//   background-color: ${white};
// `

export const InputContainer = styled.View`
  width: 100%;
  height: 25%;
  margin-top: auto;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background-color: ${white};
`

// export const InputContainer = styled.View`
//   width: 100%;
//   height: 25%;
//   margin-top: 75%;
//   border-top-left-radius: 25px;
//   border-top-right-radius: 25px;
//   background-color: ${white};
// `

export const ItemsContainer = styled.View`
  padding: 5% 0% 0% 5%;
  background-color: ${white};
`

export const IconsContainer = styled.View`
  padding: 5% 0% 0% 85%;
`