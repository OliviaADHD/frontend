import React from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from "react-native-gesture-handler";
import {
    Colors,
} from "../css/general/style";

const styles = StyleSheet.create({
    ITOpacityStyle: {
        paddingBottom: "0%",
        paddingTop: "0%",
    },
    IconbaseText: {
    },
    fontColorGrey:{
        color: Colors.darkgray,
    },
    fontColorPurple: {
        color: Colors.purple,
    },
    thisView: {
        justifyContent: "space-between",
        flexDirection: "row",
        height: "10%",        
    },
    BottomIconMenyStyle:{
        resizeMode: "contain",
        height: "60%",
        width: "100%",
    },
    IconAndTextView:{
        justifyContent:"space-between",
        flexDirection: "column", 
        alignItems: "center",
        width: "19%"
    },
    greyBackground: {
        backgroundColor: Colors.gray,
    },
    whiteBackground: {
        backgroundColor: Colors.white,
        borderRadius: 9,
    }
})

class IconAndText extends React.Component {
    constructor(props) {
        super(props);
        
    }
    icon = this.props.iconPurple;
    render(){
        return (
            <View style={[styles.IconAndTextView,
            (this.props.backgroundColor)? ((this.props.currentScreen===this.props.screen)?styles.whiteBackground:styles.greyBackground):styles.whiteBackground]}>
                <TouchableOpacity onPress={() => {}} 
                style={{justifyContent:"space-between", paddingTop: "10%"}}>
                    <Icon
                        name={this.props.iconName}
                        type={this.props.iconType}
                        size={30}
                        color={ (this.props.currentScreen === this.props.screen)? (Colors.purple):(Colors.gray)}
                    />

                </TouchableOpacity>
            </View>
        );
    }
}
var iconName = ["blood-drop","list-1","ios-home-sharp","heartbeat","ios-person-sharp"];
var iconType =  ["fontisto","fontisto","ionicon","font-awesome","ionicon"];
var screens = ["Cycle", "ToDoList", "Home", "Awareness", "Profile"];

const DashBoardBottomMenuStatic = ({currentScreen,backgroundColor}) => {
    let indIcons = [];
    for (let i=0; i<5; i++){
        indIcons.push(<IconAndText
            key={i}
            currentScreen={currentScreen}
            screen={screens[i]}
            iconName={iconName[i]}
            iconType={iconType[i]}
            backgroundColor={backgroundColor}
        />)
        }
    return (
        <View style={styles.thisView}>
            {indIcons}
        </View>
    );
}

export default DashBoardBottomMenuStatic;