import React, {useState} from "react";
import axios from 'axios';
import {Switch, ActivityIndicator} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFormik } from 'formik';
import FlashMessage, {  showMessage } from "react-native-flash-message";
import { useDispatch } from "react-redux";
import { beforePrivacy, updatePrivacy } from '../../redux/actions/profile/profile'
import ProfileTopContainer from "../../components/ProfileTopContainer";
import DashBoardBottomMenu from "../../components/DashboardBottomMenu";
import {LongButton, ButtonText} from '../../css/components/saveButton';
import { 
  StyledFormArea,
  PageTitle,
  PageTitleFormat,
  ProfileListTouch,
  ProfileListText,
  SectionPurpleBottomLine,
  SwitchSection,
  SwitchSectionNoMargin,
  SwitchSectionText
} from "../../css/Profile/privacy";
import { useSelector } from "react-redux";

import { StyledContainer, InnerContainer, Loading, Colors} from "../../css/general/style";


export default function PrivacySetting({navigation}) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const userData = useSelector(state => state.userName);
  const profileData = useSelector(state => state.profileInfo);


  const formik = useFormik({
    initialValues: { photo: profileData.hidePhoto, notify:profileData.stopNotification },
    onSubmit: values => {
      const privacyBody = {
        hidePhoto: values.photo,
        stopNotification: values.notify,
        userId: userData.userId
      }
      setLoading(true);
      dispatch(beforePrivacy());
      dispatch(updatePrivacy(privacyBody))
      .then((resp) => {
        setLoading(false);
        if(resp){
          const message = {
            message: "Updated",
            description: "Your Profile has been updated",
            icon: { icon: "auto", position: "left" },
            type:"success",
            backgroundColor:Colors.purple, // background color
            color: Colors.white,
          }
          showMessage(message);
        }
        else{
          const message = {
            message: "Updated",
            description: "Error happened",
            icon: { icon: "danger", position: "left" },
            type:"success",
            backgroundColor:Colors.red, // background color
            color: Colors.white,
          }
        showMessage(message);
        }
      
      });
    }
  });

  return (    
    
    <StyledContainer> 

    <StatusBar style="dark"/>

    <InnerContainer>
      
      <ProfileTopContainer/>

      <StyledFormArea>
      
        <PageTitleFormat>

          <PageTitle> Setting & Privacy </PageTitle>      

        </PageTitleFormat>
        
        <SwitchSection>

          <SwitchSectionText>
            Hide my Photo
          </SwitchSectionText>
          
          <Switch
            style={{ marginRight: 19, transform : [{scale: 1.1}]}}
            trackColor={{ false: Colors.darkgray, true: Colors.purple}}
            thumbColor={formik.values.photo ? Colors.white : "#f4f3f4"}              
            ios_backgroundColor="#3e3e3e"
            value={formik.values.photo}             
            onValueChange={value => formik.setFieldValue('photo', value)}
          />
        
        </SwitchSection> 

        <SectionPurpleBottomLine>
          <ProfileListTouch 
            activeOpacity={0.5}
            onPress = {() => navigation.navigate('ResetPassword')}
          >
            <ProfileListText> Reset Password </ProfileListText>            
          </ProfileListTouch>
      </SectionPurpleBottomLine>

        <SwitchSectionNoMargin>

          <SwitchSectionText>
            Stop Notifications
          </SwitchSectionText>
          
          <Switch
            style={{ marginRight: 19, transform : [{scale: 1.1}]}}
            trackColor={{ false: Colors.darkgray, true: Colors.purple}}
            thumbColor={formik.values.notify ? Colors.white : "#f4f3f4"}              
            ios_backgroundColor="#3e3e3e"
            value={formik.values.notify}             
            onValueChange={value => formik.setFieldValue('notify', value)}
          />
        
        </SwitchSectionNoMargin> 

        <LongButton           
        mode="contained"
        uppercase={true} 
        title='save' 
        onPress={formik.handleSubmit}
      >
        <ButtonText>
          Save all updates
        </ButtonText>
      </LongButton>

        

      </StyledFormArea>
      {loading &&
        <Loading>
            <ActivityIndicator size="large" color="#694398"/>
        </Loading>
      }
      <DashBoardBottomMenu currentScreen={"Profile"} navigation={navigation}/>
      <FlashMessage position="bottom" />
    </InnerContainer>
  
  </StyledContainer>

  )
}

