import styled from 'styled-components';
import {Colors} from "../general/style";

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

export const TasksScheduleView = styled.View`
  height: 16%;
  flexDirection: row;
  alignContent: center;
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
  margin-left: 5%;
  flexDirection: column;
  alignItems: flex-start;
  justifyContent: flex-end;
`;

export const CalendarImage = styled.Image`
  resizeMode: contain;
  height: 50%;
  width: 20%;
  marginTop: 5%;
`;

export const CurrentDateTextView = styled.View`
  height: 100%;
  width: 30%;
  marginLeft: 5%;
  flexDirection: column;
`;

export const DateAndCalenderImageView = styled.View`
  height: 30%;
  width: 100%;
  flexDirection: row;
  justifyContent: space-between;
`;

export const HeaderView = styled.View`
  height: 30%;
  width: 100%;
  backgroundColor: ${Colors.gray};
`;

export const NewTaskOrEventButton = styled.TouchableOpacity`
  width: 30%;
  height: 10%;
  alignContent: center;
  alignSelf: flex-end;
  marginRight: 10%;
  borderRadius: 9px;
  padding: 1%;
  justifyContent: center;
  marginTop: -20%;
  backgroundColor: ${Colors.purple};
`;

export const WhiteText = styled.Text`
  color: ${Colors.white};
`;