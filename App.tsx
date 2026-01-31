import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './src/navigator/RootNavigator';
import AccountsScreen from './src/screen/Accounts/AccountsScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <NavigationContainer>
        <RootNavigator />
      </NavigationContainer> */}
      <AccountsScreen />
    </SafeAreaProvider>
  );
};

export default App;
