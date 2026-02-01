import React, { useState, useRef, useCallback } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Settings,
  Menu,
  ChevronDown,
  Plus,
  User,
  Grid3x3,
  Building2,
  Smartphone,
  ArrowUp,
  ArrowDown,
  RefreshCw,
} from 'lucide-react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import AccountSettingsModal from '../../components/modal/AccountModal/AccountSettingsModal';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/RootNavigator';

const { width } = Dimensions.get('window');

const COLORS = {
  primary: '#00897B',
  primaryLight: '#27A69A',
  secondary: '#0B0F20',
  background: '#F7F8FA',
  white: '#FFFFFF',
  textMain: '#0B0F20',
  textSecondary: '#4E5D66',
  success: '#4CAF50',
  danger: '#C54545',
  lightGreen: '#E8F5E9',
  lightRed: '#FFEBEE',
  gradientStart: '#FFFFFF',
  gradientEnd: '#F7F8FA',
  chartBg: '#0B0F20',
};

type TabType = 'Portfolio' | 'ROI Trends' | 'Trades';
type PeriodType = 'Week' | 'Month' | 'Year';
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const chartDataSets = [
  {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        data: [150, 200, 180, 300, 510, 400, 350],
        color: () => COLORS.primaryLight,
        strokeWidth: 2,
      },
    ],
  },
  {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        data: [200, 250, 220, 350, 460, 380, 420],
        color: () => COLORS.primaryLight,
        strokeWidth: 2,
      },
    ],
  },
  {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        data: [180, 230, 190, 280, 490, 410, 380],
        color: () => COLORS.primaryLight,
        strokeWidth: 2,
      },
    ],
  },
];

const chartConfig = {
  backgroundColor: COLORS.chartBg,
  backgroundGradientFrom: COLORS.chartBg,
  backgroundGradientTo: COLORS.chartBg,
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(39, 166, 154, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  propsForDots: {
    r: '4',
    strokeWidth: '2',
    stroke: COLORS.primaryLight,
  },
  propsForBackgroundLines: {
    strokeDasharray: '',
    stroke: '#1F2937',
    strokeWidth: 1,
  },
};

const metricsData = [
  {
    id: 1,
    label: 'Status',
    value: 'Active',
    subValue: 'Since 10 Aug 2025',
    change: null,
    bgColor: COLORS.lightGreen,
    valueColor: COLORS.primary,
  },
  {
    id: 2,
    label: 'PnL',
    value: '$1,205',
    change: '-2.1%',
    changeType: 'negative',
    bgColor: COLORS.lightRed,
    valueColor: COLORS.danger,
  },
  {
    id: 3,
    label: 'Balance',
    value: '$20,450',
    change: '+2.1%',
    changeType: 'positive',
    bgColor: COLORS.white,
    valueColor: COLORS.textMain,
  },
  {
    id: 4,
    label: 'ROI',
    value: '$20,450',
    change: '+2.1%',
    changeType: 'positive',
    bgColor: COLORS.white,
    valueColor: COLORS.textMain,
  },
  {
    id: 5,
    label: 'Win Rate',
    value: '71%',
    change: '+2.1%',
    changeType: 'positive',
    bgColor: COLORS.white,
    valueColor: COLORS.textMain,
  },
  {
    id: 6,
    label: 'Max Drawdown',
    value: '-3.4%',
    change: '-0.3%',
    changeType: 'negative',
    bgColor: COLORS.white,
    valueColor: COLORS.textMain,
  },
  {
    id: 7,
    label: 'Trades',
    value: '20',
    change: '-0.3%',
    changeType: 'negative',
    bgColor: COLORS.white,
    valueColor: COLORS.textMain,
  },
  {
    id: 8,
    label: 'Open Positions',
    value: '3',
    change: '+2.1%',
    changeType: 'positive',
    bgColor: COLORS.white,
    valueColor: COLORS.textMain,
  },
];

const Header = ({
  onSettingsPress,
  onAddAccountPress,
}: {
  onSettingsPress: () => void;
  onAddAccountPress: () => void;
}) => (
  <View style={styles.headerSection}>
    <View style={styles.header}>
      <Image
        source={require('../../../assets/images/logo_icon.png')}
        style={styles.logoIcon}
      />
      <Text style={styles.headerTitle}>Accounts</Text>
      <View style={styles.headerIcons}>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
          <Menu size={24} color={COLORS.secondary} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          activeOpacity={0.7}
          onPress={onAddAccountPress}
        >
          <Plus size={24} color={COLORS.secondary} />
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.accountSection}>
      <View>
        <Text style={styles.accountLabel}>Account</Text>
        <Text style={styles.accountNumber}>MT5-104392</Text>
      </View>
      <View style={styles.headerIcons}>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
          <ChevronDown size={24} color={COLORS.secondary} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          activeOpacity={0.7}
          onPress={onSettingsPress}
        >
          <Settings size={24} color={COLORS.secondary} />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const AccountDetailsCard = () => (
  <View style={styles.detailsCard}>
    <View style={styles.detailsRow}>
      <View style={styles.detailItem}>
        <User size={16} color={COLORS.textSecondary} />
        <View style={styles.detailTextContainer}>
          <Text style={styles.detailLabel}>Name</Text>
          <Text style={styles.detailValue}>MT5-104392</Text>
        </View>
      </View>

      <View style={styles.detailItem}>
        <Grid3x3 size={16} color={COLORS.textSecondary} />
        <View style={styles.detailTextContainer}>
          <Text style={styles.detailLabel}>Type</Text>
          <Text style={styles.detailValue}>Prop</Text>
        </View>
      </View>
    </View>

    <View style={styles.detailsRow}>
      <View style={styles.detailItem}>
        <Building2 size={16} color={COLORS.textSecondary} />
        <View style={styles.detailTextContainer}>
          <Text style={styles.detailLabel}>Broker</Text>
          <Text style={styles.detailValue}>IC Markets</Text>
        </View>
      </View>

      <View style={styles.detailItem}>
        <Smartphone size={16} color={COLORS.textSecondary} />
        <View style={styles.detailTextContainer}>
          <Text style={styles.detailLabel}>Platform</Text>
          <Text style={styles.detailValue}>MetaTrader 5</Text>
        </View>
      </View>
    </View>
  </View>
);

const TabNavigation = ({
  activeTab,
  onTabChange,
}: {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}) => (
  <View style={styles.tabContainer}>
    <View style={styles.tabPill}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Portfolio' && styles.tabActive]}
        onPress={() => onTabChange('Portfolio')}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === 'Portfolio' && styles.tabTextActive,
          ]}
        >
          Portfolio
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'ROI Trends' && styles.tabActive]}
        onPress={() => onTabChange('ROI Trends')}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === 'ROI Trends' && styles.tabTextActive,
          ]}
        >
          ROI Trends
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Trades' && styles.tabActive]}
        onPress={() => onTabChange('Trades')}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === 'Trades' && styles.tabTextActive,
          ]}
        >
          Trades
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

const PortfolioCardItem = ({
  chartData,
  selectedPeriod,
  onPeriodChange,
}: {
  chartData: (typeof chartDataSets)[0];
  selectedPeriod: PeriodType;
  onPeriodChange: (period: PeriodType) => void;
}) => (
  <View style={styles.portfolioCard}>
    <Text style={styles.portfolioLabel}>Portfolio Value</Text>

    <View style={styles.portfolioHeader}>
      <View>
        <Text style={styles.portfolioValue}>$175,320.56</Text>
        <Text style={styles.portfolioChange}>+18%</Text>
      </View>
      <View>
        <Text style={styles.openValue}>
          <Text style={styles.openAmount}>$256.35</Text>
          <Text style={styles.openLabel}> open</Text>
        </Text>
      </View>
    </View>

    <View style={styles.periodToggle}>
      <TouchableOpacity
        style={[
          styles.periodButton,
          selectedPeriod === 'Week' && styles.periodButtonActive,
        ]}
        onPress={() => onPeriodChange('Week')}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.periodText,
            selectedPeriod === 'Week' && styles.periodTextActive,
          ]}
        >
          Week
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.periodButton,
          selectedPeriod === 'Month' && styles.periodButtonActive,
        ]}
        onPress={() => onPeriodChange('Month')}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.periodText,
            selectedPeriod === 'Month' && styles.periodTextActive,
          ]}
        >
          Month
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.periodButton,
          selectedPeriod === 'Year' && styles.periodButtonActive,
        ]}
        onPress={() => onPeriodChange('Year')}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.periodText,
            selectedPeriod === 'Year' && styles.periodTextActive,
          ]}
        >
          Year
        </Text>
      </TouchableOpacity>
    </View>

    <LineChart
      data={chartData}
      width={width - 60}
      height={220}
      chartConfig={chartConfig}
      bezier
      style={styles.chart}
      withInnerLines={true}
      withOuterLines={false}
      withVerticalLines={false}
      withHorizontalLines={true}
      withDots={true}
    />
  </View>
);

const PortfolioCarousel = ({
  selectedPeriod,
  onPeriodChange,
  activeSlide,
  onSlideChange,
}: {
  selectedPeriod: PeriodType;
  onPeriodChange: (period: PeriodType) => void;
  activeSlide: number;
  onSlideChange: (index: number) => void;
}) => {
  const flatListRef = useRef<FlatList>(null);

  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
      if (slideIndex !== activeSlide) {
        onSlideChange(slideIndex);
      }
    },
    [activeSlide, onSlideChange],
  );

  const handleDotPress = useCallback(
    (index: number) => {
      flatListRef.current?.scrollToIndex({ index, animated: true });
      onSlideChange(index);
    },
    [onSlideChange],
  );

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={chartDataSets}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <PortfolioCardItem
            chartData={item}
            selectedPeriod={selectedPeriod}
            onPeriodChange={onPeriodChange}
          />
        )}
        keyExtractor={(_, index) => index.toString()}
        snapToInterval={width}
        decelerationRate="fast"
      />

      <View style={styles.paginationDots}>
        {chartDataSets.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.paginationDot,
              activeSlide === index && styles.paginationDotActive,
            ]}
            onPress={() => handleDotPress(index)}
            activeOpacity={0.7}
          />
        ))}
      </View>
    </View>
  );
};

const MetricCard = ({ metric }: { metric: (typeof metricsData)[0] }) => (
  <View style={[styles.metricCard, { backgroundColor: metric.bgColor }]}>
    <Text style={styles.metricLabel}>{metric.label}</Text>
    <Text style={[styles.metricValue, { color: metric.valueColor }]}>
      {metric.value}
    </Text>

    {metric.subValue && (
      <Text style={styles.metricSubValue}>{metric.subValue}</Text>
    )}

    {metric.change && (
      <View style={styles.metricChangeContainer}>
        <Text
          style={[
            styles.metricChangeText,
            {
              color:
                metric.changeType === 'positive'
                  ? COLORS.success
                  : COLORS.danger,
            },
          ]}
        >
          {metric.change}
        </Text>
        {metric.changeType === 'positive' ? (
          <ArrowUp size={14} color={COLORS.success} />
        ) : (
          <ArrowDown size={14} color={COLORS.danger} />
        )}
      </View>
    )}
  </View>
);

const KeyMetrics = () => (
  <View style={styles.metricsSection}>
    <Text style={styles.metricsTitle}>Key Metrics</Text>
    <View style={styles.metricsGrid}>
      {metricsData.map(metric => (
        <MetricCard key={metric.id} metric={metric} />
      ))}
    </View>
  </View>
);

const SyncStatus = () => (
  <View style={styles.syncStatus}>
    <RefreshCw size={16} color={COLORS.textSecondary} />
    <Text style={styles.syncText}>
      Last synced 2 minutes ago, Drag down to refresh
    </Text>
  </View>
);

const AccountsScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [activeTab, setActiveTab] = useState<TabType>('Portfolio');
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodType>('Week');
  const [activeSlide, setActiveSlide] = useState(0);
  const [isSettingsModalVisible, setIsSettingsModalVisible] = useState(false);

  const handleOpenSettings = useCallback(() => {
    setIsSettingsModalVisible(true);
  }, []);

  const handleCloseSettings = useCallback(() => {
    setIsSettingsModalVisible(false);
  }, []);

  const handleAddAccount = useCallback(() => {
    navigation.navigate('AddAccount');
  }, [navigation]);

  return (
    <LinearGradient
      colors={[COLORS.gradientStart, COLORS.gradientEnd, COLORS.gradientEnd]}
      locations={[0, 0.3, 0]}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header
            onSettingsPress={handleOpenSettings}
            onAddAccountPress={handleAddAccount}
          />
          <AccountDetailsCard />
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
          <PortfolioCarousel
            selectedPeriod={selectedPeriod}
            onPeriodChange={setSelectedPeriod}
            activeSlide={activeSlide}
            onSlideChange={setActiveSlide}
          />
          <KeyMetrics />
          <SyncStatus />
        </ScrollView>
      </SafeAreaView>

      <AccountSettingsModal
        visible={isSettingsModalVisible}
        onClose={handleCloseSettings}
      />
    </LinearGradient>
  );
};

export default AccountsScreen;
