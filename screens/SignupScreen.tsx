import * as React  from 'react';
import {useState, useRef} from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, View, Pressable, Alert } from 'react-native';
import { AppScreens, AuthStackParamList } from '../navigation/index';
import PhoneInput from "react-native-phone-number-input";

import { StackNavigationProp } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';

type SignupScreenNavigationProps = StackNavigationProp<AuthStackParamList, AppScreens.Signup>;

interface SignupScreenProps {
  navigation: SignupScreenNavigationProps;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:10
  },
  blocks:{
    margin:5,
    padding:5,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20    
  },
  text:{
    fontSize:15,
    color:'#7EC0EE',
    fontWeight:'bold',
    alignContent: 'flex-start'
  },
  Etext:{
    fontSize:12,
    borderRadius:15,
    margin:15,
    padding:5,
    color:'#FFFFFF',
    backgroundColor:'#7EC0EE',
    justifyContent: 'flex-end'
  },
  ButtonContainer:{
    margin: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    alignSelf:'center',
    width: '80%',
  },
  LogIn:{
    margin:20,
    flexDirection:'row'
  },
  Login:{
    fontSize:15,
    color:'#7EC0EE',
    fontWeight:'bold',
    alignContent: 'flex-start'
  },
  EPhone:{
    fontSize:12,
    borderRadius:15,
    color:'#FFFFFF',
    backgroundColor:'#7EC0EE',
    justifyContent: 'flex-end'
  },
  EPhoneOuter:{
    fontSize:12,
    marginLeft:23,
    borderRadius:15,
    color:'#FFFFFF',
    backgroundColor:'#7EC0EE',
    justifyContent: 'flex-end'
  }
});

const SignupScreen: React.FunctionComponent<SignupScreenProps> = (props) => {
  const { navigation } = props;
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);
return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>Sign Up</Text>
       <View style={styles.separator}/>
       <View style={styles.blocks}>
        <Text style={styles.text}>Name</Text>
        <TextInput style={styles.Etext} keyboardType='default'></TextInput>

        <Text style={styles.text}>Email</Text>
        <TextInput style={styles.Etext} keyboardType='email-address'></TextInput>

        <Text style={styles.text}>Age</Text>
        <TextInput style={styles.Etext} keyboardType='number-pad'></TextInput>

        <Text style={styles.text}>Phone</Text>
        {showMessage && (
            <View >
              <Text>Value : {value}</Text>
              <Text>Formatted Value : {formattedValue}</Text>
              <Text>Valid : {valid ? "true" : "false"}</Text>
            </View>
          )}
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="IN"
            containerStyle={styles.EPhoneOuter}
            textContainerStyle={styles.EPhone}
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withDarkTheme
            withShadow
            autoFocus
          />

        <Text style={styles.text}>Password</Text>
        <TextInput style={styles.Etext} secureTextEntry={true}></TextInput>

        <Text style={styles.text}>Confirm Password</Text>
        <TextInput style={styles.Etext} secureTextEntry={true} ></TextInput>

      </View>
      <View style={styles.ButtonContainer}>
        <Button title='Sign Up' onPress={() => 
           {const checkValid = phoneInput.current?.isValidNumber(value);
            setShowMessage(true);
            setValid(checkValid ? checkValid : false);}}/>
      </View>
      <View style={styles.LogIn}>
        <Text style={{marginRight:5}}>Already have an account.</Text>
        <Pressable onPressIn={()=>{navigation.navigate(AppScreens.Login)}}>
             <Text style={styles.Login}>Log In</Text>
        </Pressable>
      </View>
      </View>
      </SafeAreaView>
      </ScrollView>
      
  );
};
export default SignupScreen;