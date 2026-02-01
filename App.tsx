import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './src/navigator/RootNavigator';
import EquityProtectorScreen from './src/screen/EquityProtector/EquityProtectorScreen';
import TradingSymbolsScreen from './src/screen/TradingSymbols/TradingSymbolsScreen';
import AddAccountScreen from './src/screen/AddAccount/AddAccountScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigator />
        {/* <EquityProtectorScreen /> */}
        {/* <TradingSymbolsScreen /> */}
        {/* <AddAccountScreen /> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
