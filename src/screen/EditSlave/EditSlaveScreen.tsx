import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/RootNavigator';
import {
  ChevronLeft,
  ChevronDown,
  ChevronRight,
  Edit,
} from 'lucide-react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'EditSlave'
>;
type RoutePropType = RouteProp<RootStackParamList, 'EditSlave'>;

const COLORS = {
  white: '#FFFFFF',
  teal: '#00897B',
  orange: '#FF9800',
  lightGray: '#F7F8FA',
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
      <Text style={styles.headerTitle}>Edit Slave</Text>
      <View style={styles.headerIcons} />
    </View>
  </View>
);

const CopySettingsSection = ({
  copyFromAccount,
  copyToAccount,
  riskSettings,
  onCopyFromPress,
  onCopyToPress,
  onRiskTypePress,
  onRiskSettingsChange,
}: {
  copyFromAccount: string;
  copyToAccount: string;
  riskSettings: string;
  onCopyFromPress: () => void;
  onCopyToPress: () => void;
  onRiskTypePress: () => void;
  onRiskSettingsChange: (value: string) => void;
}) => (
  <View style={styles.sectionContainer}>
    <Text style={styles.sectionLabel}>Copy Settings</Text>
    <View style={styles.settingsCard}>
      <Text style={styles.cardHeader}>Account Settings</Text>

      <TouchableOpacity
        style={[styles.fieldContainer, styles.fieldContainerStart]}
        onPress={onCopyFromPress}
        activeOpacity={0.7}
      >
        <Text style={styles.fieldLabel}>Copy from Account</Text>
        <View style={styles.fieldValue}>
          <Text style={styles.fieldText}>{copyFromAccount}</Text>
          <ChevronDown size={20} color="#5C5C5C" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.fieldContainer}
        onPress={onCopyToPress}
        activeOpacity={0.7}
      >
        <Text style={styles.fieldLabel}>Copy to Account</Text>
        <View style={styles.fieldValue}>
          <Text style={[styles.fieldText, styles.fieldPlaceholder]}>
            {copyToAccount || 'Select account'}
          </Text>
          <ChevronDown size={20} color="#5C5C5C" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.fieldContainer}
        onPress={onRiskTypePress}
        activeOpacity={0.7}
      >
        <Text style={styles.fieldLabel}>Risk Type</Text>
        <View style={styles.fieldValue}>
          <ChevronDown size={20} color="#5C5C5C" />
        </View>
      </TouchableOpacity>

      <View style={[styles.fieldContainer, styles.fieldContainerLast]}>
        <Text style={styles.fieldLabelSmall}>
          Risk Settings - 100% = 1 to 1 risk
        </Text>
        <View style={styles.riskInputContainer}>
          <TextInput
            style={styles.riskInput}
            value={riskSettings}
            onChangeText={onRiskSettingsChange}
            keyboardType="numeric"
            placeholder="100"
            placeholderTextColor="#BDBDBD"
          />
          <Text style={styles.percentageSymbol}>%</Text>
        </View>
      </View>
    </View>
  </View>
);

const OtherProtectionSection = ({
  copyStopLoss,
  copyTakeProfit,
  copyPendingOrders,
  onToggleStopLoss,
  onToggleTakeProfit,
  onTogglePendingOrders,
}: {
  copyStopLoss: boolean;
  copyTakeProfit: boolean;
  copyPendingOrders: boolean;
  onToggleStopLoss: () => void;
  onToggleTakeProfit: () => void;
  onTogglePendingOrders: () => void;
}) => (
  <View style={styles.sectionContainer}>
    <View style={styles.settingsCard}>
      <Text style={styles.sectionLabel2}>Other Protection</Text>
      <View style={styles.toggleItem}>
        <View style={styles.toggleTextContainer}>
          <Text style={styles.toggleTitle}>Copy Stop Loss</Text>
          <Text style={styles.toggleSubtitle}>
            Description will go here ...
          </Text>
        </View>
        <CustomSwitch value={copyStopLoss} onValueChange={onToggleStopLoss} />
      </View>

      <View style={styles.toggleItem}>
        <View style={styles.toggleTextContainer}>
          <Text style={styles.toggleTitle}>Copy Take Profit</Text>
          <Text style={styles.toggleSubtitle}>
            Description will go here ...
          </Text>
        </View>
        <CustomSwitch
          value={copyTakeProfit}
          onValueChange={onToggleTakeProfit}
        />
      </View>

      <View style={[styles.toggleItem, styles.toggleItemLast]}>
        <View style={styles.toggleTextContainer}>
          <Text style={styles.toggleTitle}>Copy Pending Orders</Text>
          <Text style={styles.toggleSubtitle}>
            Description will go here ...
          </Text>
        </View>
        <CustomSwitch
          value={copyPendingOrders}
          onValueChange={onTogglePendingOrders}
        />
      </View>
    </View>
  </View>
);

const AdvanceSettingsSection = ({ onPress }: { onPress: () => void }) => (
  <View style={styles.sectionContainer}>
    <TouchableOpacity
      style={styles.advanceSettingsCard}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.advanceIconContainer}>
        <Edit size={24} color={COLORS.teal} />
      </View>
      <View style={styles.advanceTextContainer}>
        <Text style={styles.advanceTitle}>Advance Settings</Text>
        <Text style={styles.advanceSubtitle}>Description will go here ...</Text>
      </View>
      <ChevronRight size={20} color="#5C5C5C" />
    </TouchableOpacity>
  </View>
);

const EditSlaveScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RoutePropType>();
  const { accountName, riskType, riskPercentage } = route.params;

  const [copyFromAccount, setCopyFromAccount] = useState('MT5-292592');
  const [copyToAccount, setCopyToAccount] = useState('');
  const [riskSettings, setRiskSettings] = useState('100');
  const [copyStopLoss, setCopyStopLoss] = useState(true);
  const [copyTakeProfit, setCopyTakeProfit] = useState(true);
  const [copyPendingOrders, setCopyPendingOrders] = useState(true);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleCopyFromPress = () => {
    console.log('Select copy from account');
  };

  const handleCopyToPress = () => {
    console.log('Select copy to account');
  };

  const handleRiskTypePress = () => {
    console.log('Select risk type');
  };

  const handleRiskSettingsChange = (value: string) => {
    setRiskSettings(value);
  };

  const handleToggleStopLoss = () => {
    setCopyStopLoss(prev => !prev);
  };

  const handleToggleTakeProfit = () => {
    setCopyTakeProfit(prev => !prev);
  };

  const handleTogglePendingOrders = () => {
    setCopyPendingOrders(prev => !prev);
  };

  const handleAdvanceSettingsPress = () => {
    console.log('Navigate to advance settings');
  };

  const handleSaveSettings = () => {
    console.log('Save settings');
    navigation.goBack();
  };

  return (
    <LinearGradient
      colors={['#ffffff', '#F7F8FA', '#F7F8FA']}
      locations={[0, 0.3, 0]}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header onBackPress={handleBackPress} />

          <CopySettingsSection
            copyFromAccount={copyFromAccount}
            copyToAccount={copyToAccount}
            riskSettings={riskSettings}
            onCopyFromPress={handleCopyFromPress}
            onCopyToPress={handleCopyToPress}
            onRiskTypePress={handleRiskTypePress}
            onRiskSettingsChange={handleRiskSettingsChange}
          />

          <OtherProtectionSection
            copyStopLoss={copyStopLoss}
            copyTakeProfit={copyTakeProfit}
            copyPendingOrders={copyPendingOrders}
            onToggleStopLoss={handleToggleStopLoss}
            onToggleTakeProfit={handleToggleTakeProfit}
            onTogglePendingOrders={handleTogglePendingOrders}
          />

          <AdvanceSettingsSection onPress={handleAdvanceSettingsPress} />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.saveButton}
              onPress={handleSaveSettings}
              activeOpacity={0.7}
            >
              <Text style={styles.saveButtonText}>Save Settings</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default EditSlaveScreen;
