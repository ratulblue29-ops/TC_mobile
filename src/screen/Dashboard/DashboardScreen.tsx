import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
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

const DashboardScreen = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Week');
  const [selectedTopTraderPeriod, setSelectedTopTraderPeriod] = useState('Week');
  const [activeInsightIndex, setActiveInsightIndex] = useState(0);

  const chartData = {
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
  };

  const chartConfig = {
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
  };

  const linkedAccounts = [
    { id: 1, number: 'MT5-104392', broker: 'Exness', status: 'Active', statusColor: '#00897B', amount: '$1,624', change: '+5.1%' },
    { id: 2, number: 'MT5-104392', broker: 'Exness', status: 'Warning', statusColor: '#C3881B', amount: '$1,624', change: '+5.1%' },
    { id: 3, number: 'MT5-104392', broker: 'Exness', status: 'At Risk', statusColor: '#C54545', amount: '$1,624', change: '+5.1%' },
  ];

  const copierAccounts = [
    { id: 1, name: 'Master Account 1', status: 'Active', followers: '10' },
    { id: 2, name: 'Master Account 2', status: 'Active', followers: '10' },
    { id: 3, name: 'Master Account 3', status: 'Active', followers: '10' },
  ];

  const topTraders = [
    { id: 1, name: 'John FX', followers: '120 Followers', performance: '+5.1%', rank: 1 },
    { id: 2, name: 'John FX', followers: '120 Followers', performance: '+5.1%', rank: 2 },
    { id: 3, name: 'John FX', followers: '120 Followers', performance: '+5.1%', rank: 3 },
  ];

  const insights = [
    { title: 'Best ROI Window', time: 'Trade Between 08:00-11:00 UTC', description: 'Historical data insights' },
    { title: 'Best ROI Window', time: 'Trade Between 08:00-11:00 UTC', description: 'Historical data insights' },
    { title: 'Best ROI Window', time: 'Trade Between 08:00-11:00 UTC', description: 'Historical data insights' },
    { title: 'Best ROI Window', time: 'Trade Between 08:00-11:00 UTC', description: 'Historical data insights' },
    { title: 'Best ROI Window', time: 'Trade Between 08:00-11:00 UTC', description: 'Historical data insights' },
  ];

  const getBadgeGradient = (rank: number) => {
    if (rank === 1) return { start: '#FFC768', end: '#B88423' };
    if (rank === 2) return { start: '#D0D0D0', end: '#949494' };
    return { start: '#D28F77', end: '#A05F48' };
  };

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
            <TouchableOpacity style={styles.iconButton}>
              <Bell size={24} color="#0B0F20" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
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
          <TouchableOpacity>
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
          <TouchableOpacity style={styles.upgradeButton}>
            <Zap size={16} color="#FFFFFF" fill="#FFFFFF" />
            <Text style={styles.upgradeButtonText}>Upgrade</Text>
          </TouchableOpacity>
        </View>

        {/* Overview Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Overview</Text>
          <TouchableOpacity>
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
                <Text style={styles.openAmount}>$256.35 </Text>
                <Text style={styles.openLabel}>open</Text>
              </Text>
            </View>
          </View>

          {/* Period Tabs */}
          <View style={styles.periodTabs}>
            {['Week', 'Month', 'Year'].map((period) => (
              <TouchableOpacity
                key={period}
                style={[
                  styles.periodTab,
                  selectedPeriod === period && styles.periodTabActive,
                ]}
                onPress={() => setSelectedPeriod(period)}
              >
                <Text
                  style={[
                    styles.periodTabText,
                    selectedPeriod === period && styles.periodTabTextActive,
                  ]}
                >
                  {period}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

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
        <View style={styles.metricsRow}>
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
        </View>

        {/* Linked Accounts Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Linked Accounts</Text>
          <TouchableOpacity style={styles.sectionChevron}>
            <ChevronRight size={24} color="#0B0F20" />
          </TouchableOpacity>
        </View>

        {linkedAccounts.map((account) => (
          <View key={account.id} style={styles.accountCard}>
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
          <TouchableOpacity style={styles.sectionChevron}>
            <ChevronRight size={24} color="#0B0F20" />
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.copierScroll}>
          {copierAccounts.map((copier) => (
            <View key={copier.id} style={styles.copierCard}>
              <Text style={styles.copierName}>{copier.name}</Text>
              <View style={styles.copierStatusBadge}>
                <Text style={styles.copierStatusText}>{copier.status}</Text>
              </View>
              <View style={styles.copierFollowers}>
                <NetworkIcon width={16} height={16} color="#FFFFFF" />
                <Text style={styles.copierFollowersText}>{copier.followers}</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Smart Insights Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Smart Insights</Text>
          <TouchableOpacity style={styles.sectionChevron}>
            <ChevronRight size={24} color="#0B0F20" />
          </TouchableOpacity>
        </View>

        <View style={styles.insightCard}>
          <View style={styles.insightHeader}>
            <RadioTower size={20} color="#FFFFFF" />
            <Text style={styles.insightTitle}>{insights[activeInsightIndex].title}</Text>
            <View style={styles.insightBadge}>
              <Text style={styles.insightBadgeText}>High</Text>
            </View>
          </View>
          <Text style={styles.insightTime}>{insights[activeInsightIndex].time}</Text>
          <Text style={styles.insightDescription}>{insights[activeInsightIndex].description}</Text>

          {/* Pagination Dots */}
          <View style={styles.paginationDots}>
            {insights.map((_, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.paginationDot,
                  activeInsightIndex === index && styles.paginationDotActive,
                ]}
                onPress={() => setActiveInsightIndex(index)}
              />
            ))}
          </View>
        </View>

        {/* Top Traders Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Traders</Text>
          <TouchableOpacity style={styles.sectionChevron}>
            <ChevronRight size={24} color="#0B0F20" />
          </TouchableOpacity>
        </View>

        {/* Top Trader Period Tabs */}
        <View style={styles.periodTabs2}>
          {['Week', 'Month', 'Year'].map((period) => (
            <TouchableOpacity
              key={period}
              style={[
                styles.traderPeriodTab,
                selectedTopTraderPeriod === period && styles.traderPeriodTabActive,
              ]}
              onPress={() => setSelectedTopTraderPeriod(period)}
            >
              <Text
                style={[
                  styles.traderPeriodTabText,
                  selectedTopTraderPeriod === period && styles.traderPeriodTabTextActive,
                ]}
              >
                {period}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {topTraders.map((trader) => {
          const gradient = getBadgeGradient(trader.rank);
          return (
            <View key={trader.id} style={styles.traderCard}>
              <View style={styles.traderBadge}>
                <BadgeIcon width={32} height={34} />
                <Text style={styles.traderRank}>{trader.rank}</Text>
              </View>
              <View style={styles.traderInfo}>
                <Text style={styles.traderName}>{trader.name}</Text>
                <Text style={styles.traderFollowers}>{trader.followers}</Text>
              </View>
              <View style={styles.traderPerformance}>
                <Text style={styles.traderPerformanceText}>{trader.performance}</Text>
                <ArrowUpRight size={16} color="#00897B" />
              </View>
            </View>
          );
        })}

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;