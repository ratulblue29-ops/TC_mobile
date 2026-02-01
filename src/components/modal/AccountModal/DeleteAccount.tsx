import React from 'react';
import { Text, View, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { BlurView } from '@react-native-community/blur';

const COLORS = {
  white: '#FFFFFF',
  modalBg: 'rgba(255, 255, 255, 0.15)',
  textMain: '#111827',
  textSecondary: '#6B7280',
  danger: '#B91C1C',
  cancel: '#374151',
  overlay: 'rgba(0, 0, 0, 0.5)',
  glassBorder: 'rgba(255, 255, 255, 0.18)',
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
            // blurAmount={8}
            // reducedTransparencyFallbackColor={COLORS.white}
          />
          <View style={styles.modalContent}>
            <Text style={styles.title}>Delete this account?</Text>
            <Text style={styles.subtitle}>
              A message should be a short, complete sentence.
            </Text>

            <TouchableOpacity
              style={styles.deleteButton}
              onPress={handleDelete}
            >
              <Text style={styles.deleteButtonText}>Delete Account</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
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
    //borderColor: COLORS.glassBorder,
    //backgroundColor: COLORS.modalBg,
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
  },
  cancelButtonText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 18,
    color: COLORS.white,
  },
});

export default DeleteAccount;
