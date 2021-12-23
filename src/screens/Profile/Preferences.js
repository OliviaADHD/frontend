import React, {useState} from "react";
import {Switch, ActivityIndicator} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useFormik} from 'formik';
import {Picker as SelectPicker} from '@react-native-picker/picker';
import { beforePreferences, updatePreferences } from '../../redux/actions/profile/profile'
import {
    StyledFormArea,
    PageTitle,
    PageTitleFormat,
    LanguageSection,
    LanguageSectionText,
    DarkModeSection,
    DarkModeSectionText
} from "../../css/Profile/preferences";

import {StyledContainer, InnerContainer, Loading, Colors} from "../../css/general/style";
import {LongButton, ButtonText} from '../../css/components/saveButton';
import ProfileTopContainer from "../../components/ProfileTopContainer";
import DashBoardBottomMenu from "../../components/DashboardBottomMenu";
import { useDispatch, useSelector } from "react-redux";
import FlashMessage, {  showMessage } from "react-native-flash-message";

const Preferences = ({navigation}) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const userData = useSelector(state => state.userName);
    const profileData = useSelector(state => state.profileInfo);
    const languages = [
        {
            name: 'English',
            id: 0
        }, {
            name: 'French',
            id: 1
        }, {
            name: 'Spanish',
            id: 2
        }
    ]

    const formik = useFormik({
        initialValues: {
            language: profileData.language,
            switch: profileData.darkMode
        },
        onSubmit: values => {
          if(values.language == ''){
            values.language = "English";
          }
          const result = languages.filter(word => word.name == values.language);
          const preferenceBody = {
              language: result[0].id,
              darkMode: values.switch,
              userId: userData.userId
          }
            setLoading(true);
            dispatch(beforePreferences());
            dispatch(updatePreferences(preferenceBody))
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

                        <PageTitle>Preferences</PageTitle>

                    </PageTitleFormat>

                    <LanguageSection>

                        <LanguageSectionText>Language</LanguageSectionText>

                        <SelectPicker
                            style={{
                            width: 110,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            marginRight: 22,
                            transform: [
                                {
                                    scale: 1.5
                                }
                            ]
                        }}
                            enabled={true}
                            mode="dialogue"
                            selectedValue={formik.values.language}
                            onValueChange={formik.handleChange('language')}>

                            {Object
                                .values(languages)
                                .map((item) => (<SelectPicker.Item
                                    style={{
                                    fontSize: 10,
                                    transform: [
                                        {
                                            scale: 0.5
                                        }
                                    ]
                                }}
                                    label={item.name}
                                    value={item.name}
                                    key={item.id}/>))}

                        </SelectPicker>

                    </LanguageSection>

                    <DarkModeSection>

                        <DarkModeSectionText>
                            Dark Mode
                        </DarkModeSectionText>

                        <Switch
                            style={{
                            marginRight: 19,
                            transform: [
                                {
                                    scale: 1.1
                                }
                            ]
                        }}
                            trackColor={{
                            false: Colors.darkgray,
                            true: Colors.purple
                        }}
                            thumbColor={formik.values.switch
                            ? Colors.white
                            : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            value={formik.values.switch}
                            onValueChange={value => formik.setFieldValue('switch', value)}/>

                    </DarkModeSection>
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


export default Preferences;