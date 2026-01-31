import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Settings, ChevronDown, ChevronLeft } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';

const COLORS = {
  primary: '#00897B',
  secondary: '#0B0F20',
  gradientStart: '#FFFFFF',
  gradientEnd: '#F7F8FA',
};

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
      <Text style={styles.headerTitle}>Account Management</Text>
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

const AccountSettings = ({
  accountName,
  onAccountNameChange,
}: {
  accountName: string;
  onAccountNameChange: (text: string) => void;
}) => (
  <View style={styles.settingsCard}>
    <Text style={styles.sectionLabel}>Account Settings</Text>
    <View style={styles.inputContainer}>
      <View style={styles.inputContent}>
        <Text style={styles.inputLabel}>Account Name</Text>
        <TextInput
          style={styles.input}
          value={accountName}
          onChangeText={onAccountNameChange}
          placeholder="Enter account name"
          placeholderTextColor="#9E9E9E"
        />
      </View>
    </View>
  </View>
);

const PasswordSection = ({
  newPassword,
  confirmPassword,
  onNewPasswordChange,
  onConfirmPasswordChange,
}: {
  newPassword: string;
  confirmPassword: string;
  onNewPasswordChange: (text: string) => void;
  onConfirmPasswordChange: (text: string) => void;
}) => (
  <View style={styles.passwordCard}>
    <Text style={styles.sectionLabel}>Password</Text>
    <View>
      <View style={styles.passwordFieldTop}>
        <Text style={styles.inputLabel}>Old Password</Text>
        <TextInput
          style={styles.passwordInput}
          placeholder="Enter old password"
          placeholderTextColor="#9E9E9E"
          secureTextEntry={false}
        />
      </View>
      <View style={styles.passwordFieldMiddle}>
        <Text style={styles.inputLabel}>New Password</Text>
        <TextInput
          style={styles.passwordInput}
          value={newPassword}
          onChangeText={onNewPasswordChange}
          placeholder="Enter new password"
          placeholderTextColor="#9E9E9E"
          secureTextEntry
        />
      </View>
      <View style={styles.passwordFieldBottom}>
        <Text style={styles.inputLabel}>Re-Enter New Password</Text>
        <TextInput
          style={styles.passwordInput}
          value={confirmPassword}
          onChangeText={onConfirmPasswordChange}
          placeholder="Re-enter new password"
          placeholderTextColor="#9E9E9E"
          secureTextEntry
        />
      </View>
    </View>
  </View>
);

const SaveButton = ({ onPress }: { onPress: () => void }) => (
  <TouchableOpacity
    style={styles.saveButton}
    onPress={onPress}
    activeOpacity={0.7}
  >
    <Text style={styles.saveButtonText}>Save Settings</Text>
  </TouchableOpacity>
);

const AccountManagementScreen = () => {
  const navigation = useNavigation();
  const [accountName, setAccountName] = useState('MT5-104392');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleBackPress = () => {
    // Navigate back to the previous screen
    navigation.goBack();
  };

  const handleAccountPress = () => {
    console.log('Account dropdown pressed');
  };

  const handleSettingsPress = () => {
    console.log('Settings pressed');
  };

  const handleSave = () => {
    console.log('Save settings');
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
          <AccountSettings
            accountName={accountName}
            onAccountNameChange={setAccountName}
          />
          <PasswordSection
            newPassword={newPassword}
            confirmPassword={confirmPassword}
            onNewPasswordChange={setNewPassword}
            onConfirmPasswordChange={setConfirmPassword}
          />
          <SaveButton onPress={handleSave} />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AccountManagementScreen;
