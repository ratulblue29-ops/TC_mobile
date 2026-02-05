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

type MaptoSymbolProps = {
  visible: boolean;
  onClose: () => void;
  onSelectSymbol: (symbol: Symbol) => void;
  selectedSymbol?: string;
  modalTitle?: string;
};

const symbolsData: Symbol[] = [
  { id: 1, number: 'ADAUSD' },
  { id: 2, number: 'AUDCAD' },
  { id: 3, number: 'AUDCHF' },
  { id: 4, number: 'AUDJPY' },
  { id: 5, number: 'AUDNZD' },
  { id: 6, number: 'AUDSGD' },
  { id: 7, number: 'AUDUSD' },
  { id: 8, number: 'AUS200' },
  { id: 9, number: 'AVXUSD' },
  { id: 10, number: 'BTCUSD' },
  { id: 11, number: 'CADCHF' },
  { id: 12, number: 'CADJPY' },
  { id: 13, number: 'CHFJPY' },
  { id: 14, number: 'DE30' },
  { id: 15, number: 'DE40' },
  { id: 16, number: 'EURCHF' },
];

const MaptoSymbol = ({
  visible,
  onClose,
  onSelectSymbol,
  selectedSymbol,
  modalTitle = 'Map to Symbol',
}: MaptoSymbolProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSymbols, setFilteredSymbols] = useState(symbolsData);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    const filtered = symbolsData.filter(symbol =>
      symbol.number.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredSymbols(filtered);
  };

  const handleSelectSymbol = (symbol: Symbol) => {
    onSelectSymbol(symbol);
    setSearchQuery('');
    setFilteredSymbols(symbolsData);
  };

  const handleClose = () => {
    setSearchQuery('');
    setFilteredSymbols(symbolsData);
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
              Showing the list of all the symbols
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
            style={styles.symbolList}
            contentContainerStyle={styles.symbolListContent}
          >
            {filteredSymbols.map(symbol => {
              const isSelected = selectedSymbol === symbol.number;
              return (
                <TouchableOpacity
                  key={symbol.id}
                  style={[
                    styles.symbolCard,
                    isSelected && styles.symbolCardSelected,
                  ]}
                  onPress={() => handleSelectSymbol(symbol)}
                  activeOpacity={0.7}
                >
                  <Text style={styles.symbolText}>{symbol.number}</Text>
                  <View
                    style={[
                      styles.selectionCircle,
                      isSelected && styles.selectionCircleSelected,
                    ]}
                  >
                    {isSelected && <View style={styles.selectionDot} />}
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          <TouchableOpacity
            style={styles.addButton}
            onPress={handleClose}
            activeOpacity={0.8}
          >
            <Text style={styles.addButtonText}>Add Symbol</Text>
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

export default MaptoSymbol;
