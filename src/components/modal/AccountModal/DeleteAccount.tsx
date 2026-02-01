import React from 'react';
import { Text, View, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { BlurView } from '@react-native-community/blur';

const COLORS = {
  white: '#FFFFFF',
  textMain: '#111827',
  textSecondary: '#6B7280',
  danger: '#B91C1C',
  cancel: '#374151',
  overlay: 'rgba(0, 0, 0, 0.5)',
  glassOverlay: 'rgba(255, 255, 255, 0.1)',
  glassBorder: 'rgba(255, 255, 255, 0.2)',
};

type DeleteAccountProps = {
  visible: boolean;
  onClose: () => void;
  onConfirmDelete: () => void;
};

const DeleteAccount = ({
  visible,
  onClose,
  onConfirmDelete,
}: DeleteAccountProps) => {
  const handleDelete = () => {
    onConfirmDelete();
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
          <BlurView
            style={styles.blurContainer}
            blurType="light"
            blurAmount={10}
            reducedTransparencyFallbackColor={COLORS.white}
          >
            <LinearGradient
              colors={[
                'rgba(255, 255, 255, 0.25)',
                'rgba(255, 255, 255, 0.25)',
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientOverlay}
            />
          </BlurView>
          <View style={styles.modalContent}>
            <Text style={styles.title}>Delete this account?</Text>
            <Text style={styles.subtitle}>
              A message should be a short, complete sentence.
            </Text>

            <TouchableOpacity
              style={styles.deleteButton}
              onPress={handleDelete}
              activeOpacity={0.8}
            >
              <Text style={styles.deleteButtonText}>Delete Account</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={onClose}
              activeOpacity={0.8}
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
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: COLORS.glassBorder,
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
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
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: 'InstrumentSans-Regular',
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
  },
  deleteButton: {
    backgroundColor: COLORS.danger,
    borderRadius: 14,
    paddingVertical: 16,
    width: '100%',
    alignItems: 'center',
    marginBottom: 14,
    shadowColor: COLORS.danger,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  deleteButtonText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 18,
    color: COLORS.white,
  },
  cancelButton: {
    backgroundColor: COLORS.cancel,
    borderRadius: 14,
    paddingVertical: 16,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  cancelButtonText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 18,
    color: COLORS.white,
  },
});

export default DeleteAccount;
