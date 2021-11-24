import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";

import {
  StyledContainer,
  InnerContainer,
  MediumExtraText,
  StyledFormArea,
  StyledButton,
  ButtonText,
}from '../../components/styles';

export default function ProfileSettingsPage({navigation, fullName, email}) {
  const [profileData, setProfileData] = useState(fullName="Am", email="am@gmail.com")
  return (
    <StyledContainer> 

      <StatusBar style="dark"/>

      <InnerContainer>
      <MediumExtraText>
        {fullName}
        {email}

         Hello</MediumExtraText>

      </InnerContainer>

    </StyledContainer>
  )
}

