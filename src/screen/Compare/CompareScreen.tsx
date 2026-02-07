import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/RootNavigator';
import {
  Bell,
  Menu,
  ChevronDown,
  Plus,
  Search,
  ListFilter,
  Pin,
} from 'lucide-react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import SelectPropFirm from '../../components/modal/CompareModal/SelectPropFirmModal';

type TabType = 'Prop Firms' | 'Broker';
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const COLORS = {
  primary: '#00897B',
  white: '#FFFFFF',
  dark: '#0B0F20',
  textMain: '#2C3440',
  textSecondary: '#000000',
  gray: '#C8C8C8',
  border: '#E8E8E8',
};

const propFirmsData = [
  {
    id: 1,
    name: 'FundingPips',
    location: 'AE',
    years: '2y',
    rating: '4.4',
    maxAllocation: '$300,000',
    leverage: '100x',
    dailyDD: '5%',
    rank: 1,
    isPinned: true,
  },
  {
    id: 2,
    name: 'FTMO',
    location: 'CZ',
    years: '5y',
    rating: '4.7',
    maxAllocation: '$400,000',
    leverage: '100x',
    dailyDD: '5%',
    rank: 2,
    isPinned: false,
  },
  {
    id: 3,
    name: 'The5ers',
    location: 'IL',
    years: '7y',
    rating: '4.5',
    maxAllocation: '$250,000',
    leverage: '50x',
    dailyDD: '4%',
    rank: 3,
    isPinned: false,
  },
  {
    id: 4,
    name: 'MyForexFunds',
    location: 'CA',
    years: '3y',
    rating: '4.3',
    maxAllocation: '$300,000',
    leverage: '100x',
    dailyDD: '5%',
    rank: 4,
    isPinned: false,
  },
  {
    id: 5,
    name: 'Fidelcrest',
    location: 'CZ',
    years: '4y',
    rating: '4.6',
    maxAllocation: '$200,000',
    leverage: '100x',
    dailyDD: '5%',
    rank: 5,
    isPinned: false,
  },
];

const CompareScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [activeTab, setActiveTab] = useState<TabType>('Prop Firms');
  const [selectedFirm1, setSelectedFirm1] = useState('FundingPips');
  const [selectedFirm2, setSelectedFirm2] = useState('');
  const [pinnedFirms, setPinnedFirms] = useState<number[]>([1]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentSelectingFirm, setCurrentSelectingFirm] = useState<1 | 2>(2);

  const handleFilterPress = () => {
    navigation.navigate('FilterPropFirms');
  };

  const handleComparePress = () => {
    if (selectedFirm1 && selectedFirm2) {
      navigation.navigate('Comparison', {
        firm1: selectedFirm1,
        firm2: selectedFirm2,
      });
    }
  };

  const togglePin = (firmId: number) => {
    setPinnedFirms(prev =>
      prev.includes(firmId)
        ? prev.filter(id => id !== firmId)
        : [...prev, firmId],
    );
  };

  const handleOpenModal = (firmNumber: 1 | 2) => {
    setCurrentSelectingFirm(firmNumber);
    setIsModalVisible(true);
  };

  const handleSelectFirm = (firm: { id: number; name: string }) => {
    if (currentSelectingFirm === 1) {
      setSelectedFirm1(firm.name);
    } else {
      setSelectedFirm2(firm.name);
    }
    setIsModalVisible(false);
  };

  return (
    <LinearGradient
      colors={[COLORS.white, '#F7F8FA', '#F7F8FA']}
      locations={[0, 0.3, 0]}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.headerSection}>
            <View>
              <View style={styles.header}>
                <Image
                  source={require('../../../assets/images/logo_icon.png')}
                  style={styles.logoIcon}
                />
                <Text style={styles.headerTitle}>Compare</Text>
                <View style={styles.headerIcons}>
                  <TouchableOpacity
                    style={styles.iconButton}
                    activeOpacity={0.7}
                  >
                    <Bell size={24} color={COLORS.dark} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.iconButton}
                    activeOpacity={0.7}
                  >
                    <Menu size={24} color={COLORS.dark} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.tabContainer}>
              <View style={styles.tabPill}>
                <TouchableOpacity
                  style={[
                    styles.tab,
                    activeTab === 'Prop Firms' && styles.tabActive,
                  ]}
                  onPress={() => setActiveTab('Prop Firms')}
                  activeOpacity={0.7}
                >
                  <Text
                    style={[
                      styles.tabText,
                      activeTab === 'Prop Firms' && styles.tabTextActive,
                    ]}
                  >
                    Prop Firms
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.tab,
                    activeTab === 'Broker' && styles.tabActive,
                  ]}
                  onPress={() => setActiveTab('Broker')}
                  activeOpacity={0.7}
                >
                  <Text
                    style={[
                      styles.tabText,
                      activeTab === 'Broker' && styles.tabTextActive,
                    ]}
                  >
                    Broker
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.compareSection}>
            <Text style={styles.compareTitle}>Compare Prop Firms</Text>
            <View style={styles.compareCard}>
              <TouchableOpacity
                style={[
                  styles.dropdownContainer,
                  styles.dropdownContainerFirst,
                ]}
                onPress={() => handleOpenModal(1)}
                activeOpacity={0.7}
              >
                <View style={styles.iconBox} />
                <View style={styles.dropdownContent}>
                  <Text style={styles.dropdownText}>{selectedFirm1}</Text>
                </View>
                <ChevronDown size={20} color={COLORS.textSecondary} />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.dropdownContainer}
                onPress={() => handleOpenModal(2)}
                activeOpacity={0.7}
              >
                <View style={styles.iconBox} />
                <View style={styles.dropdownContent}>
                  <Text
                    style={[
                      styles.dropdownText,
                      !selectedFirm2 && styles.dropdownPlaceholder,
                    ]}
                  >
                    {selectedFirm2 || 'Select Prop Firm 2'}
                  </Text>
                </View>
                <ChevronDown size={20} color={COLORS.textSecondary} />
              </TouchableOpacity>

              <View
                style={[styles.dropdownContainer, styles.dropdownContainerLast]}
              >
                <TouchableOpacity style={styles.addButton} activeOpacity={0.7}>
                  <View style={styles.addIconCircle}>
                    <Plus size={16} color={COLORS.primary} />
                  </View>
                  <Text style={styles.addButtonText}>Add Another Firm</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.compareButton}
                activeOpacity={0.7}
                onPress={handleComparePress}
              >
                <Text style={styles.compareButtonText}>Compare</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.leaderboardSection}>
            <View style={styles.leaderboardHeader}>
              <Text style={styles.leaderboardTitle}>
                Prop Firms Leaderboard
              </Text>
              <TouchableOpacity activeOpacity={0.7} onPress={handleFilterPress}>
                <View style={styles.WrapListFilter}>
                  <ListFilter size={24} color={COLORS.dark} />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.WarpSearchFirm}>
              <View style={styles.searchContainer}>
                <Search size={20} color="#5C5C5C" />
                <TextInput
                  placeholder="Search"
                  placeholderTextColor="#9CA3AF"
                  style={styles.searchInput}
                />
              </View>

              {propFirmsData.map((firm, index) => {
                const isPinned = pinnedFirms.includes(firm.id);
                return (
                  <View
                    key={firm.id}
                    style={[
                      styles.firmCard,
                      index === propFirmsData.length - 1 && styles.firmCardLast,
                    ]}
                  >
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('FirmDetails', {
                          firmId: firm.id,
                          firmName: firm.name,
                        })
                      }
                      activeOpacity={0.7}
                    >
                      <View style={styles.firmLeft}>
                        <View style={styles.firmIconBox} />
                        <View style={styles.firmInfo}>
                          <Text style={styles.firmName}>{firm.name}</Text>
                          <Text style={styles.firmMeta}>
                            {firm.location} • {firm.years} • ★ {firm.rating}
                          </Text>
                        </View>
                        <Text style={styles.rankNumber}>#{firm.rank}</Text>
                      </View>
                      <View style={styles.firmInfo}>
                        <View style={styles.firmStats}>
                          <View style={styles.statItem}>
                            <Text style={styles.statLabel}>Max Allocation</Text>
                            <Text style={styles.statValue}>
                              {firm.maxAllocation}
                            </Text>
                          </View>

                          <View style={styles.separator} />

                          <View style={styles.statItem}>
                            <Text style={styles.statLabel}>Leverage</Text>
                            <Text style={styles.statValue}>
                              {firm.leverage}
                            </Text>
                          </View>

                          <View style={styles.separator} />

                          <View style={styles.statItem}>
                            <Text style={styles.statLabel}>Daily DD</Text>
                            <Text style={styles.statValue}>{firm.dailyDD}</Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <View style={styles.firmRight}>
                      <TouchableOpacity
                        style={[
                          styles.actionButton,
                          isPinned && styles.actionButtonPinned,
                        ]}
                        onPress={() => togglePin(firm.id)}
                        activeOpacity={0.7}
                      >
                        <View
                          style={
                            isPinned
                              ? styles.pinnedIconContainer
                              : styles.unpinnedIconContainer
                          }
                        >
                          <Pin size={16} color={COLORS.primary} />
                        </View>
                        <Text
                          style={[
                            styles.actionButtonText,
                            isPinned && styles.actionButtonTextPinned,
                          ]}
                        >
                          {isPinned ? 'Pinned' : 'Select to Compare'}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

      <SelectPropFirm
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onSelectFirm={handleSelectFirm}
        selectedFirm={
          currentSelectingFirm === 1 ? selectedFirm1 : selectedFirm2
        }
        modalTitle={`Select Prop Firm ${currentSelectingFirm}`}
      />
    </LinearGradient>
  );
};

export default CompareScreen;
