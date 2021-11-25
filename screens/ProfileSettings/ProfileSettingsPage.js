import React, {useState} from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

import {
  StyledContainer,
  InnerContainer,
  Colors,
} from '../../components/styles';

import ProfileTopContainer from "../../components/ProfileTopContainer";

import Profile from "../Dashboard/Profile";

export default function ProfileSettingsPage({navigation}) {


  return (
    <StyledContainer> 

      <StatusBar style="dark"/>

      <InnerContainer>

        <ProfileTopContainer/>

        <View
          style={{
            // alignContent: "flex-start"
            // display: "flex",
            // alignItems: "flex-start",
            // flexDirection: "column",
            // justifyContent: "center",
            alignItems: "center",
            // paddingVertical: 200,
            flex: 1,
            // paddingVertical: 30,
            // width: 30,
            // height: 100,
            paddingBottom: 300,
            paddingEnd: 150,

            justifyContent: "space-evenly",

          }}
        >
        
        <View
        style={{
          flex: 1,
          paddingBottom: 70,
          borderColor: Colors.purple,
          borderWidth: 2,
        }}
        >
        <TouchableOpacity
          style={{
            flex: 1,
            paddingBottom: 100,
            paddingTop: 20,
            // borderTopWidth: 2,
            // borderWidth: 2,
            // borderTopColor: Colors.purple,
            // borderColor: Colors.purple,
            // width: 300
          }}
            activeOpacity={0.5}
            onPress = {() => navigation.navigate('ToBeDefined')}
          >
        <Text
        style={{
          paddingLeft: 40,
          width: 300
        }}
        >
          Preferences
        </Text>
        </TouchableOpacity>

        </View>

        {/* <View
        style={{
          paddingBottom: 30
        }}
        > */}
        <TouchableOpacity 
        style={{
          flex: 1,
          paddingBottom: 100
        }}
            activeOpacity={0.5}
            onPress = {() => navigation.navigate('ToBeDefined')}
          >
        <Text> 
          Setting and Privacy
        </Text>
        </TouchableOpacity>
        {/* </View> */}

        {/* <View
        style={{
          paddingVertical: 20
        }}
        > */}
        <TouchableOpacity 
        style={{
          flex: 1,
          paddingBottom: 100
        }}
            activeOpacity={0.5}
            onPress = {() => navigation.navigate('ToBeDefined')}
          >
        <Text>
          Help
        </Text>
        </TouchableOpacity>
        {/* </View> */}

        {/* <View
        style={{
          paddingVertical: 20
        }}
        > */}
        <TouchableOpacity 
        // style={{
        //   flex: 1,
        //   paddingBottom: 50
        // }}
            activeOpacity={0.5}
            onPress = {() => navigation.navigate('Login')}
          >
        <Text>
          Sign Out
        </Text>
      </TouchableOpacity>
      {/* </View> */}

        </View>

        {/* <Profile 
        style={{
          paddingBottom: 100
        }}
        /> */}

      </InnerContainer>

    </StyledContainer>
  )
}

