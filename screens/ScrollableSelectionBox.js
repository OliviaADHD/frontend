import React from "react";
import {StyleSheet, View, ScrollView, Text} from "react-native";


import { TouchableOpacity } from "react-native-gesture-handler";


class Day extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <TouchableOpacity onPress={this.props.pushFunction}>
                <Text style={[styles.DayTextStyle, (this.props.dayNumber===this.props.selected)? styles.purpleColor: styles.blackColor]}>
                    {this.props.dayNumber} Days
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    DayTextStyle: {
        paddingBottom: '5%',
        paddingTop: '5%',
    },
    blackColor: {
        fontSize: 21,
        color: "#000000",
    },
    purpleColor:{
        fontSize: 28,
        color: "#694398",
    },
    ScrollViewExt:{
        height: "50%",
        width: "80%",
        alignItems: 'center',
        paddingBottom: "2%",
        paddingTop: "2%",
    }
})

const ScrollableDaySelector = ({startDay, numberDays,daySelected,setDaySelected}) => {
    let DayList = [];
    for (let i=startDay; i<startDay+numberDays; i++){
        DayList.push(<Day 
                        key={i} 
                        dayNumber={i} 
                        selected={daySelected}
                        pushFunction={() =>{setDaySelected(i)}}/>);
    };
    return(
        <View style={styles.ScrollViewExt}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {DayList}
            </ScrollView>
        </View>
    );

};

export default ScrollableDaySelector;