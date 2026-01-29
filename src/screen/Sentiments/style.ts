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
    backgroundColor: '#E6EAED',
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF0F4',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  searchInput: {
    flex: 1,
    color: '#212121',
    marginHorizontal: 12,
    fontSize: 16,
    fontFamily: 'InstrumentSans-Regular',
    fontWeight: '400',
  },
  categoryScroll: {
    marginBottom: 20,
  },
  categoryContainer: {
    paddingHorizontal: 20,
    gap: 12,
  },
  categoryPill: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#0000001c',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'InstrumentSans-Regular',
    color: '#757575',
  },
  categoryTextActive: {
    fontWeight: '600',
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#00897B',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#0B0F20',
    paddingHorizontal: 20,
    marginBottom: 16,
    marginHorizontal: 20,
  },
  instrumentCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#0000001c',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  symbolText: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#0B0F20',
  },
  sentimentBadge: {
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  sentimentBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'InstrumentSans-SemiBold',
    textTransform: 'uppercase',
  },
  cardMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  metaText: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'InstrumentSans-Regular',
    color: '#757575',
  },
  metaDot: {
    fontSize: 14,
    color: '#757575',
    marginHorizontal: 8,
  },
  sentimentBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sentimentPercentage: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'InstrumentSans-Medium',
    color: '#212121',
    minWidth: '15%',
  },
  sentimentBar: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 12,
    backgroundColor: '#F4F4F4',
    padding: 5,
    borderRadius: 22,
  },
  dashContainer: {
    flexDirection: 'row',
    gap: 7,
  },
  dashContainerRed: {
    marginLeft: 7,
  },
  dash: {
    width: 12,
    height: 6,
    borderRadius: 1,
  },
  dashBearish: {
    backgroundColor: '#F44336',
    borderRadius: 22,
  },
  dashBullish: {
    backgroundColor: '#4CAF50',
    borderRadius: 22,
  },
  cardActions: {
    flexDirection: 'row',
    gap: 12,
  },
  analyzeButton: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#00897B',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  analyzeButtonText: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'InstrumentSans-Medium',
    color: '#00897B',
  },
  detailsButton: {
    flex: 1,
    backgroundColor: '#00897B',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsButtonText: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'InstrumentSans-Medium',
    color: '#FFFFFF',
  },
});

export default styles;