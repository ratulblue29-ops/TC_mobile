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
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    marginTop: 15,
  },
  tab: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#E1D6D6',
  },
  tabActive: {
    backgroundColor: '#00897b27',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#00897b27',
  },
  tabText: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-Medium',
    color: '#757575',
  },
  tabTextActive: {
    color: '#00897B',
  },
  generalCard: {
    backgroundColor: '#0B0F20',
    borderRadius: 16,
    marginHorizontal: 16,
    marginTop: 16,
    padding: 20,
  },
  sectionLabel: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#AAB3BA',
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
    backgroundColor: '#BBABAB',
  },
  companyInfo: {
    flex: 1,
  },
  companyName: {
    fontSize: 20,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  companyLocation: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-Medium',
    color: '#FFFFFF',
  },
  detailsBox: {
    borderWidth: 1,
    borderColor: '#51566B',
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
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 27,
    borderWidth: 1,
    borderColor: '#E3E3E3'
  },
  overviewLabel: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#AAB3BA',
    marginBottom: 16,
  },
  wrapOverview: {
    backgroundColor: '#F7F8FA',
    borderRadius: 22,
    padding: 10,
  },
  overviewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
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
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#E3E3E3'
  },
  leverageLabel: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#AAB3BA',
    marginBottom: 16,
  },
  assetContainer: {
    marginBottom: 10,
  },
  assetTitle: {
    fontSize: 15,
    fontFamily: 'InstrumentSans-Bold',
    color: '#4E5D66',
    marginLeft: 18,
  },
  leverageTable: {
    backgroundColor: '#F7F8FA',
    borderRadius: 8,
    // padding: 12,
    paddingVertical: 10,
  },
  tableRow: {
    flexDirection: 'row',
    // paddingVertical: 8,
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
  separator: {
    height: 1,
    backgroundColor: '#51566B',
  },
  separator2: {
    height: 1,
    backgroundColor: '#D5D5D5',
  },
});

export default styles;