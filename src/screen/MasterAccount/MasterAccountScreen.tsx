import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ellipsis, Search, Mic } from 'lucide-react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';

type TabType = 'Accounts' | 'Templates' | 'Logs';

const COLORS = {
  white: '#FFFFFF',
  teal: '#00897B',
  orange: '#E67E22',
};

const MasterAccountScreen = () => {
  return (
    <LinearGradient
      colors={['#ffffff', '#F7F8FA', '#F7F8FA']}
      locations={[0, 0.3, 0]}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.headerSection}>
            <View>
              <View style={styles.header}>
                <Image
                  source={require('../../../assets/images/logo_icon.png')}
                  style={styles.logoIcon}
                />
                <Text style={styles.headerTitle}>Master Account 1</Text>
                <View style={styles.headerIcons}>
                  <TouchableOpacity
                    style={styles.iconButton}
                    activeOpacity={0.7}
                  >
                    <Ellipsis size={24} color="#0B0F20" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default MasterAccountScreen;
