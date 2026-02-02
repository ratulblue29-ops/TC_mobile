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
    width: 40,
  },
  iconButton: {
    padding: 4,
  },
  slaveCardContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginTop: 20,
    borderRadius: 16,
    padding: 12,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#E2E2E2',
  },
  slaveTitle: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#AAB3BA',
    marginBottom: 6,
  },
  slaveCard: {
    backgroundColor: '#FFF4E6',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderWidth: 2,
    borderColor: '#FF9800',
  },
  slaveCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  slaveCardInfo: {
    flex: 1,
  },
  slaveCardName: {
    fontSize: 16,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#0B0F20',
    marginBottom: 6,
  },
  slaveCardDetails: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-Regular',
    color: '#2C3440',
    marginBottom: 2,
  },
  slaveCardLabel: {
    fontFamily: 'InstrumentSans-Regular',
  },
  slaveCardValue: {
    fontFamily: 'InstrumentSans-SemiBold',
  },
  slaveSwitchContainer: {
    marginLeft: 12,
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
  settingsContainer: {
    paddingHorizontal: 10,
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#2C3440',
    marginBottom: 16,
    paddingHorizontal: 6,
  },
  settingsCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginHorizontal: 6,
    borderWidth: 1,
    borderColor: '#E2E2E2',
  },
  settingsHeader: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#AAB3BA',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  menuList: {
    paddingTop: 4,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  menuItemLast: {
    borderBottomWidth: 0,
  },
  menuIconContainer: {
    marginRight: 16,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 18,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#0B0F20',
    marginBottom: 4,
  },
  menuTitleDestructive: {
    color: '#D10000',
  },
  menuSubtitle: {
    fontSize: 15,
    fontFamily: 'InstrumentSans-Regular',
    color: '#4E5D66',
  },
});

export default styles;