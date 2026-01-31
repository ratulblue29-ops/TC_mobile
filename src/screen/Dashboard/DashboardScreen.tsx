import React, { useState, useCallback, useRef } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Bell,
  Menu,
  ChevronDown,
  ChevronRight,
  Zap,
  ArrowUpRight,
  RadioTower,
  ChartPie,
} from 'lucide-react-native';
import { LineChart } from 'react-native-chart-kit';
import styles from './style';
import NetworkIcon from '../../components/svg/Sitemap';
import BadgeIcon from '../../components/svg/Star';
import LinearGradient from 'react-native-linear-gradient';
import SelectAccountModal from '../../components/modal/dashboardModal/SelectAccountModal';

const { width } = Dimensions.get('window');

const COLORS = {
  primary: '#00897B',
  primaryLight: '#27A69A',
  secondary: '#0B0F20',
  background: '#F7F8FA',
  white: '#FFFFFF',
  cardBg: '#FFFFFF',
  textMain: '#0B0F20',
  textSecondary: '#2C3440',
  textMuted: '#4E5D66',
  success: '#00897B',
  warning: '#C3881B',
  danger: '#C54545',
  border: '#00000023',
  gradientStart: '#FFFFFF',
  gradientEnd: '#F7F8FA',
  chartBg: '#0B0F20',
  chartGrid: '#1F2937',
  balanceChange: '#4DB6AC',
  copierFollowers: '#E67E22',
  upgradeCard: '#E0F2F1',
  sectionChevronBg: '#EEF0F4',
};

const PERIODS = ['Week', 'Month', 'Year'] as const;
type Period = (typeof PERIODS)[number];

// ============================================
// DATA
// ============================================

const chartData = {
  labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  datasets: [
    {
      data: [50, 100, 80, 150, 120, 180, 160],
      color: () => COLORS.primaryLight,
      strokeWidth: 2,
    },
    {
      data: [30, 60, 50, 90, 70, 110, 100],
      color: () => COLORS.textMuted,
      strokeWidth: 2,
    },
  ],
};

const chartConfig = {
  backgroundColor: COLORS.chartBg,
  backgroundGradientFrom: COLORS.chartBg,
  backgroundGradientTo: COLORS.chartBg,
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '0',
  },
  propsForBackgroundLines: {
    strokeDasharray: '',
    stroke: COLORS.chartGrid,
    strokeWidth: 1,
  },
};

const metricsData = [
  {
    id: 1,
    icon: 'ChartPie',
    label: 'ROI',
    value: '$1,624',
    change: '+5.1%',
    changeColor: COLORS.success,
  },
  {
    id: 2,
    icon: 'ChartPie',
    label: 'PnL',
    value: '$1,624',
    change: '+5.1%',
    changeColor: COLORS.success,
  },
  {
    id: 3,
    icon: 'ChartPie',
    label: 'Win Rate',
    value: '3.4%',
    change: '+2.1%',
    changeColor: COLORS.success,
  },
];

const linkedAccountsData = [
  {
    id: 1,
    number: 'MT5-104392',
    broker: 'Exness',
    status: 'Active',
    statusColor: COLORS.success,
    amount: '$1,624',
    change: '+5.1%',
  },
  {
    id: 2,
    number: 'MT5-104392',
    broker: 'Exness',
    status: 'Warning',
    statusColor: COLORS.warning,
    amount: '$1,624',
    change: '+5.1%',
  },
  {
    id: 3,
    number: 'MT5-104392',
    broker: 'Exness',
    status: 'At Risk',
    statusColor: COLORS.danger,
    amount: '$1,624',
    change: '+5.1%',
  },
];

const copierAccountsData = [
  {
    id: 1,
    name: 'Master\nAccount 1',
    status: 'Active',
    followers: '10',
  },
  {
    id: 2,
    name: 'Master\nAccount 2',
    status: 'Active',
    followers: '10',
  },
  {
    id: 3,
    name: 'Master\nAccount 3',
    status: 'Disabled',
    followers: '10',
  },
];

const insightsData = [
  {
    id: 1,
    title: 'Best ROI Window',
    time: 'Trade Between 08:00-11:00 UTC',
    description:
      'Historical data shows +1.3% average ROI during this window. Favor high-liquidity instruments.1',
    priority: 'High',
  },
  {
    id: 2,
    title: 'Best ROI Window',
    time: 'Trade Between 08:00-11:00 UTC',
    description:
      'Historical data shows +1.3% average ROI during this window. Favor high-liquidity instruments.2',
    priority: 'High',
  },
  {
    id: 3,
    title: 'Best ROI Window',
    time: 'Trade Between 08:00-11:00 UTC',
    description:
      'Historical data shows +1.3% average ROI during this window. Favor high-liquidity instruments.3',
    priority: 'High',
  },
  {
    id: 4,
    title: 'Best ROI Window',
    time: 'Trade Between 08:00-11:00 UTC',
    description:
      'Historical data shows +1.3% average ROI during this window. Favor high-liquidity instruments.4',
    priority: 'High',
  },
  {
    id: 5,
    title: 'Best ROI Window',
    time: 'Trade Between 08:00-11:00 UTC',
    description:
      'Historical data shows +1.3% average ROI during this window. Favor high-liquidity instruments.5',
    priority: 'High',
  },
];

const topTradersData = [
  {
    id: 1,
    name: 'John FX',
    followers: '120 Followers',
    performance: '+5.1%',
    rank: 1,
    badgeColors: { start: '#FFC768', end: '#B88423' },
  },
  {
    id: 2,
    name: 'John FX',
    followers: '120 Followers',
    performance: '+5.1%',
    rank: 2,
    badgeColors: { start: '#D0D0D0', end: '#949494' },
  },
  {
    id: 3,
    name: 'John FX',
    followers: '120 Followers',
    performance: '+5.1%',
    rank: 3,
    badgeColors: { start: '#D28F77', end: '#A05F48' },
  },
];

// ============================================
// COMPONENTS
// ============================================

const Header = () => (
  <View style={styles.headerSection}>
    <View style={styles.header}>
      <Image
        source={require('../../../assets/images/logo_icon.png')}
        style={styles.logoIcon}
      />
      <Text style={styles.headerTitle}>Dashboard</Text>
      <View style={styles.headerIcons}>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
          <Bell size={24} color={COLORS.secondary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
          <Menu size={24} color={COLORS.secondary} />
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.accountSection}>
      <View>
        <Text style={styles.accountLabel}>Account</Text>
        <Text style={styles.accountNumber}>MT5-104392</Text>
      </View>
      <TouchableOpacity activeOpacity={0.7}>
        <ChevronDown size={24} color={COLORS.secondary} />
      </TouchableOpacity>
    </View>
  </View>
);

const UpgradeCard = () => (
  <View style={styles.upgradeCard}>
    <View style={styles.upgradeContent}>
      <Text style={styles.upgradeTitle}>Unlock Pro Trader</Text>
      <Text style={styles.upgradeSubtitle}>
        <Text style={styles.upgradeSubtitleRegular}>
          Advanced analytics &{'\n'}
        </Text>
        <Text style={styles.upgradeSubtitleBold}>5 copier accounts</Text>
      </Text>
    </View>
    <TouchableOpacity style={styles.upgradeButton} activeOpacity={0.7}>
      <Zap size={16} color={COLORS.white} fill={COLORS.white} />
      <Text style={styles.upgradeButtonText}>Upgrade</Text>
    </TouchableOpacity>
  </View>
);

const SectionHeader = ({
  title,
  onPress,
}: {
  title: string;
  onPress?: () => void;
}) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <TouchableOpacity
      style={styles.sectionChevron}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <ChevronRight size={24} color={COLORS.secondary} />
    </TouchableOpacity>
  </View>
);

const PeriodTabs = ({
  periods,
  selectedPeriod,
  onPeriodChange,
  tabStyle,
  activeStyle,
  textStyle,
  activeTextStyle,
}: {
  periods: readonly Period[];
  selectedPeriod: Period;
  onPeriodChange: (period: Period) => void;
  tabStyle: any;
  activeStyle: any;
  textStyle: any;
  activeTextStyle: any;
}) => (
  <View style={tabStyle}>
    {periods.map(period => (
      <TouchableOpacity
        key={period}
        style={[styles.periodTab, selectedPeriod === period && activeStyle]}
        onPress={() => onPeriodChange(period)}
        activeOpacity={0.7}
      >
        <Text style={[textStyle, selectedPeriod === period && activeTextStyle]}>
          {period}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);

const MetricIcon = ({ iconName }: { iconName: string }) => {
  switch (iconName) {
    case 'Zap':
      return <Zap size={24} color={COLORS.primary} />;
    case 'RadioTower':
      return <RadioTower size={24} color={COLORS.primary} />;
    case 'ChartPie':
      return <ChartPie size={24} color={COLORS.primary} />;
    default:
      return null;
  }
};

const BalanceCard = ({
  selectedPeriod,
  onPeriodChange,
}: {
  selectedPeriod: Period;
  onPeriodChange: (period: Period) => void;
}) => (
  <View style={styles.balanceCard}>
    <View style={styles.balanceHeader}>
      <View>
        <Text style={styles.balanceAmount}>$175,320.56</Text>
        <Text style={styles.balanceChange}>+18%</Text>
      </View>
      <View>
        <Text style={styles.openPosition}>
          <Text style={styles.openAmount}>$256.35</Text>
          <Text style={styles.openLabel}> Open</Text>
        </Text>
      </View>
    </View>

    <PeriodTabs
      periods={PERIODS}
      selectedPeriod={selectedPeriod}
      onPeriodChange={onPeriodChange}
      tabStyle={styles.periodTabs}
      activeStyle={styles.periodTabActive}
      textStyle={styles.periodTabText}
      activeTextStyle={styles.periodTabTextActive}
    />

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
      withDots={false}
    />
  </View>
);

const MetricsCards = () => (
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    style={styles.metricsScroll}
  >
    {metricsData.map(metric => (
      <View key={metric.id} style={styles.metricCard}>
        <MetricIcon iconName={metric.icon} />
        <Text style={styles.metricLabel}>{metric.label}</Text>
        <Text style={styles.metricValue}>{metric.value}</Text>
        <View style={styles.metricChange}>
          <Text
            style={[styles.metricChangeText, { color: metric.changeColor }]}
          >
            {metric.change}
          </Text>
          <ArrowUpRight size={16} color={metric.changeColor} />
        </View>
      </View>
    ))}
  </ScrollView>
);

const LinkedAccountCard = ({
  account,
  index,
  isFirst,
  isLast,
}: {
  account: (typeof linkedAccountsData)[0];
  index: number;
  isFirst: boolean;
  isLast: boolean;
}) => (
  <View
    style={[
      styles.accountCard,
      isFirst && styles.accountCardFirst,
      isLast && styles.accountCardLast,
    ]}
  >
    <View style={styles.accountCardLeft}>
      <View style={styles.accountCardHeader}>
        <Text style={styles.accountCardNumber}>{account.number}</Text>
        <View
          style={[styles.statusBadge, { borderColor: account.statusColor }]}
        >
          <Text
            style={[styles.statusBadgeText, { color: account.statusColor }]}
          >
            {account.status}
          </Text>
        </View>
      </View>
      <Text style={styles.accountCardBroker}>{account.broker}</Text>
    </View>
    <View style={styles.accountCardRight}>
      <Text style={styles.accountCardAmount}>{account.amount}</Text>
      <View style={styles.accountCardChange}>
        <Text style={styles.accountCardChangeText}>{account.change}</Text>
        <ArrowUpRight size={16} color={COLORS.primary} />
      </View>
    </View>
  </View>
);

const LinkedAccounts = ({ onOpenModal }: { onOpenModal: () => void }) => (
  <>
    <SectionHeader title="Linked Accounts" onPress={onOpenModal} />
    {linkedAccountsData.map((account, index) => (
      <LinkedAccountCard
        key={account.id}
        account={account}
        index={index}
        isFirst={index === 0}
        isLast={index === linkedAccountsData.length - 1}
      />
    ))}
  </>
);

const CopierCard = ({ copier }: { copier: (typeof copierAccountsData)[0] }) => {
  const isDisabled = copier.status === 'Disabled';
  return (
    <View style={styles.copierCard}>
      <Text style={styles.copierName}>{copier.name}</Text>
      <View
        style={[
          styles.copierStatusBadge,
          isDisabled && { borderColor: COLORS.secondary },
        ]}
      >
        <Text
          style={[
            styles.copierStatusText,
            isDisabled && { color: COLORS.secondary },
          ]}
        >
          {copier.status}
        </Text>
      </View>
      <View style={styles.copierFollowers}>
        <NetworkIcon width={16} height={16} color={COLORS.white} />
        <Text style={styles.copierFollowersText}>{copier.followers}</Text>
      </View>
    </View>
  );
};

const CopierAccounts = () => (
  <>
    <SectionHeader title="Copiers Accounts" />
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.copierScroll}
    >
      {copierAccountsData.map(copier => (
        <CopierCard key={copier.id} copier={copier} />
      ))}
    </ScrollView>
  </>
);

const InsightCard = ({
  insight,
  activeIndex,
  onDotPress,
}: {
  insight: (typeof insightsData)[0];
  activeIndex: number;
  onDotPress: (index: number) => void;
}) => (
  <View style={[styles.insightCard, { width: width - 40 }]}>
    <View style={styles.insightHeader}>
      <Text style={styles.insightTitle}>{insight.title}</Text>
      <View style={styles.insightBadge}>
        <RadioTower size={12} color={COLORS.white} />
        <Text style={styles.insightBadgeText}>{insight.priority}</Text>
      </View>
    </View>
    <Text style={styles.insightTime}>{insight.time}</Text>
    <Text style={styles.insightDescription}>{insight.description}</Text>

    <View style={styles.paginationDots}>
      {insightsData.map((_, dotIndex) => (
        <TouchableOpacity
          key={dotIndex}
          style={[
            styles.paginationDot,
            activeIndex === dotIndex && styles.paginationDotActive,
          ]}
          onPress={() => onDotPress(dotIndex)}
          activeOpacity={0.7}
        />
      ))}
    </View>
  </View>
);

const SmartInsights = ({
  activeIndex,
  onScroll,
  onDotPress,
  scrollViewRef,
}: {
  activeIndex: number;
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  onDotPress: (index: number) => void;
  scrollViewRef: React.RefObject<ScrollView | null>;
}) => (
  <>
    <SectionHeader title="Smart Insights" />
    <ScrollView
      ref={scrollViewRef}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={onScroll}
      scrollEventThrottle={16}
    >
      {insightsData.map(insight => (
        <InsightCard
          key={insight.id}
          insight={insight}
          activeIndex={activeIndex}
          onDotPress={onDotPress}
        />
      ))}
    </ScrollView>
  </>
);

const TraderCard = ({
  trader,
  style,
}: {
  trader: (typeof topTradersData)[0];
  style: any;
}) => (
  <View style={[styles.traderCard, style]}>
    <View style={styles.traderBadge}>
      <BadgeIcon
        width={32}
        height={34}
        startColor={trader.badgeColors.start}
        endColor={trader.badgeColors.end}
      />
      <Text style={styles.traderRank}>{trader.rank}</Text>
    </View>
    <View style={styles.traderInfo}>
      <Text style={styles.traderName}>{trader.name}</Text>
      <Text style={styles.traderFollowers}>{trader.followers}</Text>
    </View>
    <View style={styles.traderPerformance}>
      <Text style={styles.traderPerformanceText}>{trader.performance}</Text>
      <ArrowUpRight size={16} color={COLORS.primary} />
    </View>
  </View>
);

const TopTraders = ({
  selectedPeriod,
  onPeriodChange,
}: {
  selectedPeriod: Period;
  onPeriodChange: (period: Period) => void;
}) => {
  const getTraderCardStyle = useCallback((index: number) => {
    if (index === 0) return styles.traderCardFirst;
    if (index === 1) return styles.traderCardMiddle;
    return styles.traderCardLast;
  }, []);

  return (
    <>
      <SectionHeader title="Top Traders" />
      <View style={styles.TopTraders}>
        <PeriodTabs
          periods={PERIODS}
          selectedPeriod={selectedPeriod}
          onPeriodChange={onPeriodChange}
          tabStyle={styles.periodTabs2}
          activeStyle={styles.traderPeriodTabActive2}
          textStyle={styles.traderPeriodTabText2}
          activeTextStyle={styles.traderPeriodTabTextActive}
        />
        {topTradersData.map((trader, index) => (
          <TraderCard
            key={trader.id}
            trader={trader}
            style={getTraderCardStyle(index)}
          />
        ))}
      </View>
    </>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================

const DashboardScreen = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<Period>('Week');
  const [selectedTopTraderPeriod, setSelectedTopTraderPeriod] =
    useState<Period>('Week');
  const [activeInsightIndex, setActiveInsightIndex] = useState(0);

  const insightScrollViewRef = useRef<ScrollView>(null);

  const [isAccountModalVisible, setIsAccountModalVisible] = useState(false);
  const [selectedAccountId, setSelectedAccountId] = useState(1);

  const handlePeriodChange = useCallback((period: Period) => {
    setSelectedPeriod(period);
  }, []);

  const handleTopTraderPeriodChange = useCallback((period: Period) => {
    setSelectedTopTraderPeriod(period);
  }, []);

  const handleInsightScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
      setActiveInsightIndex(slideIndex);
    },
    [],
  );

  const handleInsightChange = useCallback((index: number) => {
    setActiveInsightIndex(index);
    insightScrollViewRef.current?.scrollTo({
      x: index * width,
      animated: true,
    });
  }, []);

  const handleOpenAccountModal = useCallback(() => {
    setIsAccountModalVisible(true);
  }, []);

  const handleCloseAccountModal = useCallback(() => {
    setIsAccountModalVisible(false);
  }, []);

  const handleSelectAccount = useCallback((accountId: number) => {
    setSelectedAccountId(accountId);
  }, []);

  return (
    <LinearGradient
      colors={[COLORS.gradientStart, COLORS.gradientEnd, COLORS.gradientEnd]}
      locations={[0, 0.3, 0]}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header />
          <UpgradeCard />

          <SectionHeader title="Overview" />
          <BalanceCard
            selectedPeriod={selectedPeriod}
            onPeriodChange={handlePeriodChange}
          />

          <MetricsCards />
          <LinkedAccounts onOpenModal={handleOpenAccountModal} />
          <CopierAccounts />

          <SmartInsights
            activeIndex={activeInsightIndex}
            onScroll={handleInsightScroll}
            onDotPress={handleInsightChange}
            scrollViewRef={insightScrollViewRef}
          />

          <TopTraders
            selectedPeriod={selectedTopTraderPeriod}
            onPeriodChange={handleTopTraderPeriodChange}
          />
        </ScrollView>
      </SafeAreaView>

      <SelectAccountModal
        visible={isAccountModalVisible}
        onClose={handleCloseAccountModal}
        selectedAccountId={selectedAccountId}
        onSelectAccount={handleSelectAccount}
      />
    </LinearGradient>
  );
};

export default DashboardScreen;
