import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './src/navigator/RootNavigator';
import CalculateRisk from './src/screen/CalculateRisk/CalculateRiskScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* <RootNavigator /> */}
        <CalculateRisk />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
