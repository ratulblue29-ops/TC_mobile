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
    backgroundColor: '#FFFFFF',
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
  headerSpacer: {
    width: 24,
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
    fontFamily: 'InstrumentSans-Medium',
    color: '#4E5D66',
    marginBottom: 4,
  },
  accountNumber: {
    fontSize: 18,
    fontFamily: 'InstrumentSans-Bold',
    color: '#0B0F20',
  },
  accountActions: {
    flexDirection: 'row',
    gap: 12,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  sectionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#00000023',
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#AAB3BA',
    marginBottom: 16,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  iconWrapper: {
    marginRight: 12,
  },
  itemContent: {
    flex: 1,
    marginRight: 12,
  },
  itemLabel: {
    fontSize: 18,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#0B0F20',
    marginBottom: 4,
  },
  itemDescription: {
    fontSize: 15,
    fontFamily: 'InstrumentSans-Regular',
    color: '#4E5D66',
  },
  percentageValue: {
    fontSize: 16,
    fontFamily: 'InstrumentSans-Regular',
    color: '#9E9E9E',
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
    backgroundColor: '#00897B',
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