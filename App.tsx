import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from './src/screen/splash/SplashScreen';
import WelcomeScreen from './src/screen/welcome/WelcomeScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <SplashScreen /> */}
      <WelcomeScreen />
    </SafeAreaProvider>
  );
};

export default App;