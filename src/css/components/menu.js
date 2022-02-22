import styled from 'styled-components';
import {Colors} from '../general/style';

const {white} = Colors;

export const GeneralContainer = styled.View`
    justify-content: space-between;
    flex-direction: row;
    height: 7%;
    background-color: ${white};
`;

export const IconContainer = styled.View`
    justify-content: space-between;
    flex-direction: column; 
    align-items: center;
    width: 19%;
`;

export const NewTouchOpacity = styled.TouchableOpacity`
    justify-content: space-between;
    padding-top: 10%;
`;

export const GeneralContainerTut = styled.View`
    justify-content: space-between;
    flex-direction: row;
    height: 7%;
`;