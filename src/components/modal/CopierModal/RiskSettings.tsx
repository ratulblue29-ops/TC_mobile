import React from 'react';
import { Text, View, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { BlurView } from '@react-native-community/blur';

const COLORS = {
  white: '#FFFFFF',
  modalBg: 'rgba(255, 255, 255, 0.15)',
  textMain: '#111827',
  textSecondary: '#6B7280',
  primary: '#007AFF',
  cancel: '#9E9E9E',
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
    width: '85%',
    maxWidth: '90%',
    borderRadius: 24,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
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
    paddingVertical: 28,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'InstrumentSans-Bold',
    fontSize: 24,
    color: COLORS.textMain,
    textAlign: 'center',
    marginBottom: 16,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontFamily: 'InstrumentSans-Regular',
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 28,
  },
  applyButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 28,
    paddingVertical: 16,
    width: '100%',
    alignItems: 'center',
    marginBottom: 14,
    minHeight: 52,
    justifyContent: 'center',
  },
  applyButtonText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 18,
    color: COLORS.white,
  },
  cancelButton: {
    backgroundColor: COLORS.cancel,
    borderRadius: 28,
    paddingVertical: 16,
    width: '100%',
    alignItems: 'center',
    minHeight: 52,
    justifyContent: 'center',
  },
  cancelButtonText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 18,
    color: COLORS.white,
  },
});

export default RiskSettings;
