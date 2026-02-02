import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CopierScreen from '../screen/Copier/CopierScreen';
import MasterAccountScreen from '../screen/MasterAccount/MasterAccountScreen';

export type CopierStackParamList = {
  CopierHome: undefined;
  MasterAccountDetails: {
    accountId: number;
    accountName: string;
  };
};

const Stack = createNativeStackNavigator<CopierStackParamList>();

const CopierStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CopierHome" component={CopierScreen} />
      <Stack.Screen
        name="MasterAccountDetails"
        component={MasterAccountScreen}
      />
    </Stack.Navigator>
  );
};

export default CopierStack;
