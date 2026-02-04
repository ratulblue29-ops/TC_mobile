import React from 'react';
import { Text, View, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { BlurView } from '@react-native-community/blur';

const COLORS = {
  white: '#FFFFFF',
  modalBg: 'rgba(255, 255, 255, 0.15)',
  textMain: '#111827',
  textSecondary: '#6B7280',
  primary: '#0088FF',
  cancel: '#929292',
  overlay: 'rgba(0, 0, 0, 0.5)',
  glassBorder: 'rgba(255, 255, 255, 0.18)',
};

type RiskSettingsProps = {
  visible: boolean;
  onClose: () => void;
  onApply: () => void;
  recommendedSetting?: string;
};

const RiskSettings = ({
  visible,
  onClose,
  onApply,
  recommendedSetting = '100%',
}: RiskSettingsProps) => {
  const handleApply = () => {
    onApply();
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <BlurView style={styles.blurContainer} blurType="light" />
          <View style={styles.modalContent}>
            <Text style={styles.title}>Risk Settings</Text>
            <Text style={styles.subtitle}>
              Based on the options you have selected, we recommend that you
              trade with Balance Multiplier with a risk setting of{' '}
              {recommendedSetting}. Simply click below to apply these settings.
            </Text>

            <TouchableOpacity
              style={styles.applyButton}
              onPress={handleApply}
              activeOpacity={0.7}
            >
              <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={onClose}
              activeOpacity={0.7}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: COLORS.overlay,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '75%',
    maxWidth: '80%',
    borderRadius: 24,
    overflow: 'hidden',
  },
  blurContainer: {
    position: 'absolute',
    top: 1,
    left: 1,
    right: 1,
    bottom: 1,
    borderRadius: 24,
    borderWidth: 1,
  },
  modalContent: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 20,
    color: COLORS.textMain,
    textAlign: 'center',
    marginBottom: 6,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontFamily: 'InstrumentSans-Regular',
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 25,
  },
  applyButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 28,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
    minHeight: 47,
    justifyContent: 'center',
  },
  applyButtonText: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 17,
    color: COLORS.white,
  },
  cancelButton: {
    backgroundColor: COLORS.cancel,
    borderRadius: 28,
    width: '100%',
    alignItems: 'center',
    minHeight: 47,
    justifyContent: 'center',
  },
  cancelButtonText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 18,
    color: COLORS.white,
  },
});

export default RiskSettings;
