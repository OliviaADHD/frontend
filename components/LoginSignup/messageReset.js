import styled from 'styled-components';
import {Colors} from '../general/style';

const { white, purple, disabledPurple, black, gray, darkgray, red, lightpurple} = Colors;

export const MediumExtraText = styled.Text`
  text-align: center;
  font-size: 25px;
  padding-top: 10%;
  padding-bottom: 20%;
  margin: 0 10% 0 10%;
  font-size: 20px;
  margin-top : 40%;
`;

export const StyledFormArea = styled.View`
    width: 90%;
    height: 75%;
`;

export const StyledButton = styled.TouchableOpacity`
    padding-vertical: 1%;
    padding-horizontal: 1%;
    background-color: ${purple};
    justify-content: center;
    border-radius: 5px;
    height: 8%;
    margin: 0% 11% 0% 11%;
`;

export const ButtonText = styled.Text`
    color: ${white};
    font-size: 20px;
    text-align: center;
    font-weight: 500;
    font-size: 20px;
`;