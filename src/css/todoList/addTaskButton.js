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


export const NewTaskButton = styled(Button)`
width: 30%;
padding: 10px;
background-color: ${purple};
`

// export const NewTaskButton = styled.TouchableOpacity`
// width: 30%;
// padding: 10px;
// background-color: ${purple};
// `

// export const GroupText = styled.View`

// display: flex;
// flex-direction: row;
// flex-wrap: wrap;
// justify-content: space-between;
// align-items: center;
// `

export const GroupText = styled.Text`
color: ${white};
`

export const ButtonText = styled.Text`
  font-size: 12px; 

`

export const PlusSign = styled.Text`
  font-size: 20px;

`

// export default function addTaskButton() {
//   return (
//     <StyledContainer>
//       <InnerContainer>

//         <Text>

//           New Task

//         </Text>

//       </InnerContainer>


//     </StyledContainer>
//   )
// }
