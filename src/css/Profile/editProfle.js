import styled from 'styled-components';
import Constants from 'expo-constants';
import {Colors} from '../general/style';

const { lightpurple, white } = Colors;


export const StyledFormArea = styled.View`
    width: 90%;
    height: 70%;
`;


export const StyledTextInput = styled.TextInput`
    background-color: ${white};
    margin: 3% 4% 3% 4%;
    height: 40px;
    font-size: 17px;
    textAlign: left;
    borderBottomWidth: 1px; 
`;

export const StyledTopView = styled.View`
    flex: 0;
    justifyContent: space-between;
    flexDirection: row;
    alignItems: center;
    width: 100%;
    minWidth: 100%;
    minHeight: 15%;
    height: 15%;
    marginLeft: 10%;
    marginTop: 10%;
`;


export const TextView = styled.View`
    flexDirection: row;
    width: 70%;
    height: 50%;
`;

export const StyledText = styled.Text`
    fontWeight: bold;
    paddingLeft: 5%;
    paddingHorizontal: 2%;
    paddingRight: 5%;
    fontSize: 15px;
`;

export const StyledTouchable = styled.TouchableOpacity`
    width: 25%;
    height: 100%;
`;

export const ErrorText = styled.Text`
    color: ${Colors.red};
    font-size: 15px;
    text-align:left;
    margin: 0 0 0 20px;
`;

export const ErrorMessage = styled.TouchableOpacity`
    background-color: ${white};
    align-self: center;
`;

