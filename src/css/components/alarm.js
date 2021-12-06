import styled from 'styled-components';
import {Colors} from '../general/style';

const {white,red} = Colors;

export const ExternalContainer = styled.View`
    justify-content: flex-end;
    align-items: flex-end;
    height: 100%;
    width: 100%;
`;

export const ContainerView = styled.View`
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    width: 10%;
    margin-right: 5%
`;

export const BellImage= styled.ImageBackground`
    height: 80%;
    width: 100%;
`;

export const RoundView= styled.View`
    background-color: ${red};
    height: 40%;
    width: 40%;
    border-radius: 9;
    margin-left: 10%;
    margin-top: -10%;
    justify-content: center;
`;

export const RoundNumber= styled.Text`
    font-size: 10;
    color: ${white};
    text-align: center;
`;