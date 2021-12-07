import React from "react";
import {StyleSheet, View, Text, Image} from "react-native";
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
        color: Colors.gray,
    },
    fontColorPurple: {
        color: Colors.purple,
    },
    thisView: {
        justifyContent: "space-between",
        flexDirection: "row",
        height: "10%",
        backgroundColor: Colors.white

        
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
    }
})

class IconAndText extends React.Component {
    constructor(props) {
        super(props);
        
    }
    icon = this.props.iconPurple;
    render(){
        return (
            <View style={styles.IconAndTextView}>
                <TouchableOpacity onPress={() => {
                                                (this.props.currentScreen === this.props.screen)? {}:this.props.navigation.replace(this.props.screen);
                                                }
                    } style={{justifyContent:"space-between", paddingTop: "10%"}}>
                    <Image source={(this.props.currentScreen===this.props.screen)?this.props.icon.purple:this.props.icon.grey} 
                        style={styles.BottomIconMenyStyle}
                    />
                    <Text style={[styles.IconbaseText,(this.props.currentScreen===this.props.screen) ? styles.fontColorPurple:styles.fontColorGrey]}>
                        {this.props.iconText}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

var screens = ["Cycle", "ToDoList", "Home", "Awareness", "Profile"];
var iconTexts = ["Cylce", "To-do List", "Home", "Awareness", "Profile"];
const icons = [
    {   grey: require("../../assets/images/menuIcons/CycleGrey.png"),
        purple: require("../../assets/images/menuIcons/CyclePurple.png")
    },
    {
        grey: require("../../assets/images/menuIcons/TodolistGrey.png"),
        purple: require("../../assets/images/menuIcons/TodolistPurple.png"),
    },
    {
        grey: require("../../assets/images/menuIcons/HomeGrey.png"),
        purple: require("../../assets/images/menuIcons/HomePurple.png"),
    },
    {
        grey: require("../../assets/images/menuIcons/AwarenessGrey.png"),
        purple: require("../../assets/images/menuIcons/AwarenessPurple.png"),
    },
    {
        grey: require("../../assets/images/menuIcons/ProfileGrey.png"),
        purple: require("../../assets/images/menuIcons/ProfilePurple.png"),
    }
]

const DashBoardBottomMenu = ({currentScreen,navigation}) => {
    let indIcons = [];
    for (let i=0; i<5; i++){
        indIcons.push(<IconAndText
            key={i}
            currentScreen={currentScreen}
            screen={screens[i]}
            iconText={iconTexts[i]}
            icon={icons[i]}
            navigation = {navigation}
        />)
        }
    return (
        <View style={styles.thisView}>
            {indIcons}
        </View>
    );
}

export default DashBoardBottomMenu;

