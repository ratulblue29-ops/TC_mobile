import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../screen/Dashboard/DashboardScreen';
import AccountsScreen from '../screen/Accounts/AccountsScreen';

export type DashboardStackParamList = {
  DashboardHome: undefined;
  AccountDetails: {
    accountId: number;
    accountNumber: string;
  };
};

const Stack = createNativeStackNavigator<DashboardStackParamList>();

const DashboardStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DashboardHome" component={DashboardScreen} />
      <Stack.Screen name="AccountDetails" component={AccountsScreen} />
    </Stack.Navigator>
  );
};

export default DashboardStack;
