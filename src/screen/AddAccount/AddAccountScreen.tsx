import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, ChevronDown } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';

const COLORS = {
  primary: '#00897B',
  secondary: '#0B0F20',
  gradientStart: '#FFFFFF',
  gradientEnd: '#F7F8FA',
};

type FormData = {
  accountName: string;
  serverType: string;
  broker: string;
  server: string;
  accountId: string;
  password: string;
  rePassword: string;
};

const Header = ({ onBackPress }: { onBackPress: () => void }) => (
  <View style={styles.headerSection}>
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={onBackPress}
        activeOpacity={0.7}
      >
        <ChevronLeft size={24} color={COLORS.secondary} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Add Account</Text>
      <View style={styles.headerSpacer} />
    </View>
  </View>
);

const InputField = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  editable = true,
  showLabel = true,
  isLast = false,
  style,
}: {
  label: string;
  value: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  editable?: boolean;
  showLabel?: boolean;
  isLast?: boolean;
  style?: object;
}) => (
  <View style={[styles.inputContainer, isLast && styles.inputContainerLast]}>
    {showLabel && <Text style={styles.inputLabel}>{label}</Text>}
    <TextInput
      style={[styles.inputField, !editable && styles.inputFieldDisabled, style]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor="#9E9E9E"
      secureTextEntry={secureTextEntry}
      editable={editable}
    />
  </View>
);

const DropdownField = ({
  label,
  value,
  onPress,
  showLabel = true,
  style,
}: {
  label: string;
  value: string;
  onPress: () => void;
  showLabel?: boolean;
  style?: object;
}) => (
  <TouchableOpacity
    style={styles.dropdownContainer}
    onPress={onPress}
    activeOpacity={0.7}
  >
    {showLabel && <Text style={styles.inputLabel}>{label}</Text>}
    <View style={styles.dropdownContent}>
      {value ? (
        <Text style={[styles.dropdownValue, style]}>{value}</Text>
      ) : (
        <Text style={[styles.dropdownPlaceholder, style]}>{label}</Text>
      )}
      <ChevronDown size={20} color={COLORS.secondary} />
    </View>
  </TouchableOpacity>
);

const AccountDetailsForm = ({
  formData,
  onFormChange,
}: {
  formData: FormData;
  onFormChange: (field: keyof FormData, value: string) => void;
}) => (
  <View style={styles.formCard}>
    <Text style={styles.sectionHeader}>Account Details</Text>

    <View style={styles.formCardWrap}>
      <InputField
        label="Account Name"
        value={formData.accountName}
        onChangeText={text => onFormChange('accountName', text)}
        placeholder="Enter account name"
      />

      <InputField
        label="Server Type"
        value={formData.serverType}
        editable={false}
      />

      <DropdownField
        label="Select Broker"
        value={formData.broker}
        onPress={() => console.log('Select broker pressed')}
        showLabel={false}
        style={{ paddingVertical: 7 }}
      />

      <DropdownField
        label="Select Server"
        value={formData.server}
        onPress={() => console.log('Select server pressed')}
        showLabel={false}
        style={{ paddingVertical: 7 }}
      />

      <InputField
        label="Account ID"
        value={formData.accountId}
        onChangeText={text => onFormChange('accountId', text)}
        placeholder="Account ID"
        showLabel={false}
        style={{ paddingVertical: 7 }}
      />

      <InputField
        label="Password"
        value={formData.password}
        onChangeText={text => onFormChange('password', text)}
        placeholder="Password"
        secureTextEntry
        showLabel={false}
        style={{ paddingVertical: 7 }}
      />

      <InputField
        label="Re-Enter Password"
        value={formData.rePassword}
        onChangeText={text => onFormChange('rePassword', text)}
        placeholder="Re-Enter Password"
        secureTextEntry
        showLabel={false}
        isLast={true}
        style={{ paddingVertical: 7 }}
      />
    </View>
  </View>
);

const SupportLink = () => (
  <View style={styles.supportContainer}>
    <Text style={styles.supportText}>
      Couldn't add account?{' '}
      <Text style={styles.supportLink}>Contact Support</Text>
    </Text>
  </View>
);

const AddButton = ({ onPress }: { onPress: () => void }) => (
  <TouchableOpacity
    style={styles.addButton}
    onPress={onPress}
    activeOpacity={0.7}
  >
    <Text style={styles.addButtonText}>Add Account</Text>
  </TouchableOpacity>
);

const AddAccountScreen = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState<FormData>({
    accountName: 'Andrew-920',
    serverType: 'MetaTrader 4',
    broker: '',
    server: '',
    accountId: '',
    password: '',
    rePassword: '',
  });

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleFormChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAddAccount = () => {
    console.log('Add account:', formData);
  };

  return (
    <LinearGradient
      colors={[COLORS.gradientStart, COLORS.gradientEnd, COLORS.gradientEnd]}
      locations={[0, 0.3, 0]}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header onBackPress={handleBackPress} />

          <View style={styles.content}>
            <AccountDetailsForm
              formData={formData}
              onFormChange={handleFormChange}
            />
            <SupportLink />
          </View>
        </ScrollView>

        <AddButton onPress={handleAddAccount} />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AddAccountScreen;
