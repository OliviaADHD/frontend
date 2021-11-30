import styled from 'styled-components';

import {
    Colors
} from './styles';

const { purple, white} = Colors;

export const Background = styled.ImageBackground`
    flex: 1;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

export const DashboardTutorialTop = styled.View`
    height: 20%; 
    width: 90%;
    flex-direction: column;
    align-items: center;
`;

export const DashboardTitle= styled.Text`
    align-self: flex-start;
    width: 100%;
    text-align: center;
    font-size: 20px;
    max-width: 100%;
`;

export const RoundedPurpleBox = styled.View`
    justify-content: center;
    background-color: ${purple};
    margin-top: 5%;
    width: 90%;
    height: 40%;
    border-radius: 9px;
`;

export const DashboardTutorialBottomBar = styled.View`
    height: 15%; 
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center
`;

export const ButtonPressable = styled.TouchableOpacity`

`;

export const ButtonTextBottomDashboard = styled.Text`
    font-size: 17px;
    textDecoration-line: underline;
    justify-content: center;
    align-items: center;
    padding: 5%;
`;




