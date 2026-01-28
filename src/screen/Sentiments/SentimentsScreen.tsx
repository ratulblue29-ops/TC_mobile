import React from 'react';
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

const SentimentsScreen = () => {
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
          <Text style={styles.headerTitle}>Sentiments</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
              <Bell size={24} color="#0B0F20" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
              <Menu size={24} color="#0B0F20" />
            </TouchableOpacity>
          </View>
        </View>
       </View>
      </ScrollView>
    </SafeAreaView>
   </LinearGradient>
  );
};

export default SentimentsScreen;