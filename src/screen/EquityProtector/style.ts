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
    fontWeight: '600',
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
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'InstrumentSans-Regular',
    color: '#757575',
    marginBottom: 4,
  },
  accountNumber: {
    fontSize: 20,
    fontFamily: 'InstrumentSans-Bold',
    color: '#0B0F20',
  },
  accountActions: {
    flexDirection: 'row',
    gap: 12,
  },
});

export default styles;