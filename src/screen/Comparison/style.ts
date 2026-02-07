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
    fontWeight: '600',
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
    fontSize: 14,
    fontFamily: 'InstrumentSans-Medium',
    fontWeight: '500',
    color: '#1A1A1A',
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 4,
    marginRight: 24,
  },
  tabActive: {
    borderBottomWidth: 2,
    borderBottomColor: '#00897B',
  },
  tabText: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-Medium',
    fontWeight: '500',
    color: '#757575',
  },
  tabTextActive: {
    color: '#00897B',
  },
  scrollView: {
    flex: 1,
  },
  contentSection: {
    paddingBottom: 100,
  },
  sectionHeader: {
    fontSize: 12,
    fontFamily: 'InstrumentSans-Regular',
    fontWeight: '400',
    color: '#757575',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FAFAFA',
  },
  comparisonRow: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  metricTitle: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-Medium',
    fontWeight: '500',
    color: '#1A1A1A',
    marginBottom: 12,
  },
  valueRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
  },
  firmLabel: {
    fontSize: 13,
    fontFamily: 'InstrumentSans-Medium',
    fontWeight: '500',
    color: '#1A1A1A',
  },
  valueText: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-SemiBold',
    fontWeight: '600',
    color: '#1A1A1A',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
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
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default styles;