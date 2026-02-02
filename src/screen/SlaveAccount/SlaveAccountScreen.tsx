import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CopierStackParamList } from '../../navigator/CopierStack';
import {
  ChevronLeft,
  ChevronRight,
  Edit,
  Link,
  Trash2,
} from 'lucide-react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';

type NavigationProp = NativeStackNavigationProp<
  CopierStackParamList,
  'SlaveAccountDetails'
>;
type RoutePropType = RouteProp<CopierStackParamList, 'SlaveAccountDetails'>;

const COLORS = {
  white: '#FFFFFF',
  teal: '#00BCD4',
  orange: '#FF9800',
  red: '#F44336',
  peach: '#FFF4E6',
};

const CustomSwitch = ({
  value,
  onValueChange,
}: {
  value: boolean;
  onValueChange: () => void;
}) => (
  <TouchableOpacity
    style={[styles.switchTrack, value && styles.switchTrackActive]}
    onPress={onValueChange}
    activeOpacity={0.8}
  >
    <View style={[styles.switchThumb, value && styles.switchThumbActive]} />
  </TouchableOpacity>
);

const Header = ({
  accountName,
  onBackPress,
}: {
  accountName: string;
  onBackPress: () => void;
}) => (
  <View style={styles.headerSection}>
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={onBackPress}
        activeOpacity={0.7}
      >
        <ChevronLeft size={24} color="#0B0F20" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{accountName}</Text>
      <View style={styles.headerIcons} />
    </View>
  </View>
);

const SlaveAccountCard = ({
  accountName,
  riskType,
  riskPercentage,
  enabled,
  onToggle,
}: {
  accountName: string;
  riskType: string;
  riskPercentage: string;
  enabled: boolean;
  onToggle: () => void;
}) => (
  <View style={styles.slaveCardContainer}>
    <Text style={styles.slaveTitle}>Slave Account</Text>
    <View style={styles.slaveCard}>
      <View style={styles.slaveCardContent}>
        <View style={styles.slaveCardInfo}>
          <Text style={styles.slaveCardName}>{accountName}</Text>
          <Text style={styles.slaveCardDetails}>
            <Text style={styles.slaveCardLabel}>Risk Type: </Text>
            <Text style={styles.slaveCardValue}>{riskType}</Text>
          </Text>
          <Text style={styles.slaveCardDetails}>
            <Text style={styles.slaveCardLabel}>Risk: </Text>
            <Text style={styles.slaveCardValue}>{riskPercentage}</Text>
          </Text>
        </View>
        <View style={styles.slaveSwitchContainer}>
          <CustomSwitch value={enabled} onValueChange={onToggle} />
        </View>
      </View>
    </View>
  </View>
);

const SettingsMenuItem = ({
  icon,
  title,
  subtitle,
  onPress,
  isDestructive = false,
  isLast = false,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  onPress: () => void;
  isDestructive?: boolean;
  isLast?: boolean;
}) => (
  <TouchableOpacity
    style={[styles.menuItem, isLast && styles.menuItemLast]}
    onPress={onPress}
    activeOpacity={0.7}
  >
    <View style={styles.menuIconContainer}>{icon}</View>
    <View style={styles.menuTextContainer}>
      <Text
        style={[styles.menuTitle, isDestructive && styles.menuTitleDestructive]}
      >
        {title}
      </Text>
      <Text style={styles.menuSubtitle}>{subtitle}</Text>
    </View>
    <ChevronRight size={20} color="#9CA3AF" />
  </TouchableOpacity>
);

const SettingsSection = ({
  onEditPress,
  onMapSymbolsPress,
  onOverridePress,
  onTradingHoursPress,
  onDeletePress,
}: {
  onEditPress: () => void;
  onMapSymbolsPress: () => void;
  onOverridePress: () => void;
  onTradingHoursPress: () => void;
  onDeletePress: () => void;
}) => (
  <View style={styles.settingsContainer}>
    <Text style={styles.sectionTitle}>Settings</Text>
    <View style={styles.settingsCard}>
      <Text style={styles.settingsHeader}>Configuration</Text>
      <View style={styles.menuList}>
        <SettingsMenuItem
          icon={<Edit size={24} color={COLORS.teal} />}
          title="Edit Slave"
          subtitle="Description will go here ..."
          onPress={onEditPress}
        />
        <SettingsMenuItem
          icon={<Link size={24} color={COLORS.teal} />}
          title="Map Symbols"
          subtitle="Description will go here ..."
          onPress={onMapSymbolsPress}
        />
        <SettingsMenuItem
          icon={<Link size={24} color={COLORS.teal} />}
          title="Override"
          subtitle="Description will go here ..."
          onPress={onOverridePress}
        />
        <SettingsMenuItem
          icon={<Link size={24} color={COLORS.teal} />}
          title="Trading Hours"
          subtitle="Description will go here ..."
          onPress={onTradingHoursPress}
        />
        <SettingsMenuItem
          icon={<Trash2 size={24} color={COLORS.red} />}
          title="Delete Slave Account"
          subtitle="Description will go here ..."
          onPress={onDeletePress}
          isDestructive
          isLast
        />
      </View>
    </View>
  </View>
);

const SlaveAccountScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RoutePropType>();
  const { accountName, riskType, riskPercentage } = route.params;

  const [enabled, setEnabled] = useState(true);

  const handleToggle = () => {
    setEnabled(prev => !prev);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleEditPress = () => {
    console.log('Edit slave account');
  };

  const handleMapSymbolsPress = () => {
    console.log('Map symbols');
  };

  const handleOverridePress = () => {
    console.log('Override settings');
  };

  const handleTradingHoursPress = () => {
    console.log('Trading hours');
  };

  const handleDeletePress = () => {
    console.log('Delete slave account');
  };

  return (
    <LinearGradient
      colors={['#ffffff', '#F7F8FA', '#F7F8FA']}
      locations={[0, 0.3, 0]}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header accountName={accountName} onBackPress={handleBackPress} />
          <SlaveAccountCard
            accountName={accountName}
            riskType={riskType}
            riskPercentage={riskPercentage}
            enabled={enabled}
            onToggle={handleToggle}
          />
          <SettingsSection
            onEditPress={handleEditPress}
            onMapSymbolsPress={handleMapSymbolsPress}
            onOverridePress={handleOverridePress}
            onTradingHoursPress={handleTradingHoursPress}
            onDeletePress={handleDeletePress}
          />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SlaveAccountScreen;
