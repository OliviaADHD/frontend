import styled from 'styled-components';
import Constants from 'expo-constants';

import {
    Colors,
    StyledTitle,
    ButtonText,
} from './styles';

const { white, purple, black, gray, red,disabledPurple} = Colors;

export const ButtonContainer = styled.View`
    width: 100%;
    height: 8%;
    justify-content: space-between;
    flex-direction: row;
    margin-left: 22%;  
    margin-right: 22%;
    margin-bottom: 5%; 
    margin-top: 10%; 
`;


export const StyledButtonMens = styled.TouchableOpacity`
    padding-vertical: 1%;
    padding-horizontal: 1%;
    background-color: ${purple};
    justify-content: center;
    border-radius: 5px;
    height: 100%;
    width: 30%;
    margin: 0% 11% 0% 11%;
`;

export const StyledTitleCentered = styled(StyledTitle)`
  textAlign: center;
  margin-top: 15%;
  margin-bottom: 2%;
`;

export const StyledButtonNotSure = styled.TouchableOpacity`
    padding-vertical: 1%;
    padding-horizontal: 1%;
    background-color: ${white};
    justify-content: center;
    border-radius: 5px;
    height: 100%;
    width: 30%;
    margin: 0% 11% 40% 11%;
`;

export const ButtonTextNotSure = styled(ButtonText)`
    color: ${purple};
`;
export const StyledButtonNotSureContainer = styled.View`
    width: 100%;
    height: 8%;
    flex-direction: row;
    justifyContent: center;
    margin-left: 22%;  
    margin-right: 22%;
    margin-bottom: 50%; 
    margin-top: 10%; 
`;