import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
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
  logoIcon: {
    width: 39.37,
    height: 36,
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
  accountSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 12,
  },
  accountLabel: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'InstrumentSans-Medium',
    color: '#4E5D66',
    marginBottom: 4,
  },
  accountNumber: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#0B0F20',
  },
  detailsCard: {
    backgroundColor: '#E6EAED',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 16,
    padding: 16,
    gap: 12,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  detailItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  detailTextContainer: {
    flex: 1,
  },
  detailLabel: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'InstrumentSans-Regular',
    color: '#4E5D66',
    marginBottom: 2,
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#0B0F20',
  },
  tabContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  tabPill: {
    flexDirection: 'row',
    backgroundColor: '#E8E8E8',
    borderRadius: 12,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabActive: {
    backgroundColor: '#00897B',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'InstrumentSans-Medium',
    color: '#0B0F20',
  },
  tabTextActive: {
    color: '#FFFFFF',
  },
  portfolioCard: {
    backgroundColor: '#0B0F20',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 20,
    padding: 20,
    width: width - 40,
  },
  portfolioLabel: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'InstrumentSans-Regular',
    color: '#9CA3AF',
    marginBottom: 8,
  },
  portfolioHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  portfolioValue: {
    fontSize: 28,
    fontWeight: '700',
    fontFamily: 'InstrumentSans-Bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  portfolioChange: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'InstrumentSans-Medium',
    color: '#FFFFFF',
  },
  openValue: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-Regular',
  },
  openAmount: {
    fontWeight: '600',
    color: '#FFFFFF',
  },
  openLabel: {
    fontWeight: '400',
    color: '#9CA3AF',
  },
  periodToggle: {
    flexDirection: 'row',
    backgroundColor: '#1F2937',
    borderRadius: 12,
    padding: 4,
    marginBottom: 20,
    gap: 4,
  },
  periodButton: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  periodButtonActive: {
    backgroundColor: '#00897B',
  },
  periodText: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'InstrumentSans-Medium',
    color: '#9CA3AF',
  },
  periodTextActive: {
    color: '#FFFFFF',
  },
  chart: {
    borderRadius: 16,
    marginVertical: 8,
  },
  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginTop: 16,
    marginBottom: 8,
  },
  paginationDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#9CA3AF',
  },
  paginationDotActive: {
    width: 20,
    backgroundColor: '#00897B',
  },
  metricsSection: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
  metricsTitle: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#0B0F20',
    marginBottom: 16,
  },
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  metricCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  metricLabel: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'InstrumentSans-Regular',
    color: '#4E5D66',
    marginBottom: 8,
  },
  metricValue: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'InstrumentSans-Bold',
    color: '#0B0F20',
    marginBottom: 4,
  },
  metricSubValue: {
    fontSize: 11,
    fontWeight: '400',
    fontFamily: 'InstrumentSans-Regular',
    color: '#4E5D66',
  },
  metricChangeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
  },
  metricChangeText: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'InstrumentSans-Medium',
  },
  syncStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginTop: 16,
  },
  syncText: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'InstrumentSans-Regular',
    color: '#4E5D66',
  },
});

export default styles;