import styled from 'styled-components';
import { Button } from 'react-native-paper';
import {Colors} from '../general/style';

const {white,purple} = Colors;


export const LongButton = styled(Button)`
    background-color: ${purple};
    border-radius: 10px;
    padding-top: 2%;
    padding-bottom: 2%;
    margin-top: 23%;
`;

export const ButtonText = styled.Text`
    font-size: 12px; 
    color: ${white};
`;