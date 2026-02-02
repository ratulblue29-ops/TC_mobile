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
import { CopierStackParamList } from '../../navigator/CopierStack';
import { Plus, Search, Mic } from 'lucide-react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import NetworkIcon from '../../components/svg/Sitemap';

type TabType = 'Accounts' | 'Templates' | 'Logs';
type NavigationProp = NativeStackNavigationProp<
  CopierStackParamList,
  'CopierHome'
>;

const COLORS = {
  white: '#FFFFFF',
  teal: '#00897B',
  orange: '#E67E22',
};

const accountsData = [
  {
    id: 1,
    section: 'Enabled',
    accounts: [
      {
        id: 1,
        name: 'Master Account 1',
        slavesEnabled: 7,
        slavesDisabled: 3,
        followers: '10',
      },
      {
        id: 2,
        name: 'Master Account 2',
        slavesEnabled: 7,
        slavesDisabled: 3,
        followers: '10',
      },
      {
        id: 3,
        name: 'Master Account 3',
        slavesEnabled: 7,
        slavesDisabled: 3,
        followers: '10',
      },
    ],
  },
  {
    id: 2,
    section: 'Disabled - Monitor Existing',
    accounts: [
      {
        id: 4,
        name: 'Master Account 4',
        slavesEnabled: 7,
        slavesDisabled: 3,
        followers: '10',
      },
      {
        id: 5,
        name: 'Master Account 5',
        slavesEnabled: 7,
        slavesDisabled: 3,
        followers: '10',
      },
      {
        id: 6,
        name: 'Master Account 6',
        slavesEnabled: 7,
        slavesDisabled: 3,
        followers: '10',
      },
    ],
  },
  {
    id: 3,
    section: 'Disabled',
    accounts: [
      {
        id: 7,
        name: 'Master Account 7',
        slavesEnabled: 7,
        slavesDisabled: 3,
        followers: '10',
      },
      {
        id: 8,
        name: 'Master Account 8',
        slavesEnabled: 7,
        slavesDisabled: 3,
        followers: '10',
      },
      {
        id: 9,
        name: 'Master Account 9',
        slavesEnabled: 7,
        slavesDisabled: 3,
        followers: '10',
      },
    ],
  },
];

const Header = () => (
  <View style={styles.headerSection}>
    <View>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/images/logo_icon.png')}
          style={styles.logoIcon}
        />
        <Text style={styles.headerTitle}>Copier</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
            <Plus size={24} color="#0B0F20" />
          </TouchableOpacity>
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
        style={[styles.tab, activeTab === 'Accounts' && styles.tabActive]}
        onPress={() => onTabChange('Accounts')}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === 'Accounts' && styles.tabTextActive,
          ]}
        >
          Accounts
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Templates' && styles.tabActive]}
        onPress={() => onTabChange('Templates')}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === 'Templates' && styles.tabTextActive,
          ]}
        >
          Templates
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Logs' && styles.tabActive]}
        onPress={() => onTabChange('Logs')}
        activeOpacity={0.7}
      >
        <Text
          style={[styles.tabText, activeTab === 'Logs' && styles.tabTextActive]}
        >
          Logs
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

const SearchBar = () => (
  <View style={styles.searchContainer}>
    <Search size={20} color="#5C5C5C" />
    <TextInput
      placeholder="Search"
      placeholderTextColor="#9CA3AF"
      style={styles.searchInput}
    />
    <Mic size={20} color="#5C5C5C" />
  </View>
);

const AccountCard = ({
  account,
  isLast,
  onPress,
}: {
  account: (typeof accountsData)[0]['accounts'][0];
  isLast: boolean;
  onPress: () => void;
}) => (
  <TouchableOpacity
    style={[styles.accountCard, isLast && styles.accountCardLast]}
    onPress={onPress}
    activeOpacity={0.7}
  >
    <View style={styles.accountInfo}>
      <Text style={styles.accountName}>{account.name}</Text>
      <Text style={styles.accountStatus}>
        Slaves Enabled: {account.slavesEnabled} Disabled:{' '}
        {account.slavesDisabled}
      </Text>
    </View>
    <View style={styles.followersBadge}>
      <NetworkIcon width={16} height={16} color={COLORS.white} />
      <Text style={styles.followersText}>{account.followers}</Text>
    </View>
  </TouchableOpacity>
);

const AccountSection = ({
  section,
  expanded,
  onAccountPress,
}: {
  section: (typeof accountsData)[0];
  expanded: boolean;
  onAccountPress: (accountId: number, accountName: string) => void;
}) => (
  <View style={styles.sectionContainer}>
    <Text style={styles.sectionTitle}>
      {section.section} ({section.accounts.length.toString().padStart(2, '0')})
    </Text>
    {expanded && (
      <View style={styles.accountsList}>
        {section.accounts.map((account, index) => (
          <AccountCard
            key={account.id}
            account={account}
            isLast={index === section.accounts.length - 1}
            onPress={() => onAccountPress(account.id, account.name)}
          />
        ))}
      </View>
    )}
  </View>
);

const CopierScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [activeTab, setActiveTab] = useState<TabType>('Accounts');
  const [expandedSections, setExpandedSections] = useState<
    Record<number, boolean>
  >({
    1: true,
    2: true,
    3: true,
  });

  const handleAccountPress = (accountId: number, accountName: string) => {
    navigation.navigate('MasterAccountDetails', {
      accountId,
      accountName,
    });
  };

  return (
    <LinearGradient
      colors={['#ffffff', '#F7F8FA', '#F7F8FA']}
      locations={[0, 0.3, 0]}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header />
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
          <SearchBar />

          <View>
            <Text style={styles.MsectionTitle}> Master Accounts </Text>
          </View>

          {accountsData.map(section => (
            <AccountSection
              key={section.id}
              section={section}
              expanded={expandedSections[section.id]}
              onAccountPress={handleAccountPress}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default CopierScreen;
