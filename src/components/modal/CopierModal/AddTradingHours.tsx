import React from 'react';
import { Text, View, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const COLORS = {
  white: '#FFFFFF',
  teal: '#00897B',
  lightTeal: '#E0F7F4',
  textMain: '#000000',
  textSecondary: '#666666',
  placeholderGray: '#5C5C5C',
  lightGray: '#EEF0F4',
  borderGray: '#DCDCDC',
  dragHandleGray: '#CCCCCC',
  homeIndicator: '#000000',
};

type Symbol = {
  id: number;
  number: string;
};

type AddTradingHoursProps = {
  visible: boolean;
  onClose: () => void;
  onSelectSymbol: (symbol: Symbol) => void;
  selectedSymbol?: string;
  modalTitle?: string;
};

const AddTradingHours = ({ visible, onClose }: AddTradingHoursProps) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={handleClose}
    >
      <TouchableOpacity
        style={styles.modalOverlay}
        activeOpacity={1}
        onPress={handleClose}
      >
        <TouchableOpacity
          style={styles.modalContent}
          activeOpacity={1}
          onPress={e => e.stopPropagation()}
        >
          <View style={styles.dragHandle} />

          <View style={styles.headerSection}>
            <Text style={styles.modalTitle}>Add Trading Hours</Text>
            <Text style={styles.modalSubtitle}>
              Showing the list of all the symbols
            </Text>
          </View>

          <TouchableOpacity
            style={styles.addButton}
            onPress={handleClose}
            activeOpacity={0.8}
          >
            <Text style={styles.addButtonText}>Add Trading Hour</Text>
          </TouchableOpacity>

          <View style={styles.homeIndicator} />
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingBottom: 0,
  },
  dragHandle: {
    alignSelf: 'center',
    marginVertical: 12,
    backgroundColor: COLORS.dragHandleGray,
    borderRadius: 3,
  },
  headerSection: {
    paddingHorizontal: 22,
    marginBottom: 22,
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: 'InstrumentSans-Bold',
    color: COLORS.textMain,
  },
  modalSubtitle: {
    fontSize: 15,
    fontFamily: 'InstrumentSans-Regular',
    color: COLORS.textSecondary,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.lightGray,
    borderRadius: 13,
    paddingHorizontal: 14,
    marginHorizontal: 22,
    marginBottom: 18,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    paddingVertical: 14,
    fontSize: 16,
    fontFamily: 'InstrumentSans-Regular',
    color: COLORS.textMain,
  },
  symbolList: {
    maxHeight: '50%',
    paddingHorizontal: 22,
  },
  symbolListContent: {
    paddingBottom: 12,
  },
  symbolCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.borderGray,
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 8,
    marginBottom: 12,
  },
  symbolCardSelected: {
    backgroundColor: COLORS.lightTeal,
    borderWidth: 2,
    borderColor: COLORS.teal,
  },
  symbolText: {
    fontSize: 17,
    fontFamily: 'InstrumentSans-SemiBold',
    color: COLORS.textMain,
  },
  selectionCircle: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: COLORS.borderGray,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectionCircleSelected: {
    borderColor: COLORS.teal,
  },
  selectionDot: {
    width: 10,
    height: 10,
    borderRadius: 6,
    backgroundColor: COLORS.teal,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: COLORS.teal,
    paddingVertical: 12,
    marginTop: 12,
    alignItems: 'center',
    marginHorizontal: 15,
    borderRadius: 8,
  },
  addButtonText: {
    fontSize: 19,
    fontFamily: 'InstrumentSans-Bold',
    color: COLORS.white,
  },
  homeIndicator: {
    alignSelf: 'center',
    marginVertical: 10,
    backgroundColor: COLORS.homeIndicator,
    borderRadius: 3,
  },
});

export default AddTradingHours;
