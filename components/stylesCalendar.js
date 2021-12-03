import styled from 'styled-components';

import {
    Colors
} from './styles';

const { purple} = Colors;

export const NextBtnContainer = styled.View`
    width: 100%;
    height: 6%;
    justify-content: center;
    flex-direction: row;
    margin-left: 10%;  
    margin-right: 10%;
    margin-bottom: 3%; 
    margin-top: 60%; 
`;

export const StyledButtonNext = styled.TouchableOpacity`
    padding-vertical: 1%;
    padding-horizontal: 1%;
    background-color: ${purple};
    justify-content: center;
    border-radius: 5px;
    height: 100%;
    width: 70%;
    margin: 0% 11% 0% 11%;
`;

export const StyledCalendar = styled.View`
    width: 100%;
    height: 8%;
    margin-left: 9%;  
    margin-right: 9%;
    margin-bottom: 30%; 
    margin-top: 20%; 
`;