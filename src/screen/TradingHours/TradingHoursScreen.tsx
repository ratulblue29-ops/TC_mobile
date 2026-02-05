import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/RootNavigator';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import AddTradingHours from '../../components/modal/CopierModal/AddTradingHours';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const COLORS = {
  white: '#FFFFFF',
  teal: '#00A896',
  orange: '#FF9500',
  black: '#000000',
  gray: '#616161',
};

type DaySchedule = {
  id: number;
  day: string;
  startTime: string;
  endTime: string;
  enabled: boolean;
};

const CustomSwitch = ({
  value,
  onValueChange,
}: {
  value: boolean;
  onValueChange: () => void;
}) => (
  <TouchableOpacity
    style={[styles.switchTrack, value && styles.switchTrackActive]}
    onPress={onValueChange}
    activeOpacity={0.8}
  >
    <View style={[styles.switchThumb, value && styles.switchThumbActive]} />
  </TouchableOpacity>
);

const Header = ({ onBackPress }: { onBackPress: () => void }) => (
  <View style={styles.headerSection}>
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={onBackPress}
        activeOpacity={0.7}
      >
        <ChevronLeft size={24} color={COLORS.black} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Trading Hours</Text>
      <View style={styles.headerIcons} />
    </View>
  </View>
);

const AddTradingHoursCard = ({ onPress }: { onPress: () => void }) => (
  <TouchableOpacity
    style={styles.addCard}
    onPress={onPress}
    activeOpacity={0.7}
  >
    <View style={styles.addCardLeft}>
      <View style={styles.clockIconContainer}>
        <Clock size={24} color={COLORS.teal} />
      </View>
      <View style={styles.addCardTextContainer}>
        <Text style={styles.addCardTitle}>Add Trading Hours</Text>
        <Text style={styles.addCardSubtitle}>
          Configure trading hours for specific days
        </Text>
      </View>
    </View>
    <ChevronRight size={20} color={COLORS.gray} />
  </TouchableOpacity>
);

const DayItem = ({
  schedule,
  onToggle,
  onPress,
  isLast,
}: {
  schedule: DaySchedule;
  onToggle: (id: number) => void;
  onPress: (schedule: DaySchedule) => void;
  isLast: boolean;
}) => (
  <TouchableOpacity
    style={[styles.dayItem, isLast && styles.dayItemLast]}
    onPress={() => onPress(schedule)}
    activeOpacity={0.7}
  >
    <View style={styles.dayItemLeft}>
      <Text style={styles.dayName}>{schedule.day}</Text>
      <Text style={styles.timeInfo}>
        Start: {schedule.startTime} End: {schedule.endTime}
      </Text>
    </View>
    <View style={styles.daySwitchContainer}>
      <TouchableOpacity
        onPress={e => {
          e.stopPropagation();
          onToggle(schedule.id);
        }}
        activeOpacity={0.8}
      >
        <CustomSwitch
          value={schedule.enabled}
          onValueChange={() => onToggle(schedule.id)}
        />
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

const TradingHoursScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const [schedules, setSchedules] = useState<DaySchedule[]>([
    {
      id: 1,
      day: 'Monday',
      startTime: '00:00',
      endTime: '00:00',
      enabled: true,
    },
    {
      id: 2,
      day: 'Tuesday',
      startTime: '00:00',
      endTime: '00:00',
      enabled: true,
    },
    {
      id: 3,
      day: 'Wednesday',
      startTime: '00:00',
      endTime: '00:00',
      enabled: true,
    },
  ]);

  const [isAddModalVisible, setIsAddModalVisible] = useState(false);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleAddPress = () => {
    setIsAddModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsAddModalVisible(false);
  };

  const handleAddTradingHour = (
    day: string,
    startTime: string,
    endTime: string,
  ) => {
    const newId = Math.max(...schedules.map(s => s.id), 0) + 1;
    const newSchedule: DaySchedule = {
      id: newId,
      day,
      startTime,
      endTime,
      enabled: true,
    };
    setSchedules(prev => [...prev, newSchedule]);
  };

  const handleToggleDay = (id: number) => {
    setSchedules(prev =>
      prev.map(schedule =>
        schedule.id === id
          ? { ...schedule, enabled: !schedule.enabled }
          : schedule,
      ),
    );
  };

  const handleDayPress = (schedule: DaySchedule) => {
    console.log('Edit day:', schedule.day);
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

          <AddTradingHoursCard onPress={handleAddPress} />

          <View style={styles.content}>
            <View style={styles.daysContainer}>
              <Text style={styles.sectionHeader}>Added Trading Hours</Text>
              {schedules.map((schedule, index) => (
                <DayItem
                  key={schedule.id}
                  schedule={schedule}
                  onToggle={handleToggleDay}
                  onPress={handleDayPress}
                  isLast={index === schedules.length - 1}
                />
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

      <AddTradingHours
        visible={isAddModalVisible}
        onClose={handleCloseModal}
        onAdd={handleAddTradingHour}
      />
    </LinearGradient>
  );
};

export default TradingHoursScreen;
