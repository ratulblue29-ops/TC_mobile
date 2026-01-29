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
import { Bell, Menu, Search, Mic } from 'lucide-react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';

type TabType = 'All Instruments' | 'Watchlist';
type CategoryType = 'All' | 'Forex' | 'Indices' | 'Crypto' | 'Commodities';
type SentimentLevel = 'HIGH' | 'MEDIUM' | 'LOW';

const COLORS = {
  primary: '#00897B',
  success: '#4CAF50',
  error: '#F44336',
  warning: '#FF9800',
  white: '#FFFFFF',
  textMain: '#212121',
  textSecondary: '#757575',
};

interface InstrumentData {
  id: string;
  symbol: string;
  category: string;
  performance: string;
  sentiment: SentimentLevel;
  bearish: number;
  bullish: number;
}

const extremeWatchlistData: InstrumentData[] = [
  {
    id: '1',
    symbol: 'XAUUSD',
    category: 'Forex',
    performance: '+6% vs 24h',
    sentiment: 'HIGH',
    bearish: 68,
    bullish: 32,
  },
  {
    id: '2',
    symbol: 'XAUUSD',
    category: 'Forex',
    performance: '+6% vs 24h',
    sentiment: 'HIGH',
    bearish: 68,
    bullish: 32,
  },
  {
    id: '3',
    symbol: 'XAUUSD',
    category: 'Forex',
    performance: '+6% vs 24h',
    sentiment: 'HIGH',
    bearish: 68,
    bullish: 32,
  },
];

const otherInstrumentsData: InstrumentData[] = [
  {
    id: '4',
    symbol: 'XAUUSD',
    category: 'Forex',
    performance: '+6% vs 24h',
    sentiment: 'HIGH',
    bearish: 68,
    bullish: 32,
  },
  {
    id: '5',
    symbol: 'EURUSD',
    category: 'Forex',
    performance: '+3% vs 24h',
    sentiment: 'MEDIUM',
    bearish: 55,
    bullish: 45,
  },
  {
    id: '6',
    symbol: 'GOOGL',
    category: 'Stocks',
    performance: '0% vs 24h',
    sentiment: 'LOW',
    bearish: 40,
    bullish: 60,
  },
  {
    id: '7',
    symbol: 'BTCUSD',
    category: 'Crypto',
    performance: '+5% vs 24h',
    sentiment: 'HIGH',
    bearish: 65,
    bullish: 35,
  },
];

const categories: CategoryType[] = [
  'All',
  'Forex',
  'Indices',
  'Crypto',
  'Commodities',
];

const getSentimentColor = (sentiment: SentimentLevel): string => {
  switch (sentiment) {
    case 'HIGH':
      return COLORS.success;
    case 'MEDIUM':
      return COLORS.warning;
    case 'LOW':
      return COLORS.error;
    default:
      return COLORS.textSecondary;
  }
};

const SentimentBar = ({
  bearish,
  bullish,
}: {
  bearish: number;
  bullish: number;
}) => {
  const totalDashes = 10;
  const bearishDashes = Math.round((bearish / 100) * totalDashes);
  const bullishDashes = totalDashes - bearishDashes;

  return (
    <View style={styles.sentimentBarContainer}>
      <Text style={styles.sentimentPercentage}>{bearish}%</Text>
      <View style={styles.sentimentBar}>
        <View style={styles.dashContainer}>
          {[...Array(bearishDashes)].map((_, index) => (
            <View
              key={`bearish-${index}`}
              style={[styles.dash, styles.dashBearish]}
            />
          ))}
        </View>
        <View style={styles.dashContainerRed}>
          <View style={styles.dashContainer}>
            {[...Array(bullishDashes)].map((_, index) => (
              <View
                key={`bullish-${index}`}
                style={[styles.dash, styles.dashBullish]}
              />
            ))}
          </View>
        </View>
      </View>
      <Text style={styles.sentimentPercentage}>{bullish}%</Text>
    </View>
  );
};

const InstrumentCard = ({ instrument }: { instrument: InstrumentData }) => {
  const sentimentColor = getSentimentColor(instrument.sentiment);

  return (
    <View style={styles.instrumentCard}>
      <View style={styles.cardHeader}>
        <Text style={styles.symbolText}>{instrument.symbol}</Text>
        <View style={[styles.sentimentBadge, { borderColor: sentimentColor }]}>
          <Text style={[styles.sentimentBadgeText, { color: sentimentColor }]}>
            {instrument.sentiment}
          </Text>
        </View>
      </View>

      <View style={styles.cardMeta}>
        <Text style={styles.metaText}>{instrument.category}</Text>
        <Text style={styles.metaDot}>•</Text>
        <Text style={styles.metaText}>{instrument.performance}</Text>
      </View>

      <SentimentBar bearish={instrument.bearish} bullish={instrument.bullish} />

      <View style={styles.cardActions}>
        <TouchableOpacity style={styles.analyzeButton} activeOpacity={0.7}>
          <Text style={styles.analyzeButtonText}>Analyze</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.detailsButton} activeOpacity={0.7}>
          <Text style={styles.detailsButtonText}>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SentimentsScreen = () => {
  const [activeTab, setActiveTab] = useState<TabType>('All Instruments');
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');

  return (
    <LinearGradient
      colors={['#ffffff', '#F7F8FA', '#F7F8FA']}
      locations={[0, 0.3, 0]}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.headerSection}>
            <View style={styles.header}>
              <Image
                source={require('../../../assets/images/logo_icon.png')}
                style={styles.logoIcon}
              />
              <Text style={styles.headerTitle}>Sentiments</Text>
              <View style={styles.headerIcons}>
                <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
                  <Bell size={24} color="#0B0F20" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
                  <Menu size={24} color="#0B0F20" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.tabContainer}>
              <View style={styles.tabPill}>
                <TouchableOpacity
                  style={[
                    styles.tab,
                    activeTab === 'All Instruments' && styles.tabActive,
                  ]}
                  onPress={() => setActiveTab('All Instruments')}
                  activeOpacity={0.7}
                >
                  <Text
                    style={[
                      styles.tabText,
                      activeTab === 'All Instruments' && styles.tabTextActive,
                    ]}
                  >
                    All Instruments
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.tab,
                    activeTab === 'Watchlist' && styles.tabActive,
                  ]}
                  onPress={() => setActiveTab('Watchlist')}
                  activeOpacity={0.7}
                >
                  <Text
                    style={[
                      styles.tabText,
                      activeTab === 'Watchlist' && styles.tabTextActive,
                    ]}
                  >
                    Watchlist
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.searchContainer}>
            <Search size={20} color="#5C5C5C" />
            <TextInput
              placeholder="Search"
              placeholderTextColor="#9CA3AF"
              style={styles.searchInput}
            />
            <Mic size={20} color="#5C5C5C" />
          </View>

          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.categoryScroll}
              contentContainerStyle={styles.categoryContainer}
              nestedScrollEnabled={true}
            >
              {categories.map(category => (
                <TouchableOpacity
                  key={category}
                  style={[
                    styles.categoryPill,
                    activeCategory === category && styles.categoryPillActive,
                  ]}
                  onPress={() => setActiveCategory(category)}
                  activeOpacity={0.7}
                >
                  <Text
                    style={[
                      styles.categoryText,
                      activeCategory === category && styles.categoryTextActive,
                    ]}
                  >
                    {category}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Extreme Watchlist</Text>
            {extremeWatchlistData.map(instrument => (
              <InstrumentCard key={instrument.id} instrument={instrument} />
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Other Instruments</Text>
            {otherInstrumentsData.map(instrument => (
              <InstrumentCard key={instrument.id} instrument={instrument} />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SentimentsScreen;
