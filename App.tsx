import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './src/navigator/RootNavigator';
import MapSymbolsScreen from './src/screen/MapSymbols/MapSymbolsScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* <RootNavigator /> */}
        <MapSymbolsScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
