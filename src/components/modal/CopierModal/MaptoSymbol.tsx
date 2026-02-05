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
  textMain: '#0B0F20',
  textSecondary: '#666666',
  lightGray: '#F5F5F5',
  border: '#E0E0E0',
  success: '#4CAF50',
  lightTeal: '#E0F2F1',
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
  {
    id: 1,
    number: 'ADAUSD',
  },
  {
    id: 2,
    number: 'AUDCAD',
  },
  {
    id: 3,
    number: 'AUDCHF',
  },
  {
    id: 4,
    number: 'AUDJPY',
  },
  {
    id: 5,
    number: 'AUDNZD',
  },
  {
    id: 6,
    number: 'AUDSGD',
  },
  {
    id: 7,
    number: 'AUDUSD',
  },
  {
    id: 8,
    number: 'AUS200',
  },
  {
    id: 9,
    number: 'AVXUSD',
  },
  {
    id: 10,
    number: 'BTCUSD',
  },
  {
    id: 11,
    number: 'CADCHF',
  },
  {
    id: 12,
    number: 'CADJPY',
  },
  {
    id: 13,
    number: 'CHFJPY',
  },
  {
    id: 14,
    number: 'DE30',
  },
  {
    id: 15,
    number: 'DE40',
  },
  {
    id: 16,
    number: 'EURCHF',
  },
  {
    id: 17,
    number: 'EURGBP',
  },
  {
    id: 18,
    number: 'EURJPY',
  },
  {
    id: 19,
    number: 'EURUSD',
  },
  {
    id: 20,
    number: 'GBPAUD',
  },
  {
    id: 21,
    number: 'GBPCAD',
  },
  {
    id: 22,
    number: 'GBPCHF',
  },
  {
    id: 23,
    number: 'GBPJPY',
  },
  {
    id: 24,
    number: 'GBPNZD',
  },
  {
    id: 25,
    number: 'GBPUSD',
  },
  {
    id: 26,
    number: 'NZDCAD',
  },
  {
    id: 27,
    number: 'NZDCHF',
  },
  {
    id: 28,
    number: 'NZDJPY',
  },
  {
    id: 29,
    number: 'NZDUSD',
  },
  {
    id: 30,
    number: 'USDCAD',
  },
  {
    id: 31,
    number: 'USDCHF',
  },
  {
    id: 32,
    number: 'USDJPY',
  },
  {
    id: 33,
    number: 'XAUUSD',
  },
  {
    id: 34,
    number: 'XAGUSD',
  },
];

const MaptoSymbol = ({
  visible,
  onClose,
  onSelectSymbol,
  selectedSymbol,
  modalTitle = 'Select Symbol',
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
    onClose();
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

          <View style={styles.header}>
            <Text style={styles.modalTitle}>{modalTitle}</Text>
            <Text style={styles.modalSubtitle}>
              Select a symbol from the list below
            </Text>
          </View>

          <View style={styles.searchContainer}>
            <Search size={20} color={COLORS.textSecondary} />
            <TextInput
              placeholder="Search"
              placeholderTextColor={COLORS.textSecondary}
              style={styles.searchInput}
              value={searchQuery}
              onChangeText={handleSearch}
            />
            <Mic size={20} color={COLORS.textSecondary} />
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.symbolList}
          >
            {filteredSymbols.map(symbol => (
              <TouchableOpacity
                key={symbol.id}
                style={[
                  styles.symbolCard,
                  selectedSymbol === symbol.number && styles.symbolCardSelected,
                ]}
                onPress={() => handleSelectSymbol(symbol)}
                activeOpacity={0.7}
              >
                <View style={styles.symbolLeft}>
                  <View style={styles.symbolHeader}>
                    <Text style={styles.symbolNumber}>{symbol.number}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
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
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 20,
    maxHeight: '85%',
  },
  dragHandle: {
    width: 40,
    height: 4,
    backgroundColor: COLORS.lightGray,
    borderRadius: 2,
    alignSelf: 'center',
    marginVertical: 12,
  },
  header: {
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.textMain,
    marginBottom: 4,
  },
  modalSubtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.textSecondary,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.lightGray,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 20,
    height: 48,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 12,
    fontSize: 16,
    color: COLORS.textMain,
  },
  symbolList: {
    flexGrow: 0,
    maxHeight: '60%',
  },
  symbolCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  symbolCardSelected: {
    borderColor: COLORS.teal,
    borderWidth: 2,
  },
  symbolLeft: {
    flex: 1,
  },
  symbolHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  symbolNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textMain,
  },
});

export default MaptoSymbol;
