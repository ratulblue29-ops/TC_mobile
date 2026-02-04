import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ellipsis } from 'lucide-react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';

type TabType = 'Based' | 'Lot Based' | 'Fixed Lot';

const COLORS = {
  white: '#FFFFFF',
  teal: '#00897B',
  orange: '#E67E22',
};

const Header = () => (
  <View style={styles.headerSection}>
    <View>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/images/logo_icon.png')}
          style={styles.logoIcon}
        />
        <Text style={styles.headerTitle}>Calculate Risk</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
            <Ellipsis size={24} color="#0B0F20" />
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
        style={[styles.tab, activeTab === 'Based' && styles.tabActive]}
        onPress={() => onTabChange('Based')}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === 'Based' && styles.tabTextActive,
          ]}
        >
          Based
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Lot Based' && styles.tabActive]}
        onPress={() => onTabChange('Lot Based')}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === 'Lot Based' && styles.tabTextActive,
          ]}
        >
          Lot Based
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Fixed Lot' && styles.tabActive]}
        onPress={() => onTabChange('Fixed Lot')}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === 'Fixed Lot' && styles.tabTextActive,
          ]}
        >
          Fixed Lot
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

const CalculateRiskScreen = () => {
  const [activeTab, setActiveTab] = useState<TabType>('Based');
  const [expandedSections, setExpandedSections] = useState<
    Record<number, boolean>
  >({
    1: true,
    2: true,
    3: true,
  });

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
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default CalculateRiskScreen;
