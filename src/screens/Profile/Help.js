import React from "react";
import {StatusBar} from "expo-status-bar";

import {
    StyledFormArea,
    PageTitleFormat,
    PageTitle,
    ProfileListTouch,
    ProfileListText,
    SectionPurpleBottomLine
} from "../../css/Profile/help";

import {StyledContainer, InnerContainer} from "../../css/general/style";

import ProfileTopContainer from "../../components/ProfileTopContainer";

import DashBoardBottomMenu from "../../components/DashboardBottomMenu";

export default function Help({navigation}) {

    return (
        <StyledContainer>

            <StatusBar style="dark"/>

            <InnerContainer>

                <ProfileTopContainer/>

                <StyledFormArea>

                    <PageTitleFormat>

                        <PageTitle>Help & Guidance</PageTitle>

                    </PageTitleFormat>

                    <SectionPurpleBottomLine>
                        <ProfileListTouch
                            activeOpacity={0.5}
                            onPress={() => navigation.navigate('Preferences')}>
                            <ProfileListText>
                                FAQ
                            </ProfileListText>
                        </ProfileListTouch>
                    </SectionPurpleBottomLine>

                    <SectionPurpleBottomLine>
                        <ProfileListTouch
                            activeOpacity={0.5}
                            onPress=
                            {() => navigation.navigate('PrivacySetting')}>
                            <ProfileListText>
                                Instructions to use Olivia
                            </ProfileListText>
                        </ProfileListTouch>
                    </SectionPurpleBottomLine>

                    <SectionPurpleBottomLine>
                        <ProfileListTouch
                            activeOpacity={0.5}
                            onPress=
                            {() => navigation.navigate('ProfileHelpPage')}>
                            <ProfileListText>
                                Terminology and Policy of Olivia
                            </ProfileListText>
                        </ProfileListTouch>
                    </SectionPurpleBottomLine>
                </StyledFormArea>

                <DashBoardBottomMenu currentScreen={"Profile"} navigation={navigation}/>

            </InnerContainer>

        </StyledContainer>

    )
}
