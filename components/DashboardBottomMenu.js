import React from "react";
import {StyleSheet, View, ScrollView, Text} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
    IconLogo,
    Colors,
} from "./styles";

class IconAndText extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <TouchableOpacity onPress={this.props.pushFunction}
                              style={styles.ITOpacityStyle}>
                <IconLogo source={require(this.props.iconPath)} />
                <Text style={[styles.IconbaseText, (this.props.selected)? styles.fontColorPurple: styles.fontColorGrey]}>
                    {this.props.iconText}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    ITOpacityStyle: {
        paddingBottom: "0%",
        paddingTop: "0%",
    },
    IconbaseText: {
        fontSize: "10px",
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
    }
})

const DashBoardBottomMenu = ({}) => {
    var screens = {'screen1 etc'};
    let indIcons = [];
    return (
        <View style={styles.thisView}>

        </View>
    );
}


// general component plan: 
// base component with a single icon (iconpath as property!) + text,
// needs to have touchable Opacity with onPress => navigate.replace
// with two modes: selected and unselected (= in grey or purple)

// then row component with spacing, some variable of currentPage?