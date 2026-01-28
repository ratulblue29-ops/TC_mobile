import React, { useState, useCallback, useMemo, useRef } from 'react';
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

const { width } = Dimensions.get('window');

const PERIODS = ['Week', 'Month', 'Year'] as const;
type Period = typeof PERIODS[number];

const DashboardScreen = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<Period>('Week');
  const [selectedTopTraderPeriod, setSelectedTopTraderPeriod] = useState<Period>('Week');
  const [activeInsightIndex, setActiveInsightIndex] = useState(0);

  const chartData = useMemo(() => ({
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        data: [50, 100, 80, 150, 120, 180, 160],
        color: () => '#27A69A',
        strokeWidth: 2,
      },
      {
        data: [30, 60, 50, 90, 70, 110, 100],
        color: () => '#4E5D66',
        strokeWidth: 2,
      },
    ],
  }), []);

  const chartConfig = useMemo(() => ({
    backgroundColor: '#0B0F20',
    backgroundGradientFrom: '#0B0F20',
    backgroundGradientTo: '#0B0F20',
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
      stroke: '#1F2937',
      strokeWidth: 1,
    },
  }), []);

  const linkedAccounts = useMemo(() => [
    { id: 1, number: 'MT5-104392', broker: 'Exness', status: 'Active', statusColor: '#00897B', amount: '$1,624', change: '+5.1%' },
    { id: 2, number: 'MT5-104392', broker: 'Exness', status: 'Warning', statusColor: '#C3881B', amount: '$1,624', change: '+5.1%' },
    { id: 3, number: 'MT5-104392', broker: 'Exness', status: 'At Risk', statusColor: '#C54545', amount: '$1,624', change: '+5.1%' },
  ], []);

  const copierAccounts = useMemo(() => [
    { id: 1, name: 'Master\nAccount 1', status: 'Active', followers: '10' },
    { id: 2, name: 'Master\nAccount 2', status: 'Active', followers: '10' },
    { id: 3, name: 'Master\nAccount 3', status: 'Disabled', followers: '10' },
  ], []);

  const topTraders = useMemo(() => [
    { id: 1, name: 'John FX', followers: '120 Followers', performance: '+5.1%', rank: 1 },
    { id: 2, name: 'John FX', followers: '120 Followers', performance: '+5.1%', rank: 2 },
    { id: 3, name: 'John FX', followers: '120 Followers', performance: '+5.1%', rank: 3 },
  ], []);

  const insights = useMemo(() => [
    { title: 'Best ROI Window', time: 'Trade Between 08:00-11:00 UTC', description: 'Historical data shows +1.3% average ROI during this\nwindow. Favor high-liquidity instruments.' },
    { title: 'Risk Alert', time: 'Trade Between 12:00-15:00 UTC', description: 'Increased volatility detected. Consider reducing position sizes during this period.' },
    { title: 'Market Opportunity', time: 'Trade Between 16:00-19:00 UTC', description: 'Strong trend indicators suggest favorable conditions for momentum strategies.' },
    { title: 'Portfolio Balance', time: 'Review Your Holdings', description: 'Your portfolio shows concentration risk. Consider diversifying across asset classes.' },
    { title: 'Performance Tip', time: 'Optimize Your Strategy', description: 'Analysis shows better results with shorter holding periods during current market conditions.' },
  ], []);

  const insightScrollViewRef = useRef<ScrollView>(null);

  const handlePeriodChange = useCallback((period: Period) => {
    setSelectedPeriod(period);
  }, []);

  const handleTopTraderPeriodChange = useCallback((period: Period) => {
    setSelectedTopTraderPeriod(period);
  }, []);

  const handleInsightScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveInsightIndex(slideIndex);
  }, []);

  const handleInsightChange = useCallback((index: number) => {
    setActiveInsightIndex(index);
    insightScrollViewRef.current?.scrollTo({
      x: index * width,
      animated: true,
    });
  }, []);

  const getTraderCardStyle = useCallback((index: number) => {
    if (index === 0) {
      return styles.traderCardFirst;
    }
    if (index === 1) {
      return styles.traderCardMiddle;
    }
    return styles.traderCardLast;
  }, []);

  const renderPeriodTabs = useCallback((
    selected: Period,
    onPress: (period: Period) => void,
    tabStyle: any,
    activeStyle: any,
    textStyle: any,
    activeTextStyle: any
  ) => (
    <View style={tabStyle}>
      {PERIODS.map((period) => (
        <TouchableOpacity
          key={period}
          style={[
            styles.periodTab,
            selected === period && activeStyle,
          ]}
          onPress={() => onPress(period)}
          activeOpacity={0.7}
        >
          <Text
            style={[
              textStyle,
              selected === period && activeTextStyle,
            ]}
          >
            {period}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  ), []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={require('../../../assets/images/logo_icon.png')}
            style={styles.logoIcon}
          />
          <Text style={styles.headerTitle}>Dashboard</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
              <Bell size={24} color="#0B0F20" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
              <Menu size={24} color="#0B0F20" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Account Section */}
        <View style={styles.accountSection}>
          <View>
            <Text style={styles.accountLabel}>Account</Text>
            <Text style={styles.accountNumber}>MT5-104392</Text>
          </View>
          <TouchableOpacity activeOpacity={0.7}>
            <ChevronDown size={24} color="#0B0F20" />
          </TouchableOpacity>
        </View>

        {/* Pro Trader Upgrade Card */}
        <View style={styles.upgradeCard}>
          <View style={styles.upgradeContent}>
            <Text style={styles.upgradeTitle}>Unlock Pro Trader</Text>
            <Text style={styles.upgradeSubtitle}>
              <Text style={styles.upgradeSubtitleRegular}>Advanced analytics &{'\n'}</Text>
              <Text style={styles.upgradeSubtitleBold}>5 copier accounts</Text>
            </Text>
          </View>
          <TouchableOpacity style={styles.upgradeButton} activeOpacity={0.7}>
            <Zap size={16} color="#FFFFFF" fill="#FFFFFF" />
            <Text style={styles.upgradeButtonText}>Upgrade</Text>
          </TouchableOpacity>
        </View>

        {/* Overview Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Overview</Text>
          <TouchableOpacity style={styles.sectionChevron} activeOpacity={0.7}>
            <ChevronRight size={24} color="#0B0F20" />
          </TouchableOpacity>
        </View>

        {/* Balance Card */}
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

          {/* Period Tabs */}
          {renderPeriodTabs(
            selectedPeriod,
            handlePeriodChange,
            styles.periodTabs,
            styles.periodTabActive,
            styles.periodTabText,
            styles.periodTabTextActive
          )}

          {/* Chart */}
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

        {/* Metrics Row */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.metricsScroll}>
          <View style={styles.metricCard}>
            <ChartPie size={24} color="#00897B" />
            <Text style={styles.metricLabel}>ROI</Text>
            <Text style={styles.metricValue}>3.4%</Text>
            <View style={styles.metricChange}>
              <Text style={styles.metricChangeText}>+2.1%</Text>
              <ArrowUpRight size={16} color="#00897B" />
            </View>
          </View>

          <View style={styles.metricCard}>
            <ChartPie size={24} color="#00897B" />
            <Text style={styles.metricLabel}>P&L</Text>
            <Text style={styles.metricValue}>$1,624</Text>
            <View style={styles.metricChange}>
              <Text style={styles.metricChangeText}>+2.1%</Text>
              <ArrowUpRight size={16} color="#00897B" />
            </View>
          </View>

          <View style={styles.metricCard}>
            <ChartPie size={24} color="#00897B" />
            <Text style={styles.metricLabel}>Win Rate</Text>
            <Text style={styles.metricValue}>3.4%</Text>
            <View style={styles.metricChange}>
              <Text style={styles.metricChangeText}>+2.1%</Text>
              <ArrowUpRight size={16} color="#00897B" />
            </View>
          </View>
        </ScrollView>

        {/* Linked Accounts Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Linked Accounts</Text>
          <TouchableOpacity style={styles.sectionChevron} activeOpacity={0.7}>
            <ChevronRight size={24} color="#0B0F20" />
          </TouchableOpacity>
        </View>

        {linkedAccounts.map((account, index) => (
          <View 
            key={account.id} 
            style={[
              styles.accountCard,
              index === 0 && styles.accountCardFirst,
              index === linkedAccounts.length - 1 && styles.accountCardLast,
            ]}
          >
            <View style={styles.accountCardLeft}>
              <View style={styles.accountCardHeader}>
                <Text style={styles.accountCardNumber}>{account.number}</Text>
                <View style={[styles.statusBadge, { borderColor: account.statusColor }]}>
                  <Text style={[styles.statusBadgeText, { color: account.statusColor }]}>
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
                <ArrowUpRight size={16} color="#00897B" />
              </View>
            </View>
          </View>
        ))}

        {/* Copiers Accounts Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Copiers Accounts</Text>
          <TouchableOpacity style={styles.sectionChevron} activeOpacity={0.7}>
            <ChevronRight size={24} color="#0B0F20" />
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.copierScroll}>
          {copierAccounts.map((copier) => {
            const isDisabled = copier.status === 'Disabled';
            return (
              <View key={copier.id} style={styles.copierCard}>
                <Text style={styles.copierName}>{copier.name}</Text>
                <View style={[
                  styles.copierStatusBadge,
                  isDisabled && { borderColor: '#0B0F20' }
                ]}>
                  <Text style={[
                    styles.copierStatusText,
                    isDisabled && { color: '#0B0F20' }
                  ]}>{copier.status}</Text>
                </View>
                <View style={styles.copierFollowers}>
                  <NetworkIcon width={16} height={16} color="#FFFFFF" />
                  <Text style={styles.copierFollowersText}>{copier.followers}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>

        {/* Smart Insights Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Smart Insights</Text>
          <TouchableOpacity style={styles.sectionChevron} activeOpacity={0.7}>
            <ChevronRight size={24} color="#0B0F20" />
          </TouchableOpacity>
        </View>

        <ScrollView
          ref={insightScrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleInsightScroll}
          scrollEventThrottle={16}
        >
          {insights.map((insight, index) => (
            <View key={index} style={[styles.insightCard, { width: width - 40 }]}>
              <View style={styles.insightHeader}>
                <Text style={styles.insightTitle}>{insight.title}</Text>
                <View style={styles.insightBadge}>
                  <RadioTower size={12} color="#FFFFFF" />
                  <Text style={styles.insightBadgeText}>High</Text>
                </View>
              </View>
              <Text style={styles.insightTime}>{insight.time}</Text>
              <Text style={styles.insightDescription}>{insight.description}</Text>

              {/* Pagination Dots */}
              <View style={styles.paginationDots}>
                {insights.map((_, dotIndex) => (
                  <TouchableOpacity
                    key={dotIndex}
                    style={[
                      styles.paginationDot,
                      activeInsightIndex === dotIndex && styles.paginationDotActive,
                    ]}
                    onPress={() => handleInsightChange(dotIndex)}
                    activeOpacity={0.7}
                  />
                ))}
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Top Traders Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Traders</Text>
          <TouchableOpacity style={styles.sectionChevron} activeOpacity={0.7}>
            <ChevronRight size={24} color="#0B0F20" />
          </TouchableOpacity>
        </View>

        {/* Top Trader Period Tabs */}
        <View style={styles.TopTraders}>
          {renderPeriodTabs(
            selectedTopTraderPeriod,
            handleTopTraderPeriodChange,
            styles.periodTabs2,
            styles.traderPeriodTabActive2,
            styles.traderPeriodTabText2,
            styles.traderPeriodTabTextActive
          )}

          {/* Trader Rank 1 - Gold */}
          <View style={[styles.traderCard, styles.traderCardFirst]}>
            <View style={styles.traderBadge}>
              <BadgeIcon width={32} height={34} startColor="#FFC768" endColor="#B88423" />
              <Text style={styles.traderRank}>1</Text>
            </View>
            <View style={styles.traderInfo}>
              <Text style={styles.traderName}>John FX</Text>
              <Text style={styles.traderFollowers}>120 Followers</Text>
            </View>
            <View style={styles.traderPerformance}>
              <Text style={styles.traderPerformanceText}>+5.1%</Text>
              <ArrowUpRight size={16} color="#00897B" />
            </View>
          </View>

          {/* Trader Rank 2 - Silver */}
          <View style={[styles.traderCard, styles.traderCardMiddle]}>
            <View style={styles.traderBadge}>
              <BadgeIcon width={32} height={34} startColor="#D0D0D0" endColor="#949494" />
              <Text style={styles.traderRank}>2</Text>
            </View>
            <View style={styles.traderInfo}>
              <Text style={styles.traderName}>John FX</Text>
              <Text style={styles.traderFollowers}>120 Followers</Text>
            </View>
            <View style={styles.traderPerformance}>
              <Text style={styles.traderPerformanceText}>+5.1%</Text>
              <ArrowUpRight size={16} color="#00897B" />
            </View>
          </View>

          {/* Trader Rank 3 - Bronze */}
          <View style={[styles.traderCard, styles.traderCardLast]}>
            <View style={styles.traderBadge}>
              <BadgeIcon width={32} height={34} startColor="#D28F77" endColor="#A05F48" />
              <Text style={styles.traderRank}>3</Text>
            </View>
            <View style={styles.traderInfo}>
              <Text style={styles.traderName}>John FX</Text>
              <Text style={styles.traderFollowers}>120 Followers</Text>
            </View>
            <View style={styles.traderPerformance}>
              <Text style={styles.traderPerformanceText}>+5.1%</Text>
              <ArrowUpRight size={16} color="#00897B" />
            </View>
          </View>
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;