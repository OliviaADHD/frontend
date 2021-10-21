import React, {useState, useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import {StyleSheet, View, ScrollView, Text, FlatList} from "react-native";

import {
    StyledContainer,
    InnerContainer, 
    ExtraText,
    ButtonText,
    ErrorMessage,
    ErrorText
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
}from '../components/stylesCalendar';

const CyclePeriod1 = ({navigation}) =>{
    const [DaySelected, SetDaySelected] = useState(undefined);
    const [warning, SetWarning] = useState(false);
    var NextScreen = "Signup";
    var NotSureScreen = "Signup";


    const NextClicked = () => {
        console.log('next was clicked');
        if (DaySelected!=undefined){
            SetWarning(false);
            console.log("a specific day was selected: " + DaySelected);
            navigation.navigate(NextScreen);
        } else {
            console.log(" no specific day was selected, display warning");
            SetWarning(true);
        }
    };

    const NotSureClicked = () => {
        console.log('Not sure was clicked, and the Day was '+DaySelected);
        navigation.navigate(NotSureScreen);
    }

    return(
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <StyledTitleCentered style={{marginBottom: '0%'}}
                    >How long is your periodic cycle?
                </StyledTitleCentered>
                <ExtraText style={{marginTop: '0%'}}>(Usually 21-35 Days)</ExtraText>
                <ScrollableDaySelector 
                    startDay={10} numberDays={51} 
                    daySelected={DaySelected} setDaySelected={SetDaySelected}/>
                { warning &&
                            <ErrorMessage style={{width: "80%"}}>
                                <ErrorText style={{textAlign: 'center'}}>
                                    Please select a Day before Clicking 'Next'.
                                    Otherwise click on 'Not Sure'.
                                </ErrorText>
                            </ErrorMessage> 
                        }
                <NextBtnContainer style={{marginTop: '5%'}}>
                    <StyledButtonNext
                        onPress={NextClicked}
                        testID={"CyclePeriod1NextClickedButton"}>
                        <ButtonText>Next</ButtonText>
                    </StyledButtonNext>
                </NextBtnContainer>
                <StyledButtonNotSureContainer style={{marginTop: '0%'}}>
                    <StyledButtonNotSure 
                        onPress={NotSureClicked}
                        testID={"CyclePeriod2NotSureClickedButton"}>
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


export default CyclePeriod1