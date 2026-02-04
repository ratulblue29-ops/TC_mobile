import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  headerSection: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderColor: '#00000027',
    paddingBottom: 17,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#0B0F20',
  },
  headerIcons: {
    width: 28,
  },
  iconButton: {
    padding: 4,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  // Calculate Risk Card
  calculateRiskCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  calculateIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#E0F2F1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  calculateTextContainer: {
    flex: 1,
  },
  calculateTitle: {
    fontSize: 16,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#0B0F20',
    marginBottom: 4,
  },
  calculateSubtitle: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-Regular',
    color: '#757575',
  },
  chevronRight: {
    transform: [{ rotate: '90deg' }],
  },
  // Advance Settings Card
  advanceCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
    marginBottom: 20,
  },
  advanceCardLabel: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-Regular',
    color: '#757575',
    marginBottom: 16,
  },
  // Toggle Section
  toggleSection: {
    marginBottom: 16,
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  toggleLabel: {
    fontSize: 16,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#0B0F20',
  },
  // Switch Styles
  switchTrack: {
    width: 51,
    height: 31,
    borderRadius: 16,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  switchTrackActive: {
    backgroundColor: '#FF9800',
  },
  switchThumb: {
    width: 27,
    height: 27,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-start',
  },
  switchThumbActive: {
    alignSelf: 'flex-end',
  },
  // Input Section
  inputSection: {
    gap: 12,
  },
  inputField: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 16,
    fontSize: 14,
    fontFamily: 'InstrumentSans-Regular',
    color: '#0B0F20',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputPlaceholder: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-Regular',
    color: '#757575',
  },
  // Button Container
  buttonContainer: {
    paddingTop: 8,
    paddingBottom: 20,
  },
  saveButton: {
    backgroundColor: '#00BFA5',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    fontSize: 16,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#FFFFFF',
  },
});

export default styles;