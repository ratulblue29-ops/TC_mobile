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
import {
  Plus,
  Search,
  Mic,
} from 'lucide-react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import NetworkIcon from '../../components/svg/Sitemap';

type TabType = 'Accounts' | 'Templates' | 'Logs';

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
      { id: 1, name: 'Master Account 1', slavesEnabled: 7, slavesDisabled: 3, followers: '10' },
      { id: 2, name: 'Master Account 2', slavesEnabled: 7, slavesDisabled: 3, followers: '10' },
      { id: 3, name: 'Master Account 3', slavesEnabled: 7, slavesDisabled: 3, followers: '10' },
    ],
  },
  {
    id: 2,
    section: 'Disabled - Monitor Existing',
    accounts: [
      { id: 4, name: 'Master Account 4', slavesEnabled: 7, slavesDisabled: 3, followers: '10' },
      { id: 5, name: 'Master Account 5', slavesEnabled: 7, slavesDisabled: 3, followers: '10' },
      { id: 6, name: 'Master Account 6', slavesEnabled: 7, slavesDisabled: 3, followers: '10' },
    ],
  },
  {
    id: 3,
    section: 'Disabled',
    accounts: [
      { id: 7, name: 'Master Account 7', slavesEnabled: 7, slavesDisabled: 3, followers: '10' },
      { id: 8, name: 'Master Account 8', slavesEnabled: 7, slavesDisabled: 3, followers: '10' },
      { id: 9, name: 'Master Account 9', slavesEnabled: 7, slavesDisabled: 3, followers: '10' },
    ],
  },
];

const CopierScreen = () => {
  const [activeTab, setActiveTab] = useState<TabType>('Accounts');
  const [expandedSections, setExpandedSections] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true,
  });

  const toggleSection = (sectionId: number) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

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
              <Text style={styles.headerTitle}>Copier</Text>
              <View style={styles.headerIcons}>
                <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
                  <Plus size={24} color="#0B0F20" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.tabContainer}>
            <View style={styles.tabPill}>
              <TouchableOpacity
                style={[styles.tab, activeTab === 'Accounts' && styles.tabActive]}
                onPress={() => setActiveTab('Accounts')}
                activeOpacity={0.7}
              >
                <Text style={[styles.tabText, activeTab === 'Accounts' && styles.tabTextActive]}>
                  Accounts
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.tab, activeTab === 'Templates' && styles.tabActive]}
                onPress={() => setActiveTab('Templates')}
                activeOpacity={0.7}
              >
                <Text style={[styles.tabText, activeTab === 'Templates' && styles.tabTextActive]}>
                  Templates
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.tab, activeTab === 'Logs' && styles.tabActive]}
                onPress={() => setActiveTab('Logs')}
                activeOpacity={0.7}
              >
                <Text style={[styles.tabText, activeTab === 'Logs' && styles.tabTextActive]}>
                  Logs
                </Text>
              </TouchableOpacity>
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
            <Text style={styles.MsectionTitle}> Master Accounts </Text>
          </View>

          {accountsData.map((section) => (
            <View key={section.id} style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                {section.section} ({section.accounts.length.toString().padStart(2, '0')})
              </Text>
              {expandedSections[section.id] && (
                <View style={styles.accountsList}>
                  {section.accounts.map((account, index) => (
                    <View
                      key={account.id}
                      style={[
                        styles.accountCard,
                        index === section.accounts.length - 1 && styles.accountCardLast,
                      ]}
                    >
                      <View style={styles.accountInfo}>
                        <Text style={styles.accountName}>{account.name}</Text>
                        <Text style={styles.accountStatus}>
                          Slaves Enabled: {account.slavesEnabled}  Disabled: {account.slavesDisabled}
                        </Text>
                      </View>
                      <View style={styles.followersBadge}>
                        <NetworkIcon width={16} height={16} color={COLORS.white} />
                        <Text style={styles.followersText}>{account.followers}</Text>
                      </View>
                    </View>
                  ))}
                </View>
              )}
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default CopierScreen;