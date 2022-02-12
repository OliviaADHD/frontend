import styled from 'styled-components';

export const InnerContainerRemake = styled.View`
  flex: 1;
  width: 100%;
  height: 60%;
  align-items: center;
`;

export const TasksScheduleTouch = styled.TouchableOpacity`
  height: 60%;
  alignContent: center;
  alignItems: center;
  justifyContent: center;
  margin: 5%;
  marginLeft: 2.5%;
  marginRight: 2.5%;
`;

export const TrophyImage = styled.Image`
  resizeMode: contain;
  height: 80%;
  width: 30%;
  margin: 5%;
  marginRight: 9%
`;

export const TextAndTrophyView = styled.View`
  height: 70%;
  width: 100%;
  flexDirection: row;
  justifyContent: space-between;  
`;

export const WelcomeTextView = styled.View`
  height: 80%;
  width: 25%;
  margin: 3%;
  flexDirection: column;
  alignItems: flex-start;
  justifyContent: flex-end;
`;