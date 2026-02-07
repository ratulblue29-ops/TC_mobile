import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/RootNavigator';
import { ChevronLeft, Trash2 } from 'lucide-react-native';
import styles from './style';

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Comparison'
>;
type ComparisonRouteProp = RouteProp<RootStackParamList, 'Comparison'>;
type TabType = 'General' | 'Costs & Perks' | 'Platforms & Markets';

const COLORS = {
  primary: '#00897B',
  danger: '#FF6B6B',
  success: '#00B8A9',
  neutral: '#757575',
  textPrimary: '#1A1A1A',
  textSecondary: '#757575',
  background: '#FFFFFF',
  border: '#E0E0E0',
};

type ComparisonData = {
  [key: string]: {
    country: string;
    yearsInOperation: number;
    trustScore: number;
    usersInPlatform: number;
    fundingRules: number;
    leverage: number;
    evaluationType: string;
    dailyDrawdown: number;
    maxDrawdown: number;
    profitTarget: number;
    payout: number;
    payoutSpeedDays: number;
  };
};

const comparisonData: ComparisonData = {
  FundingPips: {
    country: 'United Arab Emirates (AE)',
    yearsInOperation: 2,
    trustScore: 4.4,
    usersInPlatform: 27269,
    fundingRules: 300000,
    leverage: 100,
    evaluationType: '2-Phase',
    dailyDrawdown: 5,
    maxDrawdown: 10,
    profitTarget: 10,
    payout: 80,
    payoutSpeedDays: 3,
  },
  FTMO: {
    country: 'Czech Republic (CZ)',
    yearsInOperation: 5,
    trustScore: 4.7,
    usersInPlatform: 45120,
    fundingRules: 400000,
    leverage: 100,
    evaluationType: '2-Phase',
    dailyDrawdown: 5,
    maxDrawdown: 10,
    profitTarget: 10,
    payout: 90,
    payoutSpeedDays: 2,
  },
  The5ers: {
    country: 'Great Britain (GB)',
    yearsInOperation: 3,
    trustScore: 4.5,
    usersInPlatform: 9328,
    fundingRules: 400000,
    leverage: 100,
    evaluationType: '2-Phase',
    dailyDrawdown: 5,
    maxDrawdown: 10,
    profitTarget: 10,
    payout: 85,
    payoutSpeedDays: 4,
  },
  MyForexFunds: {
    country: 'Canada (CA)',
    yearsInOperation: 3,
    trustScore: 4.3,
    usersInPlatform: 18500,
    fundingRules: 300000,
    leverage: 100,
    evaluationType: '2-Phase',
    dailyDrawdown: 5,
    maxDrawdown: 10,
    profitTarget: 10,
    payout: 75,
    payoutSpeedDays: 5,
  },
  Fidelcrest: {
    country: 'Czech Republic (CZ)',
    yearsInOperation: 4,
    trustScore: 4.6,
    usersInPlatform: 22400,
    fundingRules: 200000,
    leverage: 100,
    evaluationType: '2-Phase',
    dailyDrawdown: 5,
    maxDrawdown: 10,
    profitTarget: 10,
    payout: 85,
    payoutSpeedDays: 3,
  },
};

const ComparisonScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<ComparisonRouteProp>();
  const { firm1, firm2 } = route.params;
  const [activeTab, setActiveTab] = useState<TabType>('General');

  const firm1Data = comparisonData[firm1];
  const firm2Data = comparisonData[firm2];

  const getValueColor = (
    value1: number | string,
    value2: number | string,
    higherIsBetter: boolean,
  ): string => {
    if (value1 === value2) return COLORS.neutral;
    if (typeof value1 === 'number' && typeof value2 === 'number') {
      if (higherIsBetter) {
        return value1 > value2 ? COLORS.success : COLORS.danger;
      }
      return value1 < value2 ? COLORS.success : COLORS.danger;
    }
    return COLORS.neutral;
  };

  const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleRemoveFirm = (firmName: string) => {
    console.log('Remove firm:', firmName);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={handleBack}
            activeOpacity={0.7}
          >
            <ChevronLeft size={24} color={COLORS.textPrimary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Comparison</Text>
          <View style={styles.headerSpacer} />
        </View>

        <View style={styles.firmSelection}>
          <View style={styles.firmPill}>
            <View style={styles.iconBox} />
            <Text style={styles.firmPillText}>{firm1}</Text>
            <TouchableOpacity
              onPress={() => handleRemoveFirm(firm1)}
              activeOpacity={0.7}
            >
              <Trash2 size={16} color={COLORS.textSecondary} />
            </TouchableOpacity>
          </View>
          <View style={styles.firmPill}>
            <View style={styles.iconBox} />
            <Text style={styles.firmPillText}>{firm2}</Text>
            <TouchableOpacity
              onPress={() => handleRemoveFirm(firm2)}
              activeOpacity={0.7}
            >
              <Trash2 size={16} color={COLORS.textSecondary} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'General' && styles.tabActive]}
            onPress={() => setActiveTab('General')}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'General' && styles.tabTextActive,
              ]}
            >
              General
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === 'Costs & Perks' && styles.tabActive,
            ]}
            onPress={() => setActiveTab('Costs & Perks')}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'Costs & Perks' && styles.tabTextActive,
              ]}
            >
              Costs & Perks
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === 'Platforms & Markets' && styles.tabActive,
            ]}
            onPress={() => setActiveTab('Platforms & Markets')}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'Platforms & Markets' && styles.tabTextActive,
              ]}
            >
              Platforms & Markets
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.contentSection}>
            <Text style={styles.sectionHeader}>GENERAL</Text>

            <View style={styles.comparisonRow}>
              <Text style={styles.metricTitle}>Country</Text>
              <View style={styles.valueRow}>
                <View style={styles.valueRow}>
                  <View style={styles.iconBox} />
                  <Text style={styles.firmLabel}>{firm1}</Text>
                </View>
                <Text style={styles.valueText}>{firm1Data.country}</Text>
              </View>
              <View style={styles.valueRow}>
                <View style={styles.valueRow}>
                  <View style={styles.iconBox} />
                  <Text style={styles.firmLabel}>{firm2}</Text>
                </View>
                <Text style={styles.valueText}>{firm2Data.country}</Text>
              </View>
            </View>

            <View style={styles.comparisonRow}>
              <Text style={styles.metricTitle}>Years in Operation</Text>
              <View style={styles.valueRow}>
                <View style={styles.valueRow}>
                  <View style={styles.iconBox} />
                  <Text style={styles.firmLabel}>{firm1}</Text>
                </View>
                <Text
                  style={[
                    styles.valueText,
                    {
                      color: getValueColor(
                        firm1Data.yearsInOperation,
                        firm2Data.yearsInOperation,
                        true,
                      ),
                    },
                  ]}
                >
                  {firm1Data.yearsInOperation}
                </Text>
              </View>
              <View style={styles.valueRow}>
                <View style={styles.valueRow}>
                  <View style={styles.iconBox} />
                  <Text style={styles.firmLabel}>{firm2}</Text>
                </View>
                <Text
                  style={[
                    styles.valueText,
                    {
                      color: getValueColor(
                        firm2Data.yearsInOperation,
                        firm1Data.yearsInOperation,
                        true,
                      ),
                    },
                  ]}
                >
                  {firm2Data.yearsInOperation}
                </Text>
              </View>
            </View>

            <View style={styles.comparisonRow}>
              <Text style={styles.metricTitle}>Trust Score</Text>
              <View style={styles.valueRow}>
                <View style={styles.valueRow}>
                  <View style={styles.iconBox} />
                  <Text style={styles.firmLabel}>{firm1}</Text>
                </View>
                <Text
                  style={[
                    styles.valueText,
                    {
                      color: getValueColor(
                        firm1Data.trustScore,
                        firm2Data.trustScore,
                        true,
                      ),
                    },
                  ]}
                >
                  {firm1Data.trustScore}
                </Text>
              </View>
              <View style={styles.valueRow}>
                <View style={styles.valueRow}>
                  <View style={styles.iconBox} />
                  <Text style={styles.firmLabel}>{firm2}</Text>
                </View>
                <Text
                  style={[
                    styles.valueText,
                    {
                      color: getValueColor(
                        firm2Data.trustScore,
                        firm1Data.trustScore,
                        true,
                      ),
                    },
                  ]}
                >
                  {firm2Data.trustScore}
                </Text>
              </View>
            </View>

            <View style={styles.comparisonRow}>
              <Text style={styles.metricTitle}>Users in Platform</Text>
              <View style={styles.valueRow}>
                <View style={styles.valueRow}>
                  <View style={styles.iconBox} />
                  <Text style={styles.firmLabel}>{firm1}</Text>
                </View>
                <Text
                  style={[
                    styles.valueText,
                    {
                      color: getValueColor(
                        firm1Data.usersInPlatform,
                        firm2Data.usersInPlatform,
                        true,
                      ),
                    },
                  ]}
                >
                  {formatNumber(firm1Data.usersInPlatform)}
                </Text>
              </View>
              <View style={styles.valueRow}>
                <View style={styles.valueRow}>
                  <View style={styles.iconBox} />
                  <Text style={styles.firmLabel}>{firm2}</Text>
                </View>
                <Text
                  style={[
                    styles.valueText,
                    {
                      color: getValueColor(
                        firm2Data.usersInPlatform,
                        firm1Data.usersInPlatform,
                        true,
                      ),
                    },
                  ]}
                >
                  {formatNumber(firm2Data.usersInPlatform)}
                </Text>
              </View>
            </View>

            <View style={styles.comparisonRow}>
              <Text style={styles.metricTitle}>Funding & Rules</Text>
              <View style={styles.valueRow}>
                <View style={styles.valueRow}>
                  <View style={styles.iconBox} />
                  <Text style={styles.firmLabel}>{firm1}</Text>
                </View>
                <Text
                  style={[
                    styles.valueText,
                    {
                      color: getValueColor(
                        firm1Data.fundingRules,
                        firm2Data.fundingRules,
                        true,
                      ),
                    },
                  ]}
                >
                  {formatNumber(firm1Data.fundingRules)}
                </Text>
              </View>
              <View style={styles.valueRow}>
                <View style={styles.valueRow}>
                  <View style={styles.iconBox} />
                  <Text style={styles.firmLabel}>{firm2}</Text>
                </View>
                <Text
                  style={[
                    styles.valueText,
                    {
                      color: getValueColor(
                        firm2Data.fundingRules,
                        firm1Data.fundingRules,
                        true,
                      ),
                    },
                  ]}
                >
                  {formatNumber(firm2Data.fundingRules)}
                </Text>
              </View>
            </View>

            <View style={styles.comparisonRow}>
              <Text style={styles.metricTitle}>Leverage</Text>
              <View style={styles.valueRow}>
                <View style={styles.valueRow}>
                  <View style={styles.iconBox} />
                  <Text style={styles.firmLabel}>{firm1}</Text>
                </View>
                <Text
                  style={[
                    styles.valueText,
                    {
                      color: getValueColor(
                        firm1Data.leverage,
                        firm2Data.leverage,
                        false,
                      ),
                    },
                  ]}
                >
                  {firm1Data.leverage}
                </Text>
              </View>
              <View style={styles.valueRow}>
                <View style={styles.valueRow}>
                  <View style={styles.iconBox} />
                  <Text style={styles.firmLabel}>{firm2}</Text>
                </View>
                <Text
                  style={[
                    styles.valueText,
                    {
                      color: getValueColor(
                        firm2Data.leverage,
                        firm1Data.leverage,
                        false,
                      ),
                    },
                  ]}
                >
                  {firm2Data.leverage}
                </Text>
              </View>
            </View>

            <View style={styles.comparisonRow}>
              <Text style={styles.metricTitle}>Evaluation Type</Text>
              <View style={styles.valueRow}>
                <View style={styles.valueRow}>
                  <View style={styles.iconBox} />
                  <Text style={styles.firmLabel}>{firm1}</Text>
                </View>
                <Text style={[styles.valueText, { color: COLORS.neutral }]}>
                  {firm1Data.evaluationType}
                </Text>
              </View>
              <View style={styles.valueRow}>
                <View style={styles.valueRow}>
                  <View style={styles.iconBox} />
                  <Text style={styles.firmLabel}>{firm2}</Text>
                </View>
                <Text style={[styles.valueText, { color: COLORS.neutral }]}>
                  {firm2Data.evaluationType}
                </Text>
              </View>
            </View>

            <View style={styles.comparisonRow}>
              <Text style={styles.metricTitle}>Daily Drawdown %</Text>
              <View style={styles.valueRow}>
                <View style={styles.valueRow}>
                  <View style={styles.iconBox} />
                  <Text style={styles.firmLabel}>{firm1}</Text>
                </View>
                <Text
                  style={[
                    styles.valueText,
                    {
                      color: getValueColor(
                        firm1Data.dailyDrawdown,
                        firm2Data.dailyDrawdown,
                        false,
                      ),
                    },
                  ]}
                >
                  {firm1Data.dailyDrawdown}
                </Text>
              </View>
              <View style={styles.valueRow}>
                <View style={styles.valueRow}>
                  <View style={styles.iconBox} />
                  <Text style={styles.firmLabel}>{firm2}</Text>
                </View>
                <Text
                  style={[
                    styles.valueText,
                    {
                      color: getValueColor(
                        firm2Data.dailyDrawdown,
                        firm1Data.dailyDrawdown,
                        false,
                      ),
                    },
                  ]}
                >
                  {firm2Data.dailyDrawdown}
                </Text>
              </View>
            </View>

            <View style={styles.comparisonRow}>
              <Text style={styles.metricTitle}>Max Drawdown %</Text>
              <View style={styles.valueRow}>
                <View style={styles.valueRow}>
                  <View style={styles.iconBox} />
                  <Text style={styles.firmLabel}>{firm1}</Text>
                </View>
                <Text
                  style={[
                    styles.valueText,
                    {
                      color: getValueColor(
                        firm1Data.maxDrawdown,
                        firm2Data.maxDrawdown,
                        false,
                      ),
                    },
                  ]}
                >
                  {firm1Data.maxDrawdown}
                </Text>
              </View>
              <View style={styles.valueRow}>
                <View style={styles.valueRow}>
                  <View style={styles.iconBox} />
                  <Text style={styles.firmLabel}>{firm2}</Text>
                </View>
                <Text
                  style={[
                    styles.valueText,
                    {
                      color: getValueColor(
                        firm2Data.maxDrawdown,
                        firm1Data.maxDrawdown,
                        false,
                      ),
                    },
                  ]}
                >
                  {firm2Data.maxDrawdown}
                </Text>
              </View>
            </View>

            <View style={styles.comparisonRow}>
              <Text style={styles.metricTitle}>Profit Target %</Text>
              <View style={styles.valueRow}>
                <View style={styles.valueRow}>
                  <View style={styles.iconBox} />
                  <Text style={styles.firmLabel}>{firm1}</Text>
                </View>
                <Text
                  style={[
                    styles.valueText,
                    {
                      color: getValueColor(
                        firm1Data.profitTarget,
                        firm2Data.profitTarget,
                        false,
                      ),
                    },
                  ]}
                >
                  {firm1Data.profitTarget}
                </Text>
              </View>
              <View style={styles.valueRow}>
                <View style={styles.valueRow}>
                  <View style={styles.iconBox} />
                  <Text style={styles.firmLabel}>{firm2}</Text>
                </View>
                <Text
                  style={[
                    styles.valueText,
                    {
                      color: getValueColor(
                        firm2Data.profitTarget,
                        firm1Data.profitTarget,
                        false,
                      ),
                    },
                  ]}
                >
                  {firm2Data.profitTarget}
                </Text>
              </View>
            </View>

            <View style={styles.comparisonRow}>
              <Text style={styles.metricTitle}>Payout</Text>
              <View style={styles.valueRow}>
                <View style={styles.valueRow}>
                  <View style={styles.iconBox} />
                  <Text style={styles.firmLabel}>{firm1}</Text>
                </View>
                <Text
                  style={[
                    styles.valueText,
                    {
                      color: getValueColor(
                        firm1Data.payout,
                        firm2Data.payout,
                        true,
                      ),
                    },
                  ]}
                >
                  {firm1Data.payout}
                </Text>
              </View>
              <View style={styles.valueRow}>
                <View style={styles.valueRow}>
                  <View style={styles.iconBox} />
                  <Text style={styles.firmLabel}>{firm2}</Text>
                </View>
                <Text
                  style={[
                    styles.valueText,
                    {
                      color: getValueColor(
                        firm2Data.payout,
                        firm1Data.payout,
                        true,
                      ),
                    },
                  ]}
                >
                  {firm2Data.payout}
                </Text>
              </View>
            </View>

            <View style={styles.comparisonRow}>
              <Text style={styles.metricTitle}>Payout Speed (Days)</Text>
              <View style={styles.valueRow}>
                <View style={styles.valueRow}>
                  <View style={styles.iconBox} />
                  <Text style={styles.firmLabel}>{firm1}</Text>
                </View>
                <Text
                  style={[
                    styles.valueText,
                    {
                      color: getValueColor(
                        firm1Data.payoutSpeedDays,
                        firm2Data.payoutSpeedDays,
                        false,
                      ),
                    },
                  ]}
                >
                  {firm1Data.payoutSpeedDays} Days
                </Text>
              </View>
              <View style={styles.valueRow}>
                <View style={styles.valueRow}>
                  <View style={styles.iconBox} />
                  <Text style={styles.firmLabel}>{firm2}</Text>
                </View>
                <Text
                  style={[
                    styles.valueText,
                    {
                      color: getValueColor(
                        firm2Data.payoutSpeedDays,
                        firm1Data.payoutSpeedDays,
                        false,
                      ),
                    },
                  ]}
                >
                  {firm2Data.payoutSpeedDays} Days
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.addButton} activeOpacity={0.7}>
            <Text style={styles.addButtonText}>Add Another Firm</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ComparisonScreen;
