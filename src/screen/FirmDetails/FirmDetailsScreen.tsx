import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/RootNavigator';
import { ChevronLeft, Bell, Menu } from 'lucide-react-native';
import styles from './style';

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'FirmDetails'
>;
type FirmDetailsRouteProp = RouteProp<RootStackParamList, 'FirmDetails'>;
type TabType = 'Overview' | 'Firm Rules' | 'Announcements';

const COLORS = {
  primary: '#00BFA5',
  dark: '#0B0F20',
};

type FirmData = {
  id: number;
  name: string;
  location: string;
  ceo: string;
  trustPilot: string;
  dateCreated: string;
  yearsInOperation: number;
  broker: string;
  paymentMethods1: string[];
  platforms: string[];
  paymentMethods2: string[];
  leverage: {
    fx: {
      instant: string;
      oneStep: string;
      twoSteps: string;
      threeSteps: string;
    };
    metals: {
      instant: string;
      oneStep: string;
      twoSteps: string;
      threeSteps: string;
    };
    indices: {
      instant: string;
      oneStep: string;
      twoSteps: string;
      threeSteps: string;
    };
    energy: {
      instant: string;
      oneStep: string;
      twoSteps: string;
      threeSteps: string;
    };
    crypto: {
      instant: string;
      oneStep: string;
      twoSteps: string;
      threeSteps: string;
    };
  };
};

const firmDataMap: { [key: number]: FirmData } = {
  1: {
    id: 1,
    name: 'FundingPips',
    location: 'United Arab Emirates (AE)',
    ceo: 'Khaled Ayesha',
    trustPilot: '4.5',
    dateCreated: 'Nov 2022',
    yearsInOperation: 2,
    broker: 'Liquidity Provider',
    paymentMethods1: [
      'Apply Pay',
      'Credit /Debit Card',
      'Crypto',
      'GooglePay',
      'Neteller',
      'Paypal',
      'Skrill',
    ],
    platforms: ['cTrader', 'Match Trader', 'MT5'],
    paymentMethods2: [
      'Bank Transfer',
      'Crypto',
      'MasterCard',
      'Riseworks',
      'Visa Direct',
    ],
    leverage: {
      fx: {
        instant: '1:50',
        oneStep: '1:30',
        twoSteps: '1:100',
        threeSteps: 'n/a',
      },
      metals: {
        instant: '1:50',
        oneStep: '1:30',
        twoSteps: '1:100',
        threeSteps: 'n/a',
      },
      indices: {
        instant: '1:50',
        oneStep: '1:30',
        twoSteps: '1:100',
        threeSteps: 'n/a',
      },
      energy: {
        instant: '1:50',
        oneStep: '1:30',
        twoSteps: '1:100',
        threeSteps: 'n/a',
      },
      crypto: {
        instant: '1:50',
        oneStep: '1:30',
        twoSteps: '1:100',
        threeSteps: 'n/a',
      },
    },
  },
  2: {
    id: 2,
    name: 'FTMO',
    location: 'Czech Republic (CZ)',
    ceo: 'Otakar Suffner',
    trustPilot: '4.7',
    dateCreated: 'May 2015',
    yearsInOperation: 5,
    broker: 'Liquidity Provider',
    paymentMethods1: ['Credit Card', 'Crypto', 'PayPal', 'Wire Transfer'],
    platforms: ['MT4', 'MT5', 'cTrader'],
    paymentMethods2: ['Bank Transfer', 'Crypto', 'Visa', 'MasterCard'],
    leverage: {
      fx: {
        instant: '1:100',
        oneStep: '1:100',
        twoSteps: '1:100',
        threeSteps: '1:100',
      },
      metals: {
        instant: '1:100',
        oneStep: '1:100',
        twoSteps: '1:100',
        threeSteps: '1:100',
      },
      indices: {
        instant: '1:100',
        oneStep: '1:100',
        twoSteps: '1:100',
        threeSteps: '1:100',
      },
      energy: {
        instant: '1:100',
        oneStep: '1:100',
        twoSteps: '1:100',
        threeSteps: '1:100',
      },
      crypto: {
        instant: '1:50',
        oneStep: '1:50',
        twoSteps: '1:50',
        threeSteps: '1:50',
      },
    },
  },
  3: {
    id: 3,
    name: 'The5ers',
    location: 'Great Britain (GB)',
    ceo: 'Gil Ben Hur',
    trustPilot: '4.5',
    dateCreated: 'Jan 2016',
    yearsInOperation: 7,
    broker: 'Liquidity Provider',
    paymentMethods1: ['Credit Card', 'Crypto', 'PayPal'],
    platforms: ['MT4', 'MT5'],
    paymentMethods2: ['Bank Transfer', 'Crypto', 'Skrill'],
    leverage: {
      fx: {
        instant: '1:50',
        oneStep: '1:50',
        twoSteps: '1:50',
        threeSteps: 'n/a',
      },
      metals: {
        instant: '1:50',
        oneStep: '1:50',
        twoSteps: '1:50',
        threeSteps: 'n/a',
      },
      indices: {
        instant: '1:50',
        oneStep: '1:50',
        twoSteps: '1:50',
        threeSteps: 'n/a',
      },
      energy: {
        instant: '1:50',
        oneStep: '1:50',
        twoSteps: '1:50',
        threeSteps: 'n/a',
      },
      crypto: {
        instant: '1:20',
        oneStep: '1:20',
        twoSteps: '1:20',
        threeSteps: 'n/a',
      },
    },
  },
  4: {
    id: 4,
    name: 'MyForexFunds',
    location: 'Canada (CA)',
    ceo: 'John Smith',
    trustPilot: '4.3',
    dateCreated: 'Mar 2020',
    yearsInOperation: 3,
    broker: 'Liquidity Provider',
    paymentMethods1: ['Credit Card', 'Crypto', 'PayPal', 'Apple Pay'],
    platforms: ['MT4', 'MT5', 'DX Trade'],
    paymentMethods2: ['Bank Transfer', 'Crypto', 'Rise'],
    leverage: {
      fx: {
        instant: '1:100',
        oneStep: '1:100',
        twoSteps: '1:100',
        threeSteps: '1:100',
      },
      metals: {
        instant: '1:100',
        oneStep: '1:100',
        twoSteps: '1:100',
        threeSteps: '1:100',
      },
      indices: {
        instant: '1:100',
        oneStep: '1:100',
        twoSteps: '1:100',
        threeSteps: '1:100',
      },
      energy: {
        instant: '1:100',
        oneStep: '1:100',
        twoSteps: '1:100',
        threeSteps: '1:100',
      },
      crypto: {
        instant: '1:30',
        oneStep: '1:30',
        twoSteps: '1:30',
        threeSteps: '1:30',
      },
    },
  },
  5: {
    id: 5,
    name: 'Fidelcrest',
    location: 'Czech Republic (CZ)',
    ceo: 'Pavel Krejci',
    trustPilot: '4.6',
    dateCreated: 'Jul 2018',
    yearsInOperation: 4,
    broker: 'Liquidity Provider',
    paymentMethods1: ['Credit Card', 'Crypto', 'PayPal'],
    platforms: ['MT4', 'MT5', 'cTrader', 'TradingView'],
    paymentMethods2: ['Bank Transfer', 'Crypto', 'Skrill', 'Neteller'],
    leverage: {
      fx: {
        instant: '1:100',
        oneStep: '1:100',
        twoSteps: '1:100',
        threeSteps: '1:100',
      },
      metals: {
        instant: '1:100',
        oneStep: '1:100',
        twoSteps: '1:100',
        threeSteps: '1:100',
      },
      indices: {
        instant: '1:100',
        oneStep: '1:100',
        twoSteps: '1:100',
        threeSteps: '1:100',
      },
      energy: {
        instant: '1:100',
        oneStep: '1:100',
        twoSteps: '1:100',
        threeSteps: '1:100',
      },
      crypto: {
        instant: '1:50',
        oneStep: '1:50',
        twoSteps: '1:50',
        threeSteps: '1:50',
      },
    },
  },
};

const FirmDetailsScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<FirmDetailsRouteProp>();
  const { firmId } = route.params;
  const [activeTab, setActiveTab] = useState<TabType>('Overview');
  const firmData = firmDataMap[firmId] || firmDataMap[1];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <ChevronLeft size={24} color={COLORS.dark} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Firm Details</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
            <Bell size={24} color={COLORS.dark} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
            <Menu size={24} color={COLORS.dark} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tabContainer}>
        {(['Overview', 'Firm Rules', 'Announcements'] as TabType[]).map(tab => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.tabActive]}
            onPress={() => setActiveTab(tab)}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.tabTextActive,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.generalCard}>
          <Text style={styles.sectionLabel}>General Information</Text>
          <View style={styles.companyHeader}>
            <View style={styles.companyAvatar} />
            <View style={styles.companyInfo}>
              <Text style={styles.companyName}>{firmData.name}</Text>
              <Text style={styles.companyLocation}>{firmData.location}</Text>
            </View>
          </View>
          <View style={styles.detailsBox}>
            {[
              { label: 'CEO', value: firmData.ceo },
              { label: 'Trust Pilot', value: firmData.trustPilot },
              { label: 'Date Created', value: firmData.dateCreated },
              {
                label: 'Years in Operation',
                value: firmData.yearsInOperation.toString(),
              },
            ].map((item, index, array) => (
              <View key={index}>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>{item.label}</Text>
                  <Text style={styles.detailValue}>{item.value}</Text>
                </View>
                {index !== array.length - 1 && (
                  <View style={styles.separator} />
                )}
              </View>
            ))}
          </View>
        </View>

        <View style={styles.overviewSection}>
          <Text style={styles.overviewLabel}>Overview</Text>
          <View style={styles.wrapOverview}>
            {[
              { key: 'Broker', value: firmData.broker },
              {
                key: 'Payment Methods',
                value: firmData.paymentMethods1.join(', '),
              },
              { key: 'Platforms', value: firmData.platforms.join(', ') },
              {
                key: 'Payment Methods',
                value: firmData.paymentMethods2.join(', '),
              },
            ].map((item, index, array) => (
              <View key={index}>
                <View style={styles.overviewRow}>
                  <Text style={styles.overviewKey}>{item.key}</Text>
                  <Text style={styles.overviewValue}>{item.value}</Text>
                </View>
                {index !== array.length - 1 && (
                  <View style={styles.separator2} />
                )}
              </View>
            ))}
          </View>
        </View>

        <View style={styles.leverageSection}>
          <Text style={styles.leverageLabel}>Leverage</Text>
          {(['fx', 'metals', 'indices', 'energy', 'crypto'] as const).map(
            asset => (
              <View key={asset} style={styles.assetContainer}>
                <View style={styles.leverageTable}>
                  <Text style={styles.assetTitle}>{asset.toUpperCase()}</Text>
                  <View style={styles.tableRow}>
                    {['Instant', '1-Step', '2-Steps', '3-Steps'].map(header => (
                      <Text key={header} style={styles.tableHeader}>
                        {header}
                      </Text>
                    ))}
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableValue}>
                      {firmData.leverage[asset].instant}
                    </Text>
                    <Text style={styles.tableValue}>
                      {firmData.leverage[asset].oneStep}
                    </Text>
                    <Text style={styles.tableValue}>
                      {firmData.leverage[asset].twoSteps}
                    </Text>
                    <Text style={styles.tableValue}>
                      {firmData.leverage[asset].threeSteps}
                    </Text>
                  </View>
                </View>
              </View>
            ),
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FirmDetailsScreen;
