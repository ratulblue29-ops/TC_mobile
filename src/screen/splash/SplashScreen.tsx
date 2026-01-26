import { Image, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';

const SplashScreen = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigation logic will go here
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../assets/images/logo.4f2f714e 1.png')}
      />
      <View style={styles.text_wrapper}>
        <Text style={styles.tagline}>Empower. Analyze. Connect</Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;