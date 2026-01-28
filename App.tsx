import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from './src/screen/splash/SplashScreen';
import WelcomeScreen from './src/screen/welcome/WelcomeScreen';
import LoginMScreen from './src/screen/loginM/LoginMScreen';
import DashboardScreen from './src/screen/Dashboard/DashboardScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <SplashScreen /> */}
      <WelcomeScreen />
      {/* <LoginMScreen /> */}
      {/* <DashboardScreen /> */}
    </SafeAreaProvider>
  );
};

export default App;