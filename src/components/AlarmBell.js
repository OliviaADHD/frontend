import React from "react";
import {Text, ImageBackground, StyleSheet, View} from 'react-native';


import { Colors } from "../css/general/style";


const stylesBell = StyleSheet.create({
    externalContainer: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
        height: "100%",
        width: "100%",
    },
    containerView: {
        flexDirection: "column",
        justifyContent: "flex-end",
        height: "100%",
        width: "10%",
        marginRight: "5%"
    },
    bellImage: {
        height: "80%",
        width: "100%",
    },
    roundView: {
        backgroundColor: "red",
        height: "40%",
        width: "40%",
        borderRadius: 9,
        marginLeft: "10%",
        marginTop: "-10%",
        justifyContent: "center"
    },
    roundNumber: {
        fontSize: 10,
        color: Colors.white,
        textAlign: "center",
    }
});

class AlarmBell extends React.Component{
    constructor(props) {
        super(props);
        
    }
    render(){
        return (
            <View style={stylesBell.externalContainer}>
                <View style={stylesBell.containerView}>
                    <ImageBackground source={require('../../assets/images/Bell.png')} 
                                    resizeMode="contain" style={stylesBell.bellImage}>
                    {this.props.showAlarm &&
                        <View style={stylesBell.roundView}>
                            <Text style={stylesBell.roundNumber}>{this.props.alarmNumber}</Text>
                        </View>
                    }
                    </ImageBackground>
                </View>
            </View>
        );}
}

export default AlarmBell;