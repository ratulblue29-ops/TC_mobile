import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './src/navigator/RootNavigator';
import AdvanceSettingsScreen from './src/screen/AdvanceSettings/AdvanceSettingsScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigator />
        {/* <AdvanceSettingsScreen /> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
