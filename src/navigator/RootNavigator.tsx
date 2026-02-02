import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import SplashScreen from '../screen/splash/SplashScreen';
import WelcomeScreen from '../screen/welcome/WelcomeScreen';
import LoginMScreen from '../screen/loginM/LoginMScreen';
import BottomTabs from './Buttomtabs';
import AccountManagementScreen from '../screen/AccountManagement/AccountManagementScreen';
import AddAccountScreen from '../screen/AddAccount/AddAccountScreen';
import EquityProtectorScreen from '../screen/EquityProtector/EquityProtectorScreen';
import TradingSymbolsScreen from '../screen/TradingSymbols/TradingSymbolsScreen';
import EditSlaveScreen from '../screen/EditSlave/EditSlaveScreen';

export type RootStackParamList = {
  Splash: undefined;
  Welcome: undefined;
  LoginM: undefined;
  BottomTabs: undefined;
  AccountManagement: undefined;
  AddAccount: undefined;
  EquityProtector: undefined;
  TradingSymbols: undefined;
  EditSlave: {
    accountName: string;
    riskType: string;
    riskPercentage: string;
  };
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
      <Stack.Screen
        name="AccountManagement"
        component={AccountManagementScreen}
      />
      <Stack.Screen name="AddAccount" component={AddAccountScreen} />
      <Stack.Screen name="EquityProtector" component={EquityProtectorScreen} />
      <Stack.Screen name="TradingSymbols" component={TradingSymbolsScreen} />
      <Stack.Screen name="EditSlave" component={EditSlaveScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
