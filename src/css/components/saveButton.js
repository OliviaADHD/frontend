import styled from 'styled-components';
import { Button } from 'react-native-paper';
import {Colors} from '../general/style';

const {white,purple} = Colors;


export const LongButton = styled(Button)`
    background-color: ${purple};
    border-radius: 10px;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-top: 90px;
`;

export const ButtonText = styled.Text`
    font-size: 12px; 
    color: ${white};
`;