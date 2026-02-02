import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './src/navigator/RootNavigator';
import MasterAccountScreen from './src/screen/MasterAccount/MasterAccountScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* <RootNavigator /> */}
        <MasterAccountScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
