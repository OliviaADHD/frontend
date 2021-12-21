import React from 'react';
import Constants from 'expo-constants';
import {Colors} from '../general/style';
import styled from 'styled-components';

const StatusBarHeight = Constants.statusBarHeight;
const { lightpurple, white, darkgray } = Colors;

export const StyledContainer = styled.View`
  display: flex;

  flex: 1;
  margin-top: ${StatusBarHeight}px;
  background-color: ${darkgray};
`;

export const InnerContainer = styled.View`

  flex: 1;
  width: 100%;
  align-items: center;
`;

export const StyledFormArea = styled.View`
    width: 90%;
    height: 75%;
`;