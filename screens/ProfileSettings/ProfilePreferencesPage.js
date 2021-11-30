import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Formik, Field, Form } from 'formik';

import {
  StyledContainer,
  InnerContainer,
  Colors,
  // ProfileListText,
  // ProfileListTouch,
  StyledFormArea
} from '../../components/styles';

// import ProfileTopContainer from "../../components/ProfileTopContainer";

// import Profile from "../Dashboard/Profile";

export default function ProfilePreferencesPage({navigation}) {

  // const [preferences, setPreferences] = useState({
  //   language: '',
  //   mode: false
  // })

  return (
    <StyledContainer> 

      <StatusBar style="dark"/>

      <InnerContainer>
        {/* <ProfileTopContainer/> */}
        <StyledFormArea>
        
          <View
            style={{
              // borderTopWidth: 1,
              borderBottomWidth: 2,
              // borderTopColor: Colors.lightpurple,
              borderBottomColor: Colors.lightpurple, 
              width: 120,
              alignItems: 'center'
            }}
          >
                      
            <Text> Preferences </Text>          

          </View>

        <Formik
          initialValues={{ language: '', mode: false}}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >

{({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (

          <View>

            <Form>

            <Field>
            <Text> Language </Text> 
            <Text value='English'>English</Text>
              <Text value='French'>French</Text>
              <Text value='Spanish'>Spanish</Text>
              {/* <Option value='English'><Text>English</Text></Option>
              <Option value='French'><Text>French</Text></Option>
              <Option value='Spanish'><Text>Spanish</Text></Option> */}
            
              
            </Field>

                         

              <Text> 
              Dark mode 
              </Text>            
            
            <Button onPress={handleSubmit} title='Save all changes' />

            </Form>

          </View>

)}

      </Formik>

        </StyledFormArea>
        {/* <Profile/> */}
      </InnerContainer>
    </StyledContainer>

  )
}

