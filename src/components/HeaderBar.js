import React, {useState, useEffect} from "react";

import {Text} from 'react-native';

import { useSelector } from "react-redux";
import {Colors} from "../css/general/style";
import { TrophyImage,
    TextAndTrophyView, WelcomeTextView, CalendarImage,
    CurrentDateTextView, DateAndCalenderImageView, HeaderView } from "../css/Dashboard/todolist";

export const HeaderBar = () => {

    const userData = useSelector(state => state.userName);
    const monthNames =  ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    var today = new Date();
    var day = String(today.getDate());    
    var year = today.getFullYear();
    const [month, setMonth] = useState(today.getMonth());


    return(
        <HeaderView>
        <DateAndCalenderImageView>
           <CurrentDateTextView>
              <Text style={{fontSize: 11, marginTop: "11%"}}> {monthNames[month]} {day}, {year}</Text>
              <Text style={{fontWeight: "bold", marginTop: "4%"}}> Today </Text>
           </CurrentDateTextView>
           <CalendarImage source={require('../../assets/images/calendar.png')}/>
        </DateAndCalenderImageView>
        <TextAndTrophyView>
           <WelcomeTextView>
              <Text style={{fontSize: 11}}>Hi, {userData.Name}!</Text>
              <Text style={{fontSize: 16}}>Let's get things 
                    <Text style={{color: Colors.purple}}> done</Text>
                    !
              </Text>
           </WelcomeTextView>
           <TrophyImage source={require('../../assets/images/trophy.png')}
              />
        </TextAndTrophyView>
     </HeaderView>
    )

}