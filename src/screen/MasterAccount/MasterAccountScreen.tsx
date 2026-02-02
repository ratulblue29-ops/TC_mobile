import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CopierStackParamList } from '../../navigator/CopierStack';
import { Ellipsis, ChevronLeft } from 'lucide-react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import MasterAccountSettingsModal from '../../components/modal/CopierModal/MasterAccountSettingsModal';

type NavigationProp = NativeStackNavigationProp<
  CopierStackParamList,
  'MasterAccountDetails'
>;
type RoutePropType = RouteProp<CopierStackParamList, 'MasterAccountDetails'>;

const COLORS = {
  white: '#FFFFFF',
  teal: '#00897B',
  orange: '#E67E22',
};

type SlaveAccount = {
  id: number;
  name: string;
  riskType: string;
  riskPercentage: string;
  enabled: boolean;
};

const CustomSwitch = ({
  value,
  onValueChange,
  activeColor = COLORS.teal,
}: {
  value: boolean;
  onValueChange: () => void;
  activeColor?: string;
}) => (
  <TouchableOpacity
    style={[
      styles.switchTrack,
      value && styles.switchTrackActive,
      value && { backgroundColor: activeColor },
    ]}
    onPress={onValueChange}
    activeOpacity={0.8}
  >
    <View style={[styles.switchThumb, value && styles.switchThumbActive]} />
  </TouchableOpacity>
);

const Header = ({
  accountName,
  onBackPress,
  onSettingsPress,
}: {
  accountName: string;
  onBackPress: () => void;
  onSettingsPress: () => void;
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
      <View style={styles.headerIcons}>
        <TouchableOpacity
          style={styles.iconButton}
          activeOpacity={0.7}
          onPress={onSettingsPress}
        >
          <Ellipsis size={24} color="#0B0F20" />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const MasterAccountCard = ({
  accountName,
  enabled,
  onToggle,
  slavesEnabled,
  slavesDisabled,
}: {
  accountName: string;
  enabled: boolean;
  onToggle: () => void;
  slavesEnabled: number;
  slavesDisabled: number;
}) => (
  <View style={styles.masterCardContainer}>
    <Text style={styles.masterTitle}>Master Account</Text>
    <View style={styles.masterCard}>
      <View style={styles.masterCardContent}>
        <View style={styles.masterCardInfo}>
          <Text style={styles.masterCardTitle}>{accountName}</Text>
          <Text style={styles.masterCardStatus}>
            Slaves Enabled: {slavesEnabled} Disabled: {slavesDisabled}
          </Text>
        </View>
        <CustomSwitch value={enabled} onValueChange={onToggle} />
      </View>
    </View>
  </View>
);

const SlaveAccountCard = ({
  account,
  onToggle,
  onCardPress,
}: {
  account: SlaveAccount;
  onToggle: (id: number) => void;
  onCardPress: () => void;
}) => (
  <TouchableOpacity
    style={styles.slaveCard}
    onPress={onCardPress}
    activeOpacity={0.7}
  >
    <View style={styles.slaveCardContent}>
      <View style={styles.slaveCardInfo}>
        <Text style={styles.slaveCardName}>{account.name}</Text>
        <Text style={styles.slaveCardDetails}>
          Risk Type: {account.riskType} Risk: {account.riskPercentage}
        </Text>
      </View>
      <View style={styles.slaveSwitchContainer}>
        <TouchableOpacity
          onPress={e => {
            e.stopPropagation();
            onToggle(account.id);
          }}
          activeOpacity={0.8}
        >
          <CustomSwitch
            value={account.enabled}
            onValueChange={() => onToggle(account.id)}
            activeColor={COLORS.orange}
          />
        </TouchableOpacity>
      </View>
    </View>
  </TouchableOpacity>
);

const EnabledSlaves = ({
  slaves,
  onToggle,
  onSlavePress,
}: {
  slaves: SlaveAccount[];
  onToggle: (id: number) => void;
  onSlavePress: (slave: SlaveAccount) => void;
}) => (
  <View style={styles.slavesContainer}>
    <Text style={styles.subsectionTitle}>
      Enabled Slaves ({slaves.length.toString().padStart(2, '0')})
    </Text>
    <View style={styles.slavesList}>
      {slaves.map(slave => (
        <SlaveAccountCard
          key={slave.id}
          account={slave}
          onToggle={onToggle}
          onCardPress={() => onSlavePress(slave)}
        />
      ))}
    </View>
  </View>
);

const MasterAccountScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RoutePropType>();
  const { accountName } = route.params;

  const [masterEnabled, setMasterEnabled] = useState(true);
  const [isSettingsModalVisible, setIsSettingsModalVisible] = useState(false);
  const [slaves, setSlaves] = useState<SlaveAccount[]>([
    {
      id: 1,
      name: 'Slave Account 1',
      riskType: 'Lot Multiplier',
      riskPercentage: '1%',
      enabled: true,
    },
    {
      id: 2,
      name: 'Slave Account 2',
      riskType: 'Lot Multiplier',
      riskPercentage: '1.5%',
      enabled: true,
    },
    {
      id: 3,
      name: 'Slave Account 3',
      riskType: 'Fixed',
      riskPercentage: '2%',
      enabled: true,
    },
    {
      id: 4,
      name: 'Slave Account 4',
      riskType: 'Variable',
      riskPercentage: '0.5%',
      enabled: true,
    },
    {
      id: 5,
      name: 'Slave Account 5',
      riskType: 'High Leverage',
      riskPercentage: '3%',
      enabled: true,
    },
    {
      id: 6,
      name: 'Slave Account 6',
      riskType: 'Lot Multiplier',
      riskPercentage: '1.2%',
      enabled: true,
    },
    {
      id: 7,
      name: 'Slave Account 7',
      riskType: 'Fixed',
      riskPercentage: '1.8%',
      enabled: true,
    },
  ]);

  const handleMasterToggle = () => {
    setMasterEnabled(prev => !prev);
  };

  const handleSlaveToggle = (id: number) => {
    setSlaves(prev =>
      prev.map(slave =>
        slave.id === id ? { ...slave, enabled: !slave.enabled } : slave,
      ),
    );
  };

  const handleSlavePress = (slave: SlaveAccount) => {
    navigation.navigate('SlaveAccountDetails', {
      accountName: slave.name,
      riskType: slave.riskType,
      riskPercentage: slave.riskPercentage,
    });
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleOpenSettings = () => {
    setIsSettingsModalVisible(true);
  };

  const handleCloseSettings = () => {
    setIsSettingsModalVisible(false);
  };

  const handleAddSlave = () => {
    console.log('Add slave account');
  };

  const handleDeleteMaster = () => {
    console.log('Delete master account');
  };

  const enabledCount = slaves.filter(s => s.enabled).length;
  const disabledCount = slaves.length - enabledCount;

  return (
    <LinearGradient
      colors={['#ffffff', '#F7F8FA', '#F7F8FA']}
      locations={[0, 0.3, 0]}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header
            accountName={accountName}
            onBackPress={handleBackPress}
            onSettingsPress={handleOpenSettings}
          />
          <MasterAccountCard
            accountName={accountName}
            enabled={masterEnabled}
            onToggle={handleMasterToggle}
            slavesEnabled={enabledCount}
            slavesDisabled={disabledCount}
          />
          <View style={styles.content}>
            <Text style={styles.sectionTitle}>Slaves</Text>
            <EnabledSlaves
              slaves={slaves}
              onToggle={handleSlaveToggle}
              onSlavePress={handleSlavePress}
            />
          </View>
        </ScrollView>
      </SafeAreaView>

      <MasterAccountSettingsModal
        visible={isSettingsModalVisible}
        onClose={handleCloseSettings}
        onAddSlave={handleAddSlave}
        onDeleteMaster={handleDeleteMaster}
      />
    </LinearGradient>
  );
};

export default MasterAccountScreen;
