import React from 'react'; 
import styled from 'styled-components';
import { Text } from "react-native";
import { Button } from 'react-native-paper';
import {Colors} from '../general/style';
import { 
  StyledContainer,
  InnerContainer,

} from "./style"

const {white, purple} = Colors;

export const NewTaskButton = styled(Button)`
background-color: ${purple};
`

export const ButtonText = styled.Text`
    font-size: 12; 
    color: ${white};
`;

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
