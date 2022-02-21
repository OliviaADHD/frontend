import React, {useState, useEffect} from "react";
import {StatusBar} from "expo-status-bar";
import {View, StyleSheet, Image, Dimensions, TextInput} from 'react-native';
import {Colors, StyledContainer} from "../../../css/general/style";
import { Icon } from 'react-native-elements';
import { HeaderView, ContentView, InnerContainerRemake, TaskView, CloseView, StyledIcon } from "../../../css/Dashboard/New/createTask";

import { useSelector, useDispatch } from "react-redux";

const windowWidth = Dimensions.get('window').width;

export const Task = ({navigation}) => {

    return (
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainerRemake style={{backgroundColor: Colors.gray}}>
                <HeaderView>              
                </HeaderView>
                <ContentView>
                    <CloseView>
                        <StyledIcon
                        name='close-outline'
                        type='ionicon'
                        size={35}
                        />
                    </CloseView>
                    <TaskView>
                        <Icon
                        name='checkmark-outline'
                        type='ionicon'
                        size={35}
                        />
                        <TextInput style={styles.inputs}
                            placeholder="Create a small task"
                            underlineColorAndroid='transparent'
                            onChangeText={(password) => this.setState({password})}/>
                        <Icon
                            name='chevron-forward-circle-outline'
                            type='ionicon'
                            size={35}
                        />
                    </TaskView>
                </ContentView>
            </InnerContainerRemake>
        </StyledContainer>
    );
  }


  const styles = StyleSheet.create({
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
  });
  