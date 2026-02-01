import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';
import { Search, Mic } from 'lucide-react-native';

const COLORS = {
  white: '#FFFFFF',
  black: '#000000',
  textMain: '#000000',
  textSecondary: '#999999',
  primary: '#00A896',
  primaryLight: '#F0FFFE',
  border: '#E0E0E0',
  searchBg: '#F0F0F0',
  overlay: 'rgba(0, 0, 0, 0.5)',
  iconBg: '#B8D4E8',
};

type Broker = {
  id: string;
  name: string;
  initials: string;
};

const BROKERS: Broker[] = [
  { id: '1', name: '24 Prime Markets', initials: '24' },
  { id: '2', name: '360 Degrees Markets', initials: '36' },
  { id: '3', name: '4T Limited', initials: '4T' },
  { id: '4', name: '6i Group', initials: '6I' },
  { id: '5', name: 'AAAFX', initials: 'AA' },
  { id: '6', name: 'AAFX', initials: 'AF' },
  { id: '7', name: 'AAFX Trading', initials: 'AT' },
  { id: '8', name: 'Absolute Markets', initials: 'AM' },
  { id: '9', name: 'Accent Markets Group', initials: 'AM' },
  { id: '10', name: 'ActivTracers', initials: 'AC' },
];

type SelectBrokerProps = {
  visible: boolean;
  onClose: () => void;
  onSelectBroker: (broker: string) => void;
  selectedBroker?: string;
};

const SelectBroker = ({
  visible,
  onClose,
  onSelectBroker,
  selectedBroker = '',
}: SelectBrokerProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [localSelected, setLocalSelected] = useState(selectedBroker);

  const filteredBrokers = BROKERS.filter(broker =>
    broker.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleSelectBroker = (brokerName: string) => {
    setLocalSelected(brokerName);
  };

  const handleConfirm = () => {
    if (localSelected) {
      onSelectBroker(localSelected);
      onClose();
    }
  };

  const renderBrokerItem = ({ item }: { item: Broker }) => {
    const isSelected = localSelected === item.name;

    return (
      <TouchableOpacity
        style={[styles.brokerItem, isSelected && styles.brokerItemSelected]}
        onPress={() => handleSelectBroker(item.name)}
        activeOpacity={0.7}
      >
        <View style={styles.brokerIcon}>
          <Text style={styles.brokerInitials}>EH</Text>
        </View>

        <Text style={styles.brokerName}>{item.name}</Text>

        <View style={styles.radioOuter}>
          {isSelected && <View style={styles.radioInner} />}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={e => e.stopPropagation()}
          >
            <View style={styles.modalContent}>
              <View style={styles.header}>
                <Text style={styles.title}>Select Broker</Text>
                <Text style={styles.subtitle}>
                  Broker missing? <Text style={styles.link}>Let us know</Text>
                </Text>
              </View>

              <View style={styles.searchContainer}>
                <Search size={20} color={COLORS.textSecondary} />
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search"
                  placeholderTextColor={COLORS.textSecondary}
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                />
                <Mic size={20} color={COLORS.textSecondary} />
              </View>

              <FlatList
                data={filteredBrokers}
                renderItem={renderBrokerItem}
                keyExtractor={item => item.id}
                style={styles.brokerList}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.brokerListContent}
              />

              <TouchableOpacity
                style={styles.confirmButton}
                onPress={handleConfirm}
                activeOpacity={0.7}
                disabled={!localSelected}
              >
                <Text style={styles.confirmButtonText}>Select Broker</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: COLORS.overlay,
    justifyContent: 'flex-end',
  },
  modalContainer: {
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingBottom: 20,
    maxHeight: '97%',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 16,
  },
  title: {
    fontFamily: 'InstrumentSans-Bold',
    fontSize: 20,
    color: COLORS.black,
    marginBottom: 6,
  },
  subtitle: {
    fontFamily: 'InstrumentSans-Regular',
    fontSize: 15,
    color: COLORS.black,
  },
  link: {
    textDecorationLine: 'underline',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.searchBg,
    borderRadius: 14,
    paddingHorizontal: 16,
    marginHorizontal: 20,
    marginBottom: 16,
    height: 50,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'InstrumentSans-Regular',
    fontSize: 16,
    color: COLORS.textMain,
    marginHorizontal: 12,
  },
  brokerList: {
    maxHeight: 400,
    // minHeight: 400,
  },
  brokerListContent: {
    paddingHorizontal: 20,
  },
  brokerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    borderRadius: 14,
    paddingHorizontal: 10,
    marginBottom: 10,
    minHeight: 62,
  },
  brokerItemSelected: {
    backgroundColor: COLORS.primaryLight,
    borderColor: COLORS.primary,
    borderWidth: 2,
  },
  brokerIcon: {
    width: 42,
    height: 42,
    borderRadius: 8,
    backgroundColor: COLORS.iconBg,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  brokerInitials: {
    fontFamily: 'InstrumentSans-Bold',
    fontSize: 15,
    color: COLORS.white,
  },
  brokerName: {
    flex: 1,
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 16,
    color: COLORS.textMain,
  },
  radioOuter: {
    width: 26,
    height: 26,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: COLORS.textSecondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioInner: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: COLORS.primary,
  },
  confirmButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 14,
    paddingVertical: 16,
    marginHorizontal: 20,
    marginTop: 16,
    alignItems: 'center',
  },
  confirmButtonText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 17,
    color: COLORS.white,
  },
});

export default SelectBroker;
