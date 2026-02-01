import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Settings, ChevronDown, ChevronLeft } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';

const COLORS = {
  primary: '#00897B',
  secondary: '#0B0F20',
  gradientStart: '#FFFFFF',
  gradientEnd: '#F7F8FA',
};

const Header = ({
  onBackPress,
  onAccountPress,
  onSettingsPress,
}: {
  onBackPress: () => void;
  onAccountPress: () => void;
  onSettingsPress: () => void;
}) => (
  <View style={styles.headerSection}>
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={onBackPress}
        activeOpacity={0.7}
      >
        <ChevronLeft size={24} color={COLORS.secondary} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Trading Symbols</Text>
      <View style={styles.headerSpacer} />
    </View>

    <View style={styles.accountSection}>
      <View>
        <Text style={styles.accountLabel}>Account</Text>
        <Text style={styles.accountNumber}>MT5-104392</Text>
      </View>
      <View style={styles.accountActions}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={onAccountPress}
          activeOpacity={0.7}
        >
          <ChevronDown size={24} color={COLORS.secondary} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={onSettingsPress}
          activeOpacity={0.7}
        >
          <Settings size={24} color={COLORS.secondary} />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const TradingSymbolsScreen = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    // Navigate back to the previous screen
    navigation.goBack();
  };

  const handleAccountPress = () => {
    console.log('Account dropdown pressed');
  };

  const handleSettingsPress = () => {
    console.log('Settings pressed');
  };

  return (
    <LinearGradient
      colors={[COLORS.gradientStart, COLORS.gradientEnd, COLORS.gradientEnd]}
      locations={[0, 0.3, 0]}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header
            onBackPress={handleBackPress}
            onAccountPress={handleAccountPress}
            onSettingsPress={handleSettingsPress}
          />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default TradingSymbolsScreen;
