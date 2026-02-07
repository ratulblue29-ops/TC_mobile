import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, Bell, Menu, ChevronDown, X } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/RootNavigator';
import styles from './style';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

type FilterOption = {
  id: string;
  label: string;
  value?: string | string[];
  hasValue: boolean;
};

const COLORS = {
  primary: '#00897B',
  white: '#FFFFFF',
  dark: '#0B0F20',
  textMain: '#2C3440',
  textSecondary: '#757575',
  border: '#E0E0E0',
  tagBg: '#ECECEC',
};

const FilterPropFirmsScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const [filters, setFilters] = useState<FilterOption[]>([
    {
      id: 'type',
      label: 'Type of Firm',
      value: 'Crypto only',
      hasValue: true,
    },
    {
      id: 'rating',
      label: 'Minimum Rating',
      value: '4',
      hasValue: true,
    },
    {
      id: 'country',
      label: 'Country',
      value: ['Vietnam', 'Argentina', 'Australia'],
      hasValue: true,
    },
    {
      id: 'years',
      label: 'Years in Operation',
      hasValue: false,
    },
    {
      id: 'assets',
      label: 'Assets',
      hasValue: false,
    },
    {
      id: 'platforms',
      label: 'Platforms',
      hasValue: false,
    },
    {
      id: 'programType',
      label: 'Program Type',
      hasValue: false,
    },
    {
      id: 'maxAllocation',
      label: 'Max Allocation',
      hasValue: false,
    },
  ]);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleRemoveTag = (filterId: string, tagToRemove: string) => {
    setFilters(prev =>
      prev.map(filter => {
        if (filter.id === filterId && Array.isArray(filter.value)) {
          const newValue = filter.value.filter(tag => tag !== tagToRemove);
          return {
            ...filter,
            value: newValue,
            hasValue: newValue.length > 0,
          };
        }
        return filter;
      }),
    );
  };

  const handleApplyFilters = () => {
    navigation.goBack();
  };

  const renderFilterValue = (filter: FilterOption) => {
    if (!filter.hasValue) {
      return null;
    }

    if (Array.isArray(filter.value)) {
      return (
        <View style={styles.tagsContainer}>
          {filter.value.map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
              <TouchableOpacity
                onPress={() => handleRemoveTag(filter.id, tag)}
                activeOpacity={0.7}
              >
                <X size={14} color={COLORS.dark} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      );
    }

    return <Text style={styles.filterValue}>{filter.value}</Text>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={handleBack}
          activeOpacity={0.7}
        >
          <ChevronLeft size={24} color={COLORS.dark} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Filter Prop Firms</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
            <Bell size={24} color={COLORS.dark} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
            <Menu size={24} color={COLORS.dark} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <View style={styles.filterContainer}>
          <Text style={styles.filterLabel}>Filter</Text>

          {filters.map((filter, index) => (
            <View key={filter.id}>
              <TouchableOpacity
                style={[
                  styles.filterOption,
                  index === 0 && styles.filterOptionFirst,
                  index === filters.length - 1 && styles.filterOptionLast,
                ]}
                activeOpacity={0.7}
              >
                <View style={styles.filterContent}>
                  <View style={styles.filterTextContainer}>
                    <Text style={styles.filterOptionLabel}>{filter.label}</Text>
                    {renderFilterValue(filter)}
                  </View>
                  <ChevronDown size={20} color={COLORS.textSecondary} />
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.applyButton}
          onPress={handleApplyFilters}
          activeOpacity={0.7}
        >
          <Text style={styles.applyButtonText}>Apply Filters</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FilterPropFirmsScreen;
