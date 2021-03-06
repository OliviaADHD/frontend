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
  margin: 3%;
  marginLeft: 2.5%;
  marginRight: 2.5%;
`;

export const TasksScheduleView = styled.View`
  height: 12%;
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
  width: 10%;
  height: 10%;
  alignContent: center;
  alignSelf: flex-end;
  marginRight: 10%;
  borderRadius: 20px;
  padding: 1%;
  justifyContent: center;
  marginTop: -15%;
  backgroundColor: ${Colors.purple};
`;

export const WhiteText = styled.Text`
  color: ${Colors.white};
`;

export const ContentView = styled.View`
  height: 70%;
  width: 100%;
  backgroundColor: ${Colors.white};
  borderRadius: 12px;
  borderBottomLeftRadius: 0px;
  borderBottomRightRadius: 0px;
`;

export const TasksView = styled.View`
  height: 84%;
  backgroundColor: ${Colors.white};
  alignItems: center;
`;

export const ScheduleView = styled.View`
  height: 84%;
`;

export const MonthText = styled.Text`
  fontSize: 16px;
  width: 100%;
  textAlign: center;
  fontWeight: bold;
  backgroundColor: ${Colors.white};
`;

export const BlackText = styled.Text`
  color: ${Colors.black};
  font-size: 16px;
  max-width: 80%;
  text-align: justify;
  margin-bottom: 0%;
`;