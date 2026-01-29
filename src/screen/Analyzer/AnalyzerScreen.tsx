import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Bell,
  Menu,
  ChevronDown,
} from 'lucide-react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';

type TabType = 'Accounts' | 'Templates';

const AnalyzerScreen = () => {
  const [activeTab, setActiveTab] = useState<TabType>('Accounts');
  return (
   <LinearGradient
      colors={['#ffffff', '#F7F8FA', '#F7F8FA']}
      locations={[0, 0.3, 0]}
      style={styles.gradient}
   >
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
       <View style={styles.headerSection}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={require('../../../assets/images/logo_icon.png')}
            style={styles.logoIcon}
          />
          <Text style={styles.headerTitle}>Analyzer</Text>
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
            </View>
           </View>
       </View>
      </ScrollView>
    </SafeAreaView>
   </LinearGradient>
  );
};

export default AnalyzerScreen;