import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import SplashScreen from '../screen/splash/SplashScreen';
import WelcomeScreen from '../screen/welcome/WelcomeScreen';
import LoginMScreen from '../screen/loginM/LoginMScreen';
import BottomTabs from './Buttomtabs';

export type RootStackParamList = {
  Splash: undefined;
  Welcome: undefined;
  LoginM: undefined;
  BottomTabs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator 
      initialRouteName="Splash" 
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="LoginM" component={LoginMScreen} />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default RootNavigator;