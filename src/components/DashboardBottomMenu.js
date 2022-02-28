import React from "react";
import { Icon } from 'react-native-elements';
import {
    Colors,
} from "../css/general/style";

import {GeneralContainer, IconContainer, NewTouchOpacity} from '../css/components/menu';

class IconAndText extends React.Component {
    constructor(props) {
        super(props);
        
    }
    icon = this.props.iconPurple;
    render(){
        return (
            <IconContainer>
                <NewTouchOpacity onPress={() => {
                                                (this.props.currentScreen === this.props.screen)? {}:this.props.navigation.replace(this.props.screen);
                                                }
                    }>
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
var screens = ["Cycle", "ToDoList", "Home", "Awareness", "Settings"];


const DashBoardBottomMenu = ({currentScreen,navigation}) => {
    let indIcons = [];
    for (let i=0; i<5; i++){
        indIcons.push(<IconAndText
            key={i}
            currentScreen={currentScreen}
            screen={screens[i]}
            iconName={iconName[i]}
            iconType={iconType[i]}
            navigation = {navigation}
        />)
        }
    return (
        <GeneralContainer>
            {indIcons}
        </GeneralContainer>
    );
}

export default DashBoardBottomMenu;
