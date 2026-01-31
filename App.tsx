import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './src/navigator/RootNavigator';
import AccountManagementScreen from './src/screen/AccountManagement/AccountManagementScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigator />
        {/* <AccountManagementScreen /> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
