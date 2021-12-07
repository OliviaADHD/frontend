import styled from 'styled-components';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
    white: "#ffffff",
    purple: "#694398",
    disabledPurple:"#aa91c9",
    black: "#000000",
    gray: "#d3d3d3",
    darkgray: "#979797",
    red: "#FF0000",
    lightpurple: "#C7A3D2"
};

const { white, purple, disabledPurple, black, gray, darkgray, red, lightpurple} = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  margin-top: ${StatusBarHeight}px;
  background-color: ${white};
`;


export const AbsoluteContainer = styled.View`
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const Loading = styled.View`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0.5;
    background-color: black;
    justify-content: center;
    align-items: center;
`;