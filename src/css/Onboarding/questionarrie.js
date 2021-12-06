import styled from 'styled-components';
import {Colors} from '../general/style';
import BouncyCheckbox from 'react-native-bouncy-checkbox';


const { white, purple, red} = Colors;

export const ButtonText = styled.Text`
    color: ${white};
    font-size: 20px;
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    top: 10%;
`;

export const StyledTitle = styled.Text`
  color: ${purple};
  font-size: 20px;
  max-width: 80%;
  text-align: justify;
  margin-bottom: 7%;
`;

export const CheckboxContainer = styled.View`
  flex-direction: column;
  margin-left: 10%;
  height: 45%;
`;

export const StyledCheckbox = styled(BouncyCheckbox)`
  margin-vertical: 2%;
  max-width: 90%;
  padding-right: 5%;
`;

export const StyledDotPagination = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 10%;
  margin-top: 12%;
`;

export const StyledDot = styled.View`
  border: ${(props) => (props.filled ? 'none' : '1px solid purple')};
  background-color: ${(props) => (props.filled ? purple : white)};
  height: 14px;
  border-radius: 50px;
  width: 14px;
  margin-horizontal: 8%;
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

export const ErrorMessage = styled.TouchableOpacity`
    background-color: ${white};
`;

export const ErrorText = styled.Text`
    color: ${red};
    font-size: 15px;
    text-align:left;
    margin: 0 0 0 20px;
`;