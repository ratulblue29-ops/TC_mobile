import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { ChevronRight, Trash2, Network } from 'lucide-react-native';

const COLORS = {
  primary: '#000000',
  secondary: '#8E8E93',
  accent: '#FF9500',
  destructive: '#FF3B30',
  separator: '#E5E5EA',
  white: '#FFFFFF',
  handle: '#C7C7CC',
  pressedBg: '#F2F2F7',
};

type MasterAccountSettingsModalProps = {
  visible: boolean;
  onClose: () => void;
  onAddSlave?: () => void;
  onDeleteMaster?: () => void;
};

const MasterAccountSettingsModal = ({
  visible,
  onClose,
  onAddSlave,
  onDeleteMaster,
}: MasterAccountSettingsModalProps) => {
  const handleAddSlave = () => {
    onClose();
    onAddSlave?.();
  };

  const handleDeleteMaster = () => {
    onClose();
    onDeleteMaster?.();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.backdrop}
        activeOpacity={1}
        onPress={onClose}
      >
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPress={e => e.stopPropagation()}
        >
          <View style={styles.handle} />

          <View style={styles.headerSection}>
            <Text style={styles.title}>Master Account Settings</Text>
            <Text style={styles.subtitle}>
              Showing the list of all the accounts
            </Text>
          </View>

          <View style={styles.menuSection}>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={handleAddSlave}
              activeOpacity={0.7}
            >
              <Network size={24} color={COLORS.accent} />
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuText}>Add Slave</Text>
                <Text style={styles.menuSubtext}>
                  Showing the list of all the accounts
                </Text>
              </View>
              <ChevronRight size={20} color={COLORS.handle} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={handleDeleteMaster}
              activeOpacity={0.7}
            >
              <Trash2 size={24} color={COLORS.destructive} />
              <View style={styles.menuTextContainer}>
                <Text style={[styles.menuText, styles.destructiveText]}>
                  Delete Master Account
                </Text>
                <Text style={styles.menuSubtext}>
                  Showing the list of all the accounts
                </Text>
              </View>
              <ChevronRight size={20} color={COLORS.handle} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 32,
  },
  handle: {
    width: 36,
    height: 5,
    backgroundColor: COLORS.handle,
    borderRadius: 3,
    alignSelf: 'center',
    marginTop: 12,
  },
  headerSection: {
    paddingHorizontal: 24,
    marginTop: 20,
    marginBottom: 28,
  },
  title: {
    fontSize: 20,
    fontFamily: 'InstrumentSans-Bold',
    color: COLORS.primary,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontFamily: 'InstrumentSans-Regular',
    color: '#4E5D66',
  },
  menuSection: {
    paddingHorizontal: 24,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  menuTextContainer: {
    flex: 1,
    marginLeft: 14,
  },
  menuText: {
    fontSize: 18,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#0B0F20',
    marginBottom: 3,
  },
  destructiveText: {
    color: COLORS.destructive,
  },
  menuSubtext: {
    fontSize: 15,
    fontFamily: 'InstrumentSans-Regular',
    color: '#4E5D66',
  },
});

export default MasterAccountSettingsModal;
