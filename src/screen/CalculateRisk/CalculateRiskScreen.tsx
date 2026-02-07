import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/RootNavigator';
import { ChevronLeft, Ellipsis } from 'lucide-react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import RiskSettings from '../../components/modal/CopierModal/RiskSettingsModal';

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CalculateRisk'
>;
type TabType = 'Based' | 'Lot Based' | 'Fixed Lot';

const COLORS = {
  white: '#FFFFFF',
  teal: '#00897B',
  orange: '#E67E22',
};

const Header = ({ onBackPress }: { onBackPress: () => void }) => (
  <View style={styles.headerSection}>
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={onBackPress}
        activeOpacity={0.7}
      >
        <ChevronLeft size={24} color="#0B0F20" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Calculate Risk</Text>
      <View style={styles.headerIcons}>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
          <Ellipsis size={24} color="#0B0F20" />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const TabNavigation = ({
  activeTab,
  onTabChange,
}: {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}) => (
  <View style={styles.tabContainer}>
    <View style={styles.tabPill}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Based' && styles.tabActive]}
        onPress={() => onTabChange('Based')}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === 'Based' && styles.tabTextActive,
          ]}
        >
          Based
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Lot Based' && styles.tabActive]}
        onPress={() => onTabChange('Lot Based')}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === 'Lot Based' && styles.tabTextActive,
          ]}
        >
          Lot Based
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Fixed Lot' && styles.tabActive]}
        onPress={() => onTabChange('Fixed Lot')}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === 'Fixed Lot' && styles.tabTextActive,
          ]}
        >
          Fixed Lot
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

const InfoBanner = () => (
  <View style={styles.infoBanner}>
    <Text style={styles.infoBannerText}>
      When you place a trade on your master account, do you calculate your
      position sizing using a % of the account balance, for example, 1% risk, or
      do you trade based on lot sizes, for example, 0.5 lots per trade?
    </Text>
  </View>
);

const InputFields = ({
  masterRisk,
  slaveRisk,
  onMasterRiskChange,
  onSlaveRiskChange,
}: {
  masterRisk: string;
  slaveRisk: string;
  onMasterRiskChange: (text: string) => void;
  onSlaveRiskChange: (text: string) => void;
}) => (
  <View style={styles.inputCard}>
    <View style={styles.inputFieldContainer}>
      <TextInput
        style={styles.input}
        value={masterRisk}
        onChangeText={onMasterRiskChange}
        placeholder="Master trade Risk"
        placeholderTextColor="#7E8A93"
        keyboardType="numeric"
      />
    </View>
    <View style={styles.inputDivider} />
    <View style={[styles.inputFieldContainer, styles.inputFieldContainerLast]}>
      <TextInput
        style={styles.input}
        value={slaveRisk}
        onChangeText={onSlaveRiskChange}
        placeholder="Slave Trade Risk"
        placeholderTextColor="#7E8A93"
        keyboardType="numeric"
      />
    </View>
  </View>
);

const CalculateButton = ({ onPress }: { onPress: () => void }) => (
  <TouchableOpacity
    style={styles.calculateButton}
    onPress={onPress}
    activeOpacity={0.7}
  >
    <Text style={styles.calculateButtonText}>Calculate</Text>
  </TouchableOpacity>
);

const ApplyButton = ({ onPress }: { onPress: () => void }) => (
  <View style={styles.applyButtonContainer}>
    <TouchableOpacity
      style={styles.applyButton}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.applyButtonText}>Apply Risk Settings</Text>
    </TouchableOpacity>
  </View>
);

const CalculateRiskScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [activeTab, setActiveTab] = useState<TabType>('Based');
  const [masterRisk, setMasterRisk] = useState('');
  const [slaveRisk, setSlaveRisk] = useState('');
  const [isRiskSettingsModalVisible, setIsRiskSettingsModalVisible] =
    useState(false);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleCalculate = () => {
    console.log('Calculate:', { masterRisk, slaveRisk });
  };

  const handleApplySettings = () => {
    setIsRiskSettingsModalVisible(true);
  };

  const handleCloseRiskSettingsModal = () => {
    setIsRiskSettingsModalVisible(false);
  };

  const handleConfirmApply = () => {
    console.log('Apply Risk Settings:', { masterRisk, slaveRisk, activeTab });
    setIsRiskSettingsModalVisible(false);
    navigation.goBack();
  };

  return (
    <LinearGradient
      colors={['#ffffff', '#F7F8FA', '#F7F8FA']}
      locations={[0, 0.3, 0]}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <Header onBackPress={handleBackPress} />
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
          <View style={styles.container2}>
            <InfoBanner />
            <InputFields
              masterRisk={masterRisk}
              slaveRisk={slaveRisk}
              onMasterRiskChange={setMasterRisk}
              onSlaveRiskChange={setSlaveRisk}
            />
            <CalculateButton onPress={handleCalculate} />
          </View>
        </ScrollView>
        <ApplyButton onPress={handleApplySettings} />
      </SafeAreaView>

      <RiskSettings
        visible={isRiskSettingsModalVisible}
        onClose={handleCloseRiskSettingsModal}
        onApply={handleConfirmApply}
        recommendedSetting="100%"
      />
    </LinearGradient>
  );
};

export default CalculateRiskScreen;
