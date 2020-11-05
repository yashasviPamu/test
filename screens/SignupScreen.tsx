import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, View, Pressable, Alert } from 'react-native';
import { AppScreens, AuthStackParamList } from '../navigation/index';

import { StackNavigationProp } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';

type SignupScreenNavigationProps = StackNavigationProp<AuthStackParamList, AppScreens.Signup>;

interface SignupScreenProps {
  navigation: SignupScreenNavigationProps;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blocks:{
    margin:5,
    padding:5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15    
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
});

const SignupScreen: React.FunctionComponent<SignupScreenProps> = (props) => {
  const { navigation } = props;
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
        <TextInput style={styles.Etext} keyboardType='phone-pad'></TextInput>

        <Text style={styles.text}>Password</Text>
        <TextInput style={styles.Etext} secureTextEntry={true}></TextInput>

        <Text style={styles.text}>Confirm Password</Text>
        <TextInput style={styles.Etext} secureTextEntry={true} ></TextInput>

      </View>
      <View style={styles.ButtonContainer}>
        <Button title='Sign Up' onPress={() => Alert.alert('Saved','Details Saved')}/>
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