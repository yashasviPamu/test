import * as React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList, AppScreens } from '../navigation/index';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';

type WelcomeScreenNavigationProps = StackNavigationProp<AuthStackParamList, AppScreens.Welcome>;

export type WelcomeParams = {
  username: string;
};

interface WelcomeScreenProps {
  route: { params: WelcomeParams };
  navigation: WelcomeScreenNavigationProps;
}

const styles = StyleSheet.create({
  txtUsername: {
    fontSize: 25,
    color: 'grey'
  },
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 10
  },
  btnLoginContainer: {
    alignSelf: 'center'
  },
  welcome: {
      fontSize: 30
  },
  welcomeContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      width: '100%'
  }
});

const WelcomeScreen: React.FunctionComponent<WelcomeScreenProps> = (props) => {
    const { navigation, route } = props;
    const { params } = route;
    const { username } = params;
return (
      <SafeAreaView style={styles.container}>
          <View style={styles.welcomeContainer}>
              <Text style={styles.welcome}>Welcome</Text>
              <Text style={styles.txtUsername}>{username}</Text>
          </View>
          <View style={styles.btnLoginContainer}>
                <Text>have an account?</Text>
                <Button title="Login" onPress={() => navigation.pop()} />
          </View>
      </SafeAreaView>
  );
};
export default WelcomeScreen;