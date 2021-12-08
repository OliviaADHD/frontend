import styled from 'styled-components';
import { Button } from 'react-native-paper';
import {Colors} from '../general/style';

const {white,purple} = Colors;


export const LongButton = styled(Button)`
    background-color: ${purple};
    border-radius: 10;
    padding-top: 8;
    padding-bottom: 8;
    margin-top: 90;
`;

export const ButtonText = styled.Text`
    font-size: 12; 
    color: ${white};
`;