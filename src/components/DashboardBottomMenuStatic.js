import React from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from "react-native-gesture-handler";
import {
    Colors,
} from "../css/general/style";

import {GeneralContainerTut, IconContainer, NewTouchOpacity} from '../css/components/menu';

const styles = StyleSheet.create({
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
            <IconContainer style={(this.props.backgroundColor)? ((this.props.currentScreen===this.props.screen)?styles.whiteBackground:styles.greyBackground):styles.whiteBackground}>
                <NewTouchOpacity onPress={() => {}}>
                    <Icon
                        name={this.props.iconName}
                        type={this.props.iconType}
                        size={30}
                        color={ (this.props.currentScreen === this.props.screen)? (Colors.purple):(Colors.gray)}
                    />

                </NewTouchOpacity>
            </IconContainer>
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
       <GeneralContainerTut>
            {indIcons}
        </GeneralContainerTut>
    );
}

export default DashBoardBottomMenuStatic;