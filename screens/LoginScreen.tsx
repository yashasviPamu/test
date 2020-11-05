import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { AppScreens, AuthStackParamList } from '../navigation/index';
import { StackNavigationProp } from '@react-navigation/stack';


type LoginScreenNavigationProps = StackNavigationProp<AuthStackParamList, AppScreens.Login>;

interface LoginScreenProps {
    navigation: LoginScreenNavigationProps;
}

const styles = StyleSheet.create({
  btnSignupContainer: {
      margin:15,
      flexDirection:'row',
      justifyContent:'space-between'
  },
  container: {
      flex: 1,
      justifyContent: 'space-between',
      margin: 10
  },
  textInput: {
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'grey',
      marginTop: 4,
      padding: 2,
      width: '100%'
  },
  textInputContainer: {
      width: '100%'
  },
  txtHello: {
      textAlign:'center',
      fontWeight:'bold',
      fontSize: 30,
      marginTop:20
  }
});

const LoginScreen: React.FunctionComponent<LoginScreenProps> = (props) => {
  const { navigation } = props;
  const [username, setUsername] = useState<string>('');
return (
      <SafeAreaView style={styles.container}>
          <Text style={styles.txtHello}>Log In</Text>
          <View style={styles.textInputContainer}>
              <TextInput
                  value={username}
                  placeholder="Phone Number"
                  style={styles.textInput}
                  keyboardType='phone-pad'
                  onChangeText={(text) => setUsername(text)}
              />
              <TextInput placeholder="password" secureTextEntry={true} style={styles.textInput} />
          </View>
          <View style={styles.btnSignupContainer}>
              <Button title="Login" onPress={() => navigation.navigate(AppScreens.Welcome, { username })} />
              <Button title="Sign Up" onPress={() => navigation.navigate(AppScreens.Signup)} />
          </View>
      </SafeAreaView>
  );
};

export default LoginScreen;
