import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import WelcomeScreen from '../screens/WelcomeScreen';

import {WelcomeParams} from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

export enum AppScreens {
  Welcome = 'Welcome',
  Login = 'Login',
  Signup = 'Signup'
};
export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  Welcome: WelcomeParams;
};

const AuthStack = createStackNavigator<AuthStackParamList>();
const AuthFlowNavigator: React.FunctionComponent = () => {
    return (
        <AuthStack.Navigator headerMode="none">
            <AuthStack.Screen name={AppScreens.Login} component={LoginScreen} />
            <AuthStack.Screen name={AppScreens.Signup} component={SignupScreen} />
            <AuthStack.Screen name={AppScreens.Welcome} component={WelcomeScreen} />
        </AuthStack.Navigator>
    );
};

export default AuthFlowNavigator;
