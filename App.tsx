import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from './src/screen/splash/SplashScreen';
import WelcomeScreen from './src/screen/welcome/WelcomeScreen';
import LoginMScreen from './src/screen/loginM/LoginMScreen';
import DashboardScreen from './src/screen/Dashboard/DashboardScreen';
import CopierScreen from './src/screen/Copier/CopierScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <SplashScreen /> */}
      {/* <WelcomeScreen /> */}
      {/* <LoginMScreen /> */}
      {/* <DashboardScreen /> */}
      <CopierScreen />
    </SafeAreaProvider>
  );
};

export default App;