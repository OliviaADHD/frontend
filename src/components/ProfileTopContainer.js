import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import {  Colors } from '../css/general/style';
import {useSelector } from "react-redux";

const ProfileTopContainer = ({navigation}) => {
  const userData = useSelector(state => state.userName);
  
    return(

      <View 
      style={{
        flex: 1, 
        justifyContent: 'space-between', 
        paddingTop: 25, 
        flexDirection: 'row', 
        alignItems: 'baseline', 
        flexWrap: 'wrap',
        paddingRight: 15
      }}>

      <Image source={require('../../assets/images/foxicon.png')}
      // /Users/i-mac/frontend/assets/images/foxicon.png
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
              
          <Text style={{fontSize:15}}>{userData.Name}{"\n"}</Text>
          <Text style={{fontSize:12}}>{userData.email}{"\n"}</Text>

        </Text>

          <TouchableOpacity 
            activeOpacity={0.5}
            onPress = {() => this.props.navigation.navigate('ToBeDefinedEditPage')}
          >
              
            <Image 
              source={require('../../assets/images/penBlack.png')} 
              style={{
                width: 17, 
                height: 17,
                }}
              />
              
          </TouchableOpacity>

      </View>

    </View>

    );
}

export default ProfileTopContainer;
