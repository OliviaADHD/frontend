import styled from 'styled-components';
import {Colors} from '../general/style';

const { white, purple} = Colors;

export const MediumExtraText = styled.Text`
  text-align: center;
  font-size: 25px;
  padding-top: 10%;
  padding-bottom: 20%;
  margin: 0 10% 0 10%;
  color : #694398;
  margin-top :20%;
  padding-bottom: 10%;
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${white};
    margin: 3% 4% 3% 4%;
    height: 40px;
    font-size: 17px;
    textAlign: left;
    borderBottomWidth: 1px; 
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
    padding-top:5%;
    padding-bottom: 5%;
    margin-top: 10%;
`;

export const ButtonText = styled.Text`
    color: ${white};
    font-size: 20px;
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    top: 10%;
`;

export const BlockText = styled.Text`
    font-size: 15px;
    line-height: 25px;
    text-align: center;
`;
