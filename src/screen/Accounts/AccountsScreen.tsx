import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Settings, Menu, ChevronDown, Plus } from 'lucide-react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';

const COLORS = {
  primary: '#00897B',
  primaryLight: '#27A69A',
  secondary: '#0B0F20',
  background: '#F7F8FA',
  white: '#FFFFFF',
  cardBg: '#FFFFFF',
  textMain: '#0B0F20',
  textSecondary: '#2C3440',
  textMuted: '#4E5D66',
  success: '#00897B',
  warning: '#C3881B',
  danger: '#C54545',
  border: '#00000023',
  gradientStart: '#FFFFFF',
  gradientEnd: '#F7F8FA',
  chartBg: '#0B0F20',
  chartGrid: '#1F2937',
  balanceChange: '#4DB6AC',
  copierFollowers: '#E67E22',
  upgradeCard: '#E0F2F1',
  sectionChevronBg: '#EEF0F4',
};

const Header = () => (
  <View style={styles.headerSection}>
    <View style={styles.header}>
      <Image
        source={require('../../../assets/images/logo_icon.png')}
        style={styles.logoIcon}
      />
      <Text style={styles.headerTitle}>Accounts</Text>
      <View style={styles.headerIcons}>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
          <Menu size={24} color={COLORS.secondary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
          <Plus size={24} color={COLORS.secondary} />
        </TouchableOpacity>
      </View>
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

const AccountsScreen = () => {
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

export default AccountsScreen;
