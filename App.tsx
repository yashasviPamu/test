import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AuthFlowNavigator from './navigation/index';

export default function App() {
    return (
        <NavigationContainer>
            <AuthFlowNavigator />
        </NavigationContainer>
    );
}