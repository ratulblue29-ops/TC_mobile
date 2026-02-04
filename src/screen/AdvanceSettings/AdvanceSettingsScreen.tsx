import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft } from 'lucide-react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';

const COLORS = {
  white: '#FFFFFF',
  teal: '#00897B',
  orange: '#FF9800',
  lightGray: '#F7F8FA',
};

const Header = ({ onBackPress }: { onBackPress: () => void }) => (
  <View style={styles.headerSection}>
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={onBackPress}
        activeOpacity={0.7}
      >
        <ChevronLeft size={24} color="#0B0F20" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Advance Settings</Text>
      <View style={styles.headerIcons} />
    </View>
  </View>
);

const AdvanceSettingsScreen = () => {
  const handleBackPress = () => {
    // navigation.goBack();
  };

  return (
    <LinearGradient
      colors={['#ffffff', '#F7F8FA', '#F7F8FA']}
      locations={[0, 0.3, 0]}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header onBackPress={handleBackPress} />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AdvanceSettingsScreen;
