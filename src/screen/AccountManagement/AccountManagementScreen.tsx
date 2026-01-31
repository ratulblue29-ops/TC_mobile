import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Settings, ChevronDown, ChevronLeft } from 'lucide-react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';

const COLORS = {
  primary: '#00897B',
  primaryLight: '#27A69A',
  secondary: '#0B0F20',
  background: '#F7F8FA',
  white: '#FFFFFF',
  textMain: '#0B0F20',
  textSecondary: '#4E5D66',
  success: '#4CAF50',
  danger: '#C54545',
  lightGreen: '#E8F5E9',
  lightRed: '#FFEBEE',
  gradientStart: '#FFFFFF',
  gradientEnd: '#F7F8FA',
  chartBg: '#0B0F20',
};

const Header = () => (
  <View style={styles.headerSection}>
    <View style={styles.header}>
      <View style={styles.headerIcons}>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
          <ChevronLeft size={24} color={COLORS.secondary} />
        </TouchableOpacity>
      </View>
      <Text style={styles.headerTitle}>Account Management</Text>
      <Text />
    </View>

    <View style={styles.accountSection}>
      <View>
        <Text style={styles.accountLabel}>Account</Text>
        <Text style={styles.accountNumber}>MT5-104392</Text>
      </View>
      <View style={styles.headerIcons}>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
          <ChevronDown size={24} color={COLORS.secondary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
          <Settings size={24} color={COLORS.secondary} />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const AccountManagementScreen = () => {
  return (
    <LinearGradient
      colors={[COLORS.gradientStart, COLORS.gradientEnd, COLORS.gradientEnd]}
      locations={[0, 0.3, 0]}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AccountManagementScreen;
