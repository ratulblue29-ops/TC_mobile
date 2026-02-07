import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Modal,
  StyleSheet,
} from 'react-native';
import { Search, Mic } from 'lucide-react-native';

const COLORS = {
  white: '#FFFFFF',
  teal: '#00897B',
  lightTeal: '#E0F5F5',
  textMain: '#000000',
  textSecondary: '#666666',
  placeholderGray: '#999999',
  lightGray: '#F5F5F5',
  borderGray: '#E8E8E8',
  dragHandleGray: '#C7C7CC',
  homeIndicator: '#000000',
  disabledText: '#CCCCCC',
};

type PropFirm = {
  id: number;
  name: string;
  enabled?: boolean;
};

type SelectPropFirmProps = {
  visible: boolean;
  onClose: () => void;
  onSelectFirm: (firm: PropFirm) => void;
  selectedFirm?: string;
  modalTitle?: string;
};

const propFirmsData: PropFirm[] = [
  { id: 1, name: 'FundingPips', enabled: true },
  { id: 2, name: 'FTMO', enabled: true },
  { id: 3, name: 'The5ers', enabled: true },
  { id: 4, name: 'MyForexFunds', enabled: true },
  { id: 5, name: 'Fidelcrest', enabled: true },
  { id: 6, name: 'Alpha Capital', enabled: true },
  { id: 7, name: 'E8 Funding', enabled: true },
  { id: 8, name: 'True Forex Funds', enabled: true },
  { id: 9, name: 'BrightFunded', enabled: false },
];

const SelectPropFirm = ({
  visible,
  onClose,
  onSelectFirm,
  selectedFirm,
  modalTitle = 'Select Prop Firm 2',
}: SelectPropFirmProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFirms, setFilteredFirms] = useState(propFirmsData);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    const filtered = propFirmsData.filter(firm =>
      firm.name.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredFirms(filtered);
  };

  const handleSelectFirm = (firm: PropFirm) => {
    if (!firm.enabled) return;
    onSelectFirm(firm);
    setSearchQuery('');
    setFilteredFirms(propFirmsData);
  };

  const handleClose = () => {
    setSearchQuery('');
    setFilteredFirms(propFirmsData);
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
            <Text style={styles.modalTitle}>{modalTitle}</Text>
            <Text style={styles.modalSubtitle}>
              Showing the list of all the prop firms
            </Text>
          </View>

          <View style={styles.searchContainer}>
            <Search size={22} color={COLORS.placeholderGray} />
            <TextInput
              placeholder="Search"
              placeholderTextColor={COLORS.placeholderGray}
              style={styles.searchInput}
              value={searchQuery}
              onChangeText={handleSearch}
            />
            <Mic size={22} color={COLORS.placeholderGray} />
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.firmList}
            contentContainerStyle={styles.firmListContent}
          >
            {filteredFirms.map(firm => {
              const isSelected = selectedFirm === firm.name;
              const isDisabled = !firm.enabled;

              return (
                <TouchableOpacity
                  key={firm.id}
                  style={[
                    styles.firmCard,
                    isSelected && styles.firmCardSelected,
                    isDisabled && styles.firmCardDisabled,
                  ]}
                  onPress={() => handleSelectFirm(firm)}
                  activeOpacity={isDisabled ? 1 : 0.7}
                  disabled={isDisabled}
                >
                  <Text
                    style={[
                      styles.firmText,
                      isSelected && styles.firmTextSelected,
                      isDisabled && styles.firmTextDisabled,
                    ]}
                  >
                    {firm.name}
                  </Text>
                  <View
                    style={[
                      styles.selectionCircle,
                      isSelected && styles.selectionCircleSelected,
                      isDisabled && styles.selectionCircleDisabled,
                    ]}
                  >
                    {isSelected && <View style={styles.selectionDot} />}
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          <TouchableOpacity
            style={styles.selectButton}
            onPress={handleClose}
            activeOpacity={0.8}
          >
            <Text style={styles.selectButtonText}>Select to Compare</Text>
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
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: '90%',
  },
  dragHandle: {
    width: 36,
    height: 5,
    backgroundColor: COLORS.dragHandleGray,
    borderRadius: 3,
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 20,
  },
  headerSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  modalTitle: {
    fontSize: 28,
    fontFamily: 'InstrumentSans-Bold',
    color: COLORS.textMain,
    letterSpacing: -0.5,
    lineHeight: 36,
    marginBottom: 8,
  },
  modalSubtitle: {
    fontSize: 15,
    fontFamily: 'InstrumentSans-Regular',
    color: COLORS.textSecondary,
    lineHeight: 22,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.lightGray,
    borderRadius: 12,
    paddingHorizontal: 14,
    marginHorizontal: 24,
    marginBottom: 20,
    height: 50,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 16,
    fontFamily: 'InstrumentSans-Regular',
    color: COLORS.textMain,
  },
  firmList: {
    paddingHorizontal: 24,
  },
  firmListContent: {
    paddingBottom: 120,
  },
  firmCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.borderGray,
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 20,
    marginBottom: 12,
  },
  firmCardSelected: {
    backgroundColor: COLORS.lightTeal,
    borderWidth: 2,
    borderColor: COLORS.teal,
  },
  firmCardDisabled: {
    opacity: 0.45,
  },
  firmText: {
    fontSize: 16,
    fontFamily: 'InstrumentSans-Medium',
    color: COLORS.textMain,
  },
  firmTextSelected: {
    fontFamily: 'InstrumentSans-SemiBold',
    color: COLORS.teal,
  },
  firmTextDisabled: {
    color: COLORS.disabledText,
  },
  selectionCircle: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: COLORS.borderGray,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectionCircleSelected: {
    borderColor: COLORS.teal,
  },
  selectionCircleDisabled: {
    borderColor: COLORS.disabledText,
  },
  selectionDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.teal,
  },
  selectButton: {
    backgroundColor: COLORS.teal,
    paddingVertical: 16,
    marginHorizontal: 20,
    marginTop: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  selectButtonText: {
    fontSize: 17,
    fontFamily: 'InstrumentSans-SemiBold',
    color: COLORS.white,
    letterSpacing: 0.3,
  },
  homeIndicator: {
    width: 134,
    height: 5,
    backgroundColor: COLORS.homeIndicator,
    borderRadius: 3,
    alignSelf: 'center',
    marginVertical: 10,
  },
});

export default SelectPropFirm;
