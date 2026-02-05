import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/RootNavigator';
import { CopierStackParamList } from '../../navigator/CopierStack';
import {
  ChevronLeft,
  ChevronDown,
  Search,
  Mic,
  Trash2,
} from 'lucide-react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';

type RoutePropType = RouteProp<RootStackParamList, 'EditSlave'>;
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const COLORS = {
  white: '#FFFFFF',
  teal: '#00897B',
  blueLight: '#E3F2FD',
  blueBorder: '#4A90E2',
  blueText: '#4A90E2',
  greenLight: '#E8F5E9',
  greenBorder: '#52C41A',
  greenText: '#52C41A',
  gray: '#5C5C5C',
  searchBg: '#F5F5F5',
};

type SymbolMapping = {
  id: string;
  fromSymbol: string;
  toSymbol: string;
};

const MOCK_MAPPINGS: SymbolMapping[] = [
  { id: '1', fromSymbol: 'AUDUSDw', toSymbol: 'AUDUSD' },
  { id: '2', fromSymbol: 'DE30', toSymbol: 'DE40' },
  { id: '3', fromSymbol: 'EURCHFw', toSymbol: 'EURGBP' },
  { id: '4', fromSymbol: 'EURUSDw', toSymbol: 'EURUSD' },
];

const Header = ({ onBackPress }: { onBackPress: () => void }) => (
  <View style={styles.headerSection}>
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={onBackPress}
        activeOpacity={0.7}
      >
        <ChevronLeft size={24} color="#0B0F20" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Map Symbols</Text>
      <View style={styles.headerIcons} />
    </View>
  </View>
);

const CustomCheckbox = ({
  label,
  checked,
  onPress,
  color,
}: {
  label: string;
  checked: boolean;
  onPress: () => void;
  color: string;
}) => (
  <TouchableOpacity
    style={styles.checkboxContainer}
    onPress={onPress}
    activeOpacity={0.7}
  >
    <View style={[styles.checkbox, checked && { borderColor: color }]}>
      {checked && (
        <View style={[styles.checkboxInner, { backgroundColor: color }]} />
      )}
    </View>
    <Text style={styles.checkboxLabel}>{label}</Text>
  </TouchableOpacity>
);

const DropdownField = ({
  label,
  value,
  placeholder,
  onPress,
  isFirst = false,
}: {
  label?: string;
  value?: string;
  placeholder: string;
  onPress: () => void;
  isFirst?: boolean;
}) => (
  <TouchableOpacity
    style={[styles.dropdownField, isFirst && styles.dropdownFieldFirst]}
    onPress={onPress}
    activeOpacity={0.7}
  >
    {label && <Text style={styles.dropdownLabel}>{label}</Text>}
    <View style={styles.dropdownValue}>
      <Text style={[styles.dropdownText, !value && styles.dropdownPlaceholder]}>
        {value || placeholder}
      </Text>
      <ChevronDown size={20} color="#5C5C5C" />
    </View>
  </TouchableOpacity>
);

const AddMapSymbolCard = ({
  mapFromSymbol,
  mapToSymbol,
  onMapFromPress,
  onMapToPress,
  onCreateMapping,
}: {
  mapFromSymbol: string;
  mapToSymbol: string;
  onMapFromPress: () => void;
  onMapToPress: () => void;
  onCreateMapping: () => void;
}) => (
  <View style={styles.addMapCard}>
    <View style={styles.DropdownFieldWrap1}>
      <DropdownField
        label="Map From Symbol"
        value={mapFromSymbol}
        placeholder="Select Symbol"
        onPress={onMapFromPress}
        isFirst
      />
    </View>
    <View style={styles.DropdownFieldWrap2}>
      <DropdownField
        value={mapToSymbol}
        placeholder="Map To Symbol"
        onPress={onMapToPress}
      />
    </View>
    <TouchableOpacity
      style={styles.createButton}
      onPress={onCreateMapping}
      activeOpacity={0.7}
    >
      <Text style={styles.createButtonText}>Create Mapping</Text>
    </TouchableOpacity>
  </View>
);

const SymbolPill = ({
  symbol,
  type,
}: {
  symbol: string;
  type: 'from' | 'to';
}) => {
  const isFrom = type === 'from';
  return (
    <View
      style={[
        styles.symbolPill,
        isFrom ? styles.symbolPillFrom : styles.symbolPillTo,
      ]}
    >
      <Text
        style={[
          styles.symbolPillText,
          isFrom ? styles.symbolPillTextFrom : styles.symbolPillTextTo,
        ]}
      >
        {symbol}
      </Text>
    </View>
  );
};

const MappingRow = ({
  mapping,
  onDelete,
}: {
  mapping: SymbolMapping;
  onDelete: (id: string) => void;
}) => (
  <View style={styles.mappingRow}>
    <View style={styles.mappingRowwrap}>
      <SymbolPill symbol={mapping.fromSymbol} type="from" />
      <SymbolPill symbol={mapping.toSymbol} type="to" />
    </View>
    <TouchableOpacity
      style={styles.deleteButton}
      onPress={() => onDelete(mapping.id)}
      activeOpacity={0.7}
    >
      <Trash2 size={20} color="#6C6C6C" />
    </TouchableOpacity>
  </View>
);

const SymbolsMappedCard = ({
  mappings,
  searchQuery,
  filterFrom,
  filterTo,
  onSearchChange,
  onFilterFromToggle,
  onFilterToToggle,
  onDeleteMapping,
}: {
  mappings: SymbolMapping[];
  searchQuery: string;
  filterFrom: boolean;
  filterTo: boolean;
  onSearchChange: (text: string) => void;
  onFilterFromToggle: () => void;
  onFilterToToggle: () => void;
  onDeleteMapping: (id: string) => void;
}) => {
  const filteredMappings = mappings.filter(mapping => {
    const matchesSearch =
      mapping.fromSymbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mapping.toSymbol.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <View style={styles.mappedCard}>
      <View style={styles.mappedHeader}>
        <Text style={styles.mappedLabel}>Label</Text>
        <View style={styles.filterContainer}>
          <CustomCheckbox
            label="From"
            checked={filterFrom}
            onPress={onFilterFromToggle}
            color={COLORS.blueBorder}
          />
          <CustomCheckbox
            label="To"
            checked={filterTo}
            onPress={onFilterToToggle}
            color={COLORS.greenBorder}
          />
        </View>
      </View>

      <View style={styles.searchContainer}>
        <Search size={20} color={COLORS.gray} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor={COLORS.gray}
          value={searchQuery}
          onChangeText={onSearchChange}
        />
        <Mic size={20} color={COLORS.gray} />
      </View>

      <FlatList
        data={filteredMappings}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <MappingRow mapping={item} onDelete={onDeleteMapping} />
        )}
        scrollEnabled={false}
        contentContainerStyle={styles.mappingsList}
      />
    </View>
  );
};

const MapSymbolsScreen = () => {
  // const navigation = useNavigation<NavigationProp>();
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RoutePropType>();

  const [mapFromSymbol, setMapFromSymbol] = useState('ADAUSDw');
  const [mapToSymbol, setMapToSymbol] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterFrom, setFilterFrom] = useState(false);
  const [filterTo, setFilterTo] = useState(false);
  const [mappings, setMappings] = useState<SymbolMapping[]>(MOCK_MAPPINGS);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleMapFromPress = () => {
    console.log('Select Map From Symbol');
  };

  const handleMapToPress = () => {
    console.log('Select Map To Symbol');
  };

  const handleCreateMapping = () => {
    if (mapFromSymbol && mapToSymbol) {
      const newMapping: SymbolMapping = {
        id: Date.now().toString(),
        fromSymbol: mapFromSymbol,
        toSymbol: mapToSymbol,
      };
      setMappings(prev => [...prev, newMapping]);
      setMapToSymbol('');
    }
  };

  const handleDeleteMapping = (id: string) => {
    setMappings(prev => prev.filter(mapping => mapping.id !== id));
  };

  const handleFilterFromToggle = () => {
    setFilterFrom(prev => !prev);
  };

  const handleFilterToToggle = () => {
    setFilterTo(prev => !prev);
  };

  return (
    <LinearGradient
      colors={['#ffffff', '#F7F8FA', '#F7F8FA']}
      locations={[0, 0.3, 0]}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header onBackPress={handleBackPress} />

          <View style={styles.content}>
            <Text style={styles.sectionTitle}>Add Map Symbol</Text>
            <AddMapSymbolCard
              mapFromSymbol={mapFromSymbol}
              mapToSymbol={mapToSymbol}
              onMapFromPress={handleMapFromPress}
              onMapToPress={handleMapToPress}
              onCreateMapping={handleCreateMapping}
            />

            <Text style={styles.sectionTitle}>Symbols Mapped</Text>
            <SymbolsMappedCard
              mappings={mappings}
              searchQuery={searchQuery}
              filterFrom={filterFrom}
              filterTo={filterTo}
              onSearchChange={setSearchQuery}
              onFilterFromToggle={handleFilterFromToggle}
              onFilterToToggle={handleFilterToToggle}
              onDeleteMapping={handleDeleteMapping}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default MapSymbolsScreen;
