import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';

const COLORS = {
  primary: '#00897B',
  secondary: '#0B0F20',
  gradientStart: '#FFFFFF',
  gradientEnd: '#F7F8FA',
};

const Header = ({ onBackPress }: { onBackPress: () => void }) => (
  <View style={styles.headerSection}>
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={onBackPress}
        activeOpacity={0.7}
      >
        <ChevronLeft size={24} color={COLORS.secondary} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Add Account</Text>
      <View style={styles.headerSpacer} />
    </View>
  </View>
);

const AddAccountScreen = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    // Navigate back to the previous screen
    navigation.goBack();
  };

  return (
    <LinearGradient
      colors={[COLORS.gradientStart, COLORS.gradientEnd, COLORS.gradientEnd]}
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

export default AddAccountScreen;
