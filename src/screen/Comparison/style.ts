import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 17,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#1A1A1A',
  },
  headerSpacer: {
    width: 32,
  },
  firmSelection: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 10,
  },
  firmPill: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 10,
  },
  firmPillText: {
    left: -6,
    fontSize: 14,
    fontFamily: 'InstrumentSans-Medium',
    color: '#1A1A1A',
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  tab: {
    paddingVertical: 7,
    paddingHorizontal: 10,
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
  scrollView: {
    flex: 1,
  },
  contentSection: {
    marginBottom: 70,
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#E3E3E3',
  },
  sectionHeader: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#AAB3BA',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  comparisonRow: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#F7F8FA',
    borderRadius: 20,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  metricTitle: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-Bold',
    color: '#4E5D66',
    marginBottom: 12,
  },
  valueRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
  },
  firmLabel: {
    fontSize: 12,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#000000',
    marginLeft: 8,
  },
  valueText: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-Medium',
    color: '#4E5D66',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 24,
    paddingVertical: 20,
    backgroundColor: 'transparent',
  },
  addButton: {
    backgroundColor: '#00897B',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: 15,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#FFFFFF',
  },
  iconBox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#C8C8C8',
    backgroundColor: 'transparent',
  },
  separator: {
    height: 1,
    backgroundColor: '#D1DDE6',
  },
});

export default styles;