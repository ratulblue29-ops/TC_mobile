import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { ChevronDown } from 'lucide-react-native';

const COLORS = {
  white: '#FFFFFF',
  teal: '#00897B',
  textMain: '#0B0F20',
  textSecondary: '#9CA3AF',
  labelGray: '#6B7280',
  borderGray: '#E5E7EB',
  dragHandleGray: '#CCCCCC',
  placeholderGray: '#9CA3AF',
};

type DayOption = {
  id: number;
  label: string;
  value: string;
};

type AddTradingHoursProps = {
  visible: boolean;
  onClose: () => void;
  onAdd: (day: string, startTime: string, endTime: string) => void;
};

const DAYS: DayOption[] = [
  { id: 1, label: 'Monday', value: 'Monday' },
  { id: 2, label: 'Tuesday', value: 'Tuesday' },
  { id: 3, label: 'Wednesday', value: 'Wednesday' },
  { id: 4, label: 'Thursday', value: 'Thursday' },
  { id: 5, label: 'Friday', value: 'Friday' },
  { id: 6, label: 'Saturday', value: 'Saturday' },
  { id: 7, label: 'Sunday', value: 'Sunday' },
];

const AddTradingHours = ({ visible, onClose, onAdd }: AddTradingHoursProps) => {
  const [selectedDay, setSelectedDay] = useState<string>('Monday');
  const [startTime, setStartTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');

  const handleClose = () => {
    setSelectedDay('Monday');
    setStartTime('');
    setEndTime('');
    onClose();
  };

  const handleAdd = () => {
    if (selectedDay && startTime && endTime) {
      onAdd(selectedDay, startTime, endTime);
      handleClose();
    }
  };

  const handleDayPress = () => {
    console.log('Open day picker');
  };

  const handleStartTimePress = () => {
    console.log('Open start time picker');
  };

  const handleEndTimePress = () => {
    console.log('Open end time picker');
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={handleClose}
    >
      <TouchableOpacity
        style={styles.modalOverlay}
        activeOpacity={1}
        onPress={handleClose}
      >
        <TouchableOpacity
          style={styles.modalContent}
          activeOpacity={1}
          onPress={e => e.stopPropagation()}
        >
          <View style={styles.dragHandle} />

          <View style={styles.headerSection}>
            <Text style={styles.modalTitle}>Add Trading Hours</Text>
            <Text style={styles.modalSubtitle}>
              Configure trading hours for specific days
            </Text>
          </View>

          <View style={styles.formContainer}>
            <TouchableOpacity
              style={styles.formField}
              onPress={handleDayPress}
              activeOpacity={0.7}
            >
              <Text style={styles.fieldLabel}>Day</Text>
              <View style={styles.fieldContent}>
                <Text style={styles.fieldValue}>{selectedDay}</Text>
                <ChevronDown size={20} color={COLORS.textSecondary} />
              </View>
            </TouchableOpacity>

            <View style={styles.fieldDivider} />

            <TouchableOpacity
              style={styles.formField}
              onPress={handleStartTimePress}
              activeOpacity={0.7}
            >
              <Text style={styles.fieldLabel}>Start Time</Text>
              <View style={styles.fieldContent}>
                <Text
                  style={[
                    styles.fieldValue,
                    !startTime && styles.fieldPlaceholder,
                  ]}
                >
                  {startTime || 'Start Time'}
                </Text>
                <ChevronDown size={20} color={COLORS.textSecondary} />
              </View>
            </TouchableOpacity>

            <View style={styles.fieldDivider} />

            <TouchableOpacity
              style={styles.formField}
              onPress={handleEndTimePress}
              activeOpacity={0.7}
            >
              <Text style={styles.fieldLabel}>End Time</Text>
              <View style={styles.fieldContent}>
                <Text
                  style={[
                    styles.fieldValue,
                    !endTime && styles.fieldPlaceholder,
                  ]}
                >
                  {endTime || 'End Time'}
                </Text>
                <ChevronDown size={20} color={COLORS.textSecondary} />
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.addButton}
            onPress={handleAdd}
            activeOpacity={0.8}
          >
            <Text style={styles.addButtonText}>Add Trading Hour</Text>
          </TouchableOpacity>

          <View style={styles.bottomSafeArea} />
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  dragHandle: {
    width: 40,
    height: 4,
    alignSelf: 'center',
    marginVertical: 12,
    backgroundColor: COLORS.dragHandleGray,
    borderRadius: 2,
  },
  headerSection: {
    paddingHorizontal: 22,
    marginBottom: 24,
  },
  modalTitle: {
    fontSize: 24,
    fontFamily: 'InstrumentSans-Bold',
    color: COLORS.textMain,
    marginBottom: 4,
  },
  modalSubtitle: {
    fontSize: 15,
    fontFamily: 'InstrumentSans-Regular',
    color: COLORS.labelGray,
  },
  formContainer: {
    marginHorizontal: 22,
    borderWidth: 1,
    borderColor: COLORS.borderGray,
    borderRadius: 14,
    backgroundColor: COLORS.white,
  },
  formField: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  fieldLabel: {
    fontSize: 13,
    fontFamily: 'InstrumentSans-Regular',
    color: COLORS.labelGray,
    marginBottom: 6,
  },
  fieldContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fieldValue: {
    fontSize: 17,
    fontFamily: 'InstrumentSans-Medium',
    color: COLORS.textMain,
  },
  fieldPlaceholder: {
    color: COLORS.placeholderGray,
    fontFamily: 'InstrumentSans-Regular',
  },
  fieldDivider: {
    height: 1,
    backgroundColor: COLORS.borderGray,
    marginHorizontal: 16,
  },
  addButton: {
    backgroundColor: COLORS.teal,
    paddingVertical: 14,
    marginTop: 28,
    marginHorizontal: 22,
    borderRadius: 12,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 17,
    fontFamily: 'InstrumentSans-SemiBold',
    color: COLORS.white,
  },
  bottomSafeArea: {
    paddingBottom: 20,
  },
});

export default AddTradingHours;
