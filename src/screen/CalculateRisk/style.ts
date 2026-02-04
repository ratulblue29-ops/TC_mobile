import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
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
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
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
  tabContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  tabPill: {
    flexDirection: 'row',
    backgroundColor: '#D4DADF',
    borderRadius: 12,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabActive: {
    backgroundColor: '#00897B',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#0B0F20',
  },
  tabTextActive: {
    color: '#FFFFFF',
  },
  infoBanner: {
    backgroundColor: '#FFF4D6',
    borderRadius: 12,
    marginHorizontal: 20,
    marginTop: 20,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  infoBannerText: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-Regular',
    fontWeight: '400',
    color: '#1C1C1E',
    lineHeight: 20,
  },
  inputCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginHorizontal: 20,
    marginTop: 20,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  inputFieldContainer: {
    paddingVertical: 16,
  },
  inputFieldContainerLast: {
    paddingBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-Medium',
    fontWeight: '500',
    color: '#8E8E93',
    marginBottom: 8,
  },
  input: {
    fontSize: 16,
    fontFamily: 'InstrumentSans-Regular',
    fontWeight: '400',
    color: '#1C1C1E',
    paddingVertical: 8,
  },
  inputDivider: {
    height: 1,
    backgroundColor: '#F5F5F5',
  },
  calculateButton: {
    backgroundColor: '#1A1D2E',
    borderRadius: 14,
    marginHorizontal: 20,
    marginTop: 20,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calculateButtonText: {
    fontSize: 16,
    fontFamily: 'InstrumentSans-SemiBold',
    fontWeight: '600',
    color: '#FFFFFF',
  },
  applyButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    paddingBottom: 34,
    paddingTop: 12,
  },
  applyButton: {
    backgroundColor: '#00897B',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyButtonText: {
    fontSize: 16,
    fontFamily: 'InstrumentSans-SemiBold',
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default styles;