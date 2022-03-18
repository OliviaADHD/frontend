import React from "react";
import {StatusBar} from "expo-status-bar";

import {
    TopPaddingStyledFormArea,
    ProfileListTouch,
    ProfileListText,
    SectionPurpleBottomLine
} from "../../css/Profile/settings";

import { StyledContainer, InnerContainer} from "../../css/general/style";

import ProfileTopContainer from "../../components/ProfileTopContainer";

import DashBoardBottomMenu from "../../components/DashboardBottomMenu";

export default function Settings({navigation}) {

    return (
        <StyledContainer>

            <StatusBar style="dark"/>

            <InnerContainer>

                <ProfileTopContainer/>

                <TopPaddingStyledFormArea>

                    <SectionPurpleBottomLine>
                        <ProfileListTouch
                            activeOpacity={0.5}
                            onPress={() => navigation.navigate('Preferences')}>
                            <ProfileListText>
                                Preferences
                            </ProfileListText>
                        </ProfileListTouch>
                    </SectionPurpleBottomLine>

                    <SectionPurpleBottomLine>
                        <ProfileListTouch
                            activeOpacity={0.5}
                            onPress=
                            {() => navigation.navigate('PrivacySetting')}>
                            <ProfileListText>
                                Setting and Privacy
                            </ProfileListText>
                        </ProfileListTouch>
                    </SectionPurpleBottomLine>

                    <SectionPurpleBottomLine>
                        <ProfileListTouch
                            activeOpacity={0.5}
                            onPress=
                            {() => navigation.navigate('Help')}>
                            <ProfileListText>
                                Help
                            </ProfileListText>
                        </ProfileListTouch>
                    </SectionPurpleBottomLine>

                    <SectionPurpleBottomLine>
                        <ProfileListTouch
                            activeOpacity={0.5}
                            onPress=
                            {() => navigation.replace('Login')}>
                            <ProfileListText>
                                Sign Out
                            </ProfileListText>
                        </ProfileListTouch>
                    </SectionPurpleBottomLine>

                </TopPaddingStyledFormArea>

                <DashBoardBottomMenu currentScreen={"Settings"} navigation={navigation}/>

            </InnerContainer>

        </StyledContainer>

    )
}
