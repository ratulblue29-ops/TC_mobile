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
  logoIcon: {
    width: 39.37,
    height: 36,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#0B0F20',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 12,
  },
  iconButton: {
    padding: 4,
  },
  masterCardContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 25,
    marginTop: 20,
    borderRadius: 16,
    padding: 12,
    paddingHorizontal: 22,
    borderWidth: 1,
    borderColor: '#E2E2E2',
  },
  masterCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: '#E2E2E2',
  },
  masterCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  masterCardInfo: {
    flex: 1,
  },
  masterTitle: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#AAB3BA',
    marginBottom: 6,
  },
  masterCardTitle: {
    fontSize: 16,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#0B0F20',
    marginBottom: 6,
  },
  masterCardStatus: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-Medium',
    color: '#2C3440',
  },
  content: {
    paddingHorizontal: 10,
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#0B0F20',
    marginBottom: 16,
    paddingHorizontal: 15,
  },
  slavesContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingHorizontal: 22,
    paddingVertical: 16,
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: '#E2E2E2',
  },
  subsectionTitle: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#AAB3BA',
    marginBottom: 16,
  },
  slavesList: {
    gap: 12,
  },
  slaveCard: {
    backgroundColor: '#FFF8F0',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E67E22',
    paddingHorizontal: 16,
    paddingVertical: 14,
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
  },
  slaveCardDetails: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-Regular',
    color: '#2C3440',
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
});

export default styles;