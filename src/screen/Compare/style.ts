import { StyleSheet } from 'react-native';

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
    backgroundColor: '#FFFFFF',
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
  compareSection: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
  compareTitle: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#2C3440',
    marginBottom: 12,
  },
  compareCard: {
    backgroundColor: '#0B0F20',
    borderRadius: 16,
    padding: 16,
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
    paddingHorizontal: 12,
    paddingVertical: 12,
    gap: 10,
    borderWidth: 1,
    borderColor: '#C8C8C8',
  },
  dropdownContainerFirst: {
    borderTopStartRadius: 12,
    borderTopEndRadius: 12,
  },
  dropdownContainerLast: {
    borderBottomStartRadius: 12,
    borderBottomEndRadius: 12,
  },
  iconBox: {
    width: 26,
    height: 26,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#C8C8C8',
    backgroundColor: 'transparent',
  },
  dropdownContent: {
    flex: 1,
  },
  dropdownText: {
    fontSize: 17,
    fontWeight: '500',
    fontFamily: 'InstrumentSans-Medium',
    color: '#000000',
  },
  dropdownPlaceholder: {
    color: '#9CA3AF',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  addIconCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#00897B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'InstrumentSans-Medium',
    color: '#7E8A93',
  },
  compareButton: {
    backgroundColor: '#00897B',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  compareButtonText: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#FFFFFF',
  },
  leaderboardSection: {
    paddingHorizontal: 20,
    marginTop: 32,
    paddingBottom: 20,
  },
  leaderboardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  leaderboardTitle: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#2C3440',
  },
  WrapListFilter: {
    backgroundColor: '#EEF0F4',
    padding: 10,
    borderRadius: 22,
  },
  WarpSearchFirm: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 12,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF0F4',
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'InstrumentSans-Regular',
    color: '#0B0F20',
    marginLeft: 12,
  },
  firmCard: {
    backgroundColor: '#F7F8FA',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  firmCardLast: {
    marginBottom: 0,
  },
  firmLeft: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  firmIconBox: {
    width: 38,
    height: 38,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    backgroundColor: 'transparent',
  },
  firmInfo: {
    flex: 1,
  },
  firmName: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#0B0F20',
    marginBottom: 4,
  },
  firmMeta: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'InstrumentSans-Regular',
    color: '#4E5D66',
  },
  firmStats: {
    flexDirection: 'row',
    gap: 16,
  },
  statItem: {
    flex: 1,
  },
  statLabel: {
    fontSize: 11,
    fontWeight: '400',
    fontFamily: 'InstrumentSans-Regular',
    color: '#4E5D66',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 13,
    fontWeight: '600',
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#0B0F20',
  },
  firmRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rankNumber: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#0B0F20',
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#00897B',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 7,
  },
  actionButtonPinned: {
    backgroundColor: '#00897b1e',
    borderWidth: 0,
  },
  actionButtonText: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'InstrumentSans-Medium',
    color: '#00897B',
  },
  actionButtonTextPinned: {
    color: '#00897B',
  },
  pinnedIconContainer: {
    transform: [{ rotate: '45deg' }],
  },
  unpinnedIconContainer: {
    transform: [{ rotate: '45deg' }],
  },
  separator: {
    width: 1.5,
    backgroundColor: '#D3D3D3',
  },
});

export default styles;