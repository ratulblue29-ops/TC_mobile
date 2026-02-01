import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Settings, ChevronDown, ChevronLeft, Bell } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';

const COLORS = {
  primary: '#00897B',
  secondary: '#0B0F20',
  textSecondary: '#9E9E9E',
  gradientStart: '#FFFFFF',
  gradientEnd: '#F7F8FA',
};

type ToggleItem = {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
};

type PercentageItem = {
  id: string;
  label: string;
  description: string;
  percentage: string;
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
      <Text style={styles.headerTitle}>Equity Protector</Text>
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

const ToggleItemCard = ({
  item,
  onToggle,
  showSeparator,
}: {
  item: ToggleItem;
  onToggle: (id: string) => void;
  showSeparator?: boolean;
}) => (
  <>
    <View style={styles.itemRow}>
      <View style={styles.iconWrapper}>
        <Bell size={20} color={COLORS.primary} />
      </View>
      <View style={styles.itemContent}>
        <Text style={styles.itemLabel}>{item.label}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
      <CustomSwitch
        value={item.enabled}
        onValueChange={() => onToggle(item.id)}
      />
    </View>
    {showSeparator && <View style={styles.separator} />}
  </>
);

const PercentageItemCard = ({
  item,
  showSeparator,
}: {
  item: PercentageItem;
  showSeparator?: boolean;
}) => (
  <>
    <View style={styles.itemRow}>
      <View style={styles.iconWrapper}>
        <Bell size={20} color={COLORS.primary} />
      </View>
      <View style={styles.itemContent}>
        <Text style={styles.itemLabel}>{item.label}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
      <Text style={styles.percentageValue}>{item.percentage}</Text>
    </View>
    {showSeparator && <View style={styles.separator} />}
  </>
);

const SectionCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <View style={styles.sectionCard}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const EquityProtectorScreen = () => {
  const navigation = useNavigation();

  const [equityProtection, setEquityProtection] = useState<ToggleItem[]>([
    {
      id: '1',
      label: 'Notification Alert',
      description: 'Description will go here ...',
      enabled: true,
    },
    {
      id: '2',
      label: 'Disable Copy Trading',
      description: 'Description will go here ...',
      enabled: true,
    },
    {
      id: '3',
      label: 'Close Open Trades',
      description: 'Description will go here ...',
      enabled: true,
    },
  ]);

  const stopLossProtection: PercentageItem[] = [
    {
      id: '1',
      label: 'Drawdown Protection',
      description: 'Description will go here ...',
      percentage: '0.0%',
    },
    {
      id: '2',
      label: 'Disable Copy Trading',
      description: 'Description will go here ...',
      percentage: '0.0%',
    },
    {
      id: '3',
      label: 'Close Open Trades',
      description: 'Description will go here ...',
      percentage: '0.0%',
    },
  ];

  const takeProfitProtection: PercentageItem[] = [
    {
      id: '1',
      label: '% Profit Protection',
      description: 'Description will go here ...',
      percentage: '0.0%',
    },
    {
      id: '2',
      label: '% Value Profit Protection',
      description: 'Description will go here ...',
      percentage: '0.0%',
    },
    {
      id: '3',
      label: '% Absolute Maximum',
      description: 'Description will go here ...',
      percentage: '0.0%',
    },
  ];

  const handleToggle = (id: string) => {
    setEquityProtection(prev =>
      prev.map(item =>
        item.id === id ? { ...item, enabled: !item.enabled } : item,
      ),
    );
  };

  const handleBackPress = () => {
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

          <View style={styles.content}>
            <SectionCard title="Equity Protection">
              {equityProtection.map((item, index) => (
                <ToggleItemCard
                  key={item.id}
                  item={item}
                  onToggle={handleToggle}
                  showSeparator={index < equityProtection.length - 1}
                />
              ))}
            </SectionCard>

            <SectionCard title="Stop Lose Protection">
              {stopLossProtection.map((item, index) => (
                <PercentageItemCard
                  key={item.id}
                  item={item}
                  showSeparator={index < stopLossProtection.length - 1}
                />
              ))}
            </SectionCard>

            <SectionCard title="Take Profit Protectuin">
              {takeProfitProtection.map((item, index) => (
                <PercentageItemCard
                  key={item.id}
                  item={item}
                  showSeparator={index < takeProfitProtection.length - 1}
                />
              ))}
            </SectionCard>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default EquityProtectorScreen;
