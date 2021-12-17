import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Text, Switch, ActivityIndicator} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useFormik} from 'formik';
import {Picker as SelectPicker} from '@react-native-picker/picker';
import {Colors} from "../../css/general/style";
import { beforePreferences, updatePreferences } from '../../redux/actions/profile/preferences'
import {
    StyledFormArea,
    PageTitle,
    PageTitleFormat,
    SubSectionPurpleBottomLine,
    LanguageSection,
    LanguageSectionText,
    DarkModeSection,
    DarkModeSectionText
} from "../../css/Profile/preferences";

import {StyledContainer, InnerContainer, Loading} from "../../css/general/style";
import {LongButton, ButtonText} from '../../css/components/saveButton'
import SaveButton from "../../components/SaveButton";
import ProfileTopContainer from "../../components/ProfileTopContainer";
import DashBoardBottomMenu from "../../components/DashboardBottomMenu";
import { useDispatch, useSelector } from "react-redux";


const Preferences = ({navigation}) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
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
            language: 'English',
            switch: true
        },
        onSubmit: values => {
          if(values.language == ''){
            values.language = "English";
          }
          const result = languages.filter(word => word.name == values.language);
          const preferenceBody = {
              language: result[0].id,
              darkMode: values.switch,
              userId: 7
            }
            //setLoading(true);
            dispatch(beforePreferences());
            dispatch(updatePreferences(preferenceBody))
            .then(() => setLoading(false));
            
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

            </InnerContainer>

        </StyledContainer>

    )
}


export default Preferences;