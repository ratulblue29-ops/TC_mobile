import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#1A1A1A',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 12,
  },
  iconButton: {
    padding: 4,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  tabActive: {
    borderBottomWidth: 2,
    borderBottomColor: '#00BFA5',
  },
  tabText: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-Regular',
    color: '#999999',
  },
  tabTextActive: {
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#00BFA5',
  },
  generalCard: {
    backgroundColor: '#1A1A2E',
    borderRadius: 16,
    marginHorizontal: 16,
    marginTop: 16,
    padding: 20,
  },
  sectionLabel: {
    fontSize: 12,
    fontFamily: 'InstrumentSans-Regular',
    color: '#B0B0B0',
    marginBottom: 16,
  },
  companyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
  },
  companyAvatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#E5E5E5',
  },
  companyInfo: {
    flex: 1,
  },
  companyName: {
    fontSize: 20,
    fontFamily: 'InstrumentSans-Bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  companyLocation: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-Regular',
    color: '#B0B0B0',
  },
  detailsBox: {
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 12,
    padding: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  detailLabel: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-Regular',
    color: '#999999',
  },
  detailValue: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-Medium',
    color: '#FFFFFF',
  },
  overviewSection: {
    marginHorizontal: 16,
    marginTop: 24,
  },
  overviewLabel: {
    fontSize: 12,
    fontFamily: 'InstrumentSans-Regular',
    color: '#CCCCCC',
    marginBottom: 16,
  },
  overviewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  overviewKey: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-Regular',
    color: '#999999',
    flex: 1,
  },
  overviewValue: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-Regular',
    color: '#333333',
    flex: 1,
    textAlign: 'right',
  },
  leverageSection: {
    marginHorizontal: 16,
    marginTop: 32,
    marginBottom: 24,
  },
  leverageLabel: {
    fontSize: 12,
    fontFamily: 'InstrumentSans-Regular',
    color: '#CCCCCC',
    marginBottom: 20,
  },
  assetContainer: {
    marginBottom: 20,
  },
  assetTitle: {
    fontSize: 15,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#333333',
    marginBottom: 12,
  },
  leverageTable: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  tableHeader: {
    flex: 1,
    fontSize: 13,
    fontFamily: 'InstrumentSans-Regular',
    color: '#333333',
    textAlign: 'center',
  },
  tableValue: {
    flex: 1,
    fontSize: 13,
    fontFamily: 'InstrumentSans-Medium',
    color: '#333333',
    textAlign: 'center',
  },
});

export default styles;