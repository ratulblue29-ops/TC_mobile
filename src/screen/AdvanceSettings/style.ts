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
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: '#E3E3E3',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  calculateIconContainer: {
    marginRight: 12,
  },
  calculateTextContainer: {
    flex: 1,
  },
  calculateTitle: {
    fontSize: 18,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#0B0F20',
    marginBottom: 4,
  },
  calculateSubtitle: {
    fontSize: 15,
    fontFamily: 'InstrumentSans-Regular',
    color: '#4E5D66',
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
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#AAB3BA',
    marginBottom: 14,
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
    fontFamily: 'InstrumentSans-Medium',
    color: '#0B0F20',
  },
  // Switch Styles
  switchTrack: {
    width: 58,
    height: 28,
    borderRadius: 16,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  switchTrackActive: {
    backgroundColor: '#E67E22',
  },
  switchThumb: {
    width: 35,
    height: 23,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-start',
  },
  switchThumbActive: {
    alignSelf: 'flex-end',
  },
  // Input Section
  inputSection: {
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#C8C8C8',
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
    fontSize: 16,
    fontFamily: 'InstrumentSans-Medium',
    color: '#7E8A93',
  },
  // Button Container
  buttonContainer: {
    paddingTop: 8,
    paddingBottom: 20,
  },
  saveButton: {
    backgroundColor: '#00897B',
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