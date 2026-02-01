import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Settings,
  ChevronDown,
  ChevronLeft,
  ChevronUp,
} from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';

const COLORS = {
  primary: '#00897B',
  secondary: '#0B0F20',
  gradientStart: '#FFFFFF',
  gradientEnd: '#F7F8FA',
};

type Symbol = {
  id: string;
  name: string;
  enabled: boolean;
};

type SymbolGroup = {
  id: string;
  name: string;
  symbols: Symbol[];
  expanded: boolean;
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

const SymbolRow = ({
  symbol,
  onToggle,
}: {
  symbol: Symbol;
  onToggle: (id: string) => void;
}) => (
  <>
    <View style={styles.symbolRow}>
      <Text style={styles.symbolName}>{symbol.name}</Text>
      <CustomSwitch
        value={symbol.enabled}
        onValueChange={() => onToggle(symbol.id)}
      />
    </View>
  </>
);

const SymbolGroupCard = ({
  group,
  onToggleExpand,
  onToggleSymbol,
}: {
  group: SymbolGroup;
  onToggleExpand: (id: string) => void;
  onToggleSymbol: (groupId: string, symbolId: string) => void;
}) => {
  const enabledCount = group.symbols.filter(s => s.enabled).length;

  return (
    <View style={styles.groupCard}>
      <TouchableOpacity
        style={styles.groupHeader}
        onPress={() => onToggleExpand(group.id)}
        activeOpacity={0.7}
      >
        <Text style={styles.groupName}>{group.name}</Text>
        <View style={styles.groupHeaderRight}>
          <Text style={styles.enabledCount}>{enabledCount} Enabled</Text>
          {group.expanded ? (
            <ChevronUp size={20} color={COLORS.secondary} />
          ) : (
            <ChevronDown size={20} color={COLORS.secondary} />
          )}
        </View>
      </TouchableOpacity>

      <View style={styles.separator} />

      {group.expanded && (
        <View style={styles.symbolList}>
          {group.symbols.map((symbol, index) => (
            <SymbolRow
              key={symbol.id}
              symbol={symbol}
              onToggle={symbolId => onToggleSymbol(group.id, symbolId)}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const TradingSymbolsScreen = () => {
  const navigation = useNavigation();

  const [symbolGroups, setSymbolGroups] = useState<SymbolGroup[]>([
    {
      id: '1',
      name: 'Forex',
      expanded: true,
      symbols: [
        { id: '1-1', name: 'EURUSD', enabled: true },
        { id: '1-2', name: 'GBPUSD', enabled: true },
        { id: '1-3', name: 'USDCHF', enabled: true },
        { id: '1-4', name: 'USDJPY', enabled: true },
        { id: '1-5', name: 'AUDUSD', enabled: true },
        { id: '1-6', name: 'USDCAD', enabled: false },
      ],
    },
    {
      id: '2',
      name: 'Group 2',
      expanded: false,
      symbols: [
        { id: '2-1', name: 'XAUUSD', enabled: true },
        { id: '2-2', name: 'XAGUSD', enabled: true },
        { id: '2-3', name: 'BTCUSD', enabled: true },
      ],
    },
    {
      id: '3',
      name: 'Group 3',
      expanded: false,
      symbols: [
        { id: '3-1', name: 'US30', enabled: true },
        { id: '3-2', name: 'US100', enabled: true },
        { id: '3-3', name: 'SPX500', enabled: true },
      ],
    },
  ]);

  const handleToggleExpand = (groupId: string) => {
    setSymbolGroups(prev =>
      prev.map(group =>
        group.id === groupId ? { ...group, expanded: !group.expanded } : group,
      ),
    );
  };

  const handleToggleSymbol = (groupId: string, symbolId: string) => {
    setSymbolGroups(prev =>
      prev.map(group =>
        group.id === groupId
          ? {
              ...group,
              symbols: group.symbols.map(symbol =>
                symbol.id === symbolId
                  ? { ...symbol, enabled: !symbol.enabled }
                  : symbol,
              ),
            }
          : group,
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
            {symbolGroups.map(group => (
              <SymbolGroupCard
                key={group.id}
                group={group}
                onToggleExpand={handleToggleExpand}
                onToggleSymbol={handleToggleSymbol}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default TradingSymbolsScreen;
