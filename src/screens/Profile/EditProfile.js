import React, {useState} from "react";
import {Text} from "react-native";
import {StatusBar} from "expo-status-bar";
import {
    StyledFormArea,
    StyledTextInput,
    StyledTopView,
    TextView,
    StyledText,
    StyledTouchable,
    ErrorMessage,
    ErrorText
} from "../../css/Profile/editProfle";

import {StyledContainer, InnerContainer, Colors} from "../../css/general/style";
import {LongButton, ButtonText} from '../../css/components/saveButton';
import DashBoardBottomMenu from "../../components/DashboardBottomMenu";
import { useDispatch, useSelector } from "react-redux";
import FlashMessage, {  showMessage } from "react-native-flash-message";
import { Icon } from 'react-native-elements';

export const EditProfile = ({navigation}) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const userData = useSelector(state => state.userName);
    const profileData = useSelector(state => state.profileInfo);

    const [imageText, setImageText] = useState("");
    const [nameText, setNameText] = useState("");
    const [emailText, setEmailText] = useState("");
    const [passwordText, setPasswordText] = useState("");

    const [passwordCorrect, setPasswordCorrect] = useState(false);
    const [passwordWarning, setPasswordWarning] = useState(false);

    const onSubmit = ()=> {
        console.log('logic that needs to be implemented');
        //check if password correct with email that is in the userData
        setPasswordCorrect(false); //this needs to be replaced with backendlogic
        if (passwordCorrect) {
            console.log("send changes to backend!");
            if (nameText !== ""){
                console.log("update name in backend and userData!");
            }
            if (emailText !== ""){
                console.log("update email in backend and userData")
            }
            if (imageText !== ""){
                console.log("update image in backend and userData")
            }

        } else {
            setPasswordWarning(true);
        }
    }

    return (
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
            <StyledTopView>
                <StyledTouchable
                    onPress={()=>console.log("now you need to upload an image...")}>
                <Icon 
                    name='add-outline'
                    type='ionicon'
                    size={35}
                    color={Colors.purple}
                    style={{width: "100%", height: "100%", borderRadius: 50,
                            borderWidth: 5, borderColor: Colors.purple,
                            justifyContent: "center", backgroundColor: Colors.white}}
                    
                />
                 
                </StyledTouchable>
                <TextView> 
                        <StyledText >
                            <Text>{userData.Name}{"\n"}</Text>
                            <Text style={{fontSize:12}}>{userData.email}{"\n"}</Text>
                        </StyledText>
                    </TextView>
            </StyledTopView>
            <StyledFormArea>
                <StyledTextInput style={{marginTop: "20%"}}
                    onChangeText={(text) => setNameText(text)}
                    value={nameText}
                    placeholder="Full Name"
                />
                <StyledTextInput 
                    style={{}}
                    onChangeText={(text) => setEmailText(text)}
                    value={emailText}

                    placeholder="Email"
                />
                <StyledTextInput 
                    onChangeText={(text) => {setPasswordText(text);
                                            setPasswordWarning(false)}}
                    value={passwordText}
                    placeholder="Current Password"
                    secureTextEntry={true}
                />
                {passwordWarning && 
                    <ErrorMessage>
                        <ErrorText>Password not correct.</ErrorText>
                    </ErrorMessage>
                }
                <LongButton           
                    mode="contained"
                    uppercase={true} 
                    title='save' 
                    onPress={() => onSubmit()}
                    style={passwordWarning?{marginTop: "17%"}:{}}
                >
                    <ButtonText>
                        Save all changes
                    </ButtonText>
                    </LongButton>
                </StyledFormArea>
                <DashBoardBottomMenu currentScreen={"Settings"} navigation={navigation}/>
                <FlashMessage position="bottom" />
            </InnerContainer>

        </StyledContainer>

    )
}


