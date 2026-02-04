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
  sectionTitle: {
    fontSize: 24,
    fontFamily: 'InstrumentSans-Bold',
    color: '#0B0F20',
    marginBottom: 12,
  },
  addMapCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#E2E2E2',
  },
  dropdownField: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#C8C8C8',
  },
  dropdownFieldFirst: {
    marginBottom: 8,
  },
  dropdownLabel: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-Regular',
    color: '#999999',
    marginBottom: 8,
  },
  dropdownValue: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownText: {
    fontSize: 18,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#0B0F20',
  },
  dropdownPlaceholder: {
    color: '#BDBDBD',
    fontFamily: 'InstrumentSans-Regular',
  },
  createButton: {
    backgroundColor: '#00897B',
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  createButtonText: {
    fontSize: 16,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#FFFFFF',
  },
  mappedCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E2E2E2',
  },
  mappedHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  mappedLabel: {
    fontSize: 16,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#0B0F20',
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#999999',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  checkboxLabel: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-Medium',
    color: '#0B0F20',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 16,
    marginBottom: 20,
    height: 48,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'InstrumentSans-Regular',
    color: '#0B0F20',
    marginHorizontal: 12,
  },
  mappingsList: {
    gap: 16,
  },
  mappingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  symbolPill: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    minWidth: 100,
    alignItems: 'center',
  },
  symbolPillFrom: {
    backgroundColor: '#E3F2FD',
    borderColor: '#4A90E2',
  },
  symbolPillTo: {
    backgroundColor: '#E8F5E9',
    borderColor: '#52C41A',
  },
  symbolPillText: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-SemiBold',
  },
  symbolPillTextFrom: {
    color: '#4A90E2',
  },
  symbolPillTextTo: {
    color: '#52C41A',
  },
  deleteButton: {
    padding: 8,
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionLabel: {
    fontSize: 18,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#2C3440',
    marginBottom: 8,
  },
  sectionLabel2: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#AAB3BA',
    marginBottom: 8,
  },
  settingsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: '#E2E2E2',
  },
  cardHeader: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#AAB3BA',
    marginBottom: 16,
  },
  fieldContainer: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#C8C8C8',
  },
  fieldContainerStart: {
    borderTopStartRadius: 12,
    borderTopEndRadius: 12,
  },
  fieldContainerLast: {
    borderBottomStartRadius: 12,
    borderBottomEndRadius: 12,
    marginBottom: 6,
  },
  fieldLabel: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-Medium',
    color: '#4E5D66',
    marginBottom: 8,
  },
  fieldLabelSmall: {
    fontSize: 13,
    fontFamily: 'InstrumentSans-Regular',
    color: '#757575',
    marginBottom: 8,
  },
  fieldValue: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fieldText: {
    fontSize: 18,
    fontFamily: 'InstrumentSans-Medium',
    color: '#0B0F20',
  },
  fieldPlaceholder: {
    color: '#BDBDBD',
  },
  riskInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  riskInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#1A1A1A',
    padding: 0,
  },
  percentageSymbol: {
    fontSize: 16,
    fontFamily: 'InstrumentSans-Medium',
    color: '#1A1A1A',
    marginLeft: 8,
  },
  toggleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  toggleItemLast: {
    borderBottomWidth: 0,
  },
  toggleTextContainer: {
    flex: 1,
    marginRight: 12,
  },
  toggleTitle: {
    fontSize: 18,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#0B0F20',
    marginBottom: 4,
  },
  toggleSubtitle: {
    fontSize: 15,
    fontFamily: 'InstrumentSans-Regular',
    color: '#4E5D66',
  },
  switchTrack: {
    width: 58,
    height: 28,
    borderRadius: 16,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  switchTrackActive: {
    backgroundColor: '#FF9800',
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
  advanceSettingsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    flexDirection: 'row',
    alignItems: 'center',
  },
  advanceIconContainer: {
    marginRight: 16,
  },
  advanceTextContainer: {
    flex: 1,
  },
  advanceTitle: {
    fontSize: 18,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#0B0F20',
    marginBottom: 4,
  },
  advanceSubtitle: {
    fontSize: 15,
    fontFamily: 'InstrumentSans-Regular',
    color: '#4E5D66',
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  saveButton: {
    backgroundColor: '#00897B',
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    fontSize: 16,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#FFFFFF',
  },
  slaveCardContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  slaveTitle: {
    fontSize: 18,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#2C3440',
    marginBottom: 8,
  },
  slaveCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: '#E2E2E2',
  },
  slaveCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  slaveCardInfo: {
    flex: 1,
    marginRight: 12,
  },
  slaveCardName: {
    fontSize: 18,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#0B0F20',
    marginBottom: 8,
  },
  slaveCardDetails: {
    fontSize: 15,
    fontFamily: 'InstrumentSans-Regular',
    color: '#4E5D66',
    marginBottom: 4,
  },
  slaveCardLabel: {
    color: '#757575',
  },
  slaveCardValue: {
    color: '#0B0F20',
    fontFamily: 'InstrumentSans-Medium',
  },
  slaveSwitchContainer: {
    alignItems: 'flex-end',
  },
  settingsContainer: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  settingsHeader: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#AAB3BA',
    marginBottom: 16,
  },
  menuList: {
    gap: 0,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  menuItemLast: {
    borderBottomWidth: 0,
  },
  menuIconContainer: {
    marginRight: 16,
  },
  menuTextContainer: {
    flex: 1,
    marginRight: 12,
  },
  menuTitle: {
    fontSize: 18,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#0B0F20',
    marginBottom: 4,
  },
  menuTitleDestructive: {
    color: '#F44336',
  },
  menuSubtitle: {
    fontSize: 15,
    fontFamily: 'InstrumentSans-Regular',
    color: '#4E5D66',
  },
});

export default styles;