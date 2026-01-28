import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from './src/screen/splash/SplashScreen';
import WelcomeScreen from './src/screen/welcome/WelcomeScreen';
import LoginMScreen from './src/screen/loginM/LoginMScreen';
import DashboardScreen from './src/screen/Dashboard/DashboardScreen';
import CopierScreen from './src/screen/Copier/CopierScreen';
import AnalyzerScreen from './src/screen/Analyzer/AnalyzerScreen';
import CompareScreen from './src/screen/Compare/CompareScreen';
import SentimentsScreen from './src/screen/Sentiments/SentimentsScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <SplashScreen /> */}
      {/* <WelcomeScreen /> */}
      {/* <LoginMScreen /> */}
      {/* <DashboardScreen /> */}
      {/* <CopierScreen /> */}
      {/* <AnalyzerScreen /> */}
      {/* <CompareScreen /> */}
      <SentimentsScreen />
    </SafeAreaProvider>
  );
};

export default App;