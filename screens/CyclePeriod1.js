import React, {useState, useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import {StyleSheet, View, ScrollView, Text} from "react-native";

import {
    StyledContainer,
    InnerContainer, 
    ExtraText,
    ButtonText
} from './../components/styles';
import { TouchableOpacity } from "react-native-gesture-handler";
import {
    StyledTitleCentered,
    StyledButtonNotSure,
    ButtonTextNotSure,
    StyledButtonNotSureContainer,
}from '../components/stylesMenstruation';
import {
    NextBtnContainer,
    StyledButtonNext,
    StyledCalendar
}from '../components/stylesCalendar';

const CyclePeriod1 = ({navigation}) =>{


    return(
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <StyledTitleCentered>How long is your periodic cycle?</StyledTitleCentered>
                <ExtraText>(Usually 21-35 Days)</ExtraText>
                <ScrollableDaySelector startDay={10} numberDays={5} />
                <NextBtnContainer>
                    <StyledButtonNext
                        onPress={console.log("next")}
                        testID={"CalendarNextClickedButton"}>
                        <ButtonText>Next</ButtonText>
                    </StyledButtonNext>
                </NextBtnContainer>
                <StyledButtonNotSureContainer>
                    <StyledButtonNotSure 
                        onPress={console.log("notSure")}
                        testID={"CalendarNotSureClickedButton"}>
                        <ButtonTextNotSure>NOT SURE</ButtonTextNotSure>
                    </StyledButtonNotSure>
                </StyledButtonNotSureContainer> 
            </InnerContainer>


        </StyledContainer>
    );


};

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
        paddingBottom: '2%',
        paddingTop: '2%',
    },
    blackColor: {
        fontSize: 20,
        color: "#000000",
    },
    purpleColor:{
        fontSize: 28,
        color: "#694398",
    }
})



const ScrollableDaySelector = ({startDay, numberDays}) => {
    const [selectedDay, setSelectedDay] = useState(undefined);

    console.log("##########",startDay, selectedDay);
    let DayList = [];
    for (let i=startDay; i<startDay+numberDays; i++){
        DayList.push(<Day 
                        key={i} 
                        dayNumber={i} 
                        selected={selectedDay}
                        pushFunction={() =>{setSelectedDay(i)}}/>);
    };

    

    return(
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {DayList}
            </ScrollView>
        </View>
    );

};


export default CyclePeriod1