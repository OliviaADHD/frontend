import React, {useState} from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

import {
  Colors,
}from "./styles";

export default function ProfileTopContainer({navigation, route}) {
  
  // const {fullName, email, id} = route.params;
  const [profileData, setProfileData] = useState(fullName="Samira Bahram", email="samirabahrampour@gmail.com")

  return (

    <View 
      style={{
        flex: 1, 
        justifyContent: 'space-between', 
        paddingTop: 40, 
        flexDirection: 'row', 
        alignItems: 'baseline', 
        flexWrap: 'wrap',
        paddingRight: 15
      }}>

      <Image source={require('../assets/images/foxicon.png')} 
        style={{
          width: 70, 
          height: 70,
          borderRadius: 50, 
          borderWidth: 5, 
          borderColor: Colors.purple,
        }}/>
        

      <View style={{flexDirection: 'row'}}>
            
        <Text 
          style={{
            fontWeight: 'bold',
            paddingLeft: 20,
            paddingHorizontal: 10,
            paddingRight: 20
          }}>
              
          <Text style={{fontSize:15}}>{fullName}{"\n"}</Text>
          <Text style={{fontSize:12}}>{email}{"\n"}</Text>

        </Text>

          <TouchableOpacity 
            activeOpacity={0.5}
            onPress = {() => navigation.navigate('ToBeDefined')}
          >
              
            <Image 
              source={require('../assets/images/penBlack.png')} 
              style={{
                width: 17, 
                height: 17,
                }}
              />
              
          </TouchableOpacity>

      </View>

    </View>

  )
}

