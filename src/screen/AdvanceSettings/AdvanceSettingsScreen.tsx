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
import { ChevronLeft, ChevronDown, Calculator } from 'lucide-react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';

const COLORS = {
  white: '#FFFFFF',
  teal: '#00BFA5',
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
      <Text style={styles.headerTitle}>Advance Settings</Text>
      <View style={styles.headerIcons} />
    </View>
  </View>
);

const CalculateRiskCard = ({ onPress }: { onPress: () => void }) => (
  <TouchableOpacity
    style={styles.calculateRiskCard}
    onPress={onPress}
    activeOpacity={0.7}
  >
    <View style={styles.calculateIconContainer}>
      <Calculator size={24} color={COLORS.teal} />
    </View>
    <View style={styles.calculateTextContainer}>
      <Text style={styles.calculateTitle}>Calculate Risk Settings</Text>
      <Text style={styles.calculateSubtitle}>Description will go here ...</Text>
    </View>
    <ChevronDown size={20} color="#5C5C5C" style={styles.chevronRight} />
  </TouchableOpacity>
);

const ToggleRow = ({
  label,
  value,
  onToggle,
}: {
  label: string;
  value: boolean;
  onToggle: () => void;
}) => (
  <View style={styles.toggleRow}>
    <Text style={styles.toggleLabel}>{label}</Text>
    <CustomSwitch value={value} onValueChange={onToggle} />
  </View>
);

const DropdownField = ({
  placeholder,
  onPress,
}: {
  placeholder: string;
  onPress: () => void;
}) => (
  <TouchableOpacity
    style={styles.inputField}
    onPress={onPress}
    activeOpacity={0.7}
  >
    <Text style={styles.inputPlaceholder}>{placeholder}</Text>
    <ChevronDown size={20} color="#757575" />
  </TouchableOpacity>
);

const InputField = ({
  placeholder,
  value,
  onChangeText,
  keyboardType,
}: {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: 'default' | 'numeric';
}) => (
  <TextInput
    style={styles.inputField}
    placeholder={placeholder}
    placeholderTextColor="#757575"
    value={value}
    onChangeText={onChangeText}
    keyboardType={keyboardType || 'default'}
  />
);

const AdvanceSettingsCard = ({
  forceMinLot,
  forceMaxLot,
  reverseTrade,
  contractAlignment,
  strictClose,
  onToggleMinLot,
  onToggleMaxLot,
  onToggleReverse,
  onToggleContract,
  onToggleStrict,
  customComment,
  magicNumber,
  lotRefiner,
  onCustomCommentChange,
  onMagicNumberChange,
  onLotRefinerChange,
  onCopyTradePress,
  onCopyMagicPress,
  onCustomTypePress,
}: {
  forceMinLot: boolean;
  forceMaxLot: boolean;
  reverseTrade: boolean;
  contractAlignment: boolean;
  strictClose: boolean;
  onToggleMinLot: () => void;
  onToggleMaxLot: () => void;
  onToggleReverse: () => void;
  onToggleContract: () => void;
  onToggleStrict: () => void;
  customComment: string;
  magicNumber: string;
  lotRefiner: string;
  onCustomCommentChange: (text: string) => void;
  onMagicNumberChange: (text: string) => void;
  onLotRefinerChange: (text: string) => void;
  onCopyTradePress: () => void;
  onCopyMagicPress: () => void;
  onCustomTypePress: () => void;
}) => (
  <View style={styles.advanceCard}>
    <Text style={styles.advanceCardLabel}>Advance Settings</Text>

    <View style={styles.toggleSection}>
      <ToggleRow
        label="Force Minimum Lot Size"
        value={forceMinLot}
        onToggle={onToggleMinLot}
      />
      <ToggleRow
        label="Force Maximum Lot Size"
        value={forceMaxLot}
        onToggle={onToggleMaxLot}
      />
      <ToggleRow
        label="Reverse Trade"
        value={reverseTrade}
        onToggle={onToggleReverse}
      />
      <ToggleRow
        label="Contract Alignment"
        value={contractAlignment}
        onToggle={onToggleContract}
      />
      <ToggleRow
        label="Strict Close"
        value={strictClose}
        onToggle={onToggleStrict}
      />
    </View>

    <View style={styles.inputSection}>
      <DropdownField
        placeholder="Copy Trade Account"
        onPress={onCopyTradePress}
      />
      <InputField
        placeholder="Enter Custom Comment"
        value={customComment}
        onChangeText={onCustomCommentChange}
      />
      <DropdownField
        placeholder="Copy Magic Number (MT4 only)"
        onPress={onCopyMagicPress}
      />
      <InputField
        placeholder="Enter Magic Number"
        value={magicNumber}
        onChangeText={onMagicNumberChange}
        keyboardType="numeric"
      />
      <DropdownField
        placeholder="Custom Placed Type"
        onPress={onCustomTypePress}
      />
      <InputField
        placeholder="Lot Refiner"
        value={lotRefiner}
        onChangeText={onLotRefinerChange}
      />
    </View>
  </View>
);

const AdvanceSettingsScreen = () => {
  const navigation = useNavigation();

  const [forceMinLot, setForceMinLot] = useState(true);
  const [forceMaxLot, setForceMaxLot] = useState(true);
  const [reverseTrade, setReverseTrade] = useState(true);
  const [contractAlignment, setContractAlignment] = useState(true);
  const [strictClose, setStrictClose] = useState(true);

  const [customComment, setCustomComment] = useState('');
  const [magicNumber, setMagicNumber] = useState('');
  const [lotRefiner, setLotRefiner] = useState('');

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleCalculateRiskPress = () => {
    console.log('Calculate Risk Settings');
  };

  const handleCopyTradePress = () => {
    console.log('Select Copy Trade Account');
  };

  const handleCopyMagicPress = () => {
    console.log('Select Copy Magic Number');
  };

  const handleCustomTypePress = () => {
    console.log('Select Custom Placed Type');
  };

  const handleSaveSettings = () => {
    console.log('Save Advance Settings');
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

          <View style={styles.content}>
            <CalculateRiskCard onPress={handleCalculateRiskPress} />

            <AdvanceSettingsCard
              forceMinLot={forceMinLot}
              forceMaxLot={forceMaxLot}
              reverseTrade={reverseTrade}
              contractAlignment={contractAlignment}
              strictClose={strictClose}
              onToggleMinLot={() => setForceMinLot(prev => !prev)}
              onToggleMaxLot={() => setForceMaxLot(prev => !prev)}
              onToggleReverse={() => setReverseTrade(prev => !prev)}
              onToggleContract={() => setContractAlignment(prev => !prev)}
              onToggleStrict={() => setStrictClose(prev => !prev)}
              customComment={customComment}
              magicNumber={magicNumber}
              lotRefiner={lotRefiner}
              onCustomCommentChange={setCustomComment}
              onMagicNumberChange={setMagicNumber}
              onLotRefinerChange={setLotRefiner}
              onCopyTradePress={handleCopyTradePress}
              onCopyMagicPress={handleCopyMagicPress}
              onCustomTypePress={handleCustomTypePress}
            />

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.saveButton}
                onPress={handleSaveSettings}
                activeOpacity={0.7}
              >
                <Text style={styles.saveButtonText}>Save Settings</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AdvanceSettingsScreen;
