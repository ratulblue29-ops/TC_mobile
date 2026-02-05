import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/RootNavigator';
import { ChevronLeft } from 'lucide-react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const COLORS = {
  white: '#FFFFFF',
  teal: '#00897B',
  blueLight: '#E3F2FD',
  blueBorder: '#4A90E2',
  blueText: '#4A90E2',
  greenLight: '#E8F5E9',
  greenBorder: '#52C41A',
  greenText: '#52C41A',
  gray: '#5C5C5C',
  searchBg: '#F5F5F5',
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
      <Text style={styles.headerTitle}>Trading Hours</Text>
      <View style={styles.headerIcons} />
    </View>
  </View>
);

const TradingHoursScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleBackPress = () => {
    navigation.goBack();
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

export default TradingHoursScreen;
