import React from "react";
import {Text, View, TouchableOpacity, Image} from 'react-native';

import {Colors} from '../css/general/style';


export const EventDetails = ({setDetailsOpen, todaysEvents, currentEventId, menuPosition, today}) => {
    const formatTimeString = (someDate) => {
        let hour = someDate.getHours();
        const ending = (hour > 12)? 'PM': 'AM';
        hour = (hour>12) ? hour -12 : hour;
        const minutes = someDate.getMinutes();
        let returnString = (hour > 9)? hour: '0' + hour;
        returnString += ':';
        returnString += (minutes > 9)? minutes: '0' + minutes;
        returnString += ' '
        returnString += ending;
        return returnString;
    }
    return (
        <View style={{backgroundColor: Colors.white,
            height: "40%", width:"70%",
            borderRadius: 9,
            alignSelf: "baseline",
            zIndex: 150,
            padding: "0%",
            margin: "0%",
            top: (((menuPosition > 60)? 50:menuPosition)-10).toString()+"%",
            alignItems: "flex-start",
            left: "20%",
            position: "absolute",
            flexDirection: "column"
            }}>
        <View style={{height: "10%", paddingTop: "2%", width: "100%", alignItems: "flex-end"}}>
            <TouchableOpacity 
            onPress={()=>setDetailsOpen(false)}
            style={{width: "15%", alignItems: "center"}}>
                <Text style={{fontSize: 18}}>X</Text>
            </TouchableOpacity>
        </View>
        <View style={{height: "20%", width: "100%", paddingLeft: "5%"}}>
        <Text style={{fontSize: 14, color: Colors.purple}}>{todaysEvents[currentEventId].category[0]}</Text>
        <Text style={{fontWeight: "bold", fontSize: 18}}>{todaysEvents[currentEventId].eventTitle}</Text>
        </View>
        <View style={{height: "40%", width: "100%", justifyContent: "space-between"}}>
        <View style={{height: "30%", 
                width: "100%", paddingLeft: "5%", flexDirection: "row", alignItems: "center"}}>
        <Image source={require('../../assets/images/tasksIcons/purpleClock.png')} 
                style={{resizeMode: "contain",height: "100%", width: "13%"}}
            />
            <Text style={{color: Colors.darkgray, fontSize: 14, paddingLeft: "4%"}}> 
                {(todaysEvents[currentEventId].startDate.toLocaleDateString('en-US')===today.toLocaleDateString('en-US'))?'today':todaysEvents[currentEventId].startDate.toLocaleDateString('en-US')}, {
                    formatTimeString(todaysEvents[currentEventId].startDate)
                } - {formatTimeString(todaysEvents[currentEventId].endDate)}
            </Text>
        </View>
        <View style={{height: "30%", 
                width: "100%", paddingLeft: "5%", flexDirection: "row", alignItems: "center"}}>
        <Image source={require('../../assets/images/tasksIcons/purpleLocation.png')} 
                style={{resizeMode: "contain",height: "100%", width: "13%"}}
            />
            <Text style={{color: Colors.darkgray, fontSize: 14, paddingLeft: "4%"}}>
            {todaysEvents[currentEventId].location}
            </Text>
        </View>
        <View style={{height: "30%", 
                width: "100%", paddingLeft: "5%", flexDirection: "row", alignItems: "center"}}>
        <Image source={require('../../assets/images/tasksIcons/purpleBell.png')} 
                style={{resizeMode: "contain",height: "100%", width: "13%"}}
            />
            <Text style={{color: Colors.darkgray, fontSize: 14, paddingLeft: "4%"}}> 
            {todaysEvents[currentEventId].remindMeWhen}
            </Text>
        </View>
        </View>
        <View style={{height: "30%", width: "100%", padding: "5%"}}>
        <Text style={{color: Colors.darkgray, fontSize: 14}}> 
        {todaysEvents[currentEventId].eventDetails}
        </Text>
        </View>

    </View>
    );
}