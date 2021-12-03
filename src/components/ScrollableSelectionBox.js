import React from "react";
import {StyleSheet, View, ScrollView, Text} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class Day extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <TouchableOpacity onPress={this.props.pushFunction}
                              style={styles.tOpacityStyle}>
                <Text style={[styles.DayTextStyle, (this.props.dayNumber===this.props.selected)? styles.purpleColor: styles.blackColor]}>
                    {this.props.dayNumber} Days
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    DayTextStyle: {
        paddingBottom: '1%',
        paddingTop: '1%',
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
        paddingBottom: "1%",
        paddingTop: "2%",
    },
    tOpacityStyle: {
        paddingBottom: "0%",
        paddingTop: "0%",
    },
    scrollViewStyle: {
    },
    scrollContentStyle:{
        paddingVertical: 0,
        flexGrow: 1,
        justifyContent: 'space-between',
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
            <ScrollView showsVerticalScrollIndicator={false}
                        overScrollMode={"never"}
                        contentContainerStyle={styles.scrollContentStyle}
                        style={styles.scrollViewStyle}>
                {DayList}
            </ScrollView>
        </View>
    );

};

export default ScrollableDaySelector;